## Ejemplo 3 de diagrama de secuencia <!-- {docsify-ignore} -->

```websequencediagrams
    autonumber
    title Ejemplo 3 diagrama secuencia
    actor Solicitante

    activate Solicitante
    Solicitante->>+Interfaz: Solicitar X
        opt: existen documentos restantes > 0
        loop mientras documentos restantes > 0
            Interfaz->+@Firma: comprobar sello(documento)
            @Firma-->-Interfaz: sello OK/No OK
        end
    end
    opt: se necesitan documentos de otras aa.pp
        loop mientras documentos restantes > 0
            Interfaz->+PID: solicitar documento(otras aa.pp)
            PID-->-Interfaz: documento OK/No OK
        end
    end
    Interfaz->+FIRE: solicitar Firma Usuario
    FIRE-->Interfaz: solicitar Firma Usuario
    Interfaz-->+Solicitante: solicitar Firma usuario
    Solicitante->Interfaz: Si/No
    Interfaz->FIRE:  redirection
    FIRE->+Autofirma: redirection
    deactivate FIRE
    Autofirma-->Solicitante: solicitud de certificado para firmar
    Solicitante->-Autofirma: certificado elegido
    Autofirma-->-Interfaz: <
    Interfaz->+GEISER: registrar solicitud/documentos
    GEISER-->-Interfaz: OK/Código REGAGE
    Interfaz->+INSIDE: almacenar Expediente/Anexar docs
    INSIDE-->-Interfaz: Ok/Id Expediente
    Interfaz->+SGBDR: Almacenar datos solicitud
    SGBDR-->-Interfaz: Ok/No Ok
    Interfaz->+Justificante: crear
    Justificante->+INTEGRA: incluir sello pdf justificante
    INTEGRA-->-Justificante: Ok (Pdf firmado)
    Justificante->+CSV Creator
    CSV Creator-->-Justificante: Ok (Pdf sellado con csv)
    Justificante-->-Interfaz
    Interfaz->+INSIDE: almacenar Expediente/Justificante pdf sellado con csv
    INSIDE-->-Interfaz: expediente almacenado ok

    
    


