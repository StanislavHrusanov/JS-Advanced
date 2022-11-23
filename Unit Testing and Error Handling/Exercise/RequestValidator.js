function requestValidator(obj) {
    if (!obj.hasOwnProperty('method') || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!obj.hasOwnProperty('uri') || (!/^(\.*[0-9a-zA-Z]*\.*)*$/gm.test(obj.uri) && !/^\*$/g.test(obj.uri)) || obj.uri == '') {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!obj.hasOwnProperty('version') || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!obj.hasOwnProperty('message') || /[<>\\&'"]/g.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj;
}

requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});