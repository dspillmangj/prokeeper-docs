# Team & Roster Management

Organize your athletes into sports programs, grade levels, and uniform designations.

---

## Creating a Team

1. Navigate to **Teams & Rosters** in the main navigation.
2. Click **Create New Team**.
3. Supply the following fields:
   * **Team Name**: Full name displayed on banners (e.g. *LCA Eagles Varsity*).
   * **Short Name**: 3 to 8 character abbreviation for scoreboards (e.g. *EAGLES*).
   * **Sport**: Basketball or Volleyball.
   * **Gender**: Boys, Girls, or Co-ed.
   * **Competition Level**: Varsity, Junior Varsity (JV), Freshman, Middle School, or Club.
   * **Season**: Active academic season (e.g. *2026-2027*).

---

## Adding Players & Uniform Numbers

Each athlete in a roster possesses:
* **First & Last Name**: Displayed in box scores and play logs.
* **Jersey Number**: 1 to 3 digit number (e.g., `0`, `00`, `1`, `23`, `55`). Must be unique per team roster.
* **Position**:
  * Basketball: `PG` (Point Guard), `SG` (Shooting Guard), `SF` (Small Forward), `PF` (Power Forward), `C` (Center).
  * Volleyball: `OH` (Outside Hitter), `MB` (Middle Blocker), `S` (Setter), `OPP` (Opposite), `L` (Libero), `DS` (Defensive Specialist).
* **Starting Status**: Pre-populates the 5 on-court starters for basketball or 6 court positions for volleyball when a game starts.

---

## Quick Roster Import / CSV

You can bulk import player rosters via CSV format:
```csv
first_name,last_name,jersey_number,position,is_starter
Caleb,Johnson,23,SG,1
Marcus,Rivers,11,PG,1
Ethan,Wright,33,C,1
David,Spillman,05,SF,1
Jordan,Miller,14,PF,1
```
