# How the numbers are calculated

PSMS calculates every figure the same way on every page and report. This page explains each one in plain terms, with a
worked example: a **100-day** contract that **starts on January 1**, so day 1 is January 1.

## Days

- **Day 1 is the start date.** A date's day number is the number of days since the start, plus one.
- **Calendar days elapsed** = the as-of date's day number (0 before the contract starts).

## Expiry dates

| Date | Rule | Example |
|---|---|---|
| **Original expiry** | start + duration − 1 (the last day of the contract) | April 10 |
| **Expiry due to suspensions** | original expiry + days suspended | April 20, after 10 days suspended |
| **Expiry due to time extensions** | original expiry + approved time-extension days | April 25, after a 15-day extension |
| **Revised expiry** | one of the two above, chosen in [office settings](/guide/office#report-settings) (suspensions by default) | |

A contract is **overdue** when it isn't completed and the as-of date is after its revised expiry.

## Suspensions

- A suspension counts the days **from its effective date up to, but not including, its resume date.** Suspended on
  January 11 and resumed January 21 = **10 days**.
- A suspension that hasn't resumed counts up to the as-of date.
- If a contract is completed while a suspension is still open, the suspension ends at completion.

## Time elapsed

- **Contract time** = duration + approved time-extension days.
- **Contract time elapsed** = calendar days elapsed − days suspended.
- **% time elapsed** = contract time elapsed ÷ contract time. It stops increasing once the contract is completed.

## Target, actual and slippage

- **Target** (% work programmed) is read from the **schedule** at the **contract time elapsed**. Because suspended days
  are taken out, the plan pauses while work is suspended. That's the *revised plan* line on the S-curve.
- **Actual** (% work accomplished) is read from your **accomplishment entries** at the calendar days elapsed.
- Between two entries (or schedule points), PSMS draws a straight line; before the first it starts from 0% at day 0;
  after the last it stays level.
- **Slippage** = actual − target. Negative means behind schedule.

*Example:* with 50% planned at day 50 and 100% at day 100, suspended for 10 days, on day 30 the contract time elapsed is
20 days, so the target is **20%**. If 30% has been accomplished, the slippage is **+10%**.

## Completion and status

- A contract is **completed** on the date of its first accomplishment entry of **100%** (on or before the as-of date).
- After completion the target keeps moving with the calendar, so a finished contract ends at target 100%, actual 100%,
  slippage 0%.
- Status is **Not started** before the start date, **Completed** once completed, **Suspended** while a suspension is
  open, and **Ongoing** otherwise.

## Amounts

- **Revised amount** = the revised amount on the **latest variation order** effective on or before the as-of date;
  without variation orders it's the contract amount.
- **Value accomplished** = revised amount × actual %.
- **Billing %** = cumulative billing ÷ revised amount on the billing date.
- **Cost incurred to date** (PPA report) = the latest cumulative billing on or before the as-of date.

## Projects

- **Project accomplishment** = value accomplished by the project's contracts ÷ the project's **allocation**.
  **Project target** is the same with target % instead of actual.
- A contract shared by several projects counts toward each **in proportion to the projects' allocations**.
- **Obligated** = expenditures obligated on or before the as-of date; **disbursed** = expenditures disbursed on or before it.
- **Unobligated balance** = allocation − obligated. **Utilization** = obligated ÷ allocation.

## Totals across contracts

- **Overall accomplishment** (dashboard, report summaries) = total value accomplished ÷ total revised amount.
- **Overall S-curve**: each contract's revised-plan and actual curves, weighted by its share of the total revised
  amount, **added together** for each date.
- Contract totals and reports include contracts with a contractor and exclude work **by administration**.
