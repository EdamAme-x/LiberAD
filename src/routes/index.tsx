import Layout from 'Layout'; //deno.json => from Layout
import Link from "LiberComp/Link.tsx";

export default function TopPage() {

  return (
    <>
      <Layout meta={false} classChild="pt-[50px] h-screen bg-gray-800 text-white">
        <h1>Home</h1>
        <Link to="/about">About</Link>
      </Layout>
    </>
  );
}
