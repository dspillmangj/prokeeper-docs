# Live Scoreboard Display

ProKeeper provides high-definition, auto-synchronizing live scoreboard displays for fans, parents, and remote viewers.

---

## Accessing the Live Display

* **Public URL**: `https://app.prokeeper.org/live/{access_code}`
* **Custom Slug URL**: `https://app.prokeeper.org/live/{team-slug-vs-team-slug}`
* No account creation or login required for public spectators.

---

## Live Synchronization Engine

* Built with lightweight reactive polling (`wire:poll.3000ms`) and event broadcasting.
* Automatically updates scores, running clock, period demarcations, team fouls, timeouts remaining, and possession arrows within seconds of the operator recording a play.

---

## Key Views & Features

1. **Broadcast Score Strip**: Full-width team scoreboard with primary team colors and glowing score indicators.
2. **Period Scoring Breakdown**: Quarter-by-quarter / set-by-set breakdown.
3. **Top Performers**: Leading scorers, rebounders, playmakers, and hitters automatically highlighted.
4. **Live Play-by-Play Stream**: Chronological feed of all made baskets, turnovers, fouls, and substitutions.
