import { UserTable } from '@/components/UserTable';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            User Management
          </h1>
          <p className="text-gray-600">
            Simple CRUD example with Next.js, Express, and PostgreSQL
          </p>
        </div>

        <UserTable />
      </div>
    </main>
  );
}
