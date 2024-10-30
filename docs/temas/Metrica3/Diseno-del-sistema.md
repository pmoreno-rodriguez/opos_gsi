## Diseño del Sistema de Información

El objetivo del proceso de Diseño del Sistema de Información (DSI) es la definición de la arquitectura del sistema y del entorno tecnológico que le va a dar soporte, junto con la especificación detallada de los componentes del sistema de información.

### DSI 01: Definición de la Arquitectura del Sistema :class=titulo-color <!-- {docsify-ignore} -->

#### Arquitectura del sistema y Requisitos de diseño/construcción

En primer lugar, es necesario definir los niveles de la arquitectura del software. En otras palabras, debemos definir las principales particiones físicas del SI: nodos con características propias de función o ejecución, diseño y construcción. Se deben describir con suficiente detalle para una solución concreta, pero no es necesario describir nodo a nodo. En cuanto a infraestructura, es recomendable especificar: Gestores de datos, servidores, comunicaciones, tipos de puesto de cliente, tipos de dispositivos de impresión y monitores de teleproceso. Las comunicaciones son las conexiones entre distintos nodos (unidireccional o bidireccional), se deben indicar los protocolos y tipos de mensajes utilizados. Sobre todo, es importante tener en cuenta los criterios para el diseño qué parten de la documentación inicial del proyecto (directrices tecnológicas o de integración, catálogo de requisitos o directrices propias de la instalación) y se debe prestar especialmente atención a usuarios, datos y procesos.

A continuación, actualizaremos el catálogo de requisitos después de especificar los requisitos que están íntimamente ligados al diseño o arquitectura. Por ejemplo: criterios de ubicación de módulos, lenguajes, rendimientos de los elementos de la arquitectura, datos de los nodos, etc.

#### Excepciones, estándares, normas y Subsistema de diseño 

Llegados a este punto, tendremos que definir los comportamientos no habituales en el sistema. Para ello, se debe establecer los criterios de catalogación y clasificación de los mismos; y el detalle con el que se van a describir. La catalogación es vital para la especificación técnica de pruebas y para el propio diseño del sistema. En función del nivel de especificación, se recomienda añadir las excepciones particulares.

En segundo lugar, se deben tener en cuenta las excepciones obligatorias: sobre nodos y comunicaciones del posicionamiento físico del sistema de información o rangos o valores no válidos en la entrada de datos. 

> [!TIP|style:callout|label: Para cada EXCEPCIÓN es necesario describir:]
> - Tipo y descripción
> - Pre-condiciones del sistema
> - Elemento afectado
> - Respuesta del sistema
> - Elemento asociado a la respuesta del SI

Aquí también elaboraremos el catálogo de normas, producto de entrada para todas las tareas de diseño y construcción. En conclusión, se deben definir cuáles son los estándares técnicos y de nomenclatura, recomendaciones y normas que condicionan nuestro proyecto.

#### Subsistema de diseño en el Diseño del Sistema de Información

Siempre se ha dicho «divide y vencerás«, pues en el diseño de sistema de información, también se utiliza esta técnica. En este caso, se divide de forma lógica el sistema para reducir la complejidad y tener un mantenimiento más llevadero. Partiremos del ASI o se aplicarán nuevos criterios de diseños:
- Facilidad de mantenimiento,
- Funcionalidad común,
- Reutilización de elementos,
- Características de ejecución,
- Optimización de recursos.

Seguramente surjan nuevos subsistemas (y módulos, clases o servicios) no especificados previamente en el análisis. Posteriormente, completaremos la información de estos tal como avancemos en las otras tareas. En ocasiones se recomendará una reorganización y reubicación debido a criterios de optimización y reutilización. 

En diseños Estructurados, presentaremos un diagrama de estructura a alto nivel y una definición de interfaz de cada subsistema. Diferenciaremos entre dos tipos de subsistemas:

##### Subsistemas Específicos

Son las funcionalidades propias del sistema.

##### Subsistemas de soporte

Cubren los servicios comunes, dando un acceso transparente a los distintos servicios. Por ejemplo: comunicaciones entre subsistemas, gestión de transacciones, gestión de datos, seguridad y control de acceso. Control y gestión de errores, gestión de interfaz o interacción con los recursos del propio sistema.

#### Entorno tecnológico y Requisitos de operación y seguridad

En cuarto lugar, continuaremos con la especificación al detalle de los distintos elementos del entorno tecnológico. Para ello, se agruparán según tres conceptos: hardware, software y comunicaciones. Es probable que se generen restricciones técnicas que afecten a la construcción o diseño del SI. Por otro lado, no se puede olvidar la estimación de planificación de capacidades donde especificaremos los parámetros de los equipos de Explotación y Sistemas. No se debe olvidar señalar, al menos, las necesidades de almacenamiento, procesamiento y comunicaciones. Nos enfocaremos en conocer:
- Diseño físico de datos optimizados,
- Diseños detallados de módulos, clases y escenarios,
- Información de control de comunicaciones,
- Estimaciones de volúmenes de datos propios de la migración y carga inicial de datos (si procede).

Y por último, vamos a repasar los procedimientos de seguridad y operaciones. Este punto es importante para que no se comprometa el correcto funcionamiento del sistema y garantizar los niveles de servicios. Se diseñarán los requisitos de seguridad, control de accesos y procedimientos relacionados para evitar la pérdida o alteración de información. En este caso son:
- Acceso al sistema y recursos,
- Mantenimiento de la confidencialidad e integridad de los datos,
- Control y registro de accesos al sistema,
- Recuperación ante desastres,
- Copias de seguridad, recuperación de datos y su periodicidad.

Además, definiremos los requisitos de operación y procedimientos asociados con el tratamiento en línea y por lotes, el control y planificación de trabajos y la recuperación y reanudación de trabajos. También, la distribución de información generada por el sistema y, el control y seguimiento de los procedimientos de backup y recuperación.

> [!INFO|style:callout|label:Productos obtenidos]
> - Diseño de la Arquitectura del Sistema
> - Posicionamiento Físico de los Casos de Uso
> - Descripción del subsistema de diseño
> - Catálogo de requisitos
> - El Catálogo de excepciones
> - Catálogo de normas
> - Entorno Tecnológico del Sistema
> - Especificación del Entorno Tecnológico
> - Restricciones Técnicas
> - Estimación de Planificación de Capacidades
> - Procedimiento de Seguridad y Control de Acceso
> - Procedimiento de Operación y Administración del Sistema

### DSI 02: Diseño de la arquitectura de soporte :class=titulo-color <!-- {docsify-ignore} -->

Esta actividad se compone de dos partes: el diseño de los subsistemas de soporte y la identificación de los mecanismos genéricos de soporte. En primer lugar, revisaremos el diseño de los subsistemas de soporte. El objeto de este es realizar la especificación y diseño de módulos y/o clases que conforman los subsistemas de soporte. Es necesario realizarlo, siempre que no se disponga de una instalación de servicios comunes. Por tanto, es una tarea importante, ya que permite la reutilización de los subsistemas de soporte. Podemos apoyarnos en el histórico de otros proyectos y para su realización se siguen las pautas genéricas salvo algunas peculiaridades. En algunas ocasiones, es posible detectar comportamientos excepcionales, en esos casos son incorporados al catálogo de excepciones.

En este párrafo, vamos a repasar los mecanismos genéricos de soporte. Lo que se desea obtener con esta tarea es identificar y diseñar los esqueletos, patrones de diseño o guías de diseño a partir de comportamientos comunes (en el caso de no existir en la instalación). Para realizar un correcto Diseño del Sistema de Información, se estudian: la persistencia de datos, la gestión de transacciones, la utilización de recursos comunes, el control y la recuperación de errores, etc.

> [!INFO|style:callout|label:Productos obtenidos]
> - Diseño detallado de los Subsistemas de Soporte
> - Mecanismos Genéricos de Diseño y Construcción

### DSI 03: Diseño de los casos de uso reales en el Diseño del Sistema de Información :class=titulo-color <!-- {docsify-ignore} -->

#### Diseño de los casos de uso reales

Esta actividad solo es necesaria llevarla a cabo para sistemas donde hay Diseño Orientado a Objetos y se realiza en paralelo al diseño de clases (DSI04). En primer lugar, se lleva a cabo una identificación de las clases que intervienen en los casos de uso (partimos de la identificación de las clases adicionales del punto DSI04). De igual forma, al ir realizando el estudio de los casos de uso, podrán surgir nuevas clases de diseño. Estas serán incorporadas al modelo de clases.

En segundo lugar, para esta actividad del Diseño del Sistema de Información, es necesario hacer la tarea de diseño de la realización de casos de uso. Por tanto, se debe definir cómo interactúan los objetos identificados en la tarea anterior. Partiremos de escenarios especificados, entornos tecnológicos concretos y mecanismos genéricos de diseño. Las excepciones que surjan, serán añadidas al catálogo de excepciones (deberán quedarse resueltas en los escenarios concretos). Seguramente, surgirán la definición de nuevas interfaces de usuarios y subsistemas, que serán añadidos a los catálogos correspondientes.

En último lugar, de cara a la tarea de Diseño de la Jerarquía (DSI04) se estudiarán los escenarios, para identificar puntos comunes.

#### Revisión de subsistemas e interfaces de usuario

En la segunda parte de esta actividad, pondremos el foco en la revisión de la interfaz de usuario, en primer lugar. Para ello, realizaremos un diseño detallado del comportamiento de la interfaz. ¿Cómo? Pues revisando la propia interfaz, los elementos que forman cada interfaz, si cumplen sus características y disposición. Además, se debe revisar la navegación entre las ventanas y los eventos relacionados. Cuando dispongamos de prototipo de interfaz, lo tomaremos como punto de referencia. Sobre todo, es importante tener en cuenta que si son necesarias realizar modificaciones significativas sobre la interfaz, esta debe ser validada.

En último lugar, hay que tener en cuenta la revisión de los subsistemas de diseño. Para ello, describiremos los casos de usuario y las interfaces necesarias. Deberemos definir: subsistemas, actores y mensajes que intercambian los objetos. Por tanto, verificaremos y detallaremos estas interfaces, de esta forma completaremos la tarea de Identificación de sistemas de diseño (DSI01).

> [!INFO|style:callout|label:Productos obtenidos]
> - Orientación a objetos
> - Diseño de la Realización de los Casos de Uso
> - Especificación detallada
> - Definición a Nivel de subsistemas e interfaz
> - Diseño de interfaz de usuario
> - Formatos individuales de Interfaz de Pantalla Gráfica
> - Catálogo de Controles y Elementos de Diseño de Interfaz de Pantalla Gráfica
> - Modelo de navegación de Interfaz de pantalla gráfica
> - Formatos de impresión

### DSI 04: El diseño de clases en el Diseño del Sistema de Información :class=titulo-color <!-- {docsify-ignore} -->

#### Diseño de clases

En el caso de Diseño orientado a objetos, comenzaremos con la identificación de las clases adicionales. Por tanto, se identificarán el conjunto de clases que completen nuestro modelo, partiendo del ASI09. En todo momento, se debe tener en cuenta que cada interfaz corresponde al diseño de una clase. El conjunto de clases inicial podrá modificarse en función de las tecnologías utilizadas en el desarrollo. Trabajaremos con 4 tipos de clases:
- Clases de control: coordinación y secuencia entre objetos. Tienen la lógica de negocio.
- Clases de entidad: varían en función del sistema de gestión de datos. Pueden ser propias o de bibliotecas.
- Clases de interfaz: dependen de la tecnología específica.
- Clases abstractas: reúnen características comunes de varias clases.

Realizaremos las asociaciones y agregaciones entre clases partiendo de la descripción de interacción del ASI4. Para ello, hemos estudiado la secuencia de mensajes entre objetos. También, partiremos de la identificación de asociaciones y agregaciones del ASI5. En todo momento, debemos tener en cuenta:
- Características de la asociación,
- Relaciones bidireccionales se transforman en unidireccionales para simplificar,
- Se debe modelizar las rutas de acceso óptimas,
- Hay asociaciones que se pueden diseñar como clases.

#### Atributos y operaciones de las clases

En tercer lugar, se debe revisar el modelo de clases obtenido del Análisis de Sistema de información (ASI09) para identificar y describir los atributos de las clases. En otras palabras, para cada atributo se debe definir: tipo, formatos específicos y restricciones (si existieran). Puede darse el caso de convertir atributos en clases cuando:
- El atributo esté definido en varias clases del diseño.
- La complejidad del atributo complique el entendimiento de la clase.

En cuarto lugar, es necesario realizar una descripción de las operaciones de las clases. En otras palabras, se describirán los valores de nombre, parámetros y visibilidad para cada una de las operaciones. De esta forma, daremos respuesta a las responsabilidades de las clases de análisis y podremos definir las interfaces asociadas. Partiremos del modelo de clases (ASI), del diseño de casos de uso reales y de los requisitos de diseño. Cuando las operaciones presentan distintos estados, nos es de ayuda utilizar un diagrama de transición de estados.

#### Jerarquía, Métodos de operaciones y Migraciones y carga inicial de datos

Es importante tomarse un tiempo para revisar el diseño de las jerarquías. A raíz de las últimas tareas han surgido nuevas clases, y se debe constatar que son viables. Además, identificaremos clases abstractas (superclases), que nos permitirán agrupar atributos y operaciones.

A continuación, se deben describir los métodos de operaciones. Para ello, utilizaremos algoritmos, pseudocódigo o lenguaje natural. Para su implementación (fase de construcción) tomaremos como referencia la secuencia de interacciones del diagrama de iteración o en la secuencia de transiciones del diagrama de transición de estados.

En último lugar, se deben especificar las necesidades de migración y carga inicial de datos. Por tanto, se deben estudiar los casos que sean necesarios y analizar los resultados obtenidos. Como resultado, completaremos el Diseño de Migración y Carga inicial de datos (DSI9).

> [!INFO|style:callout|label:Productos obtenidos]
> **Orientación a objetos**
> - Modelo de clases de Diseño
> - Comportamiento de clases de Diseño
> - Plan de Migración y Carga Inicial de Datos

### DSI 05: Diseño de la arquitectura de módulos del sistema :class=titulo-color <!-- {docsify-ignore} -->

Esta actividad se lleva a cabo para casos de Diseño Estructurado. En ella, definimos los módulos del sistema de información con el objeto de que tenga una interfaz sencilla, y que trate un proceso específico del sistema. La actividad se realiza en paralelo con las DSI1, DSI2 y DSI6.

En primer lugar, realizamos la tarea del diseño de módulos del sistema, donde se descompone de forma modular los subsistemas identificados en el DSI1, partiendo del Análisis del sistema de información (ASI9). No debemos olvidar diseñar los casos de consulta. Se debe poner el foco en identificar los procesos que se van a implementar para cada subsistema (tipo de implementación y tipo de iniciación), analizar el alcance y las características. De esta forma, sabremos qué parte gestiona cada actividad vital: acceso a BBDD, integración de funcionalidades de reglas de negocio y presentación de información. También, podremos segmentar los procesos que comparten servicios comunes o dan respuestas. En este sentido, se puede considerar la opción de tomarlos como subsistemas de soporte (independizados de los servicios), lo que implicará una reorganización de los mismos.

Gracias al análisis previo y a la arquitectura propuesta, diseñaremos la estructura de módulos con lenguaje natural o pseudocódigo, teniendo en cuenta tanto las excepciones, como las premisas de mínimo acoplamiento y máxima cohesión. Para sistemas interactivos, con complejidad en la gestión de pantalla, será necesario perfeccionar el diseño de la interfaz del usuario (DSI5).

#### Comunicaciones entre módulos e interfaz de usuario

En segundo lugar, definiremos interfaces sencillas que permitan entender las comunicaciones de control y los datos del propio sistema. Partiendo de la estructura modular, completamos las descripciones de las comunicaciones existentes entre los módulos. Se debe garantizar el cumplimiento de los requisitos del sistema en relación con el rendimiento, disponibilidad y seguridad. Ojo: Quizás sea necesaria el rediseño de la lógica asociada o la incorporación de nuevos módulos.

Importante incluir en el diseño de las interfaces:
- Mensajes o datos involucrados en el formato adecuado.
- Datos intercambiados: Valores o rangos.
- Datos: Su origen y destino.
- Valores posibles e información de control.

Del mismo modo, gracias a las interfaces definidas entre módulos de cada subsistema sabremos las necesidades de comunicación existentes y podremos dimensionar el entorno.

A continuación, será necesario revisar la interfaz de usuario. Para ello, realizaremos cuatro tareas principales. La primera, descomposición funcional en diálogos, realizando las adaptaciones necesarias para cumplir los requisitos del SI. Después, se revisará el detalle de la navegación entre ventanas, detallando la interfaz de usuario: relaciones de dependencia, secuencia de presentación, datos obligatorios y/u opcionales, ventanas alternativas, especificación de contenido. En tercer lugar, se comprueba que cada interfaz está tratada en un módulo de datos y es consistente con el modelo físico de datos. En cuarto lugar, se diseñan los mensajes para el usuario (avisos, error, advertencias) o diálogos de ayuda. Importante: Para diálogos complejos es necesario especificar el modelo de navegación de interfaz de pantalla (relacionando control/evento/acción). Cuando las modificaciones son significativas, se requiere de la validación por parte del usuario.

> [!INFO|style:callout|label:Productos obtenidos]
> **Estructurado**
>  - Diseño de la arquitectura modular del sistema
> **Diseño de la interfaz de usuario:**
>  - Descomposición funcional en Diálogos
>  - Formatos Individuales de Interfaz de pantalla
>  - Catálogo de Controles y Elementos de Diseño de Interfaz de Pantalla
>  - Modelo de Navegación de interfaz de pantalla
>  - Formatos de impresión
>  - Prototipo de Interfaz de Pantalla
>  - Prototipo de Interfaz de Impresión

### DSI 06: Diseño físico de datos durante el Diseño del Sistema de Información :class=titulo-color <!-- {docsify-ignore} -->

Inicialmente, se debe realizar el diseño del modelo físico de datos, a partir del modelo lógico de datos normalizado o del modelo de clases. Analizaremos las singularidades del gestor de BBDD o el sistema de archivo para conocer junto con las necesidades de utilización y volumen de ocurrencias de cada entidad o clase. También, analizaremos el volumen de estructuras de datos implicadas, en caso de ser necesaria una migración de datos. De esta forma, podremos decidir el mejor modelo de datos/modelo de clases y disponer de una estimación de espacio de almacenamiento lo más acertada posible. En último lugar, se especifica cómo se convertirán las entidades/clases en las tablas, especificando los datos necesarios y definiendo otros elementos a implementar (si fuera necesario).

En segundo lugar, debemos especificar los caminos de acceso a los datos. Nuestro objetivo es optimizar el rendimiento de los gestores de datos o sistema de ficheros. Para ello, analizaremos los módulos o clases que sean de tratamiento crítico, tengan alta concurrencia o requieran de un acceso complejo a los datos. Revisaremos cada tabla o fichero, el tipo de acceso que requieran, el orden, y con ello se realizará una estimación de número de accesos, frecuencia y prioridad. En otras palabras, identificaremos los accesos altamente costosos o redundantes que puedan comprometer el correcto rendimiento del sistema.

#### Optimización del MFD y Especificación de la distribución de los datos

Con el objetivo de mejorar los tiempos de respuestas de los accesos persistentes y cumplir con los requisitos de rendimiento exigidos, será necesario realizar una Optimización del Modelo físico de Datos. Para ello, será preciso realizar una des-normalización controlada (evitando anomalías) para reducir o simplificar el número de accesos al sistema de almacenamiento de datos.

En último lugar, como parte del Diseño del Sistema de Información se debe realizar la especificación de la distribución de datos. De esta forma, estableceremos la ubicación de los sistemas de ficheros o gestores de base de datos. A continuación, se deberá indicar la especificación de los modelos físicos particulares de cada nodo, esquema físico de datos, o asignación a los nodos.

> [!INFO|style:callout|label:Productos obtenidos]
> - Modelo físico de datos
> - Especificación de los Caminos de Acceso a los Datos
> - Modelo físico de datos Optimizado
> - Esquemas físicos de datos
> - Asignación Esquemas físicos de Datos a Nodos

### DSI 07: Verificación y aceptación de la arquitectura del sistema :class=titulo-color <!-- {docsify-ignore} -->

En tercer lugar, nos centraremos en la actividad que desea garantizar la calidad de las especificaciones y la viabilidad de nuestro sistema de información. Es importante tener esa certeza antes de comenzar con generación de especificaciones de construcción (DSI08). Por tanto, comenzamos con la verificación de las especificaciones del diseño. Los modelos deben haber seguido las técnicas, normas y estándares adecuados según el catálogo en normas.

Después de eso, es necesario el análisis de consistencia de las especificaciones de diseño. Para ello, debemos asegurar que no hay ambigüedades o duplicaciones de información y que los diseños son coherentes. Para llevarla a cabo serán necesarias las verificaciones de: Arquitectura de sistemas y subsistemas, la arquitectura del sistema, frente al modelo físico de datos. Además, se debe verificar: la arquitectura del sistema vs. el entorno tecnológico del sistema de información, la arquitectura del sistema frente al diseño detallado de subsistema y este último, también frente al catálogo de excepciones.

Adicionalmente, para diseño estructurado se debe verificar el diseño detallado de subsistemas frente al modelo físico de datos y en segundo lugar frente a la interfaz de usuario. Mientras que para el diseño orientado a objetos, debemos verificar el modelo de clases contra el modelo físico de datos en primer lugar, y posteriormente, frente a los diagramas dinámicos. Después de eso, opcionalmente se podrán contrastar las diferentes matrices existentes.

#### Aceptación de la Arquitectura del Sistema

Esta actividad es primordial para poder valorar el impacto del sistema en la instalación y para el Diseño del SI según Métrica V3. Será necesaria la aceptación de áreas de explotación y sistemas, la de arquitectura de SI, y como no la de requisitos de operaciones y seguridad.

> [!INFO|style:callout|label:Productos obtenidos]
> - Entorno tecnológico del Sistema
> - Diseño de la Arquitectura de Sistema
> - Diseño detallado de Subsistemas de Soporte
> - Modelo físico de Datos Optimizado
> - Esquema físico de datos
> - Asignación de Esquemas Físicos de Datos a Nodos
> - Diseño de Interfaz de Usuario
> - Aceptación Técnica del Diseño
> **Estructurado**
>  - Diseño de la Arquitectura Modular
> **Orientación a objetos**
>  - Diseño de la Realización de los Casos de Uso
>  - Modelo de Clases de Diseño
>  - Comportamiento de Clases de Diseño

### DSI 08: Generación de especificaciones de construcción :class=titulo-color <!-- {docsify-ignore} -->

En esta actividad se desarrollarán las especificaciones de la construcción del SI a partir del diseño detallado. En primer lugar, se acometerá la especificación del entorno de construcción. Para ello, se propone una definición completa y detallada del entorno a partir de unos conceptos:
- Se debe definir el entorno tecnológico. Es decir, el hardware, software y las comunicaciones utilizadas en este sistema.
- Dispondremos de unas herramientas de construcción.
- Se deben respetar las restricciones técnicas del entorno.
- Es necesario planificar la construcción con las capacidades previstas y la información necesaria.
- No se puede olvidar los requisitos de operaciones y seguridad.

A continuación, se realiza la tarea de especificación de los componentes o subsistemas de construcción, a partir de los subsistemas de diseño. En otras palabras, tendremos unidades básicas de construcción: independientes y coherentes que suelen coincidir con los subsistemas de diseños o se pueden redistribuir en función de otros criterios: optimización de recursos, funcionalidades comunes, accesos de datos similares o necesidades especiales de ejecución.

De esta forma, podremos ofrecer mayor nivel de detalle en cada componente, subdividiendo si fuera necesario. Sobre todo, no se debe olvidar registrar aspectos importantes para la construcción o ejecución como son: secuencia de compilación o agrupaciones de código almacenadas en paquetes o librerías.

Por último, es buena idea crear un plan de integración del SI donde se enumere la organización y la secuencia de construcción. Y donde también, se incluya el plan de pruebas del subsistema de construcción.

#### Elaboración de Especificaciones de Construcción y Modelo de Datos

En primer lugar, se debe realizar una especificación de cada componente. Para ello, utilizaremos lenguaje natural o pseudo código, y completaremos dicha información con lo necesario según el entorno tecnológico. Después de eso, será necesario completar la definición con las especificaciones de construcción. En otras palabras, se especificarán los parámetros o elementos complementarios para la propia construcción en el entorno tecnológico elegido.

En segundo lugar, para un buen Diseño del SI según Métrica V3, es necesario definir las especificaciones en el modelo físico de datos. Para definir las estructuras de datos, se debe usar el lenguaje de definición de datos del gestor de datos o sistema de ficheros elegido. En todo momento, se debe partir del entorno tecnológico en el que nos encontramos y partiremos de los estándares y normas de nuestra organización.

> [!INFO|style:callout|label:Productos obtenidos]
> - Especificaciones de Construcción del Sistema de Información
> - Especificaciones del Entorno de Construcción
> - Descripción del Subsistema de Construcción y Dependencias
> - Descripción de componentes
> - Plan de Integración del Sistema de Información
> - Especificación detallada de Componentes
> - Especificación de la Estructura Física de Datos

### DSI 09: Diseño de la migración y la carga inicial de datos en el Diseño del SI según Métrica :class=titulo-color <!-- {docsify-ignore} -->

En primer lugar, se debe tener en cuenta que esta actividad se realiza solo, cuando es necesario realizar una migración de datos de otro sistema o carga inicial. Se debe tener en cuenta que en el caso de empezar desde cero, de ser una carga inicial no será algo tan complejo. El objetivo de la misma es garantizar una implementación adecuada de los procesos de migración y carga inicial de datos.

Para ello, se deben llevar a cabo cuatro tareas. El primer punto es hacer una correcta especificación del entorno de Migración, tomando como referencia los requisitos y necesidades del plan de migración y carga inicial de datos. Por tanto, se deben incluir las herramientas necesarias para llevarla a cabo y estimar las capacidades del entorno: infraestructura, almacenamiento y comunicaciones.

El segundo punto, efectuaremos el diseño de procedimientos de migración y carga inicial. Debes partir de la siguiente información:
- Requisitos y especificaciones de la carga inicial y migración,
- El modelo físico de datos optimizado (y localización de nodos)
- Entorno tecnológico

Se pueden diferenciar los siguientes procedimientos divididos en tres bloques:

#### Procedimientos de Seguridad
- Control de acceso a la información
- Copias de seguridad de los procesos
- Recuperación de la información
- Tratamiento de las posibles contingencias

#### De carga inicial de datos
- Depuraciones iniciales de información
- Procesos de validación
- Procesos de importación
- Procesos de carga y prioridades

#### De verificación y comprobación
- Verificación de los procesos
- Comprobación de la integridad de información resultante

#### Diseño detallado y revisión del plan

En esta segunda parte, abordaremos el diseño detallado de componentes de migración y carga inicial para un correcto Diseño del SI según Métrica V3. Se deben especificar a bajo nivel los detalles de los módulos utilizados, especificando la jerarquía y el orden en el que se ejecutarán. En otras palabras, el diseño se realizará de la misma forma que cualquier otro módulo, teniendo en cuenta modelo físico de datos, estructura de datos y sistema de origen. Además, se debe completar el plan de migración y carga inicial con la definición de las pruebas a ejecutar.

Finalmente, es importante efectuar la revisión de la planificación de la migración, concretando el plan de trabajo, especificando los procedimientos y procesos.

> [!INFO|style:callout|label:Productos obtenidos]
> - Plan de Migración y Carga Inicial de Datos:
> - Especificación del Entorno de Migración y Carga Inicial
> - Definición de Procedimientos de Migración y Carga Inicial
> - Diseño Detallado de Módulos de Migración y Carga Inicial
> - Especificación Técnica de las Pruebas de Migración y Carga Inicial
> - Planificación de la Migración y Carga Inicial

### DSI 010: Especificación Técnica de plan de pruebas :class=titulo-color <!-- {docsify-ignore} -->

En esta actividad se lleva a cabo la realización del plan de pruebas. En función del análisis del SI, se incluirán o no cada uno de los niveles de pruebas establecidos: unitarias, de integración, de sistemas, de implantación y de aceptación. Sobre todo, para confeccionarlo partimos del plan de pruebas o el plan de integración del sistema de información. El catálogo de requisitos, el de excepciones y el diseño detallado del SI nos permite definir las verificaciones que deben realizarse en cada nivel de pruebas, asegurando que cumple los requisitos planteados.

En la construcción del SI, se ejecutan las pruebas unitarias, de integración y de sistemas. Mientras que las pruebas de implantación y de aceptación se proceden en el proceso de Implantación y aceptación de sistema. Las pruebas de implantación se hacen en el entorno de operaciones para asegurar el correcto funcionamiento en el ámbito de seguridad, rendimiento y operaciones del sistema coexistiendo con otros sistemas. El usuario es quien da el ok a las pruebas. 

La primera tarea es la especificación del entorno de pruebas. Para ello, debes considerar de forma detallada y a fondo las necesidades de entorno. Se deben considerar los conceptos de:
- Entorno tecnológico,
- Requisitos de operación y seguridad,
- Restricciones técnicas.

Además, es importante tener presentes las herramientas necesarias para la extracción de juegos de ensayo, análisis de resultados y utilidades para una mejor gestión del entorno. No se debe olvidar en esa especificación incluir: la planificación de capacidades previstas o la información necesaria para planificar, los procedimientos de promoción de elementos entre entornos y los procedimientos de vuelta atrás, emergencia o recuperación.

#### Técnica de niveles de pruebas y revisión de la planificación

En un segundo punto, se debe proceder con la especificación técnica de los niveles de prueba para realizar un correcto Diseño del SI según Métrica Ve. Se partirá del plan de prueba en primer lugar. Para la realización de las pruebas integradas y de sistema, tomaremos como referencia el plan de integración del SI. A continuación, para definir el detalle de las diferentes verificaciones a comprobar y los niveles de pruebas, es necesario basarse en la arquitectura propuesta para el sistema y las características intrínsecas del diseño del SI. En cualquier caso, se deben cubrir aspectos funcionales, no funcionales, excepciones y las soluciones adoptadas.

Se debe verificar:
- Ámbito de aplicación (nivel),
- Objetivo,
- Casos de prueba asociados (proceder de la ejecución, entradas, salidas y características especiales),
- Aceptación por parte del usuario,
- Procedimientos de prueba (conjunto de pasos a seguir),
- Entorno de prueba,
- Criterios de aceptación de la prueba,
- Resultado final.

Análisis y evaluación de resultados:
- Correcto funcionamiento de componentes, conjunto de componentes o subsistemas de construcción,
- Integración del sistema al completo,
- Adaptación del sistema al entorno en el que va implantado,

En último lugar, se debe hacer una revisión de la planificación de pruebas. Por tanto, se debe definir los perfiles implicados y quién efectuará las tareas de preparación, ejecución de pruebas y comprobación de los resultados. Después de eso, se debe especificar el tiempo estimado para cada uno de los niveles de prueba, en función de la estrategia de integración acordada.

> [!INFO|style:callout|label:Productos obtenidos]
> - Plan de pruebas
> - Especificación del Entorno de Pruebas
> - Especificación Técnica de Niveles de Pruebas
> - Planificación de las Pruebas

#### DSI 011: Establecimiento de requisitos de implantación :class=titulo-color <!-- {docsify-ignore} -->

Esta tarea se divide en dos partes: la especificación de los requisitos de Documentación de Usuario y la especificación de Requisitos de Implantación. En ambas, se tiene como objetivo el completar el catálogo de requisitos.

##### Requisitos de documentación de usuario

El objetivo de esta tarea es recoger toda la documentación a entregar al usuario, incluyendo manuales de usuario y de explotación. Para ello, debes tener en cuenta unos aspectos: estándares y tipos de documentos a tomar como referencia, formato de los mismos y estructura. Además, debes conocer el soporte en el que se crearán, el control de versiones y la distribución, mantenimiento y copias de la documentación.

##### Especificación de Requisitos de Implantación

En segundo punto, se deben especificar los documentos de implantación. Sobre todo, se debe tener en cuenta que en el Diseño del SI según Métrica V3 es necesario especificar de forma detallada cuáles son los requisitos para la implantación de forma anticipada. En otras palabras, se debe tener en cuenta la formación, infraestructura necesarias para la instalación. Después de eso, hay que poner el foco en los conocimientos particulares que necesitan los usuarios finalizar para interactuar con el nuevo sistema. Del mismo modo, es frecuente realizar un plan de formación, con los requisitos indispensables, que se desarrollará en la actividad: IAS, Implantación y Aceptación del sistema.

De igual manera, se deben tener en cuenta cuál es la estrategia de implantación, del proceso de IAS. En ella, se deben especificar las necesidades especiales de equipamiento de software, hardware y comunicaciones.

> [!INFO|style:callout|label:Productos obtenidos]
> - Catálogo de requisitos

### DSI 012: Aprobación del diseño del Sistema de información :class=titulo-color <!-- {docsify-ignore} -->

En último lugar, revisaremos este punto que aunque simple, no siempre es sencillo: Es necesario obtener la aprobación final del sistema de información. Por ello, se presenta el diseño del SI al comité de Dirección.

> [!INFO|style:callout|label:Productos obtenidos]
> - Aprobación del Diseño del Sistema de Información.

