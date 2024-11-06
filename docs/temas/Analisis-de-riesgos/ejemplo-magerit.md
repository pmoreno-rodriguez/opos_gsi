## Ejemplo Práctico de Análisis de Riesgos según MAGERIT <!-- {docsify-ignore} -->

> [!TIP|style: callout|icon: fa fa-check|label: Contenido Verificado]
> Respuesta de ChatGPT sobre un ejemplo de Análisis de Riesgos de un sistema siguiendo la metodología Magerit

#### Activos Identificados y Valoración <!-- {docsify-ignore} -->

1. **Activo 1: Base de Datos de Clientes**  
   - **Descripción**: Contiene información personal y financiera de clientes (nombres, direcciones, números de tarjeta, historiales de compra).
   - **Valoración**: 10 (activo crítico, dado el impacto que tendría cualquier filtración en la confianza de los clientes y en la reputación de la empresa).

2. **Activo 2: Servidor de Correo Electrónico Corporativo**  
   - **Descripción**: Permite la comunicación interna entre empleados y la comunicación externa con clientes.
   - **Valoración**: 8 (activo muy importante, aunque no tan crítico como la base de datos de clientes).

### Análisis de Amenazas y Vulnerabilidades <!-- {docsify-ignore} -->

**Activo 1: Base de Datos de Clientes**

- **Amenazas**:
  - **A1**: Ataque de ransomware que cifre la base de datos y solicite un rescate.
  - **A2**: Robo de datos a través de una brecha de seguridad, que resulta en filtración de datos personales.
  - **A3**: Fallo del sistema que provoque pérdida de información (por error humano o fallo de hardware).
  
- **Vulnerabilidades**:
  - **V1**: Falta de autenticación multifactor para el acceso a la base de datos.
  - **V2**: Copias de seguridad no actualizadas regularmente o sin pruebas de restauración.
  - **V3**: Falta de capacitación adecuada en seguridad para el personal con acceso a la base de datos.

**Activo 2: Servidor de Correo Electrónico Corporativo**

- **Amenazas**:
  - **B1**: Phishing que capture credenciales de usuarios y comprometa el sistema.
  - **B2**: Ataque de denegación de servicio (DDoS) que deje fuera de línea el servidor.
  - **B3**: Fallo de hardware o software que provoque interrupción de las comunicaciones.

- **Vulnerabilidades**:
  - **V4**: Configuración de servidor de correo sin autenticación de doble factor para usuarios.
  - **V5**: Falta de filtro antispam actualizado para mitigar intentos de phishing.
  - **V6**: Falta de redundancia y backup en caso de fallo de hardware.

### Evaluación de Riesgos <!-- {docsify-ignore} -->

A continuación, se calculan los riesgos multiplicando la probabilidad de la amenaza (P) por el impacto (I) de dicha amenaza sobre cada activo. Se utiliza una escala del 1 al 5 para la probabilidad y otra del 1 al 10 para el impacto, y se priorizan los riesgos de mayor a menor.

| Activo                  | Amenaza                 | Probabilidad (P) | Impacto (I) | Riesgo (R = P × I) |
|-------------------------|-------------------------|-------------------|-------------|---------------------|
| Base de Datos de Clientes | A1: Ransomware          | 3                 | 10          | 30                  |
| Base de Datos de Clientes | A2: Robo de datos       | 4                 | 9           | 36                  |
| Base de Datos de Clientes | A3: Pérdida de información | 2              | 8           | 16                  |
| Servidor de Correo Electrónico | B1: Phishing     | 4                 | 6           | 24                  |
| Servidor de Correo Electrónico | B2: Ataque DDoS | 3                 | 5           | 15                  |
| Servidor de Correo Electrónico | B3: Fallo hardware | 2               | 4           | 8                   |

**Priorización de los Riesgos:**

1. **Robo de datos en la Base de Datos de Clientes (R = 36)**
2. **Ransomware en la Base de Datos de Clientes (R = 30)**
3. **Phishing en el Servidor de Correo Electrónico (R = 24)**
4. **Pérdida de información en la Base de Datos de Clientes (R = 16)**
5. **Ataque DDoS en el Servidor de Correo Electrónico (R = 15)**
6. **Fallo de hardware en el Servidor de Correo Electrónico (R = 8)**

### Propuesta de Salvaguardas <!-- {docsify-ignore} -->

**Para la Base de Datos de Clientes:**

1. **Autenticación y Control de Acceso**:
   - Implementar autenticación multifactor (MFA) para todos los usuarios con acceso a la base de datos.
   - Limitar accesos basados en roles y realizar auditorías periódicas para revisar los permisos asignados.

2. **Copias de Seguridad y Pruebas de Restauración**:
   - Programar copias de seguridad automáticas y realizar pruebas de restauración de forma trimestral para asegurar la integridad de los datos.
   
3. **Protección Contra Malware**:
   - Instalar y mantener actualizado un software antimalware y un firewall para detectar y bloquear posibles intentos de ransomware.

4. **Capacitación del Personal**:
   - Implementar una capacitación regular en ciberseguridad para sensibilizar sobre el phishing y el manejo adecuado de la base de datos.

**Para el Servidor de Correo Electrónico Corporativo:**

1. **Autenticación de Doble Factor (2FA)**:
   - Activar autenticación de doble factor para todos los empleados que accedan al servidor de correo.
   
2. **Filtro Antispam y Protección Anti-Phishing**:
   - Configurar un filtro antispam y actualizar las reglas de detección de phishing para reducir los correos maliciosos.

3. **Redundancia y Backup de Servidor**:
   - Establecer redundancia en el servidor de correo y realizar copias de seguridad diarias.

4. **Plan de Continuidad**:
   - Diseñar un plan de continuidad para la restauración rápida del servicio en caso de ataque DDoS o fallo de hardware.

### Monitorización y Revisión <!-- {docsify-ignore} -->

1. **Seguimiento de la Eficacia de las Salvaguardas**:
   - Realizar auditorías trimestrales para revisar la efectividad de las medidas de seguridad implementadas y asegurarse de que están funcionando según lo esperado.

2. **Actualización del Análisis de Riesgos**:
   - Revisar el análisis de riesgos cada seis meses o ante cualquier cambio significativo en la infraestructura, como la incorporación de un nuevo sistema, aumento de personal, o cambio en el entorno de amenazas.

3. **Simulacros de Respuesta ante Incidentes**:
   - Realizar simulacros periódicos para evaluar la capacidad de respuesta del personal y los sistemas frente a incidentes como el phishing o el ransomware. Esto ayudará a mejorar los tiempos de respuesta y la familiarización con los protocolos de seguridad.

Este ejemplo sigue los pasos de MAGERIT, proporcionando una guía concreta para gestionar los riesgos de los activos críticos mediante la identificación de amenazas, cálculo de riesgos, priorización y diseño de salvaguardas, así como la importancia de la monitorización y revisión constantes para adaptarse a cambios o nuevas amenazas.