var normalsite = document.querySelector(".normal-site")

function menuOpen() {
    document.querySelector(".main").classList.add("displaynone");
}

function menuClose() {
    document.querySelector(".main").classList.remove("displaynone");
}

function kundvagnAnimation() {
    normalsite.classList.toggle("kundvagnAnimation");
    normalsite.classList.toggle("displaynone");
    document.querySelector(".cover").classList.toggle("displaynone1");
    document.querySelector(".kundvagn-text").classList.toggle("kundvagn_none");
    normalsite.classList.remove("kundvagnAnimation-back");
}

function removeKundvagn() {
    document.querySelector(".kundvagn-site").classList.toggle("displaynone1");
    normalsite.classList.toggle("kundvagnAnimation");
    normalsite.classList.toggle("displaynone");
    document.querySelector(".cover").classList.toggle("displaynone1");
    document.querySelector(".kundvagn-text").classList.toggle("kundvagn_none");
    normalsite.classList.toggle("kundvagnAnimation-back");
}

function timeOut() {
    document.querySelector(".kundvagn-site").classList.remove("displaynone1");
}

function addProcessor() {
    document.querySelector(".number").classList.remove("displaynone1");
    document.querySelector(".kundvagn-tom").innerHTML = "Intel i7 Processor x 1";
    document.querySelector(".clear").classList.remove("displaynone1");
    document.querySelector(".kop").classList.remove("displaynone1");
}

function addModerkort() {
    document.querySelector(".number").classList.remove("displaynone1");
    document.querySelector(".kundvagn-tom").innerHTML = "AM1M-A x 1";
    document.querySelector(".clear").classList.remove("displaynone1");
    document.querySelector(".kop").classList.remove("displaynone1");
}

function remove() {
    document.querySelector(".number").classList.add("displaynone1");
    document.querySelector(".kundvagn-tom").innerHTML = "Din kundvagn är tom.";
    document.querySelector(".clear").classList.add("displaynone1");
    document.querySelector(".kop").classList.add("displaynone1");
}

function reDirect() {
  window.location.replace("processor.html");
}

function searchBar() {
    var search = document.querySelector(".search-bar").value
    if ((search == "processor") || (search == "i7")) {
        window.location.replace("processor.html");
    } else {
        if ((search == "moderkort") || (search == "AM1M-A")) {
            window.location.replace("moderkort.html");
        } else {
            window.location.replace("produkter.html");
        }
    }
}
