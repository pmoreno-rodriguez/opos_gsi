// Plugin para Docsify que agrega clases a encabezados de Markdown
(function(hook) {
    hook.beforeEach(function(content) {
      // Expresión regular para detectar encabezados con clases
      const headingClassPattern = /^(#{1,6})\s*(.*?)\s*:\s*class-[\w-]+=([\w-]+)/gm;
  
      // Reemplaza los encabezados con una versión que incluye un span con la clase deseada
      return content.replace(headingClassPattern, function(match, hashes, title, className) {
        const level = hashes.length; // El número de "#" indica el nivel del encabezado
        return `<h${level} class="${className}">${title}</h${level}>`;
      });
    });
  })(window.$docsify);
  