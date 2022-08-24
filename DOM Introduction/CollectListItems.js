function extractText() {
    let nodeList = document.getElementsByTagName('li');
    let textArea = document.getElementById('result');

    for (let node of nodeList) {
        textArea.value += node.textContent + '\n';
    }
}