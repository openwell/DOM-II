// Your code goes here
// const setStylesOnElement = function(styles, element){
//     Object.assign(element.style, styles);
// }

const element1 = document.querySelector(".intro").children[0];
element1.addEventListener("mouseover", () => {
  Object.assign(element1.style, {
    transform: "scale(.6)",
    transition: "transform 1s ease-in"
  });
});
element1.addEventListener("mouseout", () => {
  Object.assign(element1.style, { transform: "scale(1)" });
});

document.body.addEventListener("keydown", () => {
  //   window.scroll({
  //     top: 100,
  //     left: 100,
  //     behavior: 'smooth'
  //   });
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
});

// document.body.addEventListener('wheel', (event)=>{
// //   console.log(event.deltaX, event.deltaY, event.deltaZ)
//   const pTag = document.querySelectorAll('p')
//   pTag.forEach(element => {
//       element.style.fontSize = `${event.deltaX * 16}px`
//   });
// })

// window.addEventListener("load", () => {
//   document.body.style.display = "none";
//   setTimeout(function() {
//     document.body.style.display = "block";
//   }, 3000);
// });

window.addEventListener("resize", function() {
  if (window.innerWidth < 768) {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

 window.addEventListener("scroll", function(ele){
    //  console.log(ele)
    document.body.querySelector(".main-navigation").style.background = 'purple';
 });


 var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

 const nav = document.body.querySelectorAll('.nav-link')
 for(let i=0; i<= nav.length; ++i){
    nav[i].addEventListener('dblclick', ele =>{
        ele.target. style.color = colorArray[ `${Math.floor(Math.random() * colorArray.length)}`] 
    })  
}

function allowDrop(ev) {
    ev.preventDefault();
  }
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }




