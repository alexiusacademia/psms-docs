# Contracts

## The contracts list

**Contracts** in the sidebar lists every contract with its progress, slippage and status.

![The contracts list](/screens/contracts-list.jpg)

- **Status chips** (Active, Ongoing, Suspended, Completed, Not started, Behind schedule, Overdue) filter the list in one click.
- **Search and filters** narrow by contract number, description, contractor, project, year, contractor or project-in-charge.
- **Progress** bars show actual accomplishment, with a small mark at the target. The bar is amber when the contract is behind.
- Click any row to open the contract.

Statuses:

| Status | Meaning |
|---|---|
| **Not started** | Today is before the start date |
| **Ongoing** | Started and not yet 100% |
| **Suspended** | Work is suspended and hasn't resumed |
| **Completed** | An accomplishment entry of 100% has been recorded |
| **Overdue** (extra badge) | Not completed and past the revised expiry date |

## Adding a contract

**Account Holders, Project Inspectors and Engineering Personnel** click **New contract** (or **New contract** on a
project's page, which fills in the project).

- **Contract ID / number** must be unique within your office.
- **Projects:** usually one. Select several only when projects are clustered under one contract.
- **Contractor:** choose from the shared contractor list, or [add the contractor first](/guide/setup#contractors).
- **Project in charge:** the person monitoring the contract; defaults to you.
- **Amount**, **ABC**, **start date** (effectivity) and **duration** in calendar days; optional signing and notice dates and the contract document.
- **Location on the map** (optional): a pin at the work site, so the contract shows in the right place on the
  [Map](/guide/map#setting-a-contract-s-location). Without one it appears at its municipality's center.

## The contract page

![A contract page](/screens/contract-detail.jpg)

The header shows the status, contractor, location and project-in-charge, then four figures:
**accomplishment** (with target), **slippage**, **time elapsed** and **revised amount**. Change the **As of** date above
the chart to see the contract as it stood on another day.

The **S-curve** has three lines:

- **Original plan** (grey, dashed): the schedule you entered.
- **Revised plan** (amber): the original plan paused during suspensions. This is the target PSMS uses.
- **Actual** (blue): the accomplishment you've recorded.

The **Dates** panel lists the start, original expiry, expiry with suspensions and with time extensions, and the
completion date. **Summary** and **Timeline** open printable views with Excel export.

Below that, **tabs** hold the contract's records. The number on each tab is how many there are.

![The record tabs](/screens/contract-tabs.jpg)

### Schedule (planned accomplishment)

The planned cumulative % of work at key dates, the points of the original S-curve. Add a value for each milestone
(for example 3% at day 30, 50% at day 165, 100% at the end). Values are 0–100, one per date. Between points PSMS draws
straight lines.

### Accomplishment (actual)

Click **Record accomplishment** and enter the **cumulative** % of work done as of a date.

- The date can't be in the future.
- Values must be 0–100 and can't go down: an entry can't be lower than an earlier one or higher than a later one.
- You can't record accomplishment on a date when the contract is suspended.
- One entry per date; to correct an entry, edit it.
- Entries can be changed for a day; after that only an Account Holder can ([why](/guide/roles#the-one-day-rule)).

When an entry reaches **100%**, the contract becomes **Completed** on that date.

### Billings (financial accomplishment)

**Financial Encoders and Account Holders** record billings as **cumulative** amounts: the total billed so far,
not the amount of this billing. PSMS works out the % from the revised contract amount on the billing date.
You can attach the billing statement.

### Suspensions and resumes

When work is suspended, click **Suspend work** and enter the date and reason. The contract shows as **Suspended**, the
revised plan stops advancing, and each suspended day moves the expiry date by a day.

![A suspended contract](/screens/contract-suspended.jpg)

When work restarts, click **Resume** on the suspension and enter the resume date.

![Resuming work](/screens/suspensions-tab.jpg)

- A suspension can't start before the contract's start date, while it's already suspended, or after it was completed.
- The resume date must be on or after the suspension date, and before the next suspension.

### Variation orders

A variation order changes the contract amount. Enter the effective date and the **revised contract amount**; PSMS
numbers them automatically (VO 1, VO 2, …). From its effective date the latest order's amount **replaces** the
original amount in progress, billings and reports.

### Time extensions

Approved time extensions add days to the contract time. Enter the request and approval dates and the number of days.
They count from the approval date. Whether the **revised expiry** in reports uses suspensions or time extensions is an
[office setting](/guide/office#report-and-email-settings).

### Physical features

Measurable work items such as metres of canal lining or number of turnouts. Choose the item, the date and the
**cumulative** quantity. Quantities can't go down over time. The items themselves are set up under
[Setup → Physical features](/guide/setup#physical-features).

## Timeline and summary

- **Timeline** lists each suspension with the contract days used before it, days remaining, days suspended and resume date.
- **Summary** is the one-page contract status (the 14 standard items: contract time, effectivity, expiry dates, days
  elapsed and suspended, time extensions, % time elapsed, % accomplished, % programmed, % slippage) plus physical features.

Both have an **As of** date and an **Excel** download.

## Deleting a contract

**Account Holders, Project Inspectors and Engineering Personnel** can delete a contract: on the contract page, open the
**▾** menu next to **Timeline** and choose **Delete contract**, then confirm.

- The contract and all its records disappear from the contracts list, the dashboard and every report, but **nothing is
  erased**. If it was deleted by mistake, ask the PSMS administrator to restore it; it comes back with all its records.
- Its **contract number becomes free**, so you can add a corrected contract with the same number. (A contract that was
  deleted can't be restored while another contract uses its number.)
- The deletion is recorded in the [activity log](/guide/team#activity-log).

::: tip Deleting a single record instead
To remove one wrong entry (an accomplishment, a billing, a suspension...), use the trash icon on its row in the tabs.
These records are **erased for good**, except variation orders, which the administrator can restore. Accomplishment,
billing, variation order and physical feature entries can only be deleted within [one day](/guide/roles#the-one-day-rule)
of entering them, unless you're an Account Holder.
:::

