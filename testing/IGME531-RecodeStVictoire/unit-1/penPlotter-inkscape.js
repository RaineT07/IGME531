/*

pen plotter tiles thoughts

physical world
fountain pen
bring my own ink?
I have my own pen but it seems like travis knows whats good

digital world
looping, very connected, curves???



*/

import * as lib from './recode_library.js';


const tile1 = (x,y,stroke) => {
    let drawing = '';
    // drawing+= lib.square(0+x,0+y,100,'#000000','none');

    //line 1
    drawing += lib.bezier([0+x,50+y],  [40+x, 30+y],[50+x, 70+y],[70+x, 30+y], stroke);
    drawing += lib.bezier([70+x,30+y], [70+x, 50+y],[100+x,50+y],[100+x,50+y], stroke);
    //line 2
    drawing += lib.bezier([50+x,0 +y], [20+x, 40+y],[30+x, 80+y],[60+x, 60+y], stroke);
    drawing += lib.bezier([60+x,60+y], [40+x, 70+y],[40+x, 90+y],[50+x,100+y], stroke);
    return drawing;
};

const tile2 = (x,y,stroke) => {
    let drawing = '';
    // drawing+= lib.square(0+x,0+y,100,'#000000','none');

    //line 1
    drawing += lib.bezier([0+x, 50+y], [55+x,70+y],[35+x,-10+y],[25+x,20+y], stroke);
    drawing += lib.bezier([25+x,20+y], [25+x,20+y],[15+x,60+y],[45+x,40+y], stroke);
    drawing += lib.bezier([45+x,40+y], [30+x,60+y],[45+x,95+y],[50+x,100+y], stroke);
    //line 2
    drawing += lib.bezier([50+x,0+y],[60+x,50+y],[40+x,30+y],[50+x,10+y], stroke);
    drawing += lib.bezier([50+x,10+y],[60+x,0+y],[70+x,20+y],[50+x,50+y], stroke);
    drawing += lib.bezier([50+x,50+y],[80+x,30+y],[90+x,40+y],[100+x,50+y], stroke);   
    
    return drawing;
};

const tile3 = (x,y,stroke) => {

    let drawing = '';
    // drawing+= lib.square(0+x,0+y,100,'#000000','none');

    //line 1
    drawing += lib.bezier([0+x,50+y], [40+x,40+y],[50+x,40+y],[75+x,75+y], stroke);
    drawing += lib.bezier([75+x,75+y], [70+x,70+y],[40+x,40+y],[50+x,0+y], stroke);
    //line 2
    drawing += lib.bezier([50+x,100+y], [60+x,80+y],[50+x,70+y],[40+x,90+y], stroke);
    drawing += lib.bezier([40+x,90+y], [50+x,70+y],[70+x,40+y],[100+x,50+y], stroke);

    return drawing;
};

const tile4 = (x,y,stroke) => {
    let drawing = '';
    // drawing+= lib.square(0+x,0+y,100,'#000000','none');
    //line 1
    drawing += lib.bezier([0+x,50+y], [20+x,40+y],[30+x,20+y],[30+x,10+y], stroke);
    drawing += lib.bezier([30+x,10+y], [30+x,20+y],[40+x,30+y],[50+x,20+y], stroke);
    drawing += lib.bezier([50+x, 20+y], [60+x, 10+y], [60+x,20+y],[50+x,40+y], stroke);
    drawing += lib.bezier([50+x,40+y],[40+x,60+y],[60+x,90+y],[50+x,100+y], stroke);
    //line 2
    drawing += lib.bezier([50+x,0+y], [40+x,10+y],[40+x,70+y],[10+x,80+y], stroke);
    drawing += lib.bezier([10+x,80+y], [30+x,50+y],[40+x,90+y],[60+x,60+y], stroke);
    drawing += lib.bezier([60+x,60+y],[80+x,30+y],[100+x,50+y],[100+x,50+y], stroke);
    return drawing;
};

const drawGrid = (xMin, xMax,yMin, yMax, stroke) =>{
    let drawing='';
        for(let x=xMin; x<=xMax; x++){
            for(let y=yMin;y<=yMax;y++) {
                // pick between 1-3 randomly
                let tile = '';
                let randTile = Math.floor(Math.random() * (4 - (1) + 1) + (1));
                let chosenTile = '';
                let gridSize = 100;
                switch(randTile){
                    case 1:
                        chosenTile = tile1(x*gridSize,y*gridSize, stroke);
                        break;
                    case 2:
                        chosenTile = tile2(x*gridSize,y*gridSize, stroke);
                        break;
                    case 3:
                        chosenTile = tile3(x*gridSize,y*gridSize, stroke);
                        break;
                    case 4:
                        chosenTile = tile4(x*gridSize,y*gridSize, stroke);
                        break;
                    default:
                        chosenTile = tile1(x*gridSize,y*gridSize, stroke);
                }
                let randRotate = Math.floor(Math.random()* ( 4 - (0) + 1) + (0));
                chosenTile = lib.rotate(90*randRotate, x*gridSize+gridSize/2, y*gridSize+gridSize/2, chosenTile);
                drawing += chosenTile;
            }
        }
    return drawing;
}

const penPlotter = () =>{    
    let svgStr = '<svg width="45%" height="45%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1100 1100" style="background-color: #efeeec;">';
    let drawing = '';
    let grid = '';
    // drawing += lib.square(100,100,200,'#000000','none', 1.5);
    // let tileDraw = tile4(100, 100);
    // drawing+= tileDraw;
    

    
    // console.log(`x: ${x*50} y: ${y*50} tile: ${randTile} rotate: ${90*randRotate}`)
    grid = drawGrid(0,10,0,10, '#0000FF');
    drawing += grid
    drawing += drawGrid(0.5, 9.5, 0.5, 9.5, '#0000FF');
        
    
    svgStr += drawing + '</svg>';
    return svgStr;

}

window.onload = () =>{
    const customSvg = penPlotter();
    // console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}