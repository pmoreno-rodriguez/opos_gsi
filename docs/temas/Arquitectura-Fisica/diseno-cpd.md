> [!TIP|style: callout|icon: fa fa-check|label: Contenido Verificado]
> Respuesta de ChatGPT sobre Diseño de un CPD, características, seguridad, clasificación, etc.

## **Centros de Procesamiento de Datos (CPD): Arquitectura, Seguridad y Componentes** <!-- {docsify-ignore} -->

Un **Centro de Procesamiento de Datos (CPD)** es una instalación especializada que alberga servidores y otros equipos informáticos para procesar, almacenar y distribuir información. Su diseño y estructura deben garantizar un funcionamiento ininterrumpido, seguridad física y lógica, así como una alta disponibilidad y eficiencia energética. A continuación, profundizamos en los elementos clave de un CPD.

### 1. Tipos de Servidores en un CPD :class=titulo-color <!-- {docsify-ignore} -->

Los servidores son los núcleos de los CPD, ya que procesan y almacenan datos. Existen varias clasificaciones según su función, tamaño y arquitectura.

#### **Clasificación según la taxonomía de Flynn**
La taxonomía de Flynn clasifica las arquitecturas de los procesadores según el número de flujos de datos y de instrucciones. Para los CPD, las categorías relevantes son:

- **SISD (Single Instruction Stream Single Data Stream)**: Un solo procesador ejecuta una única instrucción sobre un solo flujo de datos. Común en servidores tradicionales de bajo rendimiento.
  
- **SIMD (Single Instruction Stream Multiple Data Stream)**: Un procesador ejecuta una instrucción sobre varios flujos de datos, lo cual es común en tareas que requieren procesamiento paralelo.
  
- **MISD (Multiple Instruction Stream Single Data Stream)**: Un conjunto de procesadores ejecuta distintas instrucciones sobre un único flujo de datos, aunque rara vez se aplica en servidores de CPD.
  
- **MIMD (Multiple Instruction Stream Multiple Data Stream)**: Varios procesadores ejecutan múltiples instrucciones sobre varios flujos de datos. Es común en servidores de alto rendimiento y clústeres de procesamiento distribuido, como los que utilizan arquitecturas de **Cloud Computing** y **Big Data**.

#### **Tipos de servidores según su arquitectura y función**
- **Servidores de rack**: Estos servidores están diseñados para montar en racks de 19 pulgadas, lo que optimiza el espacio. Son ideales para centros de datos que necesitan gran densidad y eficiencia.
- **Servidores Blade**: Son módulos de servidor que comparten recursos (alimentación, refrigeración y almacenamiento) en un chasis común. Son compactos y eficientes para entornos con alta demanda de procesamiento.
- **Servidores Tower**: Parecen una torre o caja de ordenador tradicional. Son más adecuados para uso empresarial a pequeña escala.
- **Servidores de alta disponibilidad (HA)**: Están diseñados con redundancia para garantizar un tiempo de actividad sin interrupciones.

### 2. Medidas de Seguridad en los CPD :class=titulo-color <!-- {docsify-ignore} -->

#### Seguridad física :class=titulo-color2

La **seguridad física** en un CPD es un componente crítico que garantiza la integridad del hardware y la continuidad operativa en caso de fallos, ataques o desastres. A continuación, exploramos los aspectos clave de la seguridad física, incluyendo la **redundancia** y la **monitorización** de los sistemas.

##### Acceso físico al equipo (rack cerrado con llave, sala con acceso restringido) :class=subtitulo-color

##### Redundancia en alimentación eléctrica :class=subtitulo-color

- **UPS (Uninterruptible Power Supply)**: Los sistemas UPS proporcionan energía de respaldo en caso de fallos en la red eléctrica. Son esenciales para mantener el CPD en funcionamiento hasta que los generadores entren en acción.
- **Generadores eléctricos de respaldo**: En caso de interrupciones prolongadas en la electricidad, los generadores permiten mantener la operación del CPD sin interrupciones.
- **Redundancia de fuente de alimentación**: Los servidores críticos están equipados con **doble fuente de alimentación** conectada a diferentes circuitos o UPS. Esto garantiza que, si una fuente falla, la otra tome el control sin detener el sistema.

##### Redundancia en almacenamiento :class=subtitulo-color

- **Discos RAID (Redundant Array of Independent Disks)**: Los sistemas RAID permiten redundancia a nivel de disco duro. Los niveles más comunes en CPD son:
  - **RAID 1**: Duplicación de datos en dos discos (mirroring), lo que asegura que si un disco falla, el otro puede seguir operando.
  - **RAID 5**: Combina striping (reparto de datos) con paridad, distribuyendo la información y permitiendo que un disco falle sin pérdida de datos.
  - **RAID 6**: Similar al RAID 5, pero con doble paridad, lo que permite la falla de hasta dos discos sin pérdida de información.

##### Redundancia en comunicaciones :class=subtitulo-color

- **Doble tarjeta de red (NIC bonding)**: Para asegurar la continuidad de las comunicaciones, muchos servidores en un CPD cuentan con dos tarjetas de red configuradas en modo redundante (NIC bonding), lo que garantiza la conexión incluso si una tarjeta o enlace falla.
- **Interfaces de gestión dedicadas**: Los servidores y dispositivos de red de alto nivel suelen contar con **interfaces de gestión dedicadas** (iDRAC, iLO, etc.), separadas de la red de producción. Esto permite el acceso a los dispositivos incluso si la red principal falla.
- **Redundancia en el acceso a Internet**: Los CPD de alta disponibilidad suelen contar con conexiones a Internet desde múltiples proveedores de telecomunicaciones (Multi-homing), lo que garantiza que, si una conexión falla, otra tome su lugar de manera automática.

##### Refrigeración redundante :class=subtitulo-color

El control de la temperatura es crítico en un CPD para evitar sobrecalentamientos y daños a los servidores. Los sistemas de refrigeración deben contar con redundancia:
- **Sistemas de refrigeración N+1**: En este sistema, siempre hay un equipo de refrigeración adicional al que está en uso, preparado para entrar en funcionamiento si alguno falla.
- **Pasillos fríos y calientes**: Para maximizar la eficiencia energética, los CPD utilizan configuraciones de **pasillos fríos y calientes**, que separan el aire caliente que emiten los servidores del aire frío que entra, garantizando una refrigeración óptima.
- **Sensores de temperatura y humedad**: Los sensores de temperatura y humedad están repartidos por todo el CPD para monitorear y ajustar automáticamente los niveles óptimos en todo momento.

##### Monitorización y control :class=subtitulo-color

- **Nagios**: Es una de las herramientas más usadas en la monitorización de infraestructura IT, ya que permite controlar servidores, redes, servicios y aplicaciones. Nagios detecta fallos y genera alertas en tiempo real, garantizando que cualquier anomalía se pueda corregir de inmediato.
- **Cacti**: Utiliza SNMP (Simple Network Management Protocol) para la monitorización de red y servidores. Es ideal para visualizar gráficas de rendimiento de CPU, tráfico de red, uso de memoria y mucho más. Cacti permite detectar cuellos de botella y prever fallos mediante análisis histórico.
- **Zabbix**: Otra herramienta ampliamente usada en CPD, que permite monitorizar no solo equipos de red y servidores, sino también aplicaciones y servicios, con capacidad de generar alertas y reportes detallados.

#### Seguridad lógica :class=titulo-color2

La **seguridad lógica** es tan importante como la física, ya que protege los datos y los sistemas dentro del CPD de ataques cibernéticos, fallos humanos y otros riesgos. Existen varias capas de protección lógica que se deben implementar:

##### Segmentación de la red :class=subtitulo-color
- Dividir la red en subredes aisladas (mediante **VLANs**, por ejemplo) mejora la seguridad, limitando el alcance de un posible ataque. La segmentación permite aplicar políticas de seguridad específicas para cada segmento y reducir el impacto de una posible intrusión.
  
##### Sistemas de detección y prevención de intrusiones (IDS/IPS) :class=subtitulo-color

- Los **IDS (Intrusion Detection Systems)** y **IPS (Intrusion Prevention Systems)** son tecnologías críticas en la protección lógica de un CPD. Los IDS monitorean el tráfico de red para detectar comportamientos anómalos y alertar a los administradores, mientras que los IPS son capaces de bloquear ataques en tiempo real.

##### Bastionado de servidores :class=subtitulo-color

- El **bastionado** consiste en configurar los servidores para reducir su superficie de ataque. Esto incluye deshabilitar servicios y puertos innecesarios, aplicar políticas estrictas de acceso, y configurar correctamente los permisos para minimizar riesgos de ataques.

##### Firewalls y Web Application Firewall (WAF) :class=subtitulo-color

- Los **firewalls** protegen los perímetros del CPD, asegurando que solo se permita el tráfico autorizado entre redes internas y externas. Los **WAF (Web Application Firewall)** son esenciales para proteger aplicaciones web contra ataques específicos como el **SQL Injection** o el **Cross-Site Scripting (XSS)**.

##### Protección antispam y antivirus :class=subtitulo-color

- La protección contra virus y spam es esencial para evitar la propagación de malware y ataques de phishing. Los servidores de correo electrónico en los CPD deben contar con soluciones antispam y antivirus de alto rendimiento.

##### Política de backups :class=subtitulo-color

- Es fundamental realizar **copias de seguridad** de todos los sistemas y datos críticos de manera regular. Estas copias deben estar protegidas mediante cifrado y almacenadas en ubicaciones seguras, incluyendo fuera del sitio (offsite) para garantizar la recuperación en caso de desastres.

##### Auditorías de seguridad :class=subtitulo-color

- Las auditorías de seguridad periódicas son esenciales para detectar vulnerabilidades. Estas auditorías pueden ser internas o externas, y permiten evaluar la efectividad de las políticas de seguridad y realizar ajustes cuando sea necesario.

##### Política de actualizaciones de software base :class=subtitulo-color

- Mantener el software del sistema operativo y las aplicaciones actualizados es crucial para evitar que vulnerabilidades conocidas sean explotadas. Las políticas de actualización deben incluir la instalación de **parches de seguridad** de manera regular.

##### Procedimientos regulados para la administración de servidores :class=subtitulo-color

- La administración de los servidores debe estar sujeta a procedimientos regulados y documentados. Estos procedimientos incluyen la gestión de accesos privilegiados, la monitorización de actividades de administradores y la revisión de logs para asegurar que no haya comportamientos sospechosos.

##### Seguridad en la autenticación y control de acceso :class=subtitulo-color

- Implementar autenticación multifactor (MFA) y políticas de acceso basadas en roles (RBAC) para controlar estrictamente quién tiene acceso a los diferentes sistemas dentro del CPD. Solo el personal autorizado debe tener acceso a servidores críticos.

##### Sistemas de información de seguridad y gestión de eventos (SIEM) :class=subtitulo-color

- Las soluciones **SIEM** permiten recopilar y analizar los eventos de seguridad en tiempo real. Con ellas, se puede correlacionar eventos de múltiples sistemas, detectar patrones sospechosos y responder rápidamente a incidentes de seguridad.

### 3. CENTROS DE PROCESO DE DATOS: DISEÑO, IMPLANTACIÓN Y GESTIÓN :class=titulo-color<!-- {docsify-ignore} -->

Se pueden definir como aquellas ubicaciones donde se concentra el equipamiento para prestación de servicios TIC a una o varias organizaciones, disponiendo para ello de las infraestructuras para prestar estos servicios de manera gestionada, eficiente en coste, sostenible, predecible y con los requisitos de calidad, seguridad, eficiencia y robustez requeridos.

La norma que especifica los requisitos para la infraestructura de centros de datos es **ANSI/TIA-942-C** (Telecommunications Infrastructure Standard for Data Centers).

#### 3.1 CLASIFICACIÓN :class=titulo-color2

Puede establecerse una primera clasificación en cuanto al destinatario de los servicios proporcionados:

- **CPD corporativos o empresariales**, que proveen servicios a la propia organización, formando parte de su proceso de TI.
- **CPD de servicios gestionados**. Estos centros de datos son administrados por un tercero (o un proveedor de servicios administrados) en nombre de una empresa. La empresa alquila los equipos y la infraestructura en lugar de comprarlos.
- **CPD de colocación**. Son gestionados por una empresa que alquila el espacio y la infraestructura (refrigeración, seguridad, ancho de banda, etc.) a otras empresas para que estas alojen aquí sus componentes (servidores, enrutadores, cortafuegos, etc.).
- **CPD en la nube**. Los datos y aplicaciones se alojan en una infraestructura virtual en la nube, contratado como un servicio a través de un proveedor, como Amazon Web Services (AWS), Microsoft (Azure) o IBM Cloud u otro proveedor de nube pública.

Otra clasificación en cuanto al rol en la prestación de servicios:

- **CPD principal**, que provee servicios de forma habitual a la organización, encontrándose de forma general en operación continua (solo interrumpe su servicio por intervención planificada o en caso de desastre).
- **CPD de respaldo, recuperación ante desastres o de contingencia**, destinado a proporcionar un mecanismo alternativo para la prestación de los servicios en caso de que exista algún problema con el centro principal, por necesidades de interrupción del servicio debido a una intervención, o por desastre o avería grave. Los centros de respaldo pueden ser de diferentes tipos según las necesidades de tiempos de recuperación del desastre:
  - **Sala fría**: el centro de respaldo externo cuenta con toda la infraestructura requerida para replicar el centro de procesado de datos principal a partir de copias de seguridad. Es el método más barato, pero también requiere tiempo para trasladar los datos de una infraestructura a otra.
  - **Sala caliente**: son centros de respaldo que funcionan de forma análoga al CPD principal. Todos los datos que son introducidos en el CPD base se replican en la sala caliente, por lo que en caso de contingencia solo es necesario restaurar los datos en el último momento. Es un modelo más caro, pero mucho más rápido.
  - **Centro espejo**: es una versión avanzada de las salas calientes. En él, se replican los datos en tiempo real, por lo que es necesario utilizar redes de alta velocidad. Es el modelo más rápido y fiable, pero también el más caro.
  - **Mutual Backup**: se produce cuando dos empresas llegan a un acuerdo para hacer un respaldo de datos mutuo. Ambas deben reservar un espacio para los servidores de respaldo de la otra.

#### 3.2 SUBSISTEMAS :class=titulo-color2

De acuerdo con el estándar **ANSI/TIA-942**, la infraestructura de soporte de un CPD estará compuesta por cuatro subsistemas:

- **Telecomunicaciones**: Cableado de armarios y horizontal, accesos redundantes, cuarto de entrada, área de distribución, backbone, elementos activos y alimentación redundantes, patch panels y latiguillos, documentación.
- **Arquitectura**: Selección de ubicación, tipo de construcción, protección ignífuga y requerimientos **NFPA 75** (Sistemas de protección contra el fuego para información), barreras de vapor, techos y pisos, áreas de oficina, salas de UPS y baterías, sala de generador, control de acceso, CCTV, NOC (Network Operations Center).
- **Sistema eléctrico**: Número de accesos, puntos de fallo, cargas críticas, redundancia de UPS y topología de UPS, puesta a tierra, **EPO** (Emergency Power Off- sistemas de corte de emergencia), baterías, monitorización, generadores, sistemas de transferencia.
- **Sistema mecánico**: Climatización, presión positiva, tuberías y drenajes, **CRACs** (Computer Room Air Conditioner) y condensadores, control de **HVAC** (High Ventilating Air Conditioning), detección de incendios y sprinklers, extinción por agente limpio (**NFPA 2001**), detección por aspiración (**ASD**), detección de líquidos.

#### 3.3 ELEMENTOS :class=titulo-color2

Según los estándares definidos por la norma **ANSI/TIA-942**, generalmente en un centro de proceso de datos deberíamos encontrar los siguientes elementos, desde el punto de vista de organización de las comunicaciones:

- **Centro de operaciones**: oficina aledaña a las salas de servidores en donde se encuentran los operadores y técnicos de operación y soporte. Dispone habitualmente de sistemas de monitorización e inspección remota. Habitualmente se realiza también el control de acceso a las salas.
- **Sala de entrada**: Contiene los elementos de comunicaciones de los proveedores de acceso, así como almacenes o áreas de carga y descarga.
- **Sala principal**: Sala que contiene los servidores y otros equipos que forman parte del CPD. Habitualmente cuenta con un falso suelo para el mantenimiento más sencillo del cableado, y los equipos se distribuyen en armarios (**rack**) situados en hileras.
- **Armarios de comunicaciones**: La norma **ANSI/TIA-942** presenta un enfoque estructurado de los elementos de conectividad estableciendo una arquitectura en estrella, con una zona principal de distribución que agrupa el cableado del “backbone” de red, así como los conmutadores, enrutadores y centralitas del “core” de la **LAN**. Esta norma incluye el cable de categoría 6A como el nuevo mínimo.

#### 3.4 DISEÑO :class=titulo-color2

Los aspectos de diseño más relevantes a la hora del diseño de un centro de proceso de datos tienen mucho que ver con los requisitos de disponibilidad de los servicios que alberga.

La norma **ANSI/TIA-942** recoge la clasificación en “tiers”, que proporcionan un marco de evaluación de la disponibilidad de los servicios de TI que puede ofrecer un centro:

- **Tier 1 (CPD básico)**: No hay redundancia en administración eléctrica y refrigeración. Puede tener o no suelo elevado y SAI (Sistema de Alimentación Ininterrumpido). El servicio puede interrumpirse por paradas programadas o no programadas. Tasa máxima de disponibilidad: 99,671 % (que equivaldría a ~28,82 horas al año de servicio interrumpido).
- **Tier 2 (CPD redundante)**: Menos susceptible a paradas programadas o no. Tiene componentes redundantes. Tiene suelos elevados y SAI. Una única línea de distribución eléctrica y refrigeración. Tasa máxima de disponibilidad: 99,741 % (que equivaldría a ~22,69 horas al año de servicio interrumpido).
- **Tier 3 (CPD concurrentemente mantenible)**: Permite planificar mantenimiento sin afectar al servicio, pero pueden existir paradas no planificadas. Tiene componentes redundantes, múltiples líneas de distribución eléctrica y de refrigeración, pero con una sola activa. Tasa máxima de disponibilidad: 99,982 % (que equivaldría a ~1,58 horas al año de servicio interrumpido).
- **Tier 4 (CPD tolerante a fallos)**: Sin pérdida de servicio por paradas programadas, es capaz de soportar un evento no programado del tipo “peor escenario” sin pérdida de servicio. Múltiples líneas de distribución eléctrica y refrigeración, con múltiples componentes redundantes (ej.: 2 SAI redundados). Tasa máxima de disponibilidad: 99,995 % (que equivaldría a ~26,28 minutos al año de servicio interrumpido).

Son muchos los factores que influyen en el diseño de un centro de proceso de datos:

- Ubicación
- Distribución y uso del espacio de la sala
- Sistema eléctrico y de generación
- Sistemas de refrigeración
- Sistemas de detección y extinción de incendios
- Emplazamiento de los armarios o bastidores
- Cableado para la red de datos
- Monitorización y vigilancia

##### 3.4.1. Ubicación del CPD :class=subtitulo-color

La elección del lugar para construir el CPD es un paso fundamental, ya que afecta directamente la seguridad y la continuidad del negocio. Según la norma ANSI/TIA-942, el sitio ideal debe:
- Estar alejado de áreas propensas a desastres naturales, como zonas de inundación, actividad sísmica elevada, y áreas propensas a incendios.
- Mantener una distancia segura de posibles amenazas de origen humano, como aeropuertos, fábricas y plantas químicas.
  
**Normativa de referencia**:
- **ANSI/TIA-942**, apartado de selección de sitio.
- **NFPA 70** y **NFPA 75** para la protección contra incendios en la selección de la ubicación.

##### 3.4.2 Sistema eléctrico y de generación :class=subtitulo-color

El “**Uptime Institute**” recomienda considerar el suministro de las compañías eléctricas como un suministro auxiliar de bajo coste, y la generación en el propio centro (mediante células de combustible, generadores u otros medios fiables), con el respaldo de unidades de suministro ininterrumpido (**SAI**).

- **Grupos electrógenos**: los generadores más habituales son los grupos electrógenos a gasolina o diésel.
- **Sistemas de alimentación ininterrumpida (SAI)**: su potencia se mide en kVA.
- **Ruta de distribución y cuadros eléctricos**: es recomendable que existan dos rutas de suministro al equipamiento en paralelo.

##### 3.4.3 Sistemas de refrigeración :class=subtitulo-color

Las condiciones de climatización se resumen en una temperatura entre **18°C y 27°C** y una humedad relativa entre **30% y 50%**.

Técnicas de climatización de aire:

- Sistemas de expansión directa (**DX**)
- Sistema de refrigeración por condensación en torre de refrigeración
- Sistemas de gestión de aire centralizado
- Entrega de aire a baja presión
- Técnicas de pasillo frío/caliente
- Refrigeración por aire exterior (“free-cooling”)
- Cerramiento de pasillos
- Cerramiento de bastidores

**Sistema de Pasillo Frío y Pasillo Caliente**

Este sistema organiza los racks en filas alternas, donde el aire frío se suministra en los pasillos fríos y el aire caliente se expulsa en los pasillos calientes. Esto previene la mezcla de aire caliente y frío, optimizando la eficiencia energética y mejorando la capacidad de enfriamiento.

**Opciones de Sistemas de Refrigeración**

a) **Sistemas de Enfriamiento por CRAC (Computer Room Air Conditioner)**
- **Función**: Los sistemas CRAC son unidades de aire acondicionado especializadas para CPD que se instalan directamente en el centro de datos y permiten la circulación del aire frío en los pasillos fríos.
- **Características**: Controlan tanto la temperatura como la humedad, y están disponibles en configuraciones redundantes para mantener la operación en caso de fallo.
  
b) **Sistema de Enfriamiento por Líquido (Líquido a Aire)**
- **Función**: Los sistemas de enfriamiento líquido se ubican directamente en los racks de alta densidad para extraer el calor mediante agua refrigerada. Es una solución eficiente para centros de datos de alta densidad.
- **Características**: Permiten un mejor control de la temperatura en comparación con los sistemas CRAC y pueden implementarse en sistemas modulares.

**Normativa de referencia**:
- **ANSI/TIA-942**, para la configuración de los pasillos fríos y calientes.
- **ASHRAE TC 9.9** para el diseño de sistemas de refrigeración específicos para CPD.

##### 3.4.4 Sistemas de detección y extinción de incendios :class=subtitulo-color

La normativa ANSI/TIA-942 exige un sistema de detección de incendios en dos fases: detección temprana y sistema de extinción. Los sistemas de extinción pueden incluir:
- **Gas inerte**: Utiliza gases como argón o nitrógeno, que no afectan los equipos electrónicos. Ideal para proteger los racks sin dañar el equipo.
- **Sistema de aspersión por agua nebulizada**: Requiere sistemas de protección adecuados para evitar daños al equipo en caso de activación.

##### 3.4.5 Protección Contra el Agua :class=subtitulo-color

Para evitar daños por agua, el CPD debe contar con un sistema de drenaje adecuado y estar elevado respecto al suelo. Los suelos elevados permiten el paso de cables y ayudan en la detección temprana de fugas.

**Normativa de referencia**:
- **NFPA 75** y **NFPA 76** para los sistemas de detección y extinción de incendios.
- **ANSI/TIA-942** en cuanto a sistemas de protección contra el agua.

#### 3.5 MÉTRICAS DE EFICIENCIA EN LOS CPD :class=titulo-color2

- **Power Usage Effectiveness (PUE)**: El PUE hace referencia a la eficacia del uso de la energía y es la métrica más común a efectos de comparación y benchmarking. Se define como:

```PUE = Consumo total / Consumo del equipamiento TI```

Dado que, en la realidad, un PUE de 1 es un objetivo imposible, el objetivo estándar para la mayoría de Data Center es lograr un PUE inferior a 2. Además, el PUE objetivo para un Data Center de nueva construcción (dada la tecnología actual) debería ser inferior a 1,2; mientras que los Data Centers más energéticamente eficientes ya son capaces de alcanzar PUEs por debajo de 1,06.

- **Carbon Usage Effectiveness (CUE)**: El CUE hace referencia a la eficacia del uso del carbono, y mide las emisiones de carbono que emite un centro de datos a diario. Mientras que el PUE tiene un valor ideal de 1,0, el CUE tiene un valor ideal de 0,0.

- **Water Usage Effectiveness (WUE)**: La efectividad del uso del agua mide la cantidad de agua utilizada en el funcionamiento de un centro de datos, y se define como:

```WUE = Consumo total de agua / Consumo del equipamiento TI```

Al igual que el PUE y el CUE, un WUE ideal es bajo. Un objetivo deseable para muchos Data Centers es mantener su WUE por debajo de 1,0, lo que indicaría que el consumo de agua es eficiente en relación con la carga de trabajo.

### 4. Estructura Física del CPD :class=titulo-color

La estructura física del CPD debe garantizar la seguridad y soporte para todos los sistemas críticos.

#### Suelo
- **Suelos elevados**: Son recomendados para facilitar el paso de cables y la circulación de aire.
- **Materiales**: Deben ser ignífugos y capaces de soportar cargas pesadas.
  
#### Techos
- Deben diseñarse para soportar el peso de sistemas de iluminación y otros equipos de mantenimiento.
- La altura mínima sugerida es de 3 metros para permitir la circulación de aire y el acceso del personal.

#### Puertas
- **Acceso controlado**: Puertas de seguridad con acceso restringido y control de entradas.
- **Materiales ignífugos**: Las puertas deben ser resistentes al fuego y cumplir con las normativas contra incendios.

**Normativa de referencia**:
- **ANSI/TIA-942** para requisitos de suelos, techos y puertas.
- **NFPA 75** para materiales de construcción ignífugos.

### 5. Sistema Eléctrico :class=titulo-color

Un sistema eléctrico robusto es esencial para garantizar la continuidad del CPD, incluso en caso de fallo en la red primaria.

#### Componentes del Sistema Eléctrico

1. **UPS (Uninterruptible Power Supply)**:
   - **Función**: Ofrecer energía de respaldo inmediata en caso de fallo de suministro.
   - **Capacidad**: Debe dimensionarse según la carga del CPD y contar con redundancia (mínimo N+1).
   
2. **Transformadores y ATS (Automatic Transfer Switch)**:
   - **Transformadores**: Mantienen la estabilidad del voltaje para los equipos.
   - **ATS**: Cambia automáticamente a una fuente de energía secundaria en caso de fallo en la red primaria.

3. **Generadores de Biodiesel**:
   - **Función**: Fuente de energía alternativa que asegura la continuidad durante apagones prolongados.
   - **Ubicación**: Se recomienda que estén ubicados fuera del edificio, con ventilación adecuada.

#### Esquema Eléctrico Básico

El sistema eléctrico se configura como sigue:
1. Red de alimentación primaria
2. UPS (mínimo N+1)
3. Transformadores para estabilización de energía
4. ATS, que gestiona el cambio a la fuente de respaldo si la energía de la red falla.
5. Generador de biodiesel como respaldo.

**Normativa de referencia**:
- **ANSI/TIA-942** para la configuración eléctrica.
- **NFPA 70 (National Electrical Code)** para seguridad eléctrica.
- **IEEE Std 1100 (Emerald Book)** para la calidad de energía en centros de datos.

### 6. **Otros Aspectos Importantes**

#### Cableado Estructurado
El cableado estructurado debe diseñarse para soportar tráfico de datos de alta velocidad y escalabilidad.
- **Normativa**: **ANSI/TIA-568** para diseño de cableado en centros de datos.

#### Sistema de Monitoreo
El CPD debe contar con un sistema de monitoreo centralizado para controlar temperatura, humedad, acceso, consumo de energía y detección de incendios.
  
#### Seguridad Física
- **Cámaras de vigilancia** y **sistemas de control de acceso**.
- **Perímetros de seguridad** para evitar accesos no autorizados.

### Resumen de Normativas de Referencia

| **Aspecto**               | **Normativa de Referencia**                     |
|---------------------------|-------------------------------------------------|
| Localización              | ANSI/TIA-942, NFPA 70, NFPA 75                  |
| Refrigeración             | ANSI/TIA-942, ASHRAE TC 9.9                     |
| Protección contra incendios y agua | NFPA 75, NFPA 76                      |
| Estructura física         | ANSI/TIA-942, NFPA 75                           |
| Sistema eléctrico         | ANSI/TIA-942, NFPA 70, IEEE Std 1100            |
| Cableado estructurado     | ANSI/TIA-568                                    |
| Monitoreo y seguridad física | ANSI/TIA-942                                |

Este diseño asegura que el CPD cumpla con la normativa ANSI/TIA-942, protegiendo los equipos y datos, y garantizando continuidad en las operaciones críticas de la empresa.