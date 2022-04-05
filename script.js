const switches = document.querySelector(".switches"),
container = document.querySelector(".container"),
input = document.querySelector(".input"),
output = document.querySelector(".output"),
formError = document.querySelector(".formError");

switches.addEventListener("click", (element) =>{
    if(element.target.classList.contains("form-of-employment") && !element.target.classList.contains(".active")){
        switches.querySelector(".active").classList.remove("active");
        element.target.classList.add("active");
        const target = element.target.getAttribute("data-target");
        container.querySelector("section.active").classList.remove("active");
        container.querySelector(target).classList.add("active");
        formError.innerHTML = '';
        document.getElementById('salary').value = "";
    }
});
const firstSalaryButton = document.querySelector(".button-contract-of-employment");
firstSalaryButton.addEventListener("click", () =>{
    if(document.getElementById('salary').value.match(/^[0-9]+$/)){
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
        input.classList.remove("active");
        output.classList.add("active");
        switches.classList.remove("active");
    }else{
        formError.innerHTML = "Podaj poprawną kwotę zarobków w liczbie całkowitej";
    }     
});
const secondSalaryButton = document.querySelector(".button-contract-of-mandate");
secondSalaryButton.addEventListener("click", () =>{
    if(document.getElementById('salary').value.match(/^[0-9]+$/)){
        getSalary();
        getSecondForm();
        pensionContributionsSecond();
        disabilityPensionContributionSecond();
        socialContributionsSecond();
        healthInsuredSecond();
        taxPrepaymentSecond();
        incomeTaxSecond();
        netSalarySecond();
        input.classList.remove("active");
        output.classList.add("active");
        switches.classList.remove("active");
    }else{
        formError.innerHTML = "Podaj poprawną kwotę zarobków w liczbie całkowitej";
    } 
});
const thirdSalaryButton = document.querySelector(".button-contract-work");
thirdSalaryButton.addEventListener("click", () =>{
    if(document.getElementById('salary').value.match(/^[0-9]+$/)){
        getSalary();
        getThirdForm();
        incomeTaxThird();
        netSalaryThird();
        input.classList.remove("active");
        output.classList.add("active");
        switches.classList.remove("active");
    }else{
        formError.innerHTML = "Podaj poprawną kwotę zarobków w liczbie całkowitej";
    } 
});
const resetButton = document.querySelector(".button-reset");
resetButton.addEventListener("click", () =>{
    switches.classList.add("active");
    input.classList.add("active");
    output.classList.remove("active");
    checkedFirstForm = [];
    radioActiveSecondForm ='';
    radioActiveThirdForm = '';
    document.getElementById("tableGrossSalary").innerHTML = '0.00';
    document.getElementById("tableGrossSalarySecond").innerHTML = '0.00';
    document.getElementById("pensionContribution").innerHTML = '0.00';
    document.getElementById("disabilityPensionContribution").innerHTML = '0.00';
    document.getElementById("sicknessContribution").innerHTML = '0.00';
    document.getElementById("healthInsured").innerHTML = '0.00';
    document.getElementById("incomeTax").innerHTML = '0.00';
    document.getElementById("tableNetSalary").innerHTML = '0.00';
    document.getElementById("tableNetSalarySecond").innerHTML = '0.00';
    formError.innerHTML = '';
    document.getElementById('salary').value = "";
});

function getSalary(){
    let grossSalary = document.getElementById('salary').value * 1;
    document.getElementById("tableGrossSalary").innerHTML = grossSalary.toFixed(2);
    document.getElementById("tableGrossSalarySecond").innerHTML = grossSalary.toFixed(2);
    return grossSalary;
}
let checkedFirstForm = [];
function getFirstForm(){
    const first = document.getElementsByName('first');
    for(let i = 0; i < first.length; i++){
        if(first[i].checked){
            checkedFirstForm += "" + first[i].value;
        }
    }
    return
}
function pensionContributions(){
    let contribution = getSalary() * 0.0976;
    document.getElementById("pensionContribution").innerHTML = contribution.toFixed(2);
    return contribution;
}
function disabilityPensionContribution(){
    let contribution = getSalary() * 0.015;
    document.getElementById("disabilityPensionContribution").innerHTML = contribution.toFixed(2);
    return contribution;
}
function sicknessContribution(){
    let contribution = getSalary() * 0.0245;
    document.getElementById("sicknessContribution").innerHTML = contribution.toFixed(2);
    return contribution;
}
function socialContributions(){
    return pensionContributions() + disabilityPensionContribution() + sicknessContribution();
}
function healthInsured(){
    let contribution = (getSalary() - socialContributions()) * 0.09;
    document.getElementById("healthInsured").innerHTML = contribution.toFixed(2);
    return contribution;
}
function workChecked(){
    if(checkedFirstForm.includes("work")){
        return 250;
    }else{
        return 300;
    }
}
function taxPrepayment(){
    return getSalary() - socialContributions() - workChecked();
}
function incomeTax(){
    let tax = 0;
    if(taxPrepayment() >= 2500 && checkedFirstForm.includes("age") || taxPrepayment() >= 2500 && checkedFirstForm.includes("age", 1)) {
         document.getElementById("incomeTax").innerHTML = ((taxPrepayment() * 0.17) - 425).toFixed(2);
         return tax = (taxPrepayment() * 0.17) - 425;
    }else{
         document.getElementById("incomeTax").innerHTML = tax.toFixed(2);
         return tax;
    }
}
function netSalary(){
    let netSalary = getSalary() - socialContributions() - healthInsured() - incomeTax();
    document.getElementById("tableNetSalary").innerHTML = netSalary.toFixed(2);
    document.getElementById("tableNetSalarySecond").innerHTML = netSalary.toFixed(2);
    return netSalary;
}

let radioActiveSecondForm ='';
function getSecondForm(){
    const second = document.getElementsByName('second');
    for(let i = 0; i < second.length; i++){
        if(second[i].checked){
            return radioActiveSecondForm = second[i].value;
        }
    }
}
function pensionContributionsSecond(){
    let contribution = 0;
    if(radioActiveSecondForm.includes("student") || radioActiveSecondForm.includes("employeeSecondYoung") || radioActiveSecondForm.includes("employeeSecondNormal")){
        document.getElementById("pensionContribution").innerHTML = contribution.toFixed(2);
        return contribution; 
    }else{
        return pensionContributions();
    }
}
function disabilityPensionContributionSecond(){
    let contribution = 0;
    if(radioActiveSecondForm.includes("student") || radioActiveSecondForm.includes("employeeSecondYoung") || radioActiveSecondForm.includes("employeeSecondNormal")){
        document.getElementById("disabilityPensionContribution").innerHTML = contribution.toFixed(2);
        return contribution;
    }else{
        return disabilityPensionContribution();
    }
}
function socialContributionsSecond(){
    return pensionContributionsSecond() + disabilityPensionContributionSecond();
}
function healthInsuredSecond(){
    let contribution = 0;
    if(radioActiveSecondForm.includes("student")){
        document.getElementById("healthInsured").innerHTML = contribution.toFixed(2);
        return contribution;
    }else{
        document.getElementById("healthInsured").innerHTML = ((getSalary() - socialContributionsSecond()) * 0.09).toFixed(2);
        return contribution = (getSalary() - socialContributionsSecond()) * 0.09;
    }
}
function taxPrepaymentSecond(){
    return (getSalary() - socialContributionsSecond()) * 0.2;
}
function incomeTaxSecond(){
    let tax = 0;
    if(radioActiveSecondForm.includes("employeeNormal") || radioActiveSecondForm.includes("employeeSecondNormal")){
        document.getElementById("incomeTax").innerHTML = ((getSalary() - socialContributionsSecond() - taxPrepaymentSecond()) * 0.17).toFixed(2);
        return tax = (getSalary() - socialContributionsSecond() - taxPrepaymentSecond()) * 0.17;
    }else{
        document.getElementById("incomeTax").innerHTML = tax.toFixed(2);
        return tax;
    }
}
function netSalarySecond(){
    let netSalary = getSalary() - socialContributionsSecond() - healthInsuredSecond() - incomeTaxSecond();
    document.getElementById("tableNetSalary").innerHTML = netSalary.toFixed(2);
    document.getElementById("tableNetSalarySecond").innerHTML = netSalary.toFixed(2);
    return netSalary;
}

let radioActiveThirdForm = '';
function getThirdForm(){
    const thirdRadio = document.getElementsByName('thirdRadio');
    for(let i = 0; i < thirdRadio.length; i++){
        if(thirdRadio[i].checked){
            return radioActiveThirdForm = thirdRadio[i].value;
        }
    }
}
function incomeTaxThird(){
    if(radioActiveThirdForm.includes("twentyPercent")){
        return document.getElementById("incomeTax").innerHTML = ((getSalary() - (getSalary()  * 0.2)) * 0.17).toFixed(2);
    }else{   
        return document.getElementById("incomeTax").innerHTML = ((getSalary()  * 0.5) * 0.17).toFixed(2);     
    }
}
function netSalaryThird(){
    let netSalary = getSalary() - incomeTaxThird();
    document.getElementById("tableNetSalary").innerHTML = netSalary.toFixed(2);
    document.getElementById("tableNetSalarySecond").innerHTML = netSalary.toFixed(2);
    return netSalary;
}
