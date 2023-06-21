import { useState } from "preact/hooks";
import Layout from "Layout";

export default function Start() {
  return (
    <Layout meta={{ title: "Start - LiberAD", desc: false }}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdXWvpvztcnE03x3PWO_74XrQCbLovgcZg2N22YJJi2jWZ87g/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        className="h-[900px] w-full"
      >
        loading…
      </iframe>

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
    </Layout>
  );
}
