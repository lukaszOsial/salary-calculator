/*-----Button Form of Employment Active and Section Active-----*/
const switches = document.querySelector(".switches"),
container = document.querySelector(".container");

switches.addEventListener("click", (element) =>{
    if(element.target.classList.contains("form-of-employment") && !element.target.classList.contains(".active")){
        switches.querySelector(".active").classList.remove("active");
        element.target.classList.add("active");
        const target = element.target.getAttribute("data-target");
        container.querySelector("section.active").classList.remove("active");
        container.querySelector(target).classList.add("active");
    }
});
/*-----Buttons----*/
const firstSalaryButton = document.querySelector(".button-contract-of-employment");
firstSalaryButton.addEventListener("click", () =>{
    getSalary();
    function getFirstForm(){
        const first = document.getElementsByName('first');
        let checked = [];
        for(let i = 0; i < first.length; i++){
        if(first[i].checked){
            return checked += ' ' + first[i].value;
            }
        }
        console.log(checked);
    }
    function pensionContributions(){
        return getSalary() * 0.0976;
    }
    function disabilityPensionContribution(){
        return getSalary() * 0.015;
    }
    function sicknessContribution(){
        return getSalary() * 0.0245;
    }
    function socialContributions(){
        return pensionContributions() + disabilityPensionContribution() + sicknessContribution();
    }
    console.log(pensionContributions());
    console.log(disabilityPensionContribution());
    console.log(sicknessContribution());

    function healthInsured(){
        return (getSalary() - socialContributions()) * 0.09;
    }
    console.log(healthInsured());
});
const secondSalaryButton = document.querySelector(".button-contract-of-mandate");
secondSalaryButton.addEventListener("click", () =>{
    getSalary();
    getSecondForm();
});
const thirdSalaryButton = document.querySelector(".button-contract-work");
thirdSalaryButton.addEventListener("click", () =>{
    getSalary();
    getThirdForm();
});
/*-----Get information from forms---*/

function getSalary(){
    return document.getElementById('salary').value;
}

function getSecondForm(){
    const second = document.getElementsByName('second');
    let radioActive ='';
    for(let i = 0; i < second.length; i++){
    if(second[i].checked){
        radioActive = second[i].value;
    }
}
console.log(radioActive);
}
function getThirdForm(){
    const thirdCheckboxes = document.getElementsByName('thirdCheckboxes');
    let checked = [];
    for(let i = 0; i < thirdCheckboxes.length; i++){
        if(thirdCheckboxes[i].checked){
            checked += ' ' + thirdCheckboxes[i].value;
            }
        }
        console.log(checked);

    const thirdRadio = document.getElementsByName('thirdRadio');
    let radioActive = '';
    for(let i = 0; i < thirdRadio.length; i++){
    if(thirdRadio[i].checked){
        radioActive = thirdRadio[i].value;
    }
}
console.log(radioActive);
}

