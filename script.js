let element = document.querySelector(".container")
let text = [
    "▣ Initializing hack-scripts",
    "► Initialized, Reading all files",
    "⚠ Password files found!",
    "≈ Copying password files",
    "► Checking other files to copy",
    "□ Uploading data to Gareeb server",
    "✔ All important data uploaded",
    "※ You're doomed! but thanks for coperating",
    " ",
    "<b>‼ Pay 50BTC to unlock your files.</b>"
];

function checkLast() {
    return new Promise((resolve) => {
        let lastEle = element.lastElementChild;
        if (lastEle.innerHTML.endsWith("...")) {
            lastEle.innerHTML = lastEle.innerHTML.slice(0, lastEle.innerHTML.length - 3);
        } else if (lastEle.innerHTML.endsWith("..")) {
            lastEle.innerHTML = lastEle.innerHTML.slice(0, lastEle.innerHTML.length - 2);
        } else if (lastEle.innerHTML.endsWith(".")) {
            lastEle.innerHTML = lastEle.innerHTML.slice(0, lastEle.innerHTML.length - 1);
        }
        resolve();
    });
}

let delay = () => {
    return new Promise((resolve) => {
        let timeout = 1 + Math.random() * 5;
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
};

function addElement(item) {
    let newEle = document.createElement("div");
    newEle.innerHTML = item;
    element.insertAdjacentElement("beforeend", newEle);
}

async function main() {
    
    let t = setInterval(() => {
        let lastEle = element.lastElementChild;
        if (lastEle.innerHTML.endsWith("...")) {
            lastEle.innerHTML = lastEle.innerHTML.slice(0, lastEle.innerHTML.length - 3);
        } else {
            lastEle.innerHTML += ".";
        }
    }, 180);

    for (let i of text) {
        await delay();
        await checkLast();
        addElement(i);
    }
    
    clearInterval(t);
    await delay();
    await checkLast();
}

main();
