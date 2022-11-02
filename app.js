const bar=document.getElementsByClassName('fa-bars')[0];
const cross=document.getElementsByClassName('fa-xmark')[0];
const menu=document.getElementsByClassName('responsive_links')[0];
bar.addEventListener('click',()=>{
    bar.style.display='none';
    cross.style.display='block';
    menu.style.display='flex';
})
cross.addEventListener('click',()=>{
    bar.style.display='block';
    cross.style.display='none';
    menu.style.display='none';
})