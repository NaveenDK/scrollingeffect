const boxes = document.querySelectorAll('.box')

window.addEventListener("scroll",checkBoxes)
console.log("HIII");
function checkBoxes()
{
    console.log("hi")
   const triggerBottom =  window.innerHeight/5 *4;
   boxes.forEach(box =>{
       const boxTop = box.getBoundingClientRect().top
     console.log(boxTop);
       if(boxTop <triggerBottom){
           box.classList.add('show')
       }else{
           box.classList.remove('show')
       }
   })
}