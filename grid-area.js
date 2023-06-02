const systemGridItems = document.querySelectorAll('#system-container *');
systemGridItems.forEach((child)=>{
    child.style.gridArea = child.id;
});