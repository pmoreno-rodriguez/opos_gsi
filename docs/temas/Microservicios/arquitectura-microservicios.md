> [!TIP|style: callout|icon: fa fa-check|label: Contenido Verificado]
> Contenido extraído de [Atlassian](https://www.atlassian.com/es)

## Arquitectura de Microservicios <!-- {docsify-ignore} -->

En el mundo actual, la modernización de aplicaciones a menudo implica migrar a aplicaciones nativas de la nube construidas como microservicios. Este enfoque, adoptado por gigantes como Netflix y Atlassian, mejora significativamente la escalabilidad, la velocidad de desarrollo y la iteración de servicios.

### ¿Qué es una Arquitectura de Microservicios?

Una arquitectura de microservicios descompone una aplicación en una serie de servicios independientes que se comunican a través de APIs. Cada servicio puede ser desarrollado, implementado y escalado de manera independiente, lo que permite una entrega rápida y frecuente de aplicaciones grandes y complejas. A diferencia de las aplicaciones monolíticas, los microservicios permiten a los equipos implementar nuevas funciones y realizar cambios rápidamente sin reescribir grandes partes del código existente.

### Características Fundamentales de los Microservicios

1. **Varios Servicios de Componentes**: Los microservicios están compuestos por servicios individuales y poco acoplados que pueden desarrollarse, implementarse, operarse, modificarse y volver a implementarse sin afectar a otros servicios o a la integridad de la aplicación. Esto facilita una implementación rápida y sencilla de cada función de la aplicación.

2. **Facilidad de Mantenimiento y Pruebas**: Los microservicios permiten a los equipos experimentar con nuevas funciones y revertirlas si no funcionan. Esto acelera la actualización del código y reduce el tiempo de salida al mercado de nuevas funciones. Además, simplifica el aislamiento y la corrección de fallos en los servicios individuales.

3. **Equipos Pequeños e Independientes**: Los microservicios suelen ser desarrollados por equipos pequeños e independientes, fomentando prácticas ágiles y de DevOps. Estos equipos pueden trabajar de manera autónoma y rápida, acortando el ciclo de desarrollo.

4. **Organización en Torno a Capacidades Empresariales**: Los servicios se organizan en torno a capacidades empresariales, con equipos multifuncionales que poseen todas las habilidades necesarias para el desarrollo y trabajan en la creación de funcionalidades específicas.

5. **Infraestructura Automatizada**: Los equipos que desarrollan y mantienen microservicios utilizan prácticas de automatización de infraestructuras como la integración continua (CI), la entrega continua (CD) y la implementación continua. Esto permite crear e implementar cada servicio de manera independiente sin afectar a otros equipos, y desplegar nuevas versiones de servicios en paralelo con las versiones anteriores.

### Ejemplo de Arquitectura de Microservicios

Consideremos un proyecto de software de comercio electrónico. En este ejemplo, un sitio de comercio electrónico tiene una aplicación web y una aplicación móvil que interactúan con varios microservicios, cada uno proporcionando funciones específicas para un dominio.

Las aplicaciones web modernas se ejecutan en navegadores y, a menudo, se sirven desde una red de distribución de contenido (CDN). Las CDN permiten distribuir aplicaciones web a servidores de todo el mundo, para que los navegadores las descarguen rápidamente. También se utilizan para ofrecer recursos multimedia, como imágenes, audio y vídeo. Por ejemplo, en este sistema, las imágenes y los vídeos de los productos a la venta se sirven desde la CDN.

![](../../img/arquitectura_microservicios.png)

Los microservicios en este sistema incluyen:

- **Servicio de Cuentas**: Proporciona información sobre la cuenta del cliente, como la dirección y la información de pago.
- **Servicio de Inventario**: Ofrece información de inventario actualizada sobre los bienes que el cliente puede comprar.
- **Servicio de Carrito de la Compra**: Permite a los clientes seleccionar los productos del inventario que desean comprar.
- **Servicio de Pago**: Facilita el pago de los productos añadidos al carrito de la compra.
- **Servicio de Envío**: Programa el embalaje y la entrega de los bienes adquiridos.

Las aplicaciones interactúan con los microservicios a través de las APIs REST que publica cada uno de ellos. Una puerta de enlace de API permite que las aplicaciones se basen en las APIs proporcionadas por los microservicios y facilita el intercambio de microservicios con la misma API.

Cada microservicio se compone de un servicio y una base de datos. Los servicios gestionan la API REST, implementan la lógica empresarial y almacenan datos en una base de datos. Los recursos de los distintos microservicios, como bases de datos y colas, se aíslan siguiendo el contrato de 12 Factor App.

### Cómo Crear Microservicios

Muchas organizaciones comienzan con una arquitectura monolítica. La transición a microservicios implica dividir una base de código en varios servicios, implementar patrones para manejar fallos y recuperarse de incidencias en la red, gestionar la coherencia de los datos y supervisar la carga de servicio. Además de los desafíos técnicos, es necesario reorganizar los equipos y adoptar una cultura de DevOps.

El proceso de descomponer un monolito en microservicios puede ser complejo. La refactorización de un esquema de base de datos monolítico requiere determinar claramente qué conjuntos de datos necesita cada servicio y las superposiciones entre ellos. La entrega continua ayuda a reducir los riesgos de fallos en la publicación y permite que el equipo se enfoque en crear y ejecutar la aplicación en lugar de quedarse atascado en la implementación.

### Comparación entre Arquitectura Monolítica y Arquitectura de Microservicios

Una arquitectura monolítica es un modelo tradicional en el que un programa de software se compila como una unidad unificada, autónoma e independiente de otras aplicaciones. En contraste, una arquitectura de microservicios se basa en una serie de servicios que se pueden implementar de forma independiente. Aunque una arquitectura monolítica puede ser práctica al inicio de un proyecto para reducir la sobrecarga cognitiva de la gestión de código y la implementación, se vuelve difícil de escalar y mantener a medida que la aplicación crece en tamaño y complejidad.

Mientras que una aplicación monolítica se crea como una sola unidad indivisible, los microservicios dividen esa unidad en una colección de servicios independientes que contribuyen a un todo más amplio. Estos servicios se desarrollan y despliegan de forma autónoma, lo que facilita la escalabilidad y la gestión.

### Arquitectura Distribuida

Los microservicios forman parte de los sistemas distribuidos, que utilizan recursos computacionales en varios nodos para lograr un objetivo común. Estos sistemas ofrecen mayor fiabilidad, rendimiento y escalabilidad. Los nodos de un sistema distribuido proporcionan redundancia, permitiendo que otros nodos asuman la carga en caso de fallos. Además, cada nodo puede escalarse horizontal y verticalmente para mejorar el rendimiento y manejar cargas extensivas.

### Comparación entre Kubernetes y Docker

Docker es una plataforma de contenedorización que permite a los desarrolladores crear, implementar y ejecutar contenedores. Aunque Docker facilita el empaquetado y distribución de aplicaciones en contenedores, gestionar contenedores a escala puede ser complicado sin herramientas adicionales.

Kubernetes es una plataforma de código abierto que orquesta sistemas de contenedores en un clúster de recursos en red. Puede usarse con o sin Docker. Mientras que Docker es un tiempo de ejecución de contenedores, Kubernetes se encarga de ejecutar y gestionar contenedores a partir de múltiples tiempos de ejecución de contenedores.

### Gestión de Configuración

El proceso de gestión de configuración de software administra, organiza, supervisa y controla los cambios en los metadatos de configuración de un sistema de software. Suele utilizarse junto con la infraestructura de CI/CD y el control de versiones.

La gestión de la configuración ayuda a los equipos de ingeniería a crear sistemas sólidos y estables mediante el uso de herramientas que gestionan y supervisan automáticamente las actualizaciones de los datos de configuración. Mejora la gestión de la expansión de software en una arquitectura de microservicios, al establecer una “fuente de información” con una ubicación central para la configuración.
