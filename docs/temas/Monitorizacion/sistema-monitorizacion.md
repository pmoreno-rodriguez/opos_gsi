## Identificar elementos susceptibles de monitorización y definir los parámetros de monitorización y alerta para cada uno de ellos <!-- {docsify-ignore} -->


La infraestructura contará con un sistema de monitorización compatible con **SNMP v2c** y **v3**, en el que el gestor **SNMP** (**NMS**) monitorizará el estado de los servidores tanto a nivel de disponibilidad como de consumo de recursos. Mostrará un cuadro de mando con el estado de los sistemas, realizará informes y tendrá un histórico de las alarmas de los sistemas.

El gestor (**NMS**) se colocará en la **vlan interna** de servicios donde los agentes **SNMP** podrán enviar las alarmas.

Se sugiere el uso de **Nagios** por ser una herramienta de código abierto y ampliamente extendida. Como alternativa, se podrán utilizar otras herramientas también de código abierto como **Zabbix**, **Zenoss**, etc.

Es necesario instalar el **agente de Nagios** en todos los elementos físicos que componen la infraestructura (cortafuegos, servidores, switches, etc.), el cual enviará las **traps** al servidor **SNMP** cuando se superen los umbrales definidos. Se deberá monitorizar como mínimo:
- Uso de **CPU** y **memoria** de todos los dispositivos.
- **Ancho de banda** de los interfaces del equipamiento de comunicaciones.

El gestor **Nagios** mostrará en su consola un **histórico de eventos** de los sistemas y las alertas activas. Se configurará para que envíe notificaciones de las alertas a los administradores de los sistemas mediante **correo electrónico**.

De forma adicional a la plataforma de monitorización, se deberá contar con una **plataforma de recolección y explotación de logs**. Los sistemas de información deberán enviar los logs al sistema de explotación de logs.

Se sugiere el uso de **ELK** (**Elasticsearch Stack**) por ser una herramienta de código abierto que proporciona las mismas funcionalidades que sus competidores, como puede ser **Splunk**.

**ELK** está formado por:
- **Elasticsearch**: un motor de búsqueda de texto distribuido desarrollado en **Java**. Proporciona una interfaz **REST** para poder invocarlo desde otras aplicaciones.
- **Kibana**: permite visualizar los datos de **Elasticsearch**, crear cuadros de mando, gráficas, etc.
