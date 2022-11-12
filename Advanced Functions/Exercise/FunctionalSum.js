function add(a) {
    let sum = 0;
    sum += a;

    function solve(b) {
        sum += b;
        return solve;
    }
    solve.toString = () => sum;
    return solve;

}
console.log(add(1)(6)(-3).toString());
