# Roles and permissions

Every user belongs to one office and has one or more **roles**. Everyone can **view** their office's data; roles decide
what you can **change**. The rules are enforced by the server, so a button you can't use is simply not shown.

| Role | Typical user | Can change |
|---|---|---|
| **Account Holder** | Division manager, office admin | Everything in the office, including users and settings |
| **Project Inspector** | Engineer, project-in-charge | Contracts and their field records |
| **Engineering Personnel** | Engineer | Same as Project Inspector |
| **Financial Encoder** | Accountant, budget officer | Project finance and contract billings |
| **Viewer** | Planning officer, management | Nothing (read-only) |

A user can hold several roles, for example Project Inspector **and** Financial Encoder.

## What each role can do

| | Account Holder | Project Inspector / Engineering Personnel | Financial Encoder | Viewer |
|---|:-:|:-:|:-:|:-:|
| View everything in the office, run reports, export Excel | ✓ | ✓ | ✓ | ✓ |
| Build, save and share custom reports | ✓ | ✓ | ✓ | ✓ |
| Projects: add, edit, delete | ✓ | | | |
| Project finance: expenditure sources, expenditures, requested cash | ✓ | | ✓ | |
| Contracts: add, edit, delete | ✓ | ✓ | | |
| Schedule, accomplishment, physical features | ✓ | ✓ | | |
| Suspensions and resumes, variation orders, time extensions | ✓ | ✓ | | |
| Billings (financial accomplishment) | ✓ | | ✓ | |
| Contractors | ✓ | ✓ | | |
| Systems, fund sources, expenditure source names, physical feature list | ✓ | | | |
| Users, office settings, activity log, team activity | ✓ | | | |
| Forum posts and replies; own password and activity | ✓ | ✓ | ✓ | ✓ |

## The one-day rule

Accomplishment entries, billings, variation orders and physical feature quantities can be **edited or deleted for one
day** after they are entered. After that, only an **Account Holder** can change them. This protects reported figures
from being changed quietly later.

## Changing someone's roles

Account Holders manage roles under **Office → Users** → pencil icon. See [Users and team activity](/guide/team).
