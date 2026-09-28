const funcionarios = [];

const formulario = document.getElementById("form-funcionario");
const campoNome = document.getElementById("nome");
const campoSalario = document.getElementById("salario");
const campoCargo = document.getElementById("cargo");

formulario.addEventListener("submit", function (evento) {
    // impede que o formulário recarregue a página
    evento.preventDefault();

    // captura e valida o nome
    const nome = campoNome.value.trim();

    if (nome === "") {
        alert("O nome não pode estar vazio.");
        return; // 
    }

    // captura, converte e valida o salário
    const salario = Number(campoSalario.value);

    if (salario <= 0) {
        alert("O salário deve ser maior que zero.");
        return;
    }

    // captura e valida o cargo.
    const cargo = campoCargo.value;

    if (cargo === "") {
        alert("Selecione um cargo válido.");
        return;
    }

    const funcionario = {
        nome: nome,
        salario: salario,
        cargo: cargo
    };

    funcionarios.push(funcionario);
    console.log(funcionarios);

    formulario.reset();
});