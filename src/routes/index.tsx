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
        <div className="sm:w-1/2 lg:w-1/4 w-full h-auto flex flex-wrap my-5">
          <div className="w-full h-auto transparent">
            <div className="w-full sm:h-auto lg:h-[300px] transparent flex items-center justify-center">
              <div className="h-4/5 w-4/5 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                <h4 className="text-white text-center font-bold mt-5 mx-5 text-2xl">
                  What is LiberAD?{" "}
                </h4>
                <div
                  className="w-full p-4 text-[14px]"
                  style={{ wordWrap: "keep-all" }}
                >
                  LiberADは学生が開発・管理しているサイトに、学生間のサイトを繋げる<span className="text-gray-200">広告ネットワーク</span>を提供するサービスです。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 lg:w-1/4 w-full h-auto flex flex-wrap my-5">
          <div className="w-full h-auto transparent">
            <div className="w-full sm:h-auto lg:h-[300px] transparent flex items-center justify-center">
              <div className="h-4/5 w-4/5 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                <h4 className="text-white text-center font-bold mt-5 mx-5 text-2xl">
                  How it <br /> works?{" "}
                </h4>
                <div
                  className="w-full p-4 text-[14px]"
                  style={{ wordWrap: "keep-all" }}
                >
                  自分のサイトに広告を掲載する事で、他の人がサイトに設置した<span className="text-green-500">広告</span>に自分のサイトが載ります。勿論、自分が載せるだけでもOKです。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 lg:w-1/4 w-full h-auto flex flex-wrap  my-5">
          <div className="w-full h-auto transparent">
            <div className="w-full sm:h-auto lg:h-[300px] transparent flex items-center justify-center">
              <div className="h-4/5 w-4/5 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                <h4 className="text-white text-center font-bold mt-5 mx-5 text-2xl">
                  How do <br /> I start?{" "}
                </h4>
                <div
                  className="w-full p-4 text-[14px]"
                  style={{ wordWrap: "keep-all" }}
                >
                  たった一行コードを追加するだけです。{" "}
                  <Link to="#start" className="text-red-500 underline">
                    #START
                  </Link>
                  に詳しく記載されています。
                  貴方は自身のサイトの好きなところに広告を設置すること、広告のスタイルを変更することが、可能です。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-1/2 lg:w-1/4 w-full h-auto flex flex-wrap  my-5">
          <div className="w-full h-auto transparent">
            <div className="w-full sm:h-auto lg:h-[300px] transparent flex items-center justify-center">
              <div className="h-4/5 w-4/5 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                <h4 className="text-white text-center font-bold mt-5 mx-5 text-2xl">
                  Prohibited Actions.{" "}
                </h4>
                <div
                  className="w-full p-4 text-[14px]"
                  style={{ wordWrap: "keep-all" }}
                >
                  LiberADは、学生達の<span className="text-blue-500">善意</span>によって成り立っています。<br/>
                  広告を意図的に見えなくすること。広告としての機能を損なわせること。その他 違反行為。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
