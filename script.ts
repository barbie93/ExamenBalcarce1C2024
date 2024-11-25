// URLs relevantes
const urlMeet = "https://meet.google.com/hpv-hcna-yfi?authuser=0";
const urlLocal = "https://barbie93.github.io/ExamenBalcarce1C2024/";

// Función para manejar el clic en el enlace de Meet
function handleMeetLinkClick(): void {
    // Establece una bandera indicando que el usuario navegó al Meet
    localStorage.setItem("navegandoAlMeet", "true");
}

// Adjuntar el manejador de eventos al enlace de Meet
const meetLink = document.getElementById("meet-link");
if (meetLink) {
    meetLink.addEventListener("click", handleMeetLinkClick);
}

// Función para manejar el cambio de visibilidad
function handleVisibilityChange(): void {
    if (document.visibilityState === "visible") {
        const navegandoAlMeet = localStorage.getItem("navegandoAlMeet");

        if (navegandoAlMeet === "true") {
            console.log("Regresaste del Meet. No se recarga la página.");
        } else {
            console.log("Regresaste de otra pestaña. Se recargará la página.");
            location.reload();
        }
    } else if (document.visibilityState === "hidden") {
        // Establece una bandera indicando que el usuario salió de la página
        if (window.location.href === urlLocal) {
            localStorage.setItem("navegandoAlMeet", "false");
        }
    }
}

// Adjuntar el manejador de eventos
document.addEventListener("visibilitychange", handleVisibilityChange);
