# Substitutions & Automated Playing Time

ProKeeper automatically computes exact player minutes and seconds based on game clock progression and substitution events.

---

## 5-Player Lineup Tracking

* At all times during a game, exactly 5 players per team are marked as active on court.
* When the game begins, the 5 designated **Starters** are placed on the court with their substitution clock set to the period start time.

---

## Automated Playing Time Calculation

$$\text{Playing Time} = \sum (\text{Sub-In Clock Seconds} - \text{Sub-Out Clock Seconds})$$

1. When a player enters the court, their `subbed_in_at_clock` is recorded (e.g., at 7:30 remaining = 450 seconds).
2. When the player leaves the court via substitution or period end (e.g., at 2:15 remaining = 135 seconds), the difference ($450 - 135 = 315\text{ seconds} = 5\text{m }15\text{s}$) is added to their cumulative playing time.
3. This guarantees precision without manual stopwatch tracking.

---

## Substitution Interface

* **Keyboard Sub Syntax**: `SUB <home|away> <OutJersey>-><InJersey>`
* **Visual Sub Modal**: Click the `+ Sub Player` button on either team card to open a quick modal selector.
