// console.log(Math.random())

var cosButon = document.getElementById("cos")

var dis_play = document.getElementById('display')
var dis_play1 = document.getElementById('display2')
var keepMe;
function display(dis) {
    dis_play.innerText += dis

    // return dis
}

function cos() {
    dis_play1.value =
        Math.cos(dis_play.innerText / 180 * Math.PI)
    // var work = document.getElementById('cos')
    // work.style.backgroundColor = "#1E2223"
    // work.style.color = "#7D8A92"
}
function sin() {
    dis_play1.value =
        Math.sin(dis_play.innerText / 180 * Math.PI)
}
function tan() {
    dis_play1.value =
        Math.tan(dis_play.innerText / 180 * Math.PI)
}
function log() {
    dis_play1.value =
        Math.log(dis_play.innerText)
}
function sq_rt() {
    dis_play1.value =
        Math.sqrt(dis_play.innerText)
}

function evalua() {
    var x = dis_play.innerText
    y = eval(x)
    dis_play1.innerText = y
    return y


}


function adva(y) {
    dis_play.value = ""

    // document.getElementById('display2').value = ""


}

