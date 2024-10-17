## **Autenticación y Autorización en la Administración del Estado** <!-- {docsify-ignore} -->

> [!NOTE|style:callout|label:Contenido Verificado]
> Respuesta de ChatGPT sobre Autorización y Autenticación en la AGE

La **autenticación** y la **autorización** son fundamentales en el entorno de la Administración Pública, ya que garantizan la identificación correcta de los usuarios y la correcta asignación de derechos y permisos dentro de los sistemas electrónicos. Esto es crucial para proteger los datos personales, evitar fraudes y garantizar la correcta ejecución de los procedimientos administrativos.

### **Niveles de Seguridad: "Algo que Tienes, Algo que Sabes, Algo que Eres"**

El nivel de seguridad en los sistemas de autenticación se clasifica tradicionalmente en tres factores, que se relacionan con las tres formas principales de verificación:

1. **Algo que tienes**: Refleja la posesión de un objeto físico que verifica la identidad, como un **DNI electrónico (DNIe)**, un **certificado digital** o un dispositivo de firma electrónica cualificada. Estos dispositivos almacenan de manera segura las credenciales necesarias para la autenticación del usuario.
2. **Algo que sabes**: Es una contraseña, un **PIN** o cualquier otro tipo de conocimiento que solo el usuario pueda conocer. Aunque es fácil de implementar, su seguridad depende de su complejidad y la correcta gestión del usuario.
3. **Algo que eres**: Factores biométricos como la **huella dactilar**, el **reconocimiento facial** o el **escaneo del iris**. Estos métodos son los más seguros, ya que identifican de manera única al individuo sin posibilidad de duplicación.

### **Aspectos Normativos**

Los **sistemas de autenticación** y **firma electrónica** en España están regulados por diversas normativas, tanto nacionales como europeas:

1. **Ley 39/2015**:
   - **Artículo 9.2**: Las Administraciones Públicas deben implementar sistemas de identificación electrónica que aseguren la autenticidad, integridad y confidencialidad de los datos. Además, el sistema debe ser compatible con la **protección de datos personales** y la legislación sobre firma electrónica. Este artículo es clave para la adopción de sistemas de identificación como el **DNI electrónico** y el **sistema Cl@ve**, garantizando que el acceso a los servicios públicos sea seguro y que los datos del ciudadano estén protegidos.
   - **Artículo 10**: Regula el uso de la **firma electrónica** en los procedimientos administrativos, permitiendo que los documentos electrónicos sean firmados de forma segura. La firma electrónica es válida legalmente si cumple con los estándares de la normativa vigente, como el Reglamento eIDAS. La firma electrónica garantiza la validez jurídica de los trámites administrativos y permite la interconexión de servicios electrónicos dentro y fuera de las fronteras de la UE.

2. **Reglamento (UE) 910/2014 (EIDAS)**: Este reglamento europeo establece los requisitos para el uso de la **firma electrónica** y otros servicios de confianza. Se distingue entre tres tipos de firma:
   - **Firma electrónica básica**: Permite la autenticación del usuario mediante contraseñas o PINs.
   - **Firma electrónica avanzada**: Garantiza que el firmante es quien dice ser, mediante un mecanismo más robusto, como un **certificado digital**.
   - **Firma cualificada**: Es el nivel más alto de seguridad y requiere el uso de dispositivos de creación de firma cualificada, que garantizan la autenticidad y la integridad del documento firmado【19†source】.

### **Cl@ve: Qué es, en qué consiste y qué integra**

**Cl@ve** es el sistema de **identificación y firma electrónica** diseñado por las Administraciones Públicas para facilitar a los ciudadanos el acceso a los servicios electrónicos de forma segura y sencilla. Es una plataforma **interoperable** que permite a los ciudadanos realizar trámites administrativos sin necesidad de tener un **certificado digital** o el **DNI electrónico** en cada ocasión. Cl@ve integra varios métodos de autenticación, facilitando la autenticación de usuarios mediante distintos niveles de seguridad.

1. **Cl@ve PIN**: Un sistema de autenticación temporal en el que se envía un **código PIN** al número de teléfono móvil del usuario. Este PIN tiene una validez corta y es utilizado para realizar transacciones o acceder a servicios específicos.
   
2. **Cl@ve Permanente**: Es un sistema más robusto que permite al usuario gestionar un código de acceso permanente, que se puede cambiar en cualquier momento, proporcionando un nivel de seguridad más alto para el acceso a servicios recurrentes.

3. **Uso de DNIe y certificados digitales**: Además de los métodos anteriores, **Cl@ve** permite el acceso utilizando el **DNIe** y **certificados digitales**. Esto asegura que los ciudadanos puedan acceder a los servicios de manera sencilla, independientemente de cuál método prefieran usar.

El sistema **Cl@ve** también está alineado con el **Reglamento EIDAS**, lo que le permite ser interoperable con otros sistemas de identificación electrónica de la Unión Europea. Esto facilita a los ciudadanos realizar trámites no solo en España, sino también en otros países de la UE con un solo sistema de identificación【19†source】.

### **Certificados Digitales y el Reglamento EIDAS**

El **Reglamento EIDAS (910/2014)** también especifica los requisitos para los certificados digitales, esenciales para garantizar la autenticidad y seguridad de los trámites electrónicos. Este reglamento distingue entre tres tipos de **firma electrónica**:
   - **Firma básica**: Utiliza mecanismos sencillos como contraseñas.
   - **Firma avanzada**: Requiere medidas de seguridad adicionales como certificados digitales.
   - **Firma cualificada**: Es el nivel más alto de seguridad, garantizado por un **dispositivo de creación de firma cualificada**. Estos dispositivos son gestionados por **prestadores de servicios de confianza** acreditados, como el **Centro Criptológico Nacional (CCN)**, y son esenciales para la validación de documentos en la administración pública y en el ámbito europeo【19†source】.

### **Conclusión**

La **autenticación** y la **autorización** en la Administración Pública están cada vez más interconectadas con los **sistemas de identificación electrónica**, como el **DNIe**, los **certificados digitales** y el sistema **Cl@ve**. Estos sistemas son seguros y cumplen con las normativas europeas (como el reglamento EIDAS), garantizando la autenticidad y validez de los trámites administrativos. Con estos mecanismos, las Administraciones Públicas aseguran que solo los usuarios correctos puedan realizar ciertos procedimientos, protegiendo así tanto los datos de los ciudadanos como la integridad de los procesos administrativos.