
import * as lib from './recode_library.js';



const schotter = () =>{
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 600" style="background-color: #efeeec;">';
    let drawing = '';
    let zMax = 5;
    for(let x=1; x<=8; x++){
        for(let y=0;y<=17;y++){
            let squareSet = '';
            let centerX = (zMax*6)*x;
            let centerY = (zMax*6)*y;
            let size = 30
            let calcX = centerX - size/2;
            let calcY = centerY - size/2;
            let randRotate = Math.floor(Math.random()* ( y*1.7 - (-y*1.7) + 1) + (-y));
            let randTranslateX = Math.floor(Math.random()* ( y/2 - (-y/2) + 1) + (-y/2));
            let randTranslateY = Math.floor(Math.random()* ( y/2 - (-y/2) + 1) + (-y/2));
            squareSet += lib.translate(calcX/50 + randTranslateX, calcY/50 + randTranslateY,
            lib.rotate(randRotate, centerX,centerY, 
                        lib.square(calcX,calcY,size,'#000000','none')));
            drawing+= squareSet;
            // drawing+=squareSet;
        }
    }
    svgStr+= lib.translate(20,20, drawing);
    svgStr += '</svg>';
    return svgStr;
}


window.onload = () =>{
    const customSvg = schotter();
    console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}

