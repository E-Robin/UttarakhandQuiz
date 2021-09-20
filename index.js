var read=require('readline-sync');
var score=0;

var username=read.question("Lets Ready to play the Quiz ,please enter your name First -----\n-->  ");
// robin
console.log("\n Hi " + username + " now you are ready to achieve the success !!\n" +                                                         
"\n Read--->choose a,b,c from the options to get result \n good luck!`    \n \n");

function play(que)
{var reply=read.question(que.question);
     reply=reply.toLowerCase();
    if (reply==que.answer || reply== que.answer2)
    {console.log("Your answer is correct \n")
score= score + 1;}
else{


    console.log("Your answer is wrong \n")
}
}
   response=[
               {
               question: "1 Which is the largest district in Uttarakhand ? \n (a) Pauri \n (b) Bageshwar \n (c) Uttarkashi \n Ans==>", answer:"c" ,
               answer2: "uttarkashi"
               },
               
               {question:"2 state animal of uttarakhand \n? \n (a) Deer \n (b) Bear \n (c) musk deer\n Ans==>",answer:"c" ,
               answer2 : "musk deer"},
             
               {question:"3 state Bird of uttarakhand \n ? \n (a) Monal \n (b) Peacock \n (c) sparrow\n Ans==>",answer:"a" , answer2 : "monal"
               }
                 ,
               {question:"4 number of districts in uttarakhand ? \n (a) 17 \n (b) 13 \n (c) 14\n Ans==>",answer:"c" ,
               answer2 : "14"
               }
            ]

for (i=0; i<response.length; i++)
{var result=response[i];
play(result)

}
console.log("Your answer is " + score +"\n");


if (score>3)
{console.log("Hey you did the great work keep it up! \n")}

else{console.log("Abe Nalayak agli baar padh ke aana!")}

