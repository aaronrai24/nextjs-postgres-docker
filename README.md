# next-js-postgres-docker 

## Table of Contents

- [Description](#description)
- [Docker](#docker)
- [Contributing](#contributing)

## Description

This is a simple project that uses Next.js to create a frontend for a simple database table. The table is stored in a postgres database. The UI allows the user to view the table, add a new row, and delete a row. 

The project uses the following technologies:
- Docker
- Next.js
- Postgres
- React
- TypeScript
- Tailwind CSS

### Docker

The project uses Docker to run the entire application. The `docker-compose.ymal` file defines the services that are used in the project. The services are:
- `db`: The postgres database
- `frontend`: The Next.js frontend
- `pgadmin`: A web-based database management tool

To start the application, run the following command:

```bash
docker-compose up -d --build
```

This will start the database, frontend, and pgadmin services. The frontend will be available at [http://localhost:3000](http://localhost:3000) and pgadmin will be available at [http://localhost:8080](http://localhost:8080). The database is available at `localhost:5432`.

### Contributing

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
