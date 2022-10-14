function focused() {
    let divSection = Array.from(document.querySelectorAll('div input'));
    
divSection.forEach(div=>{
    div.addEventListener('focus', (e)=>{
        let parentElement = e.target.parentElement;
        parentElement.setAttribute('class','focused');
    });
});

divSection.forEach(div=>{
    div.addEventListener('blur', (e)=>{
        let parentElement = e.target.parentElement;
        parentElement.removeAttribute('class');
    });
});
}