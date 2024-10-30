(function () {
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
  
    var addHeadingClassesPlugin = function (hook, vm) {
      hook.beforeEach(function (markdown) {
        const headingClassPattern = /^(#{1,6})\s*(.*?)\s*:\s*class=([\w-]+)/gm;
  
        return markdown.replace(headingClassPattern, function (match, hashes, title, classConfig) {
          const level = hashes.length;
          const { str: cleanTitle, config } = getAndRemoveConfig(title);
  
          if (config.class) {
            return `<h${level} class="${config.class}">${cleanTitle}</h${level}>`;
          } else {
            return `<h${level}>${cleanTitle}</h${level}>`;
          }
        });
      });
    };
  
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], addHeadingClassesPlugin);
  })();
  
  
  