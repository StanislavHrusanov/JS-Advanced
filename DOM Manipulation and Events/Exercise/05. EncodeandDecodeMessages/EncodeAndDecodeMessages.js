function encodeAndDecodeMessages() {
    const textToEncode = document.querySelector('main').children[0].querySelector('textarea');
    const encodingButton = document.querySelector('main').children[0].querySelector('button');
    const textToDecode = document.querySelector('main').children[1].querySelector('textarea');
    const decodingButton = document.querySelector('main').children[1].querySelector('button');

    encodingButton.addEventListener('click', encodeAndSend);
    decodingButton.addEventListener('click', decodeAndRead);

    function encodeAndSend() {
        const messageToEncode = textToEncode.value.split('');
        for (let i = 0; i < messageToEncode.length; i++) {
            let ch = messageToEncode[i];
            let chAsciiCode = ch.charCodeAt();
            messageToEncode[i] = String.fromCharCode(chAsciiCode + 1);
        }

        textToDecode.value = messageToEncode.join('');
        textToEncode.value = '';
    }

    function decodeAndRead() {
        const messageToDecode = textToDecode.value.split('');
        for (let i = 0; i < messageToDecode.length; i++) {
            let ch = messageToDecode[i];
            let chAsciiCode = ch.charCodeAt();
            messageToDecode[i] = String.fromCharCode(chAsciiCode - 1);
        }

        textToDecode.value = messageToDecode.join('');
    }
}