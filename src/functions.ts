    function add(n1: number, n2: number){
        return n1+n2;
    }


    function printResult1(num: number): void{
        console.log('Result: '+num);
    }

    printResult1(add(12,32));

function addAndHandle(n1: number, n2: number, cb: (num: number) =>void){
    const result = n1+n2;
    cb(result);
}

    let combineValues: (n1: number, n2: number) => number;

    combineValues = add;

    console.log(combineValues(2,3));
    
    addAndHandle(1,2,(result) =>{
        console.log(result)
    })