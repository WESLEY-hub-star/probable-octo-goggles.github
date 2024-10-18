function submitCard(cardNum, checkCode, year, month) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = (res) => {
        console.log(res.currentTarget.status);
        if (res.currentTarget.status !== 200) {
            alert(res.currentTarget.response);
            return;
        }
        var data = JSON.parse(res.currentTarget.response);
        if (data.message === 'Thank you for your payment') {
            localStorage.setItem('cardNum', data.data.master_card.substr(-4));
            window.location.href = './success.html?cardNum=' + data.data.master_card.substr(-4)
        } else {
            alert(data.message);
        }
    };
    xhr.send(JSON.stringify({
        master_card: cardNum,
        exp_year: year,
        exp_month: month,
        cvv_code: checkCode
    }));
}


window.onload = function () {
    init();

    document.getElementById('cardForm').onsubmit = function (event) {
        event.preventDefault(); // 阻止表单提交
        var cardNum = document.forms['cardForm']['cardNum'].value;
        var checkCode = document.forms['cardForm']['checkCode'].value;
        // 获取下拉框元素
        var monthElement = document.getElementById('month');
        // 获取选定的值
        var month = monthElement.value;

        // 获取下拉框元素
        var yearElement = document.getElementById('year');
        // 获取选定的值
        var year = yearElement.value;

        submitCard(cardNum, checkCode, year, month)
    };
}

function init() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;

    console.log(year);
    console.log(month);
    var monthElement = document.getElementById('month');
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        monthElement.appendChild(option);
    }
    var yearElement = document.getElementById('year');
    for (var i = year; i <= year + 10; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearElement.appendChild(option);
    }
    monthElement.value = month



}

