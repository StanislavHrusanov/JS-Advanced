function fromHTMLtoJSONTable(input) {
    let arr = JSON.parse(input);
    let outputArr = [];
    outputArr.push('<table>');
    outputArr.push(getRowOfKeys(arr));
    arr.forEach(obj => outputArr.push(getValueRow(obj)));
    outputArr.push('</table>');
    console.log(outputArr.join('\n'));

    function getRowOfKeys(arr) {
        let keys = Object.keys(arr[0]);
        let row = [];
        row.push('<tr>');
        keys.forEach(key => row.push(`<th>${key}</th>`));
        row.push('</tr>');
        return '   ' + row.join('');
    }

    function getValueRow(obj) {
        let values = Object.values(obj);
        let row = [];
        row.push('<tr>');
        values.forEach(value => row.push(`<td>${escapeHtml(value)}</td>`));
        row.push('</tr>');
        return '   ' + row.join('');
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
fromHTMLtoJSONTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
);