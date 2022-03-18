const salaryButton = document.querySelector(".button-contract-of-employment");
salaryButton.addEventListener("click", () =>{
    getSalary();
    getFirstForm();
});

function getSalary(){
    let salary = document.getElementById('salary').value;
    console.log(salary);
}
function getFirstForm(){
    const first = document.getElementsByName('first');
    let checked = [];
    for(let i = 0; i < first.length; i++){
    if(first[i].checked){
        checked += ' ' + first[i].value;
        }
    }
}