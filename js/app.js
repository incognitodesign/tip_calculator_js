

const output = document.querySelector('.output');
const btn = document.querySelector('#btnClick');
const input = document.querySelector('input');

btn.addEventListener('click', () => {



    let yourInput = input.value;
    const tip = 0.15
    let yourTip = (yourInput * tip).toFixed(2)
    if (yourTip <= 15){
    output.innerText = yourTip;
}else{
    output.innerText = yourTip;
    output.classList.add('red');
}
});