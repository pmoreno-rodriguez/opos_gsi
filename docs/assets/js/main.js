var addClassesPlugin = function (hook, vm) {
  hook.beforeEach(function (markdown) {
    // Expresión regular para capturar cualquier párrafo con :class=
    const classPattern = /^(.*?)(\s+:class=([\w-]+))?$/gm;

    return markdown.replace(classPattern, function (match, text, classMatch, classConfig) {
      // Limpiar el texto del párrafo
      let cleanText = text.trim();

      // Si hay configuración de clase, construir el elemento HTML apropiado
      if (classConfig) {
        return `<span class="${classConfig}">${cleanText}</span>`;
      } else {
        // Sin configuración de clase, simplemente devolver el texto limpio
        return cleanText;
      }
    });
  });
};

// Agregar el plugin a Docsify
window.$docsify = {
  plugins: [addClassesPlugin]
};

  