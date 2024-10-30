### Guía de Aplicación de Servicios en la Red SARA <!-- {docsify-ignore} -->

La Red SARA es una infraestructura de comunicación española que permite la interconexión entre administraciones públicas, facilitando la interoperabilidad en servicios y datos entre los distintos entes gubernamentales. Esta guía se estructura en dos grandes áreas de aplicación en la red SARA: la **consumición** y **publicación** de servicios, además de describir algunos servicios comunes importantes.

### 1. Roles y Casos de Uso de Red SARA <!-- {docsify-ignore} -->

**Red SARA**, regulada bajo la Ley 40/2015, establece un marco en el que los proyectos pueden consumir y/o publicar servicios dentro de la red administrativa, facilitando la interoperabilidad en el despliegue de proyectos de administración electrónica.

1. **Consumir Servicios**: Los servicios ofrecidos por la red incluyen:
   - **Horizontales**: como verificación de datos, validación de firma electrónica, registro de domicilio, pasarela de pagos, videoconferencia, y registro electrónico común.
   - **Verticales**: servicios especializados provistos por diferentes administraciones.
   - **De red**: servicios básicos de conectividad, monitorización y seguridad.
   
2. **Publicar Servicios**: Las administraciones pueden compartir servicios de utilidad con otros organismos, aumentando la accesibilidad y eficiencia entre entidades gubernamentales.

### 2. Servicios Horizontales de Red SARA <!-- {docsify-ignore} -->

Los servicios horizontales proporcionan soluciones a necesidades comunes de las administraciones:

**2.1. Verificación y Consulta de Datos (SVC)**: Esta plataforma permite verificar datos ciudadanos sin necesidad de presentar documentos adicionales. Incluye servicios para verificar identidad, residencia, títulos académicos, y antecedentes fiscales y laborales.

**2.1.1. Verificación y Consulta de los Datos (SVC) / Plataforma de Intermediación**

La **Plataforma de Intermediación de Datos** de la red SARA facilita la verificación de datos en tiempo real para los organismos de la Administración General del Estado (AGE) y otros entes públicos. Esta plataforma permite que los ciudadanos no tengan que presentar documentación en cada trámite, ya que los organismos pueden consultar y verificar directamente la información. A continuación se detallan los principales servicios de verificación y consulta de datos disponibles en la plataforma, específicamente para organismos de la AGE:

- **Verificación de Datos de Identidad (SVDI)**: Permite verificar y consultar datos de identidad, como el DNI o NIE del ciudadano, y obtener datos a partir de esos identificadores. También incluye la consulta y verificación de datos de residencia de extranjeros.  
  - **Organismo responsable**: Dirección General de la Policía.

- **Verificación de Datos de Residencia (SVDR)**: Incluye el servicio de verificación de datos de empadronamiento, como la consulta de la residencia actual del ciudadano y la fecha de la última variación. 
  - **Organismo responsable**: Instituto Nacional de Estadística (INE).

- **Verificación de Datos de Prestación de Desempleo**: Proporciona información actual sobre la situación de desempleo, incluyendo los importes de las prestaciones, el periodo en el que se percibieron y si el ciudadano está inscrito como demandante de empleo.
  - **Organismo responsable**: SEPE (Servicio Público de Empleo Estatal).

- **Verificación de Datos de Títulos Oficiales (SVDT)**: Permite consultar los títulos académicos oficiales registrados, tanto universitarios como no universitarios, además de verificar si un ciudadano cuenta con becas o profesiones reguladas.
  - **Organismo responsable**: Ministerio de Educación.

- **Verificación de Datos de la Seguridad Social (TGSS)**: Permite consultar información laboral, como el estado de alta en la Seguridad Social, la vida laboral de los últimos 12 meses o cinco años, y los números de afiliación.
  - **Organismo responsable**: Tesorería General de la Seguridad Social (TGSS).

- **Verificación de Datos Tributarios (AEAT)**: Facilita la consulta sobre el estado del ciudadano respecto a sus obligaciones tributarias, como contratos con Administraciones Públicas, permisos y autorizaciones, subvenciones, y el nivel de renta.
  - **Organismo responsable**: Agencia Estatal de Administración Tributaria (AEAT).

- **Verificación de Datos Catastrales**: Incluye la consulta de datos catastrales, certificación de titularidad, consulta de bienes inmuebles, y obtención de descripciones y gráficas de un inmueble.
  - **Organismo responsable**: Dirección General del Catastro.

- **Consulta de Nivel y Grado de Dependencia**: Permite conocer el grado y nivel de dependencia de una persona, incluyendo detalles como el número de expediente, tipo de dependencia y fecha de reconocimiento.
  - **Organismo responsable**: IMSERSO.

- **Consulta de Prestaciones Públicas (Registro de Prestaciones Sociales Públicas e Incapacidad Temporal y Maternidad)**: Ofrece información detallada sobre prestaciones públicas, incluyendo el tipo de prestación, si es contributiva o no, entidad pagadora, e importe.
  - **Organismo responsable**: Instituto Nacional de la Seguridad Social (INSS).

- **Consulta de Datos del Ministerio de Justicia**: Facilita la consulta de información como datos de nacimiento, matrimonio, defunción, inexistencia de antecedentes penales, antecedentes por delitos sexuales y apostillado de documentos.
  - **Organismo responsable**: Ministerio de Justicia.

- **Consulta de Entidades Aseguradoras y Reaseguradoras**: Permite consultar las entidades de seguros y reaseguros, mediadores de seguros y corredores, así como planes y fondos de pensiones.
  - **Organismo responsable**: Dirección General de Seguros y Fondos de Pensiones.

- **Registro General de Interdicciones al Juego (RGIAJ)**: Permite consultar y descargar el registro de personas con interdicciones al juego, en sus diversas modalidades (alta, baja, modificación, descarga completa o parcial).
  - **Organismo responsable**: Dirección General de Ordenación del Juego (DGOJ).

- **Servicios del Ministerio de Hacienda y Administraciones Públicas**: Incluye consulta de datos de residencia legal de extranjeros, inscripción en el Registro Central de Personal, y notificación de cambio de domicilio.
  - **Organismo responsable**: Ministerio de Hacienda y Administraciones Públicas (MINHAP).

- **IGAE (Intervención General de la Administración del Estado)**: Proporciona servicios para consultar inhabilitaciones para subvenciones y ayudas, así como el estado de concesiones de ayudas y subvenciones y clases pasivas.
  - **Organismo responsable**: Ministerio de Hacienda y Administraciones Públicas (MINHAP).

- **Consulta de Firmas para Legalización Diplomática de Documentos Públicos Extranjeros**: Permite verificar firmas en documentos extranjeros para su legalización diplomática.
  - **Organismo responsable**: Ministerio de Asuntos Exteriores.

- **Servicios del Consejo General del Notariado**: Ofrece servicios de consulta de poderes notariales, sus copias, y la existencia de apoderamientos vigentes.
  - **Organismo responsable**: Consejo General del Notariado.

- **Servicios de MUFACE**: Incluye la consulta y certificación de afiliación, abonos individuales, y prestaciones recibidas en pago único.
  - **Organismo responsable**: Mutualidad General de Funcionarios Civiles del Estado (MUFACE).

- **Servicios de Tráfico**: Permite la consulta de datos de conductores y vehículos, incluyendo sanciones y permisos de conducción.
  - **Organismo responsable**: Dirección General de Tráfico (DGT).

- **Servicios del Instituto Cervantes**: Ofrece la consulta de calificaciones de las pruebas de conocimiento constitucional y sociocultural de España (CCSE) y de español como lengua extranjera (DELE).
  - **Organismo responsable**: Instituto Cervantes.

- **Servicios de la CRUE**: Permite la consulta de datos sobre matrículas universitarias, facilitando la verificación de información académica.
  - **Organismo responsable**: Conferencia de Rectores de las Universidades Españolas (CRUE).

- **Servicios de Prevención de Blanqueo de Capitales (SEPBLAC)**: Facilita la consulta de titularidades financieras, con servicios específicos para verificar productos y cuentas.
  - **Organismo responsable**: SEPBLAC.

- **Servicios de la SECAD**: Incluye la consulta sobre garantías de depósitos.
  - **Organismo responsable**: Secretaría de Estado de Cooperación y Asistencia al Desarrollo.

- **Registro Público Concursal**: Permite consultar el registro público de procedimientos concursales en el sistema notarial.
  - **Organismo responsable**: Registradores.

**2.2. Plataforma de Validación de Firma Electrónica (@firma)**: Facilita la validación de certificados y firmas electrónicas en múltiples formatos, integrando tanto firmas en dispositivos locales como en la nube.

**2.3. Solicitud de Cambio de Domicilio**: Centraliza la notificación de cambios de domicilio en una sola solicitud, permitiendo la comunicación con diferentes organismos de manera automática.

**2.4. Pasarela de Pago**: Permite la ejecución de pagos telemáticos en trámites administrativos y facilita la consulta de pagos y verificación de recibos.

**2.5. Catálogos de Procedimientos de las AAPP (SIA)**: El Sistema de Información Administrativa contiene la relación de servicios y procedimientos administrativos de la AGE y otras AAPP, con herramientas de administración y catálogo de servicios web.

**2.6. Servicio Común de Reuniones Virtuales (REÚNETE)**: Proporciona un sistema de videoconferencia, colaboración virtual, y herramientas de aprendizaje online (Moodle), promoviendo la eficiencia y sostenibilidad al reducir desplazamientos físicos.

**2.7. Centro de Transferencia de Tecnología (CTT)**: Un repositorio de soluciones técnicas para la administración electrónica, ofreciendo información en infraestructura, normativa y desarrollos.

**2.9. Registro Electrónico Común (REC)**: Posibilita el envío de solicitudes, escritos y comunicaciones a la AGE que no encajen en los procedimientos existentes.

### 3. Otros Servicios Destacados <!-- {docsify-ignore} -->

1. **Notificaciones Electrónicas (SNE)**: Cada ciudadano dispone de un buzón seguro para recibir notificaciones administrativas.

2. **CONECTA-CENTRALIZACIÓN**: Ofrece acceso al catálogo de bienes y servicios de contratación centralizada y facilita la gestión y seguimiento de solicitudes de compra.

3. **Registro de Funcionarios Habilitados**: Permite consultar las habilitaciones de funcionarios para trámites específicos, asegurando la autenticidad mediante firma electrónica.

4. **Carpeta Ciudadana**: Brinda a los ciudadanos acceso a sus expedientes, datos, apoderamientos, y registros, así como a la consulta de sus intercambios de datos entre administraciones. Además, es interoperable con otras carpetas de administraciones que utilicen Cl@ve para un acceso simplificado y seguro.

### Ventajas y Requisitos para la Integración <!-- {docsify-ignore} -->

La red SARA permite una simplificación considerable en la gestión de trámites administrativos, reduciendo la necesidad de papel y mejorando la precisión y accesibilidad de los datos. Para acceder a estos servicios, los organismos deben:
- Estar conectados a la Red SARA.
- Disponer de certificados digitales X509.
- Tener un convenio firmado para el intercambio bilateral de datos.