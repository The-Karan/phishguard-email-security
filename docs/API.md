# API plan

The current static demo deliberately exposes no `/api` endpoints. A production implementation should validate schemas and require authentication for every endpoint except health:

| Endpoint | Purpose |
|---|---|
| `GET /api/health` | health check |
| `POST /api/auth/login` | server-side hashed-password login |
| `POST /api/auth/logout` | clear HttpOnly session |
| `GET /api/auth/me` | current user |
| `POST /api/analyze` | validate and analyze content |
| `GET /api/analyses` | current user’s history only |
| `GET/DELETE /api/analyses/:id` | current user’s owned record only |
| `GET /api/analyses/:id/report` | safe PDF for owned record |

Return structured errors and never trust a pasted `Authentication-Results` header as verified evidence.
