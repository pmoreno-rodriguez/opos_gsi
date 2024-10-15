## Procedimientos de copias de respaldo y recuperación de la información <!-- {docsify-ignore} -->

La política de backup deberá garantizar la **Disponibilidad**, **Integridad** y **Confidencialidad** cuando se trate de ficheros con datos de carácter personal.

Se deberán crear copias de respaldo de los siguientes elementos del sistema:
>- Servidores y aplicaciones
>- Equipamiento de comunicaciones
>- Buzones de correo
>- Almacenamiento compartido (**NAS**)
>- **BBDD** (Bases de datos)

### Periodicidad de las copias de seguridad: <!-- {docsify-ignore} -->

Las copias se deberán realizar en un periodo de inactividad del sistema, preferiblemente por la noche, y seguirán la siguiente periodicidad:
>- Diario **Incremental** en disco
>- Completo **semanal** en disco
>- Completo **mensual** en cinta

La cabina de almacenamiento estará convenientemente dimensionada para almacenar las copias de seguridad en disco, ya que el procedimiento de copia y de recuperación se realizará en menor tiempo.

Se establecerá un **almacenamiento secundario** para aquellas copias de seguridad que necesiten ser conservadas durante largos periodos (5 o más años). Este almacenamiento secundario residirá fuera del **CPD** y preferiblemente en un armario ignífugo.

El sistema de copias de seguridad será verificado periódicamente (cada 6 meses) por el responsable destinado a tal efecto.

## Estrategia de Respaldo de Información <!-- {docsify-ignore} -->


> [!ATTENTION]
> EJEMPLO: Política de copias de seguridad teniendo en cuenta que basta con poder recuperar la información a distintos instantes temporales dentro del último año. En este ejemplo, no es posible aumentar la capacidad de almacenamiento de la SAN

Para salvaguardar la información del proyecto, es necesario realizar copias periódicas de los datos que permitan recuperarlos tras una contingencia, restaurándolos al estado que tenían en distintos momentos temporales.

El almacenamiento de las copias se realizará en la misma SAN donde residen los datos, evitando así la adquisición de nuevo equipamiento. Como no está claro si contamos con un robot de cintas, se optará por una librería virtual de cintas que simula el almacenamiento en cintas usando discos en la cabina.

El esquema elegido sigue el modelo tradicional de **Abuelo-Padre-Hijo**, que se detalla a continuación, especificando la periodicidad, tipo de copia, retención, ventana de realización, ubicación y procedimiento de recuperación para cada tipo de respaldo:

### Copia Mensual <!-- {docsify-ignore} -->

- **Periodicidad**: Primer domingo de cada mes.
- **Tipo**: Completa.
- **Ventana**: Horario nocturno (entre las 00:00 y las 07:00 horas) para minimizar la interrupción del uso de la aplicación.
- **Ubicación**: Cinta.
- **Retención**: Un año.
- **Procedimiento de recuperación**: Este tipo de copia es para recuperación a largo plazo, y aunque el tiempo para restaurarla sea mayor (debido a la necesidad de transferir de cinta a disco), se considera aceptable debido a la baja probabilidad de necesitar esta restauración. Durante las dos primeras semanas del mes, esta copia se mantendrá también en disco como copia semanal.

### Copia Semanal <!-- {docsify-ignore} -->

- **Periodicidad**: Todos los domingos.
- **Tipo**: Completa.
- **Ventana**: Horario nocturno, misma franja que la copia mensual.
- **Ubicación**: Disco.
- **Retención**: Dos semanas.
- **Procedimiento de recuperación**: Estas copias permiten restaurar los datos con mayor granularidad y en menos tiempo que las mensuales. La primera semana del mes, coincidirá con la copia mensual.

### Copia Diaria <!-- {docsify-ignore} -->

- **Periodicidad**: Diaria (de lunes a sábado).
- **Tipo**: Incremental.
- **Ventana**: Horario nocturno, misma franja que las anteriores.
- **Ubicación**: Disco.
- **Retención**: Entre uno y seis días.
- **Procedimiento de recuperación**: Las copias incrementales se realizan a partir de la última copia completa o la última incremental, permitiendo una salvaguarda más rápida. Aunque el proceso de recuperación sería más largo, dado el bajo volumen de información almacenada, esto es aceptable. Cada domingo, tras la copia semanal, se eliminarán las copias diarias de la semana anterior.

### Resumen de Retención <!-- {docsify-ignore} -->

Al cabo de un año de aplicar este esquema, se dispondrá de:
- 12 copias completas mensuales.
- 2 copias completas semanales (correspondientes a la semana actual y la anterior).
- Entre 0 y 6 copias incrementales diarias de la semana en curso.

Este esquema asegura la disponibilidad de los datos a diferentes niveles de granularidad y para distintos horizontes temporales, adaptándose al volumen y criticidad del sistema.

