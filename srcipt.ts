let bodyTag = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLBodyElement>;

bodyTag[0].addEventListener('mousemove', (e:MouseEvent) =>
{
    bodyTag[0].style.backgroundColor = "rgb(90,70, 40)";
});