## Utilización de las Historias de Usuario en Metodologías Ágiles para el Desarrollo de un Sistema <!-- {docsify-ignore} -->

> [!NOTE|style:callout|label:Contenido Verificado]
> Respuesta de ChatGPT sobre el uso de la metodología ágil en el desarrollo de un sistema y cómo se realizan Historias de usuario.

Las **historias de usuario** son una de las herramientas más fundamentales en las metodologías ágiles, como Scrum y Kanban. Son una forma ágil de capturar requisitos y facilitan la comunicación entre el equipo de desarrollo y los interesados (stakeholders). Estas historias se enfocan en lo que un usuario final quiere lograr con el sistema, en lugar de especificar cómo se debe implementar la funcionalidad. A continuación, detallaremos su estructura, su papel en el proceso de desarrollo y cómo se utilizan, junto con un ejemplo para facilitar su comprensión.

### ¿Qué son las Historias de Usuario? <!-- {docsify-ignore} -->

Una historia de usuario es una **descripción breve y simple de una funcionalidad desde la perspectiva del usuario final**. En lugar de enfocarse en los aspectos técnicos de una tarea, se centran en el valor que esa funcionalidad aporta al usuario. El formato clásico de una historia de usuario es el siguiente:

> **Como** [tipo de usuario], **quiero** [acción o funcionalidad], **para** [beneficio o valor].

Por ejemplo:

> **Como** cliente de una tienda en línea, **quiero** recibir una notificación cuando mi pedido sea enviado, **para** estar informado sobre el estado de mi compra.

### Las 3 C’s de las Historias de Usuario: **Card, Conversation, Confirmation** <!-- {docsify-ignore} -->

Las historias de usuario se organizan en tres componentes clave que son conocidas como las **3 C’s**:

1. **Card (Tarjeta)**: La tarjeta es el soporte físico o digital que contiene la historia de usuario. No es un documento extenso; es un recordatorio simple de lo que el equipo necesita implementar. Suele contener la historia en el formato mencionado y algunas notas básicas.
   
   - Ejemplo de una tarjeta:
     ```
     Como cliente, quiero recibir un correo electrónico cuando mi pedido sea enviado para saber cuándo esperar mi entrega.
     ```

2. **Conversation (Conversación)**: La tarjeta no contiene todos los detalles de la funcionalidad. Aquí entra la conversación. Las historias de usuario están diseñadas para facilitar conversaciones entre el equipo de desarrollo, los product owners (dueños del producto) y otras partes interesadas. Durante estas conversaciones, se profundizan los detalles y se aclaran dudas. 

   La conversación ayuda a:
   - Aclarar los requisitos.
   - Tomar decisiones sobre cómo implementar la funcionalidad.
   - Identificar escenarios alternativos o excepciones.
   
   Las conversaciones son cruciales para entender qué espera el usuario y cómo puede el equipo satisfacer esa necesidad. Estas conversaciones deben ser continuas y colaborativas durante el desarrollo de la funcionalidad.

3. **Confirmation (Confirmación)**: El tercer componente de una historia de usuario son los **criterios de aceptación**, que son la base para validar que la funcionalidad se ha desarrollado correctamente. Estos criterios definen de manera concreta qué condiciones deben cumplirse para que la historia se considere completa. 

   - Ejemplo de criterios de aceptación:
     - El cliente recibirá un correo electrónico inmediatamente después de que el pedido sea marcado como "enviado".
     - El correo incluirá el número de seguimiento del envío.
     - El cliente solo recibirá una notificación si el pedido ha cambiado de estado correctamente.

### Uso de las Historias de Usuario en el Ciclo de Desarrollo <!-- {docsify-ignore} -->

#### 1. **Identificación de Historias de Usuario**
El proceso comienza con la identificación de las historias de usuario. El **Product Owner** es responsable de definir las historias basadas en las necesidades y objetivos del cliente o usuario final. A menudo, esto se hace en colaboración con el equipo de desarrollo, quienes pueden proporcionar una perspectiva técnica.

El Product Owner prioriza las historias de usuario según el valor de negocio y las necesidades del sistema, y estas historias se añaden al **backlog** (lista de tareas pendientes).

#### 2. **División de Historias en Tareas Técnicas**
Aunque las historias de usuario están escritas en términos no técnicos, el equipo de desarrollo las divide en tareas técnicas concretas durante la planificación del sprint (un ciclo de trabajo corto, generalmente de dos a cuatro semanas en Scrum). Cada tarea técnica puede ser estimada y asignada a un miembro del equipo.

Por ejemplo, la historia de usuario mencionada anteriormente ("Como cliente, quiero recibir un correo electrónico...") puede dividirse en tareas como:
   - Crear la lógica para enviar correos electrónicos.
   - Diseñar la plantilla de correo.
   - Desarrollar la funcionalidad para detectar el cambio de estado del pedido.
   - Implementar pruebas unitarias para la nueva funcionalidad.

#### 3. **Implementación y Validación**
El equipo de desarrollo trabaja en las tareas asignadas, manteniendo una comunicación constante con el Product Owner y los interesados para asegurarse de que están implementando lo que se necesita.

Una vez completadas las tareas, se verifican utilizando los criterios de aceptación definidos en la parte de "confirmación" de la historia de usuario. Esto asegura que la funcionalidad cumple con las expectativas del usuario y que el sistema se comporta como se espera.

#### 4. **Pruebas y Demostración**
Después de la implementación, la funcionalidad se prueba, tanto a nivel técnico (con pruebas unitarias y de integración) como a nivel de usuario (con pruebas de aceptación). Si pasa todas las pruebas y se cumple con los criterios de aceptación, la historia de usuario se considera completa.

Al final del sprint, durante la **revisión del sprint**, el equipo de desarrollo presenta el trabajo realizado al Product Owner y otros interesados, demostrando que la funcionalidad implementada aporta el valor deseado.

### Ejemplo Completo de Historia de Usuario <!-- {docsify-ignore} -->

#### Contexto:
Supongamos que estamos desarrollando un sistema de comercio electrónico y se nos ha solicitado agregar una funcionalidad para que los clientes reciban notificaciones cuando sus pedidos hayan sido enviados.

#### Historia de Usuario (Card):
```
Como cliente de la tienda en línea,
quiero recibir un correo electrónico de notificación cuando mi pedido sea enviado,
para saber cuándo esperar mi paquete.
```

#### Conversación (Conversation):
Durante la reunión de refinamiento del backlog, el equipo discute los siguientes detalles:
- ¿Qué información incluirá el correo electrónico?
- ¿Cómo se detectará el cambio de estado del pedido?
- ¿Qué sucede si el correo no se puede enviar?
- ¿Cómo podemos gestionar los errores de entrega del correo?
- ¿Qué herramientas o servicios de email se van a utilizar?

Este diálogo permite al equipo identificar posibles problemas y tomar decisiones sobre la implementación.

#### Confirmación (Confirmation):
Los criterios de aceptación que se definen son:
- El cliente recibirá un correo electrónico inmediatamente después de que el pedido sea marcado como "enviado".
- El correo debe incluir el número de seguimiento del pedido, un enlace para consultar el estado y un mensaje personalizado con el nombre del cliente.
- El cliente no recibirá una notificación si el pedido es cancelado o devuelto antes del envío.
- En caso de error en el envío del correo, el sistema reintentará enviarlo hasta 3 veces y guardará un registro de los intentos.

#### Tareas Técnicas:
1. Crear una función para detectar el cambio de estado del pedido.
2. Integrar un servicio de correo electrónico (por ejemplo, SendGrid o un servidor SMTP).
3. Desarrollar la plantilla del correo.
4. Implementar una función de reintento para el envío de correos en caso de fallos.

#### Pruebas:
- Se ejecutarán pruebas unitarias para verificar que el correo se envía en el momento adecuado.
- Se harán pruebas funcionales para verificar que el contenido del correo es correcto.
- Se simularán fallos en el envío de correos para asegurarse de que el sistema maneja los errores adecuadamente.

### Conclusión <!-- {docsify-ignore} -->

Las historias de usuario son una herramienta poderosa en el desarrollo ágil. Al enfocarse en lo que el usuario necesita, facilitan la comprensión de los requisitos y fomentan la colaboración entre todos los actores involucrados en el proyecto. La estructura de las 3 C’s (Card, Conversation, Confirmation) asegura que los equipos puedan trabajar de manera ágil y flexible, mientras se asegura la calidad del producto final. A través de la correcta implementación de estas historias, el equipo no solo entrega software funcional, sino que también crea valor tangible para el cliente.