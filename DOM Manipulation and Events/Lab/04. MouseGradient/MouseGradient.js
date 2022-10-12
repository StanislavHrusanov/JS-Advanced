function attachGradientEvents() {
    let box = document.getElementById('gradient-box');
    box.addEventListener('mousemove', mouseMove);
    box.addEventListener('mouseout', mouseOut);

    function mouseMove(e) {
        let coordinates = e.offsetX;
        let percentage = coordinates / (e.target.clientWidth - 1);
        percentage = Math.trunc(percentage * 100);
        document.getElementById('result').innerHTML = `${percentage}%`;
    }

    function mouseOut() {
        document.getElementById('result').textContent = '';
    }
}