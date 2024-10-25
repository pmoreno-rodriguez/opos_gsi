## Guía para Identificar Actores e Interfaces en un Sistema <!-- {docsify-ignore} -->

### 1. Introducción: Actores versus Interfaces <!-- {docsify-ignore} -->

En el análisis de sistemas, es fundamental distinguir entre **actores** e **interfaces**. Los actores representan personas físicas que interactúan con el sistema, mientras que las interfaces son otros sistemas con los que se comunica. Esta distinción es clave al realizar diagramas de casos de uso, ya que ambos elementos deben estar reflejados.

La siguiente guía proporciona un enfoque metódico para identificar actores e interfaces, lo cual es esencial para:

- Definir los mecanismos e interfaces de acceso.
- Asegurar que ningún actor relevante quede fuera del análisis.
- Establecer conexiones y puntos de acceso adecuados para cada actor.

### 2. Identificación de Actores e Interfaces <!-- {docsify-ignore} -->

Para identificar correctamente a los actores e interfaces, es recomendable seguir un proceso de lectura detallada del enunciado:

1. **Primera lectura**: comprensión general del enunciado.
2. **Segunda lectura**: identificar y apuntar cada persona o sistema mencionado.
3. **Completar información**: agregar actores e interfaces que sean necesarios pero no estén explícitos en el enunciado (por ejemplo, la necesidad de una firma electrónica implica una interfaz para realizarla).

### 3. Organización de los Actores <!-- {docsify-ignore} -->

Una vez identificados, los actores deben clasificarse en categorías según su relación con el sistema.

#### 3.1 Actores Externos del Sistema
   - **Ciudadano**: Persona física o jurídica que utiliza el sistema.

#### 3.2 Actores Internos del Sistema
   - **Funcionarios de registro** y/o tramitadores específicos.
   - **Editores, revisores y aprobadores**: según el contexto de gestión de contenidos.
   - **Administrador del sistema**: encargado de la gestión técnica y operativa.
   - **Personal del CAU y/o CAC**: Centro de Atención al Usuario o Cliente.
   - Otros roles específicos según el contexto del sistema.

### 4. Organización de las Interfaces <!-- {docsify-ignore} -->

Las interfaces son los sistemas con los cuales interactúa nuestro sistema y pueden clasificarse en sistemas internos y externos.

#### 4.1 Interfaces con Sistemas Internos (del mismo organismo)
   - **Legacy systems**: sistemas heredados que se integran en el sistema actual.
   - **Cuadro de Mandos**: herramienta para el monitoreo y control.
   - **Datawarehouses**: almacenamiento de datos para análisis.
   - **Sistemas ERP y CRM**: sistemas de gestión contable, nóminas, etc.
   - **Registro del organismo**: almacena información de inscripciones y trámites.
   - **Plataforma de firma del organismo**: centraliza la gestión de firmas electrónicas y se conecta con un HSM para la custodia segura de certificados.

#### 4.2 Interfaces con Sistemas Externos
   - **Servicios Comunes**:
     - **@Firma**: validación de certificados electrónicos.
     - **Cl@ve**: sistema de autenticación electrónica.
     - **SNE**: Servicio de Notificaciones Electrónicas.
     - **TS@**: servicio de tramitación segura para plazos críticos.
     - **Pasarela de Pagos**: facilita el cobro de tasas.
     - **Plataforma de intermediación**: servicios de validación de identidad y documentos.
   - **Sistemas de otros organismos**: otros sistemas gubernamentales que puedan integrarse o consultarse.

### 5. Preguntas Clave sobre Actores e Interfaces <!-- {docsify-ignore} -->

Para profundizar en la identificación y caracterización de actores e interfaces, se deben considerar las siguientes preguntas:

#### 5.1 Acceso a la Aplicación
   - **¿Cómo accede cada actor?**:
     - Sede electrónica.
     - Red interna (para funcionarios).
     - Portal específico de acceso.
   - **¿Alternativa presencial?**: En situaciones donde no se pueda exigir el trámite electrónico, se debe prever la opción de tramitación presencial.

#### 5.2 Autenticación de Actores
   - **¿Cómo se autentican?**:
     - Certificado electrónico (tipo).
     - Usuario y contraseña.
     - Casos donde no se requiere autenticación, como portales de consulta pública.

#### 5.3 Funcionalidades Accesibles para cada Actor
Es necesario detallar a qué funcionalidades tiene acceso cada actor y qué visualiza en pantalla, incluyendo formularios y opciones de actuación.

#### 5.4 Requisitos de Firma
En caso de requerirse firma, es importante definir el mecanismo de firma y los requisitos específicos de autenticación para cada actor.

#### 5.5 Requisitos de Pago
Si es necesario realizar pagos, se debe identificar una interfaz adecuada, como la Pasarela de Pagos correspondiente.

#### 5.6 Notificaciones y Comunicaciones
Si algún actor requiere notificaciones, se debe analizar el canal adecuado y respetar el derecho del ciudadano a elegir el medio de comunicación:

   - Correo físico.
   - Electrónicamente a través del SNE.

#### 5.7 Conexiones con Interfaces
Para las conexiones con interfaces, es importante definir el método de comunicación:
   - **Servicios web**.
   - **Envíos FTP**.

### 6. Requisitos Legales y Funcionales <!-- {docsify-ignore} -->

Al diseñar el sistema, es fundamental tener en cuenta requisitos derivados de la legislación vigente, tales como:

- **Confirmación de Recepción**: el sistema debe emitir un recibo en caso de solicitudes telemáticas.
- **Consulta del Estado del Trámite**: los ciudadanos tienen derecho a consultar el estado de sus trámites.
- **Registro de Entrada y Salida**: toda entrada y salida de información debe quedar registrada oficialmente.

### 7. Información Manejada por los Actores <!-- {docsify-ignore} -->

Cada actor maneja y genera distintos tipos de información dentro del sistema:

- **Tipo de información**: formularios, recibos, justificantes de pago, notificaciones, estadísticas, informes, certificados.
- **Origen y destino**: toda información entrante y saliente debe ser identificada y vinculada a los actores y las interfaces que la procesan.

### 8. Ejemplos de Actores e Interfaces Comunes <!-- {docsify-ignore} -->

A continuación, algunos ejemplos de actores e interfaces relevantes en el contexto de sistemas administrativos:

- **Plataforma de Firma del Organismo**: centraliza la validación de firmas electrónicas.
- **@Firma**: valida los certificados electrónicos.
- **Pasarela de Pagos de la AEAT**: gestiona el cobro telemático de tasas.
- **SPT (Red.es)**: sistema de pago telemático para servicios públicos.
- **SNE**: envía notificaciones a la Dirección Electrónica Habilitada del ciudadano.
- **Registro**: sistema que almacena la información de inscripciones.
- **BOE**: publicación de información en el Boletín Oficial del Estado.
- **Plataforma de Intermediación**: permite la validación y consulta de datos de otros sistemas.
- **RFH/HABILIT@**: gestiona la habilitación de funcionarios para representación ante la administración.
- **REA/Apoder@**: registro electrónico de representación y apoderamientos.
- **Cl@ve**: sistema de autenticación para ciudadanos.
- **BADARAL y NEDAES**: sistemas de gestión de RRHH y nóminas, respectivamente.
- **SIC, SOROLLA y CANOA**: sistemas de gestión económica y contable.