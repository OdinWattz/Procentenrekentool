const oud = document.getElementById("oud")

const soort = document.getElementById("soort")
const percentage = document.getElementById("percentage")

const nieuw = document.getElementById("nieuw")

function checkInput(){
   if(oud.value != '')
        oud.classList.remove("is-invalid")
    oud.classList.add("is-valid")
    if(soort.value != '')
        soort.classList.remove("is-invalid")
    soort.classList.add("is-valid")
    if(percentage.value != '')
        percentage.classList.remove("is-invalid")
    percentage.classList.add("is-valid")
    if(nieuw.value != '')
        nieuw.classList.remove("is-invalid")
    nieuw.classList.add("is-valid")
    if(oud.value != '')
        document.getElementById("losop_btn").disabled = false
}

function solveProblem() {
    alert('I am a problem solver');
}
