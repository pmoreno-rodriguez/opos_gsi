> [!ATTENTION|label:Contenido NO Verificado]
> Respuesta de ChatGPT para el Supuesto Práctico del examen del año 2019. **PANACE@**

!> [Link al supuesto (PDF)](https://pmoreno-rodriguez.github.io/opos_gsi/supuestos/2019-panacea/2019-LIBRE.pdf)

## PREGUNTA 1. Indicar los factores críticos de éxito que se deberían tener en cuenta en el diseño de la arquitectura del sistema PANACE@. 

> [!NOTE|label: Nota Aclaratoria]
> Esta es una respuesta muy amplia que evidentemente no nos va a dar tiempo de poner en el examen, pero sí puede servir para darnos pistas y nos ayuda a estudiar los FCE.

Para diseñar una arquitectura de sistema exitosa para el proyecto PANACE@ de MUFACE, es crucial identificar y considerar diversos **factores críticos de éxito**. Estos factores serán clave para asegurar que el sistema sea seguro, eficiente, escalable, y que cumpla con los requisitos funcionales y no funcionales descritos en el enunciado. A continuación, detallo los aspectos más importantes a tener en cuenta:

### 1. **Cumplimiento del Esquema Nacional de Seguridad (ENS)** <!-- {docsify-ignore} -->

Dado que el sistema PANACE@ ha sido clasificado con una categoría **ALTA** dentro del **Esquema Nacional de Seguridad (ENS)**, el cumplimiento de sus medidas de seguridad es fundamental. Algunos puntos clave son:

- **Confidencialidad, integridad y disponibilidad de la información**: El diseño debe garantizar que la información personal y sanitaria de los Mutualistas esté protegida contra accesos no autorizados, se mantenga íntegra y esté disponible para los usuarios y entidades involucradas (Médicos, Farmacias, COF, Ministerio de Sanidad, etc.) cuando se necesite.
- **Control de acceso**: Implementar controles estrictos de autenticación y autorización para que solo los usuarios y sistemas autorizados puedan acceder a la información.
- **Trazabilidad y auditoría**: Se deben registrar todos los accesos y operaciones críticas realizadas en el sistema, manteniendo un registro detallado para auditorías de seguridad.
- **Cifrado de la información**: La información transmitida entre las distintas partes (Médicos, Farmacias, Proveedores Sanitarios, etc.) debe ser cifrada tanto en tránsito como en reposo, especialmente los datos sensibles de los Mutualistas.

### 2. **Interoperabilidad entre tecnologías (Java-Oracle y .NET-SQL Server)** <!-- {docsify-ignore} -->

La integración entre la sede electrónica de MUFACE (que está desarrollada en **.NET con base de datos SQL Server**) y el sistema PANACE@ (que usará **tecnología JAVA con base de datos Oracle**) es un reto técnico importante. Para garantizar la interoperabilidad entre ambos sistemas, deben tenerse en cuenta:

- **Intercambio de datos mediante estándares abiertos**: Implementar **servicios web basados en SOAP o REST** que permitan la comunicación fluida entre las plataformas Java/Oracle y .NET/SQL Server. El uso de estándares abiertos facilitará la integración y garantizará la compatibilidad.
- **Mecanismos de transformación de datos**: Como los sistemas pueden manejar estructuras de datos diferentes (por ejemplo, en los formatos de los mensajes o las consultas SQL), será necesario implementar mecanismos que transformen y adapten los datos entre las distintas plataformas.
- **Sincronización de datos**: Asegurar que la información que se comparte entre la sede electrónica y PANACE@ esté correctamente sincronizada, evitando problemas de inconsistencia de datos entre los dos entornos.

### 3. **Escalabilidad** <!-- {docsify-ignore} -->

El sistema PANACE@ debe ser escalable, dado que el número de mutualistas, beneficiarios, médicos y farmacias que interactuarán con el sistema puede crecer significativamente. Para lograr una arquitectura escalable, es importante:

- **Diseño modular y basado en microservicios**: Dividir el sistema en módulos o microservicios independientes para que sea posible escalar partes específicas del sistema según sea necesario. Por ejemplo, el módulo de receta electrónica puede escalarse independientemente del módulo de adscripción.
- **Uso de contenedores y orquestación**: Implementar tecnologías como **Docker** y **Kubernetes** para desplegar los servicios en contenedores, lo que facilitará la escalabilidad horizontal (añadir más instancias de un servicio) según la demanda.
- **Balanceo de carga y alta disponibilidad**: Implementar balanceadores de carga para distribuir el tráfico de manera eficiente entre los servidores. También se deben implementar mecanismos de alta disponibilidad (HA) para minimizar el impacto de fallos en hardware o software.
  
### 4. **Integración con terceros (NODOFARMA, Ministerio de Sanidad, COF)** <!-- {docsify-ignore} -->

La arquitectura debe facilitar la integración con varios sistemas externos, como **NODOFARMA**, el **Ministerio de Sanidad** y los **Proveedores Sanitarios Públicos y Privados**. Para esto, algunos factores críticos incluyen:

- **Servicios web seguros**: La comunicación con estos actores debe realizarse a través de servicios web que implementen protocolos seguros como **HTTPS**, con mecanismos de autenticación mutua (certificados digitales) y control de acceso.
- **Disponibilidad y latencia**: Dado que el sistema dependerá de la comunicación con sistemas externos para la dispensación de medicamentos y la actualización de información sanitaria, la arquitectura debe estar diseñada para manejar tiempos de respuesta adecuados y asegurar la disponibilidad del servicio.
- **Gestión de errores y redundancia**: Se debe prever la posibilidad de que algunos sistemas externos puedan estar temporalmente fuera de servicio. La arquitectura debe ser capaz de gestionar estas contingencias (por ejemplo, con mecanismos de reintento y almacenamiento temporal de datos).

### 5. **Experiencia del usuario (UX) y accesibilidad** <!-- {docsify-ignore} -->

El sistema PANACE@ será utilizado tanto por Mutualistas como por Médicos, Farmacias y otras entidades. Por lo tanto, la **usabilidad y accesibilidad** son aspectos críticos:

- **Simplicidad y facilidad de uso**: La interfaz de usuario, especialmente para los Mutualistas a través de la sede electrónica, debe ser intuitiva y fácil de usar, facilitando la realización de gestiones como la adscripción, cambio de proveedor o la consulta de la "Hoja de Tratamiento".
- **Accesibilidad universal**: Se debe cumplir con los estándares de accesibilidad (como WCAG 2.1) para asegurar que las personas con discapacidades puedan usar el sistema sin barreras.
- **Rendimiento**: La latencia debe ser mínima, especialmente en procesos críticos como la prescripción y dispensación de medicamentos, ya que los médicos y farmacéuticos necesitan respuestas rápidas.

### 6. **Mantenimiento, monitorización y soporte operativo** <!-- {docsify-ignore} -->

Dado que el sistema PANACE@ será una parte fundamental de la infraestructura de MUFACE, se debe garantizar su mantenimiento y monitorización continuos para asegurar su correcto funcionamiento. Para ello:

- **Monitorización en tiempo real**: Implementar herramientas de monitorización que permitan identificar problemas de rendimiento o fallos en tiempo real, facilitando una respuesta rápida ante incidencias.
- **Actualizaciones y parches**: Diseñar un proceso eficiente para la implementación de actualizaciones y parches de seguridad sin interrumpir el servicio (por ejemplo, mediante técnicas de despliegue continuo).
- **Capacidad de soporte**: Contar con un equipo de soporte bien preparado y con herramientas adecuadas para identificar y resolver incidencias operativas.

### 7. **Cumplimiento de la normativa de protección de datos (RGPD)** <!-- {docsify-ignore} -->

Dado que el sistema maneja información sanitaria sensible, es fundamental cumplir con el **Reglamento General de Protección de Datos (RGPD)**. Esto incluye:

- **Gestión del consentimiento**: Asegurar que los datos de los mutualistas se gestionen de acuerdo con los permisos otorgados por los mismos, obteniendo su consentimiento explícito para el tratamiento de sus datos.
- **Derecho al acceso, rectificación y borrado**: Implementar funcionalidades que permitan a los usuarios ejercer sus derechos de acceso, rectificación y eliminación de datos personales.
  
### Resumen <!-- {docsify-ignore} -->

En conclusión, los **factores críticos de éxito** para el diseño de la arquitectura del sistema PANACE@ incluyen:
- Cumplimiento del Esquema Nacional de Seguridad (ENS).
- Interoperabilidad entre las plataformas tecnológicas utilizadas.
- Escalabilidad del sistema.
- Integración segura y eficiente con terceros.
- Buena experiencia de usuario y accesibilidad.
- Monitorización y mantenimiento continuo.
- Cumplimiento del RGPD y protección de datos sensibles.

Cada uno de estos elementos es crucial para garantizar el éxito del proyecto PANACE@ en su fase de desarrollo y operación.

## PREGUNTA 2. Describir de la forma más detallada posible la arquitectura de sistemas para implantar el sistema PANACE@. Indicar cómo accedería al sistema cada actor o sistema que interactúa con el mismo, así como los intercambios de información

> [!NOTE|label: Nota Aclaratoria]
> Esta es una respuesta muy amplia que evidentemente no nos va a dar tiempo de poner en el examen, pero sí puede servir para darnos pistas y nos ayuda a estudiar la arquitectura de un sistema, actores e interacciones.

Para describir la **arquitectura de sistemas** propuesta para implantar el sistema PANACE@ de MUFACE, es fundamental tener en cuenta todos los actores y sistemas implicados, los módulos principales que componen PANACE@, así como los flujos de información e interacciones entre ellos. La arquitectura debe estar diseñada para garantizar la seguridad, la escalabilidad y la interoperabilidad necesarias para el éxito del proyecto.

A continuación, se describe de forma detallada la arquitectura propuesta:

### 1. **Visión general de la arquitectura** <!-- {docsify-ignore} -->

La arquitectura de PANACE@ debe ser una arquitectura **modular** y **distribuida** con una clara separación de responsabilidades entre los diferentes componentes. Esto permitirá que cada módulo sea independiente y escalable, facilitando además la integración con terceros. Propongo una arquitectura basada en **microservicios** que facilite la interoperabilidad entre los diferentes sistemas (internos y externos) y permita el escalado independiente de los componentes más críticos. 

El sistema PANACE@ residirá en el **CPD de MUFACE** y constará de varios módulos clave:
1. **Módulo de Gestión de Adscripciones**.
2. **Módulo de Receta Electrónica**.
3. **Módulo de Comunicación con Terceros** (NODOFARMA, Ministerio de Sanidad, Proveedores Públicos y Privados).
4. **Sede Electrónica de MUFACE** (interfaz de usuario para Mutualistas, Médicos, etc.).

### 2. **Componentes principales de la arquitectura** <!-- {docsify-ignore} -->

#### 2.1. **Módulo de Gestión de Adscripciones**
Este módulo será responsable de registrar la información de los Mutualistas, incluyendo el proveedor sanitario (Público o Privado) que hayan elegido. Este módulo interactúa principalmente con:
- **Proveedores Sanitarios** (Públicos y Privados).
- **Ministerio de Sanidad**.
- **Sede Electrónica de MUFACE** (para permitir que los Mutualistas gestionen su adscripción).

**Intercambio de información:**
- **Acceso del Mutualista**: A través de la **sede electrónica** de MUFACE (mediante una conexión HTTPS), los Mutualistas podrán gestionar su adscripción (añadir beneficiarios, cambiar de proveedor sanitario, etc.). La sede electrónica estará desarrollada en **.NET** y almacenará los datos en **SQL Server**.
- **Comunicación con Proveedores Sanitarios**: Una vez un Mutualista seleccione o cambie su proveedor sanitario, esta información será enviada desde el **Módulo de Gestión de Adscripciones** a los **Proveedores Sanitarios Públicos o Privados** mediante **servicios web (SOAP o REST)**. La información también se remitirá al **Ministerio de Sanidad**.
  
#### 2.2. **Módulo de Receta Electrónica**
Este es el corazón del sistema PANACE@ y se encargará de gestionar todo el proceso de prescripción y dispensación de medicamentos. Incluye las siguientes funcionalidades:
- **Prescripción Médica**: Los médicos pueden acceder a través de la **sede electrónica de MUFACE** para prescribir recetas electrónicas.
- **Conexión con las Farmacias**: A través de **NODOFARMA**, el sistema se conectará con las farmacias para permitir la dispensación de medicamentos a Mutualistas.

**Intercambio de información:**
- **Acceso de Médicos**: Los Médicos acceden al sistema a través de la **sede electrónica de MUFACE**. Desde su interfaz, pueden hacer las prescripciones electrónicas, que serán enviadas al **Módulo de Receta Electrónica**.
- **Comunicación con NODOFARMA**: El **Módulo de Receta Electrónica** está conectado al **nodo de comunicaciones del Colegio Oficial de Farmacéuticos (NODOFARMA)**, que permitirá a las farmacias recibir las recetas electrónicas. La comunicación se realizará mediante **servicios web seguros (HTTPS/SOAP)**.
- **Farmacias**: Las farmacias acceden a **NODOFARMA** a través de su intranet, y desde allí podrán ver las recetas electrónicas de los Mutualistas y dispensar los medicamentos correspondientes.
- **Control de facturación**: Una vez se dispensen los medicamentos, las farmacias remiten la información de los productos sanitarios entregados al **Módulo de Receta Electrónica** a través de NODOFARMA, lo que permitirá controlar la facturación.

#### 2.3. **Módulo de Comunicación con Terceros**
Este módulo es clave para garantizar la interoperabilidad del sistema PANACE@ con los **Proveedores Sanitarios**, el **Ministerio de Sanidad** y **NODOFARMA**. Este módulo se encargará de gestionar los intercambios de información entre PANACE@ y los sistemas externos.

**Intercambio de información:**
- **Proveedores Sanitarios**: La información de los Mutualistas y los datos de sus recetas serán compartidos con los **Proveedores Sanitarios (públicos o privados)** mediante servicios web seguros. Esto incluirá tanto la información de adscripción como los datos sobre tratamientos médicos prescritos.
- **Ministerio de Sanidad**: El **Módulo de Comunicación con Terceros** se encargará de enviar periódicamente la información necesaria al **Ministerio de Sanidad**, utilizando interfaces seguras y conformes a los estándares del sector salud en España.

#### 2.4. **Sede Electrónica de MUFACE**
Este componente es la interfaz principal de los Mutualistas, Médicos y otros actores del sistema. Está desarrollada en **.NET** y cuenta con una base de datos en **SQL Server**. A través de la sede electrónica, los usuarios podrán:
- **Mutualistas**: Gestionar su adscripción y consultar su "Hoja de Tratamiento" (con los medicamentos prescritos).
- **Médicos**: Prescribir recetas electrónicas para los Mutualistas.
  
### 3. **Acceso de los actores al sistema PANACE@** <!-- {docsify-ignore} -->

#### 3.1. **Mutualistas**
- **Acceso**: Los Mutualistas accederán a través de la **sede electrónica de MUFACE** (interfaz web en tecnología **.NET**). Podrán autenticar su identidad utilizando métodos seguros, como el **certificado digital** o el **sistema Cl@ve**. Una vez autenticados, podrán:
  - Cambiar de proveedor sanitario (Público o Privado).
  - Consultar y gestionar los datos de sus beneficiarios.
  - Acceder a su "Hoja de Tratamiento", donde podrán ver los medicamentos prescritos.
  
- **Interacción con el sistema**: La información que gestionen los Mutualistas (por ejemplo, cambiar de proveedor sanitario) será procesada por el **Módulo de Gestión de Adscripciones**, que actualizará los datos en **Oracle** y se los enviará a los **Proveedores Sanitarios** y al **Ministerio de Sanidad**.

#### 3.2. **Médicos**
- **Acceso**: Los Médicos accederán al sistema también a través de la **sede electrónica de MUFACE**. Utilizarán un método seguro de autenticación (como el certificado digital) para acceder a sus funcionalidades.
  
- **Interacción con el sistema**: Los Médicos podrán realizar **prescripciones electrónicas**. La receta será generada y almacenada en el **Módulo de Receta Electrónica**, que posteriormente enviará la información a **NODOFARMA** para que las farmacias puedan dispensar los medicamentos.

#### 3.3. **Farmacias**
- **Acceso**: Las Farmacias acceden a **NODOFARMA** a través de su propia intranet. **NODOFARMA** estará conectado al **Módulo de Receta Electrónica** de PANACE@.
  
- **Interacción con el sistema**: Las farmacias recibirán las recetas electrónicas desde **NODOFARMA** y podrán dispensar los medicamentos a los Mutualistas. Una vez hecho esto, se enviará la información de los medicamentos dispensados de vuelta al **Módulo de Receta Electrónica**, permitiendo el control de la facturación.

#### 3.4. **Ministerio de Sanidad y Proveedores Sanitarios**
- **Acceso**: El **Módulo de Comunicación con Terceros** se encargará de enviar y recibir información mediante servicios web con los sistemas del **Ministerio de Sanidad** y los **Proveedores Sanitarios (Públicos o Privados)**.
  
- **Interacción con el sistema**: Reciben la información necesaria (como datos de adscripción) y remiten la información relevante para el control sanitario y administrativo.

### 4. **Seguridad de la arquitectura** <!-- {docsify-ignore} -->

Para cumplir con el **Esquema Nacional de Seguridad (ENS)** en categoría ALTA, se deben implementar medidas de seguridad estrictas:
- **Cifrado**: Todo el tráfico de datos entre los actores y el sistema debe estar cifrado utilizando **HTTPS**.
- **Autenticación**: Se debe usar **autenticación fuerte**, como certificados digitales o el sistema Cl@ve.
- **Autorización basada en roles**: Cada usuario tendrá un perfil específico (Mutualista, Médico, Farmacéutico), lo que restringirá el acceso a las funcionalidades según el rol.
- **Registro y auditoría**: Todas las operaciones deben ser registradas para su posterior auditoría y control.

### 5. **Resumen gráfico (alta nivel)** <!-- {docsify-ignore} -->

#### Frontend:
- **Sede Electrónica de MUFACE**: Alojada en servidores **.NET** con base de datos **SQL Server**

#### Backend:
- **Sistema PANACE@ (en servidores Java/Oracle)**:
  - Módulo de Gestión de Adscripciones.
  - Módulo de Receta Electrónica.
  - Módulo de Comunicación con Terceros (NODOFARMA, Proveedores, Ministerio de Sanidad).

## PREGUNTA 3. Indicar al menos 5 medidas debe tener en cuenta para el bastionado o securización de los elementos detallados en la arquitectura del sistema PANACE@. Señale alguna de las guías del Centro Cristológico Nacional u otros organismos de reconocido prestigio en las que basa su respuesta 

> [!NOTE|label: Nota Aclaratoria]
> Esta es una respuesta muy amplia que evidentemente no nos va a dar tiempo de poner en el examen, pero sí puede servir para darnos pistas y nos ayuda a estudiar aspectos de bastionado y securización de un sistema.

Para el bastionado o securización del sistema **PANACE@**, que ha sido catalogado con una **categoría ALTA** dentro del **Esquema Nacional de Seguridad (ENS)**, es crucial implementar medidas de seguridad sólidas que protejan tanto la infraestructura como los datos sensibles que maneja. A continuación, propongo 10 medidas de seguridad que se deben implementar, basadas en guías del **Centro Criptológico Nacional (CCN)** y otros organismos de referencia como el **National Institute of Standards and Technology (NIST)** o el **OWASP**.

### **1. Autenticación y Autorización** <!-- {docsify-ignore} -->
   - **Medida:** Implementar un sistema de **autenticación multifactor (MFA)** para todos los actores que acceden a la sede electrónica y al sistema PANACE@. Además, gestionar permisos y roles para garantizar que cada usuario solo tenga acceso a los recursos necesarios según el principio de **mínimos privilegios**.
   - **Referencia:** Guía CCN-STIC 822 (Control de acceso basado en roles).

### **2. Cifrado de la Información en Tránsito y en Reposo** <!-- {docsify-ignore} -->
   - **Medida:** Asegurar que toda la información sensible (recetas electrónicas, datos de mutualistas) se cifre tanto en tránsito como en reposo, utilizando protocolos seguros como **TLS 1.2 o superior** para comunicaciones y **AES-256** para el cifrado de datos almacenados.
   - **Referencia:** CCN-STIC 401 (Cifrado de la Información).

### **3. Protección contra Ataques de Inyección (SQL, XML, etc.)** <!-- {docsify-ignore} -->
   - **Medida:** Implementar controles para evitar ataques de inyección (como **SQL injection** o **XXE attacks**), utilizando **consultas preparadas** y **validación estricta de entradas**.
   - **Referencia:** OWASP Top 10 (A01:2021-Injection), NIST SP 800-53 (System and Communications Protection).

### **4. Control de Acceso y Segmentación de Redes** <!-- {docsify-ignore} -->
   - **Medida:** Implementar **segmentación de la red** para separar los diferentes módulos del sistema (gestión de adscripciones, receta electrónica, bases de datos, etc.). Además, aplicar **firewalls** y **listas de control de acceso (ACLs)** para limitar el tráfico entrante y saliente solo a lo estrictamente necesario.
   - **Referencia:** CCN-STIC 503 (Segmentación de redes), NIST SP 800-41 (Guidelines on Firewalls and Firewall Policy).

### **5. Auditoría y Registro de Eventos** <!-- {docsify-ignore} -->
   - **Medida:** Implementar un sistema centralizado de **auditoría y registro de eventos** que monitorice y registre todas las actividades críticas en el sistema, como accesos, modificaciones de datos, y errores de seguridad. Además, se debe habilitar la **detección de anomalías** y alertas automáticas.
   - **Referencia:** CCN-STIC 817 (Gestión de incidentes de seguridad).

### **6. Parcheado y Actualización Continua** <!-- {docsify-ignore} -->
   - **Medida:** Establecer un proceso continuo de **parcheado de sistemas operativos, software y aplicaciones**. Esto incluye el uso de **actualizaciones automáticas** o manuales según el análisis de impacto, para asegurar que todas las vulnerabilidades conocidas estén corregidas.
   - **Referencia:** CCN-STIC 824 (Actualización de software), NIST SP 800-40 (Guide to Enterprise Patch Management Technologies).

### **7. Pruebas de Seguridad (Penetration Testing)** <!-- {docsify-ignore} -->
   - **Medida:** Realizar **pruebas de penetración periódicas** (penetration tests) para identificar vulnerabilidades en los diferentes módulos del sistema, especialmente en los puntos de integración con terceros (como NODOFARMA o el Ministerio de Sanidad). También es recomendable utilizar **análisis de vulnerabilidades automatizados**.
   - **Referencia:** CCN-STIC 806 (Pruebas de intrusión).

### **8. Protección contra Denegación de Servicio (DoS/DDoS)** <!-- {docsify-ignore} -->
   - **Medida:** Implementar medidas de **protección frente a ataques de denegación de servicio** (DoS/DDoS), como sistemas de **balanceo de carga**, **firewalls específicos** para DDoS y mecanismos de detección temprana de tráfico anómalo.
   - **Referencia:** NIST SP 800-61 (Computer Security Incident Handling Guide).

### **9. Securización de Bases de Datos** <!-- {docsify-ignore} -->
   - **Medida:** Fortalecer la **configuración de seguridad de las bases de datos Oracle y SQL Server** mediante la aplicación de políticas de acceso estrictas, encriptación de datos en reposo, y activación de mecanismos de auditoría interna de base de datos.
   - **Referencia:** CCN-STIC 875 (Seguridad en Bases de Datos).

### **10. Gestión de Copias de Seguridad (Backups) y Recuperación ante Desastres** <!-- {docsify-ignore} -->
   - **Medida:** Implementar una estrategia de **copias de seguridad cifradas y automatizadas**, con la posibilidad de realizar **pruebas periódicas de restauración** para asegurar la continuidad del negocio. Estas copias deben ser almacenadas en un entorno aislado para protegerlas de ataques.
   - **Referencia:** CCN-STIC 817 (Gestión de incidentes de seguridad), NIST SP 800-34 (Contingency Planning Guide for IT Systems).

### **Fuentes de referencia principales:** <!-- {docsify-ignore} -->
1. **Guías del Centro Criptológico Nacional (CCN-STIC):**
   - **CCN-STIC 401:** Protección criptográfica de la información.
   - **CCN-STIC 503:** Segmentación de redes.
   - **CCN-STIC 822:** Control de acceso basado en roles.
   - **CCN-STIC 806:** Pruebas de intrusión.
   - **CCN-STIC 817:** Gestión de incidentes de seguridad.
   - **CCN-STIC 824:** Actualización de software.
   - **CCN-STIC 875:** Seguridad en Bases de Datos.

2. **NIST (National Institute of Standards and Technology):**
   - **NIST SP 800-53:** Security and Privacy Controls for Federal Information Systems and Organizations.
   - **NIST SP 800-61:** Computer Security Incident Handling Guide.
   - **NIST SP 800-34:** Contingency Planning Guide for Information Technology Systems.

3. **OWASP (Open Web Application Security Project):**
   - **OWASP Top 10:** Principales vulnerabilidades en aplicaciones web.

### **Conclusión:** <!-- {docsify-ignore} -->
Estas medidas proporcionan una protección integral en distintos niveles: desde el cifrado de los datos y la autenticación segura hasta la monitorización de eventos y el control de acceso. Siguiendo las recomendaciones de guías de referencia como las del CCN y NIST, el sistema PANACE@ estará mejor preparado para hacer frente a amenazas internas y externas, cumpliendo con los requisitos de seguridad del ENS.

## PREGUNTA 4. Especificar las acciones específicas de nivel ALTO que habría de tener en cuenta para las siguientes medidas de seguridad del ENS:
   * ### Perímetro seguro [mp.com.1] <!-- {docsify-ignore} -->
   * ### Protección de la autenticidad y de la integridad [mp.com.3] <!-- {docsify-ignore} -->
   * ### Segregación de redes [mp.com.4] <!-- {docsify-ignore} -->
   * ### Medios alternativos [mp.com.9] <!-- {docsify-ignore} -->

> [!NOTE|label: Nota Aclaratoria]
> Esta es una respuesta muy amplia que evidentemente no nos va a dar tiempo de poner en el examen, pero sí puede servir para darnos pistas y nos ayuda a estudiar las diferentes medidas del ENS respecto de la seguridad perimetral, autenticidad e integridad de un sistema.

Para cumplir con las medidas de seguridad del **Esquema Nacional de Seguridad (ENS)** en categoría **ALTA**, es fundamental implementar una serie de acciones específicas que garanticen la protección adecuada de los sistemas, los datos y las comunicaciones del sistema PANACE@. A continuación, detallo las acciones necesarias para cumplir con cada una de las medidas de seguridad mencionadas:

### 1. **Perímetro seguro [mp.com.1]** <!-- {docsify-ignore} -->

La medida **mp.com.1** del ENS se refiere a garantizar que el **perímetro de la red** esté protegido frente a accesos no autorizados y amenazas externas. En un sistema de categoría ALTA, las acciones específicas incluyen:

#### **Acciones específicas:**
- **Firewall avanzado y sistemas IDS/IPS**:
  - Instalar **firewalls de última generación (Next-Generation Firewall, NGFW)** que no solo controlen el tráfico de red entrante y saliente, sino que también analicen las aplicaciones, detecten amenazas y bloqueen accesos no autorizados.
  - Configurar sistemas de **detección de intrusos (IDS)** y **prevención de intrusos (IPS)** en los puntos clave del perímetro para identificar y bloquear actividades sospechosas en tiempo real.
  
- **Zonas desmilitarizadas (DMZ)**:
  - Crear una **zona desmilitarizada (DMZ)** para aislar los servicios que necesitan ser accesibles desde redes externas (como la **sede electrónica de MUFACE** o los accesos de médicos y farmacias) del resto de la red interna. De este modo, cualquier ataque o intrusión se contendrá en la DMZ, sin afectar los sistemas internos críticos.
  
- **Segmentación del tráfico**:
  - Implementar **reglas estrictas de control de acceso** en los firewalls y segmentar el tráfico en diferentes capas. Por ejemplo, el tráfico proveniente de la **sede electrónica** y el tráfico proveniente de **NODOFARMA** deben gestionarse de forma separada para minimizar el impacto de un ataque en uno de los canales.

- **Monitorización continua del perímetro**:
  - Implementar herramientas de **monitorización continua** para supervisar y analizar el tráfico que cruza el perímetro, tanto desde el exterior hacia el interior como entre las diferentes zonas de la red interna. Es crucial contar con un equipo de **Centro de Operaciones de Seguridad (SOC)** que supervise estos sistemas en tiempo real, para reaccionar rápidamente a incidentes.

- **Protección frente a ataques DDoS**:
  - Configurar servicios de protección frente a ataques de denegación de servicio distribuidos (**DDoS**). Dado que el sistema PANACE@ es crítico para el servicio de salud, debe contar con servicios de mitigación de DDoS que puedan detener o reducir el impacto de estos ataques.

- **Autenticación de acceso seguro al perímetro**:
  - Para el acceso remoto de los administradores de la red y otros actores con permisos elevados, implementar **VPNs seguras** o conexiones cifradas con doble autenticación (MFA) para garantizar que los accesos al perímetro se realicen solo desde ubicaciones y dispositivos autorizados.

### 2. **Protección de la autenticidad y de la integridad [mp.com.3]** <!-- {docsify-ignore} -->

Esta medida **mp.com.3** se refiere a garantizar que las comunicaciones y los datos que se intercambian sean auténticos y no hayan sido manipulados durante su transmisión o almacenamiento. Esto es crucial para la integridad del sistema PANACE@, donde los datos de salud y las recetas electrónicas son altamente sensibles.

#### **Acciones específicas:**
- **Cifrado de extremo a extremo**:
  - Todas las comunicaciones entre los actores (Mutualistas, Médicos, Farmacias, Proveedores Sanitarios, Ministerio de Sanidad) y los módulos de PANACE@ deben estar cifradas mediante **HTTPS** con **certificados digitales válidos** emitidos por una autoridad de certificación de confianza.
  - Utilizar protocolos de cifrado avanzados como **TLS 1.3** para evitar que las comunicaciones puedan ser interceptadas o manipuladas durante su tránsito.

- **Firmas digitales**:
  - Implementar **firmas digitales** en los intercambios de datos críticos, como las recetas electrónicas o las comunicaciones entre el **Módulo de Receta Electrónica** y **NODOFARMA**. Esto garantizará la autenticidad del origen de los mensajes y permitirá verificar que no han sido alterados durante su transmisión.
  
- **Mecanismos de integridad en la base de datos**:
  - En el almacenamiento de datos, especialmente en las bases de datos de **Oracle** y **SQL Server**, implementar **hashes criptográficos** y mecanismos de control de integridad para asegurar que los datos no hayan sido alterados indebidamente. Esto es crucial para asegurar que los datos almacenados (por ejemplo, las prescripciones médicas) no sean modificados sin autorización.

- **Control de versiones de la información**:
  - Desarrollar sistemas de control de versiones para los datos críticos, como la información de adscripción y las recetas electrónicas, de manera que se pueda rastrear cualquier modificación realizada en los datos y garantizar su integridad a lo largo del tiempo.

- **Certificados digitales y autenticación mutua**:
  - Implementar **autenticación mutua mediante certificados digitales** en las comunicaciones con terceros, como NODOFARMA y los Proveedores Sanitarios. Este mecanismo asegura que ambas partes en la comunicación (emisores y receptores) puedan verificar la autenticidad de la otra parte antes de intercambiar información.
  
### 3. **Segregación de redes [mp.com.4]** <!-- {docsify-ignore} -->

La segregación de redes garantiza que los diferentes componentes del sistema PANACE@ no compartan la misma infraestructura de red, reduciendo así los riesgos de propagación de ataques. Para una categoría ALTA, esto implica una segmentación estricta de las redes con un control granular del tráfico entre ellas.

#### **Acciones específicas:**
- **Segmentación de redes internas**:
  - Dividir la red en **múltiples segmentos o VLANs**, de acuerdo con la función y criticidad de los sistemas. Por ejemplo, separar las redes que gestionan la base de datos Oracle del **Módulo de Gestión de Adscripciones** de la red que gestiona el acceso a la **sede electrónica**. Cada VLAN debe estar protegida por firewalls o controles de acceso estrictos para evitar el movimiento lateral de posibles atacantes dentro de la red.
  
- **Redes dedicadas para comunicaciones críticas**:
  - Para sistemas altamente críticos como el **Módulo de Receta Electrónica** y su conexión con **NODOFARMA**, crear redes dedicadas y separadas del resto de la infraestructura. Estas redes deben tener niveles adicionales de protección, como firewalls internos o mecanismos de control de tráfico específico.
  
- **Separación de la red administrativa**:
  - Las redes que utilizan los administradores del sistema para la gestión y supervisión de los componentes de PANACE@ deben estar completamente separadas de las redes utilizadas por los usuarios (Mutualistas, Médicos y Farmacias). Esto impide que posibles vulnerabilidades en las redes de usuarios puedan comprometer el entorno de administración del sistema.

- **Monitorización del tráfico entre redes**:
  - Instalar **sondas de análisis de tráfico** y herramientas de **monitorización del tráfico inter-VLAN** para detectar cualquier comportamiento anómalo o intentos de acceso no autorizados entre las distintas redes segmentadas.

- **Control de acceso basado en roles (RBAC)**:
  - Implementar **políticas estrictas de acceso basado en roles (RBAC)** para controlar quién tiene acceso a cada una de las redes segmentadas. Por ejemplo, un administrador de la base de datos Oracle solo debería tener acceso a la red que contiene los servidores de base de datos, pero no a la red que gestiona la comunicación con NODOFARMA.

### 4. **Medios alternativos [mp.com.9]** <!-- {docsify-ignore} -->

La medida **mp.com.9** del ENS en categoría ALTA exige que se establezcan mecanismos alternativos que aseguren la disponibilidad de los servicios críticos en caso de que fallen los medios principales. Estos medios alternativos deben estar diseñados para garantizar que los servicios puedan seguir operando o restablecerse rápidamente ante fallos.

#### **Acciones específicas:**
- **Planes de contingencia y recuperación ante desastres (DRP)**:
  - Desarrollar un **plan de recuperación ante desastres (DRP)** robusto que detalle los procedimientos a seguir en caso de fallo catastrófico en los sistemas de PANACE@. Este plan debe incluir la priorización de la recuperación de los módulos críticos, como el **Módulo de Receta Electrónica** y la sede electrónica.
  
- **Centros de datos alternativos (CPD)**:
  - Tener un **centro de datos alternativo (CPD secundario)** en una ubicación geográfica diferente del CPD principal. Este CPD debe estar completamente sincronizado con el principal y listo para asumir el control en caso de fallo del CPD primario. El traspaso de operaciones entre los CPD debe ser automático o requerir una mínima intervención manual.
  
- **Replicación de datos en tiempo real**:
  - Implementar mecanismos de **replicación de datos en tiempo real** entre el CPD principal y el CPD alternativo. Las bases de datos de Oracle y SQL Server deben replicar los datos de manera continua para que, en caso de fallo, los servicios puedan continuar operando con los datos más recientes posibles.

- **Infraestructura redundante**:
  - El diseño del sistema debe incluir redundancia en los

 componentes clave de la infraestructura: servidores, almacenamiento, firewalls, routers, conexiones de red, etc. Esto garantiza que, si uno de los componentes falla, otro pueda asumir su rol sin interrupción del servicio.

- **Pruebas periódicas de los medios alternativos**:
  - Realizar **pruebas periódicas** para verificar que los medios alternativos (CPD, sistemas de replicación, etc.) funcionan correctamente y que se puede garantizar la continuidad del servicio en caso de un fallo del sistema principal.

Estas acciones son esenciales para cumplir con las exigencias del ENS en categoría ALTA, asegurando un alto nivel de seguridad, integridad y disponibilidad en el sistema PANACE@.

## PREGUNTA 5. Realizar una planificación del proyecto en lo referente a la arquitectura de los sistemas, detallando todas las fases y actividades necesarias para llevarlo a cabo

> [!NOTE|label: Nota Aclaratoria]
> Esta es una respuesta muy amplia que evidentemente no nos va a dar tiempo de poner en el examen, pero sí puede servir para darnos pistas y nos ayuda a estudiar la planificación de un proyecto.

Para realizar una planificación detallada del proyecto relacionado con la **arquitectura de sistemas** de PANACE@, es necesario dividir el proyecto en fases claramente definidas y abordar todas las actividades críticas que permitan el despliegue y funcionamiento del sistema dentro de los estándares exigidos (incluyendo el cumplimiento con el ENS en categoría ALTA).

### **Fases del Proyecto** <!-- {docsify-ignore} -->

1. **Fase 1: Análisis y Planificación Inicial**
   - **Duración estimada**: 2-4 semanas
   - **Objetivo**: Definir los requisitos funcionales, técnicos y de seguridad del sistema PANACE@, así como los componentes de la arquitectura.
   
   #### Actividades:
   - **Reunión inicial con stakeholders**:
     - Identificar a todos los actores clave (MUFACE, Médicos, Mutualistas, Farmacias, Ministerio de Sanidad, etc.) y sus expectativas.
   - **Análisis de requisitos**:
     - Recopilar y documentar los requisitos funcionales (adscripciones, receta electrónica, gestión de medicamentos, acceso de usuarios) y no funcionales (seguridad, escalabilidad, disponibilidad).
   - **Análisis de la infraestructura actual**:
     - Revisar la infraestructura existente (CPD de MUFACE, sede electrónica, etc.) para definir qué componentes pueden reutilizarse o deben mejorarse.
   - **Definición de la arquitectura preliminar**:
     - Establecer un diseño inicial de los sistemas involucrados (módulo de adscripción, receta electrónica, NODOFARMA, sede electrónica), bases de datos (Oracle, SQL Server) y servicios web de integración.

2. **Fase 2: Diseño de la Arquitectura**
   - **Duración estimada**: 4-6 semanas
   - **Objetivo**: Desarrollar el diseño detallado de la arquitectura de los sistemas y de las comunicaciones seguras, cumpliendo con los requerimientos del ENS.

   #### Actividades:
   - **Diseño de los módulos del sistema**:
     - Diseño detallado del **Módulo de Gestión de Adscripciones**, **Módulo de Receta Electrónica**, y las conexiones con NODOFARMA y Proveedores Sanitarios.
   - **Seguridad perimetral y de red**:
     - Diseño del **perímetro seguro** con firewalls, IDS/IPS, DMZ, y la segmentación de redes para asegurar la segregación de tráfico entre componentes críticos.
   - **Diseño de la comunicación entre actores**:
     - Diseño del flujo de información entre los sistemas internos (Módulo de Receta Electrónica) y externos (farmacias, médicos, Proveedores Sanitarios, Ministerio de Sanidad).
     - Implementación de **protocolos de autenticación mutua** y cifrado de comunicaciones (TLS 1.3).
   - **Integración con NODOFARMA**:
     - Definición de los servicios web para el intercambio de información con NODOFARMA, garantizando la integridad y autenticidad de los datos (firmas digitales y cifrado).
   - **Diseño de los mecanismos de integridad y autenticidad**:
     - Implementación de **firmas digitales** y hash criptográficos para proteger la integridad de las recetas electrónicas y datos sensibles.
   - **Plan de contingencia y recuperación ante desastres (DRP)**:
     - Diseño del plan de recuperación y medios alternativos, incluyendo la sincronización en tiempo real con un CPD alternativo.

3. **Fase 3: Desarrollo e Implementación de la Infraestructura**
   - **Duración estimada**: 10-12 semanas
   - **Objetivo**: Implementar la infraestructura y las plataformas necesarias para la ejecución de PANACE@.

   #### Actividades:
   - **Configuración de infraestructura de red**:
     - Implementación de la **segregación de redes**: segmentación de VLANs, configuración de firewalls, IDS/IPS, y protección del perímetro.
   - **Implementación de CPD primario y secundario**:
     - Instalación y configuración de servidores en el **CPD principal** y configuración del **CPD alternativo**. Establecer la replicación de datos y las pruebas iniciales del DRP.
   - **Instalación y configuración de bases de datos**:
     - Configuración de la base de datos Oracle para el módulo de gestión de adscripciones y SQL Server para la sede electrónica. Implementación de mecanismos de alta disponibilidad (HA) y replicación.
   - **Despliegue de la plataforma JAVA**:
     - Despliegue del entorno Java en el CPD, y configuración de los módulos de gestión de adscripciones y receta electrónica.
   - **Integración con sistemas externos**:
     - Establecer la conexión con **NODOFARMA**, Proveedores Sanitarios y el Ministerio de Sanidad. Configuración de los servicios web y pruebas de integración.
   - **Desarrollo de mecanismos de autenticidad y firma digital**:
     - Implementación de la autenticación mutua basada en certificados digitales y mecanismos de firma digital para garantizar la integridad y autenticidad de los datos intercambiados.

4. **Fase 4: Desarrollo del Sistema**
   - **Duración estimada**: 12-16 semanas
   - **Objetivo**: Desarrollar los módulos funcionales del sistema, realizar pruebas de integración y asegurar que se cumplen todos los requisitos de seguridad.

   #### Actividades:
   - **Desarrollo del Módulo de Gestión de Adscripciones**:
     - Desarrollo de la funcionalidad para que MUFACE gestione las adscripciones de mutualistas y envíe los datos a Proveedores Sanitarios y al Ministerio de Sanidad.
   - **Desarrollo del Módulo de Receta Electrónica**:
     - Implementar la funcionalidad de prescripción y generación de recetas electrónicas. Asegurar que los datos estén cifrados y firmados.
   - **Implementación de acceso a la Hoja de Tratamiento para los mutualistas**:
     - Permitir que los mutualistas accedan a través de la sede electrónica a la información de su tratamiento y medicación.
   - **Integración con la sede electrónica**:
     - Asegurar la integración con la plataforma **.NET** de la sede electrónica, incluyendo acceso a la **Hoja de Tratamiento** y funcionalidades de gestión de adscripción.
   - **Pruebas de seguridad y funcionalidad**:
     - Realizar pruebas de seguridad (pen testing, pruebas de vulnerabilidad) para asegurar el cumplimiento del ENS en categoría ALTA. Ejecutar pruebas funcionales e integración para verificar el correcto funcionamiento de los módulos.

5. **Fase 5: Pruebas de Integración y Aceptación**
   - **Duración estimada**: 8 semanas
   - **Objetivo**: Verificar que la infraestructura, los módulos y los mecanismos de seguridad funcionan correctamente.

   #### Actividades:
   - **Pruebas de integración con terceros**:
     - Validar las conexiones con **NODOFARMA**, Proveedores Sanitarios y el Ministerio de Sanidad. Realizar pruebas exhaustivas para verificar la integridad y autenticidad de los datos transmitidos.
   - **Pruebas de rendimiento**:
     - Realizar pruebas de carga y estrés en los servidores y la base de datos para asegurar que el sistema es escalable y puede manejar un alto volumen de transacciones.
   - **Pruebas de recuperación y contingencia**:
     - Simular fallos en el CPD principal y validar la conmutación al CPD alternativo para asegurar la continuidad del servicio.
   - **Auditoría de cumplimiento del ENS**:
     - Ejecutar una auditoría de seguridad para verificar el cumplimiento de las medidas de seguridad del ENS en nivel ALTO. Esto incluye la revisión de la segregación de redes, protección de la integridad de datos, autenticidad de las comunicaciones y la existencia de medios alternativos.

6. **Fase 6: Despliegue en Producción y Mantenimiento**
   - **Duración estimada**: 6-8 semanas
   - **Objetivo**: Poner en marcha el sistema PANACE@ en un entorno de producción y establecer un plan de mantenimiento.

   #### Actividades:
   - **Despliegue en producción**:
     - Migración del sistema a un entorno de producción controlado. Configuración final del sistema en los CPD principales y secundarios.
   - **Capacitación de usuarios**:
     - Formación de los usuarios clave (empleados de MUFACE, médicos, farmacéuticos) en el uso de los nuevos módulos del sistema.
   - **Plan de mantenimiento y actualizaciones**:
     - Establecer un plan de mantenimiento preventivo, correctivo y de actualizaciones. Definir un cronograma para actualizaciones de software, parches de seguridad y mejoras de infraestructura.
   - **Monitorización continua**:
     - Implementar sistemas de monitorización continua para el rendimiento y la seguridad del sistema. El equipo de administración debe vigilar la infraestructura y los módulos del sistema para detectar y corregir problemas de forma proactiva.

7. **Fase 7: Evaluación post-implementación**
   - **Duración estimada**: 4 semanas
   - **Objetivo**: Asegurar que el sistema cumple con las expectativas y planificar mejoras futuras.

   #### Actividades:
   - **Revisión de rendimiento y seguridad**:
     - Recolectar datos de uso del sistema tras su puesta en marcha y analizar el rendimiento, escalabilidad y seguridad.
   - **Feedback de los usuarios**:
     - Obtener retroalimentación de los usuarios para identificar posibles mejoras o ajustes en la funcionalidad.
   - **Planificación de mejoras**:
     - Desarrollar un plan para futuras mejoras o nuevas características que puedan ser necesarias a partir de la experiencia de los usuarios y la evolución tecnológica.

Esta planificación detallada cubre todas las fases y actividades necesarias para llevar a cabo el proyecto de PANACE@ con éxito, asegurando el cumplimiento de los requisitos funcionales, técnicos y de seguridad (ENS ALTA), así como la correcta integración de todos los actores involucrados.