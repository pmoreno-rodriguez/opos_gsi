> [!NOTE|style:callout|label: Plantilla Genérica]
> Plantilla genérica para el diseño de un CPD.

## PLANTILLA PARA EL DISEÑO DE UN CPD <!-- {docsify-ignore} -->

Para diseñar el Centro de Procesamiento de Datos (CPD) seguiremos la normativa **ANSI/TIA-942**.

En cuanto a la **localización**, ANSI/TIA-942 sugiere evitar áreas de alto riesgo de desastres naturales (inundaciones, terremotos) y zonas industriales con potencial de explosiones o contaminación. Además, las regulaciones de la **NFPA 76** y **NFPA 75** establecen pautas de seguridad contra incendios que también deben tenerse en cuenta al seleccionar el lugar para el CPD. Por razones de seguridad, se recomienda evitar tanto los sótanos como los últimos pisos. Los sótanos son zonas de riesgo ante inundaciones y problemas de drenaje, mientras que los pisos superiores suelen ser más vulnerables a filtraciones de agua. Lo ideal es que el CPD esté ubicado en uno de los pisos intermedios del edificio, lo cual reduce el riesgo de daños por eventos climáticos y facilita el acceso en caso de emergencia.

La **estructura física** del CPD, que incluye suelos, techos y puertas, también está regulada por ANSI/TIA-942. Los suelos elevados son recomendables para gestionar cables y distribuir el aire; deben ser resistentes al fuego y soportar grandes cargas. Los techos deben ser lo suficientemente altos para facilitar el flujo de aire y el acceso del personal, mientras que las puertas deben estar fabricadas con materiales ignífugos y tener un acceso controlado para proteger el CPD de accesos no autorizados, en conformidad con **NFPA 75**.

El sistema de refrigeración es fundamental para la estabilidad del CPD, y ANSI/TIA-942 recomienda implementar un esquema de **pasillo frío y pasillo caliente** para optimizar el flujo de aire y evitar la mezcla de aire caliente con aire frío, lo que reduce el esfuerzo de los equipos de refrigeración. Los sistemas más comunes incluyen las unidades **CRAC (Computer Room Air Conditioner)**, que enfrían y controlan la humedad, y los **sistemas de enfriamiento por líquido** que emplean agua refrigerada y son ideales para racks de alta densidad. La normativa **ASHRAE TC 9.9** es la referencia para asegurar condiciones óptimas de temperatura y humedad en los centros de datos.

La **protección contra incendios** y agua es otro aspecto esencial para proteger tanto el personal como los equipos. La norma ANSI/TIA-942 exige un sistema de detección en dos fases (detección temprana y extinción) que puede incluir gas inerte o sistemas de aspersión de agua nebulizada, ambos en conformidad con **NFPA 75** y **NFPA 76**. Para proteger contra posibles filtraciones de agua, los suelos elevados permiten detectar fugas tempranamente y facilitan el paso de cableado sin exponer los equipos a líquidos.

El **sistema eléctrico** garantiza la continuidad del CPD y su estabilidad. ANSI/TIA-942 recomienda un esquema eléctrico robusto, con fuentes de energía de respaldo como **UPS (Uninterruptible Power Supply)**, transformadores para estabilizar el voltaje, **ATS (Automatic Transfer Switch)** para el cambio automático de fuentes y generadores de biodiesel para apagones prolongados. La seguridad de este sistema se basa en las normativas **NFPA 70** y **IEEE Std 1100**, las cuales regulan los estándares de calidad y protección de energía.

Otros componentes importantes incluyen el **cableado estructurado** siguiendo **ANSI/TIA-568**, que asegura escalabilidad y alta velocidad de transmisión, y un sistema de **monitoreo** integral que permite controlar variables como temperatura, humedad, energía y seguridad. Finalmente, la seguridad física se refuerza mediante cámaras de vigilancia, control de acceso y perímetros de seguridad, en línea con las mejores prácticas de ANSI/TIA-942.

En resumen, un diseño de CPD que cumpla con la normativa ANSI/TIA-942 integra cuidadosamente ubicación, control de temperatura, protección contra incendios y agua, estructura física sólida, sistemas eléctricos redundantes y seguridad en todas sus formas, asegurando una operación continua y estable que proteja tanto los datos como los activos de la empresa.


<a href="https://pmoreno-rodriguez.github.io/opos_gsi/#/plantillas/indice.md">Volver al índice</a>