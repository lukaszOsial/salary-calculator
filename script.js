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
    getFirstForm();
    pensionContributions();
    disabilityPensionContribution();
    sicknessContribution();
    socialContributions();
    healthInsured();
    workChecked();
    taxPrepayment();
    incomeTax();
    netSalary();
    console.log(pensionContributions());
    console.log(disabilityPensionContribution());
    console.log(sicknessContribution());
    console.log(healthInsured());
    console.log(workChecked());
    console.log(taxPrepayment());
    console.log(incomeTax());
    console.log(netSalary());
});
const secondSalaryButton = document.querySelector(".button-contract-of-mandate");
secondSalaryButton.addEventListener("click", () =>{
    getSalary();
    getSecondForm();
    pensionContributionsSecond();
    disabilityPensionContributionSecond();
    socialContributionsSecond();
    healthInsuredSecond();
    taxPrepaymentSecond();
    incomeTaxSecond();
    netSalarySecond();

    console.log(pensionContributionsSecond());
    console.log(disabilityPensionContributionSecond());
    console.log(socialContributionsSecond());
    console.log(healthInsuredSecond());
    console.log(taxPrepaymentSecond());
    console.log(incomeTaxSecond());
    console.log(netSalarySecond()); 
});
const thirdSalaryButton = document.querySelector(".button-contract-work");
thirdSalaryButton.addEventListener("click", () =>{
    getSalary();
    getThirdForm();
});


/*----First salary-----*/
function getSalary(){
    return document.getElementById('salary').value;
}
function getFirstForm(){
    const first = document.getElementsByName('first');
    let checkedFirstForm = [];
    for(let i = 0; i < first.length; i++){
    if(first[i].checked){
        return checkedFirstForm += ' ' + first[i].value;
        }
    }
    console.log(checkedFirstForm);
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
function healthInsured(){
    return (getSalary() - socialContributions()) * 0.09;
}
function workChecked(){
    if(getFirstForm().includes("work")){
        return costOfGettingIncome = 250;
    }else{
        return costOfGettingIncome = 300;
    }
}
function taxPrepayment(){
    return getSalary() - socialContributions() - workChecked();
}
function incomeTax(){
    if(!getFirstForm().includes("age") || taxPrepayment() <= 2500){
        return 0;
    }else{
        return (taxPrepayment() * 0.17) - 425;
    }
}
function netSalary(){
    return getSalary() - socialContributions() - healthInsured() - incomeTax();
}

/*----Second salary-----*/
function getSecondForm(){
    const second = document.getElementsByName('second');
    let radioActive ='';
    for(let i = 0; i < second.length; i++){
    if(second[i].checked){
        return radioActive = second[i].value;
    }
}
console.log(radioActive);
}
function pensionContributionsSecond(){
    if(getSecondForm().includes("student")){
        return 0;
    } else {
        return pensionContributions();
    }
}
function disabilityPensionContributionSecond(){
    if(getSecondForm().includes("student")){
        return 0;
    } else {
        return disabilityPensionContribution();
    }
}
function socialContributionsSecond(){
    return pensionContributionsSecond() + disabilityPensionContributionSecond();
}
function healthInsuredSecond(){
    if(getSecondForm().includes("student")){
        return 0;
    } else {
        return (getSalary() - socialContributionsSecond()) * 0.09;
    }
}
function taxPrepaymentSecond(){
    return (getSalary() - socialContributionsSecond()) * 0.2;
}
function incomeTaxSecond(){
    if(getSecondForm().includes("employeeNormal")){
        return (getSalary() - socialContributionsSecond() - taxPrepaymentSecond()) * 0.17;
    }else{
        return 0;
    }
}
function netSalarySecond(){
    return getSalary() - socialContributionsSecond() - healthInsuredSecond() - incomeTaxSecond();
}

/*----Third salary-----*/
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