# Deployment & Multi-Environment Configuration

ProKeeper is designed for multi-domain routing and seamless continuous deployment.

---

## Domain Routing Architecture

| Domain | Target Deployment / Directory | Description |
| :--- | :--- | :--- |
| `app.prokeeper.org` | `app.prokeeper.org/` | Core ProKeeper application, Operator HUD, Auth, and APIs |
| `prokeeper.org` | `prokeeper.org/` | Standalone high-performance marketing site |
| `docs.prokeeper.org` | `docs.prokeeper.org/` | Documentation hub |
| `dev.prokeeper.org` | Staging/Dev ProKeeper build | Active development sandbox |
| `staging.prokeeper.org` | Staging ProKeeper build | Pre-release QA environment |

---

## Environment Profiles

* Local Development: `.env`
* Dev Environment: `.env.dev`
* Staging Environment: `.env.staging`
* Production: `.env.production`

---

## Production Build Steps
```bash
cd app.prokeeper.org
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan migrate --force
```
