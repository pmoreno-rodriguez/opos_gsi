> [!NOTE]
> POSIBLE PREGUNTA: 
> 
> Proponga alternativas tecnológicas para realizar el desarrollo del sistema. Explique en detalle la opción que elegiría de entre las propuestas y justifique su elección.

## Alternativas tecnológicas en el desarrollo de un sistema <!-- {docsify-ignore} -->

En la actualidad, las principales alternativas de desarrollo para proyectos como el que estamos tratando son **Java EE** y **Microsoft .Net**. Ambos son orientados a objetos, de alto nivel y no dependen de la plataforma de hardware. Este último requisito es imprescindible si se quiere que el sistema pueda ser usado desde equipos de sobremesa o dispositivos móviles.

Se debe estudiar el entorno predominante en el organismo y es recomendable usar el mismo entorno que se esté usando ya. De este modo, se reducen las posibles complicaciones de compatibilidad, los periodos de aprendizaje de los trabajadores del proyecto y se evitan posibles inversiones en licencias o equipamiento si se diera el caso de que fuera necesario.

Si no se conoce el entorno predominante en el organismo, se puede optar por elegir **Java** entre las dos opciones por ser un lenguaje multipropósito, multiplataforma y ampliamente extendido. Cuenta con numerosa documentación y un gran número de desarrolladores y expertos por si fuera necesario. Además, no requiere licencia y permite implementar el diseño en tres capas:

1. **Capa de presentación**: Se podría utilizar **Java Server Faces** o **Struts**.
2. **Capa de lógica de negocio**: Se puede usar **Spring**.
3. **Capa de datos**: Se recomienda **Hibernate**.

Como servidor de aplicaciones, se puede usar **WildFly**, **IBM Websphere** o **Apache Geronimo**. En cuanto al servidor web, una opción podría ser **Apache Tomcat**.

Por último, cabe destacar que la interfaz de usuario se deberá realizar mediante diseño **responsive** o adaptativo para que se pueda visualizar correctamente desde cualquier tipo de dispositivo.

> [!NOTE]
> POSIBLE PREGUNTA: 
> 
> Ofrezca diferentes opciones a la hora de elegir el sistema operativo para el alojamiento en el servidor web

Detalle brevemente ventajas e inconvenientes de cada uno y elija una de las opciones.

Ante esta pregunta no hay una respuesta clara. Se debería tener en cuenta el sistema que ya se esté usando en el organismo o el que sea más predominante. De ese modo, nos aseguramos de que los encargados de gestionarlo ya lo conozcan, reduciendo el tiempo de aprendizaje. Además, se evitan sobrecostes en licencias o hardware nuevo si ya está disponible en el propio organismo.

Son importantes los conocimientos previos del opositor y con cuál se siente más cómodo a la hora de defenderlo. Se incluyen algunos contenidos teóricos para que cada uno opte por su opción preferida.

| | **Hosting web de Windows** | **Hosting web de Linux** |
|--|-----------------------------|--------------------------|
| **Tipo de software**         | Privado                  | De código abierto           |
| **Servidor web**             | Microsoft IIS            | Apache, Nginx               |
| **Lenguajes script**         | VBScript, ASP.NET        | Perl, PHP, Python, Ruby      |
| **Bases de datos**           | Microsoft SQL Server, Microsoft Access | MySQL, MariaDB          |
| **Software de gestión**      | Plesk                    | cPanel, Plesk, Confixx       |
| **Otros**                    | Exchange, aplicaciones .NET, SharePoint | WordPress, Joomla, etc. |

#### Ventajas e inconvenientes de Linux como sistema operativo para servidores web: <!-- {docsify-ignore} -->

| **Ventajas**                                                                 | **Inconvenientes**                                                          |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Uso gratuito                                                                 | Difícil de usar                                                             |
| Los administradores se benefician de las libertades de gestión del sistema    | El inglés es el idioma estándar para las líneas de comandos y los mensajes   |
| Soporta el trabajo cooperativo sin que los usuarios puedan dañar el núcleo    | Otros programas de terceros solo pueden ser instalados por un administrador  |
| Rara vez se ve amenazado por los cibercriminales                             | La portabilidad de Linux no es prioritaria para muchos desarrolladores       |
| Errores de seguridad poco habituales que se solucionan rápidamente           | Las actualizaciones son a veces muy complejas                               |
| Pocos requisitos de hardware                                                 | No todas las versiones cuentan con asistencia a largo plazo                 |
| Función remota integrada para el control a distancia                         | Algunos programas profesionales no funcionan con Linux                      |

#### Ventajas e inconvenientes de Windows como sistema operativo para servidores web: <!-- {docsify-ignore} -->

| **Ventajas**                                                                 | **Inconvenientes**                                                          |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Apto para principiantes, manejo intuitivo mediante interfaces gráficas        | Elevados costes de licencia que aumentan con cada usuario                   |
| Se puede acceder a los controladores para el hardware actual fácilmente       | Fallos frecuentes de seguridad                                              |
| Soporta un gran número de aplicaciones de terceros                           | Vulnerable a malware                                                        |
| Actualización del sistema sencilla y automatizada                            | Requiere muchos recursos (sobre todo por las GUI obligatorias)               |
| Solución de problemas técnicos por medio de la recuperación del sistema       | Elevado potencial de errores de usuario                                     |
| Asistencia a largo plazo garantizada                                          | No es apto como sistema multiusuario                                        |
| Posibilidad de usar programas de Microsoft exclusivos como SharePoint o Exchange | El funcionamiento del sistema propietario no es totalmente público        |

### Linux vs. Windows: tabla comparativa resumen de ambos sistemas <!-- {docsify-ignore} -->

| **Característica**        | **Windows**                                                                 | **Linux**                                                                    |
|---------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Costes**                | Costes de licencia por usuario                                              | Sin costes de licencia; los costes de asistencia dependen de las distribuciones |
| **Uso estándar**           | Interfaz gráfica de usuario                                                 | Líneas de comandos                                                          |
| **Acceso remoto**          | Servidor de terminales; el cliente debe instalarse y configurarse           | Solución integrada (terminal y shell)                                       |
| **Software y características** | No ofrece portabilidad para todos los programas; gran cantidad de aplicaciones disponibles | Soporta programas habituales; posibilidad de utilizar aplicaciones de Microsoft |
| **Soporte hardware**       | Los controladores de hardware suelen estar disponibles primero para Windows | El nuevo hardware suele estar disponible para distribuciones de Linux más tarde |
| **Seguridad**              | Elevado potencial de errores de usuario; interfaz integrada como posible punto de ataque | Los usuarios no tienen acceso a ajustes básicos; las vulnerabilidades se solucionan rápidamente |
| **Asistencia**             | Asistencia a largo plazo para todas las versiones                           | La asistencia varía según la distribución                                    |
| **Documentación**          | El sistema y sus aplicaciones están muy bien documentados                   | El código fuente completo del sistema es conocido; la mayoría de los manuales están en inglés |

