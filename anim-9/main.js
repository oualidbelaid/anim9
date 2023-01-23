//form animation
let sin = document.getElementById('sin');
let sup = document.getElementById('sup');
let list_form = document.querySelectorAll('form');

sin.onclick = function() {
    list_form.forEach(function(ele) {
        ele.classList.toggle('actv');
    })
}
sup.onclick = function() {
    list_form.forEach(function(ele) {
        ele.classList.toggle('actv');
    })
}