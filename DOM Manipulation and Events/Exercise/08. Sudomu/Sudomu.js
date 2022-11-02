function solve() {
    const inputs = document.getElementsByTagName('input');
    const outputParagraph = document.querySelector('#check p');
    const checkBtn = document.getElementsByTagName('button')[0];
    const clearBtn = document.getElementsByTagName('button')[1];
    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    function check() {

        const sudomu = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ];

        let isFinished = true;

        for (let row = 0; row < sudomu.length; row++) {
            let currRow = sudomu[row];

            let rowStr = '';
            let colStr = '';

            for (let col = 0; col < currRow.length; col++) {
                let currRowEl = currRow[col];
                let currColEl = sudomu[col][row];
                if ((currRowEl == '' || currColEl == '') || (rowStr.includes(currRowEl) || colStr.includes(currColEl))) {
                    isFinished = false;
                    break;
                }
                rowStr += currRowEl;
                colStr += currColEl;
            }
        }

        if (isFinished) {
            outputParagraph.textContent = 'You solve it! Congratulations!';
            outputParagraph.style.color = 'green';
            document.getElementsByTagName('table')[0].style.border = '2px solid green';
        } else {
            outputParagraph.textContent = 'NOP! You are not done yet...';
            outputParagraph.style.color = 'red';
            document.getElementsByTagName('table')[0].style.border = '2px solid red';
        }
    }

    function clear() {
        const inputFields = Array.from(document.querySelectorAll('input'));
        inputFields.forEach(field => field.value = '');
        outputParagraph.textContent = '';
        document.getElementsByTagName('table')[0].style.border = 'none';
    }
}