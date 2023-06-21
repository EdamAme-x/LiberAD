if (window.location && document.querySelector("#liberad")) {
    window.LiberAD = {
        enabled: true,
        token: document.querySelector("#liberad").dataset.token,
        check: true, // token check TBD
        here: window.location.href,
        close: function (thisEl) {
            document.querySelector("[liber-index='"+thisEl.getAttribute('liber-index') + "']").style.opacity = 0;
            document.querySelector("[liber-index='"+thisEl.getAttribute('liber-index') + "']").onclick = void 0;
        }
    }

    let __el = document.querySelectorAll("#liberad");

    for (let i = 0; i < __el.length; i++) {
        fetch("http://localhost:8000/api/getSites?token" + window.LiberAD.token) // fetch API
            .then(response => {
                if (!response.ok) {
                    throw new Error(`LiberAD: Sorry. `,` Status: ${response.status}`);
                }
                return response.json(); // Parse response as JSON
            })
            .then(data => {
                function makeAD(data) {
                    data = JSON.parse(data);
                    let html = `
                        <div class="lad-card" liber-index="${i}" onclick="window.location.href='${data.url}'">
                            <div class="lad-title">${data.title}</div>
                            <div class="lad-x" onclick="LiberAD.close(this)" liber-index="${i}">
                                <svg class="lad-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                        </div>

                        <style>
                            .lad-card {
                                background: url("${data.img}") no-repeat center center / cover;
                                width: 300px;
                                height: 200px;
                                display: flex;
                            }

                            .lad-title {
                                font-size: 1.1rem;
                                font-weight: bold;
                                width: calc(100% - 20px);
                                padding: 5px 0px 1px 10px;
                                text-align: left;
                                backdrop-filter: blur(4px);
                                overflow: hidden;
                            }

                            .lad-x {
                                background: rgba(0, 0, 0, 0.9);
                                border-radius: 0%;
                                width: 20px;
                                height: 20px;
                                margin: 2px 2px 0 0;
                            }

                            .lad-svg {
                                width: 20px;
                                height: 20px;
                            }
                        </style>
                    `;

                    return html;
                }

                __el[i].innerHTML = makeAD(JSON.stringify(data)); // Convert object to string
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
