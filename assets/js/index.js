function jumpPay() {
    window.location.href = 'pay.html'
}


function clickMore() {
    var more = document.getElementById("more")
    

    if(more.style.display === 'block'){
        more.style.display = 'none'
    }else{
        more.style.display = "block";
    }
}