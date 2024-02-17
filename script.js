
const container=document.createElement('div');
container.classList.add('grid-container');
const canvasGrid=document.querySelector('#canvas');

canvasGrid.appendChild(container);

let mouseDown = false;
document.body.onmousedown= () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
document.addEventListener("dragover", (event) => {
    event.preventDefault();
});

const slider=document.querySelector('#slider');
const sliderText=document.querySelector('#slider-text');
const containerWidth=container.offsetWidth;

const clearBtn=document.querySelector('#reset');
let eraserEnabled=false;
let brushEnabled=false;
let currentColor='#070F2B';

const colorPicker=document.querySelector('#color-picker');
const brushBtn=document.querySelector('#brush');
let brushBtnClicks=1;


const eraserBtn=document.querySelector('#eraser');
let eraserBtnClicks=0;

brushBtn.addEventListener('click',()=>{
    if (brushBtnClicks%2==0){
        brushBtn.style.cssText='border-style: none;';
     }else{
        brushBtn.style.cssText='border-style: inset; border-width: 3px;border-color: #535C91;';
        brushEnabled=true;
        eraserBtn.style.cssText='border-style: none;';
        eraserEnabled=false;
        console.log("eraser disabled");
     }
     brushBtnClicks++;
})

eraserBtn.addEventListener('click',()=>{
    eraserBtnClicks++;
    if (eraserBtnClicks%2==0){
        eraserBtn.style.cssText='border-style: none;';
        eraserEnabled=false;
        brushEnabled=false;
        console.log("eraser disabled");
     }else{
        eraserBtn.style.cssText='border-style: inset; border-width: 3px;border-color: #535C91;';
        brushBtn.style.cssText='border-style: none;';
        eraserEnabled=true;
        console.log("eraser enabled");
     }
    
})
const resetBtn=document.querySelector('#clear');

resetBtn.addEventListener('click',()=>{
    resetGrid();
})

function newColor () {
   currentColor=this.value;
   console.log(this.value);
}

colorPicker.addEventListener('change', newColor);


slider.addEventListener('input',()=>{
    let val = slider.value
    sliderText.innerHTML = val+"x"+val;
    clearGrid();
    createGrid(val);
})


function clearGrid(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}

function resetGrid(){
    console.log('clear');
    const boxes=document.querySelectorAll('#boxes');
    boxes.forEach(box => {
        box.style.backgroundColor='white';
    })
}


function createGrid(noOfRows){
    console.log(noOfRows);
    for(let i=0;i<noOfRows;i++){
       
        const rows=document.createElement('div');
        
        rows.classList.add('rows');
        container.appendChild(rows); 
        rows.style.width=containerWidth + 'px';
        rows.style.height=containerWidth/noOfRows + 'px';
        
     for(let i=0;i<noOfRows;i++){
       
        const rowSquares=document.createElement('div');
        rowSquares.classList.add('row-squares');
        rowSquares.addEventListener('mouseover', changeColor);
        rowSquares.addEventListener('mousedown', changeColor);
        rowSquares.style.backgroundColor = 'white';  
        rowSquares.setAttribute('id','boxes');
        rows.appendChild(rowSquares);
        rowSquares.style.width=containerWidth/noOfRows + 'px';
        rowSquares.style.height=containerWidth/noOfRows + 'px';
       
     }
    
  
}
    
    // container.onclick== function(e) {
    //     console.log(e.target.id);
    //     changeColor(e);
    
      
    // }

//     container.onmouseover = function(e) {
//         console.log(e.target.id);
//         changeColor(e);
//     }
//    changeColor=(e) => {
//         if(mousedown){
//            e.target.style.backgroundColor='red';
//         }
//     }
//     container.addEventListener("mouseover", eventHandler, false);
//   function eventHandler(event) {
//     if (event.target.id !== "pixel") {
//       return;
//     }
//     changeColor(event);
//   }

//   function changeColor(event) {
//     event.target.setAttribute("style", "background-color:red;");
//   }
}

function changeColor(e){
    
    if (e.type === 'mouseover' && !mouseDown) return
    if (eraserEnabled){
        e.target.style.backgroundColor = 'white';      
    }
    else if (brushBtnClicks%2==0&&brushEnabled){
    e.target.style.backgroundColor = currentColor;
    }

}
createGrid(16);

