  
var mailList = ["sebaminuz@gmail.com","oliver@gmail.com","madre@gmail.com","allison@gmail.com","gian@gmail.com"];
console.log(mailList);
var mail = prompt("Inserire la mail d'accesso!");
console.log(mail);
for(var i = 0 ; i < mailList.length; i++ ) {
if (mailList[i]  == mail ) {
    document.getElementById("mail").innerHTML =("sei in lista");
    break;
    } 

else   {
   
    document.getElementById("mail").innerHTML = ("non sei in lista");}
    
}