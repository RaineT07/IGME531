/*
  # Demo code for L-systems
*/


// ## An L-System needs...
// variables, constants (alphabet)
// rules (production rules)
// a way to expand a string through iteration
// way to interpret string into visual 

// ## The dragon curve drawn using an L-system.
// variables : F G
// constants : + −
// start  : F
// rules  : (F → F+G), (G → F-G)
// angle  : 90°


const cartesianToHyper = (x,y) => {
    // if(y<=0) {
        // y=0.01;
    // }
    // if(x<=0) {
        // x=0.01;
    // }
    let u = -1/2*Math.log(y/x);
    let v = Math.sqrt(x*y);

    return [ u,v ];
}



const axiom = 'F';

const binaryRules = {
    'F': 'FF',
    'G': 'F+G-G',
    '-': '-',
    '+': '+'
}

const TriangleRules = {
  'F': 'G-F-G',
  'G': 'F+G+F',
  '-': '-',
  '+': '+'
};

const iterate_once = (lindenmayerString, ruleSet) => {
  let newString = '';
  for (let i = 0; i < lindenmayerString.length; i++) {
    const result = ruleSet[lindenmayerString[i]];
    newString += result || lindenmayerString[i];
  }
  return newString;
}

const iterateNTimes = (n, lindenmayerString, ruleSet) => {
  let newString = lindenmayerString;
  for (let i = 0; i < n; i++) {
    newString = iterate_once(newString, ruleSet);
  }
  return newString;
};

const makeVisual = (options, lindenmayerString) => {
  let theSvgString = '';
  
  // Basically constants
  let angle = (options.angle || 90) * Math.PI / 180;
  let startingPoint = options.startingPoint || [0, 0];
  let lineLength = options.lineLength || 10;

  // State
  let rotation = 0;
  let points = [startingPoint];

  const moveForward = () => {
    const lastPoint = points[points.length - 1];

    const dx = Math.cos(rotation) * lineLength;
    const dy = Math.sin(rotation) * lineLength;

    // const HyperPoint = cartesianToHyper(lastPoint[0] + dx, lastPoint[1] + dy);
    console.log(`lastPoint: ${lastPoint}`);
    points.push([lastPoint[0] + dx, lastPoint[1] + dy]);
  };

  const whatToDo = {
    'F': () => {
      return moveForward();
    },
    'G': () => {
      return moveForward();
    },
    '+': () => {
      rotation = rotation - angle;
    },
    '-': () => {
      rotation = rotation + angle;
    }
  };

console.log(lindenmayerString);
  for (let i = 0; i < lindenmayerString.length; i++) {
    const toDo = whatToDo[lindenmayerString[i]];
    // console.log(`toDo: ${toDo}`);
    toDo();
  }

  // return a path moving through all the points
  return `<polyline points="${points.join(' ')}" 
                    fill="none" stroke="black" 
                    stroke-width="1px"/>`;
  
};

const expanded = iterateNTimes(5, axiom,binaryRules);

const result = makeVisual({
  lineLength: 10,
  angle: 120,
  startingPoint: [50, 50]
}, expanded);

// get result into the svg in the dom
const svg = document.querySelector('svg');
svg.innerHTML = result;

// let oneStep = iterate_once(axiom);
// debugger;