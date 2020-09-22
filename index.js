// to add numbers into the textarea
function insert(num){
    document.querySelector(".textview").value = document.querySelector(".textview").value + num;
}
// to evaluate the answer
function equal(){
    var ans = document.querySelector(".textview").value;
    if(ans){
        document.querySelector(".textview").value = eval(ans);
    }
}
// to clear everything in textarea
function allclear(){
    document.querySelector(".textview").value = "0";
}
// to clear last no or operator
function clearLastOne(){
   var ans = document.querySelector(".textview").value;
   document.querySelector(".textview").value = ans.substring(0,ans.length-1);
}
