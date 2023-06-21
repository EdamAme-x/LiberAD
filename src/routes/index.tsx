import Layout from "Layout"; //deno.json => from Layout
import Link from "LiberComp/Link.tsx";
import IndexCenter from "LiberComp/IndexCenter.tsx";
import Ref from "../islands/Ref.tsx";

export default function TopPage() {
  return (
    <>
      <Layout meta={false} classChild="pt-[50px] h-auto bg-gray-800 text-white">
        <IndexCenter />
        <About />
        <Example />
        <Details />
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
                  LiberADは学生が開発・管理しているサイトに、学生間のサイトを繋げる
                  <span className="text-gray-200">広告ネットワーク</span>
                  を提供するサービスです。
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
                  自分のサイトに広告を掲載する事で、他の人がサイトに設置した
                  <span className="text-green-500">広告</span>
                  に自分のサイトが載ります。勿論、自分が載せるだけでもOKです。
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
                  LiberADは、学生達の<span className="text-blue-500">善意</span>
                  によって成り立っています。
                  <br />
                  広告を意図的に見えなくすること。広告としての機能を損なわせること。etc..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Example() {
  return (
    <div id={"example"}>
      <h3 className="text-3xl text-center mt-3 font-bold">
        <span className="text-red-500">&lt;</span>
        <span className="text-4xl px-2">Example </span>
        <span className="text-gray-400">/</span>
        <span className="text-red-500">&gt;</span>
      </h3>

      <div className="w-full h-auto flex flex-wrap mt-5 pb-5">
        <div className="sm:w-1/2 border-b sm:border-r sm:border-b-0 border-gray-300 w-full h-auto">
          <div className="w-full h-[300px]">
            <h4 className="text-white text-center font-bold mx-auto text-2xl">
              AD Smaple
            </h4>

            <div className="w-full flex justify-center mt-5">
              <div
                id="liberad"
                data-version="1.00"
                data-token="7a543ec8db439e69d3e2e940195353815eb13f2c4f001bff7578e5699287fb8f"
              ></div>
            </div>
            <script src="http://localhost:8000/api/LiberAD"></script>
          </div>
        </div>

        <div className="sm:w-1/2 w-full h-auto">
          <div className="w-full h-[300px]">
            <h4 className="text-white text-center font-bold mx-auto text-2xl">
              Sites using Liber AD
            </h4>

            <div className="w-full text-center mt-5">
                <div className="mx-auto w-2/3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                  <a href="/">LiberAD</a>
                </div>

                <div className="mx-auto w-2/3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                  <a href="https://liberluna.github.io">Liberluna Site</a>
                </div>

                <div className="mx-auto w-2/3 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-lg">
                  <a href="https://liberchat.deno.dev">LiberChat</a>
                </div>

                <p>随時追加</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div id={"details"}>
      <h3 className="text-3xl text-center mt-3 font-bold">
        <span className="text-blue-500">&lt;</span>
        <span className="text-4xl px-2">Details </span>
        <span className="text-gray-400">/</span>
        <span className="text-blue-500">&gt;</span>
      </h3>

      <Ref />

      <p className="mt-5 text-center">
        不具合や質問、要望はDMまでお願いします。
        <a
          href="https://twitter.com/macl2189"
          target="_blank"
          className="text-blue-300 underline"
        >
          DM
        </a>
      </p>
    </div>
  );
}
