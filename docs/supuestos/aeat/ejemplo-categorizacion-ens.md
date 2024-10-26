## Ejemplo de categorización de un sistema siguiendo el ENS <!-- {docsify-ignore} -->

> [!NOTE|label: Nota Aclaratoria]
> Procedemos a categoriar el sistema de la app del IRPF (consideramos que por detrás tenemos el backend de Renta Web):

Daremos niveles n. a. (no aplica), bajo, medio o alto para las dimensiones de seguridad DICAT (Disponibilidad, Integridad, Confidencialidad, Autenticidad y Trazabilidad), seguiremos el anexo I del ENS (Esquema Nacional de Seguridad) real decreto 311/2022, y la [Guía ccn stic 803](../../pdf/803_ENS-valoracion.pdf) de valoración de los sistemas

Operativizaremos las medidas de seguridad sobre estos aspectos:

- Alcanzar los objetivos de la organización
- Proteger los activos a cargo
- Cumplir el sistema jurídico (cumplir el derecho)
- Evaluación de posibles perjuicios a personas físicas/jurídicas [en este caso concreto el irpf es para personas físicas] (individuos)

Cogeremos el nivel más alto y eso será la categoría del sistema

### Disponibilidad <!-- {docsify-ignore} -->

Aquí la valoración es objetiva, si el RTO (Recovery Time Objective) de nuestro sistema es menor a 4 horas la disponibilidad será alta, entre 4 horas y 24 horas disponibilidad media, de 1 día a 5 días hábiles o 7 naturales (1 semana) disponibilidad baja, más tiempo de parada que ese disponibilidad n. a. (no aplica).

En este caso, al no ser un sistema crítico para vidas humanas o vidas de organizaciones (repetimos que aquí no trabajamos con personas jurídicas) no necesitamos un RTO de menos de 4 horas, pero tampoco permitiremos caídas de una semana por el daño reputacional (seguramente para un sistema de impuestos no pasaría nada por estar caídos una semana a nivel operativo pero el daño reputacional es altísimo).

Por lo tanto, 4 horas < RTO < 24 horas, **DISPONIBILIDAD MEDIA**

### Integridad <!-- {docsify-ignore} -->

Si la integridad de los datos de la renta fuese comprometida no podríamos cumplir el objetivo de cobrar tributos, cobrar impuestos, pero no sería una afectación permanente. Suponemos que la agencia tributaria posee backups lo suficientemente protegidos para poder restaurar los valores a su valor preciso. Sería muy molesto pero recuperable: **integridad media**.

Revisaremos ahora el resto de aspectos para comprobar si podemos invocar integridad alta o no, en cuanto a proteger los activos los datos podemos decir lo mismo (es molesto pero se puede hacer al recuperar backups, seguimos en integridad media), en cuanto a cumplir las normas decimos lo mismo, nos podemos recuperar y volver a estar cumpliendo la normativa del irpf, y en cuanto a los derechos de los ciudadanos incluso sería integridad baja si sale a pagar o media si sale a devolver (no habría daños relevantes a los ciudadanos), **INTEGRIDAD MEDIA**

### Confidencialidad <!-- {docsify-ignore} -->

Nos roban la base de datos con todos los datos de los ciudadanos presentes en la agencia tributaria. En cuanto a objetivos como son derechos de cobro, derechos devengados por el tesoro del estado podemos seguir cobrando; los activos de datos no se han protegido y, una vez la información filtrada, no se puede recuperar. En estos casos el nivel será el del peor daño posible a individuos que vamos a revisar enseguida. Tampoco hemos cumplido el derecho; en las normas está que hay que proteger los datos (sin ir más lejos el RGPD).

Por lo tanto, acabamos en posibles daños a individuos físicos; en este caso se pueden filtrar datos religiosos, cuentas bancarias, datos sexuales (cónyuge), discapacidad, aportaciones sindicales y ongs, etc. **CONFIDENCIALIDAD ALTA**

### Autenticidad <!-- {docsify-ignore} -->

¿Qué es lo peor que puede pasar si hay, por ejemplo, una usurpación de identidad? Si tenemos violaciones masivas de autenticidad podemos hacernos pasar por usuarios y obtener sus datos; muchas veces la autenticidad copia a la confidencialidad. La confidencialidad y la autenticidad están muy relacionadas. **AUTENTICIDAD ALTA**

(LA AUTENTICIDAD TAMBIÉN ESTÁ RELACIONADA CON LA INTEGRIDAD, SI ENTRAS PUEDES CAMBIAR COSAS)

### Trazabilidad <!-- {docsify-ignore} -->

¿Qué? ¿Cómo? ¿Cuándo? Son los logs, saber todo lo que ha pasado en el sistema, quién lo ha realizado y cuándo.

- Con violación de trazabilidad (básicamente algunos atacantes han borrado los logs o los han manipulado para ocultar el ataque), ¿se pueden cumplir los objetivos? Sí.
- Con violación de trazabilidad (básicamente algunos atacantes han borrado los logs o los han manipulado para ocultar el ataque), ¿se pueden mantener protegidos los activos? No, porque si no te has enterado estás facilitando que roben más datos de alta confidencialidad, por lo tanto copia a la confidencialidad. **TRAZABILIDAD ALTA**

---

- **DISPONIBILIDAD MEDIA**
- **INTEGRIDAD MEDIA**
- **CONFIDENCIALIDAD ALTA**
- **AUTENTICIDAD ALTA**
- **TRAZABILIDAD ALTA**

La categoría del sistema es el nivel más alto: **CATEGORÍA ALTA**
