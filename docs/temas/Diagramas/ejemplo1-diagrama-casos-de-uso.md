## Ejemplo 1 de Diagrama de Casos de Uso

```plantuml
@startuml
left to right direction

actor "Tramitador" as tr
rectangle TRAMITADOR {
  usecase "USAR SISTEMA" as Sistema
}
tr --> Sistema

@enduml
```