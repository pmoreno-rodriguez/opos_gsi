## Procedimientos de copias de respaldo y recuperación de la información <!-- {docsify-ignore} -->

La política de backup deberá garantizar la **Disponibilidad**, **Integridad** y **Confidencialidad** cuando se trate de ficheros con datos de carácter personal.

Se deberán crear copias de respaldo de los siguientes elementos del sistema:
>- Servidores y aplicaciones
>- Equipamiento de comunicaciones
>- Buzones de correo
>- Almacenamiento compartido (**NAS**)
>- **BBDD** (Bases de datos)

### Periodicidad de las copias de seguridad:
Las copias se deberán realizar en un periodo de inactividad del sistema, preferiblemente por la noche, y seguirán la siguiente periodicidad:
>- Diario **Incremental** en disco
>- Completo **semanal** en disco
>- Completo **mensual** en cinta

La cabina de almacenamiento estará convenientemente dimensionada para almacenar las copias de seguridad en disco, ya que el procedimiento de copia y de recuperación se realizará en menor tiempo.

Se establecerá un **almacenamiento secundario** para aquellas copias de seguridad que necesiten ser conservadas durante largos periodos (5 o más años). Este almacenamiento secundario residirá fuera del **CPD** y preferiblemente en un armario ignífugo.

El sistema de copias de seguridad será verificado periódicamente (cada 6 meses) por el responsable destinado a tal efecto.