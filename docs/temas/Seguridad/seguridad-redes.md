## La Seguridad en las Redes <!-- {docsify-ignore} -->

Las infraestructuras TIC operan en un entorno hostil en el que las amenazas y riesgos comprometen su utilidad, en forma de ciberincidentes.

Los tipos de ataques en las redes son:

1. **Interrupción**: Ataque a la disponibilidad de un sistema con el fin de destruir o dejar inutilizable/no disponible.
2. **Interceptación**: Ataque a la confidencialidad donde no hay una alteración del sistema, uno de los ejemplos más conocidos es el acceso a la base de datos.
3. **Modificación**: Ataque contra la integridad de un sistema en el que se accede a un recurso y se manipula.
4. **Suplantación o Fabricación**: Ataque contra la autenticidad en la que el atacante añade información falsificada, por ejemplo, suplantación de una dirección IP.

La guía CCN-STIC 817 Gestión de ciberincidentes resume en la siguiente tabla la clasificación de los ciberincidentes atendiendo a la ruta o camino que utiliza un atacante para tener acceso al activo atacado (vector de ataque).

| **Vector de ataque**               | **Descripción**                                                                                           | **Tipo de ciberincidente**                                                                                  |
|------------------------------------|-----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Código dañino**                  | Software cuyo objetivo es infiltrar o dañar un ordenador, servidor u otro dispositivo de red, sin el conocimiento de su responsable o usuario y con finalidades muy diversas. | - Virus<br>- Gusanos<br>- Troyanos<br>- Spyware<br>- Rootkit<br>- Ransomware<br>- Remote Access Tools (RAT)           |
| **Disponibilidad**                 | Ataques dirigidos a poner fuera de servicio los sistemas, al objeto de causar daños en la productividad y/o la imagen de las instituciones atacadas. | - Denegación de servicio (DoS) y Denegación de servicio distribuida (DDoS)<br>- Fallo (HW/SW)<br>- Error humano<br>- Sabotaje |
| **Obtención de información**       | Ataques dirigidos a recabar información fundamental que permita avanzar en ataques más sofisticados, a través de ingeniería social o de identificación de vulnerabilidades. | - Identificación de vulnerabilidades (scanning)<br>- Sniffing<br>- Ingeniería social<br>- Phishing          |
| **Intrusiones**                   | Ataques dirigidos a la explotación de vulnerabilidades de diseño, de operación o de configuración de diferentes tecnologías, al objeto de introducirse de forma fraudulenta en los sistemas de una organización. | - Compromiso de cuenta de usuario<br>- Cross-Site Scripting (XSS)<br>- Cross-Site Request Forgery (CSRF, Falsificación de petición entre sitios cruzados)<br>- Inyección SQL<br>- Spear Phishing<br>- Pharming<br>- Ataque de fuerza bruta<br>- Inyección de ficheros remota<br>- Explotación de vulnerabilidad sw<br>- Explotación de vulnerabilidad hw |
| **Compromiso de la información**    | Incidentes relacionados con el acceso y fuga (Confidencialidad), modificación o borrado (Integridad) de información no pública. | - Acceso no autorizado a la información<br>- Modificación y borrado no autorizada de información<br>- Publicación no autorizada de información<br>- Exfiltración de información |
| **Fraude**                         | Incidentes relacionados con acciones fraudulentas derivadas de suplantación de identidad, en todas sus variantes. | - Suplantación/Spoofing<br>- Uso de recursos no autorizado<br>- Uso ilegítimo de credenciales<br>- Violaciones de derechos de propiedad intelectual o industrial. |
| **Contenido abusivo**              | Ataques dirigidos a dañar la imagen de la organización o a utilizar sus medios electrónicos para otros usos ilícitos (tales como la publicidad, la extorsión o, en general, la ciberdelicuencia). | - Spam (Correo basura)<br>- Acoso/ extorsión/ mensajes ofensivos<br>- Pederastia/ racismo/ apología de la violencia, etc. |
| **Política de seguridad**          | Incidentes relacionados por violaciones de usuarios de las políticas de seguridad aprobadas por la organización. | - Abuso de privilegios por usuarios<br>- Acceso a servicios no autorizados<br>- Sistema desactualizado      |
| **Otros**                          | Otros incidentes no incluidos en los apartados anteriores.                                              |                                                                                                              |
---

En base al art 33 del ENS, Para la gestión de los incidentes, depende del tipo de gravedad, hay que contar con el apoyo de:
- CCN-CERT: en el ámbito de AAPP´s y organismos públicos.
- CNPIC: para las infraestructuras críticas y servicios esenciales.
- INCIBE: Pymes y ciudadanos.
- Mando Conjunto del Ciberespacio, MCCE: en materia de ciberdefensa.
Para dar cumplimiento al RD 43/2021, se utilizará una única Plataforma Nacional de comunicación de incidentes para apoyar la coordinación y cooperación, y se creará una red nacional de SOCs.

### Normativa de Seguridad <!-- {docsify-ignore} -->

El **ENS** es normativa de **obligado cumplimiento** para el ámbito del sector público definido en la ley 40/2015, e **ISO/IEC 27000** es una familia de estándares de certificación **voluntaria**. No obstante, el ENS establece la obligatoriedad de establecer un proceso integral de seguridad, indicando en su artículo 27 que el proceso integral de seguridad implantado deberá ser actualizado y mejorado de forma continua aplicándose criterios y métodos reconocidos en la práctica nacional. 

En este sentido, la familia de normas ISO 27000 goza de gran reconocimiento, y contiene buenas prácticas para desarrollar, implementar y mantener los SGSI (Sistemas de gestión de la seguridad de la información). Se enfocan en procesos de mejora continua (círculo de Deming: Plan – Do – Check – Act). 

Las principales normas de la familia 27000 relacionadas con seguridad en las redes, son:

| **Norma**           | **Descripción**                                                                                                                                  | **Certificable** |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| **ISO/IEC 27000**    | Vocabulario estándar para el SGSI. Introducción y base para el resto.                                                                            | No               |
| **ISO/IEC 27001**    | Establece un marco general para la gestión de la seguridad de la información, que incluye la protección de redes.                               | Sí               |
| **ISO/IEC 27002**    | Ofrece directrices detalladas sobre controles de seguridad, muchos de los cuales están relacionados con la seguridad de redes, como la gestión de acceso, la protección de la red, y la seguridad de los datos en tránsito. | No               |
| **ISO/IEC 27005**    | Publicada en 2011 (primera edición), 2008 (segunda edición) y 2018 última versión. Proporciona directrices para la gestión del riesgo en la seguridad de la información. | No               |
| **ISO/IEC 27033**    | Serie más específica en cuanto a la seguridad de redes dentro de la familia 27000. Dividida en varias partes que abarcan los conceptos generales de seguridad de redes, diseño y arquitectura segura, y directrices para la implementación de controles. | No               |

Dentro del **ENS** como normativa de obligado cumplimiento, deberemos atender a las medidas de seguridad en función de la categorización que hayamos obtenido. En relación con la seguridad en las redes podemos destacar las siguientes medidas:

#### Protección de las Comunicaciones (mp.com)
Para proteger las comunicaciones en las redes, asegurando que los datos transmitidos sean seguros y confiables. Esto se conseguirá con un perímetro seguro que separe la red interna del exterior. Se tiene previsto una ITS de interconexión de redes para profundizar en los requisitos de estos perímetros.

#### Control de Accesos (op.acc)
Para proteger el acceso a las redes y a los recursos que en ellas se encuentran, previniendo accesos no autorizados, implementando mecanismos de control de acceso a las redes, como autenticación de usuarios y dispositivos, listas de control de acceso (ACL) y segmentación de la red, para limitar el acceso solo a usuarios autorizados.

#### Monitorización del sistema (op.mon)
Medidas destinadas a la monitorización continua de la red para detectar y responder a incidentes de seguridad. Por ejemplo, mediante mecanismos que detecten intrusiones (IDS, IPS, sistemas de vigilancia, instauración de métricas que sirvan para evaluar la eficiencia del sistema…).

#### Gestión de la configuración de seguridad (op.exp.3)
Para que las redes y sus componentes estén configurados de manera segura. Asegurando que los dispositivos de red, como routers y switches, estén configurados de manera segura, desactivando servicios innecesarios y aplicando contraseñas robustas y actualizadas.

Además, para la gestión de seguridad de las redes, destacan las siguientes guías:

- **Guía CCN-STIC-801**: Responsabilidades y Funciones
- **Guía CCN-STIC-807**: Criptología de empleo en el ENS
- **Guía CCN-STIC-811**: Interconexión en el ENS
- **Guía CCN-STIC-817**: Gestión de Ciberincidentes

**MAGERIT** es una metodología desarrollada por CCN para la gestión de riesgos en los sistemas de información, lo cual incluye la seguridad de las redes. Esta metodología proporciona un marco estructurado para identificar, analizar y gestionar riesgos en cualquier componente del sistema de información, incluidas las infraestructuras de red. Además, facilita el cumplimiento de normativas y estándares relacionados con la seguridad en redes, como **ISO/IEC 27001** o la **Directiva NIS**.

A nivel europeo, la **Estrategia de Ciberseguridad de la UE (2020)** establece la dirección futura de las políticas y normativas de ciberseguridad en la UE, incluyendo la protección de redes y la cooperación transfronteriza. En el marco de la UE, además, destacan las siguientes normas:

- **Directiva NIS2** (Directiva de Seguridad de Redes y Sistemas de Información): tiene como objetivo fortalecer la ciberseguridad en la Unión Europea. Se enfoca en proteger a las empresas y servicios esenciales, como los sectores de energía, transporte, salud, y otros.
- **Cybersecurity Act** (Reglamento 2019/881): Fortalece el mandato de la Agencia de la Unión Europea para la Ciberseguridad (ENISA) y establece un marco europeo de certificación de ciberseguridad.

### Herramientas de Prevención <!-- {docsify-ignore} -->

#### Cortafuegos

Los cortafuegos son herramientas esenciales para proteger redes mediante el control de acceso entre distintos segmentos. Han evolucionado, integrando funcionalidades como sistemas de detección y prevención de intrusiones (IDS/IPS). Según la **Guía CCN-STIC-811**, los cortafuegos desempeñan un papel clave en la protección perimetral de las redes.

**Modo de funcionamiento típico**:
- Los cortafuegos operan mediante una lista de patrones y acciones asociadas (como **DENY** o **ACCEPT**).
- El tráfico se analiza en función de estos patrones, aplicando las acciones predefinidas o una acción por defecto (como **DENY ALL** o **ACCEPT ALL**).
  
Al configurar cortafuegos, existen dos políticas principales:
1. **Política restrictiva** (más segura): solo permite el tráfico autorizado; el resto se bloquea.
2. **Política permisiva**: permite todo el tráfico, salvo el explícitamente bloqueado.

Además de filtrar tráfico, los cortafuegos pueden ofrecer servicios como **NAT**, **VPN** y sistemas **IPS/IDS**.

**Tipos de cortafuegos según el nivel de operación**:
- **Firewall de red**: filtra paquetes según información de cabeceras IP/TCP.
  - **Stateless**: analiza paquetes de forma independiente.
  - **Stateful**: analiza el estado de las sesiones y detecta más ataques.
- **Firewall de nivel de aplicación**: analiza protocolos específicos (HTTP, FTP, etc.) y realiza un análisis más detallado, permitiendo detectar virus o prohibir descargas.

#### Control de Accesos

El control de acceso se fundamenta en tres componentes clave: autenticación, autorización y trazabilidad (accounting).

1. **Autenticación**: verifica la identidad del usuario.
2. **Autorización**: otorga permisos de acceso a activos de información.
3. **Accounting**: registra la actividad de los usuarios.

##### Modelos de políticas de control de acceso

Existen tres modelos principales de control de acceso:

- **Modelo Discrecional (DAC)**: el propietario de un activo decide quién tiene acceso.
- **Modelo No Discrecional o Mandatorio (MAC)**: el sistema gestiona el acceso centralizado basado en permisos asignados.
- **Modelo Basado en Roles (RBAC)**: el sistema asigna roles a los usuarios, y a cada rol se le otorgan derechos. Es más eficiente y práctico que los modelos anteriores.

##### Factores de autenticación

Existen diferentes categorías de autenticación:
1. **Factor de conocimiento**: algo que el usuario sabe (contraseñas, PIN).
2. **Factor de posesión**: algo que el usuario tiene (tarjetas, tokens).
3. **Factor de inherencia**: algo que el usuario es (biometría: huella dactilar, reconocimiento facial).

Se considera **autenticación fuerte** cuando se usan al menos dos factores diferentes. Según el ENS, los usuarios externos requieren autenticación fuerte para niveles de protección medio o alto, mientras que los usuarios internos deben utilizar doble factor para accesos desde zonas no controladas.

### Detección y Prevención de Intrusiones <!-- {docsify-ignore} -->

Las herramientas de detección y prevención de intrusiones son esenciales para la protección de redes, ya que analizan el tráfico y lo comparan con bases de datos de patrones de ataque conocidos. La **frecuencia de actualización** de estas herramientas es crucial para su efectividad, debido a la constante evolución de las amenazas. La **Guía CCN-STIC-432** aborda en profundidad la seguridad perimetral y el uso de sistemas IDS.

#### Tipos de herramientas de detección y prevención

1. **Detección de intrusiones (IDS)**: 
   - Son sistemas pasivos cuyo propósito es **detectar** intrusiones ya ocurridas o en curso.
   - Su función principal es la **generación de alarmas** o notificaciones, permitiendo a otras herramientas o personas tomar las acciones correctivas necesarias.
   - No impiden directamente el ataque, solo lo detectan para que otros actores puedan responder.

2. **Prevención de intrusiones (IPS)**: 
   - Son sistemas activos diseñados para **prevenir** que las intrusiones lleguen a materializarse.
   - A diferencia de los IDS, los IPS tienen capacidad de acción directa, por ejemplo, ejecutando scripts que pueden añadir reglas a un cortafuegos y **bloquear a un atacante**.
   - Al igual que los IDS, también generan alarmas o notificaciones, pero su enfoque es más preventivo.

3. **Sistemas IDS/IPS**: 
   - Estas herramientas combinan las funcionalidades tanto de los **IDS** como de los **IPS**, permitiendo tanto la detección como la prevención de ataques en un solo sistema.

#### Gestión centralizada y otras tecnologías complementarias

Además de los sistemas IDS/IPS, es fundamental contar con **gestores de eventos (SIEM)**, que permiten la **gestión centralizada de logs** provenientes de múltiples sistemas, incluyendo IDS e IPS. Estos gestores facilitan el análisis y correlación de eventos, mejorando la capacidad de respuesta ante incidentes de seguridad.

Para organizaciones que emplean **servicios basados en la nube**, es necesario adoptar enfoques avanzados de seguridad como la **red de confianza cero (Zero Trust Network, ZTN)**. Este enfoque se basa en la **autenticación mutua**, que verifica la **identidad e integridad** de los dispositivos y usuarios, independientemente de su ubicación, garantizando que solo los usuarios y dispositivos de confianza puedan acceder a las aplicaciones y servicios.

Finalmente, el uso de **CASB (Cloud Access Security Broker)** es una medida adicional para monitorizar la actividad de los usuarios en la nube. Estos servicios permiten:
- **Notificar a los administradores** sobre acciones potencialmente peligrosas.
- Aplicar las **políticas de seguridad** definidas.
- Prevenir acciones que puedan comprometer la seguridad de la organización.

### Medidas Específicas para las Comunicaciones Móviles <!-- {docsify-ignore} -->

La **Guía CCN-STIC 496** proporciona un marco de seguridad para los **Sistemas de Comunicaciones Móviles** seguras. Esta guía establece la obligación de que cada organismo implemente una política específica para los sistemas de información en movilidad, alineada con la política de seguridad de la información general de la organización.

#### Bloques Funcionales y Recomendaciones

La guía define una serie de **bloques funcionales** clave del sistema de comunicaciones móviles y las recomendaciones asociadas a cada uno:

1. **Dispositivo**: El punto más crítico del sistema. Se recomienda el uso de **hardware y software de confianza**, así como la implementación de un mecanismo de **autenticación fuerte** con la red corporativa.

2. **Red Móvil**: Se debe tratar como una red **potencialmente comprometida o no fiable**.

3. **Red Corporativa**: Generalmente ya está desplegada, pero debe adaptarse a las necesidades de la red móvil.

4. **Router**: Este equipo separa el tráfico con destino a la red corporativa, y se considera la posible inclusión de un **IPS** (Sistema de Prevención de Intrusiones).

5. **Firewall de la Red Móvil**: Actúa como la **primera barrera de protección** bajo el control de la organización.

6. **Firewall Externo DMZ**: Solo permite el tráfico entrante o saliente a través de un **VPN** bajo protocolos específicos.

7. **Firewall Interno DMZ**: La última protección de la **DMZ externa**, que protege el tráfico VPN de envíos no legítimos desde la red corporativa interna.

8. **VPN**: Se implementa como extremo en la sede de la organización, garantizando una comunicación segura.

9. **Proxy / Pasarela de Servicios Corporativos**: Proporciona acceso a servicios internos en movilidad, como **correo electrónico**, gestión de archivos y web.

10. **Servidor SIP**: Se encarga de la **gestión de identidades y permisos** para la mensajería entre dispositivos.

11. **Pasarela de Telefonía**: Establece la conexión con la **red de telefonía corporativa**.

12. **Zona de Gestión Interna**: Gestiona a los usuarios desde el punto de vista de la organización.

13. **Firewall de la Red Corporativa**: Marca el inicio de la red corporativa interna.

#### Herramientas MTD (Mobile Threat Defense)

Actualmente, tanto la **Administración General del Estado (AGE)** como muchas corporaciones privadas están adoptando herramientas **MTD (Mobile Threat Defense)** para proteger los **dispositivos móviles** y no solo las comunicaciones. Los dispositivos móviles están expuestos a varios **vectores de ataque**, como:

- Ataques de **acceso físico** al dispositivo (fuerza bruta, dispositivos sin pantalla de bloqueo).
- **Explotaciones de vulnerabilidades** del sistema operativo o de aplicaciones instaladas.
- **Aplicaciones maliciosas**, que pueden encontrarse incluso en tiendas oficiales, escapando a los controles de Google y Apple.
- **Ataques de red**.

Las herramientas MTD se integran habitualmente con **EMM (Enterprise Mobility Management)** para distribuir políticas de seguridad a todos los terminales de la organización. Estas herramientas ofrecen:

- **Detección de anomalías**.
- **Análisis de comportamiento** inteligente basado en perfiles.
- **Prevención de intrusiones**.
- **Firewall de host**.

Estas medidas ayudan a mitigar el riesgo de **pérdida o robo de información corporativa** valiosa y evitan accesos no autorizados a la red interna que puedan originarse desde dispositivos corporativos.

#### OWASP y la Seguridad de Aplicaciones Móviles

El proyecto **OWASP (Open Web Application Security Project)**, que se centra en la seguridad de aplicaciones web y móviles, actualizó en 2024 su lista de los **Top 10 mobile risks**. Esta actualización incluye medidas y recomendaciones para evitar vulnerabilidades en las comunicaciones móviles, enfocándose en la seguridad de las redes dentro de infraestructuras móviles.