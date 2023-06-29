// データベースが出来るまでの暫定

interface Site {
    title: string | undefined; //タイトル
    url: string; //リンク(Top)
    img: string | undefined; 
}

const sites: Site[] = [
    {
        title: "LiberAD",
        url: "https://liberad.deno.dev",
        img: "https://liberad.deno.dev/logo.png",
    },
    {
        title: "Liberluna Site",
        url: "https://liberluna.github.io",
        img: "https://liberluna.github.io/favicon.png",
    },
    {
        title: "LiberChat",
        url: "https://liberchat.deno.dev",
        img: "https://liberchat.deno.dev/icon/192x192.png"
    }
]

export default sites
