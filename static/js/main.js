// expand / collapse panels
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const panel = btn.nextElementSibling;
            panel.classList.toggle("open");
            btn.textContent = panel.classList.contains("open") ? "Hide details ▲" : "More details ▼";
        });
    });

    // simple lightbox for gallery
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    Object.assign(lightbox.style, {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0,
        transition: "opacity .2s",
        zIndex: 999,
        visibility: "hidden",
    });
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", () => {
        lightbox.style.opacity = 0;
        lightbox.style.visibility = "hidden";
        lightbox.innerHTML = "";
    });

    document.querySelectorAll(".gallery img").forEach((img) => {
        img.addEventListener("click", () => {
            const clone = img.cloneNode();
            clone.style.width = "80%";
            clone.style.height = "auto";
            clone.style.borderRadius = "12px";
            lightbox.innerHTML = "";
            lightbox.appendChild(clone);
            lightbox.style.visibility = "visible";
            lightbox.style.opacity = 1;
        });
    });
});
