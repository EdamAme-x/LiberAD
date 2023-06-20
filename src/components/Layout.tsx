import { ReactNode } from "preact";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Head } from "$fresh/runtime.ts";
import GlobalStyle from "LiberComp/GlobalStyle.tsx";
import Link from "LiberComp/Link.tsx";

type LayoutProps = {
  children: ReactNode;
  meta?: {
    title?: string | boolean | null;
    desc?: string | boolean | null;
  };
  classes?: string;
  classChild?: string;
};

export default function Layout({
  children,
  meta,
  classes,
  classChild,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          {meta.title ? meta.title : "LiberAD - Free AD network for students"}
        </title>
        <meta
          name="description"
          content={
            meta.desc ? meta.desc : "LiberAD - Free AD network for students"
          }
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={classes ? classes : ""}>
        <Header />
        <div
          className={
            classChild
              ? classChild
              : "pt-[50px] h-screen bg-gray-800 text-white"
          }
        >
          {children}
        </div>
        <Footer />
        <div className="fixed bottom-5 right-5 z-100 w-10 h-10 bg-gray-300 rounded-full">
          <Link to="#">
            <span className="font-extrabold text-xl w-full h-full flex items-center justify-center select-none">
              ⇧
            </span>
          </Link>
        </div>
        <GlobalStyle />
      </div>
    </>
  );
}
