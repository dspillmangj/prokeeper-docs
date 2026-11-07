# Accounts & Organizations

ProKeeper provides role-based access control and multi-tenant organizational management designed for athletic directors, head coaches, scorekeepers, and tournament officials.

---

## Organizational Hierarchy

An organization represents a school, athletic department, club program, or tournament association. All teams, rosters, and game histories belong to the organization.

```
Organization (e.g. LCA Athletics)
├── Users & Staff (Admins, Coaches, Scorekeepers)
├── Teams (Varsity Boys, Varsity Girls, JV Boys...)
│   └── Rosters (Player profiles, jersey numbers, positions)
└── Scheduled & Live Games (Game events, scorebooks, live links)
```

---

## User Roles & Permissions

| Role | Permissions | Use Case |
| :--- | :--- | :--- |
| **Admin** | Full system administration, team creation, user management, billing, and game deletion. | Athletic Director, Head of Athletics. |
| **Coach** | Team roster editing, game scheduling, lineup management, and analytics viewing. | Head Coaches, Assistant Coaches. |
| **Scorekeeper** | Live stat tracking, fast keyboard operator access, substitution controls, and play undo. | Student statisticians, official table scorekeepers. |
| **Viewer** | Read-only access to live scoreboard feeds and digital scorebooks. | Fans, parents, live stream operators (no login required for public game codes). |

---

## Staff Invitations

Administrators can add scorekeepers and coaches to their organization:
1. Log into the [App](https://app.prokeeper.org).
2. Go to **Settings > Team Staff**.
3. Enter the staff member's email address and assign their role.
4. An activation link will be sent with immediate access to designated rosters.
