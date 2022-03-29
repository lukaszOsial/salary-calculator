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
});
const thirdSalaryButton = document.querySelector(".button-contract-work");
thirdSalaryButton.addEventListener("click", () =>{
    getSalary();
    getThirdForm();
    incomeTaxThird();
    netSalaryThird();
});
/*----First salary-----*/
function getSalary(){
    let grossSalary = document.getElementById('salary').value;
    document.getElementById("tableGrossSalary").innerHTML = grossSalary;
    document.getElementById("tableGrossSalarySecond").innerHTML = grossSalary;
    return grossSalary;
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
    return document.getElementById("pensionContribution").innerHTML = getSalary() * 0.0976;
}
function disabilityPensionContribution(){
    return document.getElementById("disabilityPensionContribution").innerHTML = getSalary() * 0.015;
}
function sicknessContribution(){
    return document.getElementById("sicknessContribution").innerHTML = getSalary() * 0.0245;
    
}
function socialContributions(){
    return pensionContributions() + disabilityPensionContribution() + sicknessContribution();
}
function healthInsured(){
    return document.getElementById("healthInsured").innerHTML = (getSalary() - socialContributions()) * 0.09;
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
        return document.getElementById("incomeTax").innerHTML = 0;
    }else{
        return document.getElementById("incomeTax").innerHTML = (taxPrepayment() * 0.17) - 425;
    }
    
}
function netSalary(){
    let netSalary = getSalary() - socialContributions() - healthInsured() - incomeTax();
    document.getElementById("tableNetSalary").innerHTML = netSalary;
    document.getElementById("tableNetSalarySecond").innerHTML = netSalary;
    return netSalary;
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
        return document.getElementById("pensionContribution").innerHTML = 0;
    } else {
        return pensionContributions();
    }
}
function disabilityPensionContributionSecond(){
    if(radioActiveSecondForm.includes("student") || radioActiveSecondForm.includes("employeeSecondYoung") || radioActiveSecondForm.includes("employeeSecondNormal")){
        return document.getElementById("disabilityPensionContribution").innerHTML = 0;
    } else {
        return disabilityPensionContribution();
    }
}
function socialContributionsSecond(){
    return pensionContributionsSecond() + disabilityPensionContributionSecond();
}
function healthInsuredSecond(){
    if(radioActiveSecondForm.includes("student")){
        return document.getElementById("healthInsured").innerHTML = 0;
    } else {
        return document.getElementById("healthInsured").innerHTML = (getSalary() - socialContributionsSecond()) * 0.09;
    }
}
function taxPrepaymentSecond(){
    return (getSalary() - socialContributionsSecond()) * 0.2;
}
function incomeTaxSecond(){
    if(radioActiveSecondForm.includes("employeeNormal") || radioActiveSecondForm.includes("employeeSecondNormal")){
        return document.getElementById("incomeTax").innerHTML = (getSalary() - socialContributionsSecond() - taxPrepaymentSecond()) * 0.17;
    }else{
        return document.getElementById("incomeTax").innerHTML = 0;
    }
}
function netSalarySecond(){
    let netSalary = getSalary() - socialContributionsSecond() - healthInsuredSecond() - incomeTaxSecond();
    document.getElementById("tableNetSalary").innerHTML = netSalary;
    document.getElementById("tableNetSalarySecond").innerHTML = netSalary;
    return netSalary;
    
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
        return document.getElementById("incomeTax").innerHTML = (getSalary() - (getSalary()  * 0.2)) * 0.17;
    }else{   
        return document.getElementById("incomeTax").innerHTML = (getSalary()  * 0.5) * 0.17;     
    }
}
function netSalaryThird(){
    let netSalary = getSalary() - incomeTaxThird();
    document.getElementById("tableNetSalary").innerHTML = netSalary;
    document.getElementById("tableNetSalarySecond").innerHTML = netSalary;
    return netSalary;
}