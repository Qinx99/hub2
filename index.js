let password = document.getElementById('word')

function enter() {
    if (password.value === 'いらっしゃいませ'){
        location.replace('main.html')
    }
    else {
        alert("Wrong!")
    }
}