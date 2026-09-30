# Map

**Map** in the sidebar shows your office's contracts on a map, colored by how they're doing, so you can see at a glance
where work is behind or stopped.

![The contracts map](/screens/map.jpg)

## Reading the map

Each dot is a contract. Its color is its status as of the date at the top:

| Color | Meaning |
|---|---|
| <span class="dot" style="--dot:#dc2626"></span> **Red: Overdue** | Not completed and past its revised expiry date |
| <span class="dot" style="--dot:#f59e0b"></span> **Amber: Behind schedule** | Ongoing with negative slippage |
| <span class="dot" style="--dot:#7c3aed"></span> **Purple: Suspended** | Currently suspended |
| <span class="dot" style="--dot:#0284c7"></span> **Blue: On schedule** | Ongoing with zero or positive slippage |
| <span class="dot" style="--dot:#64748b"></span> **Grey: Not started** | Start date is still ahead |
| <span class="dot" style="--dot:#16a34a"></span> **Green: Completed** | 100% accomplished |

A contract that is overdue *and* suspended shows as overdue.

- **Solid dots** are contracts with a pin at the work site.
- **Pale dots with a dashed ring** are contracts without a pin. They're shown at the center of their project's
  municipality (or province), so they're only roughly placed and several may sit on top of each other.
- **Numbers in dark circles** are groups of nearby contracts. Click one, or zoom in, to spread them out. A **red ring**
  around a group means at least one of them is overdue.

Click a dot to see the contract's number, description, contractor, location, actual and target accomplishment and
slippage, with a link to its page.

Switch between **Streets** and **Satellite** with the layers button at the top right of the map.

## Filtering

- Across the top: **implementation year**, **fund source**, **contractor** and the **as of** date. Status is worked
  out as of that date.
- **Show** on the right turns each status on or off. **Completed** contracts are hidden at first because they add up
  over the years; tick it to see them. **Needs attention** shows only overdue, behind-schedule and suspended contracts.
- **Find a contract** searches by number or description; click a result to zoom to it and open its details.

## Setting a contract's location

Anyone who can edit contracts (Account Holders, Project Inspectors and Engineering Personnel) can set a pin: open the
contract, choose **Edit contract** from the **▾** menu, and use **Location on the map** at the bottom of the form.

- **Click the map** to drop the pin, then drag it to adjust. The map starts on satellite view at the project's
  municipality.
- **Use my current location** sets the pin where you are. Handy when you're at the site with your phone.
- Or **type the latitude and longitude**, or paste both at once (for example `15.2890, 120.0247` copied from Google
  Maps) into either box.
- **Remove pin** puts the contract back at its municipality's center.
- Or set it from a **site photo** taken at the site with location turned on: see
  [Photos](/guide/contracts#photos).

PSMS checks that the point is in the Philippines and warns you if latitude and longitude look swapped.

::: tip Where to put the pin
Put it where the work is: the dam, the pump station, or the middle of the canal section being built. For long canal or
road work, the midpoint is fine.
:::

## On the dashboard

The dashboard's **Where attention is needed** card shows only the year's overdue, behind-schedule and suspended
contracts. **Open map** takes you to the full map for the same year.
