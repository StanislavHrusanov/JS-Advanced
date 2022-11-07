function solve(area, vol, input) {
    input = JSON.parse(input);
    let output = [];

    input.forEach(i => output.push({ area: area.call(i), volume: vol.call(i) }));
    return (output);

}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};