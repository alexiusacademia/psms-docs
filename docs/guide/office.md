# Office settings and subscription

**Office → Settings** is for **Account Holders**.

![Office settings](/screens/settings.jpg)

## Location and contact

Every office has an address (street or building, city or municipality, province), an office phone, an office email and a
contact person with their position. You enter these when registering, and can change them any time with **Edit** on the
**Location and contact** card.

Offices registered before these were required are asked to fill them in once: the next time an **Account Holder** signs
in, PSMS opens the **Office details** form first. The rest of the team isn't interrupted and can keep working while this
is pending.

## Subscription

The top of the page shows your plan (monthly or yearly), the **next renewal date** and your office's provinces.
The renewal date also appears in the sidebar, and turns amber once it has passed.

- A new office gets a **30-day free trial** from registration.
- **Reminders by email:** the office's **Account Holders** and the **office email** (from
  [Location and contact](#location-and-contact)) get an email **7 days before** the renewal date and again **the day
  before**, and a notice if the office becomes inactive. Reply to any of them to renew. Make sure each Account Holder
  has an email address on their account (**Office → Users**), or they won't get these.
- If the renewal date passes without renewal, the office becomes **inactive** the next day. Users can still sign in but see a
  notice instead of their data. **Nothing is deleted**; everything comes back as soon as the office is renewed.
- To renew, or to change your plan or provinces, contact the PSMS administrator. Renewing adds one period (30 days for
  monthly, 365 for yearly) from today or from the current renewal date, whichever is later.

## Regional access

A [regional account](/guide/regional) (for example your regional office) can see your office's data, **view
only**, once an Account Holder approves it. When one asks, the Account Holders and the office email get an email,
and the dashboard shows the request. Review it under **Settings → Regional access**:

- **Approve** shares your office's data with that account. **Decline** refuses.
- **Remove access** stops sharing at once. You can approve again later.
- The account can never change anything, and can't see your users, activity log or settings.
- Each time it opens your office, it shows in your activity log.

## Report and email settings

- **Revised expiry from time extensions.** *Off* (default): a contract's revised expiry is the original expiry plus the
  days it was suspended. *On*: the original expiry plus approved time extensions. Both dates are always shown on the
  contract page; this setting decides which one reports call "revised expiry".
- **Show summary rows in reports.** Shows the summary figures above report tables and adds totals rows to Excel exports.
- **Weekly email digest.** *On* (default): every Monday at 7:00 AM, the office's Account Holders get an email listing
  the contracts that need attention. See [Weekly digest](#weekly-digest). Turn it off to stop these emails for everyone
  in the office.

## Weekly digest

Each Monday morning, Account Holders get one email per office with:

- **Became overdue this week:** contracts that passed their revised expiry in the last 7 days without being completed.
- **Falling further behind:** ongoing contracts behind schedule whose slippage got at least 1 percentage point worse
  since the week before.
- **Expiring in the next 30 days:** contracts whose revised expiry is coming up.
- **No accomplishment entered in 30+ days:** ongoing contracts, still within their contract time, that nobody has
  updated for a month, so their figures may be out of date.

Contracts more than 90 days past their expiry that never reached 100% aren't listed one by one. Usually the work was
finished but the final accomplishment was never recorded. The digest adds one line with how many there are and a link
to the overdue contracts, so you can close them out.

Each contract has a link to its page. If nothing needs attention that week, no email is sent. Like the dashboard, the
digest leaves out work done by administration. It goes only to Account Holders who have an email address on their
account.

