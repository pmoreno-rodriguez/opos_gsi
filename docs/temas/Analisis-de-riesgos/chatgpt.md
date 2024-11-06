## Análisis de riesgos <!-- {docsify-ignore} -->

> [!TIP|style: callout|icon: fa fa-check|label: Contenido Verificado]
> Respuesta de ChatGPT para un Análisis de Riesgos de un sistema

El análisis de riesgos con la herramienta **PILAR** (Planificación, Identificación, Localización, Análisis y Resolución) del **Centro Criptológico Nacional (CCN)** sigue un enfoque estructurado para evaluar los riesgos de seguridad en la información y los sistemas informáticos. PILAR se basa en el **Esquema Nacional de Seguridad (ENS)** de España y proporciona una metodología detallada para identificar y gestionar riesgos. A continuación te explico cómo realizar un análisis de riesgos utilizando PILAR y los principales pasos a seguir:

### 1. **Configuración del Entorno** <!-- {docsify-ignore} -->
   - **Instalación de PILAR**: Primero, debes descargar e instalar la herramienta desde el sitio web del CCN-CERT.
   - **Definir el contexto**: Configura el proyecto del análisis de riesgos, especificando los parámetros generales, como el alcance del sistema que vas a evaluar (tipo de organización, normativa aplicable, etc.).

### 2. **Definición del Sistema a Analizar** <!-- {docsify-ignore} -->
   - **Identificación de Activos**: Define los activos que forman parte del sistema de información. Estos incluyen datos, aplicaciones, infraestructura tecnológica, y recursos humanos que son críticos para el funcionamiento del sistema.
   - **Clasificación de Activos**: Asigna a cada activo una categoría en función de su importancia o sensibilidad. PILAR usa las categorías de:
     - **Confidencialidad**: Protección de la información sensible.
     - **Integridad**: Garantía de que la información no ha sido alterada.
     - **Disponibilidad**: Asegurar que la información y servicios estén disponibles cuando se necesitan.

### 3. **Identificación de Amenazas** <!-- {docsify-ignore} -->
   PILAR tiene una base de datos predefinida de amenazas y vulnerabilidades, pero también puedes agregar amenazas específicas que consideres relevantes para tu entorno.
   - **Amenazas**: Identifica las posibles amenazas que podrían afectar los activos (malware, ataques físicos, fallos de hardware, errores humanos, etc.).
   - **Vulnerabilidades**: Determina las debilidades de tu sistema que podrían ser explotadas por las amenazas identificadas.

### 4. **Evaluación de Riesgos** <!-- {docsify-ignore} -->
   Una vez que las amenazas y vulnerabilidades están definidas, PILAR asigna automáticamente un valor de riesgo calculado en base a la probabilidad de que ocurra un incidente y el impacto que este tendría sobre los activos.
   - **Probabilidad**: PILAR estima cuán probable es que una amenaza específica se materialice en función de los controles y contramedidas actuales.
   - **Impacto**: Mide el daño potencial que una amenaza podría causar en los activos según su clasificación de confidencialidad, integridad y disponibilidad.
   - **Riesgo inherente**: PILAR muestra el riesgo sin aplicar contramedidas (nivel básico).
   - **Riesgo residual**: Tras aplicar controles de seguridad, el riesgo se reevalúa para mostrar el impacto mitigado.

### 5. **Valoración de los Controles de Seguridad** <!-- {docsify-ignore} -->
   PILAR te permite definir y evaluar los controles de seguridad ya implementados en el sistema.
   - **Contramedidas**: Configura las medidas de seguridad ya existentes o posibles, basadas en las recomendaciones del ENS y las normativas ISO 27001. Estas incluyen cortafuegos, cifrado, procedimientos de backup, etc.
   - **Evaluación de Controles**: PILAR evalúa la efectividad de los controles actuales, ajustando el nivel de riesgo residual después de su aplicación.

### 6. **Generación de Informes** <!-- {docsify-ignore} -->
   - **Mapa de Riesgos**: PILAR genera un mapa que muestra los riesgos clasificados por niveles de gravedad (bajo, medio, alto, crítico) según su probabilidad e impacto.
   - **Informe de Riesgos**: La herramienta genera un informe detallado del análisis, que incluye los activos, amenazas, vulnerabilidades, controles y las recomendaciones para mitigar los riesgos.
   - **Plan de Acción**: Finalmente, PILAR sugiere un plan de acción para gestionar los riesgos identificados, priorizando aquellos más críticos y definiendo cronogramas y responsables.

### 7. **Revisión y Actualización del Análisis** <!-- {docsify-ignore} -->
   - **Revisión periódica**: Es importante revisar y actualizar el análisis de riesgos periódicamente, especialmente si se producen cambios importantes en el sistema o en el entorno de amenazas.
   - **Monitorización**: Asegúrate de que los controles implementados se mantengan efectivos y que cualquier nuevo riesgo sea gestionado oportunamente.

### Resumen de los pasos principales: <!-- {docsify-ignore} -->
1. **Configuración del entorno y definición del sistema** (identificar y clasificar activos).
2. **Identificación de amenazas y vulnerabilidades**.
3. **Evaluación de riesgos** (probabilidad e impacto).
4. **Valoración y aplicación de controles de seguridad**.
5. **Generación de informes y mapa de riesgos**.
6. **Propuesta de plan de acción**.
7. **Revisión continua y actualizaciones del análisis**.

PILAR es una herramienta robusta que facilita la automatización del proceso de análisis de riesgos, ajustada al Esquema Nacional de Seguridad (ENS), y diseñada para apoyar a las organizaciones en la protección de sus sistemas de información.

La herramienta **AMPARO** del **Centro Criptológico Nacional (CCN)** es una solución que complementa el análisis de riesgos realizado con **PILAR** para garantizar el cumplimiento y alineación con el **Esquema Nacional de Seguridad (ENS)**. Mientras que **PILAR** se centra en el análisis y gestión de riesgos, **AMPARO** es más adecuada para facilitar la **implantación y seguimiento de las medidas de seguridad** derivadas de ese análisis, en el marco de las exigencias del ENS.

### Cómo se puede complementar AMPARO con el análisis de riesgos de PILAR: <!-- {docsify-ignore} -->

1. **Conexión entre análisis de riesgos y la implantación de controles**:
   - Después de realizar el análisis de riesgos con **PILAR**, donde se identifican amenazas, vulnerabilidades y se valoran los riesgos, es necesario implementar medidas de seguridad que mitiguen esos riesgos.
   - Aquí es donde entra **AMPARO**, que ayuda a implantar y gestionar los **controles de seguridad** recomendados según el ENS. AMPARO proporciona una **guía de medidas de seguridad** y permite verificar si están siendo implementadas correctamente, basándose en los niveles de riesgo identificados por PILAR.

2. **Verificación del cumplimiento del ENS**:
   - PILAR ofrece un análisis detallado de los riesgos en el contexto del ENS, clasificando activos y amenazas según criterios como **confidencialidad, integridad y disponibilidad**. Sin embargo, PILAR se enfoca más en la evaluación de riesgos, y **AMPARO** facilita el proceso de seguimiento para **garantizar que las medidas del ENS sean aplicadas** adecuadamente en función de los resultados del análisis de PILAR.
   - **AMPARO** proporciona **listas de verificación** alineadas con las medidas del ENS, permitiendo a las organizaciones verificar si están cumpliendo con los controles exigidos para mitigar los riesgos previamente identificados en el análisis.

3. **Plan de acción y seguimiento**:
   - Tras identificar los riesgos con PILAR y definir las contramedidas, AMPARO permite gestionar un **plan de acción continuo**, ayudando a las organizaciones a llevar un seguimiento de las tareas necesarias para cerrar brechas de seguridad. Esto incluye asignar responsabilidades y fechas límite para implementar las medidas correctivas.
   - La herramienta facilita el seguimiento de la implantación de controles mediante la creación de **informes de auditoría**, lo que permite verificar si se están aplicando las medidas de seguridad que el análisis de riesgos requiere.

4. **Automatización de la gestión del cumplimiento**:
   - Mientras que PILAR proporciona los detalles sobre los riesgos y las vulnerabilidades, **AMPARO automatiza el seguimiento del estado de cumplimiento**, asegurándose de que la organización está alineada con el ENS en cada momento.
   - **AMPARO** incluye funcionalidades para gestionar la **documentación y evidencia** del cumplimiento, lo cual es importante para las auditorías internas y externas.

5. **Monitorización continua y adaptación a cambios**:
   - Si después del análisis de riesgos con PILAR se producen cambios en la infraestructura o nuevos riesgos emergen, AMPARO facilita la **adaptación y reconfiguración** de las medidas de seguridad para mantenerse conforme al ENS.
   - AMPARO puede actuar como una herramienta de **monitorización continua**, ayudando a la organización a mantenerse proactiva frente a nuevos desafíos o modificaciones en los sistemas evaluados.

### Resumen del Complemento entre PILAR y AMPARO: <!-- {docsify-ignore} -->

| Aspecto            | **PILAR**                                  | **AMPARO**                                      |
|--------------------|--------------------------------------------|-------------------------------------------------|
| **Objetivo**        | Identificación, análisis y evaluación de riesgos. | Implantación y seguimiento de medidas del ENS.  |
| **Foco**            | Riesgos (amenazas, vulnerabilidades, controles). | Cumplimiento de medidas de seguridad ENS.       |
| **Salida**          | Informes de riesgos, mapa de riesgos, contramedidas. | Plan de acción, seguimiento de cumplimiento.    |
| **Revisión**        | Evaluación de riesgos periódica.            | Monitorización continua de controles ENS.       |
| **Aportación**      | Evaluación detallada del riesgo inherente y residual. | Verificación de la implantación de controles.   |
| **Automatización**  | Evaluación automatizada de riesgos.        | Gestión automatizada del cumplimiento.          |

### Ejemplo de cómo se complementan en la práctica: <!-- {docsify-ignore} -->
1. **Análisis de riesgos con PILAR**:
   - Se detecta que un servidor crítico tiene un alto riesgo de ataque por una vulnerabilidad de software.
   - PILAR recomienda medidas de seguridad como aplicar parches de seguridad, establecer controles de acceso más estrictos, y mejorar la monitorización del sistema.

2. **Implementación de las medidas con AMPARO**:
   - **AMPARO** ayuda a traducir esas recomendaciones en acciones concretas, como asegurarse de que los parches se apliquen a tiempo, que las políticas de acceso se implementen correctamente, y que las herramientas de monitorización estén activas.
   - AMPARO gestiona el seguimiento de estas acciones, asignando responsables, verificando el estado de cumplimiento y generando informes para asegurar que se mitigan los riesgos detectados.

En resumen, **PILAR y AMPARO** son herramientas complementarias que trabajan juntas para garantizar la seguridad de los sistemas de información según el ENS. Mientras **PILAR** se encarga del **análisis y evaluación de riesgos**, **AMPARO** se centra en la **gestión del cumplimiento** y el seguimiento de las medidas de seguridad para reducir esos riesgos.

La herramienta **ROCÍO** del **Centro Criptológico Nacional (CCN)** también puede utilizarse para complementar el análisis de riesgos realizado con **PILAR** y el seguimiento de medidas de seguridad con **AMPARO**, añadiendo un enfoque de gestión documental y planificación de la mejora continua en cuanto a **cumplimiento normativo** y **auditorías**.

### ¿Qué es ROCÍO y cómo complementa a PILAR y AMPARO? <!-- {docsify-ignore} -->

**ROCÍO** es una herramienta destinada a ayudar a las organizaciones a gestionar el cumplimiento normativo, facilitando la **gestión documental** y el seguimiento de las **auditorías de seguridad** en relación con el **Esquema Nacional de Seguridad (ENS)**. También permite llevar un control más eficaz del **Plan de Adecuación** y de los procesos de mejora continua en seguridad de la información.

### Cómo ROCÍO complementa el análisis de riesgos y las herramientas PILAR y AMPARO: <!-- {docsify-ignore} -->

1. **Gestión Documental**:
   - Tras el análisis de riesgos con **PILAR** y la implementación de medidas correctivas con **AMPARO**, **ROCÍO** facilita la **gestión y almacenamiento de la documentación** relacionada con los controles, auditorías y procesos de cumplimiento del ENS.
   - ROCÍO permite organizar y centralizar documentos como **políticas de seguridad**, **planes de acción**, **informes de auditoría**, y cualquier otro documento que justifique el cumplimiento con el ENS.

2. **Seguimiento del Cumplimiento Normativo**:
   - **PILAR** evalúa los riesgos, **AMPARO** ayuda a implementar las medidas del ENS, y **ROCÍO** permite realizar un **seguimiento sistemático del cumplimiento** a lo largo del tiempo. Esta herramienta proporciona una visión global del estado de adecuación de la organización al ENS, y permite auditar el nivel de implementación de los controles de seguridad recomendados.
   - ROCÍO ofrece una **gestión del ciclo de vida** de las auditorías, desde la planificación hasta la remediación de no conformidades, asegurando que los controles se revisen y actualicen de acuerdo con los cambios en los riesgos y las normativas.

3. **Mejora continua y Plan de Adecuación**:
   - Después de identificar los riesgos y establecer controles, ROCÍO facilita la creación de un **Plan de Adecuación** que establece los pasos a seguir para cumplir plenamente con el ENS. Este plan puede gestionarse y actualizarse continuamente en ROCÍO, de manera que refleje el estado actual de las acciones realizadas y pendientes.
   - La herramienta también permite realizar un seguimiento de las **no conformidades** detectadas en las auditorías, coordinando las acciones correctivas y verificando su implementación en tiempo y forma.

4. **Auditorías internas y externas**:
   - ROCÍO apoya el proceso de **auditoría** al permitir a las organizaciones llevar un registro exhaustivo de las revisiones internas y externas de los sistemas de seguridad.
   - Además, facilita la **planificación** de auditorías periódicas para asegurarse de que los sistemas cumplan con el ENS y otros marcos regulatorios, generando informes de progreso y de estado que se pueden utilizar en auditorías externas.

5. **Monitorización del cumplimiento a largo plazo**:
   - Mientras que **PILAR** se enfoca en el análisis de riesgos y **AMPARO** en la implementación de controles, ROCÍO se centra en la **gestión a largo plazo del cumplimiento**. Permite la revisión periódica de los controles implementados y el estado de las políticas de seguridad, facilitando la mejora continua.
   - **ROCÍO** puede alertar sobre la necesidad de revisar los controles o adaptar las medidas en caso de cambios en el contexto de riesgos o normativo, proporcionando una **gestión proactiva** del cumplimiento.

### Integración y Complemento entre PILAR, AMPARO y ROCÍO: <!-- {docsify-ignore} -->

1. **Análisis de Riesgos con PILAR**:
   - PILAR identifica y evalúa riesgos en base a amenazas y vulnerabilidades, proponiendo medidas correctivas. Genera un informe de riesgos que incluye recomendaciones de mitigación.

2. **Gestión de Contramedidas con AMPARO**:
   - AMPARO toma las recomendaciones de PILAR y gestiona la **implementación** de las medidas de seguridad alineadas con el ENS. Hace un seguimiento de las acciones correctivas y facilita el cumplimiento de los controles de seguridad.

3. **Gestión Documental y Auditorías con ROCÍO**:
   - ROCÍO complementa este ciclo proporcionando un marco para la **gestión documental**, **seguimiento del cumplimiento normativo** y planificación de **auditorías**. Además, ayuda a gestionar el **Plan de Adecuación** a largo plazo y asegura que se mantenga el cumplimiento continuo del ENS.
   - ROCÍO también facilita la **coordinación entre diferentes actores** en la organización, asegurando que las tareas de cumplimiento y auditoría estén claras y se realicen en los tiempos estipulados.

### Flujo Integrado de Herramientas: <!-- {docsify-ignore} -->

1. **PILAR**: Identifica y evalúa riesgos.
2. **AMPARO**: Implementa y gestiona controles de seguridad según el ENS.
3. **ROCÍO**: Organiza la gestión documental, facilita las auditorías, y gestiona el Plan de Adecuación.

### Ejemplo Práctico de Complementariedad: <!-- {docsify-ignore} -->

1. **Fase 1 (Análisis de Riesgos con PILAR)**:
   - Se detecta un riesgo alto de pérdida de datos críticos por un fallo en los backups.
   - PILAR recomienda implementar políticas de copias de seguridad y controles adicionales.

2. **Fase 2 (Implementación de Controles con AMPARO)**:
   - **AMPARO** gestiona la implementación de una política de backup segura y la instalación de herramientas de monitorización para garantizar que los datos se respalden de manera continua y segura.
   - Se asignan responsables para estas tareas y se hace seguimiento a su correcta ejecución.

3. **Fase 3 (Auditoría y Gestión Documental con ROCÍO)**:
   - **ROCÍO** documenta las políticas de backup implementadas y facilita el registro de auditorías internas para comprobar su cumplimiento.
   - La herramienta gestiona las evidencias documentales de auditorías, revisiones periódicas y asegura que se sigue el Plan de Adecuación al ENS.

### Resumen: <!-- {docsify-ignore} -->
- **PILAR** se utiliza para **evaluar riesgos** y proponer controles.
- **AMPARO** gestiona la **implementación y seguimiento** de esos controles, asegurando el cumplimiento del ENS.
- **ROCÍO** complementa a PILAR y AMPARO facilitando la **gestión documental**, el **control de auditorías**, y el seguimiento del **Plan de Adecuación**, asegurando un cumplimiento normativo a largo plazo y la mejora continua en la seguridad.

En conjunto, estas herramientas proporcionan un enfoque integral para la **gestión de riesgos**, la **implementación de medidas de seguridad** y el **cumplimiento normativo continuo**, lo que es esencial para organizaciones que deben seguir el ENS o cualquier normativa de seguridad rigurosa.
