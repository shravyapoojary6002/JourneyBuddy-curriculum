import SearchBar from "../components/SearchBar";

async function getStaticSummary() {
  return { totalUsers: 1240, totalOrders: 389 };
}

export default async function DashboardPage() {
  const summary = await getStaticSummary();

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Total users: {summary.totalUsers}</p>
      <p>Total orders: {summary.totalOrders}</p>
      <SearchBar />
    </main>
  );
}

