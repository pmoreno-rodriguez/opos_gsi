> [!NOTE|style:callout|label:Contenido Verificado]
> Respuesta de ChatGPT para un Plan de Accesibilidad y Usabilidad de un desarrollo móvil

Para verificar la **accesibilidad y usabilidad** de un desarrollo móvil dirigido a la administración pública, utilizando el **RD 1112/2018**, la norma **UNE-EN 301 549:2022**, las **WCAG 2.1** y la **ISO 9241**, el Plan de Pruebas debe contemplar varios aspectos. A continuación, te detallo un resumen de los puntos clave que deberían abordarse:

### 1. **Objetivo del Plan de Pruebas**
El plan busca evaluar y asegurar que la aplicación móvil cumple con los **requisitos de accesibilidad y usabilidad** exigidos por la normativa vigente. Esto incluye garantizar que la app sea **utilizable y accesible** para todas las personas, incluidas aquellas con discapacidades, en el contexto de la administración pública.

### 2. **Normativas y estándares aplicados**

#### a) **RD 1112/2018**
Este Real Decreto transfiere la **Directiva Europea (UE) 2016/2102** sobre accesibilidad de sitios web y aplicaciones móviles del sector público. Establece que todos los desarrollos tecnológicos de la administración pública deben cumplir con ciertos **criterios de accesibilidad** basados en estándares reconocidos, como las WCAG y la norma UNE-EN.

#### b) **UNE EN 301 549:2022**
Es la **norma técnica de accesibilidad** para productos y servicios TIC (incluidas aplicaciones móviles) que deben cumplir las administraciones públicas. Alineada con las WCAG 2.1, define los **requisitos técnicos** que deben ser implementados, como accesibilidad en el contenido, manejo por voz, lectores de pantalla, navegación mediante teclado, etc.

#### c) **WCAG 2.1 (Pautas de Accesibilidad para el Contenido Web)**
Este estándar internacional, del W3C, se aplica tanto a sitios web como aplicaciones móviles. Define tres niveles de conformidad:
- **A (básico)**
- **AA (intermedio)**
- **AAA (avanzado)**

Para la administración pública, el nivel **AA** es obligatorio según el RD 1112/2018. Se evalúan cuatro principios: 
1. **Perceptible:** Que la información y componentes de la interfaz de usuario sean presentables para los usuarios de manera que puedan percibirlos.
2. **Operable:** Que los componentes de la interfaz de usuario y la navegación sean operables.
3. **Comprensible:** Que la información y el manejo de la interfaz sean comprensibles.
4. **Robusto:** Que el contenido sea robusto para ser interpretado por una amplia variedad de usuarios y tecnologías asistivas.

#### d) **ISO 9241 (Ergonomía de la interacción hombre-sistema)**
Esta norma se centra en la **usabilidad** y la **experiencia del usuario (UX)**. Abarca aspectos relacionados con la facilidad de uso, eficiencia, satisfacción del usuario y reducción de errores. Evalúa los siguientes puntos:
- **Eficacia:** ¿El usuario puede lograr sus objetivos con la app?
- **Eficiencia:** ¿El tiempo y esfuerzo requeridos son mínimos?
- **Satisfacción:** ¿La experiencia es agradable para el usuario?
- **Accesibilidad:** ¿La interfaz está diseñada para todos los usuarios, independientemente de sus capacidades?

### 3. **Estructura del Plan de Pruebas**
El plan debe estructurarse en fases que incluyan:

#### a) **Definición de los criterios de éxito**
- Identificar los requisitos específicos de accesibilidad y usabilidad a cumplir según el RD 1112/2018, UNE-EN 301 549:2022, WCAG 2.1 y la ISO 9241.
- Especificar los niveles de conformidad exigidos (por ejemplo, WCAG 2.1 nivel AA).

#### b) **Metodología de pruebas**
- **Pruebas automatizadas:** Uso de herramientas automáticas de evaluación de accesibilidad que cubran criterios WCAG 2.1 y UNE-EN 301 549:2022.
- **Pruebas manuales:** Realizadas por expertos en accesibilidad para evaluar características no detectables por herramientas automáticas.
- **Pruebas con usuarios reales:** Usuarios con discapacidades, incluyendo personas con ceguera, baja visión, discapacidad motora y cognitiva. Se busca medir cómo interactúan con la aplicación.
- **Pruebas de usabilidad:** De acuerdo con la ISO 9241, con usuarios representativos para evaluar la eficiencia, eficacia y satisfacción.

#### c) **Ámbitos de las pruebas**
- **Accesibilidad de la interfaz:** Verificar que la aplicación cumple con las WCAG 2.1 (niveles A y AA), tales como:
  - Texto alternativo para imágenes.
  - Contraste de colores adecuado.
  - Navegación accesible a través del teclado y comandos de voz.
  - Lectura correcta mediante lectores de pantalla.
  - Flexibilidad para ser usada en dispositivos táctiles y con tecnologías asistivas.
  
- **Navegabilidad:** Según WCAG y UNE-EN, debe ser posible navegar intuitivamente por la app usando múltiples dispositivos de entrada.
  
- **Compatibilidad:** La app debe ser compatible con las tecnologías asistivas, como lectores de pantalla, dispositivos de entrada de voz y otros.
  
- **Contenido multimedia:** Los videos deben tener subtítulos, transcripciones o descripciones de audio, según el nivel de WCAG 2.1 y UNE-EN.

#### d) **Criterios de usabilidad**
Con base en la ISO 9241:
- **Facilidad de uso:** Comprobar la rapidez con la que los usuarios aprenden a usar la app.
- **Eficiencia operativa:** Evaluar si los usuarios completan tareas sin errores graves ni interrupciones.
- **Satisfacción:** Medir el nivel de satisfacción de los usuarios, especialmente aquellos con discapacidades.

#### e) **Informe de resultados**
- **Identificación de problemas:** Enumerar las barreras de accesibilidad y usabilidad encontradas.
- **Recomendaciones:** Proponer soluciones y mejoras.
- **Conformidad:** Confirmar el cumplimiento con los requisitos de accesibilidad establecidos en las normativas aplicables.

### 4. **Herramientas recomendadas**
- **Pruebas automáticas de accesibilidad:** Lighthouse, Axe, WAVE.
- **Pruebas manuales:** NVDA, JAWS (lectores de pantalla).
- **Pruebas de usabilidad:** Métodos como tests de usuario, análisis heurístico y encuestas de satisfacción.

### 5. **Cronograma**
El plan debe incluir un cronograma de actividades, con fechas clave para las pruebas y revisiones.

### 6. **Conclusión**
Este Plan de Pruebas combina las normativas de accesibilidad y usabilidad con el fin de garantizar que el desarrollo móvil cumpla con los estándares requeridos por la administración pública, garantizando un producto final accesible y de calidad para todos los usuarios.