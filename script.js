
// console.log('Hello world');

// for(let i =0; i<=10; i++){
//     console.log(i);
// }

function show (){
    console.log('Hello world');

        
    for(let i =0; i<=10; i++){
        console.log(i);
    }
}

function sum (){
    event.preventDefault(); // Prevent Browser Reload During Form Submission

    let number1 = document.getElementById('number1').value; // '34'
    let number2 = document.getElementById('number2').value; // '21'

    let numberInt1 = parseFloat(number1); // 34.0
    let numberInt2 = parseFloat(number2); // 21.0

    let result = numberInt1 + numberInt2;

    console.log(result);


}