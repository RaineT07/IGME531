
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

const var2 = () =>{
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 700" style="background-color: #efeeec;">';
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
                let randRotate = Math.floor(Math.random()* ( 30 - (-30) + 1) + (-30));
                let randStrokeWidth = Math.random() * 2;
                let randTranslateX = Math.floor(Math.random()* ( 5 - (-5) + 1) + (-5));
                let randTranslateY = Math.floor(Math.random()* ( 5 - (-5) + 1) + (-5));
                console.log(randStrokeWidth);
                squareSet += lib.translate(calcX/3 + randTranslateX, calcY/3 + randTranslateY,
                                lib.rotate(randRotate, centerX,centerY, 
                                lib.equalTriangle(centerX,centerY,size,'#000000','none', randStrokeWidth)));

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
    const customSvg = var2();
    console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}

export {desOrdres, var2};