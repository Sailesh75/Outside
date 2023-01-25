const domFunction=(element,className,text,targetId,type,min,max)=>{
    var element=document.createElement(element);              
    element.className=className;
    element.appendChild(document.createTextNode(text));
    document.querySelector(targetId).appendChild(element);  
    element.type=type;
    element.min=min;
    element.max=max;
}

domFunction('h1','title','Password Generator','.container');
domFunction('form','form','','.container');

domFunction('label','label','Enter desired length:','.form',);
domFunction('input','charLength','','.form','number','1','20');
domFunction('br','','','.form');

domFunction('label','label','Uppercase Character:','.form',);
domFunction('input','uppercase','','.form','checkbox');
domFunction('br','','','.form');

domFunction('label','label','Lowercase Character:','.form',);
domFunction('input','lowercase','','.form','checkbox');
domFunction('br','','','.form');

domFunction('label','label','Number:','.form',);
domFunction('input','numbers','','.form','checkbox');
domFunction('br','','','.form');

domFunction('label','label','Special Character:','.form',);
domFunction('input','symbols','','.form','checkbox');
domFunction('br','','','.form');

domFunction('button','generate-password','Generate-password','.form','');
domFunction('h3','output-text','Your Password:','.container');
domFunction('span','output','','.container');


let uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase='abcdefghijklmnopqrstuvwxyz'
let numbers='0123456789';
let specialChar='!@#$%&_-+';

const characterUppercase = document.querySelector('.uppercase');
const characterLowercase = document.querySelector('.lowercase');
const characterNumbers = document.querySelector('.numbers');
const characterSymbols = document.querySelector('.symbols');
const characterAmount=document.querySelector('.charLength');

document.querySelector(".generate-password").addEventListener("click", e => {
    e.preventDefault();
    characters='';
    var num=Number(characterAmount.value);

    
    if(characterUppercase.checked){
        characters+=uppercase;
    }
    if(characterLowercase.checked){
        characters+=lowercase;
    }
    if(characterNumbers.checked){
        characters+=numbers;
    }
    if(characterSymbols.checked){
        characters+=specialChar;
    }

    const password=generatePassword(num, characters);
    console.log(password);
    document.querySelector('.output').innerText=password;
    });

  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  };


