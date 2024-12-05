> [!TIP|style: callout|icon: fa fa-check|label: Contenido Verificado]
> Contenido extraído del ENS y útil para hacer referencia a él en el supuesto

> Donde se dice _todos las categorías_, es porque se aplica SIN REFUERZOS, en todas las categorías (básic, media y alta). Otras medidas también se aplican en todas las categorías pero implican el uso de refuerzos.

## PRINCIPALES MEDIDAS CLAVE PARA LA SEGURIDAD <!-- {docsify-ignore} -->

1. **Marco organizativo [org]**  
    Las cuatro medidas del marco organizativo se aplican en [shortcode class="color-verde subrayado"]_todas las categorías_[/shortcode]. Éstas son:
    - **[org.1] Política de seguridad**
    - **[org.2] Normativa de seguridad**
    - **[org.3] Procedimientos de seguridad**
    - **[org.4] Proceso de autorización**

2. **[op.pl.1] Análisis de riesgos**  
   Se realizará un análisis de riesgos informal, semiformal (R1) o formal (R2).

3. **[op.pl.2] Arquitectura de seguridad**  
   La seguridad del sistema se detallará integralmente, incluyendo documentación de instalaciones y sistema, líneas de defensa, y métodos de identificación y autenticación de usuarios.

4. **[op.pl.4] Dimensionamiento/gestión de la capacidad**  
   Garantizar que los recursos del sistema estén bien dimensionados y gestionados para soportar la carga operativa, evitando fallos por sobrecarga.

5. **[op.pl.5] Componentes certificados**  
    Uso de componentes y tecnologías que cuenten con certificaciones de seguridad reconocidas, garantizando su fiabilidad.

6. **[op.acc.2] Requisitos de acceso**  
   La protección de recursos y derechos de acceso se realiza mediante mecanismos específicos, gestionados según políticas de seguridad y controlando acceso a componentes críticos. Incluye refuerzos de privilegios y control de dispositivos según niveles de seguridad.

7. **[op.acc.4] Proceso de gestión de derechos de acceso**  
   Actividades y procedimientos necesarios para gestionar y controlar los derechos de acceso de los usuarios a los sistemas de información.
    
8. **[op.acc.5] Mecanismos de autenticación (usuarios externos)**  
   Implementación de mecanismos robustos de autenticación para asegurar que solo usuarios autorizados accedan a los sistemas.

9. **[op.acc.6] Mecanismo de autenticación (usuarios de la organización)**  
   Esta medida se refiere a personal del organismo, propio o contratado, estable o circunstancial, que pueda tener acceso a información contenida en el sistema.

10. **[op.exp.2] Configuración de seguridad**  
   Se configurarán los equipos previamente a su entrada en operación.

11. **[op.exp.3] Gestión de la configuración de seguridad**  
   La gestión continua de la configuración de seguridad asegura la funcionalidad mínima y el mínimo privilegio, adapta el sistema a nuevas necesidades autorizadas, y responde a vulnerabilidades e incidentes, permitiendo solo a personal autorizado editar la configuración.

12. **[op.exp.7] Gestión de incidentes**  
    Implementación de un plan de gestión que permita la detección, respuesta y mitigación eficaz de incidentes de seguridad.

13. **[op.exp.8] Registro de la actividad**  
   Establecimiento de registros detallados de todas las actividades en los sistemas, para facilitar auditorías y análisis forenses.

14. **[op.exp.10] Protección de claves criptográficas**  
    Establecimiento de procedimientos seguros para la gestión y protección de las claves criptográficas que aseguran la confidencialidad y autenticidad.

15. **[op.cont.1] Análisis de impacto**  
   Se realizará un análisis de impacto que permita determinar los requisitos de disponibilidad de cada servicio (impacto de una interrupción durante un periodo de tiempo determinado), así como los elementos que son críticos para la prestación de cada servicio.

16. **[op.cont.2] Plan de continuidad**  
   Se desarrollará un plan de continuidad que establezca las acciones a ejecutar en caso de interrupción de los servicios prestados con los medios habituales.

17. **[op.cont.4] Medios alternativos**  
   Garantizar medios alternativos que permitan la continuidad operativa en caso de fallos o incidentes graves.

18. **[op.mon.1] Detección de intrusión**  
    Implantación de sistemas de detección de intrusiones para identificar y responder a amenazas dentro de la red en tiempo real.

19. **[mp.com.1] Perímetro seguro**  
   Definición y protección del perímetro de la red, asegurando que todas las comunicaciones hacia el exterior o interior estén controladas.

20. **[mp.com.2] Protección de la confidencialidad**  
    Implementación de mecanismos que aseguren que solo usuarios y sistemas autorizados puedan acceder a información sensible.

21. **[mp.com.3] Protección de la integridad y de la autenticidad**  
   Implementación de medidas que aseguren la veracidad y no alteración de los datos durante su almacenamiento y transmisión.

22. **[mp.com.4] Separación de flujos de información en la red**  
   Segregación de redes y sistemas para evitar que la información sensible se mezcle con flujos no seguros.

23. **[mp.info.1]	Datos personales**  
   Cuando el sistema trate datos personales, el responsable de seguridad recogerá los requisitos de protección de datos que sean fijados por el responsable o por el encargado del tratamiento, contando con el asesoramiento del DPD, y que sean necesarios implementar en los sistemas de acuerdo a la naturaleza, alcance, contexto y fines del mismo, así como de los riesgos para los derechos y libertades de acuerdo a lo establecido en los artículos 24 y 32 del RGPD, y de acuerdo a la evaluación de impacto en la protección de datos, si se ha llevado a cabo (se aplica en [shortcode class="color-verde subrayado"]_todas las categorías_[/shortcode]) 

24. **[mp.info.6] Copias de seguridad**  
    Establecimiento de mecanismos regulares y seguros para la creación de copias de seguridad, protegiendo la información crítica.

25. **[mp.per.3] Concienciación**  
   Se realizarán las acciones necesarias para concienciar regularmente al personal acerca de su papel y responsabilidad para que la seguridad del sistema alcance los niveles exigidos. Se aplica en [shortcode class="color-verde subrayado"]_todas las categorías_[/shortcode].

26. **[mp.per.4] Formación**  
   Formación en seguridad del personal de la organizacion. Se aplica en [shortcode class="color-verde subrayado"]_todas las categorías_[/shortcode].

27. **[mp.s.1] Protección del correo electrónico**  
   La medida mp.s.1 del Esquema Nacional de Seguridad establece la protección del correo electrónico mediante cifrado, control de acceso, prevención contra spam, malware y código dañino, y define normas de uso y formación para el personal

28. **[mp.s.2] Protección de servicios y aplicaciones web**  
   Esta medida establece la protección de servicios y aplicaciones web mediante control de acceso, prevención de ataques (URL manipulation, cookies, code injection, cross-site scripting, y privilege escalation) y auditorías de seguridad (caja negra y caja blanca).
