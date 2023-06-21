import Layout from "Layout";
import Link from "LiberComp/Link.tsx";

function _404() {
  return (
    <>
      <Layout meta={{ title: "404 - LiberAD", desc: false }}>
        <h1 className="text-2xl text-center mt-5">404 Page</h1>
        <p className="text-center mt-5">
          電子の海を捜索しましたが、見つかりませんでした...
        </p>
        <Link to="/">
          <img src="/logo.png" alt="logo" className="mt-5 mx-auto" />
        </Link>
        <hr className="mt-5" />

        <h2 className="text-center mt-5 text-xl">広告</h2>

        <div className="flex justify-center mt-5 w-screen">
          <div
            id="liberad"
            data-version="1.00"
            data-token="7a543ec8db439e69d3e2e940195353815eb13f2c4f001bff7578e5699287fb8f"
          ></div>
        </div>
        <script src="http://localhost:8000/api/LiberAD"></script>
      </Layout>
    </>
  );
}

export default _404;
