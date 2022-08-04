function gCD(x, y) {
    for (let i = Math.min(x, y); i > 0; i--) {

        if (x % i == 0 && y % i == 0) {
            console.log(i);
            break;
        }
    }
}
gCD(15, 5);