import Layout from 'Layout'; //deno.json => from Layout
import Link from "LiberComp/Link.tsx";
import IndexCenter from "LiberComp/IndexCenter.tsx";

export default function TopPage() {

  return (
    <>
      <Layout meta={false} classChild="pt-[50px] h-screen bg-gray-800 text-white">
          <IndexCenter />
      </Layout>
    </>
  );
}
