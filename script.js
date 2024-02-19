
const container=document.createElement('div');
container.classList.add('grid-container');
const canvasGrid=document.querySelector('#canvas');
const modeInfo=document.querySelector('#mode-info');

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
const rainbowBtn=document.querySelector('#rainbow');
let rainbowBtnClicks=0;

const opacityBtn=document.querySelector('#opacity');
let opacityBtnClicks=0;
let opacityBtnEnabled=false;


const clearBtn=document.querySelector('#reset');
let rainbowBtnEnabled=false;
let eraserEnabled=false;
let brushEnabled=true;
let currentColor='#252525';

const colorPicker=document.querySelector('#color-picker');
const brushBtn=document.querySelector('#brush');
let brushBtnClicks=1;


const eraserBtn=document.querySelector('#eraser');
let eraserBtnClicks=0;
brushBtn.style.cssText='border-style: inset; border-width: 3px;border-color: #2e2e2e;';


opacityBtn.addEventListener('click',()=>{
        opacityBtnClicks++;
        if(brushEnabled==true){
            brushBtnClicks++;
        }
        if(eraserEnabled==true){
            eraserBtnClicks++;
        }
        if(rainbowBtnEnabled==true){
            rainbowBtnClicks++;
        }
        
        if(opacityBtnClicks%2==0){
            opacityBtn.style.cssText='border-style: none;';
        console.log("opacity disabled by opacity click");
        
        }else{
            opacityBtnEnabled=true;
            opacityBtn.style.cssText='border-style: inset; border-width: 3px;border-color: #2e2e2e;';
            opacityBtn.style.transitionDuration = "0.1s";
            modeInfo.innerHTML='Opacity Progression Mode';
            console.log("opacity enabled by opacity click");
            brushEnabled=false;
            brushBtn.style.cssText='border-style: none;';
            console.log("brush disabled by opacity");
            eraserEnabled=false;
            eraserBtn.style.cssText='border-style: none;';
            console.log("eraser disabled by opacity");
            rainbowBtnEnabled=false;
            rainbowBtn.style.cssText='border-style: none;';
            console.log("rainbow disabled by opacity");

        }
})
      
rainbowBtn.addEventListener('click',()=>{
    rainbowBtnClicks++;
    console.log("rainbow clicks "+rainbowBtnClicks);
    if(opacityBtnEnabled==true){
        opacityBtnClicks++;
    }
    if(brushEnabled==true){
        brushBtnClicks++;
    }
    if(eraserEnabled==true){
        eraserBtnClicks++;
    }
    if(rainbowBtnClicks%2==0){
        rainbowBtn.style.cssText='border-style: none;';
        console.log("rainbow disabled by rainbow click");
    }
    else{
        console.log("rainbow enabled by rainbow click");
        rainbowBtn.style.cssText='border-style: inset; border-width: 3px;border-color: #2e2e2e;';
        rainbowBtn.style.transitionDuration = "0.1s";
        modeInfo.innerHTML='Psychedelic Mode';
        rainbowBtnEnabled=true;
        eraserBtn.style.cssText='border-style: none;';
        brushBtn.style.cssText='border-style: none;';
        brushEnabled=false;
        eraserEnabled=false;
        opacityBtnEnabled=false;
            opacityBtn.style.cssText='border-style: none;';
            console.log("opacity disabled by opacity");
        console.log("eraser disabled by rainbow click");
        console.log("brush disabled by rainbow click");
    }
})

brushBtn.addEventListener('click',()=>{
     brushBtnClicks++;
     console.log("brush clicks in "+brushBtnClicks);
    if(eraserEnabled==true){
        eraserBtnClicks++;
    }
    if(rainbowBtnEnabled==true){
        rainbowBtnClicks++;
    }
    if(opacityBtnEnabled){
        opacityBtnClicks++;
    }
   

    if (brushBtnClicks%2==0){
        brushBtn.style.cssText='border-style: none;';
        brushEnabled=false;
        console.log("brush disabled by brush click");
     }else{
        console.log("brush enabled by brush click");
        brushBtn.style.cssText='border-style: inset; border-width: 3px;border-color: #2e2e2e;';
        brushBtn.style.transitionDuration = "0.1s";
        modeInfo.innerHTML='Basic Color Mode';
        brushEnabled=true;
        eraserBtn.style.cssText='border-style: none;';
        eraserEnabled=false;
        rainbowBtn.style.cssText='border-style: none;';
        rainbowBtnEnabled=false;
        opacityBtnEnabled=false;
            opacityBtn.style.cssText='border-style: none;';
            console.log("opacity disabled by opacity");
        console.log("eraser disabled by brush click");
        console.log("brush clicks out "+brushBtnClicks);
     }
   
})

eraserBtn.addEventListener('click',()=>{
    eraserBtnClicks++;
    console.log("eraser clicks "+eraserBtnClicks);
    console.log("brush clicks in"+brushBtnClicks);
    if(opacityBtnEnabled==true){
        opacityBtnClicks++;
    }
    if(brushEnabled==true){
        brushBtnClicks++;
        console.log("brush clicks increased");
        }
    if(rainbowBtnEnabled==true){
        rainbowBtnClicks++;
    }
    if (eraserBtnClicks%2==0){
        eraserBtn.style.cssText='border-style: none;';
        eraserEnabled=false;
        console.log("eraser disabled by eraser click");
     }else{

        eraserBtn.style.cssText='border-style: inset; border-width: 3px;border-color: #2e2e2e;';
        eraserBtn.style.transitionDuration = "0.1s";
        modeInfo.innerHTML='Eraser';
        brushBtn.style.cssText='border-style: none;';
        brushEnabled=false;
        console.log("brush disabled by eraser click");

        rainbowBtn.style.cssText='border-style: none;';
        rainbowBtnEnabled=false;
        console.log("rainbow disabled by eraser click");

        eraserEnabled=true;
        console.log("eraser enabled by eraser click");
        console.log("brush clicks out "+brushBtnClicks);

        opacityBtnEnabled=false;
        opacityBtn.style.cssText='border-style: none;';
        console.log("opacity disabled by opacity");
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
    sliderText.innerHTML = "<b>Choose Grid Size:</b> <br>"+val+"x"+val;
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
        box.style.opacity=1;
        console.log(box.style.backgroundColor);
        console.log(box.style.opacity);
        
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

let opacityGrow=0;

function changeColor(e){
    
    if (e.type === 'mouseover' && !mouseDown) return
    if (eraserEnabled){
        e.target.style.backgroundColor='white';    
        e.target.style.opacity=1; 
    }
    else if (brushBtnClicks%2!=0&&brushEnabled){
        e.target.style.opacity=1;
        e.target.style.backgroundColor = currentColor;
        
    
    }
    else if (rainbowBtnClicks%2!=0&&rainbowBtnEnabled){
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = randomColor;
        }
    else if (opacityBtnClicks%2!=0&&opacityBtnEnabled){
        if(e.target.style.opacity==1&& e.target.style.backgroundColor=='white'){
            console.log("first element");
        e.target.style.opacity = 0;
        
        }
        
            let opacityNew=e.target.style.opacity;
            console.log(opacityNew);
            opacityNew=opacityNew*100;
            e.target.style.opacity = opacityNew +10+'%';
            console.log(opacityNew);
         e.target.style.backgroundColor = currentColor;
        
        }

    }


createGrid(16);

