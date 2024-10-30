## Implantación y Aceptación del Sistema <!-- {docsify-ignore} -->

Este proceso tiene como objetivo principal la entrega y aceptación del sistema en su totalidad, y la realización de todas las actividades necesarias para el paso a producción del mismo.

<h3 class="titulo-h3-color">IAS 01: Establecimiento del plan de implantación</h3> <!-- {docsify-ignore} -->

En un primer punto, partimos de la estrategia de implantación que ha sido creado en el EVS. En consecuencia, se debe revisar los requisitos y procedimientos de implantación establecidos en los requisitos de información de la implantación (DSI). De esta forma, se asegura la adecuación a la estrategia global de implantación. A posteriori, se define el plan de implantación que recoja adecuadamente el esfuerzo y los recursos necesarios para el éxito de la implantación, incluyendo:

- **FORMACION DE IMPANTACIÓN:** Tanto para el equipo de implantación, como para los usuarios finales que hacen las pruebas de implantación y aceptación.
- **INFRAESTRUCTURA NECESARIA:** Debe estar listo el entorno de operaciones para la incorporación del sistema.
- **INSTALACIÓN:** Procedimientos automáticos y manuales de todas las instalaciones necesarias.
- **CARGA INICIAL Y MIGRACIÓN DE DATOS:** Procedimiento de ejecución, si es necesario.
- **PLAN DE MANTENIMIENTO:** Formalización del mismo si es necesario.

En segundo lugar, es necesario especificar el equipo de trabajo para la implantación. Para ello, se deben identificar los distintos participantes, especificando perfil, responsabilidades, nivel de implicación y las fechas previstas para los distintos hitos dentro de la implantación. Ya tenemos los dos primeros elementos para la Actividad de Implantación y Aceptación del Sistema.

> [!INFO|style:callout|label:Productos obtenidos]
> - Plan de Implantación
> - Equipo de Implantación

<h3 class="titulo-h3-color">IAS 02: Formación necesaria para la implantación</h3> <!-- {docsify-ignore} -->

En primer lugar, es necesario preparar la formación del Equipo de implantación. En otras palabras, se debe establecer el esquema de formación para cada tipo de perfil y cuanto durará el curso. Se deben determinar los recursos necesarios y convocar a las personas (esperando su confirmación). Con todo ello, obtenemos el plan de formación.

A continuación, se debe ejecutar la Formación del Equipo de Implantación y aceptación del sistema, de acuerdo al plan anterior. Es necesario confirmar la asistencia de todos.

En tercer punto, es necesario preparar la formación para los usuarios finales. Por tanto, se debe revisar el esquema de formación previamente elaborado en CSI. En todo momento, se debe asegurar que se cuente con los recursos necesarios para preparar la formación en tiempo y forma. Cómo resultado, obtenemos el plan de formación del sistema, donde se especifica la formación en función de los distintos perfiles y los contenidos que incluyen los cursos. Además, debe indicar el momento en el que debe impartirse y con qué prioridad.

Por último, dentro de esta actividad del proceso de Implantación y Aceptación del Sistema, es necesario hacer un Seguimiento de la Formación a Usuarios Finales. Se debe conocer si se está cumpliendo o no el plan de formación, e informar de las posibles desviaciones. De esta forma, se podrá aplicar alguna medida correctiva. Sin embargo, la impartición de la formación a los usuarios finales no está contemplado dentro de Métrica V3.

> [!INFO|style:callout|label:Productos obtenidos]
> - **Plan de Formación del Equipo de Implantación:**
>   - Esquema de Formación
>   - Materiales de Formación
>   - Recursos de Formación
>   - Planificación de Formación
> - **Plan de Formación a Usuarios Finales:**
>   - Esquema de Formación
>   - Materiales de Formación
>   - Planificación de Formación
>   - Registro de Asistencia

<h3 class="titulo-h3-color">IAS 03: Incorporación del sistema al entorno de operación</h3> <!-- {docsify-ignore} -->

Para continuar, se describirá la tarea de Preparación de la Instalación. En ella, se debe asegurar que la infraestructura necesaria está disponible y que cumple los requisitos de implantación. Es necesario prestarle especial atención a los procedimientos de seguridad y control de acceso, operación y administración del sistema.

Para sistemas dónde es necesario realizar una migración de datos, es necesario asegurar los procedimientos propios de la migración. Para ello partimos del plan de migración y carga inicial de datos de la actividad DSI. Posteriormente, se ejecuta la instalación del software base.

En último lugar, se procede con la incorporación de los componentes. También, se incluyen los procedimientos manuales y automáticos. En todo momento, se deben cumplir los estándares y normativas para los entornos de operación. En relación con el entorno de datos, se debe:

- Crear la BBDD
- Definen procedimientos de uso y explotación de BBDD
- Se aseguran los procedimeintos de copias de seguridad de datos y restauración de copias. También los procedimientos de consolidación y sincronización de información (cuando es necesario)
- Autorizaciones de acceso de datos listos para los distintos perfiles de usuarios.

Finalmente, cuando se comprueba que es correcta la instalación del sistema, se debe comenzar con la activación de los distintos procedimientos del sistema. Después de eso, si es necesario una migración de datos, se activarán también los procedimientos asociados.

> [!INFO|style:callout|label:Productos obtenidos]
> - Incidencias de Preparación de Instalación
> - Producto Software (Instalado)
> - Código Fuente de los Componentes de Migración y Carga Inicial de Datos (instalado)
> - Procedimiento de Migración y Carga Inicial de Datos (instalado)

<h3 class="titulo-h3-color">IAS 04: Carga de datos al entorno de operación</h3> <!-- {docsify-ignore} -->

El siguiente paso es la migración y carga inicial de datos en el nuevo sistema. En primer lugar, se realiza la carga inicial de datos. Una vez validado el proceso, se continúa con la que la migración de datos. Tras la ejecución de los procedimientos correspondientes (y una depuración posterior), se efectúa la transformación de esos datos de la estructura previa a la nueva.

> [!INFO|style:callout|label:Productos obtenidos]
> - Base de Datos / Ficheros Cargados

<h3 class="titulo-h3-color">IAS 05: Pruebas de implantación del sistema</h3> <!-- {docsify-ignore} -->

En este quinto punto, vamos a validar la implantación del sistema. Para ello, comenzaremos con la preparación de las pruebas de implantación donde nos aseguramos que:

- Disponemos de Recursos humanos y técnicos
- Las verificaciones en nuestro plan de pruebas son las adecuadas
- Se añaden casos de prueba (si es necesario)
- Se preparan las condiciones de prueba para escenarios excepcionales.
- Se muestra el plan de pruebas al equipo ejecutor.

A continuación, se realizan las pruebas de implantación. Partimos de la especificación técnica del plan de pruebas más el posible incremento de casos de la tarea anterior. Se pretende asegurar la calidad del sistema en el entorno de operación, incluyendo además, las especificaciones de recuperación del sistema, seguridad, rendimiento y comunicaciones. En todo momento, se debe recoger el resultado de la ejecución en un informe que detalle los defectos localizados y la desviación de los requisitos establecidos.

Finalmente, se debe evaluar el resultado de esas pruebas de implantación, para ello:

- Comparemos los resultados obtenidos frente a los esperados,
- Identificamos cada defecto, su criticidad, su impacto y activamos un plan de resolución,
- Es necesario identificar si el plan se debe volver a ejecutar solo de forma parcial o al completo,
- Evaluamos la posibilidad de añadir nuevos casos de prueba.

Como último, punto se realizan las correcciones imprescindibles para su viabilidad y registramos el resultado de la evaluación: aprobado o rechazo del sistema.

> [!INFO|style:callout|label:Productos obtenidos]
> - Plan de Pruebas
> - Resultado de las Pruebas de Implantación
> - Evaluación del Resultado de las Pruebas de Implantación

<h3 class="titulo-h3-color">IAS 06: Pruebas de aceptación del sistema</h3> <!-- {docsify-ignore} -->

Este es uno de los puntos claves desde el punto de vista de un QA, la validación de que el sistema cumple con los requerimientos solicitados. En primer lugar, se realizará la preparación de las pruebas de aceptación. Para ello, se revisa el plan de pruebas efectuado previamente, basándonos en los criterios de aceptación. Sobre todo, si se considera necesario, se añadirían los casos. En todo momento, se debe comunicar ese plan de pruebas final, a los diferentes perfiles (consultando la Especificación del equipo de implantación).

A continuación, se ejecutan las pruebas de aceptación. En un periodo determinado de tiempo, el usuario final ejecutará el plan de pruebas para identificar deficiencias o errores. Después de eso, el resultado debe quedar registrado en un informe, donde debe quedar claras las desviaciones y problemas que están sin resolver.

Finalmente, se debe efectuar una evaluación del resultado de las pruebas de aceptación. Para ello, se confirma que se ha ejecutado todos los casos definidos y se comprueba los resultados obtenidos. En otras palabras, se comparan resultados obtenidos y esperados, se identifican esos defectos para notificarlos al equipo responsable de su corrección y se identifican los ciclos de prueba que son necesarios volver a ejecutar. Tras la verificación de las deficiencias y la validación de esas correcciones, se da la aprobación del sistema.

> [!INFO|style:callout|label:Productos obtenidos]
> - Plan de pruebas
> - Resultado de las pruebas de aceptación
> - Evaluación del Resultado de las pruebas de aceptación

<h3 class="titulo-h3-color">IAS 07: Preparación del mantenimiento del sistema</h3> <!-- {docsify-ignore} -->

En principio, el objetivo de esta séptima actividad es lograr una familiarización con el sistema por parte del responsable de mantenimiento. La primera tarea será el establecimiento de la infraestructura para el manteamiento. En este sentido, se debe recopilar los productos de los SI implicados para un análisis exhaustivo por parte del responsable de mantenimiento. Este determinará si la información es suficiente para asegurar que los sistemas estén completos, actualizados, consistentes y precisos. También, se deberá verificar la correcta configuración de los sistemas y determinar si el software y hardware actual es suficiente. En caso contrario, será necesario identificar alternativas para su incorporación. En último lugar, es necesario definir los mecanismos de registro y evaluación de peticiones de mantenimiento. Todo quedará formalizado en el plan de mantenimiento.

En segundo punto, se realizará la formalización del plan de mantenimiento. Una vez ya está el sistema aceptado y en producción, se establece el tipo de mantenimiento para cada uno de los sistemas, especificando los criterios de regulación y los requisitos de formación. Sin duda, también se debe estimar los recursos humanos: perfiles, responsabilidades y funciones para lograr la coordinación en la gestión del mantenimiento.

> [!INFO|style:callout|label:Productos obtenidos]
> Plan de mantenimiento

<h3 class="titulo-h3-color">IAS 08: Establecimiento del acuerdo de nivel de servicio</h3> <!-- {docsify-ignore} -->

Esta es una actividad muy importante antes de entregar el software. En primer lugar, se deben identificar los servicios requeridos por el cliente. Para ello, es necesario negociar con los máximos responsables de operaciones y de usuarios. Se deben especificar para cada uno de los tipos de servicios:

- Servicios al cliente
- Gestión de la capacidad (operaciones)
- Servicios en línea (operaciones)
- Comunicaciones (operaciones)
- Seguridad (operaciones)
- Servicios por lotes (operaciones)

Se determinan los servicios comunes, y específicos de cada sistema de información implicado. Sin olvidar, determinar la cobertura geográfica. De esta forma, estamos más cerca de obtener una Implantación y Aceptación del SI de calidad. A continuación, es necesario la descripción de las propiedades de cada servicio. Por tanto, es necesario detallar las propiedades funcionales y las características de cada servicio. En otras palabras, se tienen especificadas las propiedades de calidad: eficiencia, fiabilidad, facilidad de uso, etc. A continuación, se deben determinar que propiedades son cuantificables especificando en qué términos y unidades deben expresarse.

En tercer lugar, se debe determinar el acuerdo de nivel de servicio. Esta tarea, ya se realiza cuando el sistema está en el entorno de operaciones y el sistema ha sido aceptado. Se debe tener en cuenta, que se especifica el acuerdo de servicios, con los compromisos adquiridos y en qué términos: recursos, plazos, costes, etc. Además, es necesario establecer los mecanismos de regulación de los niveles de servicio. Después de eso es necesario estimar cuáles son la infraestructura y recursos humanos necesarios, especificando perfil, cantidad y responsabilidad de las personas y si es necesario software de apoyo.

De esta forma, tendremos especificados los niveles de servicios para la Implantación y Aceptación del SI.

> [!INFO|style:callout|label:Productos obtenidos]
> - Plan de mantenimiento

<h3 class="titulo-h3-color">IAS 09: Presentación y aprobación del sistema</h3> <!-- {docsify-ignore} -->

Esta actividad se divide en dos partes. Primeramente, se prepara la convocatoria de presentación del sistema. En ella se hace una recopilación de los entregables del sistema de los que disponemos: plan de pruebas, plan de mantenimiento y acuerdo de nivel de servicio. Una vez confirmada la asistencia a la convocatoria, preparamos la presentación. En segundo lugar, se obtiene la aprobación del sistema. Una vez acontecida la reunión de presentación del sistema al comité de dirección, se recibe formalmente la aprobación del sistema.

<h3 class="titulo-h3-color">IAS 10: Paso a producción, paso final de la Implantación y Aceptación del SI</h3> <!-- {docsify-ignore} -->

En último lugar, tenemos la actividad del paso a producción. Primeramente, se debe preparar el entorno de producción. Para ello, se debe identificar los componentes necesarios a incorporar e instalarlos. Por otro, lado, se deben preparar los datos. Puede ser necesario migrar todos los datos, o una parte de ellos, o, sin embargo, quizás sea necesario una carga nueva o inicialización. A continuación, se debe confirmar que la instalación es correcta y determinar la fecha de activación del sistema y la eliminación del antiguo. Sin olvidar, establecer cómo será la transición de uno a otro.

Para terminar, se realiza la activación del sistema en producción. Se debe notificar al responsable de mantenimiento, al responsable de operación y al Comité de Dirección. Como consecuencia, se debe activar el proceso de mantenimiento y los servicios acordados.

> [!INFO|style:callout|label:Productos obtenidos]
> - Incidencias del Paso a Producción
> - Sistema en Producción

