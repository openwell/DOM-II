// Your code goes here
// const setStylesOnElement = function(styles, element){
//     Object.assign(element.style, styles);
// }

const element1 = document.querySelector(".intro").children[0];
element1.addEventListener('mouseover', ()=>{
    Object.assign(element1.style, { transform: 'scale(.6)', transition: 'transform 1s ease-in' });
})
element1.addEventListener('mouseout', ()=>{
    Object.assign(element1.style, { transform: 'scale(1)' });
})

document.body.addEventListener('keydown', ()=>{
    // window.scrollTo(0,document.querySelector(".footer").scrollHeight)
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
})

document.body.addEventListener('wheel', (event)=>{
//   console.log(event.deltaX, event.deltaY, event.deltaZ)
  const pTag = document.querySelectorAll('p')
  pTag.forEach(element => {
      element.style.fontSize = `${event.deltaX * 16}px`
  });
})


