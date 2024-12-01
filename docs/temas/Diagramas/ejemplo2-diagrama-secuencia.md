## Ejemplo 2 de diagrama de secuencia <!-- {docsify-ignore} -->

```websequencediagrams
    autonumber
    title Ejemplo 2 diagrama secuencia
    actor Ciudadano

    activate Ciudadano
    Ciudadano->+Ventana Ciudadano: Solicitud
    Ventana Ciudadano->+Cl@ave: Autenticación
    Cl@ave-->>-Ventana Ciudadano: Autenticación Ok
    Ventana Ciudadano->+Solicitud: Crear solicitud
    Solicitud-->>-Ventana Ciudadano: Solicitud creada Ok
    Ventana Ciudadano->+Expediente: Crear expediente
    Expediente-->>-Ventana Ciudadano: Expediente creado
    Ventana Ciudadano-->Ciudadano: Solicita
    Ciudadano->Ventana Ciudadano: Pago
    Ventana Ciudadano->+Pasarela Pagos: Orden Cobro de tasas
    Pasarela Pagos-->>-Ventana Ciudadano: Comprobante de pago
    Ventana Ciudadano->+Pasarela Pagos: Crea objeto comprobante de pago
    Pasarela Pagos-->>-Ventana Ciudadano: Comprobante creado
    Ventana Ciudadano-->>Ciudadano: Comprobante de pago
    Ventana Ciudadano->+FIRE: Firmar solicitud
    FIRE-->>-Ventana Ciudadano: Solicitud firmada
    Ventana Ciudadano->+REGAGE: Registrar solicitud
    REGAGE-->>-Ventana Ciudadano: Solicitud registrada+Recibo
    Ventana Ciudadano-->>Ciudadano: Recibo de registro
    deactivate Ciudadano


