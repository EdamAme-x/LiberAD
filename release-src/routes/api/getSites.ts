import { HandlerContext } from '$fresh/server.ts';
import sites from './sites.ts';

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
    let $_GET: { [key: string]: string | string[] } = {};

    const url = new URL(_req.url);
    url.searchParams.forEach((value, key) => {
        if (typeof $_GET[key] === 'undefined') {
            $_GET[key] = value;
        } else {
            if (Array.isArray($_GET[key])) {
                $_GET[key].push(value);
            } else {
                $_GET[key] = [$_GET[key] as string, value];
            }
        }
    });

    const res = sites[Math.floor(Math.random() * sites.length)];

    console.log(res);

    const responseText = JSON.stringify(res);

    return new Response(responseText, {
        status: 200,
        headers: {
            liberad: 'true',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
};
