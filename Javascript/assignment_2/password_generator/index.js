const domFunction=(elementName,className,text,targetId,type,min,max)=>{
    let element=document.createElement(elementName);              
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

domFunction('button','generate-password','Generate Password','.container','');
domFunction('h3','output-text','Your Password:','.container');
domFunction('span','output','','.container');
domFunction('p','error','','.container');


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
    let count=0;
    var num=Number(characterAmount.value);

    
    if(characterUppercase.checked){
        characters+=uppercase;
        count++;
    }
    if(characterLowercase.checked){
        characters+=lowercase;
        count++;
    }
    if(characterNumbers.checked){
        characters+=numbers;
        count++;
    }
    if(characterSymbols.checked){
        characters+=specialChar;
        count++;
    }

    if(count==0){
        document.querySelector('.error').innerText='Select atleast one criteria!!'
    }
    else if(num<count){
        document.querySelector('.error').innerText='Desired length is small than the selected criteria!!'
    }
    else{
        const password=generatePassword(num, characters);
        console.log(password);
        document.querySelector('.output').innerText=password;
    }
    });

  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  };


