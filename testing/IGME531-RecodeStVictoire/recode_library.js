


// const mySvg = () =>{
//         return `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 117 119">
//   <g id='background'>
//     <rect x='0' y='0' width='150' height='150' style='fill:#efeeec;'/>
//   </g>
//   <g id='squares'>
//     <g id='background-square'>
//       <g transform="rotate(65, 40,30)">
//           <rect x='12' y='20' width='30' height='30' style='fill:#6b2933;'/>
//       </g>
//       <g transform='rotate(65,60,35)'>
//           <rect x='85' y='30' width='30' height='30' style='fill:#6b2933;'/>
//       </g>
//       <g transform='rotate(3,-12,9)'>
//           <rect x='70' y='48' width='30' height='30' style='fill:#6b2933;'/>
//       </g>
//     </g>
//     <g id='midground'>
//       <g transform="rotate(3,25,40)">
//           <rect x='2' y='45' width='30' height='30' style="fill:#bf2b2b;"/>
//       </g>
//       <g transform='rotate(-3, 50,18)' opacity='0.97'>
//           <rect x='35' y='3' width='30' height='30' style='fill:#c0302d;'/>
//       </g>
//       <g transform='rotate(45,85,98)'>
//           <rect x='68' y='85' width='30' height='30' style='fill:#c0302d;'/>
//       </g>
//     </g>
//     <g id='foreground'>
//       <g transform="rotate(45,30,45)">
//           <rect x='10' y='30' width='30' height='30' style='fill:#e94039;'/>
//       </g>
//       <g transform='rotate(75,70,50)'>
//           <rect x='48' y='35' width='30' height='30' style='fill:#e94039;'/>
//       </g>
//       <g transform='rotate(15,91,100)'>
//           <rect x='83' y='83' width='30' height='30' style='fill:#e72524;'/>
//       </g>
//     </g>
//   </g>
// </svg>`;
// }

// //maroon: #6b2933
//     //1: #bf2b2b
//     //2: #e94039
//     //3: #6b2933
//     //4: #c0302d
//     //5: #e94039
//     //6: #6b2933
//     //7: #6b2933
//     //8: #bf2b2b
//     //9: #e72524

const rect = (x,y,width,height,stroke='none',fill) =>{
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" stroke="${stroke}" fill="${fill}"/>`
}

const circle = (cx,cy,r,stroke='none',fill) =>{
    return `<circle cx="${cx}" cy="${cy}" r="${r}" stroke="${stroke}" fill="${fill}"/>`
}

const ellipse = (cx,cy,rx,ry,stroke='none',fill) =>{ 
    return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" stroke="${stroke}" fill="${fill}"/>`
}

const triangle = (x1,y1,x2,y2,x3,y3,stroke='none',fill) =>{
  return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" stroke="${stroke}" fill="${fill}"/>`
}

const equalTriangle = (x,y,width,stroke='none',fill) =>{
  let cx = x;
  let cy = y;

  return `<polygon points="${cx},${cy-width/2},${cx+width/2},${cy+width/2},${cx-width/2},${cy+width/2}" stroke="${stroke}" fill="${fill}"/>`;
}

const pentagon = (centerX, centerY, size, stroke, fill, stroke_width) =>{
  let points = [];
  let end = '';
  for(let i=0; i<6; i++){
    let angle = (i*2*Math.PI)/5;
    let coords = polarToCartesian(size, angle);
    coords[0]+=centerX;
    coords[1]+=centerY;
    points.push(`${coords[0]},${coords[1]}`);
    if(i==0){
      end=`${coords[0]},${coords[1]}`;
    }
  }
  points.join(' ');
  // points+=end;
  console.log(points);
  // console.log(`<polyline points="${points}" stroke="${stroke}" fill="${fill}" stroke-width:${stroke_width}/>`);
  return `<polyline points="${points}" stroke="${stroke}" fill="${fill}" stroke-width:${stroke_width}/>`;
}

const polygon = (points,stroke='none',fill) =>{
    return `<polygon points="${points}" stroke="${stroke}" fill="${fill}"/>`;
}
const line = (x1,y1,x2,y2,stroke, stroke_width) =>{
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${stroke_width}"/>`;
}
const square = (x,y,width,stroke='none',fill, stroke_width='1') =>{
    return `<rect x="${x}" y="${y}" width="${width}" height="${width}" stroke="${stroke}" fill="${fill}" stroke-width="${stroke_width}"/>`;
}

const polyline = (points,stroke,fill) =>{
    return `<polyline points="${points}" stroke="${stroke}" fill="${fill}"/>`;
}

const path = (d,stroke,fill) =>{
    return `<path d="${d}" stroke="${stroke}" fill="${fill}"/>`;
}

const bezier = ([startX, startY], [controlX, controlY], [controlX2, controlY2], [endX, endY], stroke, fill=
  'none') =>{
  return `<path d="M ${startX} ${startY} C ${controlX} ${controlY} ${controlX2} ${controlY2} ${endX} ${endY}" stroke="${stroke}" fill="${fill}"/>`;
  }

const rotate = (angle,x,y,children) =>{
    return `<g transform="rotate(${angle},${x},${y})">${children}</g>`;
}

const scale = (x,y=x,children) =>{
    console.log(`<g transform="scale(${x},${y})">${children}</g>`)
    return `<g transform="scale(${x},${y})">${children}</g>`;
}

const translate = (x,y,children) =>{
    return `<g transform="translate(${x},${y})">${children}</g>`;
}

const opacity = (opacity,children) =>{
    return `<g opacity="${opacity}">${children}</g>`;
}

const polarToCartesian = (magnitude,directionAngle) =>{
  let x=magnitude * Math.cos(directionAngle);
  let y=magnitude * Math.sin(directionAngle);
  return [x,y];
}

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}




const recreateSvg = () =>{
  return `<svg width="50%" height="50%" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 118 120">
    <g id='backdrop'>
     ${square(0,0,150,'none','#efeeec')};
    </g>
    <g id='squares'>
      <g id='background'>
        ${rotate(65, 40,30, rect(12,20,30,30,'none','#6b2933'))}
        ${rotate(65, 60,35, rect(85,30,30,30,'none','#6b2933'))}
        ${rotate(3, -12,9, rect(70,48,30,30,'none','#6b2933'))}
      </g>
      <g id='midground'>
        ${rotate(10, 25,40, rect(12,45,30,30,'none','#bf2b2b'))}
        ${rotate(-3, 50,18, rect(35,3,30,30,'none','#c0302d'))}
        ${rotate(45, 85,98, rect(68,85,30,30,'none','#c0302d'))}
      </g>
      <g id='foreground'>
        ${rotate(45, 30,45, rect(10,30,30,30,'none','#e94039'))}
        ${rotate(75, 70,50, rect(48,35,30,30,'none','#e94039'))}
        ${rotate(15, 91,100, rect(83,83,30,30,'none','#e72524'))}
      </g>
    </g>
  </svg>`;
}

const varyOneSvg = () =>{
  return `<svg width="200%" height="=200%" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 100">
    <g id='backdrop'>
     ${square(0,0,1500,'none','#efeeec')};
    </g>
    <g id='squares'>
      <g id='background'>
        ${rotate(40,25,13, equalTriangle(25,13,30,'none','#6b2933'))}
        ${rotate(85,80,43, equalTriangle(80,43,30,'none','#6b2933'))}
        ${rotate(20,60,42, equalTriangle(60,42,30,'none','#6b2933'))}
      </g>
      <g id='midground'>
        ${rotate(95,17,45, equalTriangle(17,45,30,'none','#bf2b2b'))}
        ${opacity(0.95, rotate(60,45,10, equalTriangle(45,10,30,'none','#c0302d')))}
        ${rotate(30,73,45, equalTriangle(73,65,30,'none','#c0302d'))}
      </g>
      <g id='foreground'>
        ${rotate(63,22,28, equalTriangle(22,28,30,'none','#e94039'))}
        ${rotate(90,60,25, equalTriangle(60,25,30,'none','#e94039'))}
        ${rotate(320,75,70, equalTriangle(75,70,30,'none','#e72524'))}
      </g>
    </g>
  </svg>`;
}


// window.onload = () =>{
//   const theSvg = varyOneSvg();
//   console.log(theSvg);
//   document.querySelector('svg').outerHTML = theSvg;  

// };

export {rect, 
  circle, 
  ellipse, 
  triangle, 
  equalTriangle, 
  pentagon, 
  polygon, 
  line, 
  square, 
  polyline, 
  path, 
  bezier,
  rotate, 
  scale, 
  translate, 
  opacity, 
  polarToCartesian, 
  hslToHex, 
  recreateSvg, 
  varyOneSvg};