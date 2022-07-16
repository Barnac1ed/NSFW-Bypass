console.clear();

const url = "https://backend.deviantart.com/oembed?url=";
const input = document.getElementsByClassName("link");

function bypass() {
    var uri = input[0].value;
    var full_uri = url + uri;
    var full_url = `https://api.allorigins.win/get?url=${encodeURIComponent(full_uri)}`;

    fetch(full_url, {
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
    }).then(res => {
        res.json().then(data => {
            if (data.status.http_code === 404) {
                alert("Invalid DeviantArt URL.");
                input[0].value = "";
            } else {
                var obj = JSON.parse(data.contents);
                document.getElementById("image").src = obj.url;
                document.getElementById("h").textContent = "Bypassed";
            }
        });
    });
}