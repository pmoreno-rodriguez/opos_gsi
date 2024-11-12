> [!TIP|style: callout|icon: fa fa-check|label: Contenido Verificado]
> Respuesta de ChatGPT sobre SOAP y REST.

## ¿Cómo funcionan las API de SOAP y las API de REST? <!-- {docsify-ignore} -->

SOAP es una tecnología antigua que requiere un contrato de comunicación estricto entre sistemas. Con el tiempo, se han agregado nuevos estándares de servicios web para adaptarse a los cambios tecnológicos, pero generan gastos generales adicionales. REST se desarrolló después de SOAP y soluciona de forma inherente muchas de sus deficiencias. Los servicios web REST también se denominan servicios web RESTful.

### API de SOAP

SOAP es un protocolo que define reglas de comunicación rígidas. Tiene varios estándares asociados que controlan todos los aspectos del intercambio de datos. Por ejemplo, estos son algunos estándares que usa SOAP:

- **Web Services Security (WS-Security)** especifica medidas de seguridad, como el uso de identificadores únicos denominados tokens.
- **Web Services Addressing (WS-Addressing)** requiere incluir información de enrutamiento como metadatos.
- **WS-ReliableMessaging** estandariza la gestión de errores en la mensajería SOAP.
- **Web Services Description Language (WSDL)** describe el alcance y la función de los servicios web SOAP.

Al enviar una solicitud a una API de SOAP, debe incluir la solicitud HTTP en un sobre SOAP. Se trata de una estructura de datos que modifica el contenido HTTP subyacente con los requisitos de solicitud de SOAP. Gracias al sobre, también puede enviar solicitudes a los servicios web SOAP con otros protocolos de transporte, como TCP o el Protocolo de control de mensajes de Internet (ICMP). Sin embargo, las API de SOAP y los servicios web SOAP siempre devuelven documentos XML en sus respuestas.

### API de REST

REST es un estilo de arquitectura de software que impone seis condiciones sobre cómo debe funcionar una API. Estos son los seis principios que siguen las API de REST:

- **Arquitectura cliente-servidor**: El remitente y el receptor son independientes entre sí en lo que respecta a la tecnología, las plataformas, el lenguaje de programación, etc.
- **En capas**: El servidor puede tener varios intermediarios que trabajan juntos para completar las solicitudes de los clientes, pero son invisibles para el cliente.
- **Interfaz uniforme**: La API devuelve los datos en un formato estándar completo y totalmente utilizable.
- **Sin estado**: La API completa cada nueva solicitud de manera independiente de las solicitudes anteriores.
- **Se puede almacenar en caché**: Todas las respuestas de la API se pueden almacenar en caché.
- **Código bajo demanda**: La respuesta de la API puede incluir un fragmento de código si es necesario.

Las solicitudes REST se envían mediante verbos HTTP como GET y POST. Las respuestas de la API de REST suelen estar en JSON, pero también pueden tener un formato de datos diferente.

## ¿Cuándo usar SOAP en lugar de REST?

Antes de elegir entre SOAP y REST, considere sus escenarios y los requisitos de los usuarios de su API. Vale la pena considerar los siguientes criterios.

### Diseño general de la aplicación

Las aplicaciones modernas, como las aplicaciones móviles y las aplicaciones híbridas, funcionan mejor con las API de REST. REST le brinda la escalabilidad y la flexibilidad necesarias para diseñar aplicaciones mediante patrones de arquitectura modernos, como microservicios y contenedores. Sin embargo, si necesita integrar o ampliar sistemas heredados que ya cuentan con las API de SOAP, es mejor que continúe con SOAP.

### Seguridad

Las API públicas tienen requisitos de seguridad más bajos y exigen una mayor flexibilidad para que cualquiera pueda interactuar con ellas. Por lo tanto, REST es una mejor opción a la hora de crear API públicas. Por el contrario, algunas API privadas para requisitos empresariales internos (como la presentación de informes de datos para el cumplimiento) podrían beneficiarse de las medidas de seguridad más estrictas de WS-Security de SOAP.

### Cumplimiento con ACID

¿Los usuarios de su API requieren una coherencia e integridad de datos estrictas en toda la cadena de transacciones? Por ejemplo, las transacciones financieras requieren que se produzca un lote completo de actualizaciones de datos para fallar si se produce un error en una sola actualización.

SOAP incluye de serie las características de atomicidad, consistencia, aislamiento y durabilidad (ACID). Además, SOAP puede ser más adecuado para requisitos de alta integridad de datos. En este caso, las API de REST pueden requerir módulos de software adicionales para imponer el estado a nivel de servidor o base de datos.

## Diferencias clave: SOAP y REST

SOAP es un protocolo, mientras que REST es un estilo de arquitectura. Esto crea diferencias significativas en el comportamiento de las API de SOAP y las API de REST.

### Diseño

La API de SOAP expone funciones u operaciones, mientras que las API de REST se basan en datos. Por ejemplo, considere una aplicación con datos de empleados que otras aplicaciones puedan manipular. La API de SOAP de la aplicación podría exponer una función llamada `CreateEmployee` (Crear empleado). Para crear un empleado, debe especificar el nombre de la función en el mensaje SOAP al enviar una solicitud.

Sin embargo, la API de REST de la aplicación podría exponer una URL llamada `/employees` (/empleados) y una solicitud POST a esa URL crearía un nuevo registro de empleado.

### Flexibilidad

Las API de SOAP son rígidas y solo permiten la mensajería XML entre aplicaciones. El servidor de aplicaciones también debe mantener el estado de cada cliente. Esto significa que debe recordar todas las solicitudes anteriores al procesar una nueva solicitud.

REST es más flexible y permite a las aplicaciones transferir datos como texto sin formato, HTML, XML y JSON. REST tampoco tiene estado, por lo que la API de REST trata cada nueva solicitud de manera independiente de las solicitudes anteriores.

### Rendimiento

Los mensajes SOAP son más grandes y complejos, lo que hace que su transmisión y procesamiento sean más lentos. Esto puede aumentar los tiempos de carga de la página.

REST es más rápido y eficiente que SOAP debido a los tamaños más pequeños de los mensajes REST. Las respuestas REST también se pueden almacenar en la caché, por lo que el servidor puede almacenar los datos a los que se accede con frecuencia en una memoria caché para reducir aún más los tiempos de carga de las páginas.

### Escalabilidad

El protocolo SOAP requiere que las aplicaciones almacenen el estado entre las solicitudes, lo que aumenta los requisitos de ancho de banda y memoria. Como resultado, hace que las aplicaciones sean costosas y difíciles de escalar.

A diferencia de SOAP, REST permite una arquitectura sin estado y en capas, lo que la hace más escalable. Por ejemplo, el servidor de aplicaciones puede pasar la solicitud a otros servidores o permitir que un intermediario (como una red de entrega de contenido) la gestione.

### Seguridad

SOAP requiere una capa adicional de WS-Security para funcionar con HTTPS. WS-Security usa contenido de encabezado adicional para garantizar que solo el proceso designado en el servidor especificado lea el contenido del mensaje SOAP. Esto agrega sobrecargas a la comunicación y tiene un impacto negativo en el rendimiento.

REST admite HTTPS sin sobrecargas adicionales.

### Fiabilidad

SOAP tiene una lógica de gestión de errores integrada y proporciona más fiabilidad. Por otro lado, REST requiere que lo intente de nuevo en caso de errores de comunicación, y es menos fiable.

## Resumen de las diferencias entre SOAP y REST

|           | **SOAP**                                                                                          | **REST**                                                           |
|----------------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| **Qué significa**    | Protocolo simple de acceso a objetos                                                              | Transferencia de estado representacional                           |
| **¿Qué es?**         | SOAP es un protocolo para la comunicación entre aplicaciones                                      | REST es un estilo de arquitectura para diseñar interfaces de comunicación |
| **Diseño**           | La API de SOAP expone la operación.                                                               | La API de REST expone los datos.                                   |
| **Protocolo de transporte** | SOAP es independiente y puede funcionar con cualquier protocolo de transporte.                | REST solo funciona con HTTPS.                                      |
| **Formato de datos** | SOAP solo admite el intercambio de datos XML.                                                     | REST admite XML, JSON, texto plano y HTML.                         |
| **Rendimiento**      | Los mensajes SOAP son más grandes, lo que hace que la comunicación sea más lenta.                  | REST tiene un rendimiento más rápido debido a los mensajes más pequeños y al soporte de almacenamiento en caché. |
| **Escalabilidad**    | SOAP es difícil de escalar. El servidor mantiene el estado al almacenar todos los mensajes anteriores intercambiados con un cliente. | REST es fácil de escalar. No tiene estado, por lo que cada mensaje se procesa de manera independiente de los mensajes anteriores. |
| **Seguridad**        | SOAP admite el cifrado con sobrecargas adicionales.                                               | REST admite cifrado sin afectar al rendimiento.                    |
| **Caso de uso**      | SOAP es útil en aplicaciones antiguas y API privadas.                                             | REST es útil en aplicaciones modernas y API públicas.              |

