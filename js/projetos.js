export function renderProjeto(app) {

    const projetos = [
        {
            titulo: "Terapias e acompanhamento",
            texto: "Oferecemos apoio por meio de terapias e atividades de acompanhamento pensadas para respeitar o ritmo, as necessidades, os interesses e as potencialidades de cada pessoa autista. Nosso objetivo é caminhar ao lado de cada indivíduo, fortalecendo sua autonomia, seu bem-estar e suas possibilidades de participação."
        },

        {
            titulo: "Consultas e acompanhamento médico",
            texto: "Ajudamos as famílias a encontrar profissionais da área da saúde e a acessar consultas e acompanhamentos adequados às necessidades de cada pessoa. Acreditamos que o cuidado individualizado, baseado no respeito e na escuta, pode fazer uma diferença significativa na vida de todos."
        },

        {
            titulo: "Apoio às famílias",
            texto: "Cuidar de uma pessoa autista também envolve acolher e fortalecer sua família. Por isso, oferecemos informação, orientação e escuta para familiares e responsáveis, ajudando cada pessoa a se sentir mais segura, compreendida e amparada ao longo dessa jornada."
        },

        {
            titulo: "Atividades de desenvolvimento",
            texto: "Promovemos atividades educativas, recreativas e de convivência em ambientes acolhedores, acessíveis e inclusivos. São oportunidades para aprender, explorar interesses, criar vínculos e celebrar cada conquista, sempre valorizando a participação e a singularidade de cada pessoa."
        }
    ];

    let projetosHTML = "";

    projetos.forEach(function(projeto) {

        projetosHTML += `
            <article>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.texto}</p>
            </article>
        `;

    });

    app.innerHTML = `
        <section>
            <h2>Juntos por uma sociedade mais inclusiva</h2>

            <p>
                Nossa ONG trabalha para promover inclusão, acessibilidade e apoio
                às pessoas autistas e suas famílias. Conheça nossos projetos e
                faça parte dessa transformação.
            </p>
        </section>

        <section>
            <h2>Nossos projetos</h2>

            ${projetosHTML}
        </section>

        <section>
            <h2>Seja voluntário</h2>

            <p>
                Você também pode fazer parte dessa rede de cuidado e inclusão!
            </p>

            <p>
                Seu tempo, conhecimento, carinho e dedicação podem contribuir para
                nossos projetos e transformar experiências. Existem muitas formas
                de ajudar, e toda participação é importante e bem-vinda.
            </p>

            <a href="#">Quero ser voluntário</a>
        </section>

        <section>
            <h2>Faça uma doação</h2>

            <p>
                Sua contribuição ajuda nossa ONG a manter os projetos, ampliar os
                atendimentos e oferecer ainda mais apoio às pessoas autistas e
                suas famílias.
            </p>

            <p>
                Cada doação, independentemente do valor, é um gesto de solidariedade
                que fortalece nosso trabalho e ajuda a criar novas possibilidades
                de acolhimento, participação e desenvolvimento.
            </p>

            <a href="#">Quero doar</a>
        </section>
    `;
}