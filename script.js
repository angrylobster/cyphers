const input = process.argv[2];
const secondInput = process.argv[3];
const alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

if (typeof secondInput != 'undefined'){
    console.log(caesarEncode(input, secondInput));
} else {
    console.log(morseDecode(input));
}

function morseDecode(input) {
    // Do your stuff here
    let morseLetterArray = input.split(" ");
    let resultString = "";

    for (let morseLetter of morseLetterArray){
        let decodedMorseLetter = findKeyByValue(alphabet, morseLetter);
        if (typeof decodedMorseLetter != 'undefined'){
            resultString += decodedMorseLetter;
        } else {
            resultString += " "
        }
    }
    return resultString;
}

function findKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value)
}

function caesarEncode(input, shift) {
    let caesarCipherArray = input.split("");
    let caesarCipherIndexArray = [];
    let shiftQuantum = parseInt(shift);
    let resultString = "";

    for (let letter of caesarCipherArray){
        if (alphabet.hasOwnProperty(letter)){
            caesarCipherIndexArray.push(Object.keys(alphabet).indexOf(letter));
        }
        if (letter === " "){
            caesarCipherIndexArray.push(letter);
        }
    }

    for (let index in caesarCipherIndexArray){
        if (typeof caesarCipherIndexArray[index] !== "number"){
        } else if (caesarCipherIndexArray[index] + shiftQuantum > 25){
            caesarCipherIndexArray[index] = shiftQuantum - (26 - caesarCipherIndexArray[index]);
        } else if (caesarCipherIndexArray[index] + shiftQuantum < 26) {
            caesarCipherIndexArray[index] += shiftQuantum;
        }
    }

    for (let element of caesarCipherIndexArray){
        if (element !== " "){
            resultString += Object.keys(alphabet)[element];
        } else {
            resultString += " ";
        }
    }

    return input + "\n" + resultString;
}


