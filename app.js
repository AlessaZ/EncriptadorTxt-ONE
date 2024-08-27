const regex = /^[a-z\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]+$/;

function procesarTexto(esEncriptar) {
    const text = document.querySelector("textarea").value;
    const small = document.querySelector("small");
    const leftPanel = document.querySelector(".main__left_panel");
    const showPanel = document.querySelector(".main__left_panel__show");
    const output = document.querySelector(".main__left_panel__text__p3");

    if (regex.test(text)) {
        small.removeAttribute("style");

        const transformations = esEncriptar ? 
            { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" } : 
            { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };

        let processedText = text;
        for (const [key, value] of Object.entries(transformations)) {
            const regex = new RegExp(key, "g");
            processedText = processedText.replace(regex, value );
        }

        output.textContent = processedText;
        leftPanel.style.display = "none";
        showPanel.style.display = "block";
    } else {
        small.style.color = "red";
        leftPanel.style.display = "flex";
        showPanel.style.display = "none";
    }
}

function encriptar() {
    procesarTexto(true);
}

function desencriptar() {
    procesarTexto(false);
}

function copiarTexto() {
    const texto = document.querySelector(".main__left_panel__text__p3").textContent;
    return navigator.clipboard.writeText(texto);
}
