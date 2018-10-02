//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}
//Sleep in Problem #1
function sleep_in (x,y) {

    var sleep_in = !x || y;
    return sleep_in;

}

//Monkey Trouble #2
function monkey_trouble(a,b) {
    var a_smile = a && a;
    var b_smile = b && b;
    var monkey_trouble = (a_smile && b_smile) || (!a_smile && !b_smile)
    return monkey_trouble
}

//String Times
function string_times(x, n) {
    var name = x;
    if (n > 0) {
        for (var n; n - 1 > 0; n--) {
            name = name + x;
        }
    } else {
        name = "";
    }
    return name;
}

//Front Times
function front_times(x, num) {
    var word = "";
    var front3 = x.substring(0,3);
    for (var i = 0; i < num; i++){
        word += front3;
    }
    return word;
}

//String Bits
function string_bits ()