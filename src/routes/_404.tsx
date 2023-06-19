import Layout from "Layout";

function _404() {
  return (
    <>
      <Layout meta={{title: "404 - LiberAD", desc: false}}>
        <h1 className="text-2xl text-center mt-5">404 Page</h1>
        <p className="text-center mt-5">電子の海を捜索しましたが、見つかりませんでした...</p>
        <img src="/logo.png" alt="logo" className="mt-5 mx-auto"/>
        <hr className="mt-5"/>

        <h2 className="text-center mt-5 text-xl">広告</h2>
      </Layout>
    </>
  )
}

export default _404;