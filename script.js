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
    incomeTaxThird();
    netSalaryThird();
   
    console.log(incomeTaxThird());
    console.log(netSalaryThird());
});
/*----First salary-----*/
function getSalary(){
    return document.getElementById('salary').value;
}
let checkedFirstForm = [];
function getFirstForm(){
    const first = document.getElementsByName('first');
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
    if(checkedFirstForm.includes("work")){
        return 250;
    }else {
        return 300;
    }
}
function taxPrepayment(){
    return getSalary() - socialContributions() - workChecked();
}
function incomeTax(){
    if(!checkedFirstForm.includes("age") || taxPrepayment() <= 2500){
        return 0;
    }else{
        return (taxPrepayment() * 0.17) - 425;
    }
}
function netSalary(){
    return getSalary() - socialContributions() - healthInsured() - incomeTax();
}

/*----Second salary-----*/
let radioActiveSecondForm ='';
function getSecondForm(){
    const second = document.getElementsByName('second');
    for(let i = 0; i < second.length; i++){
    if(second[i].checked){
        return radioActiveSecondForm = second[i].value;
    }
}
console.log(radioActiveSecondForm);
}
function pensionContributionsSecond(){
    if(radioActiveSecondForm.includes("student") || radioActiveSecondForm.includes("employeeSecondYoung") || radioActiveSecondForm.includes("employeeSecondNormal")){
        return 0;
    } else {
        return pensionContributions();
    }
}
function disabilityPensionContributionSecond(){
    if(radioActiveSecondForm.includes("student") || radioActiveSecondForm.includes("employeeSecondYoung") || radioActiveSecondForm.includes("employeeSecondNormal")){
        return 0;
    } else {
        return disabilityPensionContribution();
    }
}
function socialContributionsSecond(){
    return pensionContributionsSecond() + disabilityPensionContributionSecond();
}
function healthInsuredSecond(){
    if(radioActiveSecondForm.includes("student")){
        return 0;
    } else {
        return (getSalary() - socialContributionsSecond()) * 0.09;
    }
}
function taxPrepaymentSecond(){
    return (getSalary() - socialContributionsSecond()) * 0.2;
}
function incomeTaxSecond(){
    if(radioActiveSecondForm.includes("employeeNormal") || radioActiveSecondForm.includes("employeeSecondNormal")){
        return (getSalary() - socialContributionsSecond() - taxPrepaymentSecond()) * 0.17;
    }else{
        return 0;
    }
}
function netSalarySecond(){
    return getSalary() - socialContributionsSecond() - healthInsuredSecond() - incomeTaxSecond();
}
/*----Third salary-----*/
let radioActiveThirdForm = '';
function getThirdForm(){
    const thirdRadio = document.getElementsByName('thirdRadio');
    for(let i = 0; i < thirdRadio.length; i++){
    if(thirdRadio[i].checked){
        return radioActiveThirdForm = thirdRadio[i].value;
    }
}
console.log(radioActive);
}
function incomeTaxThird(){
    if(radioActiveThirdForm.includes("twentyPercent")){
        return (getSalary() - (getSalary()  * 0.2)) * 0.17;
    }else{   
        return (getSalary()  * 0.5) * 0.17;     
    }
}
function netSalaryThird(){
    return getSalary() - incomeTaxThird();
}