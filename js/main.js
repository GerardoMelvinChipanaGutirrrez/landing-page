// console.log("conectado")
document.addEventListener("DOMContentLoaded", () => {
    fetch('./data/content.json')
        .then(response => response.json())
        .then(data => {
            // Presentacion

            document.querySelector("#LabelName1").textContent = data.perfil.nombre1;
            document.querySelector("#LabelName2").textContent = data.perfil.nombre2;

            document.querySelectorAll(".pro-skill2 span")[0].textContent = data.perfil.especialidad1;
            document.querySelectorAll(".pro-skill2 span")[1].textContent = data.perfil.especialidad2;

            document.querySelector("#descripPerfil").textContent = data.perfil.presentacion;

            // Redes sociales
            document.querySelector(".icon-github").href = data.redes.github;
            document.querySelector(".icon-linkeding").href = data.redes.linkeding;
            document.querySelector(".icon-whatsapp").href = data.redes.whatsapp;
            document.querySelector(".icon-correo").href = data.redes.email;

            // Habilidades blandas
            const softSkillsContainer = document.querySelectorAll(".table-skill")[0];
            // softSkillsContainer.innerHTML = ""; // Limpiar por si ya hay contenido

            data.habilidades.forEach(skill => {
                const div = document.createElement("div");
                div.className = "label";
                div.innerHTML = `<img src="" alt=""><label>${skill}</label>`;
                softSkillsContainer.appendChild(div);
            });

            // Habilidades profesionales
            const hardSkillsContainer = document.querySelectorAll(".table-skill")[1];
            // hardSkillsContainer.innerHTML = "";

            data.habilidadesProfesionales.forEach(skill => {
                const div = document.createElement("div");
                div.className = "label disflex";

                // Nombre del ícono (minúscula + sin espacios)
                const icono = skill.toLowerCase().replace(/\s/g, '');
                // const imgSrc = `file/icons/${icono}.png`;

                div.innerHTML = ` 
                    <label>${skill}</label>
                `;
                hardSkillsContainer.appendChild(div);
            });

            // Experiencia laboral
            const experienciaContainer = document.querySelector(".cont-exp");
            // experienciaContainer.innerHTML = ""; // Limpiar contenido anterior si lo hay

            Object.values(data.experiencia).forEach(exp => {
                const li = document.createElement("li");

                li.innerHTML = `
                    <h1 class="tittle-experience">${exp.titulo}</h1>
                    <h3 class="tittle-experience">${exp.ubicacion}, ${exp.fecha}</h3>
                    <p>${exp.Descrip}</p>
                `;

                experienciaContainer.appendChild(li);
            });

            // Proyectos
            const proyectoContainer = document.querySelector(".table-project");
            // proyectoContainer.innerHTML = ""; // Limpiar contenido anterior si lo hay

            Object.values(data.proyectos).forEach(proy => {
                const article = document.createElement("article");

                article.innerHTML = `
                    <div class="face front-card">
                        <div class="img" style="background-image: url(${proy.img});">
                        </div>
                        <div class="text-project">
                            <div>
                                <h2>${proy.name}</h2>
                                <p>${proy.frontDescrip}</p>
                            </div>
                        </div>
                    </div>
                    <div class="face back-card">
                        <div>
                            <h2>${proy.name}</h2>
                            <p>${proy.BackDescrip}</p>
                        </div>
                        <a href="${proy.url}">ver más</a>
                    </div>

                `;

                proyectoContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
