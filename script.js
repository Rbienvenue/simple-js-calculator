function add(){
    let a=parseInt(document.getElementById("a").value);
    let b=parseInt(document.getElementById("b").value);
    let c=document.getElementById("opp").value;

    if (c == "+") {
        document.getElementById("res").innerHTML= a+b;
    }
    else if (c == "-") {
        document.getElementById("res").innerHTML= a-b;
    }
    else if (c == "*") {
        document.getElementById("res").innerHTML= a*b;
    }
    else if (c == "/") {
        document.getElementById("res").innerHTML= a/b;
    }
}