

function displayHelloWorld() {
    let id = null;
    const elem = document.getElementsByClassName("helloworld")[0];
    let posw = 0;
    let posh = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    let i = 1;
    let j = 1;
    function frame() {
        if (posw == 640) {
            i = -1;
        } else if (posw == 0) {
            i = 1;
        }
        if (posh == 550) {
            j = -1;
        } else if (posh == 0) {
            j = 1;
        }
        posw = posw + i;
        posh = posh + j;
        elem.style.left = posw + "px";
        elem.style.top = posh + "px";
    }
}

displayHelloWorld();
