import { useState } from "preact/hooks";

export default function CodeGenerator() {
  const [code, setCode] = useState("");
  const [place, setPlace] = useState(true);

  const generateTokenCode = () => {
    return `
      <div
        id="liberad"
        data-version="1.00"
        data-token="${place ? "free" : "net" + code}"
      ></div>
      <script src="https://liberad.deno.dev/api/LiberAD"></script>
    `;
  };

  const codeInit = generateTokenCode();

  function handlCopy() {
    const range = document.createRange();
    range.selectNode(document.getElementById("code"));

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    window.alert("コピーが成功しました!");
  }

  return (
    <>
      <div className="w-screen mt-5">
        <h1 className="text-3xl text-center font-bold mt-5">規約</h1> <br />
        <p className="text-[14px] md:text-xl text-center">
          1.
          スタイルを変更するのは自由ですが、広告として機能しなくなるような事はしないでください。
        </p>
        <p className="text-[14px] md:text-xl text-center">
          2.
          広告ネットワークに自身のサイトを追加する場合、自身のサイトに必ず一つ以上の広告を載せて下さい。
        </p>
        <p className="text-[14px] md:text-xl text-center">
          3. その他、常識に反する事はしないでください。
        </p>
        <h2 className="text-3xl text-center font-bold mt-5">Code生成</h2>
        <div className="mt-5 w-screen flex justify-center">
          <button
            onClick={() => {
              setPlace(false);
              setCode(Date.now().toString().slice(-6));
            }}
            className="w-[90px] mt-5 btn border-2 border-red-300 p-2 bg-red-500 hover:bg-red-600 rounded text-white"
          >
            Generate
          </button>
        </div>
        <div className="mt-5 bg-gray-500 p-3 text-center w-auto" id={"code"}>
          {codeInit}{" "}
        </div>
        <button
          className="btn border-2 border-gray-300 p-[0.75px] bg-blue-500 hover:bg-blue-600 rounded text-white w-screen"
          onClick={handlCopy}
        >
          Copy
        </button>
      </div>
    </>
  );
}
