function solve() {
   const textArea = document.querySelector('textarea');
   const addButtons = Array.from(document.querySelectorAll('.add-product'));
   const checkoutButton = document.querySelector('.checkout');

   let products = [];
   let totalSum = 0;

   addButtons.forEach(button => button.addEventListener('click', add));
   checkoutButton.addEventListener('click', checkout);

   function add(e) {
      const productName = e.target.parentElement.parentElement.querySelector('.product-title').textContent;
      const productPrice = Number(e.target.parentElement.parentElement.querySelector('.product-line-price').textContent);

      if (!products.includes(productName)) {
         products.push(productName);
      }
      totalSum += productPrice;
      textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
   }

   function checkout() {
      textArea.value += `You bought ${products.join(', ')} for ${totalSum.toFixed(2)}.`
      const allButtons = Array.from(document.querySelectorAll('button'));
      allButtons.forEach(button => button.disabled = true);
   }
}