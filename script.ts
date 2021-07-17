let bodyTag = document.querySelector('body') as HTMLBodyElement;



bodyTag.addEventListener('mousemove', (e:MouseEvent) =>
{
    let color1 = "rgb("+e.offsetX+","+e.offsetY+", 40)";
    let color2 = "rgb("+e.offsetY+","+e.offsetX+", 40)";

    bodyTag.style.backgroundImage = 'linear-gradient(100deg,'+ color1+',red,orange,yellow, '+ color2+', green,blue,indigo,violet)';

    // bodyTag.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
});
