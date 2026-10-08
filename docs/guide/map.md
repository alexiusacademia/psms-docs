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

- **Solid dots** are a contract's **work sites**. A contract with several sites (for example a dam and a canal
  section) shows a dot at each.
- **Pale dots with a dashed ring** are contracts without sites. They're shown at the center of their project's
  municipality (or province), so they're only roughly placed and several may sit on top of each other.
- **Numbers in dark circles** are groups of nearby contracts. Click one, or zoom in, to spread them out. A **red ring**
  around a group means at least one of them is overdue.

Click a dot to see the contract's number and the site's description, the contract's description, contractor,
location, actual and target accomplishment and slippage, with a link to its page. The status counts under **Show**
count each contract once, however many sites it has.

Switch between **Streets** and **Satellite** with the layers button at the top right of the map.

## Filtering

- Across the top: **implementation year**, **fund source**, **contractor** and the **as of** date. Status is worked
  out as of that date.
- **Show** on the right turns each status on or off. **Completed** contracts are hidden at first because they add up
  over the years; tick it to see them. **Needs attention** shows only overdue, behind-schedule and suspended contracts.
- **Find a contract** searches by number, description or site; click a result to zoom to it and open its details.

## Adding a contract's sites

A contract can have **one or several work sites**, each with a description, for example *Pump house* and
*Lateral A, Sta. 0+000 to 1+200*. Anyone who can edit contracts (Account Holders, Project Inspectors and Engineering
Personnel) can add them under **Sites** on the contract's page, with **Add site**:

- **Describe the site.** Every site needs a description; it shows on the maps.
- **Click the map** to drop the pin, then drag it to adjust. The map starts on satellite view at the project's
  municipality, or at the contract's other sites (grey dots).
- **Use my current location** puts the pin where you are. Handy when you're at the site with your phone.
- Or **type the latitude and longitude**, or paste both at once (for example `15.2890, 120.0247` copied from Google
  Maps) into either box.
- Use the pencil to move or rename a site, and the bin to remove it. A contract with no sites goes back to its
  municipality's center.
- Or add one from a **site photo** taken there with location turned on: see [Photos](/guide/contracts#photos).

PSMS checks that the point is in the Philippines and warns you if latitude and longitude look swapped.

::: tip Where to put sites
Put each where the work is: the dam, the pump station, or a canal section being built. For a long canal or road,
add a site per section, or one at its midpoint.
:::

## On the dashboard

The dashboard's **Where attention is needed** card shows only the year's overdue, behind-schedule and suspended
contracts. **Open map** takes you to the full map for the same year.
