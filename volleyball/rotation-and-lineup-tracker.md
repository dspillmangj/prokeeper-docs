# Volleyball Rotation & Lineup Tracker

ProKeeper manages the 6-position court rotation and automatically shifts players on side-outs.

---

## 6-Position Court Diagram

```
         NET / OPPONENT SIDE
---------------------------------------
   [ Pos 4: Left Front ]   [ Pos 3: Middle Front ]   [ Pos 2: Right Front ]
---------------------------------------
   [ Pos 5: Left Back ]    [ Pos 6: Middle Back ]    [ Pos 1: Right Back (Server) ]
---------------------------------------
```

---

## Automatic Side-Out Rotation

* When the receiving team wins a point, a **Side-Out** occurs.
* The winning team gains the serve and immediately rotates 1 position clockwise:
  $$\text{Pos 1} \to \text{Pos 6} \to \text{Pos 5} \to \text{Pos 4} \to \text{Pos 3} \to \text{Pos 2} \to \text{Pos 1}$$
* The player landing in **Position 1** becomes the active server.
* ProKeeper calculates this in the background, updating the visual court display in real time.
