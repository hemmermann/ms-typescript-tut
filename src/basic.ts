console.log('test')


function addFce(n1: number, n2: number, showResult: boolean, phrase: string){
  const result = n1+n2;
  if(showResult){
      console.log(phrase + result);
  }else{
      return result;
  }
}

let number1 = 5;
const nb1 = 222222;
const nb2 = 2.1;
const printResult = true;

const res = addFce(nb1,nb2,printResult,'phrase');
console.log('res:'+res);