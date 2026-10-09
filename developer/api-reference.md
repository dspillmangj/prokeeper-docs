# API Reference

ProKeeper provides JSON endpoints for retrieving game statuses, live box scores, and play-by-play events.

---

## 1. Get Live Game Data
```http
GET /api/v1/games/{access_code}
```

### Response Example
```json
{
  "access_code": "EAG101",
  "sport": "basketball",
  "status": "in_progress",
  "current_period": 2,
  "clock_seconds_remaining": 382,
  "home_team": {
    "name": "LCA Eagles",
    "score": 18,
    "fouls": 2,
    "timeouts": 4
  },
  "away_team": {
    "name": "Heritage Warriors",
    "score": 15,
    "fouls": 3,
    "timeouts": 4
  }
}
```

---

## 2. Get Live Play-by-Play
```http
GET /api/v1/games/{access_code}/events
```

---

## 3. Export Official Scorebook PDF
```http
GET /export/scorebook/{access_code}.pdf
```
Returns a binary application/pdf stream formatted to official 8.5x11 scorebook specifications.
