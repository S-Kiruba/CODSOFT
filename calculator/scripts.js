function cal(val) {
    var x = document.getElementById('res');
    x.value+=val;
}

function result() {
    var y = document.getElementById('res').value;
    var xy = eval(y);
    document.getElementById('res').value=xy;
}

function AC() {
    var z = document.getElementById('res');
    z.value ='';
}

function del() {
    var a = document.getElementById('res');
    a.value = a.value.slice(0,-1);
}