## Análisis de Sistemas de Información utilizando Métrica V3 <!-- {docsify-ignore} -->

### ASI 01: Definición del Sistema :class=titulo-color 
#### Descripción
Para realizar esta actividad, se basa en los productos obtenidos del Estudio de Viabilidad del Sistema (EVS). En esta fase, se organizan sesiones de trabajo con el jefe de proyecto, analistas, directores de usuarios y equipo de soporte técnico.

Se debe:

- **Determinar el alcance del sistema**, identificando procesos y entidades externas que aportan o reciben información.
- Si el proyecto es orientado a objetos, se debe realizar un **modelo de negocio** para establecer el contenido del sistema.
- Crear un **catálogo de requisitos** y un **glosario de términos del negocio** para precisión en la especificación del sistema.

#### Entorno, estándares y usuarios
1. **Entorno tecnológico**: Identificar el entorno que soportará el proyecto, especificando condicionantes y restricciones.
2. **Especificación de estándares y normas**: Actualizar el catálogo de normas del EVS, teniendo en cuenta normativas, leyes y estándares necesarios para el desarrollo.
3. **Identificación de usuarios**: Actualizar el catálogo de usuarios, definiendo funciones, asignando responsabilidades y desarrollando un plan de trabajo.

> [!INFO|style:callout|label:Productos obtenidos]
> - Catálogo de requisitos
> - Glosario
> - Descripción general del entorno tecnológico
> - Catálogo de normas
> - Catálogo de usuarios
> - Planificación del análisis
> - Contexto del sistema
> - Modelo conceptual de datos
> - **Orientación a objetos**:
>   - Modelo de negocio
>   - Modelo de dominio

### ASI 02: Establecimiento de Requisitos :class=titulo-color

Esta actividad define los requerimientos del sistema, necesarios para asegurar que la modelización corresponde con las necesidades. Se realiza en sesiones de trabajo con usuarios expertos y analistas, apoyándose en los productos generados en ASI 0.1.

#### Proceso
1. **Obtención de requisitos**: Definir el catálogo de requisitos que establece los niveles de servicio del sistema. Cada requisito debe considerar las restricciones del entorno y la prioridad definida por los usuarios.
2. **Especificación de casos de uso** (opcional para análisis estructurado, obligatoria en orientación a objetos): Descripción del escenario, precondiciones, poscondiciones, interfaces de usuario y condiciones de fallo.
3. **Análisis de requisitos**: Revisar los requisitos para identificar inconsistencias, ambigüedades o duplicidades, estableciendo relaciones y prioridades.
4. **Validación de requisitos**: Confirmación de la consistencia y completitud de requisitos y casos de uso por parte de los usuarios.

> [!INFO|style:callout|label:Productos obtenidos]
> - Catálogo de requisitos
> - Modelo de Casos de Uso
> - Especificación de Casos de Uso

### ASI 03: Identificación de Subsistemas de Análisis :class=titulo-color

Esta actividad se realiza en paralelo a la generación de modelos de análisis para asegurar una visión unificada. Se llevan a cabo sesiones de trabajo con el jefe de proyecto y analistas.

#### Proceso
1. **Determinación de subsistemas de análisis**: Basada en procesos de negocio o criterios lógicos como homogeneidad, prioridad y afinidad de requisitos.
2. **Integración de subsistemas de análisis**: Coordinación de modelos para evitar duplicidades y enriquecer el catálogo de glosarios.

> [!INFO|style:callout|label:Productos obtenidos]
> - **Análisis estructurado**: Modelo de procesos
> - **Orientación a objetos**:
>  - Descripción de Subsistemas de Análisis
>  - Descripción de Interfaces entre Subsistemas

### ASI 04: Análisis de Casos de Uso :class=titulo-color

Esta actividad aplica solo en análisis orientado a objetos. Se realiza mediante la identificación de clases asociadas a cada caso de uso.

#### Proceso
1. **Identificación de clases asociadas a un caso de uso**: Creación de una lista de clases candidatas que se refina en esta y en otras actividades.
2. **Descripción de interacción de objetos**: Diagramas de interacción (secuencia y colaboración) que muestran la cooperación entre objetos en un caso de uso.

> [!INFO|style:callout|label:Productos obtenidos]
> - **Orientación a objetos**: Modelo de Clases de Análisis

### ASI 05: Análisis de Clases :class=titulo-color

Este análisis, realizado solo en orientación a objetos, describe y estructura las clases surgidas durante el análisis, elaborando un modelo para cada subsistema.

#### Proceso
1. **Identificación de responsabilidades y atributos**: Estudio de objetos para definir operaciones y especificaciones por clase.
2. **Identificación de asociaciones y agregaciones**: Definir relaciones entre clases, con enfoque en cardinalidad, direccionalidad y papel desempeñado.
3. **Identificación de generalizaciones**: Representación de una organización de clases basada en herencia y agrupación semántica.

> [!INFO|style:callout|label:Productos obtenidos]
> - **Orientación a objetos**:
>   - Modelo de Clases de Análisis
>   - Comportamiento de Clases de Análisis

### ASI 06 - La Elaboración del Modelo de Datos :class=titulo-color

Esta actividad se lleva a cabo solo cuando nos encontramos en análisis estructurados de datos. Se realizan en paralelo a las actividades ASI2, ASI3, ASI7 y ASI8. Su objetivo es obtener un modelo de datos en el cual se contemplen todos los elementos para dar respuesta a las necesidades del sistema de información: entidades, relaciones, atributos y reglas de negocio.

1. **Modelo Conceptual de Datos**  
   Partimos de los documentos obtenidos del ASI1: contexto del sistema y modelo conceptual de datos. Debemos identificar:
   - Entidades que se quedan dentro del sistema.
   - Atributos de cada entidad.
   - Dominios de esos atributos.
   - Relaciones entre ellos.
   También se deben identificar las entidades externas al modelo, señalando el tipo de relación y describiendo las reglas de negocio.

2. **Modelo Lógico de Datos**  
   Procesamos el modelo conceptual realizando acciones como:
   - Resolver relaciones complejas.
   - Eliminar relaciones redundantes.
   - Eliminar ambigüedades sobre los atributos.
   - Identificar las relaciones de dependencias entre entidades.
   Finalmente, revisamos y completamos los identificadores de cada entidad.

3. **Datos Específicos**  
   Es importante definir algunos datos como:
   - Máximo y media de ocurrencias.
   - Estimación de crecimiento.
   - Frecuencia de acceso.
   - Temas de seguridad, disponibilidad o confidencialidad.

4. **Normalización y Contexto de Migración y Carga Inicial**  
   - Cumplir la 3ª forma normal para eliminar redundancias e inconsistencias.
   - Realizar especificaciones de necesidades de migración de datos y carga inicial, incluyendo:
     - Planificación.
     - Prioridad de carga.
     - Requisitos de conversión de información.

> [!INFO|style:callout|label:Productos obtenidos]
> - Modelo Conceptual de Datos
> - Modelo Lógico de Datos
> - Modelo Lógico de Datos Normalizado
> - Plan de Migración y Carga Inicial de Datos

### ASI 07 - Elaboración del Modelo de Procesos :class=titulo-color

Esta actividad se lleva a cabo solo en análisis estructurados de datos. Es necesario establecer el conjunto de procesos del sistema, aplicando un proceso de descomposición.

1. **Descomposición de Procesos**  
   Nos basamos en la actividad de Identificación de Subsistemas de ASI3. Se recomienda utilizar la técnica del diagrama de flujo de datos.

2. **Especificación de Detalles**  
   Para cada proceso se debe definir:
   - Frecuencia de ejecución.
   - Procesos asociados.
   - Limitaciones y restricciones.
   - Tiempos máximos y mínimos.
   Esto permite definir la distribución de los componentes del software en la arquitectura técnica del sistema.

3. **Especificación de Interfaces con Otros Sistemas**  
   Se debe describir cómo interactúan las interfaces con otros sistemas de información, indicando:
   - Procesos asociados.
   - Especificaciones funcionales del sistema externo.
   - Formato de datos intercambiados.
   - Frecuencia de intercambio.

> [!INFO|style:callout|label:Productos obtenidos]
> - Modelo de Procesos
> - Matriz de Procesos / Localización Geográfica (ampliada)
> - Descripción de Interfaz con Otros Sistemas

### ASI 08 - Definición de Interfaces de Usuario para el Análisis del SI en Métrica V3 :class=titulo-color

En la actividad de interfaces, se debe elaborar un buen conjunto de productos.

1. **Especificación de Principios Generales de la Interfaz de Usuario**  
   - Seleccionar el entorno de la interfaz interactiva.
   - Determinar principios de diseño de la interfaz de usuario.
   - Normalizar el formato de los distintos puntos que componen la interfaz.

2. **Identificación de Perfiles de Usuario**  
   - Conocer las características de cada perfil: conocimientos, responsabilidades, etc.
   - Clasificar los procesos en los que participa cada usuario.

3. **Especificaciones de Formatos de la Interfaz de Pantalla**  
   - Basarse en el catálogo de requisitos y en los modelos de datos y procesos.
   - Especificar comportamiento dinámico de la interfaz.

4. **Prototipos**  
   - Identificar diálogos críticos y utilizar diagramas de transición de estados para especificar comportamientos complejos.
   - Especificar formatos de impresión.

> [!INFO|style:callout|label:Productos obtenidos]
> - Especificación de Interfaz de Usuario:
>   - Principios generales de la interfaz.
>   - Descomposición Funcional en Diálogos.
>   - Catálogos de Perfiles de Usuario.
>   - Formatos individuales de interfaz de pantalla.
>   - Catálogos de Controles y Elementos de Diseño de Interfaz de Pantalla.
>   - Modelo de Navegación de Interfaz de Pantalla.
>   - Prototipo de Interfaz Iterativa.
>   - Formatos de Impresión.
>   - Prototipo de Interfaz de Impresión.

### ASI 09 - Análisis de Consistencia y Especificación de Requisitos :class=titulo-color

1. **Calidad Formal de los Modelos**  
   Revisar que los modelos son correctos en función de la técnica utilizada para su elaboración.

2. **Consistencia entre Modelos**  
   Comprobar que los modelos son coherentes, sin ambigüedades o duplicidades. En análisis estructurado se obtiene:
   - Matriz almacenes de datos frente a entidades.
   - Matriz atributos interfaz frente a atributos de entidades.
   - Caminos de acceso lógico en consultas.
   - Matriz entidades frente a procesos.

3. **Validación de Modelos**  
   Validar el catálogo de requisitos mediante trazabilidad y la validación directa del cliente.

> [!INFO|style:callout|label:Productos obtenidos]
> - Especificación de Interfaz de Usuario.
> - Resultado de Análisis de Consistencia.
> - Especificación de Requisitos de Software (ERS):
>   - Introducción.
>   - Ámbito y alcance.
>   - Participantes.
>   - Requisitos del sistema de información.
>   - Visión general del SI.
>   - Referencia a productos a entregar.
>   - Plan de acción.

### ASI 010 - Especificación del Plan de Pruebas en el Análisis del SI en Métrica V3 :class=titulo-color

1. **Desarrollo del Plan de Pruebas**  
   Definir el alcance de las pruebas, planificando puntos necesarios y justificando su realización.

2. **Planificación**  
   Considerar:
   - Perfiles implicados en las pruebas.
   - Planificación en el tiempo.
   - Criterios de aceptación y verificación.

3. **Entorno de Pruebas y Pruebas de Aceptación del Sistema**  
   Especificar características del entorno y herramientas auxiliares.

> [!INFO|style:callout|label:Productos obtenidos]
> - Plan de Pruebas:
>   - Especificación de los niveles de pruebas.
>   - Definición de Requisitos del Entorno de Pruebas.
>   - Definición de las Pruebas de Aceptación del Sistema.

### ASI 011 - Aprobación del Análisis del Sistema de Información :class=titulo-color

Para la aprobación del Análisis del SI en métrica V3, será necesario presentarlo (Especificación de Requisitos de Software y Plan de Pruebas) a la dirección para su aprobación.

> [!INFO|style:callout|label:Productos obtenidos]
> - Aprobación del Análisis del Sistema de Información.

