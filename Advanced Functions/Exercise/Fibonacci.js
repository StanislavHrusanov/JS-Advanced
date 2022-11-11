function getFibonator() {
    let nums = [0, 1];
    return function add() {
        nums.push(nums[nums.length - 2] + nums[nums.length - 1]);
        return nums[nums.length - 2];
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
