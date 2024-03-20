function Calculation(event){
    event.preventDefault();
 const num = document.getElementById("number").value;
    if (num.trim() === '') {
        alert("يرجى ملء جميع الحقول");
        return false;
    }

 const sum = parseInt(num) + 5 ;
 document.getElementById("res").innerHTML = "الناتج = " + num;

 return true;
}