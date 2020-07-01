let score = 0;
const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");
var resultText = ["Well Done!,You are master of this game" , "Great!!! You are playing Brillantly,Hurray!!! You are the Winner" , "Congratulations for Winning this title"];

var calc = setInterval(updateCountdown, 1000);
setTimeout(myStop, 61000);
function myStop(){
  clearInterval(calc);
}
function updateCountdown(){
  const minutes =  Math.floor(time / 60);
  let  seconds =  time % 60;

  countdownEl.innerHTML =  minutes + ": " + seconds;
  time--;
  
}


var numberOfButton = 2

for (var i = 0; i < numberOfButton; i++) {

    document.querySelectorAll(".firstButton")[i].addEventListener("click", function() {
  
      var buttonInnerHTML = this.innerHTML;
      console.log(buttonInnerHTML);
      if(buttonInnerHTML === "GB"){
        score--;
        
      }
     else if(buttonInnerHTML === "HTTP"){
        score--;
        
      }    
      else if(buttonInnerHTML === "POP3"){
        score++;
        
      }  
      else if(buttonInnerHTML === "Outlook"){
         score++;
      }
      else if(buttonInnerHTML === "Access"){
        score--;
      }
      else if(buttonInnerHTML === "Organizer"){
        score--;
      }
      else{
        score++;
        
      }
      
      
    });
    document.querySelectorAll(".secondButton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        if(buttonInnerHTML === "RAM"){
          score++;
          
        }
      else if(buttonInnerHTML === "CAN"){
          score--;
          
        }    
        else if(buttonInnerHTML === "CON"){
          score++;
          
        }
        else if(buttonInnerHTML === "Workbook"){
          score--;
        }
        else if(buttonInnerHTML === "Document"){
          score--;
        }
        else if(buttonInnerHTML === "Worksheet"){
          score++;
        }
        else{
          score--;
          
        }
        
        
      });
      document.querySelectorAll(".thirdButton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        if(buttonInnerHTML === "HTML"){
          score++;
          
        }
       else if(buttonInnerHTML === "TWELVE"){
          score++;
          
        }    
        else if(buttonInnerHTML === "ELEVEN"){
          score--;
          
        }
        else if(buttonInnerHTML === "Swapping"){
          score++;
        }    
        else if(buttonInnerHTML === "Catching"){
          score--;
        }
        else if(buttonInnerHTML === "Scheduling"){
          score--;
        }
        else{

          score--;
          
        }
        
        
      });
      document.querySelectorAll(".fourthButton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        if(buttonInnerHTML === "High-Level"){
          score++;
          
        }
       else if(buttonInnerHTML === "INTRADICTION"){
          score--;
          
        }    
        else if(buttonInnerHTML === "INTERFECE"){
          score++;
          
        }
          
        else if(buttonInnerHTML === "Safe"){
          score--;
        }
        else if(buttonInnerHTML === "Secure"){
          score++;
        }
        else if(buttonInnerHTML === "Short"){
          score--;
        }
        else{
          score--;
          
        }
        
        
      });
      document.querySelectorAll(".fifthButton")[i].addEventListener("click", function() {
  
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        if(buttonInnerHTML === "Tron"){
          score--;
          
        }   
       else if(buttonInnerHTML === "Chrome"){
          score--;
          
        }    
        else if(buttonInnerHTML === "IE"){
          score++;
          
        }
        else if(buttonInnerHTML === "Apple"){
          score++;
        }
        else if(buttonInnerHTML === "Samsung"){
          score--;
        }
        else if(buttonInnerHTML === "Nokia"){
          score--;
        }
        else{
          score++;
          
          
        }
        
        
      });
   
    }

      document.querySelector(".resultButton").addEventListener("click", function(){
             
       if(score < 3){
           alert("Score: " + score);
           document.querySelector("#data").innerHTML="Sorry! Bad Luck,Try Again Next Time";
           document.querySelector("#result").innerHTML="Your Score is " +  score ; 
           
           
       }
        else{
            alert("Score: " + score);
            for(var j = 0; j < 3 ; j++){
           document.querySelector("#data").innerHTML= resultText[j];
            }
           document.querySelector("#result").innerHTML="Your Score is " +  score ; 
            
           
        }
        
    });
    
     document.querySelector("#we").addEventListener("click", function(){
      var box = this.innerHTML;  
      alert(box);
      if(score < 3){
         alert("Sorry You Can't Proceed to Next Round")
       }
       else {
        document.querySelector("#we").setAttribute("href", "round3.html");
       }
      
      
     }); 

/* 2nd Round */

     
    
   
     
   


  
   

  

  
          









    


