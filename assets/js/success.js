function getCardNum() {
    // 从当前窗口的URL中获取查询参数
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    // 获取参数
    const cardNum = params.get('cardNum');
    console.log(cardNum);
    var cardNumSpan = document.getElementById("cardNum");
    cardNumSpan.innerText = cardNum;

}

window.onload = function () {
    getCardNum()
}
