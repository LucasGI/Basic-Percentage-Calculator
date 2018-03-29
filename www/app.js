$( document ).ready(function(){
    $("#calSelect").submit(function(e) {
    e.preventDefault();
});
})
var val3 = "value3"
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
    parseFloat(a);
    parseFloat(b);
    var select = document.getElementById("calSelect").value;
    switch (select) {
        case 0:
            Materialize.toast("You Must Select The Calculator!", 2000, 'rounded')
            break;
        case 1:
            if (a = b) {
                document.getElementById("value3").value = ("0%")
            } else if (a < b) {
                document.getElementById("value3").value = (toFixed(((b - a) / a) * 100) + "%")
            } else if (a > b) {
                document.getElementById("value").value = (toFixed(((a - b) / a) * 100) + "%")
            } else {
                console.log("Error: Unknown Error in Function Select(); End Of If (case 1");
            }
            break;
        case 2:
            document.getElementById("value3").value = (toFixed(b * (a / 100)))
            break
        case 3:
            document.getElementById("value3").value = (toFixed((b / a) * 100) + "%")
            break;
        default:
            console.log("Error: Unknown Error in FUnction Select(); End Of Switch(select)")
            break;
    }

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