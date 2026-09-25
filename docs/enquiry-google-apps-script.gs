// Paste this entire file into Code.gs in the separate DRKCP Enquiries project.
// Never replace another college's Apps Script. Set ENQUIRY_SCRIPT_SECRET in Script properties.
const SHEET_ID = '12j_Rs6qbmOdJ_YgvaNf9gChZbgCbBUzm-mG-0EtNHTM';
const TAB = 'DRKCP';
const INSTITUTION = 'DRKCP';
const LABEL = 'D.R. Karigowda College of Pharmacy';
const PROTOCOL = 2;
const HEADERS = ['Date & Time', 'Institution', 'Name', 'Email Address', 'Phone Number', 'Subject', 'Message', 'Submission Receipt', 'Status', 'Notes'];
const SUBJECTS = { admissions: 'Admissions Inquiry', academics: 'Academic Programs', campus: 'Campus Visit', placement: 'Placement & Careers', other: 'Other' };
const FIELDS = ['name', 'phone', 'email', 'subject', 'message'];

function doPost(e) {
  const reply = code => ContentService.createTextOutput(JSON.stringify({
    ok: code === 'SAVED', code, protocol: PROTOCOL, institution: INSTITUTION
  })).setMimeType(ContentService.MimeType.JSON);
  let lock;
  try {
    if (!e || !e.postData || typeof e.postData.contents !== 'string' || e.postData.contents.length > 24000) return reply('VALIDATION');
    let data;
    try { data = JSON.parse(e.postData.contents); } catch (_) { return reply('VALIDATION'); }
    if (!data || typeof data !== 'object' || Array.isArray(data)) return reply('VALIDATION');
    const secret = PropertiesService.getScriptProperties().getProperty('ENQUIRY_SCRIPT_SECRET');
    if (!secret || data.secret !== secret) return reply('AUTH');
    if (data.institution !== INSTITUTION) return reply('INSTITUTION');
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(TAB);
    if (!sheet) return reply('SHEET');
    const validateSheet = () => {
      if (sheet.getMaxColumns() < HEADERS.length) return false;
      const headings = sheet.getRange(1, 1, 1, HEADERS.length).getDisplayValues()[0];
      return HEADERS.every((heading, index) => headings[index] === heading);
    };
    if (!validateSheet()) return reply('HEADERS');
    const found = receipt => sheet.getLastRow() > 1 && sheet.getRange(2, 8, sheet.getLastRow() - 1, 1)
      .createTextFinder(receipt).matchEntireCell(true).useRegularExpression(false).findNext();
    if (typeof data.receipt !== 'string' || !/^[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}:[A-Za-z0-9_-]{43}$/.test(data.receipt)) return reply('INVALID_RECEIPT');
    if (data.action === 'status') return reply(found(data.receipt) ? 'SAVED' : 'NOT_FOUND');
    if (data.action !== 'submit') return reply('ACTION');
    if (FIELDS.some(key => typeof data[key] !== 'string') || !data.name.trim() || data.name.length > 120 ||
        !/^[0-9]{10}$/.test(data.phone) || data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
        !Object.prototype.hasOwnProperty.call(SUBJECTS, data.subject) || !data.message.trim() || data.message.length > 3000) return reply('VALIDATION');
    const digest = value => Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8)).replace(/=+$/, '');
    if (data.receipt.split(':')[1] !== digest(JSON.stringify(FIELDS.map(key => data[key])))) return reply('INVALID_RECEIPT');
    lock = LockService.getScriptLock();
    lock.waitLock(10000);
    if (!validateSheet()) return reply('HEADERS');
    if (found(data.receipt)) return reply('SAVED');
    const now = new Date();
    // Check phone cooldown under the same lock as the append.
    if (sheet.getLastRow() > 1) {
      const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, 5).getValues();
      if (rows.some(row => String(row[4]) === data.phone && row[0] instanceof Date && now.getTime() - row[0].getTime() < 60000)) return reply('RATE_LIMIT');
    }
    // Leading apostrophes make all submitted strings literal cells, including formula-like input.
    const literal = value => value === '' ? '' : "'" + value;
    const row = [LABEL, data.name, data.email, data.phone, SUBJECTS[data.subject], data.message].map(literal);
    if (sheet.getLastRow() === sheet.getMaxRows()) sheet.insertRowsAfter(sheet.getMaxRows(), 1);
    const rowIndex = sheet.getLastRow() + 1;
    sheet.getRange(rowIndex, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    sheet.getRange(rowIndex, 1, 1, HEADERS.length).setValues([[now, ...row, data.receipt, '', '']]);
    SpreadsheetApp.flush();
    return reply('SAVED');
  } catch (_) {
    // The append may have succeeded even if its acknowledgement was lost.
    return reply('UNKNOWN');
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}
