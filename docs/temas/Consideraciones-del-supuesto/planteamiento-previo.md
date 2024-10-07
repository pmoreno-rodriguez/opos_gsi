# Supuesto de ejemplo (Oficina Española de Patentes y Marcas)

> [!NOTE]
> Simulacro de supuesto (ForjaTIC)

**Apuntamos:**

    • Actores internos y externos,
    • Interfaces internas y externos
    • Documentación de entrada y de salida.

| **Actores Internos** | **Actores Externos** |
| :- | :- |
| Funcionario gestor | Ciudadano |
| Examinador | Representante |
| Director del Registro de Propiedad Intelectual | Funcionario Habilitado |
| Administrador |  |

| **Interfaces Internas** | **Interfaces Externas** |
| :- | :- |
| Registro de la OEPM | Pasarela de pagos |
| Plataforma de firma de la OEPM (conecta con @firma) | Notific@ |
| Data Warehouse de la OEPM | BOPI |
|  | Organismos internacionales |
|  | Cl@ve |
|  | REPRESENTA (conecta con APDOERA y HABILITA) |
|  | Carpeta Ciudadana |

| **Información de Entrada** | **Información de Salida** |
| :- | :- |
| Solicitud: <br> - Instancia <br> - Descripción del invento <br> - Una o más reivindicaciones <br> - Resumen de la invención <br> - Otros documentos necesarios | Recibo |
| Formulario de pago de tasas | Justificante de pago de tasas |
| Examen formal y técnico | Notificación de no cumplir los requisitos |
| Solicitud de informe IET | Notificación de continuación con el procedimiento |
| Subsanaciones | Objeciones |
| Procedimiento PG | IET |
| Procedimiento PEP | Notificación del suspenso |
| | Resolución (concesión o denegación) |