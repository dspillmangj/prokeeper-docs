# Volleyball Stat Definitions

ProKeeper implements standard collegiate and high school volleyball statistics as established by standard AVCA and athletic association guidelines.

---

## Attacking Statistics

* **Kill (K)**: An attack that results directly in an immediate point (untouchable ball, out-of-bounds off defender, or floor hit).
* **Attack Error (E)**: An attack attempt hit out of bounds, into the net, blocked for a point by the opponent, or an illegal attack violation.
* **Total Attack Attempts (TA)**: Sum of all Kills, Errors, and Zero Attacks (attacks kept in play).
* **Hitting Percentage (Hit %)**:
  $$\text{Hitting \%} = \frac{\text{Kills} - \text{Attack Errors}}{\text{Total Attempts}}$$

---

## Serving & Defense

* **Service Ace (A)**: A serve that lands directly in the opponent's court untouched or is shanked immediately on the first pass resulting in a point.
* **Service Error (S)**: A serve that fails to clear the net, lands out of bounds, or incurs a foot fault.
* **Dig (D)**: Passing a spiked or hard-driven attack from the opponent, keeping the ball in play.

---

## Blocking

* **Solo Block (BS)**: A single player blocking an attack to the opponent's floor for an immediate point (+1 pt).
* **Block Assist (BA)**: Two or three players jumping together to block an attack. Each participating blocker is credited with a Block Assist (0.5 block each).
* **Total Blocks**: $\text{Total Blocks} = \text{Solo Blocks} + (0.5 \times \text{Block Assists})$.

---

## Setting & Ball Handling

* **Set Assist (Z / AST)**: A pass or set that directly leads to a teammate's Kill.
* **Ball Handling Error (BHE / H)**: A double contact, lift, thrown ball, or illegal set call by the official.
* **Reception Error (RE / R)**: Credited to a receiver when an opponent's serve results directly in an ace.
