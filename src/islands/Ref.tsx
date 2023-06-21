export default function Ref() {
  // サイトに設置するコード
  // DM

  return (
    <>
      <div className="pb-10">
        <h4 className="text-3xl text-center font-bold mt-5">Steps</h4>

        <div className="mt-5 text-[14px] md:text-xl w-full text-center">
          1. 以下のフォームにアクセスし、必要な情報を入力<br/>
          2. 送信し、下にでたコードをサイトに追加(広告を置きたいところ)<br />
          3. 広告を好きにカスタマイズする (自由にCSSを充てれます。 基本広告が広告として機能すれば何でもOKです。)
        </div>

        <div className="mt-5 text-[14px] md:text-xl w-[160px] text-center mx-auto bg-blue-500 hover:bg-blue-600 text-white rounded p-2" onClick={
          () => {
            window.location.href = "/start";
          }
        }>
          START
        </div>
      </div>
    </>
  );
}
