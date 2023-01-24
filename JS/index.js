

const domFunction=(element,className,text,targetId,source)=>{
    var element=document.createElement(element);              //error if we put let
    element.className=className;
    element.appendChild(document.createTextNode(text));
    document.querySelector(targetId).appendChild(element);   //querySelectorAll method returns a static list. Any changes made to the document after the querySelectorAll is used (like appendChild in this case) will not be reflected in the list of nodes returned.
    element.href=source;
}

domFunction('h1','title','OUTSIDE INTERNSHIP ASSIGNMENTS','body');                //inside body
domFunction('a','profileLink','Profile','body','profile.html');
domFunction('div','mainContainer','','body');                                    //inside container   
domFunction('div','gridItem gridItem1','','.mainContainer');
domFunction('div','gridItem gridItem2','','.mainContainer');
domFunction('div','gridItem gridItem3','','.mainContainer'); 
domFunction('div','gridItem gridItem4','','.mainContainer');
domFunction('div','gridItem gridItem5','','.mainContainer');
domFunction('div','gridItem gridItem6','','.mainContainer');

domFunction('h1','assignmentNumber','01','.gridItem1');
domFunction('h3','assignmentTitle','Figma','.gridItem1');
domFunction('a','assignmentCodeLink','Links','.gridItem1','assignment_0/index.html');

domFunction('h1','assignmentNumber','02','.gridItem2');
domFunction('h3','assignmentTitle','Html assignment','.gridItem2');
domFunction('a','assignmentCodeLink','Links','.gridItem2','assignment_1/index.html');

domFunction('h1','assignmentNumber','03','.gridItem3');
domFunction('h3','assignmentTitle','CSS assignment','.gridItem3');
domFunction('a','assignmentCodeLink','Links','.gridItem3','assignment_2/index.html');

domFunction('h1','assignmentNumber','04','.gridItem4');
domFunction('h3','assignmentTitle','SCSS assignment','.gridItem4');
domFunction('a','assignmentCodeLink','Links','.gridItem4','assignment_3/index.html');

domFunction('h1','assignmentNumber','05','.gridItem5');
domFunction('h3','assignmentTitle','Bootstrap assignment','.gridItem5');
domFunction('a','assignmentCodeLink','Code','.gridItem5','https://github.com/Sailesh75/Outside-Internship/tree/master/assignment_4');
domFunction('a','assignmentCodeLink','Demo','.gridItem5','assignment_4/index.html');

domFunction('h1','assignmentNumber','06','.gridItem6');
domFunction('h3','assignmentTitle','Final project','.gridItem6');
domFunction('a','assignmentCodeLink','Code','.gridItem6','https://github.com/Sailesh75/Outside-Internship/tree/master/Final-project');
domFunction('a','assignmentCodeLink','Demo','.gridItem6','https://sailesh75.github.io/Outside-Internship/Final-project/dist/');




