# RESPUESTAS DE CHATGPT A LAS PREGUNTAS DEL SUPUESTO <!-- {docsify-ignore} -->

### PREGUNTA 1.

### PREGUNTA 2.

## PREGUNTA 3. Indicar al menos 5 medidas debe tener en cuenta para el bastionado o securización de los elementos detallados en la arquitectura del sistema PANACE@. Señale alguna de las guías del Centro Cristológico Nacional u otros organismos de reconocido prestigio en las que basa su respuesta  <!-- {docsify-ignore} -->

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

---

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

### PREGUNTA 4.

### PREGUNTA 5.