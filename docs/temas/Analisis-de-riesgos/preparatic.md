> [!NOTE|label:Contenido adaptado de Preparatic 29]
> Grupo de apoyo a la preparación de la XXIII convocatoria de  oposiciones  al  Cuerpo Superior  de  Sistemas  y  Tecnologías  de  la Información de la Administración del Estado 

## ANÁLISIS DE RIESGOS <!-- {docsify-ignore} -->

### ¿En qué consiste un análisis de riesgos? <!-- {docsify-ignore} -->

Un análisis de riesgos consiste en el estudio de las posibles amenazas y eventos no deseados,  así  como  los  daños  que  éstos  puedan  producir  en  los  activos  de  la organización.

### Magerit <!-- {docsify-ignore} -->

Aunque  su  utilización  no  es  obligatoria,  la  metodología  más  extendida  en  la Administración a  la hora  de  realizar  análisis  de  riesgos es  Magerit  y,  por  tanto, utilizaremos una notación coherente con ella en este documento.

Como curiosidad, existe una herramienta denominada MicroPILAR, que hace un Análisis  de  Riesgos  inspirado  en  Magerit  aunque  simplificado,  fácil  de  usar  y adaptado al Esquema Nacional de Seguridad.

### Pasos para realizar un análisis de riesgos <!-- {docsify-ignore} -->

La metodología Magerit propone la siguiente secuencia de acciones:

- **Caracterización de los activos**:  se  realiza  una  catalogación  de  los principales  activos  de  la  organización  (incluyendo  datos,  software, hardware y elementos humanos) y se analizan las dependencias entre ellos (un activo A dependerá de otro B cuando la integridad de A se ve comprometida si B es atacado).
- **Caracterización de las amenzas**: para  cada  posible  amenaza identificada  sobre  un  activo,  se  debe  evaluar  la  vulnerabilidad (probabilidad de que acontezca), el impacto (daño producido) y su riesgo (en función de los dos anteriores). Cada amenaza puede comprometer a un activo en una o varias de las dimensiones de seguridad: Autenticidad, Confidencialidad, Integridad, Disponibilidad y Trazabilidad.
- **Caracterización de las salvaguardas**: se catalogarán las salvaguardas y se  evaluará  la  reducción  que  producen  en  vulnerabilidad  e  impacto respecto a las amenazas. El riesgo que queda después de esto es el llamado riesgo residual.
- **Estimación del estado del riesgo**: es la caracterización de los activos en función del riesgo residual.

### Enfoque práctico <!-- {docsify-ignore} -->

Si contamos con tiempo suficiente, razonar cómo se llega al estado de riesgo a partir de los pasos anteriores es la forma más detallada y profunda de responder a esta pregunta. Sin embargo, si disponemos del tiempo justo, una forma de recoger las conclusiones de los pasos anteriores es mediante una tabla como la siguiente (por supuesto, es un ejemplo y tanto los activos como las amenazas y su valoración deberá ser realizada por el opositor en función de los datos que se proporcionen en el enunciado).



|**Activo**|**Amenaza**|**Vulnerabilidad\***|**Impacto**|**Riesgo**|**Dimensión**|
|:- | :- | :- | :- | :- | :- |
|**Aplicación X**|Código dañino|Baja|Medio|Medio|ACID|
|**Información** |Corrupción de los datos |Media|Medio|Medio|I|
|**Información**|Acceso a los datos por alguien no autorizado|Media|Alto|Alto|C|
|**Comunicaciones**|Caída de las redes|Baja|Bajo|Bajo|D|

### Notación de Magerit <!-- {docsify-ignore} -->

En el caso del sistema los activos se clasifican en:

- Información.
- Datos.
- Servicios.
- Aplicaciones.
- Equipos informáticos.
- Soportes de información.
- Equipamiento auxiliar.
- Instalaciones.
- Personas.
- Redes de comunicaciones.

En cuanto a las principales amenazas que les afectan:

- De origen natural.
- Del entorno (de origen industrial)
- Defectos de las aplicaciones.
- Causadas por las personas de forma accidental.
- Causadas por las personas de forma deliberada

### ¿Y después de estimar el riesgo? <!-- {docsify-ignore} -->

Finalmente  y,  una  vez  identificados  los  riesgos,  es  necesario  seleccionar  las Salvaguardas  aplicables  y  aceptar  el  riesgo  residual  que  resulte  de  aplicarlas. Atención a un posible enlace con el Esquema Nacional de Seguridad, que impone salvaguardas a aquellos sistemas a los que aplica.

El último paso para la gestión de los riesgos es elaborar un Plan de Mejora o Plan de Seguridad,  consistente  en  organizar  la  implantación  de  las  salvaguardas seleccionadas en distintos proyectos, asignar responsables a los mismos y planificar los hitos y el seguimiento para su efectiva implantación.

### ¿Y si nos piden un análisis de riesgos del proyecto? <!-- {docsify-ignore} -->

Si  en  vez  de  preguntarnos  por  un  análisis  de  riesgos  global  de  un  sistema  de información nos preguntan por el análisis de riesgos de un proyecto de desarrollo, el enfoque  es  distinto.  En  este  apartado  os  proponemos  ejemplos  de  riesgos  del proyecto que podrían aplicar.

Estos ejemplos únicamente suponen una guía para orientaros. Es FUNDAMENTAL que os ciñáis al enunciado y adaptéis los riesgos al contexto que se os propone, de otro modo estaríais cayendo ![](Aspose.Words.77dcbdda-1d42-467a-8c15-58de6f131bd1.002.png)en el típico error del “plantillazo” que debéis evitar a toda costa.

| **RIESGOS DEL PROYECTO** | **SALVAGUARDAS** |
| :- | :- |
| <ul><li>Desvíos presupuestarios.</li><li>Restricciones presupuestarias.</li><li>Desvíos en la planificación.</li><li>Desvíos en el personal necesario.</li><li>Enfermedades o bajas de personal clave para el proyecto.</li><li>Falta de coordinación de los miembros del equipo.</li><li>Desvíos en los recursos estimados.</li><li>Falta de proveedores confiables.</li><li>Desvíos en los plazos establecidos por el personal externo.</li><li>Incumplimiento por el personal externo.</li><li>Mala comprensión de las necesidades del usuario.</li></ul> | <ul><li>Utilizar técnicas adecuadas de planificación y estimación del proyecto.</li><li>Utilizar técnicas adecuadas de análisis de requisitos e involucrar al usuario para asegurar que el desarrollo está siendo el adecuado a sus necesidades.</li><li>Realizar reuniones de seguimiento para: <ul><li>controlar los posibles desvíos y poder tomar medidas planificadas de antemano para afrontarlos.</li><li>asegurar que existe una adecuada coordinación entre todos los participantes del proyecto.</li></ul><li>Cumplir lo dispuesto en el RD Legislativo 3/2011 para asegurar que se contratan los proveedores más adecuados.</li><li>Contemplar penalizaciones ante incumplimiento en los contratos establecidos.</li></ul> |

| **RIESGOS TÉCNICOS** | **SALVAGUARDAS** |
| :- | :- |
| <ul><li>Errores en el análisis y en el diseño.</li><li>Errores en la implementación.</li><li>Errores o insuficiencias en las pruebas.</li><li>Incumplimiento de las condiciones del servicio sobre el mantenimiento.</li><li>Inexperiencia con la tecnología utilizada.</li><li>Dependencia del proveedor.</li></ul> | <ul><li>Establecer un procedimiento de aseguramiento de la calidad del proceso y el producto que permita identificar y solventar los errores en las fases en momentos tempranos.</li><li>Establecer cláusulas de penalización en los acuerdos de nivel de servicio establecidos con contratistas.</li><li>Realizar formación sobre la tecnología utilizada al personal del equipo de proyecto y al personal que se encargará de su gestión en el futuro.</li><li>Documentar el desarrollo para conservar el conocimiento sobre el sistema a nivel interno y minimizar la dependencia con el proveedor.</li></ul> |

| **RIESGOS DEL NEGOCIO** | **SALVAGUARDAS** |
| :- | :- |
| <ul><li>Que los usuarios no utilicen el servicio por falta de conocimiento.</li><li>Que el sistema no se adapte a las necesidades del usuario.</li><li>Que los objetivos del sistema no estén alineados con la estrategia del organismo.</li><li>Cambios en las prioridades estratégicas durante el proyecto.</li><li>Resistencia al cambio por parte de la organización y de los usuarios del sistema.</li></ul> | <ul><li>Involucrar a los usuarios durante el desarrollo y especialmente en las revisiones de calidad y de aceptación final del sistema.</li><li>Disponer de un procedimiento de cambio ágil para adaptarse a los cambios de estrategia.</li><li>Realizar campañas de formación, comunicación y concienciación para promocionar el sistema y gestionar el cambio cultural.</li><li>Comenzar la implantación en pilotos que generen un efecto arrastre sobre otros usuarios y departamentos.</li></ul> |

| **RIESGOS DE CUMPLIMIENTO** | **SALVAGUARDAS** |
| :- | :- |
| <ul><li>Incumplimiento de la normativa aplicable.</li><li>Cambios normativos o estructurales durante el proyecto.</li></ul> | <ul><li>Contemplar toda la normativa aplicable desde el estudio de viabilidad del sistema.</li><li>Disponer de un procedimiento de cambio ágil para adaptarse a los cambios de normativa.</li></ul> |
