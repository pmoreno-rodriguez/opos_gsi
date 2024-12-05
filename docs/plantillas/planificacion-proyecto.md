> [!NOTE|style:callout|label: Plantilla Genérica]
> Plantilla genérica para Planificación de Proyecto de Comunicaciones, Seguridad y Sistemas.

## Fase 1: Planificación inicial (EL QUÉ VAS A HACER)

1. **Análisis de Requisitos**:
    * Identificar las necesidades técnicas de comunicación, seguridad y sistemas.
    * Realizar entrevistas con los responsables de las áreas clave.
    * Recopilar datos sobre el estado actual de las infraestructuras y servicios.

2. **Definición del Alcance**:
    * Especificar los objetivos del proyecto (construcción desde cero, o mejorar la conectividad de una instalación ya hecha, reforzar la seguridad, optimizar la interoperabilidad). (hay que saber lo que se quiere y lo que se puede)
    * Determinar las limitaciones técnicas y presupuestarias. (requisitos no funcionales)

3. **Asignación de Recursos**:
    * Determinar el presupuesto disponible.
    * Identificar los equipos humanos y tecnológicos necesarios.

4. **Elaboración del Cronograma** (diagrama de Gantt pero no lo hacemos, lo contamos con texto de esta manera):
    * Establecer hitos del proyecto y sus respectivas fechas.
    * Asignar responsabilidades a cada equipo involucrado. (las responsabilidades de equipos y trabajadores deben estar perfectamente explicitadas por escrito)

5. **Elaborar plan de mantenimiento**

## Fase 2: Diseño de la arquitectura de sistemas (incluyendo comunicaciones, hardware, seguridad, etc) (CÓMO LO VAS A HACER)

1. **Integración de los Sistemas**:
    * Diseñar cómo se integrarán los sistemas nuevos con los ya existentes.
    * Especificar estándares y protocolos de interoperabilidad.
    * Especificar coexistencia entre sistemas nuevos y antiguos (hasta la retirada de los sistemas antiguos que corresponda, en caso de que no se mantengan todos los antiguos)

2. **Diseño de la nueva Red de Comunicaciones** (seguramente será una red evolucionada donde ciertos sistemas antiguos se retirarán y otros permanecerán):
    * Diseñar una red robusta, con redundancia, que cubra tanto la sede central como las sedes periféricas por España si las hubiese (diseño de red integral).
    * Diseñar implementación de VPNs para las conexiones remotas seguras. (tanto VPN de acceso remoto para teletrabajadores, como VPN sitio a sitio para conectar sedes (VPLS o VPRN de tipo MPLS)).

3. **Diseño de Sistemas de Seguridad**:
    * Incorporar cortafuegos (UTM o si hay mucho tráfico NGFW), sistemas de detección y prevención de intrusiones (IDS/IPS), las soluciones de seguridad del CCN-CERT, sondas del CCN-CERT, monitorización con Gloria o Monica, Carmen, instalar Claudias.
    * Planificar la implementación de sistemas de autenticación multifactor.
    * Diseñar comunicación con el CCN-CERT (Lucía) y el COCS, integrar en estos aspectos a tu CSIRT (tu equipo interno de seguridad).

## Fase 3: Implementación de todo lo anterior

* Instalación de toda la infraestructura física (hardware de red o electrónica de red (switches, routers, etc.)) + interconexión con sistemas antiguos que vayan a permanecer o vayan a retirarse (recordamos que tendremos una fase de coexistencia con los que se retiren).
* Configuración de todos los elementos del punto anterior.
* Despliegue de las herramientas de gestión y monitorización de todo lo anterior.

**(SE PODRÍA HABER HECHO PERFECTAMENTE UNA PRUEBA PILOTO DE ALCANCE LIMITADO)**

## Fases

### Fase 4. Pruebas y validación [EN PARALELO A ESTO VAMOS FORMANDO AL PERSONAL]

* **Pruebas de conectividad**: Comprobar la estabilidad y velocidad de las conexiones entre todas las oficinas.
  * [PRUEBAS DE CARGA Y SOBRECARGA OPCIONALES]

* **Pruebas de Seguridad**:
  * Evaluar la eficacia de los sistemas de seguridad implementados.
  * Simular ataques para medir la respuesta de los sistemas. (pentests, tests de penetración).

* **Pruebas de Interoperabilidad**: Comprobar que todos los sistemas funcionan coordinados.

* **Validación de Usuarios**:
  * Obtener retroalimentación de los usuarios avanzados.
  * Realizar ajustes basados en los resultados de las pruebas.

### Fase 5. PUESTA EN PRODUCCIÓN (EN ESTA FASE HAY COEXISTENCIA CON SISTEMAS ANTIGUOS QUE SE VAYAN A RETIRAR, POR SUPUESTO HAY COEXISTENCIA CON LOS SISTEMAS ANTIGUOS QUE PERMANEZCAN ESTO ES DE PEROGRULLO)

* MIGRAMOS LENTAMENTE (EN FASES PROGRESIVAMENTE) [MONITORIZAMOS CONSTANTEMENTE PARA TOMAR MEDIDAS RÁPIDAMENTE EN CASO DE INCIDENCIAS]

### Fase 6. RETIRADA PROGRESIVA DE LOS SISTEMAS QUE NO VAYAN A PERMANECER

### Fase 7. FUNCIONAMIENTO ESTÁNDAR, MANTENIMIENTO CONTINUO Y MEJORA CONTINUA

* Durante todo el ciclo de vida de los sistemas, haremos monitorización continua para obtener retroalimentación (feedback), también retroalimentación de los usuarios, todo ello para implementar mejoras evolutivas y realizar ajustes dinámicos.

**(Una vez acabada la planificación/migración de sistemas se puede acabar con un informe)**

<a href="https://pmoreno-rodriguez.github.io/opos_gsi/#/plantillas/indice.md">Volver al índice</a>