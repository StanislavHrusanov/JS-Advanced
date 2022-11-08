function solution() {
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(string) {
        str = str + string;
        return
    }

    function removeStart(n) {
        str = str.slice(n);
        return;
    }

    function removeEnd(n) {
        str = str.slice(0, -n);
        return;
    }

    function print() {
        console.log(str);
    }
}
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

