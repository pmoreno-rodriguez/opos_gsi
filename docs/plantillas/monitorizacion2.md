## Implantación de una adecuada monitorización para un sistema <!-- {docsify-ignore} -->

La **monitorización de sistemas** es una medida fundamental para garantizar la seguridad, disponibilidad y resiliencia de los servicios digitales, especialmente en infraestructuras críticas. Los servicios que permitan a los ciudadanos interactuar con la Administración Pública, deben estar protegidos frente a amenazas y riesgos mediante una estrategia de monitorización basada en el **Esquema Nacional de Seguridad (ENS)**, regulado en el Real Decreto 311/2022.

A continuación, desglosamos los principales elementos para implantar una adecuada monitorización, integrando los requisitos normativos, las herramientas tecnológicas, y las mejores prácticas actuales.

### 1. Requisitos de monitorización según el ENS

El ENS establece que los sistemas de información deben disponer de mecanismos para monitorizar su operación y seguridad, identificando incidentes y anomalías que puedan comprometer su funcionamiento. Dentro de las **medidas de operación (OP.MON)** del ENS, encontramos las siguientes acciones clave:

#### OP.MON-1: Detección de intrusiones
Esta medida implica la capacidad de identificar accesos no autorizados o actividades maliciosas en el sistema. Para ello, es necesario contar con **sistemas de detección de intrusos (IDS)**, como las **Sondas SAT**, que están desplegadas en redes críticas como **Sara** (la red interadministrativa) y **Inet** (la red de internet general).

#### OP.MON-2: Sistemas de métricas
El monitoreo no solo debe detectar intrusiones, sino también proporcionar una visión continua de las métricas clave del sistema. Esto incluye la monitorización del rendimiento, disponibilidad y utilización de recursos a través de herramientas como **Nagios** o su evolución, **Icinga**, las cuales permiten gestionar alertas y visualizaciones detalladas del estado de la infraestructura.

#### OP.MON-3: Vigilancia
La vigilancia proactiva es esencial para anticiparse a potenciales amenazas. Esto se logra mediante herramientas avanzadas de monitorización y análisis como **GLORIA** y **MONICA**, los sistemas comunes y transversales gestionados a nivel estatal. Estas plataformas no solo registran eventos, sino que los correlacionan para identificar patrones anómalos y posibles incidentes en tiempo real.

### 2. Protección avanzada frente a amenazas específicas

Además de la monitorización básica, se deben implementar medidas avanzadas de protección frente a amenazas específicas, como el **código dañino** (**op.exp.6**) y los ataques de denegación de servicio distribuidos (DDoS, **mp.s.4**). Para ello:

- **Protección frente a código dañino**: Herramientas como antivirus y sistemas de detección de malware deben integrarse en la infraestructura. Además, los datos recopilados por sistemas como **Lucía**, componente del ecosistema SIEM, permiten detectar patrones de malware a través del análisis de logs y eventos.
  
- **Mitigación de DDoS**: El sistema debe contar con soluciones de mitigación DDoS, bien mediante infraestructura propia o servicios gestionados en la nube, como **Azure Sentinel**, que complementan las capacidades del SIEM nacional.

### 3. Uso de servicios comunes y transversales

En el marco de los servicios comunes de la Administración Pública, los sistemas de monitorización como GLORIA (SIEM nacional) y MONICA (SIEM de nueva generación) se convierten en piezas clave. Estas plataformas permiten integrar múltiples fuentes de datos y herramientas de análisis, incluyendo los siguientes componentes:

- **Lucía**: Se encarga de la recolección y normalización de eventos. Permite recibir y estandarizar logs desde diversos sistemas.
- **Carmen**: Analiza los datos normalizados para identificar patrones anómalos y posibles incidentes.
- **Reyes**: Gestiona los eventos de seguridad identificados, proporcionando informes detallados y permitiendo una respuesta ágil a los incidentes.

El uso de estas herramientas ofrece una ventaja significativa al centralizar la información de seguridad, asegurando una coordinación eficiente y un análisis profundo en tiempo real.

### 4. Protocolos y herramientas de monitorización

#### Protocolo SNMP v3
El **protocolo SNMP v3** se utiliza para la monitorización de dispositivos en la red, asegurando la autenticación y cifrado de las comunicaciones. Esto es especialmente útil en entornos con múltiples dispositivos, como routers, switches y servidores, proporcionando un descubrimiento continuo y una visión detallada del estado de los componentes de la red.

#### Sistemas IDS y Sondas SAT
Las **Sondas SAT** son dispositivos clave en la detección de intrusiones en redes críticas. Estas sondas deben estar desplegadas tanto en **Sara** como en **Inet**, asegurando una cobertura completa frente a posibles vectores de ataque.

#### Herramientas Open Source y comerciales
Además de los sistemas comunes, herramientas como **Nagios** o **Icinga** permiten monitorizar recursos locales y remotos. Por su parte, soluciones comerciales como **Azure Sentinel** ofrecen capacidades avanzadas de correlación de eventos, integrándose fácilmente en infraestructuras híbridas (on-premise y en la nube).

### 5. Gestión de incidentes y resiliencia

La monitorización no solo debe enfocarse en la detección, sino también en la gestión eficiente de incidentes. El **Lote 1 del Sistema Unificado de Tramitación (SUT)** proporciona un marco operativo para gestionar alertas e incidentes, coordinando las acciones entre diferentes niveles de la Administración Pública. Además, se deben realizar simulacros regulares para evaluar la capacidad de respuesta del sistema ante posibles incidentes.

### Conclusión

La implantación de una adecuada monitorización para un sistema requiere un enfoque integral que combine las medidas del ENS, herramientas avanzadas, y los servicios comunes y transversales de la Administración Pública. A través de soluciones como GLORIA y MONICA, protocolos seguros como SNMP v3, y herramientas complementarias como Nagios o Azure Sentinel, se garantiza no solo la detección y prevención de amenazas, sino también la resiliencia y disponibilidad del sistema.

Este enfoque proactivo y centralizado permite proteger un servicio clave para la ciudadanía, alineándose con las mejores prácticas internacionales y los estándares nacionales en materia de seguridad.

<a href="https://pmoreno-rodriguez.github.io/opos_gsi/#/plantillas/indice.md">Volver al índice</a>