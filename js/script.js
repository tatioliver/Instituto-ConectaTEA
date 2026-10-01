import { renderCadastro } from "./cadastro.js";
import { renderProjeto } from "./projetos.js";
const app = document.querySelector("#app");


// ===============================
// CONTEÚDO DA HOME
// ===============================

function renderHome() {

    app.innerHTML = `
        <section>
            <h2>Cuidar, acolher e transformar vidas</h2>

            <p>
                "Cada pessoa merece ser acolhida, respeitada e cuidada"
            </p>

            <figure>
                <img 
                    src="../imagens/ong_tea_imagem_2_otimizada.jpg"
                    alt="Profissionais de saúde acolhendo uma criança autista junto à sua família"
                >
            </figure>
        </section>


        <section>
            <h2>Sobre o Instituto ConectaTEA</h2>

            <p>
                Nossa ONG tem como objetivo oferecer apoio e atendimento especializado
                para pessoas autistas e suas famílias. Buscamos proporcionar um espaço
                acolhedor, seguro e preparado para atender diferentes necessidades.
            </p>

            <p>
                Oferecemos e apoiamos o acesso a profissionais especializados, como
                psicólogos, terapeutas, neurologistas, psiquiatras e outros profissionais
                da área da saúde, contribuindo para um acompanhamento individualizado
                e humanizado.
            </p>

            <p>
                Nosso propósito é promover qualidade de vida, desenvolvimento, inclusão
                e apoio às famílias, oferecendo cuidado profissional e orientação em
                todas as etapas.
            </p>
        </section>


        <section>
            <h2>Nossos Objetivos</h2>

            <p>
                Nosso principal objetivo é oferecer atendimento especializado e
                humanizado para pessoas autistas, contribuindo para seu desenvolvimento,
                bem-estar e qualidade de vida.
            </p>

            <p>Buscamos:</p>

            <p>- Facilitar o acesso a terapias e profissionais especializados.</p>

            <p>
                - Oferecer acompanhamento com profissionais como psicólogos,
                neurologistas e psiquiatras.
            </p>

            <p>- Apoiar as famílias com orientação e informação.</p>

            <p>- Incentivar a inclusão e o respeito às diferenças.</p>

            <p>- Criar um ambiente seguro, acolhedor e acessível.</p>

            <p>
                - Contribuir para o desenvolvimento e a autonomia de cada pessoa atendida.
            </p>

            <figure>
                <img
                    src="../imagens/ong_tea_imagem_1_otimizada.jpg"
                    alt="Equipe de profissionais reunida para planejar o atendimento de pessoas autistas"
                >

                <figcaption>
                    Equipe multidisciplinar trabalhando em conjunto para oferecer
                    um atendimento acolhedor e especializado.
                </figcaption>
            </figure>
        </section>


        <section>
            <h2>Missão</h2>

            <p>
                Nossa missão é oferecer atendimento especializado, acolhimento e
                suporte às pessoas autistas e suas famílias. Buscamos facilitar o
                acesso a profissionais e terapias de qualidade, promovendo
                desenvolvimento, autonomia, bem-estar e inclusão.
            </p>

            <p>
                Acreditamos que cada pessoa merece ser cuidada com respeito, atenção
                e dignidade, considerando suas necessidades e características
                individuais.
            </p>
        </section>
    `;
}

// ===============================
// ROTEAMENTO
// ===============================

function navegar(rota) {

    if (rota === "#home" || rota === "") {
        renderHome();
    }

    else if (rota === "#projeto") {
        renderProjeto(app);
    }

    else if (rota === "#cadastro") {
        renderCadastro(app);
    }
}


// ===============================
// INTERCEPTAÇÃO DOS LINKS
// ===============================

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const rota = link.getAttribute("href");

        navegar(rota);

    });

});

// ===============================
// CARREGA A HOME AO ABRIR
// ===============================

navegar(window.location.hash);