const titulo = document.getElementById("frmName");
const contenido = document.getElementById("frmCont");
const imagen = document.getElementById("frmImg");
let contador = 3;
$("document").ready(function () {
    actualizar();

    $("#dlgFrmEnt").dialog({
        autoOpen: false,
        modal: true,
        width: 500
    });
});

function actualizar (){
    setLinksNoticias();
    setModal(); 
}

function setLinksNoticias() {
    for (let i = 1; i <= 6; i++) {
        $("#noti-" + i).click(function () {
            window.location.href = "noticia" + i + ".html";
        });
    }
}

function setModal() {
    for (let i = 1; i <= contador; i++) {
        $("#link-" + i).click(function () {
            const cuerpo = `
            <div>  
                ${document.querySelectorAll("#ent-" + i + " .entrada_cuerpo .area_contenido")[0].innerHTML}
            </div>
            `;
            $.dialog({
                title: `<span>${document.querySelectorAll("#ent-" + i + " .entrada_titulo")[0].innerHTML}</span>`,
                content: cuerpo,
                type: "green",
                boxWidth: '450px',
                useBootstrap: false,
                typeAnimated: true,
            });
        });
    }
}


$("#newEnt").click(function () {
    console.log("click");
    $("#dlgFrmEnt").dialog("open");
});

$("#frmSend").click(function () {
    contador++;
    let newObj = {
        titulos: titulo.value,
        contenidos: contenido.value.replace(/\n/g, "<br>"),
        imagenes: imagen.value,
    }
    console.log(newObj);
    let plantilla = `
    <div class="entrada" id="ent-${contador}">
        <div class="entrada_titulo"><span>${newObj.titulos}</span></div>
        <hr>
        <div class="entrada_cuerpo">
            <div class="area_contenido">
                ${newObj.contenidos}
            </div>
            <div class="area_imagen">
                <img src="#" alt="Imagen" width="100%"
                    height="100%" id="img-${contador}">
            </div>
        </div>
        <hr>
        <div class="area_enlaces">
            <a href="#" class="enlace_grl" id="link-${contador}">Leer más</a>
        </div>
    </div>
    `;
    $(".seccion-blog").append(plantilla);
    mostrarImg(imagen, contador);
    actualizar();
    $("#dlgFrmEnt").dialog("close");
});

function mostrarImg(input, id){
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // Obtén el ID específico de la imagen
            var imgId = 'img-' + id;
            // Crea o actualiza la imagen en el elemento correspondiente
            var imgElement = document.getElementById(imgId);
            if (!imgElement) {
                // Si la imagen no existe, créala
                imgElement = document.createElement('img');
                imgElement.id = imgId;
                imgElement.width = '100%';
                imgElement.height = '100%';
                var imgContainer = document.getElementById(`img-container-${id}`);
                imgContainer.appendChild(imgElement);
            }
            // Establece la fuente de datos de la imagen
            imgElement.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }else {
        // Si no se selecciona ninguna imagen, cargar la imagen predeterminada
        var imgId = 'img-' + id;
        var imgElement = document.getElementById(imgId);
        if (!imgElement) {
            imgElement = document.createElement('img');
            imgElement.id = imgId;
            imgElement.width = '100%';
            imgElement.height = '100%';
            imgContainer.innerHTML = '';  // Limpiar el contenedor antes de agregar la imagen
            imgContainer.appendChild(imgElement);
        }
        imgElement.src = 'file/dogo1.jpg';  // Reemplaza con la ruta de tu imagen predeterminada
    }
}