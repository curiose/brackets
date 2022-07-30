// const symbols = ['(', '[', '|', '{'];

// const pairSymbols = {
//   [')']: '(',
//   [']']: '[',
//   ['|']: '|',
//   ['}']: '{',
//   ['1']: '1',
//   ['2']: '2',
//   ['3']: '3',
//   ['4']: '4',
//   ['5']: '5',
//   ['6']: '6',
//   ['7']: '7',
//   ['8']: '8',
// }

module.exports = function check(str, bracketsConfig) {
  
  let brackets = []
  
  for (i = 0; i < bracketsConfig.length; i++) {
    brackets[i] = bracketsConfig[i].join('')
  }

  while (brackets.some(n => str.includes(n) == true)) {
    brackets.forEach(n => str = str.replaceAll(n, ''))
    }
  
  return str.length == 0 ? true : false;


  // let brackets = [];

  // for (let i = 0; i < str.length; i++) {
  //   let currentSymbol = str[i];

  //   if (symbols.includes(currentSymbol)) {
  //     brackets.push(currentSymbol);
  //   } else {
  //     if (brackets.length === 0) {
  //       return false;
  //     }

  //     let lastEl = brackets[brackets.length - 1];

  //     if (pairSymbols[currentSymbol] === lastEl) {
  //       brackets.pop();
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  // return brackets.length === 0;

  // if (str.length === 0) {
  //   return false
  // }

  // for (let i = 0; i < str.length; i++) {
  //   let currentSymbol = str[i];

  //   for (let k = str.length - 1; k < str.length; k--) {
  //     if (currentSymbol === str[k]) {
  //       brackets.push(currentSymbol)
  //       console.log(brackets)
  //       return true
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  // console.log(brackets)
}
