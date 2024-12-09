> [!TIP|style: callout|icon: fa fa-check|label: Contenido Verificado]
> Contenido extraído de la documentación de [Preparatic 29](https://www.preparatic.org/category/material-pack/material-pack-preparatic-29/).


## IDENTIFICACIÓN Y CATEGORIZACIÓN DEL SISTEMA <!-- {docsify-ignore} -->

Según el art. 40 del RD 311/2022 y su Anexo I, la categoría de seguridad de un sistema modula el equilibrio entre la importancia de la información que maneja y los servicios que presta y el esfuerzo de seguridad requerido, en función de los riesgos a los que está expuesto, bajo el principio de proporcionalidad. La valoración se hace en base a la guía de seguridad CCN-STIC-803. En los siguientes pasos se hace un resumen del proceso de categorización.

### Asignación de niveles de seguridad a las dimensiones

   La categorización se va a hacer para cada dimensión de la seguridad, es decir:
   
   - D – Disponibilidad
   - I – Integridad
   - C – Confidencialidad
   - A – Autenticidad 
   - T – Trazabilidad

   Para cada dimensión se asignará una de las siguientes opciones según el nivel de seguridad requerido:
   - No aplica.
   - Bajo.
   - Medio.
   - Alto.

   Por lo tanto, habrá que rellenar la siguiente tabla combinando lo visto hasta ahora. Si tenemos varios sistemas o subsistemas a categorizar, habrá que hacer una tabla por cada uno de ellos.

   |                   | Disponibilidad <br><center>D</center> | Integridad<br><center>I</center>| Confidencialidad <br><center>C</center> | Autenticidad <br><center>A</center> | Trazabilidad <br><center>T</center> |
|-------------------|----------------|--------------|------------|------------------|--------------|
| **Información**   | -              | ¿?           | ¿?         | ¿?               | ¿?           |
| **Servicios**     | ¿?             | -            | -          | -                | -            |

Lo habitual es que no se categorice la disponibilidad de la información sino del servicio ya que se asume que el servicio da acceso a la información. De forma similar no se categoriza el resto de dimensiones para el servicio ya que suelen aplicar a la información. En cualquier caso, cada persona tiene su propio criterio y puede darse el caso de que el ejercicio de pie, por ejemplo, a necesitar categorizar la integridad del servicio.

Para asignar un nivel de seguridad u otro a cada dimensión se tendrá que valorar el impacto de un incidente sobre:
- Alcanzar los objetivos del sistema.
- Proteger los activos a su cargo.
- Garantizar la conformidad con el ordenamiento jurídico.

Para una evaluación más amplia del impacto habría que tener en cuenta (consulta la [guía del CCN](/temas/ENS/criterios-valoracion.md#criterios-comunes) para más detalles):
- Disposición legal.
- Perjuicio directo.
- Incumplimiento de una norma.
- Pérdidas económicas.
- Reputación.
- Protestas.
- Delitos.

La asignación de un nivel u otro es algo muy personal, la experiencia te lo irá dando, pero lo importante es que esté justificado y que se atienda a una serie de cuestiones base:
- La disponibilidad se puede categorizar según el RTO. Busca en la [guía 803 del CCN](/temas/ENS/criterios-valoracion.md#rto).
- Un nivel Alto suele estar vinculado con: riesgo de muerte para las personas, perjuicio muy alto para el país, etc. Si se pone hay que tenerlo muy justificado y asumir que se pueden implantar las medidas que este nivel requiere.
- Piensa que cada nivel implica unas medidas de seguridad. Valora si compensa aplicar dichas medidas en tu sistema. ¿Me va a costar más las medidas que el sistema? ¿Me va a llevar mucho administrarlo? ¿Cuál es el tipo de usuario que va a utilizar la aplicación y de qué medios disponen o tienen la obligación de disponer?

> [!INFO|style:callout|label:Consejo de Preparatic]
> Si nos piden categorizar el sistema, dedica unos minutos para justificar el motivo por el que se asigna un nivel de seguridad u otro.

### Nivel de categorización del sistema <!-- {docsify-ignore} -->

La categoría del sistema conforme al ENS se determina de la siguiente forma:
- **Básica**: Si todas las dimensiones de seguridad tienen el nivel bajo.
- **Media**: Si alguna de las dimensiones de seguridad tiene el nivel medio y ninguna el nivel alto.
- **Alto**: Si alguna de las dimensiones de seguridad tiene el nivel alto.

## MEDIDAS DE SEGURIDAD Y COHERENCIA CON EL RESTO DEL EJERCICIO <!-- {docsify-ignore} -->

A continuación, se recogen una serie de medidas base por cada dimensión y nivel de seguridad que se pueden incluir en el ejercicio. En el anexo se encuentra un detalle más amplio.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Nivel</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="fondo_azul" rowspan="4"><strong>Integridad</strong>/firma (mp.info.3)</td>
      <td>Bajo</td>
      <td>Cualquier firma.</td>
    </tr>
    <tr>
      <td>Medio</td>
      <td>
        • Firma electrónica avanzada basada en cert. cualif.<br>
        • Firma no criptográfica si autorizada y se puede acreditar la voluntad.<br>
        • Algoritmos CCN (mp.com.3/mp.info.3) + CCN-STIC-807
      </td>
    </tr>
    <tr>
      <td>Alto</td>
      <td>
        • Firma electrónica avanzada basada en cert. cualif. + algo que se sabe/es.<br>
        • Disp. HW en VPN (mp.com.3)<br>
        • Productos certificados (mp.com.3)
      </td>
    </tr>
    <tr>
      <td>Refuerzo</td>
      <td>Firma cualificada</td>
    </tr>
    <tr>
      <td class="fondo_azul" rowspan="3"><strong>Disponibilidad</strong></td>
      <td>Bajo</td>
      <td>
        • RTO 1-4D.<br>
        • Backup (mp.info.6)
      </td>
    </tr>
    <tr>
      <td>Medio</td>
      <td>
        • RTO 4-24H<br>
        • SLA (op.ext.1)<br>
        • DoS.
      </td>
    </tr>
    <tr>
      <td>Alto</td>
      <td>
        • RTO ≤ 4H<br>
        • DoS. Detección y reacción.<br>
        • Plan de continuidad.<br>
        • Pruebas.<br>
        • Medios alternativos para la info. (op.cont.4)<br>
        • Medios alternativos para el personal. (op.cont.4)
      </td>
    </tr>
    <tr>
      <td  class="fondo_azul" rowspan="4"><strong>Autenticidad</strong> / Credenciales (op.acc.5 y op.acc.6)</td>
      <td>Bajo</td>
      <td>
        • Cl@vePIN - Nivel básico<br>
        • Cl@vePermanente sin OTP.<br>
        • Bloqueo usuario.<br>
        • Y:<br>
          ◦ Usuario + Password + complejidad, o<br>
          ◦ Pwd+OTP (op.acc.5), o pwd + otro factor (op.acc.6), o<br>
          ◦ Certificados cualificados, o<br>
          ◦ Cert cualificados en Disp. Físico
      </td>
    </tr>
    <tr>
      <td>Medio</td>
      <td>
        • Cl@vePIN - Nivel avanzado<br>
        • Cl@ve Permanente con OTP.<br>
        • Registros de acceso e indicar el último (op.acc.5 y op.acc.6).<br>
        • Y (para op.acc.5, en op.acc.6 sigue aplicando lo de bajo)<br>
          ◦ Pwd+OTP, o<br>
          ◦ Certificados cualificados, o<br>
          ◦ Cert cualificados en Disp. Físico.<br>
        • Doble factor desde zonas no contraladas (op.acc.6)<br>
        • Algoritmos CCN (mp.com.3)
      </td>
    </tr>
    <tr>
      <td>Alto (interno op.acc.6)</td>
      <td>
        • Ventana de acceso.<br>
        • Suspensión de no uso.<br>
        • Productos certificados (mp.info.3)
      </td>
    </tr>
    <tr>
      <td>Refuerzo</td>
      <td>Límite de horarios/suspensión por no uso.</td>
    </tr>
    <tr>
      <td class="fondo_azul" rowspan="3"><strong>Trazabilidad</strong> (op.exp.8)</td>
      <td>Bajo</td>
      <td>
        • Se generará un registro de auditoría, que incluirá, al menos, el identificador del usuario o entidad asociado al evento, fecha y hora, sobre qué información se realiza el evento, tipo de evento y el resultado del evento (fallo o éxito), según la política de seguridad y los procedimientos asociados a la misma.<br>
        • Se activarán los registros de actividad en los servidores.
      </td>
    </tr>
    <tr>
      <td>Medio</td>
      <td>
        • Se revisarán informalmente, de forma periódica, los registros de actividad, buscando patrones anormales.<br>
        • Retención de registros.<br>
        • Control de acceso a admins.<br>
        • Sincronización de servidor de logs.
      </td>
    </tr>
    <tr>
      <td>Alto</td>
      <td>
        • Revisión automática y correlación.<br>
        • Sello de tiempo (mp.info.4).
      </td>
    </tr>
    <tr>
      <td class="fondo_azul" rowspan="3"><strong>Confidencialidad</strong></td>
      <td>Bajo</td>
      <td>
        • Borrado seguro (mp.si.5).<br>
        • Limpieza de metadatos (mp.info.5).<br>
        • Comunicaciones: VPN (mp.com.2).
      </td>
    </tr>
    <tr>
      <td>Medio</td>
      <td>
        • Comunicaciones: algoritmos CCN (mp.com.2).<br>
        • Dispositivos removibles. I y C (mp.si.2) + CCN-STIC-807.
      </td>
    </tr>
    <tr>
      <td>Alto</td>
      <td>
        • Comunicaciones: HW para VPN, productos certificados (mp.com.2).<br>
        • Dispositivos removibles: productos certificados (mp.si.2).
      </td>
    </tr>
    <tr>
      <td class="fondo_azul" colspan="2" rowspan="2">Todas las dimensiones</td>
      <td class="fondo_verde">
        <strong>• op.pl1. AARR</strong><br>
        <strong>• org.1 Política de seguridad CCN-STIC-805</strong>
      </td>
    </tr>
  </tbody>
</table>

## ENS Y GUÍAS DE SEGURIDAD DEL CCN	<!-- {docsify-ignore} -->

En la siguiente tabla se establecen las guías principales del CCN en materia de ENS:

| **CCN-STIC**      | **Denominación**                                                  |
|-------------------|-------------------------------------------------------------------|
| **801**           | Responsabilidades y funciones en el ENS.                          |
| **802**           | Auditoría.                                                        |
| **803**           | Valoración/categorización de sistemas en el ENS.                  |
| **804**           | Medidas e implantación del ENS.                                   |
| **805**           | Política de seguridad de la información.                          |
| **806**           | Plan de adecuación del ENS.                                       |
| **807**           | Criptología de empleo en el Esquema Nacional de Seguridad.        |
| **808**           | Verificación de cumplimiento de medidas.                          |
| **809**           | Declaración y certificación de conformidad con el ENS.            |
| **811**           | Interconexión en el ENS.                                          |
| **812**           | Seguridad en entornos y aplicaciones Web.                         |
| **814**           | Seguridad en el Servicio de Correo.                               |
| **815**           | Métricas e indicadores para el ENS.                               |
| **816**           | Seguridad en redes inalámbricas en el ENS.                        |
| **817**           | Gestión de Ciberincidentes.                                       |
| **818**           | [Herramientas de seguridad en el ENS](temas/ENS/guias-ccn/818.md) |
| **823**           | [Utilización de Servicios en la Nube](temas/ENS/guias-ccn/823.md) |
| **824**           | Informe del Estado de Seguridad.                                  |
| **827**           | Gestión y uso de dispositivos móviles.                            |
| **836**           | Seguridad en VPN en el marco del ENS.                             |
| **844**           | Manual de INES.                                                   |
| **CCN-CERT BP/14**| Declaración de aplicabilidad.                                     |

Atendiendo a estas guías, el proceso de adecuación al ENS sería el siguiente:

1. Preparar y aprobar la política de seguridad (**CCN-STIC-805**), incluyendo roles y responsabilidades (**CCN-STIC-801**).
2. Categorizar los sistemas según la valoración de información y servicios (**CCN-STIC-803**).
3. Realizar el AARR (metodología en función del nivel del sistema).
4. Preparar y aprobar Declaración de aplicabilidad de medidas del Anexo II (**CCN-CERT BP/14**) y perfiles de cumplimiento.
5. Elaborar un plan de adecuación (**CCN-STIC-806**).
6. Implantar, operar y monitorizar las medidas de seguridad mediante gestión continuada (**CCN-STIC-804**).
7. Auditar la seguridad (**CCN-STIC-802** y **CCN-STIC-808**).
8. Publicar la conformidad en la Sede Electrónica (**CCN-STIC-809**).
9. Mejorar e informar sobre el estado de la seguridad (**CCN-STIC-815/824**).

## ENS Y TELETRABAJO <!-- {docsify-ignore} -->

En el marco operacional del ENS dentro de las medidas de **“Control de Acceso”** se establecen mecanismos de autenticación tanto para usuarios internos como para usuarios externos. Estas medidas se aplican desde sistemas de categoría básica, implantando diferentes mecanismos de autenticación según el nivel de seguridad requerido.

> [!INFO|style:callout|label:Consejo de Preparatic]
> Si en tu solución al supuesto planteas la contratación de servicios externos, será positivo tener este punto en cuenta a la hora del acceso a la información y servicios de la AGE del personal que da el servicio.

Las medidas de seguridad **“Protección de dispositivos portátiles”** y **“Protección de la confidencialidad”** tiene en cuenta los dispositivos que salgan de las instalaciones de la unidad y el uso de VPNs para la comunicación. Ambas aplican a todas las categorías de seguridad.

Ejemplos de medidas que se pueden aplicar:
- Gestión de credenciales, fortaleza de contraseñas, uso de 2FA cuando se accede desde una zona no controlada.
- En sistemas de categoría media o alta: certificado + 2FA + registro previo, certificado en dispositivo físico, registro de accesos, ventana de accesos, suspensión por no utilización.
- Bloqueo del equipo tras tiempo prudencial sin actividad, cierre de sesiones.
- Instalación en todos los equipos de EDR (*), configuración de protección en tiempo real, escaneos periódicos.

(*) **Endpoint Detection and Response**, es una tecnología de seguridad que monitorea y responde a amenazas en los dispositivos finales, como computadoras y móviles. Al instalar EDR en todos los equipos, se mejora significativamente la capacidad de detectar, investigar y responder a actividades sospechosas o maliciosas en la red. Es como tener un guardia de seguridad digital vigilando constantemente.

Algunos ejemplos de EDR son los siguientes:  
1. Microsoft Defender for Endpoint
2. CrowdStrike Falcon
3. FireEye Endpoint Security
4. Bitdefender GravityZone
5. Sophos Intercept X
6. Cisco Talos
7. Cybereason Defense Platform
8. VMware Carbon Black