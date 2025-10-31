# Next.js + Postgres + Docker Foundation Project

A simple, well-structured example showing how to connect a Next.js frontend to a Postgres database through a backend API service. This project demonstrates clean separation of concerns and modern full-stack architecture.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Express, Node.js, TypeScript
- **Database**: PostgreSQL 16
- **Dev Tools**: Docker, Docker Compose, pgAdmin

## Project Structure

```
├── backend/              # Express API server
│   ├── src/
│   │   ├── db/
│   │   │   ├── connection.ts    # Database connection pool
│   │   │   ├── queries.ts       # Database query functions
│   │   │   └── types.ts         # TypeScript interfaces
│   │   └── server.ts            # Express server with routes
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/             # Next.js application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx         # Home page (user management)
│   │   │   ├── layout.tsx       # Root layout
│   │   │   └── globals.css      # Global styles
│   │   ├── components/
│   │   │   └── UserTable.tsx    # User table with modal form
│   │   └── lib/
│   │       ├── api.ts           # API client
│   │       └── types.ts         # Shared types
│   ├── Dockerfile
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
├── database/             # Database initialization
│   ├── init/
│   │   ├── 01-schema.sql        # Table schema
│   │   └── 02-seed.sql          # Sample data
│   └── backups/                 # Database backup location
└── docker-compose.yaml   # Service orchestration
```

## Quick Start

### Prerequisites

- Docker and Docker Compose installed
- Node.js 20+ (for local development)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextjs-postgres-docker
   ```

2. **Start all services with Docker**
   ```bash
   docker-compose up --build
   ```

3. **Access the applications**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000
   - pgAdmin: http://localhost:8080
   - PostgreSQL: localhost:5433 (mapped from internal 5432)

4. **Start using the app**
   - Navigate to http://localhost:3000 to see the user management interface
   - Click "Add User" to open the modal form and create new users
   - View, manage, and delete users from the table

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a single user by ID
- `POST /api/users` - Create a new user
  - Body: `{ "name": "string", "email": "string", "role": "user" | "admin" }`
- `DELETE /api/users/:id` - Delete a user

### Health Check

- `GET /health` - Server health check

## Development

### Running Locally (without Docker)

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Database:**
Make sure PostgreSQL is running locally or update the connection string in `backend/.env`.

### Environment Variables

**Backend** (`backend/.env`):
```bash
DB_HOST=db
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=nextjs
PORT=4000
```

**Frontend** (`frontend/.env.local`):
```bash
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## Database

The database is automatically initialized with:
- Users table with indexes
- 5 sample users (including 1 admin)

### Accessing the Database

**Via pgAdmin:**
1. Go to http://localhost:8080
2. Login with: `admin@admin.com` / `root`
3. Add server:
   - Host: `db` (or `postgres`)
   - Port: `5432` (internal port, not 5433)
   - Username: `user`
   - Password: `password`
   - Database: `nextjs`

**Via Command Line:**
```bash
docker-compose exec db psql -U user -d nextjs
```

### Database Backups

```bash
# Create backup
docker-compose exec db pg_dump -U user nextjs > database/backups/backup-$(date +%Y-%m-%d).sql

# Restore backup
docker-compose exec -T db psql -U user nextjs < database/backups/backup-YYYY-MM-DD.sql
```

## Common Commands

```bash
# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d

# Rebuild and start
docker-compose up --build

# Stop all services
docker-compose down

# Stop and remove volumes (deletes database data)
docker-compose down -v

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f backend

# Restart a service
docker-compose restart backend
```

## Features

- ✅ Full-stack TypeScript
- ✅ Docker containerization
- ✅ Database auto-initialization
- ✅ Connection pooling
- ✅ CORS enabled
- ✅ Clean architecture
- ✅ Responsive UI with Tailwind CSS
- ✅ Modal popup form for creating users
- ✅ Full CRUD operations (Create, Read, Delete)
- ✅ Error handling
- ✅ Health checks

## What This Project Demonstrates

1. **Clean Architecture**: Clear separation between frontend, backend, and database
2. **Type Safety**: TypeScript throughout with shared types
3. **Docker Best Practices**: Multi-service orchestration with health checks
4. **Database Patterns**: Connection pooling, parameterized queries, migrations
5. **API Design**: RESTful endpoints with proper HTTP methods and status codes
6. **Modern React**: Client components, hooks, and Next.js 14 features
7. **Security Basics**: SQL injection prevention, CORS configuration, environment variables

## Extending This Project

This foundation can be extended with:

- Authentication (JWT, NextAuth.js)
- Input validation (Zod)
- Testing (Jest, React Testing Library)
- More CRUD entities (Projects, Tasks, etc.)
- Database migrations (Prisma, TypeORM)
- File uploads
- Real-time updates (WebSockets)
- API rate limiting
- Logging and monitoring

## Troubleshooting

**Port already in use:**
```bash
# Find and kill process using port 3000, 4000, or 5433
lsof -ti:3000 | xargs kill
lsof -ti:4000 | xargs kill
lsof -ti:5433 | xargs kill

# Note: Port 5433 is used for Docker Postgres (internal 5432)
# If you have local Postgres on 5432, that's fine - they won't conflict
```

**Database connection issues:**
```bash
# Check database is healthy
docker-compose ps

# Restart database service
docker-compose restart db

# Check database logs
docker-compose logs db
```

**Frontend can't connect to backend:**
- Verify `NEXT_PUBLIC_API_URL` in `frontend/.env.local`
- Check backend is running: `curl http://localhost:4000/health`
- Check browser console for CORS errors

**Reset everything:**
```bash
docker-compose down -v
docker-compose up --build
```

## License

MIT

## Contributing

This is a foundation/example project. Feel free to fork and adapt for your needs!
