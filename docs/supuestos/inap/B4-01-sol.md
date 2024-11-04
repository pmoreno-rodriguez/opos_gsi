> [!NOTE|style: callout|label: Supuesto del INAP 2016]
> ## Supuesto 1: OPI <!-- {docsify-ignore} -->
---
### SOLUCIÓN

#### Ámbito de aplicación :class=titulo-color

Esta nueva instalación brindará un servicio de alta disponibilidad tanto de capacidad de procesamiento como de almacenamiento al personal investigador de dicho centro, a otros Organismos Públicos de Investigación y a pequeñas entidades que lo soliciten, por lo que este proyecto se enmarca en el ámbito de la Administración General del Estado.

Se suponen satisfechos todos los trámites administrativos tales como el cumplimiento del Esquema Nacional de Interoperabilidad (ENI), en concreto, la Norma Técnica de Interoperabilidad de Requisitos de conexión a la Red de Comunicaciones de las Administraciones Públicas (Red SARA), es decir que se estará conectado a un proveedor de acceso a la red SARA (PaS), y que se tiene asignado un rango de direcciones interno según el Plan de Direccionamiento e interconexión de redes de la Administración.

Puesto que se trata de un sistema de información se aplica el Esquema Nacional de Seguridad (ENS). Para la categorización de los sistemas se usará la norma CCN-STIC 803 y para la aplicación del Esquema Nacional de Seguridad la norma CCN-STIC 804. Las Administraciones Públicas determinarán si es de aplicación el ENS por tratarse de sistemas relacionados con él. Puesto que cabe la posibilidad de que en los sistemas se almacene y se produzca algún tratamiento de datos de carácter personal, se estará en lo dispuesto en el Reglamento de Protección de Datos (RGPD, Reglamento UE 2016/679), la Ley Orgánica de Protección de Datos de Carácter Personal (LOPDGDD 3/2018).

#### 1. Acondicionamiento arquitectónico del CPD :class=titulo-color

A continuación se describen los elementos necesarios para la creación y acondicionamiento de un CPD que sea homogéneo y permita trabajar cómodamente dentro de él. Se seguirán las recomendaciones del estándar TIA 942 de creación de un centro de datos.

##### Emplazamiento

La sala del CPD va a estar situada en la parte central de la planta, rodeada de un pasillo perimetral, sin ventanas, con cotas de forjado altas. Dentro de la sala habrá un mínimo de altura entre el suelo técnico y el techo practicable de 2,60 metros. Las paredes serán ignífugas y estarán pintadas de color claro con pintura especial que impida que se acumule el polvo o suciedad.

##### Suelo técnico y techo

El suelo será elevado mínimo 45 cm aproximadamente (TIER II, para TIER III será elevado como mínimo 76 cm) con baldosas de 60 x 60 cm, por la parte superior de material conglomerado y la parte inferior de acero. Tanto los elevadores metálicos como la parte inferior de las baldosas irán conectadas a la toma de tierra independiente de la sala y será capaz de soportar el peso de armarios de rack completos, es decir, soportará como mínimo 1300Kg/m². Este suelo técnico elevado permitirá la instalación de canalizaciones en su interior para el cableado de comunicaciones, alimentación eléctrica y distribución de aire frío. Los techos serán practicables permitiendo la instalación de luminaria principal y de seguridad, cableado mediante canalizaciones si en un futuro fuese necesario, y canalización del sistema de extinción de incendios.

##### Puerta de acceso

Será ignífuga, permitiendo estanqueidad en la sala, y de anchura mínima de 1 metro y 2,13 metros de altura. No tendrá partes intermedias que impidan la entrada o salida cómoda del personal o maquinaria. La sala contará con una rampa de acceso hacia el interior de la sala. El acceso a la sala se realizará por la parte central de ésta de manera que se pueda acceder de manera cómoda a las instalaciones. Dicha puerta abrirá hacia afuera, y por la parte interior estará dotada de un mango que la permita abrir fácilmente.

##### Iluminación

Se usará iluminación fluorescente repartida de manera homogénea por la sala, evitando dejar zonas oscuras o con sombras. Cada punto de luz tendrá una intensidad mínima de 500 lux. Este sistema de iluminación irá conectado a la alimentación protegida por el generador de corriente.

##### Iluminación de seguridad

Estará repartida por la sala y contará con baterías independientes para funcionar en caso de fallo en el suministro eléctrico o del generador de corriente. Como mínimo estarán situadas en la parte central, para que en caso de fallo en la iluminación principal se visualice correctamente la salida hacia el exterior. Por parte del personal de mantenimiento del centro, se realizará un mantenimiento periódico de las baterías y de la luminaria fluorescente para asegurar su correcto funcionamiento. Toda la sala contará con indicadores fluorescentes que indicarán dónde está ubicada de manera exacta la salida.

##### Disposición del equipamiento

Se realizará de manera que haya espacio suficiente para trabajar con comodidad. Los armarios estarán enfrentados creando así pasillos de aire frío y caliente, dejando suficiente espacio de trabajo tanto por la parte frontal como trasera de los armarios. Dichos armarios contarán con puertas con rejilla tanto frontal como trasera para permitir la correcta refrigeración de los equipos y la expulsión del aire caliente de éstos. Serán metálicos y estarán conectados a la toma de tierra
independiente de la sala. El esquema sería el siguiente que aparece en la Figura 1.

![Disposición del equipamiento](../../img/supuestos/inap/sala_cpd.jpg 'Figura 1: Disposición del equipamiento')

##### Canalizaciones y cableado estructurado:

  - **Comunicaciones**:
    Se realizarán cálculos para estimar las dimensiones de las canalizaciones, estimando que inicialmente estarán llenas en un porcentaje máximo del 25%, para soportar así futuras ampliaciones de la infraestructura, y como máximo tendrá un factor de llenado del 50%. Se dispondrá de armarios separados para las comunicaciones, en los que se incluirán los patch panel de fibra y de cobre. Estos tendrán pasahilos para que el cableado vaya ordenado de la mejor manera posible, y así asegurar el acceso para futuras intervenciones. Todo el cableado irá etiquetado para su correcta identificación. Si es posible se usarán canalizaciones distintas para que vaya separado el cableado de fibra y de cobre; si esto no es posible el cableado de cobre irá en la parte inferior de la canalización y el cableado de fibra en la parte superior, para evitar daños en este último. Para el cableado de cobre se usará cable UTP categoría 6 (longitud máxima 90 metros) y para el cableado de fibra se usará fibra multimodo de 50/125um (longitud máxima 300 metros). Se usarán canalizaciones de PVC rectangulares registrables y abiertas (no tendrán tapa) para facilitar su manipulación.

  - **Alimentación eléctrica**:
    Para la canalización del cableado de alimentación se usará preferentemente canalización metálica tipo rejiban o estanca a ser posible, e irá convenientemente conectada a la toma de tierra independiente de la sala. Por seguridad, y para evitar interferencias entre el cableado de alimentación eléctrica y el cableado de comunicaciones (principalmente el de cobre), entre ellas habrá como mínimo 300 mm de distancia. Para ello se realizará una distribución de la canalización de comunicaciones de manera perimetral y la distribución de canalizaciones de alimentación eléctrica se distribuirá de manera central, como se indica en la siguiente figura:

![Cableado](../../img/supuestos/inap/distribucion_electricidad.jpg 'Figura 2: Disposición del cableado')

#### 2. Equipamiento eléctrico del CPD: esquema de conexiones, redundancia :class=titulo-color

Puesto que el recinto cuenta con una línea de media tensión, se estará en lo dispuesto en el Reglamento sobre condiciones de seguridad técnicas y garantías de seguridad en instalaciones de alta tensión. El recinto contará con una central de transformación instalada en el exterior, con las medidas de seguridad oportunas y guardando siempre la distancia mínima de seguridad entre dicha central y el CPD para evitar interferencias. Esta central transformará la línea de media tensión en una línea de acometida hacia el interior trifásica de baja tensión (380 voltios entre terminales R, S y T y 220 voltios entre cualquiera de los terminales R, S, T y neutro) que irá conectada al cuadro general de mando instalado en el interior de la sala, el cual tendrá instalados todos los elementos de seguridad pertinentes, tales como el Interruptor General Automático (IGA), limitadores de sobretensiones, interruptores diferenciales residuales y magnetotérmicos.

El cuadro eléctrico, de material metálico, que irá conectado a la toma de tierra independiente de la sala, será ignífugo y estanco, con cerradura con llave para evitar una inadecuada manipulación por parte de personal no autorizado.

El sistema eléctrico contará con un generador de corriente mediante combustible biodiesel y estará separado oportunamente del centro de transformación.

El cuadro eléctrico contará con un selector automático de redes para conmutar entre la red eléctrica proveniente de la central de transformación y la red proveniente del generador de corriente, evitando así que las redes eléctricas se puedan solapar y producir graves fallos en el equipamiento. De ese punto irá conectado al sistema de alimentación ininterrumpida de baterías (SAI), encargado de suministrar corriente eléctrica en caso de fallo en el suministro eléctrico y también limpiará la señal eléctrica de posibles parásitos que se puedan producir en la señal de transformación o en el generador de corriente auxiliar. El cuadro contará también con un conmutador manual para hacer el bypass a la SAI en caso de que ocurra un fallo en ésta. La salida de la SAI (3 fases y neutro) irá conectada al conmutador manual y de ahí se repartirá la alimentación a toda la sala a las PDU de los armarios de equipos, distribuyendo las fases por armarios de equipos. Cada armario contará con líneas eléctricas independientes con todos los elementos de seguridad eléctricos instalados en el cuadro general de mando (diferenciales y magnetotérmicos) para que en caso de fallo de uno de los equipos, haga funcionar los elementos de seguridad pertinentes para evitar que se vean afectados los equipos instalados en otros armarios. Para repartir la carga, cada fase alimentará una PDU distinta de cada uno de los armarios. De esta manera cada armario contará con alimentación de las distintas fases. Puesto que todo el equipamiento contará como mínimo con dos fuentes de alimentación redundantes, cada equipo será alimentado con dos fases distintas. De esta manera si se produce un fallo en la central de transformación, en la SAI o en el generador de corriente auxiliar y alguna de las fases cae, se evitaría la parada de los equipos que han sufrido la falla de alimentación. Aunque esto es más costoso, evitará una interrupción en el servicio. La iluminación, el sistema de refrigeración (Aire acondicionado A/C) y acceso al CPD irán conectados a la línea general protegida por el generador de corriente. 

Por último mencionar que toda la instalación contará con una toma de tierra independiente según la normativa UNE EN 50310. El esquema sería el siguiente:

![Esquema eléctrico](../../img/supuestos/inap/esquema_electrico.jpg 'Figura 3: Esquema eléctrico')

### 3. Infraestructuras precisas en el CPD: sistemas de refrigeración, sistemas de detección y extinción de incendios, control de humedad :class=titulo-color

#### Sistemas de refrigeración (A/C)

El CPD contará con un sistema de refrigeración de funcionamiento continuo que asegurará que la sala se encuentre en condiciones óptimas según el estándar TIA 942:

- Temperatura: 20 a 25 grados
- Humedad: 40% a 55%
- Variación máxima de la temperatura en una hora de 5°C

Puesto que se pretende que la sala pueda albergar más equipamiento en un futuro, el sistema contará con doble compresor exterior, con capacidad cada uno de mantener el 100% de la carga de trabajo. El sistema estará situado en la parte central superior de la sala, como se indica en la Figura 1 e impulsará el aire frío por el falso suelo. Se realizará un cálculo de la potencia en frigorías necesaria para el equipamiento según el tamaño de la sala, teniendo en cuenta el valor de cálculo de 100 frigorías por metro cuadrado. Se realizará un mantenimiento periódico preventivo de esta instalación (filtros de aire, sistema de condensación, presión y estado del líquido refrigerante, etc.) por personal cualificado para asegurar su continuo funcionamiento. Para proporcionar la llegada del aire frío a la parte frontal de los armarios, se sustituirán baldosas del falso suelo por rejillas cuadradas con inclinación, que dirijan el aire frío. La máquina de refrigeración aspirará el aire caliente por su parte superior para refrigerarlo e impulsarlo por la parte inferior.

La sala contará también con un sistema de extracción del aire caliente en las cotas altas de la sala. Opcionalmente, y si las condiciones meteorológicas lo permiten, se instalará un sistema de introducción de aire del exterior del recinto, con un sistema de filtrado de partículas conveniente, para refrigerar de manera natural la sala en determinadas estaciones del año, lo cual supondrá un ahorro energético notable y aliviará la carga de trabajo del sistema de refrigeración.

#### Sistemas de detección y extinción de incendios

El CPD contará con un sistema automático de extinción de incendios según la normativa vigente (Reglamento de instalaciones de protección contra incendios, normas UNE EN 15004) y Notas Técnicas de prevención del Instituto Nacional de Seguridad e Higiene en el Trabajo. También contará con un sistema de extinción portátil manual basado en dióxido de carbono.

Este sistema contará con todas las medidas de seguridad necesarias para un correcto funcionamiento. El sistema automático de extinción de incendios contará con:
- Recipientes para almacenamiento del agente extintor
- Mecanismo de disparo automáticos neumáticos o eléctricos
- Conducto de distribución del gas instalado en la sala y difusores
- Accionamiento manual del sistema de extinción automático
- Pulsadores de activación y desactivación del sistema de extinción
- Equipo de control donde irán conectados los sensores, alarmas acústicas y visuales y el sistema de extinción automático

Se dispondrá de sensores de humos y detectores de combustión por aspiración desplegados uniformemente por la sala para detectar una posible existencia de fuego. El gas que se utilizará para extinción será un gas halogenado HFC23, ya que no es conductor de la electricidad y es más seguro para el personal que se pueda encontrar dentro de la sala si se produce una descarga. Cuando ésta se vaya a producir, se avisará al personal que pueda encontrarse dentro de las instalaciones mediante alarma acústica y luminosa, con antelación a la descarga, dando posibilidad al personal de poder evacuar la sala de manera conveniente. Tanto este sistema como el sistema portátil manual de extinción serán controlados y mantenidos periódicamente por personal cualificado. El equipo de control contará con un interfaz de red para el envío de eventos al servidor de monitorización mediante el protocolo SNMP, del cual hablaremos posteriormente. Se realizarán pruebas periódicas de su correcto funcionamiento.

#### Control de humedad y temperatura

La sala contará con sensores de humedad y temperatura conectados a un equipo de control de monitorización exterior donde se podrán visualizar dichos datos en un display alfanumérico sin necesidad de acceder al interior de la sala. Este equipo tendrá conexión a Ethernet para poder enviar estos datos al servidor de monitorización a través del protocolo SNMP y así también contar con un histórico que muestre la evolución de dichos valores y enviar una alerta al responsable del CPD en caso de que estos valores superen ciertos umbrales, o se produzca una variación en la temperatura brusca o indebida.

### 4. Seguridad física y lógica del CPD :class=titulo-color

Aunque a lo largo del documento ya se han tratado algunos aspectos referentes a la seguridad física del CPD, volvemos a mencionarlos, extendiéndonos en los temas en los que todavía no se ha entrado.

#### Seguridad física

- **Sistema de Alimentación Ininterrumpida (SAI)**:
  Mencionado anteriormente, si es mayor de 100 KVA o tiene baterías compuestas de ácido se instalará fuera del CPD, en una sala anexa y con refrigeración óptima. El cálculo de la capacidad de la SAI se hará en función de la siguiente fórmula:
  
  ![](../../img/supuestos/inap/formula_cpd_potencia.png)
  
  Donde el factor de potencia cos φ = 0,6
  Y Potencia estimada será la suma de la potencia de todos los equipos instalados en los armarios rack. Para el cálculo se estima que cada armario consumirá 10.000W aproximadamente.

- Sistema de refrigeración (explicado anteriormente)
- Generador auxiliar de corriente eléctrica (explicado anteriormente)
- Control de humedad y temperatura (explicado anteriormente)
- Sistema de extinción de incendios automático y manual (explicado anteriormente)

- **Seguridad y control de acceso**:
  Es un aspecto importante a tener en cuenta. La puerta de acceso al CPD contará con una cerradura con llave manual para acceso a la sala en caso de fallo del suministro eléctrico o emergencia, y contará con una electrocerradura que será controlada por un sistema biométrico de lectura de huella dactilar, acceso mediante código numérico y lector de tarjetas de proximidad NFC que dará acceso solo a personal autorizado. Este sistema estará instalado en el exterior de la sala, próximo a la puerta de acceso y será capaz de controlar e identificar los accesos del personal autorizado mediante el uso de la huella dactilar, asignación de códigos numéricos de identificación únicos o de tarjetas NFC con identificador único. Tendrá la fecha y hora actualizadas para mantener un histórico de los accesos realizados. También contará con interfaz de red para una fácil administración y configuración mediante interfaz web y enviará los eventos al servidor de monitorización mediante SNMP.

- **Sistema de circuito cerrado de TV**:
  Se contará con cámaras instaladas en el interior y exterior de la sala para controlar los accesos o posibles problemas que puedan suceder. Contará con interfaz web de monitorización remota y posibilidad de grabación de imágenes en disco duro para su posterior visualización en caso de necesidad. Por lo tanto será de aplicación el Reglamento de Protección de Datos (RGPD, Reglamento 2016/679), la Ley Orgánica de Protección de Datos de Carácter Personal (LOPDGDD 3/2018). Habrá instalados carteles indicativos en el interior y el exterior de la sala para que los interesados puedan saber ante quién pueden ejercer sus derechos.

#### Seguridad Lógica

- **Seguridad perimetral**:
  Se contará con todos los elementos necesarios para garantizar la seguridad en la red, para ello se seguirá el siguiente esquema de red:

  ![Esquema de red](../../img/supuestos/inap/esquema_red_cpd.jpg 'Figura 4. Esquema de red')

  Por simplicidad en el esquema, no se han incluido los elementos redundantes del sistema, ni los segmentos de red de los equipos de usuario, sistemas de impresión en red, telefonía IP, red WiFi, y demás posibles redes de propósito general. A continuación se comentan brevemente los servicios implicados en la seguridad lógica:

- **Sonda CCN**:
  Se solicitará al Centro Criptológico Nacional (CCN) la instalación de una sonda para el Sistema de Alerta Temprana (SAT), que permitirá monitorizar el tráfico de internet para evitar posibles problemas de seguridad y actuar en el menor tiempo posible, evitando así que un problema de seguridad pueda extenderse a otras subredes o dominios. Si es posible y la capacidad del equipamiento lo permite, el equipo contará con múltiples interfaces de red y capacidad de cálculo suficiente para analizar el tráfico de la red SARA y los segmentos de red internos para un control exhaustivo de lo que ocurre en la red.

- **IDS**:
  Análogamente se instalará un sistema de detección y prevención de intrusos (IDS), con monitorización en todos los segmentos de red mediante sondas específicas, de esta manera se puede tener un control sobre los cambios que se realizan en los sistemas, el tráfico de red, y actuar ante un incidente en el menor tiempo posible.

- **Firewall**:
  Se dispondrá de un doble router firewall en modo activo-pasivo, configurado con OSPF para que en caso de fallo en una de las líneas de comunicaciones, el tráfico de red se encamine por el otro interfaz. Estará configurado en modo restrictivo, es decir, por defecto no se permitirá nada y se irán añadiendo las reglas con los permisos oportunos, y previo análisis de los riesgos que pueda conllevar la apertura de dicho servicio. Contará también con un antivirus.

- **Segmentación de red en VLANs**:
  - VLAN DMZ: Red de direccionamiento público desmilitarizada donde van los servicios accesibles desde el exterior.
  - VLAN Servicios Intranet: Red con direccionamiento interno para los servicios ofrecidos a la red interna.
  - VLAN Interna: Red con direccionamiento privado para el gestor de colas, envío de trabajos y los equipos de cálculo intensivo.
  
  Por defecto, el Firewall no dejará pasar tráfico entre VLANs y se irán agregando las reglas que se estimen oportunas.

- **Servicio de directorio**:
  Controlará los nombres de usuarios, contraseñas y permisos para controlar lo que cada usuario puede realizar en la infraestructura.

- **Servicio de backup**:
  Proporcionará recuperación de datos ante la ocurrencia de un desastre. Se realizará copia de seguridad de los datos de los usuarios y de la configuración de los servidores. El sistema estará convenientemente dimensionado para almacenar copias de seguridad en disco, ya que éstas serán más rápidas y la recuperación de la información se realizaría también en un tiempo menor. También se contará con un sistema robotizado de copia en cintas para mantener un histórico. La política de backup a seguir será la siguiente:
  - Backup diario incremental en disco
  - Backup completo en cinta semanal
  - Backup mensual en cinta
  
  Los mencionados backups se podrán automatizar mediante la herramienta rsync en Linux. El sistema de copias de seguridad será verificado periódicamente (cada 6 meses) por el responsable destinado a tal efecto. Para la realización de las copias de seguridad se utilizará el intervalo de la noche (de 22 horas a 6 horas). El sistema de almacenamiento permitirá realizar las copias de seguridad en disco sin que afecte al rendimiento del resto de los sistemas.

Todos los sistemas serán convenientemente configurados, mantenidos y actualizados para mantener un nivel de seguridad óptimo. Para la configuración y administración de los sistemas se tomarán como referencia las guías CCN-STIC, la serie 400 que son guías generales, la serie 500 para sistemas con Windows, la serie 600 para otros sistemas como Linux. Esto permitirá configurar los equipos con un nivel de seguridad aceptable.

Para un análisis de riesgos y de cumplimiento de las medidas del ENS y las leyes o reglamentos de protección de datos de carácter personal, se usarán las herramientas EAR/PILAR del CCN. Para ver el estado de seguridad de los sistemas se pueden usar herramientas como NESSUS o OpenVAS.

### 5. Monitorización y alertas de los sistemas críticos :class=titulo-color

Se instalará y mantendrá un sistema que permita la monitorización del estado de la infraestructura. Para ello, este equipo contará con múltiples herramientas que recojan información de los dispositivos con agentes SNMP para almacenar dicha información y presentar luego estos datos en forma de gráfica, para ver una evolución del estado de los sistemas. Se usarán herramientas de uso extendido y gratuitas como puede ser por ejemplo CATI.

Para el envío de alertas, control de estado de los servicios y sistemas, se pueden usar herramientas gratuitas como NAGIOS o ZABBIX, que permiten la ejecución de scripts para solucionar los problemas que puedan ocurrir, o el envío de mensajes de texto SMS a dispositivos móviles mediante el uso de la red GSM, previa instalación en el servidor de un modem 4G con tarjeta SIM y conexión a un operador de telefonía móvil.

Este servidor recogerá los datos de gestión de control de los sistemas y los almacenará y procesará en busca de errores para darles solución en un tiempo aceptable.

También se puede diseñar un sistema ad-hoc para monitorización de los sistemas con la herramienta “nmap” (hay una guía CCN-STIC para su utilización), y mediante scripts sencillos comprobar el estado y actuar o enviar una alarma al administrador del servicio mediante un servicio de mensajería gratuito y de código abierto como puede ser la aplicación Telegram, mediante el uso de bots. De esta manera el administrador podría recibir las alertas que se produzcan en su Smartphone e incluso podría interactuar con el mencionado bot para recibir información adicional acerca del estado de la infraestructura.


