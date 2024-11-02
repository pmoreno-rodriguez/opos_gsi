## Ejemplo 1 de diagrama de secuencia <!-- {docsify-ignore} -->

```websequencediagrams
    autonumber
    title Ejemplo 1 diagrama secuencia
    actor Solicitante


    activate Solicitante
    Solicitante->Interfaz: solicitar X (datos,documentos)
    Interfaz->Control: solicitar X (datos,documentos)
    Control->@Firma: Comprobar sellos de documentos
    activate @Firma
    loop @Firma
        @Firma->@Firma: Comprobar sello internamente (documentos)
    end
    @Firma->Control: Ok/No Ok
    deactivate @Firma
    Control->PID: Solicitar documentos en poder de la Administración
    activate PID
    PID->Control: Ok/No Ok
    deactivate PID
    Control->Fire: Solicitar Firma usuario
    activate Fire
    Fire->Interfaz: redirección
    deactivate Fire
    activate Interfaz
    Interfaz->Autofirma: redirección
    deactivate Interfaz
    activate Autofirma    
    Autofirma->Solicitante: Solicitud Elección de certificado
    activate Solicitante
    Solicitante->Autofirma: Ok(opción certificado)/No Ok
    deactivate Solicitante
    Autofirma->Control: Ok(Firma de usuario)/No Ok
    activate Control
    Control->Geiser: Registrar solicitud y documentos
    deactivate Autofirma
    activate Geiser
    Geiser->Control: Ok(código REGAGE)/No Ok
    deactivate Geiser
    Control->INSIDE: Crear expte. y anexar Docs.
    activate INSIDE
    INSIDE->Control: Ok(código expte.)/No Ok
    deactivate INSIDE
    Control->SGBDR: Guardar datos en base de datos
    activate SGBDR
    SGBDR->Control: Ok(Datos guardados correctamente)/No Ok
    deactivate SGBDR
    deactivate Control
    

```
