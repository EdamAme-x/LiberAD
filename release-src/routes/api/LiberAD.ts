import { HandlerContext } from "$fresh/server.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  try {
    const res = await fetch(new URL("./liberad.mjs", import.meta.url));
    const body = await res.text();
    const headers = new Headers();
    headers.set("Content-Type", "application/javascript"); // ブラウザにjavascriptと解釈させる
    return new Response(body, { headers });
  } catch (error) {
    console.error(error);
    const errorCode = error instanceof Deno.errors.NotFound ? 404 : 500;
    return new Response(`Status Error: ${errorCode} / @macl2189`, { status: errorCode });
  }
};
