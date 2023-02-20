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
domFunction('div','header3','','.mainContainer');
domFunction('div','cards3','','.mainContainer');

//inside header
domFunction('h3','header-title','Frontend','.header1');
domFunction('h3','header-title','Javascript','.header2');
domFunction('h3','header-title','React','.header3');

//inside cards
for(i=1;i<7;i++){
    domFunction(`div`,`gridItem gridItem${i}`,``,`.cards1`)
}
for(i=7;i<16;i++){
    domFunction(`div`,`gridItem gridItem${i}`,``,`.cards2`)
}
for(i=16;i<21;i++){
    domFunction(`div`,`gridItem gridItem${i}`,``,`.cards3`)
}

//figma
domFunction('h1','assignmentNumber','01','.gridItem1');
domFunction('h3','assignmentTitle','Figma','.gridItem1');
domFunction('a','assignmentCodeLink','Link','.gridItem1','assignment_0/index.html');

//html
domFunction('h1','assignmentNumber','02','.gridItem2');
domFunction('h3','assignmentTitle','Html','.gridItem2');
domFunction('a','assignmentCodeLink','Links','.gridItem2','assignment_1/index.html');

//css
domFunction('h1','assignmentNumber','03','.gridItem3');
domFunction('h3','assignmentTitle','CSS','.gridItem3');
domFunction('a','assignmentCodeLink','Links','.gridItem3','assignment_2/index.html');

//scss
domFunction('h1','assignmentNumber','04','.gridItem4');
domFunction('h3','assignmentTitle','SCSS','.gridItem4');
domFunction('a','assignmentCodeLink','Links','.gridItem4','assignment_3/index.html');

//bootstrap
domFunction('h1','assignmentNumber','05','.gridItem5');
domFunction('h3','assignmentTitle','Bootstrap','.gridItem5');
domFunction('div','links bootstrap-link','','.gridItem5');
domFunction('a','assignmentCodeLink','Code','.bootstrap-link','https://github.com/Sailesh75/Outside-Internship/tree/master/assignment_4','_blank');
domFunction('a','assignmentCodeLink','Demo','.bootstrap-link','assignment_4/index.html','_blank');

//frontend final project
domFunction('h1','assignmentNumber','06','.gridItem6');
domFunction('h3','assignmentTitle','Final project','.gridItem6');
domFunction('div','links final_project-link','','.gridItem6');
domFunction('a','assignmentCodeLink','Code','.final_project-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Final-project','_blank');
domFunction('a','assignmentCodeLink','Demo','.final_project-link','https://sailesh75.github.io/Outside-Internship/Final-project/dist/','_blank');

//Javascript
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

domFunction('h1','assignmentNumber','4.1','.gridItem11');
domFunction('h3','assignmentTitle','Box collision','.gridItem11');
domFunction('div','links assignment5-link','','.gridItem11');
domFunction('a','assignmentCodeLink','Code','.assignment5-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_4_BoxCollision','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment5-link','Javascript/assignment_4_BoxCollision/index.html','_blank');

domFunction('h1','assignmentNumber','4.2','.gridItem12');
domFunction('h3','assignmentTitle','Ant Smasher','.gridItem12');
domFunction('div','links assignment6-link','','.gridItem12');
domFunction('a','assignmentCodeLink','Code','.assignment6-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_5_AntSmasher','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment6-link','Javascript/assignment_5_AntSmasher/index.html','_blank');

domFunction('h1','assignmentNumber','05','.gridItem13');
domFunction('h3','assignmentTitle','Car Lane Game','.gridItem13');
domFunction('div','links assignment7-link','','.gridItem13');
domFunction('a','assignmentCodeLink','Code','.assignment7-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_6_car_lane_game','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment7-link','Javascript/assignment_6_car_lane_game/index.html','_blank');

domFunction('h1','assignmentNumber','06','.gridItem14');
domFunction('h3','assignmentTitle','Flappy Bird','.gridItem14');
domFunction('div','links assignment8-link','','.gridItem14');
domFunction('a','assignmentCodeLink','Code','.assignment8-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/assignment_7_flappybird','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment8-link','Javascript/assignment_7_flappybird/index.html','_blank');

domFunction('h1','assignmentNumber','07','.gridItem15');
domFunction('h3','assignmentTitle','Final Project - Kitti','.gridItem15');
domFunction('div','links assignment9-link','','.gridItem15');
domFunction('a','assignmentCodeLink','Code','.assignment9-link','https://github.com/Sailesh75/Outside-Internship/tree/master/Javascript/Final_project_kitti','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment9-link','Javascript/Final_project_kitti/index.html','_blank');

//React
domFunction('h1','assignmentNumber','01','.gridItem16');
domFunction('h3','assignmentTitle','Components, Props','.gridItem16');
domFunction('div','links assignment10-link','','.gridItem16');
domFunction('a','assignmentCodeLink','Code','.assignment10-link','https://github.com/Sailesh75/Outside-Internship/tree/master/React/1st_assignment/vite-project','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment10-link','https://fanciful-meerkat-a26a3f.netlify.app/','_blank');

domFunction('h1','assignmentNumber','02','.gridItem17');
domFunction('h3','assignmentTitle','useState','.gridItem17');
domFunction('div','links assignment11-link','','.gridItem17');
domFunction('a','assignmentCodeLink','Code','.assignment11-link','https://github.com/Sailesh75/Outside-Internship/tree/master/React/2nd_assignment/vite-project','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment11-link','https://jolly-beijinho-4bb479.netlify.app/','_blank');

domFunction('h1','assignmentNumber','3.1','.gridItem18');
domFunction('h3','assignmentTitle','Login page','.gridItem18');
domFunction('div','links assignment12-link','','.gridItem18');
domFunction('a','assignmentCodeLink','Code','.assignment12-link','https://github.com/Sailesh75/Outside-Internship/tree/master/React/3rd_assignment/login_page/vite-project','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment12-link','https://chimerical-seahorse-963dbc.netlify.app/','_blank');

domFunction('h1','assignmentNumber','3.2','.gridItem19');
domFunction('h3','assignmentTitle','Signup page','.gridItem19');
domFunction('div','links assignment13-link','','.gridItem19');
domFunction('a','assignmentCodeLink','Code','.assignment13-link','https://github.com/Sailesh75/Outside-Internship/tree/master/React/3rd_assignment/signup_page/vite-project','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment13-link','https://zesty-cat-56a2ea.netlify.app/','_blank');

domFunction('h1','assignmentNumber','04','.gridItem20');
domFunction('h3','assignmentTitle','useContext','.gridItem20');
domFunction('div','links assignment14-link','','.gridItem20');
domFunction('a','assignmentCodeLink','Code','.assignment14-link','#','_blank');
domFunction('a','assignmentCodeLink','Demo','.assignment14-link','#','_blank');