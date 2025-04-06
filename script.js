let element = document.querySelector(".container")
let text = [
    "• Initializing hack-scripts",
    "• Initialized, Reading all data",
    "• Password files detected",
    "• Copying passwords and replacing with lollipops",
    "• Checking other files to copy",
    "• Sending data to Gareeb server",
    "• All important data copied",
    "• Final check! Thanks for co-operating",
    "<i><b>• Now you can get your files just for 50 Bitcoins</i></b>"
];

function checkLast() {
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
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
    }, 300);

    for (let i of text) {
        await delay();
        await checkLast();
        addElement(i);
    }
    
    await delay();
    await checkLast();
    clearInterval(t);
}

main();
