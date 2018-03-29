function submit() {
    var a = document.getElementById("value1").value;
    var b = document.getElementById("value2").value;
    if ((a.length < 1) && (b.length < 1)) {
        Materialize.toast("You Must Enter Both Values!", 2000, 'rounded')
        return false;
    } else {
        calcUI(a, b);
    }
}

function result(a, b) {
    parseFloat (a);
    parseFloat (b);
    var select = document.getElementById("calSelect").value;
    switch
}

function toFixed(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += (new Array(e + 1)).join('0');
        }
    }
    return x;
}