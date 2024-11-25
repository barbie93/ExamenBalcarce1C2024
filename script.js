// Definir las URLs relevantes
var urlMeet = "https://meet.google.com/hpv-hcna-yfi?authuser=0";
var urlLocal = "https://barbie93.github.io/ExamenBalcarce1C2024/";
// Función para manejar el clic en el enlace de Meet
function handleMeetLinkClick() {
    // Establecer una bandera en localStorage indicando que el usuario navegó a Meet
    localStorage.setItem("navigatedToMeet", "true");
}
// Adjuntar el manejador de eventos al enlace de Meet
var meetLink = document.getElementById("meet-link");
if (meetLink) {
    meetLink.addEventListener("click", handleMeetLinkClick);
}
// Función para manejar el cambio de visibilidad de la página
function handleVisibilityChange() {
    if (document.visibilityState === "visible") {
        var navigatedToMeet = localStorage.getItem("navigatedToMeet");
        if (navigatedToMeet === "true") {
            console.log("El usuario regresó de Google Meet. No se refrescará la página.");
            // Restablecer la bandera
            localStorage.removeItem("navigatedToMeet");
        }
        else {
            console.log("El usuario regresó de otra pestaña. La página se recargará.");
            location.reload();
        }
    }
}
// Adjuntar el manejador de eventos al cambio de visibilidad
document.addEventListener("visibilitychange", handleVisibilityChange);
