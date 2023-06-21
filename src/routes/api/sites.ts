// データベースが出来るまでの暫定

interface Site {
    title: string | undefined; //タイトル
    url: string; //リンク(Top)
    img: string | undefined; //スクレイピングでゲット icon
}

const sites: Site[] = [
    {
        title: "LiberAD",
        url: "https://liberad.deno.dev",
        img: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
    },
    {
        title: "Liberluna Site",
        url: "https://liberluna.github.io",
        img: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
    }
]

export default sites