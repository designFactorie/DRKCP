import { useState } from 'react'
import faculty from './faculty-data.json'

const departments = [...new Set(faculty.map((person) => person.department))]
const pageSize = 8

export default function FacultyDirectory() {
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('')
  const [page, setPage] = useState(0)
  const filtered = faculty.filter((person) => (!department || person.department === department) && `${person.name} ${person.department} ${person.title}`.toLowerCase().includes(query.trim().toLowerCase()))
  const pages = Math.ceil(filtered.length / pageSize)
  const visible = filtered.slice(page * pageSize, (page + 1) * pageSize)

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div><label htmlFor="faculty-search" className="block text-sm font-semibold text-primary mb-2">Search faculty</label><input id="faculty-search" type="search" value={query} onChange={(event) => { setQuery(event.target.value); setPage(0) }} placeholder="Name, department or designation" className="w-full rounded-lg bg-white px-4 py-3 shadow-sm" /></div>
        <div><label htmlFor="faculty-department" className="block text-sm font-semibold text-primary mb-2">Department</label><select id="faculty-department" value={department} onChange={(event) => { setDepartment(event.target.value); setPage(0) }} className="w-full rounded-lg bg-white px-4 py-3 shadow-sm"><option value="">All departments</option>{departments.map((item) => <option key={item}>{item}</option>)}</select></div>
      </div>
      <div className="hidden md:block overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full text-left">
          <caption className="sr-only">Academic faculty directory</caption>
          <thead className="bg-primary text-white"><tr>{['Name', 'Department', 'Designation'].map((title) => <th key={title} scope="col" className="px-5 py-4 font-semibold">{title}</th>)}</tr></thead>
          <tbody className="divide-y divide-surface-container">{visible.map((person) => <tr key={person.number}><th scope="row" className="px-5 py-3 font-medium text-primary">{person.name}</th><td className="px-5 py-3 text-sm">{person.department}</td><td className="px-5 py-3 text-sm">{person.title}</td></tr>)}</tbody>
        </table>
      </div>
      <ul className="md:hidden grid gap-3">{visible.map((person) => <li key={person.number} className="bg-white rounded-lg p-4"><h3 className="font-semibold text-primary">{person.name}</h3><p className="text-sm text-secondary mt-1">{person.title}</p><p className="text-sm text-on-surface-variant mt-1">{person.department}</p></li>)}</ul>
      {!filtered.length && <p role="status" className="rounded-lg bg-white p-6 text-center">No faculty match your search. Try another name or department.</p>}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
        <p className="text-sm text-on-surface-variant" aria-live="polite">{filtered.length ? `${page * pageSize + 1}–${Math.min((page + 1) * pageSize, filtered.length)} of ${filtered.length} faculty` : '0 faculty'}</p>
        {pages > 1 && <div className="flex items-center gap-3"><button type="button" disabled={page === 0} onClick={() => setPage(page - 1)} className="px-4 py-3 rounded-lg bg-white text-primary shadow-sm disabled:opacity-40">Previous</button><span className="text-sm">{page + 1} / {pages}</span><button type="button" disabled={page + 1 === pages} onClick={() => setPage(page + 1)} className="px-4 py-3 rounded-lg bg-primary text-white disabled:opacity-40">Next</button></div>}
      </div>
    </div>
  )
}
