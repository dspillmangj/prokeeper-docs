# Database Schema & Entity Relationships

ProKeeper uses PostgreSQL as its primary database.

---

## Entity Relationship Overview

```
organizations
  ├── users (organization_id)
  ├── teams (organization_id)
  │     └── roster_players (team_id, player_id)
  ├── players (organization_id)
  └── games (organization_id)
        ├── game_lineups (game_id, player_id)
        ├── game_events (game_id, player_id)
        ├── basketball_stats (game_id, player_id)
        └── volleyball_stats (game_id, player_id)
```

---

## Core Tables

### `games`
* `id` (bigint, pk)
* `uuid` (uuid, unique)
* `access_code` (varchar(10), unique)
* `slug` (varchar, unique)
* `sport` (varchar: `basketball`, `volleyball`)
* `status` (varchar: `scheduled`, `in_progress`, `paused`, `final`)
* `home_score`, `away_score` (int)
* `clock_seconds_remaining` (int)
* `clock_running` (bool)
* `home_period_scores`, `away_period_scores` (json)

### `game_events`
* `id` (bigint, pk)
* `game_id` (foreignId to games)
* `sequence` (int)
* `period` (int)
* `clock_seconds_remaining` (int)
* `team_side` (varchar: `home`, `away`)
* `player_id` (foreignId to players)
* `jersey_number` (varchar(5))
* `action_code` (varchar(10))
* `action_type` (varchar(30))
* `points` (int)
* `is_undone` (bool)
