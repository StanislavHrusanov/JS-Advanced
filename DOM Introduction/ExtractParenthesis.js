function extract(content) {
    let param = document.getElementById(content).textContent;
    let pattern = /\((?<text>.+?)\)/g;
    let text = '';
    let match = pattern.exec(param);

    while (match != null) {
        text += match.groups['text'] + '; ';
        match = pattern.exec(param);
    }
    return document.getElementById(content).textContent = text;
}