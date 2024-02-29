
import * as lib from './recode_library.js';



const schotter = () =>{
    let svgStr = '<svg width="50%" height="50%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 1000" style="background-color: #efeeec;">';
    let drawing = '';
    let zMax = 5;
    for(let x=1; x<=10; x++){
        for(let y=0;y<=20;y++){
            let squareSet = '';
            let centerX = (zMax*6)*x;
            let centerY = (zMax*6)*y;
            let size = 25
            let randRotate = Math.floor(Math.random()* ( y*1.7 - (-y*1.7) + 1) + (-y));
            let randTranslateX = Math.floor(Math.random()* ( y/1.5 - (-y/1.5) + 1) + (-y/1.5));
            let randTranslateY = Math.floor(Math.random()* ( y/1.5 - (-y/1.5) + 1) + (-y/1.5));
            squareSet += lib.translate(centerX/2 + randTranslateX, centerY/2 + randTranslateY,
                        lib.rotate(randRotate, centerX,centerY, 
                        lib.pentagon(centerX,centerY,size,'#000000','none')));
            drawing+= squareSet;
            // drawing+=squareSet;
        }
    }
    svgStr+= lib.translate(20,25, drawing);
    svgStr += '</svg>';
    return svgStr;
}


window.onload = () =>{
    const customSvg = schotter();
    // console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}

