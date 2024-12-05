## Guía de Seguridad según el ENS (Esquema Nacional de Seguridad) - Real Decreto 311/2022

Para nuestra explicación nos guiaremos por el ENS (Esquema Nacional de Seguridad), regulado por el Real Decreto 311/2022. Comenzaremos centrando el ENS a partir de su artículo 5.

### Concienciación en Seguridad
Dicho artículo nos informa de que **la seguridad debe ser un proceso integral**, que no solo afecta al departamento de seguridad, sino que todo el personal, empezando por el personal de base y terminando por los directivos, todos ellos deben estar concienciados con la seguridad (con la ciberseguridad), y dará igual que sean informáticos o que no lo sean, que sepan ciberseguridad o que no la sepan. Un aspecto importante para que la seguridad sea un proceso integral es **formar a todo el mundo**.

### Gestión de la Seguridad Orientada al Riesgo
Otro aspecto muy importante es que para realizar la seguridad en nuestra organización (administración pública o empresa privada -recordamos que el ENS solo es obligatorio para la administración pública y entidades asociadas o contratantes con lo misma, pero las empresas privadas pueden adoptarlo) – la gestión de la seguridad será orientada al riesgo en línea con la metodología de gestión **Magerit**. No sirve de nada dedicar recursos a amenazas improbabilísimas, con muchísimo impacto pero que pasan una vez cada 25 millones de años. Así que nos centraremos en las amenazas con más riesgo y más cantidad de daño (impacto), ya que los recursos para ciberseguridad (y para cualquier otra cosa) son limitados.

### Subpartes de la Seguridad
La seguridad tendrá subpartes, como son la **prevención**, la **detección**, la **respuesta** y la **conservación**. Seremos proactivos y haremos todo lo posible para prevenir las ciberincidencias (sean ciberataques o no), pero una vez ocurridos debemos centrar todos nuestros esfuerzos en detectarlos, no se puede mitigar un ciberincidente si no sabemos que está pasando. Una vez detectado deberemos responder adecuadamente para controlarlo y centrarnos en la conservación de la funcionalidad de los sistemas, especialmente la **confidencialidad**, **disponibilidad** e **integridad** de los datos.

### Líneas de Defensa
También configuraremos **líneas de defensa**, de esta manera entorpeceremos y ralentizaremos a los atacantes. Las líneas de defensa serán tanto físicas (VLAN’s) como lógicas (diversos sistemas incrementales de login, para que un solo login no pueda dar acceso a toda la red y todos los sistemas, y menos con privilegios de superusuario).

### Vigilancia Continua y Reevaluación Periódica
No deberemos bajar la guardia y relajar la **vigilancia continua**, que estará apoyada con la **reevaluación periódica**. Nuestros sistemas y aplicaciones no son estáticos sino dinámicos, al igual que la evolución de los ciberataques, debemos ser dinámicos también nosotr@s, y evolucionar con los ciberataques para poder dar respuesta a nuevos tipos de ciberincidencias.

### Segregación de Funciones
También aplicaremos la **diferenciación de responsabilidad** o **segregación de funciones**, no habrá demasiado poder en una sola persona (por ejemplo, el jefe de producción, de preproducción, de sistemas y de seguridad, no pueden ser la misma persona), por si se corrompe, o por si le roban las credenciales. Segregación de funciones y tareas es la medida **op.acc.3**.

### Marco Organizativo de Seguridad
El marco organizativo de seguridad es el más alto de toda la organización, empezaremos por **org.1 “política de seguridad”**. En esta medida, al igual que en las demás, evaluaremos la categoría, y daremos actuaciones idénticas para categoría básica, media y alta.

Primero debemos saber qué estamos haciendo y a dónde vamos. Por eso tendremos que establece un documento con todos los detalles de alto nivel relevantes, se llamará la **política de seguridad**. En este documento escribiremos los objetivos y la misión de nuestra organización, es decir aquella descripción de nuestras actividades y su sentido, que en el caso de la administración esta misión y estos objetivos estarán financiados con el dinero de los ciudadanos.

Sabemos que el derecho lo regula todo en nuestra sociedad, también a las entidades públicas, para ello deberemos enunciar las normas jurídicas que nos dan soporte.

#### Roles y Funciones de Seguridad
Muy importante también es definir los **roles y funciones de seguridad** (los cargos de seguridad), enunciando los derechos y deberes del cargo, así como la forma de nombrar a las personas en esos cargos, y la forma de renovar a las personas en los cargos. A pesar de que la seguridad es una cualidad integral que afecta a todos los miembros de la organización, no es menos cierto que tendremos unos roles líderes que nos guiarán en este proceso.

#### Monitorización de Cargos de Seguridad
Pero estos cargos no son autorregulados, debemos controlar su actividad con diversos **comités que los monitoricen y gestionen** (a todos los cargos de seguridad). Los comités de seguridad deben tener definidos: un ámbito de responsabilidad donde su actividad es lícita, es decir cuál es su competencia; qué personas integrarán los comités y como nos relacionaremos con otros cargos y departamentos de la organización (en este caso la organización es una administración pública).

#### Documentación de la Seguridad
Por último en cuanto a **org.1** será muy importante dejar **documentos escritos de todos los ámbitos de la seguridad** por integridad y verificabilidad. Daremos normas dentro de la política de seguridad (todo lo que estamos contando está dentro del documento de la política de seguridad) para saber la estructura de los documentos de seguridad, para saber cómo se gestionan esos documentos y cómo se autoriza el acceso a la documentación (pregunta típica: ¿todos los miembros de la organización tienen acceso a la política de seguridad o no? ¿o los niveles administrativos solo tienen acceso a un resumen?).

### Concienciación y Formación en Ciberseguridad
La **concienciación** [mp.per.3] y la **formación en ciberseguridad** [mp.per.4] no estarán dentro del documento de la política de seguridad, sino que serán medidas aparte (al igual que **org.1**, **org.2**, **org.3** y **org.4** aplican en todas las categorías de la misma manera).

- **Concienciación**: A los empleados les damos normas de seguridad + les enseñamos a identificar ciberincidentes y a informar de ellos.
- **Formación**: Formaremos al personal en la ciberseguridad que necesiten conocer (cada un@ en su nivel): configuración de sistemas + detección y reacción ante ciberincidentes, **GESTIÓN DE LA INFORMACIÓN**: ALMACENAR, TRANSFERIR, COPIAR, DISTRIBUIR Y DESTRUIR INFORMACIÓN.

<a href="https://pmoreno-rodriguez.github.io/opos_gsi/#/plantillas/indice.md">Volver al índice</a>