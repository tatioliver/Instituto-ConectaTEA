export function renderCadastro(app) {
    app.innerHTML = `
        <section>
            <h2>Cadastro</h2>
            <p>
                Preencha seus dados para realizar seu cadastro.
            </p>

            <form id="formCadastro">

                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome">

                <p id="erroNome"></p>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email">

                <p id="erroEmail"></p>

                <button type="submit">Cadastrar</button>

                <p id="mensagemCadastro"></p>

            </form>
        </section>
    `;

    const formulario = document.querySelector("#formCadastro");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        validarCadastro();
    });

    carregarCadastro();
}


function validarCadastro() {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");

    const erroNome = document.querySelector("#erroNome");
    const erroEmail = document.querySelector("#erroEmail");

    let formularioValido = true;

    if (nome.value === "") {
        erroNome.textContent = "Digite seu nome.";
        nome.classList.add("erro");
        formularioValido = false;
    } else {
        erroNome.textContent = "";
        nome.classList.remove("erro");
    }

    if (email.value === "") {
        erroEmail.textContent = "Digite seu e-mail.";
        email.classList.add("erro");
        formularioValido = false;
    } 
    else if (!email.validity.valid) {
        erroEmail.textContent = "Digite um e-mail válido.";
        email.classList.add("erro");
        formularioValido = false;
    } 
    else {
        erroEmail.textContent = "";
        email.classList.remove("erro");
    }

    if (formularioValido) {
        const dadosCadastro = {
            nome: nome.value,
            email: email.value
        };

        localStorage.setItem("cadastro", JSON.stringify(dadosCadastro));

        document.querySelector("#mensagemCadastro").textContent =
            "Cadastro realizado com sucesso!";
    }

    return formularioValido;
}


function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (dadosSalvos) {
        const dadosCadastro = JSON.parse(dadosSalvos);

        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");

        nome.value = dadosCadastro.nome;
        email.value = dadosCadastro.email;
    }
}