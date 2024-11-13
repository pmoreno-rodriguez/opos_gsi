## ¿Por qué la tecnología VRRP? <!-- {docsify-ignore} -->

Sabemos que para lograr la comunicación entre dispositivos en diferentes subredes, necesitamos configurar enrutamiento. Actualmente, existen dos métodos de enrutamiento comúnmente utilizados:

- The first is dynamic learning through routing protocols: RIP and OSPF.
- The second is through static routing: configure static routing for the terminal PC.

Ambas rutas tienen sus propias ventajas y desventajas:

La primera ruta puede encontrar automáticamente el mejor camino, y la ruta vecina también puede aprender para obtener la tabla de enrutamiento, pero la ruta dinámica ocupa el ancho de banda de la línea y el tiempo de procesamiento de la CPU. La segunda ruta no requiere tiempo de procesamiento de la CPU y no ocupa ancho de banda de la línea, pero esta ruta necesita configurar la puerta de enlace en la PC del terminal, y la carga de trabajo es relativamente grande. Las dos rutas mencionadas anteriormente son ampliamente utilizadas en la actualidad.

Ahora solo analizaremos las desventajas del enrutamiento estático porque la tecnología VRRP se utiliza en el enrutamiento estático, no en el enrutamiento dinámico.

Para el enrutamiento estático, se configura la puerta de enlace predeterminada para la PC del terminal. Si el enrutador como la puerta de enlace predeterminada falla, la comunicación de todos los hosts que utilizan esta puerta de enlace como siguiente salto se verá interrumpida. Como se muestra en la figura a continuación:

![Enrutamiento estático con un router](../../img/vrrp1.png 'Enrutamiento estático con un router')

En la figura anterior, los hosts A-D están todos configurados con una puerta de enlace predeterminada: 10.1.1.1. El siguiente salto de la ruta de la puerta de enlace apunta a un enrutador RouterA en el segmento de red donde se encuentra el host. RouterA envía el mensaje a la red externa, pero si RouterA se avería ahora, todos los hosts no podrán comunicarse con otros segmentos de red.

Para resolver los problemas mencionados anteriormente, podemos agregar un enrutador RouterB, como se muestra en la siguiente figura:

![Enrutamiento estático con dos routers](../../img/vrrp2.png 'Enrutamiento estático con dos routers')

Cuando RouterA falla, todas las PC cambian la puerta de enlace a la puerta de enlace en RouterB. De esta manera, se realiza la copia de seguridad del enrutador. Esta tecnología es la tecnología VRRP (Protocolo de redundancia de enrutador virtual).

## Introducción a VRRP (Mecanismo de reenvío) <!-- {docsify-ignore} -->

1. **Protocolo de Redundancia de Router Virtual (VRRP)**: añade los routers que pueden asumir la función de puerta de enlace al grupo de respaldo para formar un enrutador virtual. El mecanismo de elección de VRRP determina qué router asume la tarea de reenvío, y los hosts en la LAN solo necesitan configurar el enrutador virtual como la puerta de enlace predeterminada.

2. **VRRP es un protocolo tolerante a fallos**: mejora la fiabilidad y simplifica la configuración del host. En una red de área local (como Ethernet) con capacidad de multidifusión o difusión, VRRP aún puede proporcionar un enlace predeterminado altamente fiable cuando falla un cierto dispositivo, evitando eficazmente el problema de interrupción de red después de que falla un solo enlace, sin modificar información de configuración como protocolos de enrutamiento dinámico y protocolo de descubrimiento de ruta.

3. **El protocolo VRRP se implementa en dos versiones**: VRRPv2 y VRRPv3. VRRPv2 está basado en IPv4 y VRRPv3 está basado en IPv6.

4. **Router VRRP**: Todos los routers que ejecutan el protocolo VRRP se llaman routers VRRP.

5. **Grupo de Respaldo VRRP**: Múltiples routers se dividen en grupos, en los cuales se selecciona un router principal y los demás se utilizan como routers de respaldo. Normalmente, uno de los routers principales está en funcionamiento, mientras que el router de respaldo está inactivo. Cuando el router principal falla, se selecciona uno de los routers de respaldo para reemplazar al router principal fallido. Los routers en este grupo forman un grupo de respaldo.

    Como se muestra en la figura a continuación, hay dos routers y dos pasarelas. Uno de los dos routers es seleccionado como el router primario, y los otros son routers de respaldo. El router primario es responsable de reenviar datagramas, mientras que el router de respaldo está en un estado inactivo. Cuando el router primario falla, el router de respaldo se convertirá en el router primario, reemplazando al router primario para realizar la función de reenvío.

    ![Enrutamiento estático con dos routers y dos pasarelas](../../img/vrrp3.png 'Enrutamiento estático con dos routers y dos pasarelas')

6. **Router virtual**: Un router virtual es una colección de todos los routers en un grupo de respaldo de VRRP. Es un concepto lógico y no existe realmente. Al observar los routers en el grupo de respaldo desde fuera del grupo de respaldo, siento que todos los routers en el grupo son como uno solo. Puede entenderse que están en un grupo: router maestro + todos los routers de respaldo = routers virtuales. El router virtual tiene una dirección IP virtual y una dirección MAC virtual. Si la IP virtual es la misma que la IP de un router en el grupo de respaldo, entonces este router se llama el propietario de la dirección IP y actúa como el router principal en el grupo de respaldo.

    Como se muestra en la figura a continuación: RA, RB y RC son routers VRRP, que forman un grupo de respaldo VRRP. RA es el router principal, mientras que RB y RC son routers de respaldo. Estos tres routers parecen uno solo desde el exterior, formando así un grupo de routers virtuales. El router virtual tiene una dirección IP virtual de 10.1.1.1 (la IP del router principal de RA). RA es el propietario de la dirección IP y el router principal.

    ![Router Virtual](../../img/vrrp3.png 'Router Virtual')

7. **Dirección IP virtual y dirección MAC virtual**: el router virtual en el grupo VRRP (grupo de respaldo) aparece con una dirección MAC virtual única, con el formato de dirección 00–00–5e-00–01-[VRID], y el VRID es el número del grupo VRRP, que va desde 0 hasta 255.

    En la figura anterior, tres routers están en un grupo, los cuales pueden numerarse del 0 al 255.

**Notas**:

1. El router virtual tiene una dirección IP. Los hosts en la LAN solo necesitan conocer la dirección IP de este router virtual y configurarla como la dirección del siguiente salto de la ruta predeterminada.
2. La dirección IP del router virtual puede ser la dirección IP no asignada en el segmento de red donde se encuentra el grupo de respaldo, o puede ser la misma que la dirección IP de la interfaz de un router en el grupo de respaldo.
3. Los routers con la misma dirección IP que la dirección IP virtual se llaman propietarios de dirección IP. Solo se puede configurar un propietario de dirección IP en el mismo grupo de respaldo VRRP.
