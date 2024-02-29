
import * as lib from './recode_library.js';

const desOrdres = () =>{
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 600" style="background-color: #efeeec;">';
    let drawing = '';
    let zMax = 5;
    for(let x=1; x<=17; x++){
        for(let y=1;y<=10;y++){
            let squareSet = '';
            for(let z=1;z<=zMax;z++){
                let centerX = (zMax*6)*x;
                let centerY = (zMax*6)*y;
                let size = 6*z;
                let calcX = centerX - size/2;
                let calcY = centerY - size/2;
                let randRotate = Math.floor(Math.random()* ( 10 - (-10) + 1) + (-10));
                let randStrokeWidth = Math.random() * 2;
                console.log(randStrokeWidth);
                squareSet += lib.rotate(randRotate, centerX,centerY, lib.square(calcX,calcY,size,'#000000','none', randStrokeWidth));
            }
            drawing+= squareSet;
            // drawing+=squareSet;
        }
    }
    svgStr+= lib.translate(0,0, drawing);
    svgStr += '</svg>';
    return svgStr;
}

const Var1 = () =>{
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 600" style="background-color: #efeeec;">';
    let drawing = '';
    let zMax = 5;
    for(let x=1; x<=17; x++){
        for(let y=1;y<=10;y++){
            let squareSet = '';
            for(let z=1;z<=zMax;z++){
                let centerX = (zMax*6)*x;
                let centerY = (zMax*6)*y;
                let size = 6*z;
                let calcX = centerX - size/2;
                let calcY = centerY - size/2;
                let randRotate = Math.floor(Math.random()* ( 10 - (-10) + 1) + (-10));
                let randStrokeWidth = Math.random() * 2;
                console.log(randStrokeWidth);
                squareSet += lib.rotate(randRotate, centerX,centerY, lib.square(calcX,calcY,size,'#000000','none', randStrokeWidth));
            }
            drawing+= squareSet;
            // drawing+=squareSet;
        }
    }
    svgStr+= lib.translate(0,0, drawing);
    svgStr += '</svg>';
    return svgStr;
}

window.onload = () =>{
    const customSvg = desOrdres();
    console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}

