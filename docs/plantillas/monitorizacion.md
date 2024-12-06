> [!NOTE|style:callout|label: Plantilla Genérica]
> Plantilla genérica para Monitorización y Alertas de sistemas críticos.

# Monitorización y Alertas de los Sistemas Críticos en una Red LAN de una Organización

La monitorización y alertas de sistemas críticos en una red LAN de una organización implica implementar herramientas y procesos para supervisar tanto el hardware como el software de manera proactiva. Aquí tienes un enfoque completo:

## 1. Identificación de Sistemas Críticos

- **Hardware Crítico**: Servidores, switches, routers, firewalls, sistemas de almacenamiento (NAS/SAN), UPS.
- **Software Crítico**: Sistemas operativos, bases de datos, aplicaciones empresariales (ERP, CRM), herramientas de comunicación (VoIP, correo), servicios en la nube.

## 2. Objetivos de la Monitorización

- **Disponibilidad**: Comprobar que los servicios y hardware estén operativos.
- **Rendimiento**: Detectar cuellos de botella en CPU, RAM, disco y red.
- **Seguridad**: Identificar accesos no autorizados, actividad sospechosa o malware.
- **Capacidad**: Evaluar que el sistema tiene capacidad para cumplir el uso actual y planificar futuras expansiones.
- **Cumplimiento normativo y de estándares**: Asegurar que los sistemas cumplen con normativas (ISO 27001, GDPR).
- **Confidencialidad**: los datos confidenciales críticos permanecen a salvo.

## 3. Parámetros a Monitorizar

### Hardware

- **Servidores**:
  - Temperatura de CPU y RAM.
  - Uso de CPU, RAM, y almacenamiento.
  - Estado de discos (S.M.A.R.T.).
  - Eventos del sistema (logs de hardware).

- **Red**:
  - Uso de ancho de banda en switches y routers.
  - Latencia y pérdida de paquetes.
  - Estado de interfaces (up/down).

- **Sistemas de Alimentación**:
  - Nivel de carga en UPS.
  - Eventos de fallo eléctrico.

- **Sistemas de Almacenamiento**:
  - Espacio disponible.
  - Tasa de IOPS (operaciones de entrada/salida por segundo).

### Software

- **Servicios**:
  - Estado de bases de datos (Oracle, MySQL, PostgreSQL).
  - Disponibilidad de servicios web (HTTP/S).
  - Funcionamiento de aplicaciones críticas (ERP, CRM).

- **Seguridad**:
  - Actualizaciones pendientes.
  - Alertas de antivirus/antimalware.
  - Accesos fallidos (eventos en logs).
  - Alertas de los antivirus de los hosts (de los endpoints).
  - Alertas de las sondas SAT del CCN-CERT a través de la herramienta Lucía.
  - Alertas de los IDS/IPS (tanto fuera como dentro de los firewalls (UTMs)).

- **Red**:
  - Monitoreo de firewall (reglas activas, eventos).
  - Detección de intrusiones (IDS/IPS).
  - DNS y DHCP.

## 4. Herramientas de Monitorización

### Open Source
- **Zabbix, Nagios, Icinga + Grafana**: Para monitorizar servidores, aplicaciones y redes, supervisión de hardware y servicios.
- **Prometheus + Grafana**: Monitorización avanzada con visualización personalizada.
- **Elasticsearch + Kibana + Logstash + Beats (ELK Stack)**: Análisis de logs.
- **Pandora FMS (Flexible Monitoring System)**.
- **Gloria/Monica, Carmen y las sondas Claudia**: Monitorización de seguridad de la administración.

### Comerciales
- **SolarWinds**: Herramientas completas para red, servidores y aplicaciones.
- **Paessler PRTG**: Solución integral para monitorización.
- **Datadog**: Monitorización basada en la nube para infraestructuras híbridas.

## 5. Sistema de Alertas

- **Umbrales**: Configurar límites críticos para cada parámetro (ej., uso de CPU > 90% durante 5 minutos).

- **Notificaciones**:
  - Email, SMS, aplicaciones de mensajería (Slack, Microsoft Teams).
  - Escalado de alertas: primero al equipo técnico, luego al responsable.

- **Dashboards (cuadros de mando) en Tiempo Real**:
  - Centralización de métricas clave en una pantalla visible para el equipo.

## 6. Procedimientos de Respuesta

- **Planes de Acción**:
  - Identificar responsables de cada tipo de fallo.
  - Procedimientos de recuperación: reinicio de servicios, actualización de firmware.

- **Pruebas Periódicas**:
  - Simulaciones de fallos para comprobar la efectividad del sistema de alertas.

## 7. Buenas Prácticas

- **Redundancia**:
  - Configurar hardware redundante (servidores, fuentes de alimentación).

- **Backups**:
  - Monitorizar y probar las copias de seguridad regularmente.

- **Auditorías**:
  - Revisar configuraciones de monitorización trimestralmente.

- **Seguridad**:
  - Monitorear accesos privilegiados y cambios en la configuración.

<a href="https://pmoreno-rodriguez.github.io/opos_gsi/#/plantillas/indice.md">Volver al índice</a>
