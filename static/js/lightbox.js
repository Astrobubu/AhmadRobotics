document.addEventListener("click", (e) => {
    const t = e.target;
    if (!t.classList.contains("lightboxable")) return;

    const lb = document.createElement("div");
    lb.className = "fixed inset-0 bg-black/90 flex items-center justify-center";
    lb.innerHTML = `<img src="${t.src}" class="max-h-[90%] max-w-[90%] rounded-lg shadow-lg">`;
    document.body.appendChild(lb);
    lb.addEventListener("click", () => lb.remove());
});
