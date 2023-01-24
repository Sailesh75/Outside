const domFunction=(element,className,text,targetId,source,href,target)=>{
    var element=document.createElement(element);             
    element.className=className;
    element.appendChild(document.createTextNode(text));
    document.querySelector(targetId).appendChild(element);   
    element.src=source;
    element.href=href;
    element.target=target;
}

//container
domFunction('div','image-div','','.container');

//img
domFunction('img','profile-pic','','.image-div','./CSS/img/profile.jpg');

//icon-div
domFunction('div','icon-div','','.container');

//github-icon
domFunction('a','github-icon','','.icon-div','','https://github.com/Sailesh75');
domFunction('img','icons','','.github-icon','./CSS/img/github.svg','_blank');

//linkedIn-icon
domFunction('a','linkedIn-icon','','.icon-div','','https://www.linkedin.com/in/saileshkafle/');
domFunction('img','icons','','.linkedIn-icon','./CSS/img/linkedIn.svg','_blank');

//twitter-icon
domFunction('a','twitter-icon','','.icon-div','','#');
domFunction('img','icons','','.twitter-icon','./CSS/img/twitter.svg','_blank');


//text-form
for(i=0;i<8;i++){
    domFunction(`div`,`text-div text-div${i}`,``,`.container`)
}

domFunction('h3','title','Name:','.text-div1');
domFunction('p','text','Sailesh Kafle','.text-div1');

domFunction('h3','title','DOB:','.text-div2');
domFunction('p','text','1999 August 08','.text-div2');

domFunction('h3','title','Address:','.text-div3');
domFunction('p','text','Birauta-17,Pokhara','.text-div3');

domFunction('h3','title','Email:','.text-div4');
domFunction('p','text','saileshkafle47@gmail.com','.text-div4');

domFunction('h3','title','Contact:','.text-div5');
domFunction('p','text','+977 9846141189','.text-div5');

domFunction('h3','title','College:','.text-div6');
domFunction('p','text','Advanced College of Engineering and management','.text-div6');

domFunction('h3','title','Faculty:','.text-div7');
domFunction('p','text','Computer Engineering','.text-div7');


