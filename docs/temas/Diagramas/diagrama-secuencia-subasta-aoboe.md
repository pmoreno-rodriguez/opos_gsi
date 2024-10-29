## Ejemplo de diagrama de secuencia para el supuesto de AEBOE (2018) <!-- {docsify-ignore} -->

```websequencediagrams
    autonumber
    title Ejemplo de diagrama de secuencia para el supuesto de AEBOE
    actor Postor

    activate Postor
    Postor-->>+Interfaz: Consulta subasta
    Interfaz-->>+Subasta: Obtener subasta
    Subasta-->>+Lote: Obtener lotes
    Lote-->>-Subasta: Info lotes
    Subasta-->>-Interfaz: Info subasta/lotes
    Interfaz-->+Lote: Nueva puja
    Lote-->+Puja: crear puja
    Puja-->+Pago depósito: nuevo pago
    Pago depósito-->+Pasarela de pagos: pago
    Pasarela de pagos-->Postor: solicitud datos de pago
    Postor-->Pasarela de pagos: Pago
    Pasarela de pagos-->Postor: Ok
    Pasarela de pagos-->-Pago depósito: NRC
    Pago depósito-->-Puja: Pago OK
    Puja-->Interfaz: Pago puja OK
    Puja-->Interfaz: Solicitud firma y registro
    Postor-->Interfaz: Firmar y registrar puja
    Interfaz-->Puja: Firmar
    Puja-->+Fire: Firmar
    Fire-->-Puja: firma OK
    Puja-->Interfaz: firma OK
    Interfaz-->Puja: Registrar
    Puja-->+Registro-e: Registrar
    Registro-e-->-Puja: Justificante
    Puja-->+Justificante registro:Nuevo justificante
    Justificante registro-->-Puja: OK
    Puja-->Interfaz: Justificante registro
    Puja-->Lote: Puja OK
    Lote-->-Interfaz: Puja Ok


