console.log('hello');

document.addEventListener('DOMContentLoaded', () => {

    const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    console.log(interBubble);

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    console.log(`X target is ${tgX}`)
    tgY = event.clientY;
    console.log(`y target is ${tgY}`)
});

    move();

});