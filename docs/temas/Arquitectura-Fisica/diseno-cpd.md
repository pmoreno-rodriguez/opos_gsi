## **Centros de Procesamiento de Datos (CPD): Arquitectura, Seguridad y Componentes** <!-- {docsify-ignore} -->

> [!NOTE|style:callout|label:Contenido Verificado]
> Respuesta de ChatGPT sobre Diseño de un CPD, características, seguridad, clasificación, etc.

Un **Centro de Procesamiento de Datos (CPD)** es una instalación especializada que alberga servidores y otros equipos informáticos para procesar, almacenar y distribuir información. Su diseño y estructura deben garantizar un funcionamiento ininterrumpido, seguridad física y lógica, así como una alta disponibilidad y eficiencia energética. A continuación, profundizamos en los elementos clave de un CPD.

### **1. Tipos de Servidores en un CPD** <!-- {docsify-ignore} -->

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

### **2. Medidas de Seguridad en los CPD** <!-- {docsify-ignore} -->

#### **Seguridad física** <!-- {docsify-ignore} -->

La **seguridad física** en un CPD es un componente crítico que garantiza la integridad del hardware y la continuidad operativa en caso de fallos, ataques o desastres. A continuación, exploramos los aspectos clave de la seguridad física, incluyendo la **redundancia** y la **monitorización** de los sistemas.

##### **Redundancia en alimentación eléctrica**
- **UPS (Uninterruptible Power Supply)**: Los sistemas UPS proporcionan energía de respaldo en caso de fallos en la red eléctrica. Son esenciales para mantener el CPD en funcionamiento hasta que los generadores entren en acción.
- **Generadores eléctricos de respaldo**: En caso de interrupciones prolongadas en la electricidad, los generadores permiten mantener la operación del CPD sin interrupciones.
- **Redundancia de fuente de alimentación**: Los servidores críticos están equipados con **doble fuente de alimentación** conectada a diferentes circuitos o UPS. Esto garantiza que, si una fuente falla, la otra tome el control sin detener el sistema.

##### **Redundancia en almacenamiento**
- **Discos RAID (Redundant Array of Independent Disks)**: Los sistemas RAID permiten redundancia a nivel de disco duro. Los niveles más comunes en CPD son:
  - **RAID 1**: Duplicación de datos en dos discos (mirroring), lo que asegura que si un disco falla, el otro puede seguir operando.
  - **RAID 5**: Combina striping (reparto de datos) con paridad, distribuyendo la información y permitiendo que un disco falle sin pérdida de datos.
  - **RAID 6**: Similar al RAID 5, pero con doble paridad, lo que permite la falla de hasta dos discos sin pérdida de información.

##### **Redundancia en comunicaciones**
- **Doble tarjeta de red (NIC bonding)**: Para asegurar la continuidad de las comunicaciones, muchos servidores en un CPD cuentan con dos tarjetas de red configuradas en modo redundante (NIC bonding), lo que garantiza la conexión incluso si una tarjeta o enlace falla.
- **Interfaces de gestión dedicadas**: Los servidores y dispositivos de red de alto nivel suelen contar con **interfaces de gestión dedicadas** (iDRAC, iLO, etc.), separadas de la red de producción. Esto permite el acceso a los dispositivos incluso si la red principal falla.
- **Redundancia en el acceso a Internet**: Los CPD de alta disponibilidad suelen contar con conexiones a Internet desde múltiples proveedores de telecomunicaciones (Multi-homing), lo que garantiza que, si una conexión falla, otra tome su lugar de manera automática.

##### **Refrigeración redundante**
El control de la temperatura es crítico en un CPD para evitar sobrecalentamientos y daños a los servidores. Los sistemas de refrigeración deben contar con redundancia:
- **Sistemas de refrigeración N+1**: En este sistema, siempre hay un equipo de refrigeración adicional al que está en uso, preparado para entrar en funcionamiento si alguno falla.
- **Pasillos fríos y calientes**: Para maximizar la eficiencia energética, los CPD utilizan configuraciones de **pasillos fríos y calientes**, que separan el aire caliente que emiten los servidores del aire frío que entra, garantizando una refrigeración óptima.
- **Sensores de temperatura y humedad**: Los sensores de temperatura y humedad están repartidos por todo el CPD para monitorear y ajustar automáticamente los niveles óptimos en todo momento.

##### **Monitorización y control**
- **Nagios**: Es una de las herramientas más usadas en la monitorización de infraestructura IT, ya que permite controlar servidores, redes, servicios y aplicaciones. Nagios detecta fallos y genera alertas en tiempo real, garantizando que cualquier anomalía se pueda corregir de inmediato.
- **Cacti**: Utiliza SNMP (Simple Network Management Protocol) para la monitorización de red y servidores. Es ideal para visualizar gráficas de rendimiento de CPU, tráfico de red, uso de memoria y mucho más. Cacti permite detectar cuellos de botella y prever fallos mediante análisis histórico.
- **Zabbix**: Otra herramienta ampliamente usada en CPD, que permite monitorizar no solo equipos de red y servidores, sino también aplicaciones y servicios, con capacidad de generar alertas y reportes detallados.

#### **Seguridad lógica**

La **seguridad lógica** es tan importante como la física, ya que protege los datos y los sistemas dentro del CPD de ataques cibernéticos, fallos humanos y otros riesgos. Existen varias capas de protección lógica que se deben implementar:

##### **Segmentación de la red**
- Dividir la red en subredes aisladas (mediante **VLANs**, por ejemplo) mejora la seguridad, limitando el alcance de un posible ataque. La segmentación permite aplicar políticas de seguridad específicas para cada segmento y reducir el impacto de una posible intrusión.
  
##### **Sistemas de detección y prevención de intrusiones (IDS/IPS)**
- Los **IDS (Intrusion Detection Systems)** y **IPS (Intrusion Prevention Systems)** son tecnologías críticas en la protección lógica de un CPD. Los IDS monitorean el tráfico de red para detectar comportamientos anómalos y alertar a los administradores, mientras que los IPS son capaces de bloquear ataques en tiempo real.

##### **Bastionado de servidores**
- El **bastionado** consiste en configurar los servidores para reducir su superficie de ataque. Esto incluye deshabilitar servicios y puertos innecesarios, aplicar políticas estrictas de acceso, y configurar correctamente los permisos para minimizar riesgos de ataques.
  
##### **Firewalls y Web Application Firewall (WAF)**
- Los **firewalls** protegen los perímetros del CPD, asegurando que solo se permita el tráfico autorizado entre redes internas y externas. Los **WAF (Web Application Firewall)** son esenciales para proteger aplicaciones web contra ataques específicos como el **SQL Injection** o el **Cross-Site Scripting (XSS)**.

##### **Protección antispam y antivirus**
- La protección contra virus y spam es esencial para evitar la propagación de malware y ataques de phishing. Los servidores de correo electrónico en los CPD deben contar con soluciones antispam y antivirus de alto rendimiento.

##### **Política de backups**
- Es fundamental realizar **copias de seguridad** de todos los sistemas y datos críticos de manera regular. Estas copias deben estar protegidas mediante cifrado y almacenadas en ubicaciones seguras, incluyendo fuera del sitio (offsite) para garantizar la recuperación en caso de desastres.

##### **Auditorías de seguridad**
- Las auditorías de seguridad periódicas son esenciales para detectar vulnerabilidades. Estas auditorías pueden ser internas o externas, y permiten evaluar la efectividad de las políticas de seguridad y realizar ajustes cuando sea necesario.
  
##### **Política de actualizaciones de software base**
- Mantener el software del sistema operativo y las aplicaciones actualizados es crucial para evitar que vulnerabilidades conocidas sean explotadas. Las políticas de actualización deben incluir la instalación de **parches de seguridad** de manera regular.

##### **Procedimientos regulados para la administración de servidores**
- La administración de los servidores debe estar sujeta a procedimientos regulados y documentados. Estos procedimientos incluyen la gestión de accesos privilegiados, la monitorización de actividades de administradores y la revisión de logs para asegurar que no haya comportamientos sospechosos.

##### **Seguridad en la autenticación y control de acceso**
- Implementar autenticación multifactor (MFA) y políticas de acceso basadas en roles (RBAC) para controlar estrictamente quién tiene acceso a los diferentes sistemas dentro del CPD. Solo el personal autorizado debe tener acceso a servidores críticos.

##### **Sistemas de información de seguridad y gestión de eventos (SIEM)**
- Las soluciones **SIEM** permiten recopilar y analizar los eventos de seguridad en tiempo real. Con ellas, se puede correlacionar eventos de múltiples sistemas, detectar patrones sospechosos y responder rápidamente a incidentes de seguridad.

### **3. Componentes de un CPD** <!-- {docsify-ignore} -->

Un CPD se compone de varias áreas y recursos esenciales para su funcionamiento. Entre ellos, destacan:

#### **Sala principal de servidores**
- **Estructura**: Espacios optimizados para instalar servidores, sistemas de refrigeración y almacenamiento. Estos suelen estar configurados en racks y estructuras modulares.
- **Refrigeración**: Los sistemas de aire acondicionado, tanto por aire como por agua, son imprescindibles para mantener la temperatura adecuada en el CPD.
  
#### **Sala de entrada**
- **Acceso controlado**: Es la zona de recepción donde los datos o equipos entran en el CPD. Suele tener puertas blindadas y sistemas de seguridad adicionales.
  
#### **Centro de operaciones (NOC - Network Operations Center)**
- Es el centro neurálgico del CPD donde se monitorizan los sistemas, las redes, y la salud de los servidores. Este espacio debe estar equipado con estaciones de trabajo, pantallas y sistemas de comunicación.