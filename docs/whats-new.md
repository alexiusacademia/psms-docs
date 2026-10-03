# What's new in PSMS

In **September 2026** PSMS moved to a new, rebuilt version at **[app.psms.ph](https://app.psms.ph)**. All your offices,
users, projects, contracts and records were carried over, and your **username and password are unchanged**.

## Where things are now

| You used to… | Now |
|---|---|
| Open psms.ph | Open **app.psms.ph** (psms.ph forwards there) |
| Go to Contracts → a year → a contract | **Contracts**: one list with status chips, filters and search |
| Use the "Links" menu on a contract (Physical Schedule, Suspension/Resumption, …) | **Tabs** on the contract page |
| Open a separate page to add a record | Click the button; a **dialog** opens on the same page |
| Go to Settings for users and lists | **Office** (users, activity, settings) and **Setup** (lists) in the sidebar |
| Find things by browsing | Press **Ctrl K / ⌘ K** to search |

## Role names

| Old | New |
|---|---|
| Admin | **Account Holder** |
| Project Inspector | Project Inspector |
| Accounting Officer / Accounting Personnel | **Financial Encoder** |
| Engineering Personnel | Engineering Personnel: now has the same rights as Project Inspector, except adding contract documents |
| Viewer | Viewer: now strictly read-only |

See [Roles and permissions](/guide/roles).

## New

- **[Regional accounts](/guide/regional):** a regional office can follow several offices' contracts in one place,
  view only, once each office approves it under Settings.
- **[Import the schedule from Excel](/guide/contracts#importing-the-schedule-from-excel):** fill in an Excel sheet
  (or paste two columns) to enter a contract's whole planned S-curve at once.
- **Zoom the S-curve:** zoom in on a period of a contract's S-curve and drag to move along it.
- **[Contract documents](/guide/contracts#documents):** keep the notice to proceed, orders, billings, reports and
  certificates on the contract's **Documents** tab, and attach files to a variation order, time extension or
  suspension.
- **[Site photos](/guide/contracts#photos):** add photos to a contract or an accomplishment entry, and set the map pin
  from where a photo was taken.
- **[Weekly digest](/guide/office#weekly-digest):** a Monday email to Account Holders with the contracts that need attention.
- **Refreshed forum:** a cleaner layout, like and reply counts on each post, and old posts from the previous PSMS now
  show as plain text instead of raw formatting codes.
- **Renewal reminders:** Account Holders and the office email get an email a week and a day before the subscription is due.
- **[Map](/guide/map):** see every contract on a map, colored by status, and pin each contract's work site.
- **Sign in with an email link:** no password needed; PSMS emails you a one-time link.
- **Forgot password:** reset your own password by email from the sign-in page; no need to ask your Account Holder.
- **[Office location and contact details](/guide/office#location-and-contact):** every office now records its address,
  phone, email and contact person. Account Holders of existing offices are asked to fill them in once.
- **[Custom reports](/guide/custom-reports):** build and save your own contract and project reports with your choice of
  columns, filters, grouping and chart, and export them to Excel or PDF.
- A redesigned **dashboard** with status breakdown, overall S-curve and the contracts that need attention.
- **Team activity** calendars and a per-person activity page.
- **Time extensions** now count toward the contract time and have their own expiry date.
- **Contracts can be deleted** (this used to require a written request) and **contractors can be edited** (the old version didn't allow it).
- The **PPA report** now has an Excel download.
- Every report works **as of any date**, and every table report can be downloaded as Excel.

## Fixed

- **One way of calculating expiry dates.** The old version used slightly different formulas on different pages, so
  expiry dates could differ by a day. See [How the numbers are calculated](/calculations).
- **Suspensions** left open after a contract was completed no longer keep extending its dates.
- **Contracts shared by several projects** are no longer counted in full in every project.
- The **overall S-curve** now adds contracts together correctly.
- **Permissions** are now enforced everywhere, and each office's reports and downloads are private to it.
