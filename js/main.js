$("document").ready(function () {
    setLinksNoticias();
    setModal();
});


function setLinksNoticias() {
    for (let i = 1; i <= 6; i++) {
        $("#noti-" + i).click(function () {
            window.location.href = "noticia" + i + ".html";
        });
    }
}

function setModal() {
    for (let i = 1; i <= 3; i++) {
        $("#link-" + i).click(function () {
            const cuerpo = `
            <div>  
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus corporis 
                blanditiis odio asperiores placeat eius fuga ad facilis aut laborum exercitationem 
                doloribus nihil, provident quae vitae quis repellendus, iure veniam.
            </div>
            `;
            $.dialog({
                title: '<span>Importar Excel</span>',
                content: cuerpo,
                type: "green",
                boxWidth: '450px',
                useBootstrap: false,
                typeAnimated: true,
            });
        });
    }
}

$("#newEnt").click(function(){
    const form = `
    <div>
        <form id="frmNewReg">
            
        </form>
    </div>
    `;
    $.dialog({
        title: '<span>Nueva Registro</span>',
        content: form,
        type: "green",
        boxWidth: '450px',
        useBootstrap: false,
        typeAnimated: true,
    });
});