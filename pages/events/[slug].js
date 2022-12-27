import Layout from "../../components/Layout";

export default function EventPage() {
  return (
    <Layout title="Add new event">
      <div>
        <h1>My Event</h1>
        <h3>{router.query.slug}</h3>
        <button>Click</button>
      </div>
    </Layout>
  );
}
