# Basketball Fast Entry Syntax

The ProKeeper Rapid Stat Entry engine enables statisticians to record every basketball event in real time without touching the mouse.

---

## The Syntax Standard

Every command is constructed with three distinct parts:

$$\text{<Jersey Number>} + \text{<Team Indicator>} + \text{<Action Code>}$$

```
23-X     -> Home Team #23 made a 2-point shot
11=M     -> Away Team #11 made a 3-point shot
33-D     -> Home Team #33 grabbed a defensive rebound
14=F     -> Away Team #14 committed a personal foul
```

---

## 1. Jersey Number
* Enter the 1 to 3 digit jersey number of the player (e.g., `0`, `00`, `3`, `23`, `44`).
* Case-insensitive. Leading zeros are preserved.

---

## 2. Team Indicator

| Symbol | Team Designation | Key Position |
| :---: | :--- | :--- |
| `-` (Dash / Hyphen) | **Home Team** | Convenient right-hand top row |
| `=` (Equals) | **Away / Visiting Team** | Adjacent to dash on standard keyboards |

---

## 3. Action Codes

| Code | Statistical Action | Resulting Impact |
| :---: | :--- | :--- |
| `X` | **2-Point Made Field Goal** | +2 Home/Away points, +1 FGM, +1 FGA |
| `Z` | **2-Point Missed Field Goal** | +1 FGA (No points) |
| `M` | **3-Point Made Field Goal** | +3 Home/Away points, +1 3PM, +1 3PA, +1 FGM, +1 FGA |
| `N` | **3-Point Missed Field Goal** | +1 3PA, +1 FGA (No points) |
| `B` | **Free Throw Made** | +1 Home/Away point, +1 FTM, +1 FTA |
| `V` | **Free Throw Missed** | +1 FTA (No points) |
| `D` | **Defensive Rebound** | +1 DREB, switches possession arrow |
| `O` | **Offensive Rebound** | +1 OREB |
| `A` | **Assist** | +1 AST |
| `S` | **Steal** | +1 STL, switches possession arrow |
| `K` | **Block** | +1 BLK |
| `W` | **Swat / Deflection** | +1 SWAT (defensive touch) |
| `P` | **Passing Turnover** | +1 TO (Pass), switches possession |
| `U` | **Fumble Turnover** | +1 TO (Ball handling), switches possession |
| `I` | **Violation Turnover** | +1 TO (Travel/3-sec/5-sec/Backcourt) |
| `F` | **Personal Foul** | +1 PF, increments team fouls toward bonus |
| `R` | **Offensive Foul** | +1 OF (Player-control foul), switches possession |
| `T` | **Technical Foul** | +1 TF |
| `H` | **Forced / Drawn Foul** | +1 Drawn foul stat |

---

## Real-World Play Sequencing Examples

### Fastbreak 3-Pointer with Assist
1. Away turnover on bad pass: `24=P` + <kbd>Enter</kbd>
2. Home steal: `11-S` + <kbd>Enter</kbd>
3. Home assist: `11-A` + <kbd>Enter</kbd>
4. Home 3pt make: `23-M` + <kbd>Enter</kbd>

### Free Throw Trip (2 Shots)
1. Shooting foul on Away #34: `34=F` + <kbd>Enter</kbd>
2. Home #14 makes 1st FT: `14-B` + <kbd>Enter</kbd>
3. Home #14 misses 2nd FT: `14-V` + <kbd>Enter</kbd>
4. Away #50 defensive rebound: `50=D` + <kbd>Enter</kbd>
