# Front-End Design Source of Truth

When working on any front-end UI for this project, **always** fetch the latest design
from the Stitch project before generating or modifying screens:

  Stitch Project: `projects/16108541202813000316`
  URL: https://stitch.withgoogle.com/projects/16108541202813000316
  Title: DRKCP - Institutional Homepage

## Final Pages (ready for export & deployment)

These four screens are the approved, final designs. Always reference these when building:

| Page | Screen ID |
|------|-----------|
| DRKCP - Homepage with Affiliations | `6cdff13b40e14daaa6a22970ba92d075` |
| Faculty & Leadership - D.R. Karigowda College of Pharmacy | `ccafeb8cb698451f91c269c4720e64dd` |
| Academics & Careers - D.R. Karigowda College of Pharmacy | `dd76073bf6f24adfbab2a14568a802cf` |
| Campus Life & Support - D.R. Karigowda College of Pharmacy | `e179236490b546baa4e9aab42e7ce71e` |

To fetch any of these, use:
`mcp__stitch__get_screen` with name `projects/16108541202813000316/screens/{screen_id}`

## Required workflow

1. **Before creating or editing any UI screen**, use the Stitch MCP tools to pull the
   current design context:
   - `mcp__stitch__get_project` with name `projects/16108541202813000316` to get the
     design system, theme, and screen layout.
   - `mcp__stitch__list_screens` with parent `projects/16108541202813000316` to
     enumerate all available screens.
   - `mcp__stitch__get_screen` to fetch the specific screen being implemented.

2. **Follow the design system** ("The Clinical Curator") defined in the project,
   including:
   - Color palette (Deep Navy #1A237E, Clinical Teal #008080, surfaces, etc.)
   - Typography (Playfair Display for display/headline, Inter for body/labels)
   - The "No-Line" rule (no 1px solid borders; use tonal shifts and spacing)
   - Glassmorphism and ambient shadow conventions
   - Component specifications (buttons, cards, inputs, institutional components)

3. **Match the Stitch screens pixel-for-pixel** whenever a corresponding screen exists
   in the project. Do not invent new layouts when a design already exists.

4. When generating new screens or components not yet in Stitch, propose them using
   `mcp__stitch__generate_screen_from_text` against this project so designs stay
   centralized.
