const domFunction=(element,className,text,targetId,source,href)=>{
    var element=document.createElement(element);             
    element.className=className;
    element.appendChild(document.createTextNode(text));
    document.querySelector(targetId).appendChild(element);   
    element.src=source;
    element.href=href;
}

domFunction('div','image-div','','.container');
domFunction('img','profile-pic','','.image-div','./CSS/img/profile.jpg');

domFunction('div','icon-div','','.container');
domFunction('a','github-icon','','.icon-div','','#');
domFunction('img','','','.github-icon','./CSS/img/github.svg');

domFunction('a','linkedIn-icon','','.icon-div','','#');
domFunction('img','','','.linkedIn-icon','./CSS/img/linkedIn.svg');

domFunction('a','twitter-icon','','.icon-div','','#');
domFunction('img','','','.twitter-icon','./CSS/img/twitter.svg');