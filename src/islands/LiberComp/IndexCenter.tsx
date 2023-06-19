function IndexCenter() {
  let mainAA = `
  ----------
  | -Site-  |                                     // =====| Liber AD | ===== \\
  |________|                                   //                                           ---------
        \\=====| Liber AD |===\\//                                            |   Site   |
                                           ----------                                       |________|
                                           | -Site-  |
                                           |________| 
  `;
  mainAA = mainAA.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;");

  function getVisual() {
    return (
      <>
        <div style={{ filter: "blur(0px)" }}>
          <h2 className="text-2xl font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white w-screen absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-gray-300">Welcome</span> to{" "}
            <span className="text-green-500">Liber</span>{" "}
            <span className="text-red-500">AD</span>{" "}
            <span className="text-blue-500">!</span>
          </h2>
        </div>
      </>
    );
  }

  return (
    <div className="w-screen">
      <div
        className="w-screen h-[300px] bg-gray-900 overflow-x-hidden select-none"
        style={{ filter: "blur(1px)" }}
      >
        <div>{getVisual()}</div>
        <div
          className="w-[1000px] break-none"
          dangerouslySetInnerHTML={{ __html: mainAA }}
        ></div>
      </div>
    </div>
  );
}

export default IndexCenter;
