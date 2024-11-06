## Posibles Preguntas del B3 y B4 <!-- {docsify-ignore} -->

### Preguntas Supuesto 1 (2014 - 2019)

- Diagrama de Casos de Uso (10)
- Diagrama de Clases (7)
- Modelo E/R extendido (5)
- Factores Críticos de Éxito (5)
- Arquitectura (Lógica y solución tecnológica) (Con diagrama de paquetes o componentes o despliegue) (4)
- Diagrama de flujo de datos (Con diagrama de contexto y subsistemas) (4)
- Diagrama de componentes (5)
- Diagrama de secuencia (3)
- Diagrama de despliegue (1)
- DAFO / Normativa (2)
- Seguridad lógica y física CPD (1)
- Diagrama de contexto (Mecanismos E/S) (3)
- Plan de gestión del cambio (Migración, Estrategias de sustitución) (1)
- Diagrama de paquetes (2)
- Desarrollo App Móvil (Tecnologías) (2)
- Implantar Teletrabajo (Soluciones técnicas) (1)
- Enumerar Servicios Comunes. Funcionalidades y Herramientas de seguridad (1)
- Plan de pruebas de accesibilidad y usabilidad de la App Móvil (1)
- Creación de interfaz de usuario (3)
- Diseño de las capas de información sobre la protección de datos (1)
- Modelo lógico de datos normalizados (1)
- Recomendaciones dirigidas a evitar la inyección de SQL (Ataques SQL) (1)
- Determinación del ámbito del sistema (1)
- Planificación proyecto (actividades, subactividades, tareas…) (1)
- ENS Categorización por dimensiones y características, implantar medidas: Registro de la actividad de los usuarios [op.exp.8], Mecanismo de autenticación [op.acc.5] y Perímetro seguro [mp.com.1]

### Pregunta sobre Arquitectura del Sistema <!-- {docsify-ignore} -->
Es hacer un diagrama en 4 capas: 
- Presentación
- Lógica de negocio
- Acceso a datos
- Acceso a servicios externos (si nosotros damos servicio a otros sistemas, nuestro API Gateway (nuestro proxy inverso para prestar servicios) también está en esta última capa).

### Posibles Preguntas del Bloque 4 en el Supuesto 1 más de Bloque 3 <!-- {docsify-ignore} -->

- **Teletrabajo**: ¿qué usamos para teletrabajo: una VPN, escritorio virtual, remote desktop? → Mi opinión es hacer VPN porque es más barato.
  
  La última tendencia para VPN es el puesto único: antes había el problema de que en el escritorio del ordenador del trabajo tenías un contenido y en el portátil para trabajar en tu casa tenías otro contenido. Ahora se hace lo que se llama puesto único, solo tienes un computador portátil que te llevas a tu casa y que usas en el trabajo, así que no hay cambio de escritorio. El ordenador está cifrado y además el almacenamiento es en la nube, no tiene datos (o no debería tener) el computador en local; lo subes a una nube securizada (usualmente nube Sara).

  Todos los computadores de puesto único se pueden borrar a distancia.

- **Macrodatos (Big Data)**: Implementar una solución de este tipo.

- **Plan de Migración**: Plan de gestión del cambio de la infraestructura software y/o hardware.

  1. Proponer un Plan de Gestión del Cambio que le permita hacer uso de nuevos servicios que sustituyan a otros anteriores, reduciendo al mínimo el impacto en la operatividad. Para gestionar un cambio siempre debemos ser transparentes y escuchar a las personas, ya que el ser humano suele ser muy reticente a los cambios. Debemos ayudarles a que lo perciban y lo vivan como un cambio positivo (el cambio debe ser con las personas, no contra las personas).

     - Para llevar esto a cabo como fortaleza, tendremos el apoyo de la alta dirección. Como factor crítico de éxito, necesitamos el apoyo de la alta dirección.

  2. Nombrar a un equipo que asista a un responsable único de la gestión del cambio (punto de liderazgo único).
  
     - Ahora que tenemos liderazgo único, el líder o líderes del cambio deberán evaluar lo que hay, lo que se va a hacer y realizar una planificación, un plan. El equipo de gestión del cambio debe planificar el cambio en el aspecto técnico, pero también en el psicológico grupal de la organización, informando con transparencia a todas las personas involucradas en el cambio, solucionando sus dudas y prestándoles la ayuda necesaria que puede ser de muchos tipos. Debemos bajar su nivel de incertidumbre que conduce a la ansiedad, y una forma de hacer esto es dar información de muy buena calidad.

  3. Después de los consabidos contactos con la SGAD, firmaremos el convenio con ella en caso de que para el cambio tengamos que usar servicios comunes y/o compartidos.

  4. En paralelo empezamos estas dos actividades:
     - a. Formar a los usuarios.
     - b. Instalar, configurar y probar la nueva funcionalidad de las nuevas aplicaciones (pruebas con datos no reales).

  5. Con una sección reducida de red y usuarios, realizamos un programa piloto que será una prueba de concepto y viabilidad a escala reducida. Si el programa piloto sale bien, pasamos a la próxima fase.

  6. Migramos los datos reales a las aplicaciones tanto en local como en la nube de la SGAD (Nube Sara).

  7. Pruebas con datos reales en preproducción.

  8. Pasamos los nuevos sistemas a producción.

  9. Habrá un periodo de funcionamiento dual; estarán funcionando los antiguos servicios y los nuevos a la vez. Poco a poco, iremos apagando los antiguos servicios.

- **Seguridad Física y Lógica en un CPD**:
  
  - **Seguridad Física**:
    - Seguridad contra elementos materiales (agua, fuego), ventilación, etc.
    - Control de acceso físico (por ejemplo, doble factor de autenticación: huella digital + contraseña, token (tarjeta de seguridad) + contraseña, etc.).
    - Enjaulamos los racks.

  - **Seguridad Lógica**:
    - VLAN’s (redes virtuales separadas sobre la red física).
    - Capas de seguridad (diferentes niveles de privilegios: nivel 0, nivel 1, nivel 2. Trabajas normalmente en nivel 0 y escalas tus privilegios cuando sea necesario; se llama esquema de la cebolla).
    - Protección perimetral (firewalls) y tener puntos únicos de acceso sin “puertas falsas”.
    - IDS/IPS, antimalware, EPP (antivirus), EDR (filtro de comportamiento).
    - Usamos soluciones de seguridad del CCN-CERT.
    - Segregación de funciones: una sola persona no debe tener demasiado poder.
    - Mínimo privilegio: solo tendrás los privilegios necesarios para hacer tu trabajo.
    - Login adecuado a aplicaciones: 2FA: contraseña (algo que sabes) + OTP (algo que tienes).
    - Mantener todas las actualizaciones de seguridad al día.
    - Cerrar puertos no utilizados.
    - Tener políticas, normas y procedimientos de seguridad (marco de seguridad) definidos formalmente.

- **Desarrollo de Software**:
  - Medidas lógicas:
    - Sanitizar/sanear/filtrar/limpiar las entradas a la base de datos y las peticiones HTTPS (se hacen con un WAF = Web Application Firewall).
    - Revisar todos los errores del Kernel y todos los errores en general.
    - Filtrar y revisar todas las salidas a otros sistemas para que no se utilicen como vector de ataque.

---

### Diagrama de Contexto <!-- {docsify-ignore} -->
**Mecanismos E/S**: Indicar cómo accedería al sistema de información cada actor o sistema que interactúa con el mismo, así como los intercambios de información.

### Actores del Sistema de Información <!-- {docsify-ignore} -->
1. **Ciudadano (Humano)**:
   - Mecanismo de entrada/salida: interfaz web HTTPS (túnel TLS) con un navegador web. Acceso a través de una red WAN, usualmente internet.
  
2. **Empleado Público (Humano)**:
   - Interfaz web HTTPS (túnel TLS):
     - Si está en la red de una administración, accederá por Red Sara.
     - Si no está en la red de una administración pública (teletrabajo), el firewall de nuestro CPD tendrá un iniciador/terminador de túneles IPSec o TLS.

3. **Otro Sistema (No Humano)**:
   - Intercambio de archivos de datos (XML, JSON, etc.) con comunicación máquina a máquina a través de un API REST.
