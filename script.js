function formValidation() {
    let email = document.getElementById("email").value;
    const email_regex = /^[A-Za-z0-9-_.]+@[a-z0-9]+\.[a-z0-9]+$/;
    var x = window.matchMedia("(max-width: 480px)");
    x.addListener(mediaQueries);

    if (email == "") {
        mediaQueries(x);
        return false;
    } else {
        if (email_regex.test(email)) { return true; }
        else {
            mediaQueries(x);
            return false;
        }
    }
}

function mediaQueries(x) {
    document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)";
    if (x.matches) {
        document.getElementById("mobile").style.display = "block";
        document.getElementById("desktop").style.display = "none";
    } else {
        document.getElementById("desktop").style.display = "block";
        document.getElementById("mobile").style.display = "none";
    }
}
