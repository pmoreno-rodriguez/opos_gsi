# Ejemplo 2 de diagrama de secuencia

```websequencediagrams
    autonumber
    title Ejemplo 2 diagrama secuencia
    actor Ciudadano

    Ciudadano-->>+Ventana Ciudadano: Solicitud
    Ventana Ciudadano-->>+Cl@ave: Autenticación
    Cl@ave-->>-Ventana Ciudadano: Autenticación Ok
    Ventana Ciudadano-->>+Solicitud: Crear solicitud
    Solicitud-->>-Ventana Ciudadano: Solicitud creada Ok
    Ventana Ciudadano-->>+Expediente: Crear expediente
    Expediente-->>-Ventana Ciudadano: Expediente creado
    Ventana Ciudadano->Ciudadano: Solicita
    Ciudadano->Ventana Ciudadano: Pago
    Ventana Ciudadano-->>+Pasarela Pagos: Orden Cobro de tasas
    Pasarela Pagos-->>-Ventan Ciudadano: Comprobante de pago

