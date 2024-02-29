// import { noise } from './perlin.js';
import * as lib from './recode_library.js';



const interruptions = () =>{    
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 500 250" style="background-color: #efeeec;">';
    let drawing = '';
    
    let MaxX=40;
    let MaxY=40;
    let length=10;
    let x=0;
    let y=0;
    //make grid of randomly rotated lines of abt 15px length

    noise.seed(Math.random());
    for(x=0; x<=MaxX; x++){
        for(y=0; y<=MaxY; y++){
            let lineset = '';
            let centerX = x*5;
            let centerY = y*5;
            let randRotate = Math.floor(Math.random()* ( 360 - (-360) + 1) + (-360));
            console.log(noise.simplex2(x,y))
            if(noise.simplex2(x/30,y/30) > -0.65){
                lineset += lib.rotate(randRotate, centerX, centerY, 
                    lib.line(centerX, centerY-length/2, centerX, centerY+length/2, '#000000', 0.5));
            }
            drawing+=lineset;
        }
    }
    //make a visualization of perlin noise next to the grid
    




    svgStr += lib.translate(10,15,drawing) + '</svg>';
    return svgStr;

}



window.onload = () =>{
    const customSvg = interruptions();
    console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}