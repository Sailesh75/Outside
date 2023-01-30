const domFunction=(element,className,text,targetClass,source,target)=>{
    var element=document.createElement(element);              //error if we put let
    element.className=className;
    element.appendChild(document.createTextNode(text));
    document.querySelector(targetClass).appendChild(element);   //querySelectorAll method returns a static list. Any changes made to the document after the querySelectorAll is used (like appendChild in this case) will not be reflected in the list of nodes returned.
    element.href=source;
    element.target=target;
}

//inside body
domFunction('navbar','nav','','body');
domFunction('div','mainContainer','','body');                                   


//inside navbar
domFunction('h3','title','OUTSIDE INTERNSHIP ASSIGNMENTS','navbar');              
domFunction('a','profileLink','Profile','navbar','profile.html');    


//inside main-container
domFunction('div','header1','','.mainContainer');
domFunction('div','cards1','','.mainContainer');
domFunction('div','header2','','.mainContainer');
domFunction('div','cards2','','.mainContainer');

//inside header
domFunction('h3','header-title','Frontend','.header1');
domFunction('h3','header-title','Javascript','.header2');

//inside cards
for(i=1;i<7;i++){
    domFunction(`div`,`gridItem gridItem${i}`,``,`.cards1`)
}
for(i=7;i<13;i++){
    domFunction(`div`,`gridItem gridItem${i}`,``,`.cards2`)
}

domFunction('h1','assignmentNumber','01','.gridItem1');
domFunction('h3','assignmentTitle','Figma','.gridItem1');
domFunction('a','assignmentCodeLink','Link','.gridItem1','assignment_0/index.html');

domFunction('h1','assignmentNumber','02','.gridItem2');
domFunction('h3','assignmentTitle','Html','.gridItem2');
domFunction('a','assignmentCodeLink','Links','.gridItem2','assignment_1/index.html');

domFunction('h1','assignmentNumber','03','.gridItem3');
domFunction('h3','assignmentTitle','CSS','.gridItem3');
domFunction('a','assignmentCodeLink','Links','.gridItem3','assignment_2/index.html');

domFunction('h1','assignmentNumber','04','.gridItem4');
domFunction('h3','assignmentTitle','SCSS','.gridItem4');
domFunction('a','assignmentCodeLink','Links','.gridItem4','assignment_3/index.html');

domFunction('h1','assignmentNumber','05','.gridItem5');
domFunction('h3','assignmentTitle','Bootstrap','.gridItem5');
domFunction('div','links bootstrap-link','','.gridItem5');
domFunction('a','assignmentCodeLink','Code','.bootstrap-link','https://github.com/Sailesh75/Outside-Internship/tree/master/assignment_4','_blank');
domFunction('a','assignmentCodeLink','Demo','.bootstrap-link','assignment_4/index.html','_blank');

domFunction('h1','assignmentNumber','06','.gridItem6');
domFunction('h3','assignmentTitle','Final project','.gridItem6');
domFunction('div','links final_project-link','','.gridItem6');
domFunction('a','assignmentCodeLink','Code','.final_project-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Final-project','_blank');
domFunction('a','assignmentCodeLink','Demo','.final_project-link','https://sailesh75.github.io/Outside-Internship/Final-project/dist/','_blank');


domFunction('h1','assignmentNumber','01','.gridItem7');
domFunction('h3','assignmentTitle','Profile','.gridItem7');
domFunction('div','links assignment1-link','','.gridItem7');
domFunction('a','assignmentCodeLink','Code','.assignment1-link','https://github.com/Sailesh75/Outside-Internship/tree/master/JS','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment1-link','https://sailesh75.github.io/Outside-Internship/','_blank');

domFunction('h1','assignmentNumber','2.1','.gridItem8');
domFunction('h3','assignmentTitle','Clock','.gridItem8');
domFunction('div','links assignment2-link','','.gridItem8');
domFunction('a','assignmentCodeLink','Code','.assignment2-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_2/clock','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment2-link','Javascript/assignment_2/clock/index.html','_blank');

domFunction('h1','assignmentNumber','2.2','.gridItem9');
domFunction('h3','assignmentTitle','Password generator','.gridItem9');
domFunction('div','links assignment3-link','','.gridItem9');
domFunction('a','assignmentCodeLink','Code','.assignment3-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_2/password_generator','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment3-link','Javascript/assignment_2/password_generator/index.html','_blank');

domFunction('h1','assignmentNumber','03','.gridItem10');
domFunction('h3','assignmentTitle','Image slider','.gridItem10');
domFunction('div','links assignment4-link','','.gridItem10');
domFunction('a','assignmentCodeLink','Code','.assignment4-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_3','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment4-link','Javascript/assignment_3/index.html','_blank');

domFunction('h1','assignmentNumber','04','.gridItem11');
domFunction('h3','assignmentTitle','Box collision','.gridItem11');
domFunction('div','links assignment5-link','','.gridItem11');
domFunction('a','assignmentCodeLink','Code','.assignment5-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_4_BoxCollision','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment5-link','Javascript/assignment_4/index.html','_blank');

domFunction('h1','assignmentNumber','5','.gridItem12');
domFunction('h3','assignmentTitle','Ant Smasher','.gridItem12');
domFunction('div','links assignment6-link','','.gridItem12');
domFunction('a','assignmentCodeLink','Code','.assignment6-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_5_AntSmasher','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment6-link','Javascript/assignment_5/index.html','_blank');