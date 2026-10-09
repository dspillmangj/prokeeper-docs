# Deployment & Multi-Environment Configuration

ProKeeper is designed for multi-domain routing and seamless continuous deployment.

---

## Domain Routing Architecture

| Domain | Target Deployment / Directory | Description |
| :--- | :--- | :--- |
| `app.prokeeper.taligent.dev` | `app.prokeeper.com/` | Core ProKeeper application, Operator HUD, Auth, and APIs |
| `prokeeper.taligent.dev` | `prokeeper.com/` | Standalone high-performance marketing site |
| `docs.prokeeper.taligent.dev` | `docs.prokeeper.com/` | Documentation hub |
| `dev.prokeeper.taligent.dev` | Staging/Dev ProKeeper build | Active development sandbox |
| `staging.prokeeper.taligent.dev` | Staging ProKeeper build | Pre-release QA environment |

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
