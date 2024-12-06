## Cómo Categorizar un Sistema en el ENS <!-- {docsify-ignore} -->

**Extraído de la Guía CCN-STIC 803**

Esta es una de las tareas que más “pánico” le produce a cualquier organismo de la Administración y es en realidad uno de los primeros pasos a la hora de implantar el ENS, pues de esta categorización dependerán muchas de las medidas a implantar tanto del marco operacional como de las medidas de protección.

**Según el Anexo I. RD 311/2022**


> La determinación de la categoría de un sistema se basa en la valoración del impacto que tendría sobre la organización un incidente que afectara a la seguridad de la información o de los sistemas, con repercusión en la capacidad organizativa para:
>
> - Alcanzar sus objetivos.
>
> - Proteger los activos a su cargo.
>
> - Garantizar la conformidad con el ordenamiento jurídico.

Lo que tenemos que hacer es valorar el impacto que tendría un incidente que afecte a la seguridad de la información y los sistemas. Para determinar ese impacto hay que tener en cuenta las dimensiones de la seguridad: Disponibilidad [D], Integridad [I], Confidencialidad [C], Autenticidad [A], Trazabilidad [T], en adelante [DICAT].

El impacto que tendría un incidente que pudiese ocurrir sobre cada información o cada servicio puede afectar a una o más de sus dimensiones de seguridad, y cada dimensión de seguridad afectada se adscribirá a uno de los siguientes niveles: BAJO, MEDIO o ALTO. Si una dimensión de seguridad no se ve afectada, no se adscribirá a ningún nivel.

Un grupo de Información y/o Servicio formarán un sistema de información a categorizar, por tanto podemos confeccionar una tabla como la que sigue en donde para cada información y/o servicio de los que formarían nuestro sistema, establecemos cómo sería el nivel del impacto (Bajo, Medio o Alto) que un incidente produciría en cada una de las dimensiones de seguridad a tener en cuenta.

<table>
  <thead>
    <th colspan="6" style="text-align: center;"><strong>DIMENSIONES</strong></th>
  </thead>
  <tbody>
  <tr>
    <th>SISTEMA</th>
    <th>Disponibilidad [D]</th>
    <th>Integridad [I]</th>
    <th>Confidencialidad [C]</th>
    <th>Autenticidad [A]</th>
    <th>Trazabilidad [T]</th>
  </tr>
  <tr>
    <td><strong>Información A</strong></td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
  </tr>
  <tr>
    <td><strong>Información B</strong></td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
  </tr>
  <tr>
    <td><strong>Servicio X</strong></td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
  </tr>
  <tr>
    <td><strong>Servicio Y</strong></td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
    <td>Bajo/Medio/Alto</td>
  </tr>
  </tbody>
</table>


**Tabla 1**

### 2. Interpretación de los niveles de impacto

Ahora sólo debemos tener en cuenta lo que significa cada dimensión y, para cada una, qué significan los niveles de impacto BAJO, MEDIO y ALTO.

#### Nivel BAJO

Se utilizará cuando las consecuencias de un incidente de seguridad que afecte a alguna de las dimensiones de seguridad supongan un **perjuicio limitado** sobre las funciones de la organización, sobre sus activos o sobre los individuos afectados. Se entenderá por **perjuicio limitado**:

1. La reducción de forma apreciable de la capacidad de la organización para atender eficazmente con sus obligaciones corrientes, aunque estas sigan desempeñándose.  
2. Que los activos de la organización sufran un daño menor.  
3. El incumplimiento formal de alguna ley o regulación que tenga carácter de subsanable.  
4. Causar un perjuicio menor a algún individuo, que, aún siendo molesto, pueda ser fácilmente reparable.  
5. Otros de naturaleza análoga.  

#### Nivel MEDIO

Se utilizará cuando las consecuencias de un incidente de seguridad que afecte a alguna de las dimensiones de seguridad supongan un **perjuicio grave** sobre las funciones de la organización, sobre sus activos o sobre los individuos afectados. Se entenderá por **perjuicio grave**:

1. La reducción significativa de la capacidad de la organización para atender eficazmente a sus obligaciones fundamentales, aunque estas sigan desempeñándose.  
2. Que los activos de la organización sufran un daño significativo.  
3. El incumplimiento material de alguna ley o regulación, o el incumplimiento formal que no tenga carácter de subsanable.  
4. Causar un perjuicio significativo a algún individuo, de difícil reparación.  
5. Otros de naturaleza análoga.  

#### Nivel ALTO

Se utilizará cuando las consecuencias de un incidente de seguridad que afecte a alguna de las dimensiones de seguridad supongan un **perjuicio muy grave** sobre las funciones de la organización, sobre sus activos o sobre los individuos afectados. Se entenderá por **perjuicio muy grave**:

1. La anulación de la capacidad de la organización para atender a alguna de sus obligaciones fundamentales y que estas sigan desempeñándose.  
2. Que los activos de la organización sufran un daño muy grave, e incluso irreparable.  
3. El incumplimiento grave de alguna ley o regulación.  
4. Causar un perjuicio grave a algún individuo, de difícil o imposible reparación.  
5. Otros de naturaleza análoga.  

### 3. Determinación de la categoría del sistema

Cuando un sistema maneje diferentes informaciones y preste diferentes servicios, el nivel del sistema en cada dimensión será el mayor de los establecidos para cada información y cada servicio.

- **Categoría ALTA**: Si alguna dimensión de seguridad alcanza el nivel ALTO.  
- **Categoría MEDIA**: Si alguna dimensión de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.  
- **Categoría BÁSICA**: Si alguna dimensión de seguridad alcanza el nivel BAJO, y ninguna alcanza un nivel superior.  

### 4. Proceso recomendado para la valoración

#### Pasos iniciales:

1. Es recomendable centrarse en aquellos activos y en aquellas dimensiones donde el impacto de un incidente sea mayor, obviando combinaciones con impactos despreciables o irrelevantes.  
2. **Activos de tipo información**: Valorar en este orden:  
   - Confidencialidad,  
   - Integridad,  
   - Autenticidad,  
   - Trazabilidad,  
   - Disponibilidad (si fuera relevante).  

3. **Activos de tipo servicio**: Valorar en este orden:  
   - Disponibilidad,  
   - Autenticidad,  
   - Trazabilidad.  

### 5. Quién debe valorar la información y los servicios

#### Responsabilidades:

1. Si el organismo ha creado un Comité TIC (Comité Técnico) y un Comité STIC (Comité de Seguridad de la Información), la tarea puede dividirse:  
   - El Comité TIC determina los tipos de información que se manejarán y clasifica los servicios.  
   - El Comité STIC establece los niveles de seguridad recomendados.  

2. La responsabilidad final de la valoración corresponde al responsable de la información o del servicio, quien deberá aprobar la propuesta realizada por el Responsable del Sistema o el Responsable de Seguridad.  

### 6. Valoración de la información

#### Criterios:

1. Determinar los datos relevantes (descartando elementos auxiliares como servicios de directorio o claves de acceso).  
2. Para cada elemento de información, considerar:
   - Nombre único.  
   - Responsable.  
   - Otras características relevantes.  

3. Valoración de las dimensiones según su impacto:

| **Dimensión**         | **Criterio de impacto**                                                         |
|------------------------|---------------------------------------------------------------------------------|
| **Confidencialidad**   | Consecuencias de la revelación a personas no autorizadas.                      |
| **Integridad**         | Consecuencias de una modificación no autorizada.                              |
| **Autenticidad**       | Consecuencias de que la información no sea auténtica.                         |
| **Trazabilidad**       | Consecuencias de no poder rastrear accesos o modificaciones.                  |
| **Disponibilidad**     | Consecuencias de que personas autorizadas no puedan acceder a la información. |

### 7. Datos personales en el ENS

Los datos de carácter personal tienen su propia regulación bajo la Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD). Muchas medidas del ENS y de la LOPDGDD pueden ser compartidas. Sin embargo:

- Los niveles BÁSICO, MEDIO y ALTO no son equivalentes entre el ENS y la LOPDGDD.  
- La categorización de sistemas puede realizarse por separado para evitar sobreprotección y costes innecesarios.  

### 8. Valoración de los servicios

#### Definición de servicio

Se entiende por servicio cada actividad llevada a cabo por la Administración o una organización bajo su control destinada a satisfacer necesidades colectivas. Solo se valoran los servicios relevantes para procesos administrativos.

#### Exclusiones

No se valoran servicios internos o auxiliares como correo electrónico, directorios o copias de respaldo.

#### Valoración:

| **Dimensión**         | **Criterio de impacto**                                                 |
|------------------------|-------------------------------------------------------------------------|
| **Disponibilidad**     | Consecuencias de que un servicio no esté disponible cuando se necesita. |
| **Confidencialidad**   | Consecuencias de su revelación a personas no autorizadas.              |
| **Autenticidad**       | Consecuencias de un uso indebido del servicio.                         |
| **Trazabilidad**       | Consecuencias de no poder rastrear accesos al servicio.                |

### Documentación

Es esencial documentar todo el proceso que ha llevado a determinar la categoría del sistema, justificando los niveles de impacto y la categorización final.

Con esto, el sistema queda categorizado y listo para la implantación de medidas según el Esquema Nacional de Seguridad.