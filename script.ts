let bodyTag = document.querySelector('body') as HTMLBodyElement;

bodyTag.addEventListener('mousemove', (e:MouseEvent) =>
{
    bodyTag.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
});
