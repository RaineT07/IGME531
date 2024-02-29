import * as lib from './recode_library.js';


//variables: FG
//constants: +-
//start (axiom): F
 //rules: (f > F+G), (G> F-G)
//way to interpret string to visual
//way to expand through iteration
// angle: 90

let alphabet = ['F', 'G', '+', '-']
const axiom = 'F';
let iterations = 3;

const rules = {
  'F': 'F+G',
  'G':'F-G',
  '-':'-',
  '+':'+'
}


const iterate_once = (axiom) =>{
  let newStr = '';

  newStr = Array.from(axiom).map((char) => {
    return rules[char];
  }).join('');

  return newStr;
}

