window.addEventListener("load", solve);

function solve() {
  const makeField = document.getElementById('make');
  const modelField = document.getElementById('model');
  const yearField = document.getElementById('year');
  const fuelField = document.getElementById('fuel');
  const originalCostField = document.getElementById('original-cost');
  const sellingPriceField = document.getElementById('selling-price');
  const tBody = document.getElementById('table-body');
  const carsList = document.getElementById('cars-list');
  const totalProfit = document.getElementById('profit');

  document.addEventListener('click', (e) => {
    e.preventDefault();

    const buttons = {
      'Publish': () => {
        if (!makeField.value || !modelField.value || !yearField.value || !fuelField.value ||
          !sellingPriceField.value || !originalCostField.value) {
          return;
        }
        if (Number(sellingPriceField.value) <= Number(originalCostField.value)) {
          return;
        }

        const tr = elementCreator('tr', '', 'class', 'row');

        tr.appendChild(elementCreator('td', makeField.value));
        tr.appendChild(elementCreator('td', modelField.value));
        tr.appendChild(elementCreator('td', yearField.value));
        tr.appendChild(elementCreator('td', fuelField.value));
        tr.appendChild(elementCreator('td', originalCostField.value));
        tr.appendChild(elementCreator('td', sellingPriceField.value));

        const buttonsTd = elementCreator('td')
        const editBtn = elementCreator('button', 'Edit', 'class', 'action-btn edit');
        const sellBtn = elementCreator('button', 'Sell', 'class', 'action-btn sell');
        buttonsTd.appendChild(editBtn);
        buttonsTd.appendChild(sellBtn);
        tr.appendChild(buttonsTd);

        tBody.appendChild(tr);

        makeField.value = '';
        modelField.value = '';
        yearField.value = '';
        fuelField.value = '';
        originalCostField.value = '';
        sellingPriceField.value = '';

      },
      'Edit': () => {
        const tr = e.target.parentNode.parentNode.children;
        makeField.value = tr[0].textContent;
        modelField.value = tr[1].textContent;
        yearField.value = tr[2].textContent;
        fuelField.value = tr[3].textContent;
        originalCostField.value = tr[4].textContent;
        sellingPriceField.value = tr[5].textContent;

        e.target.parentNode.parentNode.remove();
      },
      'Sell': () => {
        const tr = e.target.parentNode.parentNode.children;
        const li = elementCreator('li', '', 'class', 'each-list');
        li.appendChild(elementCreator('span', `${tr[0].textContent} ${tr[1].textContent}`));
        li.appendChild(elementCreator('span', tr[2].textContent));
        const profit = Number(tr[5].textContent) - Number(tr[4].textContent);
        li.appendChild(elementCreator('span', profit));

        carsList.appendChild(li);

        const currTotalProfit = Number(totalProfit.textContent);
        totalProfit.textContent = (currTotalProfit + profit).toFixed(2);
        e.target.parentNode.parentNode.remove();
      }
    }

    if (e.target.tagName === 'BUTTON') {
      buttons[e.target.textContent]();
    }

    function elementCreator(type, text, attribute, attrName) {
      const newElement = document.createElement(type);
      if (attribute) {
        newElement.setAttribute(attribute, attrName);
      }
      if (text) {
        newElement.textContent = text;
      }
      return newElement;
    }
  });
}
