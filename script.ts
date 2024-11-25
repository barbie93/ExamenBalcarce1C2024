// Definir las URLs relevantes
const urlMeet: string = "https://meet.google.com/hpv-hcna-yfi?authuser=0";
const urlLocal: string = "https://barbie93.github.io/ExamenBalcarce1C2024/";

// Función para manejar el clic en el enlace de Meet
function handleMeetLinkClick(): void {
    // Establecer una bandera en localStorage indicando que el usuario navegó a Meet
    localStorage.setItem("navigatedToMeet", "true");
}

// Adjuntar el manejador de eventos al enlace de Meet
const meetLink: HTMLElement | null = document.getElementById("meet-link");
if (meetLink) {
    meetLink.addEventListener("click", handleMeetLinkClick);
}

// Función para manejar el cambio de visibilidad de la página
function handleVisibilityChange(): void {
    if (document.visibilityState === "visible") {
        const navigatedToMeet: string | null = localStorage.getItem("navigatedToMeet");

        if (navigatedToMeet === "true") {
            console.log("El usuario regresó de Google Meet. No se refrescará la página.");
            // Restablecer la bandera
            localStorage.removeItem("navigatedToMeet");
        } else {
            console.log("El usuario regresó de otra pestaña. La página se recargará.");
            location.reload();
        }
    }
}

// Adjuntar el manejador de eventos al cambio de visibilidad
document.addEventListener("visibilitychange", handleVisibilityChange);
