function solve() {

  const inputFurnitures = document.querySelector('div #exercise').children[1];
  const generateBtn = document.querySelector('div #exercise').children[2];
  const table = document.querySelector('tbody');
  const buyField = document.querySelector('div #exercise').children[4];
  const buyBtn = document.querySelector('div #exercise').children[5];

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);


  function generate() {
    const furnitures = JSON.parse(inputFurnitures.value);

    furnitures.forEach(item => {
      let row = document.createElement('tr');
      let img = document.createElement('td');
      let pic = document.createElement('img');
      pic.src = item.img;
      img.appendChild(pic);
      row.appendChild(img);
      let itemName = document.createElement('td');
      itemName.innerHTML = `<p>${item.name}</p>`;
      row.appendChild(itemName);
      let price = document.createElement('td');
      price.innerHTML = `<p>${Number(item.price)}</p>`;
      row.appendChild(price);
      let decFactor = document.createElement('td');
      decFactor.innerHTML = `<p>${Number(item.decFactor)}</p>`;
      row.appendChild(decFactor);
      let checkbox = document.createElement('td');
      checkbox.innerHTML = `<input type="checkbox"/>`
      row.appendChild(checkbox);
      table.appendChild(row);
    });
  }

  function buy() {

    let boughtItems = [];
    let totalSum = 0;
    let avgDF = [];

    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    checkboxes.forEach(checkbox => {
      let item = checkbox.parentNode.parentNode.children[1].firstChild;
      let price = checkbox.parentNode.parentNode.children[2].firstChild;
      let decFactor = checkbox.parentNode.parentNode.children[3].firstChild;


      if (checkbox.checked) {
        boughtItems.push(item.textContent);
        totalSum += Number(price.textContent);
        avgDF.push(Number(decFactor.textContent));
      }
    });

    let sum = 0;
    avgDF.forEach(el => sum += el);
    let avg = sum / avgDF.length;

    buyField.value = `Bought furniture: ${boughtItems.join(', ')}\nTotal price: ${totalSum.toFixed(2)}\nAverage decoration factor: ${avg}`;
  }
}