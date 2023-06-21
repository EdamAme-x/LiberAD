import Link from "LiberComp/Link.tsx";
import { useEffect , useState } from "preact/hooks";

function IndexCenter() {
  let mainAA = `
  ----------
  | -Site-  |                                     // =====| Liber AD | ===== \\
  |________|                                   //                                           ---------                                                  ----------                        ----------
        \\=====| Liber AD |===\\//                                            |   Site   |                                                  |   Site   |                         |   Site   |
                                           ----------                                       |________|                                                 |________|                         |________|
                                           | -Site-  |                                            \\=========| Liber AD |========//====| Liber AD |===//
                                           |________|                                                                                                                                            //
                                                                                                                                                                                                --------
                                                                                                                                                                                                |  Site  |
                                                                                                                                                                                                |_______|
                                                                                                                                                                                                
  `;
  mainAA = mainAA.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //windowのリサイズイベント

  function getVisual() {
    return (
      <>
        <div
          style={{ filter: "blur(0px)", position: "relative", zIndex: "2" }}
          className="w-screen"
        >
          <h2
            style={{ filter: "blur(0px)" }}
            className="text-2xl font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white w-screen absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <span className="text-gray-500">Welcome</span> to{" "}
            <span className="text-green-500">Liber</span>{" "}
            <span className="text-red-500">AD</span>{" "}
            <span className="text-blue-500">!</span>
          </h2>

          <h3
            style={{ filter: "blur(0px)" }}
            className="font-extrabold text-sm sm:text-xl lg:text-2xl tracking-tight text-center dark:text-white w-screen absolute top-[150px] left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            LiberAD は無料の広告ネットワークサービスです。
            <br />
            自由にサイトに広告を設置できます。 条件 : 学生であること。
          </h3>

          <div
            className={
              "w-screen ml-[" +
              ((window.innerWidth - 140) / 2).toString() +
              "px]"
            }
          >
            <Link
              to="/#details"
              className="p-2 pl-4 pr-4 text-xl relative z-99 top-[200px] ml-auto text-white bg-green-400 rounded-lg hover:bg-green-600 font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-screen">
      <div className="w-screen h-[300px] bg-gray-900 overflow-x-hidden select-none">
        <div>{getVisual()}</div>
        <div
          className="w-[1000px] break-none "
          style={{ filter: "blur(1.2px)" }}
          dangerouslySetInnerHTML={{ __html: mainAA }}
        ></div>
      </div>
    </div>
  );
}

export default IndexCenter;
