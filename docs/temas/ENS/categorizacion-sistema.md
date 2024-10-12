La **categorización de un sistema** según el **Esquema Nacional de Seguridad (ENS)** es un proceso fundamental para determinar las medidas de seguridad que deben implementarse en función del nivel de riesgo que puedan suponer los sistemas de información y los servicios que estos prestan. Este proceso se basa en el análisis del **impacto o perjuicio** que la pérdida de las dimensiones de seguridad (disponibilidad, integridad, confidencialidad, autenticidad y trazabilidad) podría causar sobre los servicios, activos o personas.

### **Legislación aplicable a la categorización de un Sistema**

Al realizar la categorización de un sistema según el *Esquema Nacional de Seguridad* (ENS), es importante referirse a diversas normativas y documentos que regulan o guían este proceso. Aquí te presento una lista con las normativas relevantes y sus artículos específicos relacionados con la categorización de sistemas:

1. RD 311/2022, que regula el Esquema Nacional de Seguridad, en adelante ENS

2. Art. 40 ENS. Categorías de seguridad.

3. CCN STIC 801 Responsabilidades y Funciones en el ENS
   - Responsable de la Información (evaluará la información)
   - Responsable de los Servicios (evaluará los servicios)
   - Responsable de la Seguridad (firmará la Declaración de Aplicabilidad según Artículo 28 ENS)
   - El Administrador de Seguridad (realizará la implantación de las medidas de seguridad, anexo II del ENS y guía 804 de Implantación.)

4. Guía CCN STIC 803 Valoración de Sistemas en el ENS

5. Guía CCN STIC 815 Indicadores y Métricas en el ENS

### **Pasos para la categorización de un sistema según el ENS** <!-- {docsify-ignore} -->

1. **Identificación de los servicios**: El primer paso es identificar los servicios prestados por el sistema y los activos implicados en esos servicios.

2. **Evaluación del impacto o perjuicio**: Se evalúa el tipo de perjuicio que podría causar una falla en alguna de las dimensiones de seguridad del sistema. Estos perjuicios pueden ser clasificados en tres niveles: bajo, medio y alto, según su severidad.

   - **Bajo**: Si el impacto es limitado y puede recuperarse fácilmente.
   - **Medio**: Si el impacto es considerable y afecta de manera significativa a la organización, pero no es catastrófico.
   - **Alto**: Si el impacto es muy severo, afecta gravemente el servicio y pone en riesgo la viabilidad del sistema, la organización o personas.

3. **Determinación del nivel de seguridad**: Dependiendo de la severidad de los impactos, se clasifica el sistema en uno de los tres niveles de seguridad: **bajo**, **medio** o **alto**. Esto se realiza para cada una de las dimensiones de seguridad (disponibilidad, confidencialidad e integridad).

4. **Asignación de medidas de seguridad**: En función de la categorización obtenida, se asignan las medidas de seguridad correspondientes a cada nivel.

### **Factores a tener en cuenta en la categorización** <!-- {docsify-ignore} -->

- **Tipo de perjuicio**: Evaluar el impacto en caso de pérdida de confidencialidad, integridad o disponibilidad del sistema.
- **Naturaleza del servicio**: Considerar la criticidad del servicio prestado por el sistema.
- **Impacto sobre activos**: Evaluar la afectación sobre los activos de información y tecnológicos.
- **Cumplimiento de leyes o regulaciones**: Evaluar si existen normativas legales o reglamentarias que exijan un nivel de protección particular.
- **Perjuicio a las personas**: Determinar si la falta de seguridad del sistema podría causar daños personales, sociales o económicos a los usuarios.

### **Tabla de Categorización según el ENS (Bajo, Medio, Alto)** <!-- {docsify-ignore} -->

| **Factor de evaluación**            | **Bajo**                                           | **Medio**                                          | **Alto**                                           |
|-------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|
| **Tipo de Perjuicio**               | Impacto leve que no afecta significativamente      | Perjuicio considerable con impacto notable         | Perjuicio muy grave, afectando de forma crítica    |
| **Servicio**                        | Impacto mínimo en la prestación del servicio       | Afectación importante al servicio, pero recuperable| Pérdida del servicio esencial o crítico            |
| **Activos**                         | Pérdida de activos sin valor estratégico           | Pérdida de activos con valor significativo         | Pérdida de activos clave o estratégicos            |
| **Ley o Regulación**                | Incumplimiento formal subsanable     | Incumplimiento material o formal no subsanable        | Incumplimiento grave de leyes o normativas         |
| **Perjuicio a Individuos**          | Daño leve o sin consecuencias importantes (reparable)         | Daño notable a individuos, afectación significativa (difícil reparación)| Daño severo, pérdida de derechos o confidencialidad (difícil o imposible reparación)|

### **Niveles de Impacto** <!-- {docsify-ignore} -->

Cada una de las categorías puede tener diferentes niveles de impacto (bajo, medio o alto) que deben ser evaluados:

- **Bajo**: El impacto es limitado y no interfiere gravemente en la operación.
- **Medio**: El impacto es considerable, afecta al servicio o al funcionamiento, pero no es devastador.
- **Alto**: El impacto es crítico y puede paralizar el sistema, poner en peligro a la organización o a las personas.

### Explicación del Proceso de Categorización: <!-- {docsify-ignore} -->

1. **Tipo de Perjuicio**:
   - **Bajo**: Un fallo en la seguridad no tiene consecuencias significativas.
   - **Medio**: El perjuicio causado por una brecha de seguridad es considerable, pero la situación es recuperable sin graves implicaciones.
   - **Alto**: El perjuicio es severo, afectando de forma crítica al sistema, la organización o las personas.

2. **Servicio**:
   - **Bajo**: La pérdida del servicio tiene un impacto menor o tolerable.
   - **Medio**: El servicio es afectado de manera considerable, pero el sistema puede continuar operando de forma limitada o parcial.
   - **Alto**: La pérdida del servicio impide su funcionamiento por completo, y es vital para el funcionamiento de la organización.

3. **Activos**:
   - **Bajo**: Los activos que se ven afectados no tienen un valor estratégico.
   - **Medio**: Los activos perdidos o dañados tienen un valor importante y afectan al funcionamiento organizacional.
   - **Alto**: Los activos afectados son críticos para la operativa de la organización, y su pérdida supone un gran riesgo.

4. **Ley o Regulación**:
   - **Bajo**: El incumplimiento de leyes o normativas no genera consecuencias graves.
   - **Medio**: El incumplimiento conlleva sanciones o riesgos legales importantes, pero no catastróficos.
   - **Alto**: El incumplimiento genera serias repercusiones legales, afectando gravemente la continuidad de las operaciones o poniendo en riesgo a la organización.

5. **Perjuicio a Individuos**:
   - **Bajo**: El perjuicio para los individuos afectados es leve, sin repercusiones graves en sus derechos o situación.
   - **Medio**: El perjuicio para los individuos es notable, afectando su vida o derechos de manera considerable.
   - **Alto**: El perjuicio es grave, afectando de manera severa la privacidad, los derechos o el bienestar de las personas involucradas.

### Ejemplo de Categorización <!-- {docsify-ignore} -->

Imaginemos un sistema de gestión de datos personales dentro de una administración pública. Se podrían identificar los siguientes impactos:

- **Disponibilidad**: Medio (si el sistema está caído, el servicio a los ciudadanos se vería afectado significativamente).
- **Confidencialidad**: Alto (pérdida de datos personales altamente sensibles).
- **Integridad**: Alto (la alteración de los datos podría afectar la calidad y la exactitud del servicio prestado).
- **Autenticidad**: Medio (la suplantación de identidad podría comprometer la autenticidad del servicio).
- **Trazabilidad**: Medio (pérdida de registros sobre los accesos a la información).

De acuerdo con esta categorización, el sistema debería cumplir con las medidas de seguridad correspondientes a un **nivel medio o alto**.

### **CUADRO RESUMEN** <!-- {docsify-ignore} -->

**CONFIDENCIALIDAD**: Porque su relevancia causaría ...

**INTEGRIDAD**: Porque su manipulación o modificación no autorizada causaría ...

**AUTENTICIDAD**:Porque la falsedad en su origen o en su destinatario causaría...

||||||||
|--------|-------|--------|-------|--------|-------|-------|
||Nº personas que deben conocerlo (solo aplica confidencialidad)| Un daño ...| Incumplimiento ... de una norma (N/A autenticidad)|Pérdidas €€|Daño reputacional|Protestas|
|**ALTO**|Nº reducido de personas|Grave, de difícil reparación|Grave|Elevadas|Grave|Masivas (alteración seria orden público)|
|**MEDIO**|Sólo para trabajar con autorización|Importante, aunque subsanable|Material o formal|Importantes|Importante|Públicas (alteración orden público)|
|**BAJO**|No deben conocerla personas ajenas a la organización|Algún perjuicio|Leve|Apreciables|Apreciable|Mútliples individuales|

**Sin valorar** (CONFIDENCIALIDAD): Inforamción de carácter público, accesible por cualquier persona
**Sin valorar** (AUTENTICIDAD): cuando origen/destino es irrelevante (conocido por otros medios/difusión anónima)
**Sin valorar** (INTEGRIDAD): cuando los errores en su contenido carecen de consecuencias o son fácil y rápidamente reparables

|**TRAZABILIDAD**|||||
|----|----|----|----|----|
||Porque la incapacidad para rastrear un acceso a la infomación|
||Impediría/dificultaría notablemente la capacidad para subsanar un error...|Dificultaría ... la capacidad para perseguir delitos|Facilitaría ... la comisión de delitos ...|
|**ALTO**|Grave|Notablemente|Enormemente Graves||
|**MEDIO**|Importante|Notablemente¿?|Nada en los puntos||
|**BAJO**|No notablemente|Nada en los puntos|N/A||

**Sin valorar** (TRAZABILIDAD): cuando no se pueden producir errores de importancia (o son fácilmente reparables por otros medios), o no se pueden perpetrar delitos relevantes ( o su investigación es fácil por otros medios)

|**DISPONIBILIDAD**|||
|---|---|---|
||RTO (tiempo máximo que el servicio puede permanecer interrumpido)||
|**ALTO**|<4 horas||
|**MEDIO**|4h - 1d||
|**BAJO**|1d - 5d||
|**Sin valorar|> 5d||
