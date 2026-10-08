# Deployment & Multi-Environment Configuration

ProKeeper is designed for multi-domain routing and seamless continuous deployment.

---

## Domain Routing Architecture

| Domain | Target Deployment / Directory | Description |
| :--- | :--- | :--- |
| `app.prokeeper.com` | `app.prokeeper.com/` | Core Laravel application, Operator HUD, Auth, and APIs |
| `prokeeper.com` | `prokeeper.com/` | Standalone high-performance marketing site |
| `docs.prokeeper.com` | `docs.prokeeper.com/` | Documentation hub |
| `dev.prokeeper.com` | Staging/Dev Laravel build | Active development sandbox |
| `staging.prokeeper.com` | Staging Laravel build | Pre-release QA environment |

---

## Environment Profiles

* Local Development: `.env`
* Dev Environment: `.env.dev`
* Staging Environment: `.env.staging`
* Production: `.env.production`

---

## Production Build Steps
```bash
cd app.prokeeper.com
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan migrate --force
```
