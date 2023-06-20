import Layout from "Layout"; //deno.json => from Layout
import Link from "LiberComp/Link.tsx";
import IndexCenter from "LiberComp/IndexCenter.tsx";

export default function TopPage() {
  return (
    <>
      <Layout meta={false} classChild="pt-[50px] h-auto bg-gray-800 text-white">
        <IndexCenter />
        <About />
      </Layout>
    </>
  );
}

function About() {
  return (
    <div>
      <h3 className="text-3xl text-center mt-3 mb-5 font-bold">
        <span className="text-green-500">&lt;</span>
        <span className="text-4xl px-2">About </span>
        <span className="text-gray-400">/</span>
        <span className="text-green-500">&gt;</span>
      </h3>

      <div className="w-full h-auto flex flex-wrap">
        <div className="sm:w-1/2 lg:w-1/4 w-full h-auto flex flex-wrap">
          <div className="w-full h-auto transparent">
            <div className="w-full h-[300px] transparent flex items-center justify-center">
              <div className="h-4/5 w-4/5 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                <h4 className="text-white text-center font-bold mt-5 mx-5 text-2xl">
                  What is LiberAD?{" "}
                </h4>
                <div className="w-full p-4 text-[14px]" style={{ wordWrap: "break-word" }}>
                  LiberADは学生が開発・管理しているサイトに、学生間のサイトを繋げる広告ネットワークを提供するサービスです。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 lg:w-1/4 w-full h-auto flex flex-wrap">
          <div className="w-full h-auto transparent">
            <div className="w-full h-[300px] transparent flex items-center justify-center">
              <div className="h-4/5 w-4/5 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                <h4 className="text-white text-center font-bold mt-5 mx-5 text-2xl">
                  What is LiberAD?{" "}
                </h4>
                <div className="w-full p-4" style={{ wordWrap: "break-word" }}>
                  LiberADは学生が開発・管理しているサイトに、学生間のサイトを繋げる広告ネットワークを提供するサービスです。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 w-full h-auto flex flex-wrap">
          <div className="w-full h-auto transparent">
            <div className="w-full h-[300px] transparent flex items-center justify-center">
              <div className="h-4/5 w-4/5 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                <h4 className="text-white text-center font-bold mt-5 mx-5 text-2xl">
                  What is LiberAD?{" "}
                </h4>
                <div className="w-full p-4" style={{ wordWrap: "break-word" }}>
                  LiberADは学生が開発・管理しているサイトに、学生間のサイトを繋げる広告ネットワークを提供するサービスです。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 w-full h-auto flex flex-wrap">
          <div className="w-full h-auto transparent">
            <div className="w-full h-[300px] transparent flex items-center justify-center">
              <div className="h-4/5 w-4/5 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                <h4 className="text-white text-center font-bold mt-5 mx-5 text-2xl">
                  What is LiberAD?{" "}
                </h4>
                <div className="w-full p-4" style={{ wordWrap: "break-word" }}>
                  LiberADは学生が開発・管理しているサイトに、学生間のサイトを繋げる広告ネットワークを提供するサービスです。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
