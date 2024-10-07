# **MEDIDAS DE SEGURIDAD**	

A continuación, se recogen una serie de medidas base por cada dimensión y nivel de seguridad que se pueden incluir en el ejercicio.

| **Integridad/firma (mp.info.3)** |  |
| :-: | :- |
| Bajo | - Cualquier firma. |
| Medio | <ul><li>Firma electrónica avanzada basada en cert. cualif.</li><li>Firma no criptográfica si autorizada y se puede acreditar la voluntad.</li><li>Algoritmos CCN (mp.com.3/mp.info.3) + CCN-STIC-807.</li></ul> |
| Alto | <ul><li>Firma electrónica avanzada basada en cert. cualif. + algo que se sabe/es.</li><li>Disp. HW en VPN (mp.com.3).</li><li>Productos certificados (mp.com.3).</li></ul> |
| Refuerzo | <ul><li>Firma cualificada.</li></ul> |
| **Disponibilidad** |  |
| Bajo | <ul><li>RTO 1-4D.</li><li>Backup (mp.info.6).</li></ul> |
| Medio | <ul><li>RTO 4-24H.</li><li>SLA (op.ext.1).</li><li>DoS.</li></ul> |
| Alto | <ul><li>RTO ≤ 4H.</li><li>DoS. Detección y reacción.</li><li>Plan de continuidad.</li><li>Pruebas.</li><li>Medios alternativos para la info. (op.cont.4).</li><li>Medios alternativos para el personal. (op.cont.4).</li></ul> |

| **Autenticidad / Credenciales (op.acc.5 y op.acc.6)** |  |
| :-: | :- |
| Bajo | <ul><li>Cl@vePIN - Nivel básico.</li><li>Cl@ve Permanente sin OTP.</li><li>Bloqueo usuario.</li><li>Y:<ul><li>Usuario + Password + complejidad, o</li><li>Pwd+OTP (op.acc.5), o pwd + otro factor (op.acc.6), o</li><li>Certificados cualificados, o</li><li>Cert cualificados en Disp. Físico.</li></ul></li> |
| Medio | <ul><li>Cl@vePIN - Nivel avanzado.</li><li>Cl@ve Permanente con OTP.</li><li>Registros de acceso e indicar el último (op.acc.5 y op.acc.6).<ul><li>Pwd+OTP, o</li><li>Certificados cualificados, o</li><li>Cert cualificados en Disp. Físico.</li></ul><li>Doble factor desde zonas no contraladas (op.acc.6).</li><li>Algoritmos CCN (mp.com.3).</li></ul> |
| Alto (interno op.acc.6) | <ul><li>Ventana de acceso.</li><li>Suspensión de no uso.</li><li>Productos certificados (mp.info.3).</li></ul> |
| Refuerzo | <ul><li>Límite de horarios/suspensión por no uso.</li></ul> |

| **Trazabilidad (op.exp.8)** |  |
| :-: | :- |
| Bajo | <ul><li>Registro de acceso.</li><li>Acciones en servidores.</li></ul> |
| Medio | <ul><li>Revisión informal.</li><li>Retención.</li><li>Control de acceso a admins.</li><li>Sincronización de servidor de logs.</li></ul> |
| Alto | <ul><li>Revisión automática y correlación.</li><li>Sello de tiempo (mp.info.4).</li></ul> |

| **Confidencialidad** |  |
| :-: | :- |
| Bajo | <ul><li>Borrado seguro (mp.si.5).</li><li>Limpieza de metadatos (mp.info.5).</li><li>Comunicaciones: VPN (mp.com.2).</li></ul> |
| Medio | <ul><li>Comunicaciones: algoritmos CCN (mp.com.2).</li><li>Dispositivos removibles: I y C (mp.si.2) + CCN-STIC-807.</li></ul> |
| Alto | <ul><li>Comunicaciones: HW para VPN, productos certificados (mp.com.2).</li><li>Dispositivos removibles: productos certificados (mp.si.2).</li></ul> |

| **Todas las dimensiones** |  |
| :-: | :- |
| | <ul><li>op.pl1. AARR.</li><li>org.1 Política de seguridad CCN-STIC-805.</li></ul> |
