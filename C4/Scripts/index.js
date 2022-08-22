document.querySelector("form").addEventListener("submit",myfunc)
function myfunc(event){
    event.preventDefault()
    let name=document.querySelector("#name").value
    let price=document.querySelector("#price").value
    let category=document.querySelector("#category").value
    let listed=document.querySelector("#listed").value
    let brand=document.querySelector("#brand").value
    let review=document.querySelector("#reviews").value

  let row=document.createElement("tr")
  let td1=document.createElement("td")

  td1.innerText=name;

  row.append(td1)

  document.querySelector("tbody").append(row)
   
}