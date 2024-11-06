## Guía para el Diseño de Arquitectura Lógica en Sistemas de Administración Electrónica <!-- {docsify-ignore} -->

> [!TIP|style: callout|icon: fa fa-check|label: Contenido Verificado]
> Contenido extraído parcialmente de la documentación de [Preparatic 29](https://www.preparatic.org/category/material-pack/material-pack-preparatic-29/).

El diseño de la arquitectura lógica es fundamental en el desarrollo de sistemas para la administración pública. No solo representa el núcleo estructural que sustenta el sistema, sino que también permite responder a los requisitos específicos, normativos y funcionales de cada aplicación, garantizando escalabilidad, seguridad y un correcto flujo de información. Esta guía ofrece un enfoque detallado en cinco áreas clave para crear una arquitectura lógica efectiva y alineada con las necesidades de la administración electrónica.

### 1. Identificación de Actores <!-- {docsify-ignore} -->

La **identificación precisa de los actores** es esencial, ya que permite definir las diferentes interacciones entre usuarios y sistema. Este paso inicial asegura que cada usuario tenga acceso solo a las funcionalidades necesarias para su rol, facilitando la operación y seguridad del sistema.

- **Tipos de Actores**:
  - **Usuarios Ciudadanos**: Personas que acceden al sistema para realizar trámites o consultas en nombre propio o como representantes de terceros.
  - **Funcionarios y Empleados Públicos**: Personal de las Administraciones Públicas que realiza trámites en nombre del Estado o para la ciudadanía.
  - **Miembros de Gobierno y Altos Cargos**: Usuarios con permisos administrativos especiales, necesarios en sistemas de mayor envergadura o jerarquía.
  - **Actores Normativos**: Para cumplir con la normativa, puede ser necesario incluir actores como Funcionarios Habilitados de Oficinas de Asistencia o personal de verificación y registro.

Es común representar estas interacciones mediante **diagramas de contexto** y **diagramas de casos de uso**. Estos diagramas ilustran visualmente quiénes son los actores y qué operaciones pueden realizar, facilitando la comprensión global del sistema y su estructura de permisos.

### 2. Análisis Funcional de Casos de Uso <!-- {docsify-ignore} -->

El análisis funcional se traduce en casos de uso que detallan las funciones clave que el sistema ofrece a cada tipo de usuario. Definir adecuadamente estos casos de uso permite visualizar la operatividad real del sistema, asegurando que cubre las necesidades específicas de los actores.

- **Componentes de los Casos de Uso**:
  - **Actor (Quién)**: Especifica los roles que pueden interactuar con cada funcionalidad.
  - **Acción (Qué)**: Describe cada operación que se puede realizar en el sistema, desde el registro hasta la generación de informes.
  - **Proceso (Cómo)**: Define los pasos que el sistema sigue para completar cada acción, lo que incluye validaciones, verificaciones y almacenamiento de datos.

Ejemplos de casos de uso en la administración electrónica:
- **Solicitud de Ayudas y Subvenciones**: Usuarios pueden solicitar apoyos económicos o recursos mediante el sistema, presentando documentación específica y cumpliendo requisitos.
- **Registro de Datos**: Servicios de registro que permiten el almacenamiento y acceso a información personal o empresarial.
- **Generación de Documentos**: Creación y emisión de certificados, justificantes, notificaciones y reportes administrativos.
- **Automatización Administrativa**: Procesos en los que el sistema puede actuar de manera autónoma, como la validación de requisitos, agilizando trámites administrativos.

Definir estos casos de uso desde una perspectiva amplia y modular permite al sistema adaptarse rápidamente a los cambios en la normativa o los requisitos administrativos sin afectar su estabilidad.

### 3. Definición de la Arquitectura del Sistema y Subsistemas <!-- {docsify-ignore} -->

En el diseño de sistemas para la administración pública, la estructura modular, con subsistemas independientes, garantiza una **arquitectura flexible y escalable**. Esta modularidad permite además la reutilización de componentes existentes y su integración en el sistema.

- **Consideraciones para el Diseño de Subsistemas**:
  - **Reutilización de Componentes**: Analiza la posibilidad de reutilizar módulos ya disponibles, como gestores documentales, plataformas de firma, sistemas de notificación y workflows administrativos.
  - **Condiciones Iniciales**: Factores como el presupuesto, el tiempo disponible y la experiencia previa en sistemas similares son determinantes para la estructura arquitectónica.
  - **Escenarios de Uso**: Considera la adaptabilidad a escenarios de crecimiento, escalabilidad, tolerancia a fallos y accesibilidad.

Para una correcta definición de los subsistemas, es recomendable seguir los siguientes pasos:

1. **Modelado del Sistema**: Diseñar una estructura que contemple subsistemas autónomos y cohesivos, donde cada uno tenga una función específica y se conecte a otros a través de interfaces claras. La gestión de **entradas y salidas** es crucial, especialmente en términos de persistencia de datos y documentos.
   
2. **Modelo de Datos**: Desarrollar un modelo de entidades, relaciones y cardinalidades, incluyendo solo los atributos principales para evitar la sobrecarga de información.
   
3. **Estrategia de Arquitectura**: Optar por una arquitectura en capas o microservicios según las necesidades y el conocimiento técnico. La arquitectura de microservicios, por ejemplo, permite escalabilidad en los módulos, mientras que una arquitectura en capas asegura una mejor integración y cohesión de los procesos internos.
   
4. **Seguridad, Interoperabilidad y Monitorización**: Estas capas son esenciales para proteger la información, facilitar el trabajo conjunto entre sistemas y garantizar la disponibilidad. La monitorización permite supervisar la actividad del sistema en tiempo real y detectar posibles errores.

### 4. Interfaces del Sistema y Conexión con Otros Sistemas <!-- {docsify-ignore} -->

En la administración pública, las interfaces no solo representan el acceso web, sino también la capacidad del sistema de interactuar con otras plataformas y servicios. Esto asegura un servicio continuo y accesible para los ciudadanos.

- **Interfaces de Usuario**: Las interfaces deben cumplir con el **Real Decreto 1112/2018** de accesibilidad para asegurar que todos los ciudadanos puedan interactuar con el sistema, independientemente de sus capacidades o dispositivos.
- **Integración con Otros Sistemas**: El sistema debe poder conectarse con otros sistemas mediante servicios web o APIs, cumpliendo con las normativas establecidas en el **RD 806/2014**. Este decreto establece la obligatoriedad de ciertos servicios comunes, como Notifica o la Plataforma de Intermediación de Datos (PID).

Ejemplos de sistemas de integración incluyen:
  - **Notifica**: Permite la gestión de notificaciones administrativas, incluyendo el control de plazos y el seguimiento de entregas.
  - **PID**: Facilita la consulta de datos administrativos, como identidad, títulos, residencia y más, mediante procesos automatizados que garantizan la precisión y rapidez en la gestión.

### 5. Autenticación y Firma <!-- {docsify-ignore} -->

La autenticación y la firma electrónica son componentes críticos en los sistemas de administración electrónica. La seguridad de los datos y la confianza en la identidad del usuario son fundamentales para la correcta operatividad del sistema.

- **Métodos de Autenticación**:
  - **Usuario y Contraseña**: Es una opción válida para accesos con requisitos de seguridad básica, siempre y cuando se justifique adecuadamente en el contexto.
  - **CL@VE y CL@VE Firma**: Esta plataforma de autenticación es un estándar en la administración electrónica española, permitiendo identificación y firma electrónica mediante mecanismos seguros.
  - **Autenticación en Dos Factores (2FA)** y **Biometría**: Para casos en los que se requiere un nivel de seguridad alto, como acceso a información sensible.
  - **DNI Electrónico** y **Autentica**: Permiten un acceso y autenticación de alta seguridad en dispositivos móviles y puntos de acceso remotos.

Es importante que la implementación de estos métodos se ajuste al **Esquema Nacional de Seguridad (ENS)**, categorizando los niveles de seguridad en función del tipo de acceso y el perfil de usuario. Además, se debe prever la posibilidad de integrar métodos avanzados de firma y autenticación, según el caso práctico.

### Conclusión <!-- {docsify-ignore} -->

Diseñar una arquitectura lógica para sistemas en la administración pública requiere un análisis exhaustivo de cada uno de los componentes y actores implicados. Este enfoque modular garantiza una solución escalable, segura y adaptable, capaz de responder a la evolución de las necesidades y normativas. Una arquitectura lógica robusta facilita una **interacción clara entre subsistemas, interfaces de usuario accesibles, integración con otros sistemas y mecanismos de autenticación seguros**, promoviendo una administración electrónica efectiva y orientada al ciudadano.