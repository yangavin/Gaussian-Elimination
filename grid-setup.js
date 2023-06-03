const systemGridItems = document.querySelectorAll('#system-container *');
const inputs = Array.from(document.querySelectorAll('input'));

systemGridItems.forEach((child)=>{
    child.style.gridArea = child.id;
});

inputs.forEach((input)=>{
    input.setAttribute('placeholder', '0');
    input.classList.toggle('dark-mode');
})