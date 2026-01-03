 var palindrome = function(x){
    if(x < 0){
        return false;
    }
    else{
        return String(x).split('').reverse().join('') == x;
    }
 }
 
 console.log(palindrome(123));
 