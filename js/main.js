$("document").ready(function () {
    setLinksNoticias();
    $("#dlg").dialog({
		title: 'Documentos',
		autoOpen: false,
		type: "blue",
		width: '60%',
		height: "auto",
		maxHeight: innerHeight - 150,
		useBootstrap: false,
		typeAnimated: true,
		buttons: [{
			text: 'Cancelar',
			id: "btnCancelViewDocs",
			style: "color:white; background-color: red; border-color: red; font-size: 12px; font-weight: bold; padding: 5px 10px; border-radius: 3px; cursor: pointer;",
			click: cerrarDlg
		}
		]
	});
});

function cerrarDlg() {
	$(this).dialog("close");
}

function setLinksNoticias() {
    for (let i = 1; i <= 6; i++) {
        $("#noti-" + i).click(function () {
            window.location.href = "noticia" + i + ".html";
        });
    }
}
/*
function setModal(){
    for(let i = 1; i <= 3; i++){
        $("#link-" + i).click(function(){
            $.dialog({
                title: '<span>Ayuda</span>',
                content: cuerpo,
                type: "green",
                boxWidth: '450px',
                useBootstrap: false,
                typeAnimated: true,
            });
        });
    }
}
*/
$("#link-1").click(function () { dlgimportexcel(); });
const dlgimportexcel = () => {
$("#dlg").dialog("open");
}