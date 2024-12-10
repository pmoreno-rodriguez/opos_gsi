(function() {
    const baseUrl = "https://tusitio.com"; // Cambia esto por la URL de tu sitio Docsify
    const sidebarPath = "_sidebar.md"; // Cambia esto si tu _sidebar tiene otro nombre

    // Función para extraer enlaces del _sidebar.md
    async function fetchSidebarLinks() {
        const response = await fetch(sidebarPath);
        if (!response.ok) {
            console.error("Error al cargar el archivo _sidebar.md");
            return [];
        }
        const sidebarContent = await response.text();
        const linkRegex = /\[.*?\]\((.*?)\)/g;
        let match;
        const links = [];
        while ((match = linkRegex.exec(sidebarContent)) !== null) {
            links.push(match[1]);
        }
        return links;
    }

    // Función para generar sitemap.xml
    function generateSitemapXml(links) {
        const urls = links.map(link => {
            const fullUrl = new URL(link, baseUrl).href;
            return `<url><loc>${fullUrl}</loc></url>`;
        }).join("\n");

        return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
    }

    // Escribir el archivo sitemap.xml
    function downloadSitemap(xmlContent) {
        const blob = new Blob([xmlContent], { type: "application/xml" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "sitemap.xml";
        a.click();
    }

    // Crear botón de generación en la página
    function createGenerateButton() {
        const button = document.createElement("button");
        button.textContent = "Generar sitemap.xml";
        button.style.position = "fixed";
        button.style.bottom = "10px";
        button.style.right = "10px";
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "#007bff";
        button.style.color = "#fff";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.onclick = async function() {
            const links = await fetchSidebarLinks();
            const sitemapXml = generateSitemapXml(links);
            downloadSitemap(sitemapXml);
            alert("sitemap.xml generado y descargado.");
        };
        document.body.appendChild(button);
    }

    // Registro del plugin en Docsify
    window.$docsify.plugins = [].concat(window.$docsify.plugins || [], function(hook) {
        hook.doneEach(function() {
            createGenerateButton();
        });
    });
})();

