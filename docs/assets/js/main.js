(function () {
  // Función de configuración para extraer claves como :class=<nombre_clase>
  function getAndRemoveConfig(str = '') {
    const config = {};

    if (str) {
      str = str
        .replace(/^('|")/, '')
        .replace(/('|")$/, '')
        .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, (m, key, value) => {
          if (key.indexOf(':') === -1) {
            config[key] = (value && value.replace(/&quot;/g, '')) || true;
            return '';
          }
          return m;
        })
        .trim();
    }

    return { str, config };
  }

  /* var addHeadingClassesPlugin = function (hook, vm) {
    hook.beforeEach(function (markdown) {
      // Expresión regular que asegura un espacio antes de ":class="
      const headingClassPattern = /^(#{1,6})\s*(.*?)\s+:class=([\w-]+)/gm;

      return markdown.replace(headingClassPattern, function (match, hashes, title, classConfig) {
        const level = hashes.length; // Nivel de encabezado (#, ##, etc.)

        // Extrae el texto del título y la configuración
        const { str: cleanTitle, config } = getAndRemoveConfig(`"${title} :class=${classConfig}"`);

        // Si existe configuración de clase, se añade al encabezado
        if (config.class) {
          return `<h${level} class="${config.class}">${cleanTitle}</h${level}>`;
        } else {
          return `<h${level}>${cleanTitle}</h${level}>`;
        }
      });
    });
  };
 */
  var addTableClasses = function (hook, vm) {
    hook.doneEach(function () {
      var tables = document.querySelectorAll('table');
      tables.forEach(function(table) {
        var rows = table.querySelectorAll('tr');
        rows.forEach(function(row) {
          row.querySelectorAll('th, td').forEach(function(cell) {
            var matches = cell.textContent.match(/:class=([\w-]+)/);
            if (matches) {
              var className = matches[1];
              cell.className = className;
              cell.innerHTML = cell.innerHTML.replace(/:class=[\w-]+/, '');
            }
          });
        });
      });
    });
  };

  // Plugin para shortcodes personalizados
  var addShortcodePlugin = function (hook, vm) {
    hook.beforeEach(function (markdown) {
      // Expresión regular para encontrar shortcodes del tipo: [shortcode class="clase"]Texto[/shortcode]
      const shortcodePattern = /\[shortcode\s+class="([^"]+)"\](.*?)\[\/shortcode\]/gs;

      return markdown.replace(shortcodePattern, function (match, classes, content) {
        // Devuelve el contenido envuelto en un span con las clases especificadas
        return `<span class="${classes}">${content}</span>`;
      });
    });
  };

  // Registro del plugin en Docsify
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(
    $docsify.plugins || [],
    /* addHeadingClassesPlugin, */
    addTableClasses,
    addShortcodePlugin
  );

})();