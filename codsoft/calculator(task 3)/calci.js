let input = document.getElementById('displayBox');
let Buttons = document.querySelectorAll('button');

let string = "";
let a = Array.from(Buttons);
a.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML == 'C'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DE'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
      })
})