import Layout from "Layout";

export default function start() {
  return (
    <Layout meta={{ title: "Start - LiberAD", desc: false }}>
      form 色々
      <p className="mt-5 text-center">
        不具合や質問はDMまでお願いします。
        <a
          href="https://twitter.com/LiberAD"
          target="_blank"
          className="text-blue-300 underline"
        >
          DM
        </a>
      </p>
    </Layout>
  );
}
