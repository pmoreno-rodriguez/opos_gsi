## Ejemplo 1 de diagrama de secuencia <!-- {docsify-ignore} -->

```websequencediagrams
    autonumber
    title Ejemplo 1 diagrama secuencia
    actor Solicitante

    Solicitante->>Interfaz: solicitar X (datos,documentos)
    activate Interfaz
    Interfaz->>Control: solicitar X (datos,documentos)
    activate Control
    Control->@Firma: Comprobar sellos de documentos
        activate @Firma
    loop @Firma
        @Firma->@Firma: Comprobar sello internamente (documentos)
    end
    @Firma-->>Control: Ok/No Ok
    deactivate @Firma
    Control->>PID: Solicitar documentos en poder de la Administración
    activate PID
    PID-->>Control: Ok/No Ok
    deactivate PID
    Control->Fire: Solicitar Firma usuario
    activate Fire
    Fire-->Interfaz: redirección
    deactivate Fire
    Interfaz->Autofirma: redirección
    activate Autofirma    
    Autofirma-->Solicitante: Solicitud Elección de certificado
    Solicitante->Autofirma: Ok(opción certificado)/No Ok
    deactivate Interfaz
    Autofirma-->>Control: Ok(Firma de usuario)/No Ok
    Control->>Geiser: Registrar solicitud y documentos
    deactivate Autofirma
    activate Geiser
    Geiser-->>Control: Ok(código REGAGE)/No Ok
    deactivate Geiser
    Control->>INSIDE: Crear expte. y anexar Docs.
    activate INSIDE
    INSIDE-->>Control: Ok(código expte.)/No Ok
    deactivate INSIDE
    Control->>SGBDR: Guardar datos en base de datos
    activate SGBDR
    SGBDR-->>Control: Ok(Datos guardados correctamente)/No Ok
    deactivate SGBDR
    deactivate Control
    

```
