const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//todos os itens acima tem como função registrar a memória das ações executadas.

//const data = {
//    run: ['01-01', '01-02', '01-03', '01-06', '01-07', '01-08'],
//    takePills: ['01-03'],
//    Journal: ['01-02']
//}

//Quando chega na linha abaixo, o programa vai localizar as informações armazenadas no localstorage, transformar em objeto e colocou nos itens abaixo. Ou seja, não perderá mais informações.

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()