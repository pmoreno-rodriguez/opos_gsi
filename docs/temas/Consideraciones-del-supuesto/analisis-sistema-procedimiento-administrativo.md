> \[!ATTENTION\]  
> **Este contenido sirve para cualquier supuesto de carácter administrativo, con solicitudes, resoluciones, funcionarios habilitados, registros, etc.**
> 
> PREGUNTA. Análisis del sistema
> 
> Subapartado A. Ámbito y análisis de requisitos del sistema

> \[!NOTE\]
> 
> La primera pregunta en la que se describe el ámbito se realiza para encuadrar el ejercicio. En este ejemplo de solución hay mucho más contenido del que podremos escribir en el examen, pero nos sirve para sacar ideas para implementarlas en el supuesto.
> 
> El sistema debe implementar el procedimiento administrativo de concesión de nacionalidad a extranjeros por residencia. Podría ser otro procedimiento y otro ministerio.

El procedimiento se enmarca en el Ministerio de Justicia y se caracteriza por tener una dualidad mixta entre el Registro Civil, de carácter judicial, y el ámbito administrativo. Este carácter mixto lo hace largo e ineficiente. Se establece como objetivo, a la vista de los procesos de reforma administrativa emprendidos, llevar a cabo una mejora del procedimiento mediante una tramitación completamente electrónica que junto a diferentes mejoras que expondremos a continuación, reduzca los tiempos del procedimiento y lo haga más simples a los solicitantes.

Desde el ámbito legislativo este procedimiento debemos encuadrarlo al amparo de la **Ley 19/2015 de 13 de julio de Medidas de Reforma Administrativa en el Ámbito de la Administración de Justicia y del Registro Civil** y al del propio **Código Civil**, en el que se regulan aspectos de plazos, requisitos, pérdida de condición de nacionalidad, etc. Especialmente dentro del reglamento que desarrolla el propio procedimiento administrativo, el **Real Decreto 1004/2015**, por el que se aprueba el Reglamento por el que se regula el procedimiento para la adquisición de la nacionalidad española por residencia.

Debemos también considerar las nuevas leyes **39/2015 del Procedimiento Administrativo Común de las Administraciones Públicas** y la **Ley 40/2015 de Régimen Jurídico del Sector Público**, ya que el objeto del problema es el de un sistema que implemente un procedimiento administrativo en el marco de la Administración General del Estado. A este respecto hay que tener en cuenta puntos tratados en estas leyes como el de identificación y firma, representación de personas en el procedimiento, actuación administrativa que, aunque ya queda señalado en el Real Decreto que regula el procedimiento a implementar, se establece como forma obligatoria la electrónica.

Otros aspectos que tratan estas leyes y debemos tener en cuenta al diseñar el sistema son los relativos a las notificaciones, la resolución, etc. Se deberá contemplar la vía electrónica en todo lo relativo a los documentos que se irán añadiendo al expediente y en el propio expediente, que también adquirirá el formato electrónico.

### A continuación, en respuesta al análisis de requisitos, describimos brevemente el proceso que deberá implementar nuestro sistema:

#### a) Requisitos funcionales

El sistema debe cubrir toda la vida del procedimiento y éste debe realizarse íntegramente a través de medios electrónicos.

El procedimiento se inicia mediante una **solicitud electrónica** que consistirá en un **formulario web accesible** desde la sede electrónica del Ministerio de Justicia.

Podrán iniciar el procedimiento las personas **solicitantes** de nacionalidad o sus **representantes**. En el caso de que se inicie por parte de representantes legales, se realizarán las comprobaciones requeridas sobre los mismos en las distintas plataformas habilitadas para ello (**Registro de Apoderamientos y Representa**) sobre su habilitación, poderes otorgados por parte de los representados, etc.

Al inicio, podrá identificarse a los solicitantes o sus representantes a través de los medios de **identificación electrónica** legalmente aceptados (certificado cualificado, sello electrónico). Por las características del procedimiento no se contempla el uso de claves concertadas. Se autocumplimentará el formulario de solicitud con los datos conocidos del solicitante tras esta identificación.

En caso de que el solicitante actúe por medio de representante, deberá anexarse en el expediente administrativo la acreditación de la condición de representante y de los poderes mediante un documento electrónico que acredite el resultado de la consulta al registro electrónico de apoderamientos (art. 5 Ley 39/2015).

Se habilitan los mecanismos para proceder a añadir toda la documentación necesaria exigida en el procedimiento por parte del solicitante (certificados, informes, etc.). Se lista toda aquella documentación necesaria, descrita en el Real Decreto que regula el procedimiento de concesión de nacionalidad por residencia, en el propio formulario de solicitud.

Aquellos certificados que ya estén en poder de las administraciones serán recabados de los organismos que las posean a través de servicios de intermediación (por ejemplo, los certificados de empadronamiento, de matrimonio, viudedad...). Estos documentos serán recogidos mediante consultas telemáticas a la **plataforma de intermediación** o a los organismos que los provean si no estuvieran intermediados. Los certificados que ya estén en poder de las Administraciones no serán solicitados para disminuir las cargas, tiempos y errores que obliguen a reclamar subsanaciones al solicitante. Exclusivamente si el interesado decide oponerse expresamente, no se recabarán estos datos de forma automática y deberán ser introducidos manualmente en el formulario de inicio del procedimiento.

Se procede al **pago de la tasa** correspondiente **por medios electrónicos**. Podrá admitirse los medios de pago comúnmente utilizados como tarjeta bancaria o adeudo en cuenta bancaria. El procedimiento de pago de la tasa se gestionará a través de llamadas a la pasarela de pagos.

Finalmente, se realizarán todas las comprobaciones automáticas necesarias sobre los datos insertados, la documentación anexada y los datos que son requeridos. La solicitud y sus anexos deberán firmarse electrónicamente por el solicitante mediante cualquiera de los **medios de firma electrónica legalmente aceptados**, tras lo cual se procede a su envío al registro electrónico del Ministerio. Se tiene en cuenta que todo este proceso también puede realizarse por un funcionario habilitado con las respectivas comprobaciones a otros sistemas.

El solicitante dispondrá de un tiempo en el que la solicitud quedará almacenada para completarla con la documentación necesaria, firmarla y proceder a su envío. Si pasado ese plazo no ha firmado y enviado la solicitud, ésta se borrará de manera automática.

A la presentación en el **registro** se entregará un **justificante de presentación** con el número de asiento y copias de todos los documentos presentados. Todo ello conforma el **expediente electrónic**o que se crea en este momento. Tanto el expediente electrónico como los documentos que lo conforman deberán cumplir con el **Esquema Nacional de Interoperabilidad** y las normas técnicas de interoperabilidad (NTI) de documento y expediente electrónico, recogiendo los metadatos necesarios que explícitamente se requieren en las NTI’s.

Deberemos considerar la posibilidad de presentación presencial de los documentos, aunque todo el procedimiento posterior sea electrónico. La presentación presencial implicará toda la digitalización en las oficinas de asistencia en materia de registro de la documentación necesaria cumpliendo en ello las NTI de digitalización. El procedimiento seguido será el electrónico.

Consideramos también la posibilidad de realizar el trámite a través de **funcionario habilitado** en la presentación presencial. En este caso el sistema realizará las consiguientes comprobaciones del funcionario en el **Registro de Funcionarios Habilitados** y exigirá anexar al expediente, como un documento más, el consentimiento firmado del interesado de la habilitación.

La fase de instrucción del procedimiento estará comprendida por pasos, que serán lo más automáticos posibles. Si es necesario recabar informes o certificados que no se presentaron por el solicitante o que deben incorporarse al expediente de oficio, se realizará a través de medios electrónicos, incluidos los de las pruebas del Instituto Cervantes o el informe preceptivo del Ministerio del Interior de juicio sobre la conducta y situación del extranjero respecto de las obligaciones que impone su entrada y residencia en España. Cualquier mecanismo de subsanación se realizará por medios electrónicos.

El solicitante podrá consultar de forma telemática el estado de tramitación de su solicitud para lo cual será necesario que indique datos como el NIE y el número del expediente.

La resolución dictada por el Ministro de Justicia se anexa al documento de forma automática. Dicha resolución será un documento electrónico que llevará asignado un **CSV** (Código Seguro de Verificación). Este CSV permitirá la consulta del documento en la sede electrónica del Ministerio.

En el caso de que la resolución haya sido favorable, se procede a la inscripción automática en el Registro Civil.

Cualquier notificación durante las fases del procedimiento, incluida la resolución, deberá realizarse a través del sistema y por los medios legalmente establecidos (papel, solo para sujetos no obligados a relacionarse por medios electrónicos, y en electrónico para todos). En cualquier caso, se realizará notificación electrónica contemplando la comparecencia en sede y mediante puesta a disposición en **Dirección Electrónica Habilitada**.

Cualquier mecanismo de recurso sobre el procedimiento sale del ámbito del sistema y será tratado por los sistemas que soporten la interposición de recursos del propio ministerio. El único requisito es que el recurso se anexará mediante medios electrónicos al expediente administrativo de concesión.

#### b) Requisitos no funcionales

A continuación, listamos una serie de requisitos no funcionales que deberá cumplir nuestro sistema:

**Seguridad**: El sistema debe seguir, en su diseño e implementación, principios de seguridad esenciales, cuidando aspectos de identificación, firma electrónica, seguridad en los datos y auditoría de peticiones a otros sistemas o sobre actuaciones en él.

**Usabilidad**: El sistema, al menos en su parte pública, debe ser accesible para personas con capacidades reducidas.

**Responsividad**: La parte pública del sistema debe ser responsiva y poder ser visualizada en dispositivos de pantallas de distintos tamaños, especialmente en dispositivos móviles.

**Rendimiento**: El sistema debe satisfacer un número de peticiones simultáneas suficiente para cubrir la demanda requerida.