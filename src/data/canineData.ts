import { CanineDatabase } from '../types';
import { getBreedImageUrl } from '../utils/breedImages';

export const canineData: CanineDatabase = {
  "meta": {
    "title": "Atlas de personalidades caninas",
    "schemaVersion": 1,
    "generatedAt": "2026-08-11T03:44:29+00:00",
    "source": "Exportación local de Notion",
    "counts": {
      "breeds": 122,
      "archetypes": 14,
      "frameworks": 6,
      "lifeStages": 3,
      "energyBiases": 2
    }
  },
  "facets": {
    "fciGroups": [
      "Grupo 10: Lebreles",
      "Grupo 1: Perros de Pastor y Boyeros",
      "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "Grupo 3: Terriers",
      "Grupo 4: Teckels (Dachshunds)",
      "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "Grupo 7: Perros de Muestra",
      "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "Grupo 9: Perros de Compañía"
    ],
    "akcGroups": [
      "Herding Group",
      "Hound Group",
      "Non-Sporting Group",
      "Sporting Group",
      "Terrier Group",
      "Toy Group",
      "Working Group"
    ],
    "archetypes": [
      "Apego Extremo (Fusión Emocional)",
      "Apego Frágil Afiliativo",
      "Autonomía Primitiva / Dignidad",
      "Contención Pesada / Calma Profunda",
      "Cooperación Humana Clásica",
      "Guardia Ancestral de Tiempo Largo",
      "Hiperreactividad Ornamental",
      "Independencia Cazadora Solitaria",
      "Inteligencia Funcional Obsesiva",
      "Lebreles (Desapego y Movimiento)",
      "Protección Estructurada Moderna",
      "Protección Territorial Absoluta",
      "Sensorialidad Olfativa Profunda",
      "Terriers Instrumentales"
    ],
    "motivations": [
      "Acción",
      "Acompañamiento",
      "Afecto",
      "Alimento",
      "Aprobación social",
      "Atención",
      "Autonomía",
      "Auxilio",
      "Bienestar familiar",
      "Captura",
      "Carrera",
      "Caza",
      "Caza visual",
      "Cercanía",
      "Coherencia",
      "Colaboración",
      "Comida",
      "Comodidad",
      "Conexión",
      "Confort",
      "Conservación",
      "Contacto físico",
      "Control",
      "Control de espacio",
      "Cooperación",
      "Cooperación social",
      "Curiosidad",
      "Custodia",
      "Desafío",
      "Desafío físico",
      "Desafío mental",
      "Eficacia",
      "Energía",
      "Espacio",
      "Estabilidad",
      "Exploración",
      "Éxito",
      "Familia",
      "Interacción intelectual",
      "Jerarquía",
      "Juego",
      "Lealtad",
      "Libertad",
      "Logo",
      "Movimiento",
      "Movimiento breve",
      "Movimiento coordinado",
      "Olfato",
      "Orden",
      "Persistencia",
      "Pertenencia",
      "Posesión",
      "Presencia humana",
      "Propósito",
      "Protección",
      "Protección territorial",
      "Rastreo",
      "Recompensa",
      "Recompensa Social",
      "Reconocimiento",
      "Reposo",
      "Resolución",
      "Resolución de problemas",
      "Respeto",
      "Seguimiento",
      "Seguridad",
      "Seguridad del vínculo",
      "Serenidad",
      "Sintonía",
      "Tarea",
      "Territorialidad",
      "Trabajo",
      "Trabajo conjunto",
      "Utilidad",
      "Variedad de actividades",
      "Vínculo"
    ],
    "traits": [
      "Adaptabilidad",
      "Afecto explosivo",
      "Afiliación",
      "Agresividad",
      "Alegría",
      "Alerta",
      "Amabilidad",
      "Apego",
      "Arrogancia",
      "Aspereza",
      "Astucia",
      "Audacia",
      "Autoconfianza",
      "Autocontrol",
      "Autonomía",
      "Autosuficiencia",
      "Calidez",
      "Calma",
      "Carisma",
      "Coherencia",
      "Compañía",
      "Concentración",
      "Confort",
      "Contemplación",
      "Contención",
      "Control",
      "Cooperación",
      "Coraje",
      "Cortesía",
      "Criterio",
      "Cuidado",
      "Curiosidad",
      "Dependencia",
      "Desapego",
      "Determinación",
      "Devoción",
      "Dignidad",
      "Discernimiento",
      "Disciplina",
      "Disponibilidad",
      "Distancia",
      "Dulzura",
      "Eficiencia",
      "Elegancia",
      "Empatía",
      "Energía",
      "Enfoque",
      "Entrega",
      "Entusiasmo",
      "Estabilidad",
      "Estoicismo",
      "Expresividad",
      "Fidelidad",
      "Fiereza",
      "Firmeza",
      "Foco",
      "Fuerza contenida",
      "Gentileza",
      "Gregarismo",
      "Hiperactividad",
      "Hipervigilancia",
      "Humor",
      "Impulsividad",
      "Independencia",
      "Ingenio",
      "Inquietud",
      "Inseguridad",
      "Instrumentalidad",
      "Integridad",
      "Inteligencia",
      "Intensidad",
      "Intervención estratégica",
      "Intrepidez",
      "Intuición",
      "Juicio",
      "Lealtad",
      "Lealtad dependiente",
      "Lentitud",
      "Libertad",
      "Magnanimidad",
      "Melancolía",
      "Memoria",
      "Nerviosismo",
      "Nobleza",
      "Obstinación",
      "Optimismo",
      "Orden",
      "Orgullo",
      "Paciencia",
      "Percepción",
      "Permanencia",
      "Persistencia",
      "Perspicacia",
      "Posesividad",
      "Potencia",
      "Precisión",
      "Protección",
      "Prudencia",
      "Reactividad",
      "Reflexividad",
      "Reserva",
      "Resiliencia",
      "Respeto",
      "Responsabilidad",
      "Rusticidad",
      "Seguridad",
      "Sensibilidad",
      "Serenidad",
      "Seriedad",
      "Silencio",
      "Sintonía",
      "Soberanía",
      "Sobriedad",
      "Sociabilidad",
      "Templanza",
      "Tenacidad",
      "Ternura",
      "Terquedad",
      "Territorialidad",
      "Valentía",
      "Velocidad",
      "Versatilidad",
      "Vigilancia",
      "Vitalidad",
      "Vivacidad",
      "Vocalización"
    ],
    "origins": [
      "Alemania",
      "Argentina",
      "Australia",
      "Bélgica",
      "Brasil",
      "Canadá",
      "China",
      "Croacia",
      "Cuba",
      "España",
      "Estados Unidos",
      "Francia",
      "Hungría",
      "Irlanda",
      "Italia",
      "Japón",
      "Madagascar",
      "México",
      "Oriente Medio",
      "Países Bajos",
      "Portugal",
      "Reino Unido",
      "Rusia",
      "Siberia",
      "Sudáfrica",
      "Suiza",
      "Tíbet",
      "Turquía"
    ]
  },
  "breeds": [
    {
      "id": "airedale-terrier",
      "breed": "Airedale Terrier",
      "title": "Airedale Terrier: El Monarca Polifacético",
      "epithet": "El Monarca Polifacético",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Protección Estructurada Moderna",
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Resolución de problemas",
        "Variedad de actividades"
      ],
      "traits": [
        "Audacia",
        "Dignidad",
        "Valentía",
        "Versatilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Variedad y Resolución de Problemas",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Media – Educada pero Reservada",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Airedale Terrier es una combinación magistral de elegancia británica y rudeza rústica. Su apariencia es la de un atleta de constitución sólida y cuadrada, con un pelaje duro y alambrado que actúa como una armadura natural. Su expresión, marcada por sus ojos oscuros y barbas características, denota una inteligencia vigilante y un sentido del humor que pocos perros poseen. No tiene la hiperactividad nerviosa de los terriers más pequeños; el Airedale proyecta una seguridad señorial, como quien sabe que tiene la fuerza para intervenir, pero la prudencia para esperar el momento justo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es audaz, inteligente y altamente adaptable. El Airedale posee una personalidad extrovertida y decidida, pero con un nivel de madurez superior al de otros terriers. Es famoso por su \"mente propia\"; es un perro que piensa y evalúa las situaciones antes de actuar. Posee una curiosidad inagotable y un espíritu juguetón que mantiene hasta la vejez. A diferencia de otras razas de trabajo que son unidimensionales, el Airedale es capaz de pasar de un estado de alerta máxima a uno de juego bufonesco en segundos, mostrando una plasticidad emocional asombrosa."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo es de una camaradería profunda y respetuosa. El Airedale Terrier no es un perro que se someta, sino que se asocia. Considera a su dueño como un compañero de aventuras. Su lealtad es inmensa, pero no es \"pegajosa\"; disfruta de la cercanía de su familia pero no necesita estar constantemente encima de ellos. Es extremadamente protector con los suyos, especialmente con los niños, a quienes suele cuidar con una mezcla de paciencia y vigilancia activa. Su amor se demuestra a través de la participación en las actividades diarias y una protección silenciosa."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su versatilidad es su rasgo más destacado: es un perro que puede hacerlo todo, desde rastreo y obediencia hasta defensa y compañía. Posee una valentía legendaria y una capacidad de aprendizaje muy alta cuando se le presenta un reto intelectual. Es una raza muy saludable y robusta, con un manto que apenas suelta pelo (ideal para interiores). Su carácter es equilibrado; no es un perro que ladre sin motivo, lo que lo convierte en un guardián de gran discernimiento."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su inteligencia puede volverse en contra de un dueño inexperto, ya que el Airedale se aburre soberanamente con la repetición. Si no encuentra un propósito o un estímulo, inventará sus propios juegos, que a menudo incluyen la destrucción de objetos o la excavación. Puede ser terco y desafiante si siente que las reglas no son coherentes o si el entrenamiento es monótono. Además, como buen terrier, puede tener una relación complicada con otros perros si no se trabaja su socialización de forma muy rigurosa desde cachorro."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "La Polivalencia Operativa y la Mordida de Sujeción. El Airedale combina la natación experta con la agilidad en tierra. Posee un olfato muy fino que le permite rastrear con precisión, una habilidad heredada de su cruce con el Otterhound. En combate o defensa, es un perro de una tenacidad inquebrantable; una vez que decide enfrentar una amenaza, su determinación es absoluta. Su capacidad para trabajar como perro de utilidad (mensajería, búsqueda y rescate) demuestra una concentración que pocos terriers poseen."
        }
      ],
      "imageUrl": "/images/breeds/airedale-terrier.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "akita-inu",
      "breed": "Akita Inu",
      "title": "Akita Inu: El Samurái Silencioso",
      "epithet": "El Samurái Silencioso",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Working Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Jerarquía",
        "Protección territorial"
      ],
      "traits": [
        "Dignidad",
        "Lealtad",
        "Soberanía",
        "Valentía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo-Medio",
        "motivacion_intrinseca": "Protección Territorial y Jerarquía",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Baja – Reservada y Selectiva",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Akita Inu es la personificación de la dignidad, el poder y la reserva. Originario de las regiones montañosas del norte de Japón, este perro fue diseñado para la caza de osos y la protección de la nobleza. Su presencia es imponente: posee una estructura robusta, una cola gruesa enroscada sobre el lomo y unas orejas pequeñas y erguidas que le dan una expresión de alerta constante. Es un perro que no regala su afecto ni su atención; su respeto debe ganarse, y una vez otorgado, se convierte en una devoción inquebrantable que forma parte de la identidad cultural de su país de origen.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es serio, calmado y dominante. El Akita no es un perro que busque llamar la atención; prefiere observar desde una posición de altura y control. Posee una madurez emocional que lo hace parecer mucho más viejo de lo que es, incluso desde cachorro. Es extremadamente territorial y posee un sentido del honor —si se puede llamar así a un rasgo canino— muy marcado: es valiente hasta la temeridad, pero nunca ruidoso ni innecesariamente agresivo. Su serenidad es su rasgo más intimidante y, a la vez, más admirable."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo con su dueño es de una exclusividad absoluta. El Akita es, por excelencia, el perro de \"un solo dueño\" o de una sola familia. Su lealtad no es una búsqueda de caricias constantes, sino una presencia protectora y silenciosa. Es capaz de esperar durante años (como lo demonstrated el famoso Hachiko) porque su conexión emocional no depende del tiempo ni de la distancia, sino de un pacto de lealtad profundo. Para él, el resto del mundo es secundario; su prioridad es el bienestar y la seguridad de su núcleo cercano."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su estabilidad y silencio son sus mayores virtudes. Es un perro que apenas ladra, utilizando su voz solo para advertir de un peligro real. Es extremadamente limpio, posee un instinto de protección natural que no requiere entrenamiento para activarse y es de una fidelidad que pocas razas pueden igualar. En el hogar, es un perro tranquilo que respeta los espacios y que aporta una sensación de seguridad y paz inmensa a sus dueños."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su fuerte instinto de dominancia y su naturaleza territorial lo convierten en un reto para dueños principiantes. No tolera bien a otros perros, especialmente del mismo sexo, y su reserva con los extraños puede rayar en la desconfianza si no se socializa profundamente. Es un perro de decisiones firmes; si siente que su dueño no es un líder coherente, el Akita asumirá el mando de la situación. Además, su muda de pelo es masiva dos veces al año, lo que requiere una gestión constante de su manto."
        }
      ],
      "imageUrl": "/images/breeds/akita-inu.webp",
      "origen": "Japón"
    },
    {
      "id": "alaskan-malamute",
      "breed": "Alaskan Malamute",
      "title": "Alaskan Malamute: El Poder de la Resiliencia Primitiva",
      "epithet": "El Poder de la Resiliencia Primitiva",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Working Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Movimiento",
        "Posesión"
      ],
      "traits": [
        "Dignidad",
        "Nobleza",
        "Resiliencia",
        "Terquedad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Posesión y Movimiento de Carga",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Media – Jerárquica y Grupal",
        "independencia_cognitiva": "Extrema"
      },
      "summary": "El Alaskan Malamute es el estudio definitivo sobre la fortaleza ancestral y la economía de esfuerzo dentro del grupo de perros nórdicos. Forjado en las gélidas tierras árticas para la carga pesada y la supervivencia extrema, posee una osamenta masiva, pecho profundo y un denso manto protector. Su psicología se rige por una voluntad inamovible, una resiliencia emocional muy alta, gran dignidad y un comportamiento social gobernado por leyes de jerarquía tradicionales.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es digno, afectuoso, leal, sereno y profundamente juguetón, aunque respaldado por una firmeza subyacente de perro rústico. El Alaskan Malamute posee una autoconfianza masiva, manteniéndose imperturbable ante los estímulos cotidianos de su entorno. Su inteligencia práctica está orientada a la supervivencia y a la economía de energía, actuando solo cuando considera que la tarea lo merece. Muestra un comportamiento honesto y transparente en sus rituales comunicativos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece un lazo de pertenencia a la manada basado en el respeto a la jerarquía y la coherencia del guía. El Malamute considera a su tutor como el líder de una expedición compartida, ofreciéndole un afecto cálido, devoto y expansivo pero exento de servilismo. Su adiestramiento exige tutores experimentados que sepan marcar límites claros con serenidad; si percibe debilidad o inconsistencia, asumirá la toma de decisiones para proteger al grupo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una nobleza extraordinaria, paciencia con la familia y una presencia serena que transmite calma rústica en el hogar. Es un perro muy limpio que cuida su higiene de forma similar a un felino y rara vez ladra en vano. Su resistencia física es legendaria, siendo un compañero inigualable para travesías de larga distancia, montañismo y deportes de tiro en nieve, manteniendo siempre un espíritu sereno ante inclemencias ambientales."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su marcada independencia cognitiva y terquedad natural dificultan el adiestramiento tradicional, requiriendo paciencia constante ya que no posee obediencia ciega. Presenta un fuerte instinto de caza y posesión hacia animales pequeños que exige supervisión atenta. Su espeso manto no tolera el calor sofocante, demandando espacios frescos. Asimismo, su dominancia jerárquica con perros del mismo sexo puede generar conflictos si no se gestiona la socialización desde temprana edad."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista en el arrastre y tracción de cargas pesadas a través de distancias masivas en terrenos helados. Posee una orientación geográfica instintiva y una capacidad formidable para navegar en ventiscas. En el entorno doméstico, su principal virtud es ofrecer una vigilancia calmada, digna y equilibrada, destacando también en actividades de tracción como weight pulling, mushing recreativo y senderismo técnico de alta montaña."
        }
      ],
      "imageUrl": "/images/breeds/alaskan-malamute.webp",
      "origen": "Estados Unidos"
    },
    {
      "id": "american-pit-bull-terrier",
      "breed": "American Pit Bull Terrier",
      "title": "American Pit Bull Terrier: El Atleta de Voluntad Compacta",
      "epithet": "El Atleta de Voluntad Compacta",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": null,
      "archetypes": [
        "Cooperación Humana Clásica",
        "Protección Estructurada Moderna",
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Cooperación",
        "Resolución"
      ],
      "traits": [
        "Afiliación",
        "Coraje",
        "Energía",
        "Tenacidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio–Bajo",
        "motivacion_intrinseca": "Cooperación Afiliativa y Resolución",
        "resiliencia_emocional": "Media–Alta",
        "sociabilidad": "Media (muy humana; selectiva con perros)",
        "independencia_cognitiva": "Media"
      },
      "summary": "El American Pit Bull Terrier es un atleta compacto que concentra una fuerza y determinación prodigiosas en un formato mediano. De musculatura esculpida, agilidad física superior y mirada inteligente, es un perro profundamente orientado a la cooperación con el ser humano. Su psicología destaca por una tenacidad inquebrantable, motivación intrínseca por la resolución de tareas, resiliencia emocional elevada, coraje sin vacilaciones y un deseo apasionado de vincularse estrechamente con su núcleo familiar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es intenso, apasionado, tenaz, enérgico y sensible a los estados emocionales de sus guías. El Pit Bull posee una determinación sobresaliente: cuando enfoca su atención en un objetivo, muestra una perseverancia admirable. En el espacio doméstico se comporta como un compañero cariñoso y juguetón, pero su sistema nervioso requiere canales adecuados de regulación, estimulación física y límites claros para evitar estados de sobreexcitación."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye un lazo afectivo de pertenencia e intensidad profunda, buscando el contacto corporal y la participación activa con sus referentes. Se ordena de forma brillante cuando percibe estructura, rutina y coherencia en su entorno. Su adiestramiento es sumamente fluido gracias a su deseo de complacer, requiriendo métodos de refuerzo positivo que premien el autocontrol y canalicen su enorme tenacidad en tareas deportivas estructuradas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una lealtad conmovedora y un entusiasmo contagioso que llena el hogar de dinamismo y alegría física. Su disposición para cooperar y aprender es extraordinaria, adaptándose de maravilla al trabajo en equipo. Es un perro atlético de gran resiliencia y salud resistente que disfruta de juegos exigentes. Con una guía adecuada, se convierte en un compañero leal, noble, sumamente dulce y estable en la convivencia cotidiana."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su tenacidad extrema puede convertirse en terquedad u obsesión si no se entrena el manejo de impulsos y la calma desde temprana edad. Como tipo terrier, puede mostrar una reactividad marcada hacia otros caninos si carece de socialización atenta y control en situaciones de alta excitación. Además, su necesidad de actividad física y cognitiva demanda tiempo abundante, sufriendo frustración o conductas destructivas si se le descuida."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en competencias atléticas exigentes como peso muerto (weight pulling), salto vertical, agility y pruebas de trabajo funcional por su fuerza explosiva y tenacidad física. Su destreza para resolver problemas mecánicos mediante la presa y la tracción es asombrosa. En la vida familiar, destaca por brindar una presencia leal y protectora, respondiendo de forma estelar a programas de adiestramiento de obediencia avanzada y trabajo deportivo."
        }
      ],
      "imageUrl": "/images/breeds/american-pit-bull-terrier.webp",
      "origen": "Estados Unidos"
    },
    {
      "id": "american-staffordshire-terrier",
      "breed": "American Staffordshire Terrier",
      "title": "American Staffordshire Terrier: El Gladiador Gentil",
      "epithet": "El Gladiador Gentil",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Contacto físico",
        "Trabajo conjunto"
      ],
      "traits": [
        "Coraje",
        "Devoción",
        "Entusiasmo",
        "Tenacidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Bajo",
        "motivacion_intrinseca": "Contacto Físico y Trabajo Conjunto",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Muy Alta (Humanos) / Media-Baja (Perros)",
        "independencia_cognitiva": "Media-Baja"
      },
      "summary": "El American Staffordshire Terrier o Amstaff es un prodigio de fuerza atlética y sensibilidad afectuosa, combinando un físico muscular imponente con un carácter dulce hacia las personas. De mandíbulas potentes, centro de gravedad bajo y mirada expresiva, encarna la dualidad entre la firmeza protectora y la ternura familiar. Su psicología destaca por un amor incondicional hacia el ser humano, resiliencia emocional muy alta, entusiasmo contagioso, coraje indomable y una motivación intrínseca centrada en el contacto físico.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es audaz, alegre, noble, vital y enormemente entusiasta en todas sus vivencias. El Amstaff posee una autoconfianza sólida que le otorga una gran estabilidad emocional en entornos urbanos y familiares. Vive con pasión desbordante: juega con todo su cuerpo y descansa en calma total junto a sus seres queridos. A diferencia de razas de guarda distantes, muestra una actitud abierta, confiada y optimista hacia la vida."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una dependencia afectiva profunda e intensa con sus cuidadores, convirtiendo a su humano en el centro de su universo. El Amstaff necesita sentirse integrado en la vida diaria y sufre si se le aísla. Su adiestramiento resulta gratificante gracias a su ardiente deseo de complacer, respondiendo de forma brillante a métodos de educación positiva basados en caricias, elogios y recompensas que fortalezcan el respeto mutuo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un equilibrio emocional y una paciencia conmovedora con su núcleo familiar, siendo un perro noble y extremadamente afable. Su inteligencia funcional y su disposición para aprender son sobresalientes en dinámicas de obediencia. Es un guardián disuasorio de gran coraje que defiende con lealtad. Su carácter alegre, afectuoso y cariñoso lo convierte en un amigo leal que llena el hogar de calidez y momentos entrañables."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su extraordinaria fuerza física requiere un trabajo constante de autocontrol y manejo desde cachorro para evitar tirones de correa o efusividad excesiva. Puede presentar reactividad marcada hacia otros perros del mismo sexo si no se le socializa de forma rigurosa. Además, no tolera bien la soledad prolongada, pudiendo desarrollar ansiedad por separación o conductas destructivas si no ejercita adecuadamente su mente y su musculatura."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en disciplinas deportivas de alta exigencia física como agility, weight pulling, tiro de arrastre y pruebas de obediencia técnica por su potencia muscular y agilidad. Destaca por su capacidad para saltar y maniobrar con precisión giroscópica. En el ámbito doméstico, su mayor destreza es brindar una protección disuasoria y una compañía sumamente afectuosa, siendo un modelo de lealtad y ternura familiar."
        }
      ],
      "imageUrl": "/images/breeds/american-staffordshire-terrier.webp",
      "origen": "Estados Unidos"
    },
    {
      "id": "australian-cattle-dog",
      "breed": "Australian Cattle Dog",
      "title": "Australian Cattle Dog: El Centinela de Hierro",
      "epithet": "El Centinela de Hierro",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Control",
        "Movimiento coordinado"
      ],
      "traits": [
        "Aspereza",
        "Fidelidad",
        "Tenacidad",
        "Vigilancia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Bajo",
        "motivacion_intrinseca": "Control y Movimiento Coordinado",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Media-Baja – Selectiva y Territorial",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Australian Cattle Dog o Blue Heeler es una obra maestra de resistencia rústica y funcionalidad absoluta, moldeado para el control de ganado vacuno en los inhóspitos terrenos de Australia. De cuerpo denso, mirada penetrante y agilidad sobrehumana, proyecta una energía inagotable. Su psicología destaca por un umbral de estimulación muy bajo, inteligencia funcional obsesiva, motivación por el movimiento coordinado y el control, resiliencia emocional extrema e independencia cognitiva combinada con lealtad feraz.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es intensamente valiente, hiperatento, decidido, severo y guiado por una devoción total hacia el trabajo. El Cattle Dog vive orientado a cumplir misiones, mostrando una seriedad operativa que lo distingue de otros pastores. Es un perro de un solo tutor, extremadamente vigilante y receloso ante personas extrañas. En el ámbito doméstico se mantiene en constante alerta, supervisando cada movimiento y protegiendo su territorio con tenacidad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de lealtad posesiva e hipervínculo conocido como 'perro velcro', pegándose a la pierna de su referente de forma incondicional. Siente la necesidad de supervisar y custodiar a su tutor en todo momento. Su adiestramiento exige un liderazgo firme, estructurado y muy coherente que canalice su agudeza mental en tareas desafiantes, respondiendo extraordinariamente al adiestramiento positivo basado en retos y trabajo colaborativo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una ética de trabajo inquebrantable, una inteligencia resolutiva asombrosa y una resistencia física que soporta las condiciones más extremas. Su salud rústica y longevidad son notables dentro de las razas de trabajo. Es un guardián incorruptible que ofrece seguridad absoluta a su hogar. Su fidelidad sin fisuras y su capacidad para aprender complejos comandos lo convierten en un compañero formidable para tutores activos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su desbordante energía física y mental puede transformarse en conductas obsesivas, territoriales o destructivas si no se le proporciona un propósito diario. Como buen 'heeler', posee la tendencia instintiva a morder talones cuando se sobreexcita o intenta controlar el movimiento de personas y vehículos. Además, su baja sociabilidad con extraños y otros perros exige una gestión atenta y socialización temprana impecable."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en el pastoreo y conducción de ganado vacuno bravo mediante mordiscos rápidos en los corvejones seguidos de un agachado esquivo inmediato. Destaca brillantemente en disciplinas deportivas como herding, disc dog, agility y obediencia competitiva por su velocidad y precisión. En la vida diaria, su habilidad principal es brindar una custodia atenta y una protección férrea, siendo un centinela incansable del territorio."
        }
      ],
      "imageUrl": "/images/breeds/australian-cattle-dog.webp"
    },
    {
      "id": "azawakh",
      "breed": "Azawakh",
      "title": "Azawakh: La Elegancia Defensiva del Sahel",
      "epithet": "La Elegancia Defensiva del Sahel",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Guardia Ancestral de Tiempo Largo"
      ],
      "motivations": [
        "Protección",
        "Protección territorial"
      ],
      "traits": [
        "Arrogancia",
        "Distancia",
        "Fiereza",
        "Lealtad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Bajo (Social/Movimiento)",
        "motivacion_intrinseca": "Preservación del Territorio y del Grupo",
        "resiliencia_emocional": "Media-Alta (Frente a la adversidad) / Baja (Frente al dueño)",
        "sociabilidad": "Muy Baja – Intraspecífica (con su raza) y Exclusivista",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Azawakh es la personificación de la altivez, la elegancia estilizada y la reactividad primitiva del Sahel africano. Detrás de su fisonomía esculpida, de piel fina y huesos marcados, late una estructura nerviosa de máxima vigilancia. No responde al concepto moderno de perro faldero; es un guardián ancestral diseñado para la custodia nómada de asentamientos. Permite la cercanía afectiva de su núcleo familiar, pero establece una frontera infranqueable, distante e inaccesible para cualquier persona o estímulo ajeno a su comunidad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es intensamente independiente, reservado, dominante y vigilante. Posee una personalidad serena pero altamente reactiva ante intromisiones, manteniendo un autocontrol felino y una marcada conciencia de su espacio. No tolera la manipulación física impositiva ni el trato brusco. Muestra una actitud distante con extraños y una fiereza latente si percibe amenazas sobre su territorio, reaccionando con una agilidad fulgurante y una dignidad insumisa que rechaza la sumisión ordinaria."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una unión caracterizada por la pertenencia selectiva y una lealtad feroz pero exenta de servilismo. El Azawakh elige cuidadosamente a sus referentes humanos, entregando su afecto de forma sobria, profunda y privada. Exige un guía respetuoso que entienda su naturaleza primitiva y no fuerce interacciones sociales invasivas. En el hogar busca ser un observador cercano pero autónomo, protegiendo a su núcleo con una dedicación incondicional."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su inquebrantable fidelidad y capacidad de protección territorial lo convierten en un centinela insuperable. Es un canino sumamente limpio, silencioso en interiores y noble en sus modales familiares. Goza de una salud rústica excepcional con una tolerancia pasmosa al calor extremo y al esfuerzo físico prolongado. Su porte majestuoso, combinado con un apego privado y sincero, aporta una presencia estética y una seguridad inestimables."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su marcada territorialidad y baja sociabilidad natural dificultan su adaptación a entornos urbanos concurridos. Presenta una intolerancia innata hacia desconocidos que intenten invadir su espacio, pudiendo reaccionar con agresión defensiva si es acorralado. Además, su altísimo impulso predatorio de lebrel lo lleva a perseguir velozmente a pequeños animales, mientras que su sensibilidad emocional hacia el guía requiere un manejo sumamente firme pero sin violencia."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la carrera de velocidad pura y en la caza por persecución visual a grandes distancias. Posee una resistencia formidable para cubrir terrenos áridos y una agilidad de salto extraordinaria. Su habilidad principal radica en la disuasión defensiva y custodia de perímetro, combinando una visión panorámica hiperaguda con una capacidad de aceleración fulminante para interceptar intrusos con precisión insuperable."
        }
      ],
      "imageUrl": "/images/breeds/azawakh.webp"
    },
    {
      "id": "barbet",
      "breed": "Barbet",
      "title": "Barbet: El Alma del Pantano",
      "epithet": "El Alma del Pantano",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Cooperación social",
        "Exploración",
        "Olfato"
      ],
      "traits": [
        "Alegría",
        "Dependencia",
        "Empatía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Interacción Social y Exploración Olfativa",
        "resiliencia_emocional": "Media-Alta",
        "sociabilidad": "Muy Alta – Universalmente Amigable",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Barbet es un modelo de versatilidad benevolente y entusiasmo acuático. Protegido por un icónico pelaje rizado y denso, este perro de agua ancestral combina una gran resistencia en entornos pantanosos con un temperamento afable. Su psicología se estructura en torno a una profunda necesidad de cooperación humana y exploración olfativa. Es un compañero equilibrado y cariñoso que requiere participación activa en la vida familiar para desplegar su auténtico potencial cooperativo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es pacífico, alegre, sumamente sociable y dotado de una empatía natural. El Barbet muestra una disposición abierta e ingenua hacia su entorno, careciendo por completo de agresividad o reserva maliciosa. Posee una curiosidad olfativa notable que lo impulsa a explorar terrenos húmedos con entusiasmo. En casa es un animal sereno y afectuoso que percibe con gran agudeza el estado de ánimo de sus convivientes."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de fusión emocional y dependencia cooperativa con sus dueños. El Barbet necesita sentirse integrado en las actividades grupales, mostrando una fidelidad constante y un deseo genuino de complacer. Su adiestramiento resulta muy fluido cuando se utiliza el refuerzo positivo y la estimulación mediante juegos de cobro, respondiendo con entusiasmo a guías empáticos que fomenten un ambiente de convivencia alegre y cercano."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino universalmente amigable que convive en perfecta armonía con niños, extraños y otros animales. Su manto hipoalergénico no muda pelo de forma convencional, lo que beneficia a personas con alergias. Presenta una gran flexibilidad de adaptación tanto a entornos rurales como urbanos, aportando un carácter estable, vitalidad contagiosa y una disposición innata para el trabajo en equipo y terapias."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su denso pelaje rizado exige un mantenimiento riguroso, requiriendo cepillados frecuentes y esquilado periódico para evitar rasta, humedad retenta o nudos severos. Debido a su marcada sociabilidad y tendencia a la dependencia afectiva, puede manifestar malestar o ansiedad si pasa largas horas en soledad. Además, su inclinación irresistible por el agua y el barro demanda paciencia tras sus salidas al campo."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un especialista supremo en el cobro de aves acuáticas en terrenos pantanosos y aguas profundas. Posee patas palmadas que le otorgan una natación potente, sumado a un olfato refinado para el rastreo en vegetación densa. Su agilidad física y memoria olfativa lo convierten en un excelente candidato para pruebas de trabajo acuático, búsqueda deportiva y actividades de asistencia."
        }
      ],
      "imageUrl": "/images/breeds/barbet.webp"
    },
    {
      "id": "basenji",
      "breed": "Basenji",
      "title": "Basenji: El Primitivo Autónomo",
      "epithet": "El Primitivo Autónomo",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Autonomía",
        "Exploración"
      ],
      "traits": [
        "Autonomía",
        "Autosuficiencia",
        "Curiosidad",
        "Reserva"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Autonomía y Exploración",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Baja–Media – Selectiva",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Basenji representa la esencia del perro primitivo autosuficiente y felino. Físicamente armonioso, compacto y ágil, destaca por su frente arrugada, orejas erguidas y cola enroscada. Famoso por no emitir el ladrido tradicional, se comunica mediante cantos tipo tirolés y gestos corporales precisos. Su mente no funciona bajo esquemas de sumisión ni complacencia; opera desde la evaluación analítica del entorno, manteniendo una soberanía e independencia cognitiva incomparables.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es altamente autónomo, curioso, astuto y reservado. El Basenji examina el mundo con una mirada inquisitiva y calculadora, reaccionando solo ante estímulos que considera de interés genuino. Posee una compostura limpia y felina, dedicando tiempo al aseo personal. No muestra una actitud servil ni busca la aprobación humana, comportándose con una dignidad que requiere paciencia y comprensión de sus patrones primitivos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una convivencia basada en el respeto mutuo y la colaboración funcional, sin llegar a la subordinación. Su afecto es sereno, discreto y reservado para su círculo íntimo. No es un perro demandante de caricias ni invasivo; prefiere compartir el espacio desde una distancia cómoda. El guía ideal debe ser un facilitador paciente que entienda que la obediencia estricta no forma parte de su repertorio."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su extrema pulcritud e higiene lo hacen comparativo a un gato, careciendo del típico olor canino. Es un animal silencioso que no molesta con ladridos repetitivos en el hogar. Su alta resiliencia y capacidad de autorregulación emocional evitan problemas de dependencia excesiva. Aporta una presencia limpia, distinguida y fascinante para aquellos que valoran la autenticidad de un canino primitivo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su elevadísima independencia cognitiva convierte el adiestramiento tradicional en un desafío notable. Posee un instinto de caza sumamente despierto hacia presas pequeñas, lo que exige llevarlo sujeto en áreas no delimitadas. Si se aburre o no satisface su necesidad de exploración, su curiosidad e ingenio pueden conducirlo a escapadas elaboradas o a morder objetos domésticos con persistencia."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca por su agudeza combinada de vista y olfato para la localización de presas en terrenos abiertos. Posee una agilidad de salto sorprendente para su tamaño, una velocidad de carrera notable y capacidad para trepar vallas. Su sentido del equilibrio y capacidad de limpieza autónoma lo posiciona como una joya de la adaptación biológica ancestral."
        }
      ],
      "imageUrl": "/images/breeds/basenji.webp"
    },
    {
      "id": "basset-hound",
      "breed": "Basset Hound",
      "title": "Basset Hound: El Filósofo del Rastro",
      "epithet": "El Filósofo del Rastro",
      "fciGroup": "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Sensorialidad Olfativa Profunda"
      ],
      "motivations": [
        "Alimento",
        "Rastreo"
      ],
      "traits": [
        "Amabilidad",
        "Paciencia",
        "Persistencia",
        "Terquedad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto (Visual/Auditivo) / Muy Bajo (Olfativo)",
        "motivacion_intrinseca": "El Rastro y la Gratificación Alimenticia",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Muy Alta – Amistosa y Gregaria",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Basset Hound es un monumento a la perspicacia olfativa y al estoicismo sereno. Famoso por su estructura pesada de patas cortas, orejas largas y piel holgada, es un sabueso diseñado para rastrear sin descanso sobre terrenos difíciles. Posee un temperamento amigable y una calma imperturbable. Su universo cognitivo está dominado por los aromas; cuando detecta una pista olfativa, su enfoque es absoluto y su determinación resulta inamovible.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es apacible, bondadoso, paciente y sumamente tenaz. El Basset Hound afronta el entorno con una paciencia filosófica, siendo casi inmune a la provocación o al estrés auditivo. Sin embargo, detrás de esa mirada melancólica existe una determinación inflexible cuando un olor capta su atención. Es un perro gregario y amistoso que disfruta enormemente de la tranquilidad y la rutina."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Mantiene un afecto constante, tranquilo y de baja exigencia energética con su familia. Disfruta reposar cerca de sus dueños y participar en la vida del hogar sin generar conflicto. Su adiestramiento requiere paciencia e incentivos sabrosos, ya que su motivación intrínseca por la comida y el rastro supera con frecuencia cualquier deseo de obediencia por mera complacencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino excepcionalmente tolerante con niños, visitantes y otros perros, siendo una elección magnífica para hogares familiares tranquilos. Su alta resiliencia emocional lo hace muy estable ante situaciones caóticas. Posee una voz profunda y melodiosa que utiliza raramente, y su naturaleza pacífica aporta una atmósfera de serenidad y calidez entrañable a la convivencia diaria."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su extrema terquedad cuando sigue un rastro puede provocar que ignore por completo las llamadas de su guía. Requiere atención especial en la higiene de sus largas orejas, pliegues cutáneos y control de peso para evitar patologías articulares. Asimismo, su potente instinto de rastreo exige paseos atados, ya que su nariz puede llevarlo a vagar sin medir riesgos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Posee uno de los sistemas olfativos más potentes del reino animal, capaz de discriminar rastros viejos en condiciones complejas. Sus orejas largas ayudan a canalizar los olores hacia su trufa mientras camina pegado al suelo. Sobresale en pruebas de rastreo de sangre, búsqueda deportiva y trabajo de campo por su increíble perseverancia paso a paso."
        }
      ],
      "imageUrl": "/images/breeds/basset-hound.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "beagle",
      "breed": "Beagle",
      "title": "Beagle: El Explorador Incansable",
      "epithet": "El Explorador Incansable",
      "fciGroup": "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Sensorialidad Olfativa Profunda"
      ],
      "motivations": [
        "Comida",
        "Rastreo"
      ],
      "traits": [
        "Empatía",
        "Optimismo",
        "Sociabilidad",
        "Tenacidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Alto (Auditivo/Visual) / Muy Bajo (Olfativo)",
        "motivacion_intrinseca": "El Rastro y la Comida",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Alta – Gregaria",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Beagle encarna el optimismo desbordante y la perseverancia olfativa en un cuerpo compacto y atlético. Criado históricamente para la caza en jauría, posee una anatomía robusta, orejas caídas y una cola de punta blanca siempre en movimiento. Su personalidad es alegre y gregaria, caracterizada por un entusiasmo contagioso. Guiado por una motivación de comida y rastreo insaciable, convierte cada caminata en una fascinante aventura de investigación sensorial.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es audaz, jovial, extrovertido y tenaz. El Beagle carece de timidez o agresividad, mostrando una curiosidad inagotable hacia todo lo que le rodea. Posee una gran fortaleza mental que le permite mantenerse enfocado en rastreos prolongados. Su carácter alegre y su temperamento equilibrado lo convierten en un perro dinámico, siempre dispuesto a la interacción social y al juego."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Se vincula de forma afectuosa y extrovertida con todos los miembros del hogar. Al ser un sabueso de jauría, no demuestra obsesión ni dependencia hacia una sola persona, sino una gran sociabilidad familiar. Disfruta de la compañía activa y responde muy bien al adiestramiento con premios comestibles, aunque su agudo olfato siempre ofrecerá una fuerte competencia por su atención."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino universalmente amigable que adora la convivencia con otros perros y niños de todas las edades. Su tamaño mediano y constitución robusta facilitan su transporte y participación en excursiones. Su entusiasmo vital es contagioso, siendo un animal resistente, adaptable a diversos entornos y con una actitud alegre que llena de dinamismo y afecto el ambiente familiar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Sufre de una acusada sordera selectiva cuando su trufa se pega a un rastro olfativo interesante, dificultando la llamada suelta. Tiene tendencia a vocalizar, aullar o ladrar si pasa periodos prolongados sin estimulación o compañía. Además, su desmedido apetito exige un estricto control dietético y la prevención de ingestas de basura u objetos no comestibles."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca por su capacidad para el rastreo olfativo sostenido en terrenos variados, siendo muy empleado en detección de aduanas y búsqueda de sustancias específicas. Su resistencia física en trote le permite cubrir largas distancias sin fatiga acumulada. Posee un tono de voz potente y melodioso para señalizar descubrimientos importantes a gran distancia en el campo."
        }
      ],
      "imageUrl": "/images/breeds/beagle.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "border-collie",
      "breed": "Border Collie",
      "title": "Border Collie: El Genio Infatigable",
      "epithet": "El Genio Infatigable",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Resolución de problemas",
        "Utilidad"
      ],
      "traits": [
        "Astucia",
        "Enfoque",
        "Entrega",
        "Intensidad",
        "Percepción"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Bajo",
        "motivacion_intrinseca": "Resolución de Problemas y Control",
        "resiliencia_emocional": "Media-Baja",
        "sociabilidad": "Media – Reservada y Enfocada",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Border Collie representa la cúspide de la inteligencia funcional, la velocidad de procesamiento mental y la agilidad pastoril. De cuerpo atlético, fibra elástica y mirada magnética conocida como el ojo del pastor, está diseñado para dirigir rebaños con precisión milimétrica. Su mente opera en constante anticipación, absorbiendo cada detalle del entorno con un umbral de estimulación extremadamente bajo que exige tareas continuas para mantener su equilibrio psíquico.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento se caracteriza por una intensidad intelectual y física extraordinaria. El Border Collie no se limita a estar presente; analiza, procesa y busca patrones de orden en su entorno. Posee una ética de trabajo inquebrantable y una hiperpercepción de las señales corporales del humano. Es reservado pero educado con extraños, manteniendo siempre su foco prioritario en el trabajo y la utilidad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una alianza operativa de máxima fidelidad y compenetración con su guía. El Border Collie busca un compañero de trabajo que comprenda su ritmo mental y le plantee retos continuos. Se entrega por completo a las señales de su referente, mostrando una receptividad impresionante. Requiere un humano claro, calmado y constante para evitar transmitirle ansiedad o sobreestimulación innecesaria."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es el líder indiscutible en capacidad de aprendizaje y rapidez de comprensión dentro del mundo canino. Su versatilidad para destacar en agilidad, obediencia de alta competición y trabajo de pastoreo es asombrosa. Ofrece una devoción total, una precisión ejecutiva imponente y una satisfacción incomparable para guías dedicados a disciplinas deportivas o actividades de campo avanzadas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su altísima sensibilidad y bajo umbral de estimulación pueden desencadenar comportamientos obsesivos o fijaciones con objetos en movimiento como coches, bicicletas o niños. Si carece de trabajo mental adecuado, acumula una frustración severa que deriva en neurosis o hiperactividad. Además, su fragilidad emocional ante correcciones bruscas exige un adiestramiento basado exclusivamente en la precisión positiva."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el especialista mundial en el pastoreo con la mirada y la postura de acecho, controlando el ganado a gran distancia. Posee una capacidad de aceleración, frenado y cambio de dirección fulgurante. Sobresale en la resolución autónoma de problemas complejos, memoria de comandos vocales y ejecución de rutinas de máxima precisión deportiva en disciplinas de alta exigencia."
        }
      ],
      "imageUrl": "/images/breeds/border-collie.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "boxer",
      "breed": "Boxer",
      "title": "Boxer: El Niño Eterno con Corazón de Guardián",
      "epithet": "El Niño Eterno con Corazón de Guardián",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Juego",
        "Vínculo"
      ],
      "traits": [
        "Afecto explosivo",
        "Alegría",
        "Expresividad",
        "Valentía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo-Medio",
        "motivacion_intrinseca": "Juego y Vínculo",
        "resiliencia_emocional": "Media-Alta",
        "sociabilidad": "Alta – Entusiasta",
        "independencia_cognitiva": "Media-Baja"
      },
      "summary": "El Boxer es pura energía emotiva, atletismo moloso y devoción lúdica en movimiento. Con su mandíbula braquicefálica, musculatura moldeada y mirada expresiva, combina la imponencia de un guardián con el entusiasmo jubiloso de un cachorro eterno. Su psicología está impulsada por el deseo de juego y la cercanía familiar. Es un perro noble, transparente y protector que vive la cotidianidad con una pasión contagiosa e inagotable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente alegre, expansivo, expresivo y valiente. El Boxer vive sus emociones de forma frontal y desbordante, comunicando su entusiasmo mediante saltos y movimientos corporales llenos de gracia. Posee una gran valentía para defender a los suyos si detecta peligro real, pero en condiciones normales es un optimista incansable que busca interacción y juego constante."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un apego profundo, afectuoso y protector hacia todos los integrantes de su hogar. El Boxer necesita contacto físico frecuente y sentirse parte activa de las dinámicas grupales. Su adiestramiento es muy satisfactorio cuando se enfoca como un juego estructurado, requiriendo un guía paciente y coherente que sepa encauzar su energía sin apagar su contagiosa alegría natural."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su infinita paciencia y afinidad con los niños lo convierten en un perro familiar sensacional y protector. Posee una lealtad a toda prueba, una expresividad facial sumamente humana y un coraje genuino para la guardia. Su actitud alegre y divertida llena la casa de vitalidad, ofreciendo una combinación perfecta entre protección disuasoria y afecto entrañable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su alta emotividad y energía física pueden dificultar la autorregulación en momentos de excitación, provocando saltos e ímpetu efusivo no deseado. No tolera bien el aislamiento ni la soledad prolongada, pudiendo desarrollar ansiedad por separación. Además, su anatomía braquicefálica lo hace vulnerable a golpes de calor y exige moderación durante el ejercicio intenso en días calurosos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en trabajos de defensa, custodia territorial e investigación como perro de utilidad. Su agilidad atlética le permite dar grandes saltos y utilizar sus patas delanteras con gran destreza lúdica. Posee reflejos rápidos, excelente respuesta para el trabajo de protección deportiva y gran aptitud para pruebas de obediencia dinámica e intervenciones de trabajo activo con alta motivación física."
        }
      ],
      "imageUrl": "/images/breeds/boxer.webp",
      "origen": "Alemania"
    },
    {
      "id": "boyero-de-berna",
      "breed": "Boyero de Berna",
      "title": "Boyero de Berna: El Gigante de Corazón de Oro",
      "epithet": "El Gigante de Corazón de Oro",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Pertenencia",
        "Utilidad"
      ],
      "traits": [
        "Devoción",
        "Empatía",
        "Protección",
        "Serenidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo-Medio",
        "motivacion_intrinseca": "Pertenencia y Utilidad",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Alta – Selectiva y Educada",
        "independencia_cognitiva": "Media-Baja"
      },
      "summary": "El Boyero de Berna es la personificación de la nobleza rústica y la templanza de los Alpes suizos. Sólido, sereno y profundamente reconfortante, este moloso tricolor destaca por un equilibrio psíquico excepcional y una emotividad pausada. Diseñado históricamente para la tracción de cargas y la custodia pacífica del ganado, posee un temperamento protector que no recurre a la reactividad desmedida, ofreciendo una presencia familiar cálida, estable e incondicional en todo momento.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento destaca por una serenidad imponente, un autodominio sobrio y un elevado umbral ante situaciones de estrés ambiental. El Boyero de Berna se comporta como un observador paciente que evalúa su entorno con calma antes de actuar. Muestra una actitud reposada y educada con los extraños, rechazando cualquier tipo de histeria o agresividad injustificada. En el hogar es un perro apacible que busca la armonía y la convivencia pacífica."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una devoción absoluta y una gran necesidad de pertenencia hacia su grupo familiar. No es un perro que disfrute de la distancia; busca constantemente el contacto físico sutil, apoyando el peso de su cuerpo cerca de sus guías. Su lealtad es serena y profundamente protectora, respondiendo de manera óptima al adiestramiento amable, donde su deseo de ser útil y complacer facilita un aprendizaje armónico y seguro."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su infinita paciencia y amabilidad con los niños lo convierten en un compañero familiar extraordinario. Posee una nobleza innata y un autocontrol natural que brindan una sensación inigualable de seguridad y tranquilidad. Además, su estabilidad emocional, carácter predecible y disposición para el trabajo de asistencia o tiro lo posicionan como un canino de temperamento sumamente noble, confiable y profundamente afable en la rutina cotidiana."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Debido a su gran volumen corporal y peso considerable, requiere un manejo físico consciente para evitar accidentes en espacios reducidos. Es una raza sensible al aislamiento social que padece un sufrimiento auténtico si se le excluye de las dinámicas del hogar. Asimismo, presenta cierta vulnerabilidad al calor excesivo por su denso manto y una esperanza de vida trágicamente reducida que exige cuidados veterinarios atentos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale de forma natural en labores de tracción pesada, tiro de carros y custodia territorial disuasoria de baja agresividad. Posee una fuerza física notable combinada con una capacidad de perseverancia calmada en tareas rurales. Su agudeza para percibir estados emocionales humanos lo capacita magníficamente para funciones de terapia de acompañamiento, donde su templanza y abrazo corporal reconfortan profundamente a las personas a su alrededor."
        }
      ],
      "imageUrl": "/images/breeds/boyero-de-berna.webp"
    },
    {
      "id": "bulldog-frances",
      "breed": "Bulldog Francés",
      "title": "Bulldog Francés: El Gladiador de Salón",
      "epithet": "El Gladiador de Salón",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Apego Frágil Afiliativo",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Contacto físico",
        "Reconocimiento"
      ],
      "traits": [
        "Afecto explosivo",
        "Humor",
        "Impulsividad",
        "Obstinación"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo (Social) / Alto (Dolor)",
        "motivacion_intrinseca": "Contacto Físico y Reconocimiento",
        "resiliencia_emocional": "Media-Baja",
        "sociabilidad": "Media – Expansiva con Humanos / Selectiva con Perros",
        "independencia_cognitiva": "Media-Baja"
      },
      "summary": "El Bulldog Francés es un estudio sobre la densidad emocional concentrada en un formato moloso pequeño. De constitución compacta, musculosa y orejas de murciélago, este canino monopoliza el espacio afectivo del hogar mediante un entusiasmo lúdico y una notable obstinación. Impulsado por una permanente búsqueda de contacto físico y atención, combina el valor incansable de sus ancestros de combate con la comedia gesticular de un inolvidable perro de compañía.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, impetuoso, sumamente cómico y marcado por una tenacidad inflexible. El Bulldog Francés vive sus emociones con intensidad desbordante, utilizando su expresividad facial y corporativa para demandar interacción continua. Posee una gran tolerancia al dolor físico pero un bajo umbral de frustración social. Es un perro extrovertido que mezcla arranques de juego explosivo con largos periodos de descanso relajado junto a los suyos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de fusión táctil y demandas posesivas con su núcleo familiar. Necesita la proximidad física constante, buscando dormir pegado a sus dueños y participando activamente en cualquier dinámica doméstica. No tolera la indiferencia ni el aislamiento, pudiendo manifestar comportamientos celosos o destructivos si se le ignora. Su adiestramiento requiere firmeza afectuosa para encauzar su terquedad natural sin romper su sensibilidad emocional."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una adaptabilidad extraordinaria a la vida en pisos urbanos gracias a sus moderadas necesidades de ejercicio exterior. Su carácter simpático, afectuoso y lleno de humor aporta una alegría constante al ambiente doméstico. Es un canino muy sociable con las personas, con un instinto lúdico inagotable para el juego moderado y un gran apego afectivo que llena de vida cualquier hogar que lo reciba."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Presenta fragilidades de salud acusadas vinculadas al síndrome braquiocefálico, requiriendo un control riguroso de la temperatura corporal para evitar golpes de calor fatales. Su tendencia a la terquedad puede derivar en problemas de conducta si no se establecen límites claros desde cachorro. Además, sus ruidos respiratorios y postura rígida son a menudo malinterpretados por otros perros, generando conflictos de comunicación intraspecífica."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca en el trabajo de alerta en espacios cerrados gracias a su oído atento y valentía innata. Posee una capacidad excepcional para la comunicación no verbal y la lectura de estados de ánimo humanos, convirtiéndose en un especialista natural para el confort emocional. Su fuerza física concentrada le permite destacar en juegos de presa ligera, mientras que su comicidad innata lo hace insuperable en dinámicas de entretenimiento."
        }
      ],
      "imageUrl": "/images/breeds/bulldog-frances.webp",
      "origen": "Francia"
    },
    {
      "id": "cane-corso",
      "breed": "Cane Corso",
      "title": "Cane Corso: El Guardián Táctico y Conectado",
      "epithet": "El Guardián Táctico y Conectado",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Seguridad del vínculo",
        "Trabajo conjunto"
      ],
      "traits": [
        "Discernimiento",
        "Lealtad",
        "Nobleza",
        "Potencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Alto",
        "motivacion_intrinseca": "Seguridad del Vínculo y Trabajo Conjunto",
        "resiliencia_emocional": "Media-Alta",
        "sociabilidad": "Media – Discriminatoria y Educada",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Cane Corso representa la cúspide de la potencia atlética y la vigilancia estratégica bajo control. Este imponente moloso italiano combina una musculatura esculpida con una mente analítica e hiperatenta a su entorno. Lejos de actuar por impulso ciego, opera como un sistema de protección táctico que evalúa situaciones con serenidad, priorizando la seguridad de su familia mediante la disuasión majestuosa antes que recurrir al uso directo de la fuerza.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es equilibrado, serio, noble y dotado de una capacidad de discriminación superior. El Cane Corso mantiene un estado de alerta sereno pero constante, analizando los estímulos de su periferia con objetividad. No muestra reactividad gratuita ni inquietud innecesaria; permanece calmado frente a visitas autorizadas, pero reacciona con una firmeza infranqueable ante amenazas reales, demostrando una madurez psicológica imponente en todo momento."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una conexión operativa intensa basada en el trabajo en equipo y la lealtad compartida. Necesita sentir la dirección de un guía sereno y coherente a quien consultar implícitamente antes de tomar decisiones defensivas. Se apega profundamente a su núcleo familiar con un afecto silencioso y vigilante, buscando participar de forma activa en las rutinas de protección y acompañamiento de su hogar."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un guardián excepcional que combina un instinto defensivo natural con un nivel de autocontrol sobresaliente. Posee una gran entrenabilidad y disposición para el trabajo de utilidad, mostrándose noble y sumamente paciente con los miembros de su familia. Su porte disuasorio es insuperable, ofreciendo una protección efectiva y tranquila que infunde una tranquilidad absoluta a sus dueños en cualquier circunstancia."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere obligatoriamente un dueño experimentado capaz de brindar una socialización temprana y estructurada. Si se le priva de liderazgo claro o se le aísla del contacto humano, puede desarrollar una dominancia territorial peligrosa o volverse desconfiado en exceso. Además, su gran masa muscular y fuerza física demandan un control físico adecuado y espacios espaciosos donde canalizar su energía diaria."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la custodia perimetral, la defensa personal y el trabajo de protección deportiva o policial. Posee una mordida potente y disuasoria, una velocidad de aceleración sorprendente para su masa y un agudo sentido de la territorialidad. Su capacidad táctica le permite posicionarse estratégicamente entre la amenaza y su guía, utilizando la disuasión física con una eficacia verdaderamente majestuosa."
        }
      ],
      "imageUrl": "/images/breeds/cane-corso.webp",
      "origen": "Italia"
    },
    {
      "id": "chihuahua",
      "breed": "Chihuahua",
      "title": "Chihuahua: El Sistema Nervioso en Miniatura",
      "epithet": "El Sistema Nervioso en Miniatura",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Cercanía",
        "Control",
        "Seguridad"
      ],
      "traits": [
        "Afiliación",
        "Hipervigilancia",
        "Sensibilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Cercanía, Seguridad y Control del Entorno",
        "resiliencia_emocional": "Baja–Media",
        "sociabilidad": "Media (selectiva)",
        "independencia_cognitiva": "Baja–Media"
      },
      "summary": "El Chihuahua posee una dimensión psicológica de enorme intensidad comprimida en el canino más pequeño del mundo. Con orejas erguidas y ojos expresivos, este dinámico perro opera bajo un estado de vigilancia permanente sobre microcambios ambientales. Apasionado por la seguridad y la cercanía de sus dueños, compensa su fragilidad física con una valentía desafiante, una inteligencia rápida y una permanente necesidad de refugio afectivo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vivaz, inquieto, sumamente alerta y dotado de una sensibilidad aguda. El Chihuahua procesa el entorno con rapidez, reaccionando de inmediato ante ruidos o presencias extrañas. Es un animal valiente hasta la temeridad, que no duda en enfrentarse a estímulos de gran tamaño si percibe que su espacio es invadido. Educado con coherencia, revela un carácter gracioso, afectuoso y sumamente astuto."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una alianza de apego extremo y exclusividad afectiva con su persona de referencia. Busca el refugio continuo en el regazo o bajo las prendas de su guía, demandando calor físico y lectura emocional constante. Esta dependencia puede volverse sobreprotectora si el humano consiente actitudes de custodia, requiriendo un trato que equilibre el afecto cálido con la autonomía personal necesaria para su bienestar."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su tamaño ultracompacto facilita su transporte y adaptación perfecta a cualquier entorno de vivienda urbana. Es un perro extraordinariamente perceptivo, devoto y cariñoso que demuestra una lealtad incondicional a su círculo íntimo. Su longeva esperanza de vida, sumada a su actitud alerta y vivacidad cómica, lo convierten en un compañero constante que llena la casa de dinamismo y afecto entrañable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Presenta una acusada tendencia a la vocalización excesiva y a la reactividad por miedo si se le hiperprotege o aísla socialmente. Su extrema fragilidad ósea lo expone a lesiones graves por caídas o manipulación brusca, especialmente ante niños pequeños. Además, su baja resiliencia al frío exige precauciones térmicas y una firmeza constante para evitar que desarrolle dinámicas de manipulación afectiva."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca como un centinela acústico infranqueable capaz de detectar sonidos imperceptibles a gran distancia. Posee una memoria emocional aguda y un talento notable para descifrar el lenguaje corporal humano. Su agilidad en espacios reducidos, capacidad para buscar fuentes de calor y rapidez de aprendizaje en dinámicas de obediencia lúdica hacen de este canino una joya de adaptación e intuición afectiva."
        }
      ],
      "imageUrl": "/images/breeds/chihuahua.webp",
      "origen": "México"
    },
    {
      "id": "chow-chow",
      "breed": "Chow Chow",
      "title": "Chow Chow: El Digno Autosuficiente",
      "epithet": "El Digno Autosuficiente",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Autonomía",
        "Coherencia"
      ],
      "traits": [
        "Autonomía",
        "Coherencia",
        "Dignidad",
        "Reserva"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Autonomía y Coherencia",
        "resiliencia_emocional": "Media-Alta",
        "sociabilidad": "Baja – Selectiva",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Chow Chow proyecta una dignidad inalterable a través de su majestuosa melena leonina y su característica lengua azul-negra. Este canino ancestral de origen asiático destaca por un temperamento reservado, felino e inexpresivo que rechaza la servilismo. Dotado de un alto umbral de estimulación y una profunda autonomía cognitiva, observa el mundo con compostura sobria, manteniendo una compostura distante e inquebrantable frente a personas ajenas a su núcleo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es independiente, sereno, autocrático y profundamente reservado. El Chow Chow no busca agradar ni reacciona con efusividad ante el entorno. Evalúa cada situación con un criterio analítico propio, mostrando un andar rígido y una compostura majestuosa. Posee una gran ecuanimidad y una firmeza mental que rechaza la sumisión, comportándose con una nobleza austera que exige un respeto absoluto por su espacio."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad silenciosa, sobria y profundamente respetuosa con sus dueños. El Chow Chow no demuestra su afecto con fiestas ruidosas; prefiere la presencia serena cerca de su referente. Su guía debe ser una persona tranquila, coherente y nunca invasiva, que entienda que la obediencia de este perro no se obtiene mediante órdenes impositivas sino a través del respeto mutuo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino sumamente limpio, silencioso y tranquilo que no genera molestias por ladridos innecesarios en el hogar. Su excelente autonomía emocional le permite sobrellevar la soledad con calma sin desarrollar ansiedad por separación. Actúa como un guardián discreto e imperturbable cuyo porte regio y fidelidad inquebrantable aportan una presencia distinguida y sumamente segura a la convivencia diaria."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su marcada rigidez psicológica y desconfianza natural hacia desconocidos dificultan su integración en entornos sociales dinámicos. No tolera en absoluto el adiestramiento coercitivo o el trato agresivo e irrespetuoso, pudiendo reaccionar con una terquedad infranqueable o agresión defensiva si se siente acorralado. Además, su denso pelaje de doble capa requiere un mantenimiento y cepillado constante para evitar severos problemas dermatológicos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la custodia territorial disuasoria y la protección pasiva de bienes gracias a su imponente físico e incorruptibilidad. Su resistencia al frío extremo es notable debido a su espeso manto protector. Posee una fuerza de agarre sólida y un instinto de guardia ancestral que opera con absoluta autonomía sin necesidad de recibir órdenes vocales continuas."
        }
      ],
      "imageUrl": "/images/breeds/chow-chow.webp",
      "origen": "China"
    },
    {
      "id": "cocker-spaniel-ingles",
      "breed": "Cocker Spaniel Inglés",
      "title": "Cocker Spaniel Inglés: La Alegría en Movimiento",
      "epithet": "La Alegría en Movimiento",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Apego Frágil Afiliativo",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Exploración",
        "Recompensa Social"
      ],
      "traits": [
        "Curiosidad",
        "Empatía",
        "Entusiasmo",
        "Ternura"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo-Medio",
        "motivacion_intrinseca": "Exploración y Recompensa Social",
        "resiliencia_emocional": "Media-Baja",
        "sociabilidad": "Muy Alta – Expansiva",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Cocker Spaniel Inglés es la viva personificación de la alegría contagiosa y el entusiasmo constante en movimiento. De mirar dulce, largas orejas sedosas y una cola que jamás deja de batir, este hábil perro cobrador combina una pasión inagotable por la exploración en el campo con una afectuosidad melosa en el hogar. Su psicología se orienta hacia la recompensa social y la compañía humana continua, respondiendo con optimismo luminoso ante entornos estimulantes y amorosos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es extraordinariamente alegre, dócil, sensible y rebosante de energía vital. El Cocker Spaniel Inglés se caracteriza por una actitud jovial permanente y una curiosidad insaciable ante los estímulos del entorno. Posee una gran empatía para percibir las emociones de sus convivientes, mostrándose siempre dispuesto al juego y a la interacción afable. Su naturaleza expansiva carece de agresividad, aunque su viva emotividad requiere contención calmada para evitar sobreexcitaciones cotidianas."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de apego profundo, dulce y altamente dependiente del refuerzo afectivo. El Cocker necesita sentirse aceptado e incluido en todas las dinámicas familiares, buscando complacer con un entusiasmo entrañable. Responde con enorme brillantez al adiestramiento basado en el juego y los premios, mientras que las correcciones severas o la indiferencia emocional pueden herir profundamente su sensibilidad psíquica, provocando conductas de inseguridad o sumisión excesiva."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino carismático, polivalente y sumamente cariñoso que aporta vitalidad y ternura al ambiente familiar. Su tamaño mediano y su naturaleza amable facilitan su integración con niños y otras mascotas. Posee un encanto irresistible y una disposición atlética excelente para paseos al aire libre, convirtiéndose en un compañero dinámico y sumamente gratificante para familias que disfrutan de la interacción activa."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su frondoso pelaje y sus largas orejas caídas exigen un mantenimiento riguroso con cepillados frecuentes y revisiones constantes para prevenir infecciones de oído. Debido a su marcada dependencia afectiva, puede desarrollar ansiedad por separación si se le deja solo durante periodos prolongados. Además, su elevado impulso explorador lo lleva a rastrear obsesivamente en el campo, requiriendo un control de llamada consistente."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista en el levantamiento y cobro de caza en matorrales densos y vegetación humedecida. Posee un olfato refinado, una natación fluida y una agilidad de desplazamiento notable entre la maleza. Su intuición social y expresividad afectiva lo convierten asimismo en un candidato formidable para actividades de asistencia, apoyo emocional y pruebas deportivas de agilidad con recompensa lúdica."
        }
      ],
      "imageUrl": "/images/breeds/cocker-spaniel-ingles.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "dachshund",
      "breed": "Dachshund",
      "title": "Dachshund: El Guerrero del Inframundo",
      "epithet": "El Guerrero del Inframundo",
      "fciGroup": "Grupo 4: Teckels (Dachshunds)",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Sensorialidad Olfativa Profunda",
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Exploración",
        "Rastreo"
      ],
      "traits": [
        "Astucia",
        "Coraje",
        "Obstinación",
        "Posesividad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo (Olfativo y Alerta) / Alto (Dolor)",
        "motivacion_intrinseca": "Resolución de Rastros y Exploración",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Media – Reservada y Guardiana",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Dachshund posee la conciencia de un gigante audaz contenida en una anatomía alargada y paticorta de cazador subterráneo. Diseñado históricamente para enfrentarse a presas feroces en la penumbra de sus madrigueras, desconoce por completo el complejo de inferioridad. Guiado por una tenaz motivación de rastreo e investigación olfativa, combina una astucia superior con una valentía inamovible, mostrando una personalidad carismática, autosuficiente y eternamente alerta frente a su entorno.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es audaz, pícaro, perspicaz y caracterizado por una determinación inquebrantable. El Dachshund afronta el mundo con una actitud desafiante y confiada, sin dejarse intimidar por el tamaño de otros animales. Posee una mente analítica e independiente que evalúa la conveniencia de cada orden antes de actuar. Es un observador atento que alterna periodos de tenaz investigación con momentos de cómodo descanso en casa."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad intensa, posesiva y profundamente selectiva con su persona de referencia dentro del hogar. Aunque suele ser reservado o distante con extraños, hacia su guía demuestra una devoción apasionada y protectora. Su adiestramiento exige paciencia, astucia e incentivos de alta motivación, ya que su marcada independencia cognitiva y terquedad natural rechazan de pleno la imposición autoritaria o la rutina aburrida."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una presencia inteligente, entretenida y sumamente leal que llena el hogar de personalidad única. Su tamaño compacto facilita su alojamiento en cualquier vivienda urbana, funcionando además como un vigilante acústico insuperable por su agudo sentido de alerta. Posee una gran resiliencia emocional, una valentía sorprendente y una tenacidad de trabajo que fascinan a los amantes de los perros con verdadero carácter."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su particular fisonomía de columna alargada lo hace extremadamente vulnerable a lesiones intervertebrales, requiriendo un control estricto del peso y evitar saltos frecuentes. Su marcada tendencia a ladrar ante ruidos y su instinto de excavar pueden generar inconvenientes domésticos si no se encauzan. Asimismo, su fuerte impulso cazador dificulta la convivencia segura con pequeñas mascotas si no se socializa temprano."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un especialista supremo en el rastreo de rastro de sangre y el acoso de presas en madrigueras subterráneas. Su potente voz de gran alcance le permite señalizar hallazgos a distancia con enorme claridad. Destaca por una fuerza de excavación impresionante, una tenacidad inagotable en terrenos complejos y un agudo sentido de la territorialidad disuasoria para la protección del hogar."
        }
      ],
      "imageUrl": "/images/breeds/dachshund.webp"
    },
    {
      "id": "dalmata",
      "breed": "Dálmata",
      "title": "Dálmata: El Corredor de Ruta",
      "epithet": "El Corredor de Ruta",
      "fciGroup": "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Cooperación social",
        "Movimiento"
      ],
      "traits": [
        "Entusiasmo",
        "Nerviosismo",
        "Persistencia",
        "Sociabilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio–Bajo",
        "motivacion_intrinseca": "Movimiento y Cooperación Social",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Media–Alta (según regulación)",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Dálmata es la encarnación del atleta de alta resistencia y la elegancia motora. Famoso por su inconfundible manto de motas negras o hígadas sobre fondo blanco, fue criado históricamente para escoltar carruajes a lo largo de extensas jornadas. Su psicología se cimenta en la necesidad absoluta de movimiento continuo y cooperación afectiva, requiriendo un estilo de vida activo donde despliegar su gran potencia física y su mente despierta.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es dinámico, entusiasta, extravertido y dotado de una energía desbordante. El Dálmata es un perro mentalmente despierto que requiere estímulos constantes para mantener su equilibrio emocional. Posee una sensibilidad notable a la atmósfera del hogar y una actitud juguetona e inquieta. Sin el ejercicio adecuado, su vivacidad natural puede derivar en nerviosismo o conductas impetuosas que demandan paciencia y guía estructurada."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una alianza estrecha y entusiasta centrada en el acompañamiento en actividades al aire libre. El Dálmata necesita sentirse un compañero activo en la vida de sus dueños, mostrando una lealtad profunda y cariñosa. Responde con rapidez al adiestramiento motivacional y deportivo, disfrutando enormemente de las tareas cooperativas donde puede combinar el aprendizaje de comandos con el despliegue de su capacidad física."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una resistencia cardiovascular y un fondo físico insuperables, siendo el compañero ideal para deportistas, corredores o ciclistas. Su estampa majestuosa y su simpatía contagiosa aportan una presencia espectacular al núcleo familiar. Es un perro limpio de pelo corto, alegre, versátil y dotado de una inteligencia viva que responde con devoción cuando satisface sus necesidades de ejercicio."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Demanda un compromiso diario de ejercicio físico intenso que no puede suplirse con paseos breves. Presenta una predisposición genética a la sordera congénita y a la formación de cálculos renales por uratos, requiriendo dietas específicas y abundante agua. Además, su muda de pelo es continua y sus cerdas cortas se adhieren con terquedad a tejidos y tapicerías."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale de manera única en el trote de larga distancia a ritmo sostenido y la escolta al lado de caballos o vehículos. Posee un instinto de guardia y alerta perimetral heredado de su trabajo histórico con carruajes. Destaca por su agilidad en pruebas deportivas como agility, el rastreo de baja intensidad y la obediencia dinámica con alto requerimiento motor."
        }
      ],
      "imageUrl": "/images/breeds/dalmata.webp",
      "origen": "Croacia"
    },
    {
      "id": "doberman",
      "breed": "Doberman",
      "title": "Doberman: El Centinela Emocional",
      "epithet": "El Centinela Emocional",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Lealtad",
        "Protección",
        "Vínculo"
      ],
      "traits": [
        "Apego",
        "Entrega",
        "Lealtad",
        "Protección"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Vínculo y Protección",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Media – Vincular",
        "independencia_cognitiva": "Media-Alta"
      },
      "summary": "El Doberman es la personificación de la elegancia atlélica, la agudeza perceptiva y la entrega incondicional. Con su fisonomía esculpida y su mirada limpia e hipervigilante, este guardián moderno destaca por una sensibilidad emocional profunda oculta bajo una estampa imponente. Lejos del mito de la agresividad ciega, opera como un centinela sumamente intuitivo que vive por y para la seguridad afectiva de su persona de referencia.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vigilante, sumamente perceptivo, noble y caracterizado por una alta capacidad de aprendizaje. El Doberman analiza el entorno con una precisión relámpago, permaneciendo atento a cualquier cambio en su periferia. Posee un carácter fuerte pero refinado, mostrando una calma sobria cuando se siente seguro y un coraje inquebrantable ante amenazas reales, respondiendo siempre con un autocontrol equilibrado y prudente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece un apego visceral, casi simbiótico, convirtiéndose en la sombra silenciosa de su guía. El Doberman necesita una proximidad física constante y una comunicación clara para canalizar su intensa devoción. Requiere un líder sereno, justo y coherente; los métodos coercitivos destruyen su confianza, mientras que la educación basada en el respeto mutuo potencia una compenetración operativa de nivel superior."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una capacidad de adiestramiento y una velocidad de procesamiento mental que se sitúan entre las más altas del mundo canino. Es un protector familiar devoto, limpio, silencioso en interiores y noble en sus modales. Su presencia majestuosa y su instinto de custodia natural brindan un nivel de tranquilidad y seguridad inigualable para quienes comparten su vida."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su elevada dependencia emocional lo hace susceptible a sufrir ansiedad por separación si no se gestiona su autonomía desde cachorro. Requiere una estimulación mental y física diaria para evitar estados de sobrecarga nerviosa o estrés acumulado. Además, padece la estigmatización social de su raza y presenta predisposición a enfermedades cardíacas graves como la miocardiopatía dilatada."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un especialista de élite en la defensa personal, la custodia perimetral y el trabajo policial o militar de utilidad. Posee una velocidad de reacción fulgurante, una agilidad de salto sobresaliente y una capacidad impresionante para el rastro y la búsqueda. Su intuición para detectar intenciones humanas lo convierte en un guardián táctico de precisión insuperable."
        }
      ],
      "imageUrl": "/images/breeds/doberman.webp"
    },
    {
      "id": "dogo-argentino",
      "breed": "Dogo Argentino",
      "title": "Dogo Argentino: El Atleta de Mármol",
      "epithet": "El Atleta de Mármol",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": null,
      "archetypes": [
        "Independencia Cazadora Solitaria",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Desafío físico",
        "Protección"
      ],
      "traits": [
        "Protección",
        "Serenidad",
        "Tenacidad",
        "Valentía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Bajo",
        "motivacion_intrinseca": "El Desafío Físico y la Protección",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Media – Protectora",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Dogo Argentino es una verdadera escultura viviente de potencia, tenacidad y nobleza en manto blanco inmaculado. Diseñado para la caza mayor en terrenos abruptos y la protección de haciendas, combina la fuerza irrompible de los molosos con la agilidad de los sabuesos. Posee una mente serena, una resistencia al dolor extraordinaria y un temperamento equilibrado que demuestra una tranquilidad pasmosa dentro del seno familiar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento se caracteriza por una entereza estoica, una calma imponente y una valentía inquebrantable. El Dogo Argentino no es un perro ruidoso ni reactivo sin motivo; observa el entorno con paciencia y compostura de cazador experimentado. Mantiene un autocontrol sobresaliente que le permite pasar de una completa relajación doméstica a una respuesta defensiva de máxima potencia si las circunstancias lo exigen."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un afecto profundo, cariñoso y protector hacia su núcleo familiar, mostrando una dulzura sorprendente con los suyos. Necesita un guía con experiencia en perros de gran temperamento, capaz de ofrecer una dirección firme pero siempre afectuosa. Su lealtad es absoluta y su deseo de contacto físico en casa contrasta con su actitud seria e imponente ante presencias extrañas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino sumamente silencioso que casi nunca ladra en vano, funcionando como un excelente freno de mano en la vivienda. Ofrece una protección insuperable basada en su presencia disuasoria y su coraje genuino. Su mantenimiento de pelo corto es sencillo, posee una gran resiliencia emocional y demuestra una paciencia noble y tolerante con los niños de su hogar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Exige una socialización temprana y rigurosa con otros perros para evitar dominancias o conflictos de territorialidad severos. Su enorme potencia física y su alto impulso de presa requieren un manejo responsable y paseos controlados en todo momento. Asimismo, su piel blanca es vulnerable a dermatitis, quemaduras solares y a la sordera congénita de origen genético."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el atleta supremo para la caza mayor de agarre en terrenos difíciles, capaz de rastrear, perseguir y sujetar presas corpulentas como jabalíes. Posee una potencia de mordida devastadora, un olfato perspicaz y una resistencia física legendaria. En labores de guarda territorial, sobresale por su valentía incorruptible, su agilidad de salto y su determinación insuperable ante cualquier adversidad."
        }
      ],
      "imageUrl": "/images/breeds/dogo-argentino.webp",
      "origen": "Argentina"
    },
    {
      "id": "german-pinscher",
      "breed": "German Pinscher",
      "title": "German Pinscher: La Agudeza del Equilibrio Funcional",
      "epithet": "La Agudeza del Equilibrio Funcional",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": null,
      "archetypes": [
        "Protección Estructurada Moderna",
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Estabilidad",
        "Propósito"
      ],
      "traits": [
        "Inteligencia",
        "Lealtad",
        "Sobriedad",
        "Valentía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Propósito y Claridad Operativa",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Media – Reservada y Evaluadora",
        "independencia_cognitiva": "Media-Alta"
      },
      "summary": "El German Pinscher representa el punto exacto de equilibrio entre la vivacidad del cazador de alimañas y la sobriedad del perro de guarda mediano. De musculatura enjuta, líneas elegantes y mirada penetrante, este canino histórico destaca por un temperamento alerta, seguro y desprovisto de nerviosismo inútil. Dotado de una alta resiliencia y longevidad, exige claridad operativa y propósito para desplegar su brillante inteligencia funcional.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vivaz, sobrio, equilibrado y altamente determinado. El German Pinscher no reacciona con histeria; evalúa los eventos de su entorno con una agudeza analítica fría y eficiente. Muestra un coraje genuino para proteger su espacio y una postura reservada ante desconocidos, manteniendo un comportamiento sereno en casa mientras no detecte intromisiones que requieran su atención activa."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Se relaciona como un socio operativo de alta lealtad y dignidad compartida. No busca una complacencia servil, sino una convivencia basada en el respeto y el entendimiento mutuo. Su guía debe ser transparente y constante en las normas; este perro responde con rapidez al adiestramiento estructurado donde se valore su agilidad mental y su capacidad para asumir responsabilidades dentro del hogar."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Goza de una salud rústica excepcional y una longevidad notable con mínimos requerimientos de aseo gracias a su pelaje liso. Su tamaño mediano es idóneo para cualquier entorno, ofreciendo una guardia atenta, limpia y silenciosa. Es un perro versátil, inteligente y sumamente leal que aporta una seguridad discreta y una compañía muy estimulante para dueños activos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su fuerte instinto cazador de roedores y presas pequeñas puede dificultar la convivencia con animales menores si no se educa adecuadamente. Posee una vena de terquedad que requiere límites firmes para evitar que tome decisiones autónomas de custodia. Si se aburre o carece de actividad mental, su ingenio puede derivar en conductas de manipulación o mordisqueo."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en el control de plagas y la caza de alimañas por su rapidez de reflejos y mordida precisa. Es un vigilante de propiedad formidable por su agudizado oído y discriminación de ruidos. Destaca también en deportes caninos de agilidad, obediencia y pruebas de trabajo donde su combinación de velocidad, fuerza y concentración mental brilla con intensidad."
        }
      ],
      "imageUrl": "/images/breeds/german-pinscher.webp"
    },
    {
      "id": "golden-retriever",
      "breed": "Golden Retriever",
      "title": "Golden Retriever: El Humanista del Mundo Canino",
      "epithet": "El Humanista del Mundo Canino",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Cooperación",
        "Recompensa Social"
      ],
      "traits": [
        "Cooperación",
        "Empatía",
        "Estabilidad",
        "Optimismo"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Cooperación y Recompensa Social",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Alta – Abierta",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Golden Retriever es el máximo exponente de la cooperación benevolente, el optimismo y la empatía universal. Cubierto por su característico manto dorado de tonos calidos, este canino de cobro posee una psicología extraordinariamente estable y afable. Sin rastro de agresividad, su vida gira en torno a la colaboración con el ser humano y el afecto compartido, actuando como un verdadero puente social entre personas y animales.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es estable, afable, tolerante y caracterizado por un entusiasmo equilibrado. El Golden Retriever afronta el mundo con una confianza luminosa, mostrando una apertura amigable hacia conocidos y extraños por igual. Posee una resiliencia emocional sobresaliente que le permite mantener la calma en ambientes bulliciosos, conservando siempre un deseo innato de agradar y colaborar con una gentileza contagiosa."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un compañerismo afectivo y colaborativo de máxima cercanía. El Golden prospera cuando participa activamente en las tareas de la familia, buscando la aprobación social y la caricia afectuosa. Su alta entrenabilidad y su boca blanda facilitan un aprendizaje fluido basado en el refuerzo positivo, convirtiéndolo en un alumno ejemplar que disfruta profundamente del trabajo compartido con sus guías."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino universalmente sociable cuya paciencia y amabilidad lo hacen insuperable como perro familiar, de terapia o asistencia. Presenta una adaptabilidad extraordinaria a diversos entornos y una docilidad encantadora que elimina conflictos en la convivencia. Su carácter alegre, su empatía natural y su disposición cooperativa llenan la casa de armonía, seguridad afectiva y una calidez entrañable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su denso pelaje requiere cepillados periódicos y un secado cuidadoso tras baños o natación para evitar dermatitis. Presenta una marcada tendencia a la sobrealimentación y la obesidad si no se controla su dieta con rigor. Además, sufre profundamente si se le somete a la indiferencia social o al aislamiento, pudiendo volverse apático o desarrollar ansiedad por separación."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el especialista por excelencia en el cobro de caza acuática y terrestre por su boca blanda y natación experta. Destaca de forma líder a nivel mundial en funciones de perro guía para ciegos, asistencia médica y búsqueda y rescate. Su sensibilidad y empatía lo posicionan como el candidato número uno para intervenciones asistidas con animales."
        }
      ],
      "imageUrl": "/images/breeds/golden-retriever.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "gran-danes",
      "breed": "Gran Danés",
      "title": "Gran Danés: Un Monumento de Hierro",
      "epithet": "Un Monumento de Hierro",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Conexión",
        "Confort"
      ],
      "traits": [
        "Cortesía",
        "Gentileza",
        "Nobleza",
        "Paciencia",
        "Serenidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto",
        "motivacion_intrinseca": "Confort y Vínculo Social",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Alta – Amigable y Tolerante",
        "independencia_cognitiva": "Baja"
      },
      "summary": "El Gran Danés es una lección sobre la majestuosidad tranquila y la presencia pasiva. A pesar de su imponente estatura molosa, que lo consagra como un auténtico gigante entre los caninos, destaca por un temperamento sumamente dulce, paciente y orientado a la convivencia pacífica en el hogar. Su mente funciona desde una serenidad natural que busca el confort y la cercanía familiar, combinando su imponente estampa disuasoria con una calidez interior infinitamente tierna e inofensiva.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es profundamente apacible, gentil, refinado y dotado de una serenidad imperturbable. El Gran Danés afronta la cotidianidad con una confianza pacífica en su propio tamaño, mostrando una paciencia ejemplar ante los estímulos de su entorno. Posee una naturaleza cariñosa que carece por completo de agresividad o impulsividad gratuita. Su comportamiento refleja una elegancia madura y un autocontrol noble que llena el hogar de tranquilidad y equilibrio psíquico en todo momento."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de apego táctil intenso y necesidad de fusión emocional con sus guías. A pesar de su colosal masa corporal, el Gran Danés se percibe internamente como un frágil perro faldero, buscando recostarse sobre sus dueños y demandar caricias constantes. Su adiestramiento requiere una delicadeza extrema y refuerzo positivo, ya que su sensibilidad emocional no tolera el trato brusco o la lejanía afectiva de su núcleo familiar."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un comportamiento sumamente tranquilo y respetuoso en interiores, adaptándose de forma sorprendente a la vida doméstica pacífica. Es un compañero extraordinario con niños gracias a su cortesía y tolerancia inagotables. Su presencia imponente genera un efecto disuasorio insuperable frente a intromisiones sin necesidad de ladrar ni mostrar agresividad, aportando una seguridad afectiva y una serenidad gigante a la convivencia cotidiana con sus amados dueños."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su trágicamente reducida esperanza de vida, que ronda entre los ocho y diez años, constituye un reto emocional doloroso para sus familias. Requiere una logística doméstica adaptada a su enorme envergadura y unos costes elevados de manutención alimenticia y farmacológica veterinaria. Asimismo, es extremadamente propenso a sufrir el peligroso síndrome de torsión gástrica, exigiendo cuidados estrictos en la gestión de sus comidas y reposos diarios."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como un guardián disuasorio pasivo de primer orden gracias a su estatura monumental y su grave ladrido ocasional. Históricamente apto para el tiro liviano y la caza mayor, en la actualidad destaca como un terapeuta emocional formidable cuyo gran volumen corporal ofrece un confort táctil reconfortante. Posee una marcha elegante de zancada amplia y un sentido de la cortesía social que cautiva de inmediato."
        }
      ],
      "imageUrl": "/images/breeds/gran-danes.webp",
      "origen": "Alemania"
    },
    {
      "id": "jack-russell-terrier",
      "breed": "Jack Russell Terrier",
      "title": "Jack Russell Terrier: El Oportunista Incansable",
      "epithet": "El Oportunista Incansable",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Acción",
        "Logo"
      ],
      "traits": [
        "Audacia",
        "Energía",
        "Instrumentalidad",
        "Tenacidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Bajo",
        "motivacion_intrinseca": "Acción y Logro",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Media – Competitiva",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Jack Russell Terrier concentra un motor de energía atómica y una determinación gigantesca en una anatomía compacta de cazador incansable. Audaz, hiperatento y poseedor de un ingenio desbordante, este terrier instrumental vive impulsado por la necesidad intrínseca de acción, investigación y consecución de logros. No conoce el miedo ni la vacilación, afrontando cada jornada con un entusiasmo competitivo que transforma cualquier entorno en un fascinante escenario de retos y aventuras operativas.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente intrépido, vivaz, tenaz y dotado de una capacidad de acción inmediata. El Jack Russell posee un umbral de estimulación muy bajo que lo mantiene en alerta permanente ante cualquier movimiento o sonido. Es un perro práctico, astuto y sumamente perspicaz que resuelve problemas con una tenacidad asombrosa. Su actitud vibrante exige actividad continua para evitar que su ingente energía derrive en inquietud o terquedad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una alianza dinamica basada en la cooperación lúdica y la aventura compartida. El Jack Russell respeta a guías activos que sepan liderar su temperamento mediante retos físicos e inteligentes. Aunque es cariñoso y leal con su grupo, no busca una convivencia pasiva; necesita sentir un propósito diario. Su adiestramiento requiere firmeza alegre, consistencia y canalización del juego para evitar que intente imponer su propia voluntad."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una vitalidad contagiosa, una inteligencia práctica brillante y una simpatía Inagotable que llena de dinamismo cualquier hogar activo. Es un canino extraordinariamente resistente, saludable y adaptable con una capacidad de aprendizaje fulgurante para juegos de destreza. Su carácter resolutivo, valentía sin límites y espíritu alegre lo convierten en un compañero fascinante para personas dedicadas al deporte, la naturaleza y el entrenamiento creativo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere una canalización física y cognitiva constante; de lo contrario, puede volverse hiperactivo, escavador obsesivo o excesivamente vocal. Su alto impulso de presa y su dominancia competitiva dificultan la convivencia con gatos u otras mascotas pequeñas sin una socialización experta. Además, su marcada terquedad e independencia exigen un compromiso diario para enseñarle rutinas de calma y autocontrol en el entorno urbano."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un cazador de alimañas y excavador subterráneo de eficacia insuperable gracias a su agilidad elástica y mandíbulas potentes. Destaca de forma estelar en competencias de agilidad, flyball y deportes de discriminación olfativa por su velocidad de reacción y perseverancia. Posee un salto vertical sorprendente para su tamaño y un instinto de resolución autónoma que le permite resolver dilemas complejos."
        }
      ],
      "imageUrl": "/images/breeds/jack-russell-terrier.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "labrador-retriever",
      "breed": "Labrador Retriever",
      "title": "Labrador Retriever: El Optimista Funcional",
      "epithet": "El Optimista Funcional",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Cooperación",
        "Juego",
        "Recompensa"
      ],
      "traits": [
        "Alegría",
        "Empatía",
        "Entusiasmo",
        "Intensidad",
        "Sociabilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Cooperación y Recompensa",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Alta – Abierta",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Labrador Retriever es el arquetipo del entusiasmo noble, la versatilidad funcional y el optimismo inquebrantable. Criado históricamente para el cobro exigente en aguas heladas y terrenos difíciles, posee un cuerpo atlético cubierto por un icónico pelaje denso e impermeable. Su mente opera desde la convicción de que todo problema se resuelve mediante la colaboración alegre con el ser humano, demostrando un carácter afable, una resiliencia formidable y una pasión insaciable por el agua.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es estable, jubiloso, abierto y profundamente empático. El Labrador Retriever afronta cada estímulo con una expectativa positiva, libre de recelo o agresividad. Posee una gran resistencia al estrés emocional y un deseo innato de juego que conserva hasta edad avanzada. Es un perro de energía intensa en el exterior pero capaz de mantener una conducta equilibrada en casa cuando satisface sus necesidades de ejercicio."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de cooperación entusiasta y devoción absoluta hacia sus guías. El Labrador busca de forma activa agradar a su familia, mostrando una entrenabilidad excepcional basada en el refuerzo positivo y la comida. Su necesidad de contacto y trabajo conjunto lo convierte en un socio fiel que responde con rapidez a las órdenes de su referente, disfrutando de manera especial cuando participa en tareas cooperativas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino excepcionalmente adaptable, noble y cariñoso que convive en perfecta armonía con niños, extraños y otros animales. Su alta entrenabilidad, sumada a su boca blanda y equilibrio emocional, lo posicionan como una elección brillante para cualquier hogar. Aporta un optimismo contagioso, una gran disposición de servicio y una lealtad a toda prueba que llena la casa de calidez, juego y seguridad."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Muestra un apetito voraz e insaciable que requiere un control riguroso de la dieta para evitar la obesidad y problemas articulares. Durante su juventud, su ímpetu y entusiasmo efusivo pueden resultar difíciles de gestionar si no se educan los paseos tranquilos. Asimismo, su muda de pelo es intensa y su atracción irresistible por el agua y los charcos exige paciencia tras las salidas de campo."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el cobrador de caza por excelencia en medios acuáticos y terrestres debido a sus patas palmadas, manto impermeable y boca suave. Destaca como líder mundial en labores de búsqueda de personas, detección de sustancias y asistencia médica o para invidentes. Posee una potencia de nado insuperable, un olfato refinado y una memoria de marcado de presas verdaderamente asombrosa."
        }
      ],
      "imageUrl": "/images/breeds/labrador-retriever.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "pastor-aleman",
      "breed": "Pastor Alemán",
      "title": "Pastor Alemán: El Guardián del Equilibrio",
      "epithet": "El Guardián del Equilibrio",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Working Group",
      "archetypes": [
        "Inteligencia Funcional Obsesiva",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Cooperación",
        "Eficacia",
        "Propósito"
      ],
      "traits": [
        "Enfoque",
        "Juicio",
        "Protección",
        "Respeto",
        "Sociabilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Alto",
        "motivacion_intrinseca": "Propósito y Cooperación",
        "resiliencia_emocional": "Media-Alta",
        "sociabilidad": "Media-Alta – Selectiva",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Pastor Alemán encarna la cima de la versatilidad operativa, el equilibrio psicológico y la devoción al trabajo estructurado. Dotado de una anatomía armónica y una mirada llena de inteligencia analítica, es el estándar mundial del perro de servicio. Su mente está guiada por la necesidad intrínseca de propósito, eficacia y cooperación con su guía, actuando con una compostura noble que combina la capacidad de protección firme con una afectuosidad familiar entrañable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es seguro, atento, valiente y caracterizado por un discernimiento superior. El Pastor Alemán no demuestra nerviosismo o timidez; evalúa su entorno con serena objetividad y responde con templanza. Posee un juicio agudo para diferenciar situaciones cotidianas de amenazas verdaderas, manteniendo una actitud noble y reservada frente a desconocidos, pero mostrando una disposición absoluta para la acción cuando la situación lo requiere."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una alianza de trabajo y lealtad inquebrantable de intensidad absoluta con su referente. El Pastor Alemán necesita sentir que forma parte de un equipo con misión clara, entregando una obediencia enfocada a la voz de su guía. Prospera en hogares con reglas coherentes donde se estimule su mente; la incoherencia en la educación o la falta de rumbo pueden desorientar su instinto natural de servicio."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una capacidad de aprendizaje y adaptación funcional prácticamente ilimitada para cualquier disciplina o función. Es un protector abnegado y paciente de su grupo familiar, mostrando una nobleza de carácter y un respeto admirable hacia los niños del hogar. Su porte sereno, su fiabilidad en momentos de tensión y su devoción convierten a este canino en un compañero y guardián de valor inestimable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Sufre un deterioro emocional profundo si se le priva de actividad mental o de contacto cercano con su familia. Puede desarrollar conductas de hipervigilancia o reactividad territorial si carece de un liderazgo claro y estructurado. Además, presenta vulnerabilidad genética a padecer displasia de cadera o codo y problemas dermatológicos que exigen seguimiento veterinario riguroso a lo largo de su vida."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el perro de utilidad supremo para trabajo policial, militar, rastreo de personas y salvamento en catástrofes. Posee una combinación perfecta de potencia física, olfato agudizado y concentración mental sostenida. Sobresale en la obediencia de alta competición, la custodia perimetral táctica y el pastoreo tradicional, ejecutando órdenes complejas con una precisión ejecutiva magistral y fiabilidad total."
        }
      ],
      "imageUrl": "/images/breeds/pastor-aleman.webp",
      "origen": "Alemania"
    },
    {
      "id": "pomerania",
      "breed": "Pomerania",
      "title": "Pomerania: El Sistema Nervioso Expuesto",
      "epithet": "El Sistema Nervioso Expuesto",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Atención",
        "Seguridad"
      ],
      "traits": [
        "Expresividad",
        "Inseguridad",
        "Reactividad",
        "Sensibilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Bajo",
        "motivacion_intrinseca": "Atención y Seguridad",
        "resiliencia_emocional": "Baja",
        "sociabilidad": "Media – Reactiva",
        "independencia_cognitiva": "Baja"
      },
      "summary": "El Pomerania es un volcán de vivacidad, expresividad e intensidad afectiva comprimido en un diminuto cuerpo de spitz ornamental. Envuelto en un exuberante manto de pelo esponjoso y coronado por orejas erguidas de zorro, posee un sistema nervioso de alta sensibilidad ante cualquier fluctuación del entorno. Movido por la búsqueda obsesiva de atención y seguridad, compensa su pequeña escala con una personalidad expansiva, audaz y eternamente atenta a su núcleo humano.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vivaz, sumamente reactivo, inquisitivo y caracterizado por una alerta basal continua. El Pomerania percibe de inmediato el menor estímulo auditivo o visual, respondiendo con una expresividad desbordante. Posee una audacia que desafía su tamaño, mostrándose seguro y orgulloso en su andar. Su fragilidad emocional requiere un ambiente calmado para evitar que su sensibilidad se traduzca en estados de inquietud o excitación constante."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una dependencia afectiva extrema y una necesidad constante de aprobación y contención directa. El Pomerania busca monopolizar la atención de su guía, demandando caricias y seguimiento continuo por la casa. Responde con rapidez al adiestramiento basado en premios y caricias, requiriendo una dirección dulce pero con límites firmes para evitar que desarrolle actitudes sobreprotectoras o conductas de manipulación para conseguir afecto."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un carisma arrollador, una gracia encantadora y un afecto entrañable que llena de dinamismo cualquier espacio doméstico. Su diminuto tamaño facilita su transporte y convivencia en viviendas pequeñas. Es un perro extraordinariamente perceptivo y cariñoso que funciona como un excelente vigilante acústico del hogar, brindando una lealtad alegre e incondicional a los miembros de su núcleo familiar íntimo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Muestra una marcada predisposición a la vocalización excesiva y al ladrido frecuente si no se educa su autorregulación temprana. Su manto abundante de doble capa exige un cepillado minucioso diario para prevenir nudos e higiene cutánea. Además, su frágil estructura ósea lo expone a luxaciones de rótula o colapso traqueal, requiriendo un manejo cuidadoso en presencia de niños o perros grandes."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como un centinela acústico ultrasensible capaz de alertar ante el menor ruido extraño. Posee una capacidad impresionante para el aprendizaje de trucos y habilidades de entretenimiento gracias a su inteligencia despierta y deseo de agradar. Su agilidad en espacios reducidos y su agudeza perceptiva lo convierten en un excelente compañero para estimulación afectiva y acompañamiento emocional."
        }
      ],
      "imageUrl": "/images/breeds/pomerania.webp",
      "origen": "Alemania"
    },
    {
      "id": "poodle",
      "breed": "Poodle (Caniche)",
      "title": "Poodle (Caniche): El Intelectual Emocional",
      "epithet": "El Intelectual Emocional",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Conexión",
        "Desafío mental"
      ],
      "traits": [
        "Adaptabilidad",
        "Curiosidad",
        "Inteligencia",
        "Sensibilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Bajo",
        "motivacion_intrinseca": "Desafío Mental y Conexión",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Alta – Selectiva",
        "independencia_cognitiva": "Media-Alta"
      },
      "summary": "El Poodle o Caniche es un prodigio de la inteligencia analítica, la agilidad motora y la sintonía cognitiva profunda. Tras su elegante manto rizado e hipoalergénico se oculta un atleta cerebral de ancestros cobradores de agua. Su psicología se articula alrededor del desafío intelectual continuo y la conexión empática con el ser humano, demostrando una versatilidad sin rival para destacar tanto en disciplinas deportivas de alta exigencia como en el confort doméstico refinado.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente despierto, curioso, observador y dotado de una intuición brillante. El Poodle no se limita a obedecer órdenes; analiza secuencias complejas, anticipa intenciones y resuelve problemas con rapidez pasmosa. Posee una gran sensibilidad a los matices del ambiente y un carácter alegre pero elegante. Mantiene una actitud alerta y equilibrada, necesitando retos cognitivos continuos para canalizar su ingente capacidad mental."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una complicidad mental y afectiva de finísima compenetración con sus guías. El Poodle entiende las señales gestuales y el tono de voz con una precisión casi humana, buscando una interacción rica y estimulante. Prospera mediante el entrenamiento en positivo basado en juegos mentales; la monotonía o el trato autoritario frustran su inteligencia, requiriendo un referente abierto que valore su vivacidad intelectual."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Se sitúa en la cúspide de la entrenabilidad y capacidad de aprendizaje dentro del reino canino. Su icónico pelaje rizado no muda de forma convencional, resultando idóneo para personas con alergias respiratorias. Es un perro extremadamente limpio, adaptable a cualquier entorno, afectuoso e intuitivo, cuya elegancia y alegría convierten la convivencia diaria en una experiencia llena de brillantez y armonía."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su manto rizado requiere peluquería profesional y cepillado constante para evitar rasta o nudos severos. Si carece de suficiente estimulación cognitiva o ejercicio diario, puede volverse inquieto, demandante de atención o desarrollar conductas destructivas por aburrimiento. Además, su elevada sensibilidad emocional lo hace propenso a estresarse en ambientes familiares con conflictos constantes o gritos ruidosos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el competidor estrella en agilidad, obediencia de alta precisión y trucos complejos por su velocidad motora e intelecto. Conserva aptitudes ancestrales para el cobro en agua y la natación potente. Sobresale con maestría líder en funciones de perro de terapia, detección médica de alertas y trabajo de asistencia donde su agudeza cognitiva resulta insuperable."
        }
      ],
      "imageUrl": "/images/breeds/poodle.webp"
    },
    {
      "id": "pug-carlino",
      "breed": "Pug (Carlino)",
      "title": "Pug (Carlino): El Buda Doméstico",
      "epithet": "El Buda Doméstico",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Apego Frágil Afiliativo",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Afecto",
        "Cercanía",
        "Confort"
      ],
      "traits": [
        "Apego",
        "Calidez",
        "Confort",
        "Humor"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio–Alto",
        "motivacion_intrinseca": "Afecto, Cercanía y Confort",
        "resiliencia_emocional": "Media–Alta",
        "sociabilidad": "Alta – Afiliativa",
        "independencia_cognitiva": "Baja"
      },
      "summary": "El Pug o Carlino es el gran regulador pacífico y simpático de la convivencia hogareña. De fisonomía rechoncha, frente arrugada y ojos expresivos llena de ternura, este moloso en miniatura vive dedicado al confort compartido y a la búsqueda constante de afecto humano. Su psicología pacífica carece de todo instinto de agresividad o conflicto, actuando como un verdadero bálsamo emocional que alegra el hogar mediante su encanto cómico y su naturaleza entrañable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sereno, humorístico, sumamente afable y caracterizado por una imperturbable dulzura. El Pug no busca dominancias ni disputas; afronta la cotidianidad con un espíritu bonachón y una tranquilidad contagiosa. Muestra un elevado umbral de tolerancia ante el bullicio, conservando una actitud cómica y cariñosa que cautiva a todos. Es un perro estable que equilibra breves momentos de juego con largos descansos en paz."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de apego simbiótico orientada al contacto físico directo y al seguimiento afectuoso. El Carlino necesita estar cerca de sus dueños, descansando a sus pies o en el sofá mientras comparte el ambiente familiar. Su adiestramiento es sencillo cuando se aborda con amabilidad y premios sabrosos, ya que su deseo de agradar y su sensibilidad dulce rechazan cualquier tipo de trato severo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un canino universalmente amigable que destaca por su paciencia infinita con niños y su convivencia pacífica con otras mascotas. Su bajo requerimiento de ejercicio físico y su carácter tranquilo lo convierten en el habitante perfecto para pisos urbanos. Aporta una calidez inmensa, un sentido del humor reconfortante y una presencia pacífica que llena el hogar de tranquilidad y alegría."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su conformación braquiocefálica lo hace sumamente vulnerable a los golpes de calor y a problemas respiratorios, exigiendo moderación en el ejercicio. Requiere limpieza periódica en los pliegues faciales para evitar infecciones cutáneas. Además, su marcada tendencia a la obesidad exige vigilar la alimentación con rigor, mientras que su muda de pelo corto es constante a lo largo del año."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista en el confort emocional, la compañía afectiva y la regulación del estrés en el hogar. Posee una expresividad facial sumamente comunicativa que facilita la conexión empática con las personas. Destaca en la adaptación a rutinas domésticas pausadas y en la labor de perro de acompañamiento para ancianos o personas con movilidad reducida."
        }
      ],
      "imageUrl": "/images/breeds/pug-carlino.webp",
      "origen": "China"
    },
    {
      "id": "rottweiler",
      "breed": "Rottweiler",
      "title": "Rottweiler: El Guardián de Hierro",
      "epithet": "El Guardián de Hierro",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Pertenencia",
        "Protección"
      ],
      "traits": [
        "Calma",
        "Devoción",
        "Firmeza",
        "Lealtad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Protección y Pertenencia",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Media – Selectiva y Vigilante",
        "independencia_cognitiva": "Media-Alta"
      },
      "summary": "El Rottweiler representa la fuerza sólida, el equilibrio reflejo y la lealtad inquebrantable en un imponente cuerpo moloso. Poseedor de una musculatura poderosa y un característico manto negro con marcas fuego, este histórico perro de trabajo combina una presencia física disuasoria con una mente serena y sumamente reflexiva. Su psicología está impulsada por la protección abnegada de su núcleo familiar y el deseo de pertenencia, actuando con una firmeza noble y calculada.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es tranquilo, seguro de sí mismo, sobrio y dotado de una valentía estoica. El Rottweiler no reacciona por impulso ni demuestra agitación sin sentido; observa su entorno con una mirada atenta y analítica. Posee un fuerte instinto territorial que canaliza con autocontrol, permaneciendo sereno y educado frente a presencias neutrales, pero respondiendo con una firmeza inamovible si percibe un peligro real sobre su familia."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece un vínculo de devoción absoluta y lealtad profunda con su grupo familiar. El Rottweiler necesita sentirse parte activa del hogar y recibir una dirección clara de un guía experimentado, sereno y justo. Demuestra un afecto tierno y protector con los suyos, buscando apoyarse físicamente en sus dueños para reafirmar la conexión; los métodos autoritarios o violentos dañan su nobleza natural."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un guardián excepcional e incorruptible que ofrece una protección efectiva basada en el autocontrol y la fuerza calmada. Posee una alta entrenabilidad y disposición para el trabajo de utilidad, demostrando una paciencia noble y cariñosa con los niños de la casa. Su fidelidad inquebrantable, estabilidad mental y naturaleza tranquila brindan un nivel de seguridad y paz inestimable al entorno familiar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere obligatoriamente un dueño experimentado que le proporcione una socialización temprana, estructurada y continua con otros perros. Su enorme fuerza física y masa muscular exigen un manejo responsable y paseos bajo control riguroso. Además, padece la estigmatización social de las legislaciones de razas potencialmente peligrosas y exige un compromiso diario de ejercicio para mantener su equilibrio físico."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale con maestría en la custodia perimetral, la defensa personal, el trabajo policial y deportivo de utilidad (IGP). Posee una potencia de mordida formidable, una gran resistencia al esfuerzo y capacidad para el rastreo y tiro de cargas. Su instinto de protección táctica y su temple reflexivo lo convierten en un guardián de jerarquía superior."
        }
      ],
      "imageUrl": "/images/breeds/rottweiler.webp",
      "origen": "Alemania"
    },
    {
      "id": "samoyedo",
      "breed": "Samoyedo",
      "title": "Samoyedo: La Alegría que No Se Apaga",
      "epithet": "La Alegría que No Se Apaga",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": null,
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Cooperación social",
        "Movimiento"
      ],
      "traits": [
        "Alegría",
        "Energía",
        "Gregarismo",
        "Persistencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Cooperación Social y Movimiento Sostenido",
        "resiliencia_emocional": "Media–Alta",
        "sociabilidad": "Alta – Gregaria",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Samoyedo es la encarnación de la alegría luminosa, la resistencia nórdica y la sociabilidad ilimitada. Famoso por su icónico pelaje blanco esponjoso y su característica sonrisa arrugada que evita la formación de carámbanos, este canino ártico fue criado para el trabajo en equipo, el tiro de trineos y la convivencia estrecha con familias. Su psicología destaca por un optimismo incombustible, un espíritu gregario y un entusiasmo continuo por la acción.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente alegre, extravertido, amigable y lleno de vivacidad desbordante. El Samoyedo no conoce la desconfianza ni la reserva frente a extraños; afronta el mundo con una simpatía luminosa y contagiosa. Posee una alta necesidad de estimulación social y movimiento continuo, expresando sus emociones a través de una vocalización melódica y variada. Su naturaleza abierta y carente de agresividad lo convierte en un ser encantador."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de compañerismo gregario y afecto profundo con su grupo humano, al que integra como su manada. El Samoyedo necesita sentirse incluido en todas las actividades familiares, compartiendo espacio y tareas en equipo. Responde con entusiasmo al adiestramiento motivacional basado en el juego y recompensas; el aislamiento social o la indiferencia destruyen su equilibrio emocional, provocando vocalizaciones insistentes por frustración."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una presencia hermosa, sumamente afable y divertida que llena el hogar de calidez y optimismo constante. Su total ausencia de agresividad lo hace fabuloso con niños y otras mascotas en la convivencia cotidiana. Es un atleta resistente y alegre de gran belleza que llena de vida las actividades al aire libre, convirtiéndose en un compañero encantador para personas activas y comunicativas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su denso pelaje blanco de doble capa requiere un mantenimiento exigente con cepillados frecuentes y secados minuciosos tras la humedad. Presenta una tendencia natural a ladrar o aullar melódicamente si se aburre o pasa demasiado tiempo solo. Asimismo, su elevado impulso de movimiento exige rutinas de ejercicio diario intenso, mientras que su naturaleza amigable elimina cualquier función de guardia o custodia."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista de primer nivel en el tiro de trineos y deportes de tiro como el canicross y bikejoring. Su pelaje térmico le otorga una resistencia insuperable frente a condiciones climáticas gélidas y extremas. Destaca en la interacción asistida y apoyo emocional por su simpatía arrolladora, así como en la convivencia familiar pacífica gracias a su templanza."
        }
      ],
      "imageUrl": "/images/breeds/samoyedo.webp",
      "origen": "Siberia"
    },
    {
      "id": "shiba-inu",
      "breed": "Shiba Inu",
      "title": "Shiba Inu: El Espíritu Indómito de Japón",
      "epithet": "El Espíritu Indómito de Japón",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Autonomía",
        "Desafío"
      ],
      "traits": [
        "Dignidad",
        "Orgullo",
        "Reserva"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Autonomía y Desafío",
        "resiliencia_emocional": "Alta-Media",
        "sociabilidad": "Baja – Selectiva y Distante",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Shiba Inu es la dignidad solemne, el orgullo ancestral y la independencia concentrada en un pequeño cuerpo atlético y zuno. Originario de Japón para la caza en matorrales tupidos, combina la agilidad de un felino con la templanza firme de un espíritu indómito. Su psicología se rige por la autosuficiencia, el aseo minucioso y una alerta consciente hacia el entorno, respondiendo con soberanía reservada y una lealtad tranquila.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es audaz, sereno, reservado y caracterizado por una marcada dignidad personal. El Shiba Inu observa el mundo con una mente analítica e independiente, manteniendo una distancia prudente frente a desconocidos. Es un perro extremadamente limpio que se asea como un gato y evita mancharse. Su carácter orgulloso no tolera manejos bruscos ni invasiones a su espacio privado, respondiendo siempre con compostura."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de respeto mutuo y lealtad tranquila que no busca la complacencia servil. El Shiba Inu elige amar a sus guías desde la autonomía, demostrando su afecto de forma discreta y selectiva. Su adiestramiento exige astucia, paciencia e incentivos de alto valor, ya que su independencia cognitiva rechaza la imposición autoritaria y cuestiona las órdenes que considera irrelevantes."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una pulcritud higiénica insuperable, un comportamiento silencioso en el hogar y una presencia fascinante de enorme personalidad. Su tamaño compacto facilita su estancia en pisos, funcionando además como un vigilante atento por su agudo sentido de alerta. Es un canino saludable, resistente y de estampa majestuosa que brinda un compañerismo noble y digno a dueños que valoran su espacio."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Muestra una marcada tendencia a la posesividad con juguetes, recursos o comida frente a otros animales. Su fuerte instinto de caza y su terquedad natural dificultan su suelta en espacios abiertos sin un control estricto de llamada. Además, su célebre chillido dramático ante situaciones estresantes o de manipulación veterinaria puede resultar desconcertante si no se acostumbra desde cachorro."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como cazador ágil de pequeñas presas y aves en terrenos abruptos por sus reflejos felinos y quiebro rápido. Posee un sentido del equilibrio y una agilidad de salto sobresalientes para su tamaño. Destaca en la guardia de alerta silenciosa, la discriminación olfativa en matorrales y la capacidad de navegación autónoma con absoluta entereza y valor."
        }
      ],
      "imageUrl": "/images/breeds/shiba-inu.webp"
    },
    {
      "id": "siberian-husky",
      "breed": "Siberian Husky",
      "title": "Siberian Husky: El Espíritu del Viento",
      "epithet": "El Espíritu del Viento",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Working Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Independencia Cazadora Solitaria"
      ],
      "motivations": [
        "Libertad",
        "Movimiento"
      ],
      "traits": [
        "Audacia",
        "Autonomía",
        "Gentileza",
        "Vivacidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio (Auditivo) / Muy Bajo (Visual y de Movimiento)",
        "motivacion_intrinseca": "Libertad y Movimiento",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Alta – Gregaria y Pacífica",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Siberian Husky es la encarnación del movimiento libre, la resistencia indomable y la belleza salvaje del ártico. Poseedor de unos ojos magnéticos y un denso manto protector, este spitz nórdico fue criado para recorrer distancias kilométricas arrastrando cargas ligeras en manada. Su psicología destaca por la búsqueda inagotable de libertad física, una sociabilidad pacífica universal y una autonomía cognitiva que desafía la rutina doméstica.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es extrovertido, gentil, vivaz y guiado por un espíritu indomable de exploración. El Siberian Husky carece por completo de agresividad o desconfianza territorial, mostrando una apertura amigable hacia personas y perros por igual. Es un canino expresivo que prefiere aullar de forma melódica en lugar de ladrar. Su alta necesidad de movimiento y estímulos visuales exige un entorno dinámico para encauzar su energía."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Se relaciona como un compañero de expedición y socio de aventuras dentro de una estructura gregaria. El Husky aprecia la compañía humana pero conserva una independencia natural que rechaza la servilidad. Su adiestramiento requiere comprensión de su arquetipo primitivo y paciencia constante; las órdenes rígidas chocan contra su motivación de libertad, respondiendo mejor al entrenamiento dinámico al aire libre."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un perro maravillosamente limpio, sin olor corporal, pacífico y de una estampa atlética espectacular que deslumbrar a todos. Su carácter amistoso elimina conflictos con extraños y facilita su integración con otros perros en entornos sociales. Ofrece un fondo físico y una vitalidad insuperables, siendo el compañero soñado para apasionados del deporte de montaña y las travesías extensas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Es un reputado artista del escape capaz de saltar vallas o cavar bajo cercados si se siente aburrido o frustrado. Su elevado impulso cazador hacia animales pequeños exige máxima precaución en entornos rurales o urbanos. Asimismo, su muda de pelo de doble capa es masiva en primavera y otoño, requiriendo un compromiso constante de cepillado y aspirado doméstico."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el atleta supremo de tiro de trineo a larga distancia en nieve por su eficiencia metabólica y resistencia cardiovascular. Posee una orientación geográfica impresionante y tolerancia insuperable a climas gélidos. Destaca de forma estelar en mushing, canicross, skijoring y travesías de alta montaña donde su potencia de desplazamiento sostenido brilla con plenitud."
        }
      ],
      "imageUrl": "/images/breeds/siberian-husky.webp"
    },
    {
      "id": "vizsla",
      "breed": "Vizsla",
      "title": "Vizsla (Braco Húngaro): El Atleta de Cristal",
      "epithet": "El Atleta de Cristal",
      "fciGroup": "Grupo 7: Perros de Muestra",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Afecto",
        "Cooperación social"
      ],
      "traits": [
        "Devoción",
        "Intuición",
        "Sensibilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "El Afecto y la Cooperación Social",
        "resiliencia_emocional": "Baja",
        "sociabilidad": "Alta – Expansiva y Dependiente",
        "independencia_cognitiva": "Muy Baja"
      },
      "summary": "El Vizsla o Braco Húngaro es la síntesis perfecta entre un atleta de muestra elegante y un compañero de emotividad transparente. Con su dorado pelaje corto y sus expresivos ojos rasgados, este perro de caza destaca por un nivel de apego extremo que le vale el apodo de 'perro velcro'. Su psicología se cimenta en la necesidad absoluta de afecto, presencia humana constante y cooperación afable en todo momento.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es gentil, noble, dinámico y dotado de una sensibilidad psíquica finísima. El Vizsla percibe los estados emocionales de sus amados guías con rapidez asombrosa, respondiendo con una empatía conmovedora. Muestra una energía veloz en el campo que contrasta con su dulzura en el hogar. Su baja resiliencia al estrés requiere un entorno pacifico para evitar inquietudes o nerviosismo ante tonos de voz bruscos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de fusión emocional y dependencia afectiva total con su grupo familiar. El Vizsla no concibe la distancia física; busca recostarse sobre sus dueños y seguir sus pasos por toda la vivienda. Su educación debe basarse exclusivamente en la amabilidad y el refuerzo positivo, ya que cualquier corrección severa o grito quebranta su sensibilidad, provocando timidez o bloqueo emocional."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una devoción sin límites, una ternura encantadora y una capacidad de aprendizaje rápida basada en el deseo de agradar. Es un canino extremadamente limpio, sin olor corporal y de mantenimiento facilísimo por su pelo corto. Su naturaleza afectuosa, su nobleza con los niños y su versatilidad deportiva llenan la casa de armonía, compañía incondicional y gran alegría."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Es sumamente susceptible a padecer ansiedad por separación si se le deja solo en casa durante periodos prolongados. Requiere un compromiso diario de ejercicio físico y estimulación mental para canalizar su ímpetu de perro de muestra. Además, su fina piel sin capa subyacente de pelo lo hace vulnerable al frío extremo y a arañazos entre la maleza."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un cazador todoterreno insuperable en la muestra de aves y el cobro en tierra o agua por su galope fluido y fino olfato. Destaca en pruebas de agilidad, obediencia y rastro por su inteligencia cooperativa y agilidad atlética. Su profunda empatía y sensibilidad intuitiva lo posicionan como un excelente perro de apoyo y contención afectiva."
        }
      ],
      "imageUrl": "/images/breeds/vizsla.webp"
    },
    {
      "id": "weimaraner",
      "breed": "Weimaraner",
      "title": "Weimaraner: La Dependencia Elegante",
      "epithet": "La Dependencia Elegante",
      "fciGroup": "Grupo 7: Perros de Muestra",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Cooperación social",
        "Presencia humana"
      ],
      "traits": [
        "Inquietud",
        "Intensidad",
        "Lealtad dependiente",
        "Sensibilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio–Bajo",
        "motivacion_intrinseca": "Cooperación Social y Presencia Humana",
        "resiliencia_emocional": "Media–Baja",
        "sociabilidad": "Media – Dependiente",
        "independencia_cognitiva": "Baja–Media"
      },
      "summary": "El Weimaraner o Braco de Weimar combina una elegancia aristocrática en manto gris metálico con un motor atlético de energía continua. Criado para la caza noble de gran calibre y muestra refinada, posee una mirada magnética de tonos claros y una musculatura esculpida. Su psicología está marcada por un apego intenso y una necesidad imperiosa de presencia humana, requiriendo un rumbo claro y compañía constante para canalizar su pasión.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es intenso, apasionado, sumamente alerta y caracterizado por una energía atlética inagotable. El Weimaraner es un perro highly perceptivo que requiere propósito y estímulos constantes para mantener su equilibrio emocional. Posee una naturaleza cariñosa pero posesiva con los suyos, mostrando una reserva vigilante ante desconocidos y una impaciencia ansiosa si se siente relegado del grupo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una lealtad dependiente de máxima exigencia afectiva, necesitando una cercanía física estrecha con sus guías. El Weimaraner prospera cuando trabaja hombro con hombro junto a su persona de referencia en actividades al aire libre. Su adiestramiento debe ser constante, justo y motivador; la falta de guía firme puede generar conductas autoritarias o un nerviosismo descontrolado por inseguridad."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una belleza estética soberbia, una versatilidad atlética insuperable y un enfoque total hacia la voz de su guía. Es un compañero de campo excepcional para amantes del deporte de gran fondo, de pelo corto y limpio en interiores. Su devoción protectora e inteligencia trabajadora aportan una compañía intensa, fiel y profundamente gratificante a familias muy activas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Presenta una altísima predisposición a sufrir ansiedad por separación severa y conductas destructivas si pasa tiempo en soledad. Su enorme caudal energético requiere varias horas de ejercicio y estímulo diario para evitar frustraciones. Asimismo, padece propensión a la torsión gástrica y su impulso de caza dificulta la convivencia con pequeñas mascotas si no se educa."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un especialista supremo en la caza de muestra, rastreo de rastro de sangre y cobro de piezas en terrenos exigentes. Posee una velocidad de galope potente, olfato de gran alcance y aptitudes para la guardia perimetral. Destaca con brillantez en canicross, agilidad y deportes de resistencia donde su capacidad física y enfoque lucen."
        }
      ],
      "imageUrl": "/images/breeds/weimaraner.webp",
      "origen": "Alemania"
    },
    {
      "id": "xoloitzcuintle",
      "breed": "Xoloitzcuintle",
      "title": "Xoloitzcuintle: El Guardián Místico de Piel Caliente",
      "epithet": "El Guardián Místico de Piel Caliente",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Autonomía",
        "Cercanía"
      ],
      "traits": [
        "Alerta",
        "Dignidad",
        "Lealtad",
        "Reserva"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio–Alto",
        "motivacion_intrinseca": "Cercanía Selectiva y Autonomía",
        "resiliencia_emocional": "Media–Alta",
        "sociabilidad": "Media–Baja (selectiva)",
        "independencia_cognitiva": "Media–Alta"
      },
      "summary": "El Xoloitzcuintle es el perro sagrado de México, joya milenaria de elegancia mística y calidez física singular. Caracterizado por su variedad desnuda de piel suave y templada o por su versión con pelaje corto, posee un porte estatuario de líneas limpias. Su psicología primitiva combina una serenidad observadora con una autonomía sobria, actuando como un guardián silencioso e intuitivo profundamente conectado con su núcleo familiar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es pacífico, sereno, noble y caracterizado por una cautela reservada ante presencias extrañas. El Xoloitzcuintle no reacciona con estridencia ni agresividad injustificada; analiza su entorno con paciencia e inteligencia primitiva. Posee una gran tranquilidad en el hogar y una sensibilidad sutil ante el ambiente. Su comportamiento refleja una dignidad ancestral que prefiere la observación atenta a la agitación inútil."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad íntima, selectiva y por capas con sus convivientes de confianza. El Xoloitzcuintle busca el contacto físico directo para transmitir su calor corporal característico, recostándose en silencio junto a sus amados dueños. Su educación requiere tacto dulce, respeto a su autonomía y refuerzo positivo; los métodos severos arruinan su confianza, mientras que la comprensión potencia un apego místico insuperable."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una limpieza doméstica absoluta, ausencia de pulgas o mudas molestas en su variedad sin pelo y una tranquilidad silenciosa. Es un perro sumamente fiel, noble e intuitivo que funciona como un excelente vigilante discreto. Su porte majestuoso, su calidez táctil reconfortante y su naturaleza pacífica lo convierten en un compañero de vida fascinante, limpio e hipoalergénico."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "La variedad sin pelo exige cuidados cutáneos específicos como hidratación periódica y protección solar estricta ante radiación solar. Es sensible a temperaturas extremas de frío, requiriendo abrigo en invierno para evitar hipotermia. Asimismo, su desconfianza natural con desconocidos exige una socialización temprana y gradual para evitar que se muestre excesivamente tímido o distante en público."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como guardián silencioso y centinela intuitivo capaz de detectar intenciones mediante su agudo oído y vista. Posee una capacidad terapeuta única para brindar confort térmico a personas con dolores articulares o ansiedad. Destaca por su agilidad natural, su trote elegante y una enorme fidelidad para la convivencia pacífica y respetuosa en el hogar."
        }
      ],
      "imageUrl": "/images/breeds/xoloitzcuintle.webp"
    },
    {
      "id": "pastor-australiano",
      "breed": "Pastor Australiano (Australian Shepherd)",
      "title": "Pastor Australiano: El Motor de Impulso Infinito",
      "epithet": "El Motor de Impulso Infinito",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Inteligencia Funcional Obsesiva",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Trabajo conjunto",
        "Desafío mental",
        "Movimiento coordinado"
      ],
      "traits": [
        "Inteligencia",
        "Vivacidad",
        "Versatilidad",
        "Impulsividad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Trabajo Dinámico y Agilidad",
        "resiliencia_emocional": "Media-Alta",
        "sociabilidad": "Alta con la Familia, Atenta a Extraños",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Pastor Australiano es un atleta incansable de mirada penetrante, manto frondoso y capacidad táctica magistral. Criado para la conducción exigente de ganado en ranchos norteamericanos, combina una velocidad relámpago con un intelecto obsesivo por el control del movimiento. Su psicología se orienta hacia el trabajo dinámico conjunto, el desafío cognitivo continuo y la protección de su núcleo, requiriendo una actividad constante para mantener su equilibrio mental.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente enfocado, vivaz, versátil y dotado de una energía desbordante. El Pastor Australiano posee un umbral de estimulación bajo que lo mantiene atento a cualquier desplazamiento en su periferia. Su instinto de pastoreo es tan marcado que intenta organizar el movimiento de animales o vehículos. Requiere dirección clara para canalizar su apasionada ética de trabajo y evitar estados de impaciencia."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una alianza de trabajo estrecha, devota e intensa con su grupo familiar. El Aussie necesita un guía estructurado que le encomiende misiones diarias y estimule su inteligencia. Disfruta enormemente de la cooperación en equipo y el adiestramiento deportivo en positivo; si se le priva de liderazgo y actividades compartidas, buscará tareas por su cuenta, imponiendo reglas de pastoreo en casa."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una capacidad de aprendizaje, agilidad física y versatilidad funcional que deslumbran en cualquier disciplina deportiva. Es un protector abnegado y cariñoso de su familia, mostrando un entusiasmo contagioso y una lealtad a toda prueba. Su mirada heterocroma o expresiva, su dinamismo y su inteligencia práctica convierten a este canino en un compañero extraordinario para personas muy activas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su inagotable motor de energía y su impulso de pastoreo pueden derivar en conductas obsesivas, mordisqueos de talones o hiperactividad si no se canalizan. Su frondoso pelaje de doble capa requiere cepillados regulares para evitar nudos durante las épocas de muda. Además, su sensibilidad al movimiento exige socialización temprana para evitar que persiga coches o ciclistas con insistencia."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el líder indiscutible en pruebas de agilidad, disc dog, herding y flyball por su quiebro fulgurante e inteligencia táctica. Posee una destreza superior para la conducción de ganado vacuno u ovejero en terrenos abruptos. Destaca también en labores de búsqueda y rescate, detección de sustancias y trucos de alta complejidad con ejecución magistral."
        }
      ],
      "imageUrl": "/images/breeds/pastor-australiano.webp",
      "origen": "Estados Unidos"
    },
    {
      "id": "belgian-malinois",
      "breed": "Pastor Belga Malinois",
      "title": "Pastor Belga Malinois: La Furia Táctica Conducida",
      "epithet": "La Furia Táctica Conducida",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Protección Estructurada Moderna",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Trabajo",
        "Eficacia",
        "Aprobación social"
      ],
      "traits": [
        "Intensidad",
        "Reactividad",
        "Lealtad",
        "Velocidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Bajo",
        "motivacion_intrinseca": "Morder, Perseguir y Ejecutar Tareas",
        "resiliencia_emocional": "Alta bajo Guía, Sensible al Trato Injusto",
        "sociabilidad": "Orientada Exclusivamente a su Guía",
        "independencia_cognitiva": "Baja – Dependencia del Estímulo del Manejador"
      },
      "summary": "El Pastor Belga Malinois es el prototipo del perro operativo supremo, caracterizado por una musculatura enjuta, velocidad felina e intensidad ilimitada. Diseñado para la obediencia táctica y la protección de máxima exigencia, posee una mente ultra enfocado que vive por y para la ejecución de tareas. Su psicología está impulsada por impulsos de presa altísimos, requiriendo un manejo profesional estructurado para encauzar su potencia con precisión.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es hiperatento, reactivo, sumamente enfocado y dotado de una velocidad de respuesta relámpago. El Malinois no conoce la vacilación; analiza y ejecuta con una determinación formidable. Posee un umbral de estimulación muy bajo ante el movimiento o la voz de su guía, permaneciendo en un estado de alerta continua. No tolera la inactividad ni la falta de rumbo en su vida cotidiana."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación simbiótica y apasionada orientada de forma exclusiva hacia su manejador de referencia. El Malinois exige un liderazgo altamente profesional, justo y coherente, donde la disciplina se combine con el trabajo motivacional. Su deseo de complacer y morder bajo control es total; las incoherencias en las instrucciones o el trato brusco generan frustración o conductas neuróticas de sobrecarga nerviosa."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una capacidad de trabajo, potencia de mordida deportiva y velocidad de aprendizaje que no tienen rival en el mundo canino. Es un perro abnegado, atlético, limpio y con una lealtad incondicional hacia su guía. Su concentración mental sostenida y su fiabilidad táctica bajo control convierten a este canino en una herramienta operativa de élite verdaderamente insuperable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Es un perro absolutamente inadecuado para dueños principiantes o estilos de vida sedentarios y domésticos pasivos. Sin varias horas diarias de entrenamiento deportivo o trabajo operacional, su altísima intensidad deriva en hiperactividad, reactividad severa o destructividad. Además, su elevado impulso de presa exige un control estricto en la convivencia con otros animales o en entornos urbanos ruidosos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el perro rey absoluto en disciplinas de trabajo deportivo como Mondioring, IGP, detección táctica militar y salvamento complejo. Posee un salto vertical portentoso, una velocidad de carrera insuperable y capacidad para morder con mordida plena sobre manga. Sobresale en la custodia táctica perimetral y la localización de sustancias en escenarios de máxima exigencia."
        }
      ],
      "imageUrl": "/images/breeds/belgian-malinois.webp"
    },
    {
      "id": "corgi-pembroke",
      "breed": "Welsh Corgi Pembroke",
      "title": "Welsh Corgi Pembroke: El Pequeño Conductor Real",
      "epithet": "El Pequeño Conductor Real",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Afecto",
        "Comida",
        "Control de espacio"
      ],
      "traits": [
        "Audacia",
        "Tenacidad",
        "Alegría",
        "Vocalización"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Bajo",
        "motivacion_intrinseca": "Pastoreo de Talones y Dinámicas Familiares",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Alta con la Familia, Cierta Tenacidad con Extraños",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Welsh Corgi Pembroke es un perro de pastor compacto pero de enorme presencia y valentía. Pese a sus extremidades cortas y contextura baja, conserva la tenacidad, firmeza y agilidad necesarias para dirigir ganado vacuno sin arredrarse. Su psicología destaca por una alta vivacidad intelectual, un marcado impulso de control espacial y una constante disposición para la interacción con su entorno doméstico. Su mirada despierta y sonrisa natural reflejan un carácter seguro, entusiasta y profundamente audaz.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente alegre, audaz, perspicaz y lleno de energía dinámica. El Pembroke no se percibe a sí mismo como un perro pequeño; afronta los desafíos diarios con la determinación sobria de un gran pastor. Posee un umbral de estimulación medio-bajo que lo mantiene alerta ante cualquier movimiento o sonido inusual. Tiende a recurrir a su ladrido sonoro para comunicarse, delimitar su espacio o manifestar entusiasmo ante la acción diaria."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de compañerismo intenso y afecto incondicional con su grupo familiar. El Pembroke necesita sentirse parte activa y constante de la rutina del hogar, acompañando a sus tutores en cada desplazamiento. Responde de forma brillante al adiestramiento motivacional basado en juegos y recompensas alimenticias. Sin embargo, requiere una guía firme y coherente para encauzar su tendencia natural a dirigir el movimiento de personas u otros animales."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una vitalidad contagiosa, una simpatía arrolladora y una versatilidad adaptativa excepcional tanto en pisos urbanos como en entornos rurales. Su elevada inteligencia funcional facilita el aprendizaje rápido de órdenes y trucos complejos, mostrando una devoción sincera por agradar a los suyos. Es un perro guardián alerta, valiente y afectuoso que llena la convivencia diaria de dinamismo, diversión y una lealtad inquebrantable a toda prueba."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Presenta una inclinación instintiva a morder o guiar los talones de personas en movimiento si su motivación de pastoreo no es canalizada adecuadamente. Su tendencia al vocalismo frecuente puede resultar molesta en comunidades de vecinos si no se educa desde cachorro. Asimismo, su gran voracidad por la comida exige un control riguroso de la dieta para prevenir el sobrepeso, condición que compromete seriamente la salud de su columna vertebral."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista en el pastoreo de ganado mediante pellizcos rápidos en corvejones y evasiones ágiles bajo las pezuñas. Posee una aptitud estelar para deportes deportivos como agility, obediencia competitiva y herding. Destaca además en la guardia de alerta temprana por su fina percepción auditiva y en la resolución de rompecabezas cognitivos gracias a su aguda persistencia intelectual."
        }
      ],
      "imageUrl": "/images/breeds/corgi-pembroke.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "pastor-de-shetland",
      "breed": "Pastor de Shetland (Shetland Sheepdog)",
      "title": "Shetland Sheepdog: La Sensibilidad Armónica",
      "epithet": "La Sensibilidad Armónica",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Apego Frágil Afiliativo",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Aprobación social",
        "Sintonía",
        "Orden"
      ],
      "traits": [
        "Sensibilidad",
        "Dedicación",
        "Reserva",
        "Vigilancia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Sintonía Emocional y Trabajo Fino",
        "resiliencia_emocional": "Media-Baja",
        "sociabilidad": "Afectuoso con los Suyos, Muy Reservado con Extraños",
        "independencia_cognitiva": "Baja"
      },
      "summary": "El Pastor de Shetland o Sheltie es la personificación de la elegancia canina, la delicadeza mental y la sensibilidad empática. De figura esbelta y manto frondoso, este pequeño perro de trabajo posee una intuición asombrosa para captar los tonos emocionales de su guía con precisión matemática. Su psicología se rige por el deseo ardiente de complacer, la búsqueda de armonía en el hogar y un enfoque cooperativo de finísima sintonía.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es dulce, receptivo, observador y sumamente inteligente. El Sheltie destaca por una naturaleza serena pero profundamente vigilante hacia su entorno circundante. Posee un umbral de estimulación bajo que lo vuelve receptivo a cualquier cambio o ruido. Frente a desconocidos muestra una reserva prudente y educada, prefiriendo analizar desde la distancia antes de otorgar su confianza, manteniendo siempre una compostura impecable y tranquila."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un lazo afectivo de sintonía absoluta y devoción casi mística con su tutor de referencia. El Sheltie vive centrado en la mirada y las palabras de su guía, buscando su aprobación constante en cada acción. Su educación requiere una amabilidad extrema y refuerzo positivo exclusivo; los tonos de voz elevados, gritos o correcciones duras causan un profundo impacto en su delicada resiliencia emocional."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una entrenabilidad deslumbrante, una belleza estética refinada y una convivencia doméstica caracterizada por la paz y el respeto. Su capacidad para leer el ambiente emocional del hogar lo convierte en un consuelo afectuoso en momentos de tensión. Es extremadamente leal, cuidadoso con los niños y dócil, resultando un compañero gratificante para familias que aprecian la delicadeza y la cooperación instintiva."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su marcada sensibilidad puede degenerar en timidez, desconfianza o temor excesivo si no recibe una socialización temprana y progresiva. Presenta una propensión natural a la vocalización reactiva frente a estímulos repentinos o timbres si no se gestiona con serenidad. Además, su frondoso manto de doble capa exige un mantenimiento constante mediante cepillados regulares para evitar la formación de nudos molestos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Brilla de manera magistral en pruebas de agilidad, obediencia de alta precisión y freestyle canino debido a su ligereza física y velocidad de respuesta. Posee aptitudes excepcionales para la terapia emocional y el apoyo afectivo gracias a su fina intuición psíquica. Destaca también en el pastoreo de rebaños reducidos y en la detección de variaciones en el estado de ánimo humano."
        }
      ],
      "imageUrl": "/images/breeds/pastor-de-shetland.webp"
    },
    {
      "id": "pastor-blanco-suizo",
      "breed": "Pastor Blanco Suizo",
      "title": "Pastor Blanco Suizo: El Guardián Etéreo",
      "epithet": "El Guardián Etéreo",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Apego Frágil Afiliativo",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Afecto",
        "Seguridad del vínculo",
        "Familia"
      ],
      "traits": [
        "Sensibilidad",
        "Lealtad",
        "Calidez",
        "Vigilancia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Protección Cercana y Compañía",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Reservado pero Pacífico con Desconocidos",
        "independencia_cognitiva": "Baja-Media"
      },
      "summary": "El Pastor Blanco Suizo es un perro de pastor impresionante que combina la prestancia estética del lobo blanco con un carácter dulce, afable y sumamente equilibrado. Originado a partir de líneas del Pastor Alemán, este canino sobresale por su manto etéreo y una mente volcada por completo hacia la protección cercana de su grupo humano. Su psicología combina prudencia pacífica ante extraños, calidez afectuosa y un apego frágil extremadamente fiel.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sereno, atento, cariñoso y sensible. A diferencia de otros perros de trabajo más severos, el Pastor Blanco Suizo afronta la vida con una actitud apacible y tolerante. Muestra una vigilancia sobria sobre su territorio sin recurrir a la agresión injustificada. Posee un umbral de estimulación medio que le permite mantenerse calmado en casa mientras observa minuciosamente todo cuanto ocurre a su alrededor."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una conexión emocional intensa y profunda con todos los miembros del hogar, considerándolos su tesoro más valioso. Este perro necesita sentirse integrado en la vida diaria familiar; el aislamiento prolongado o la indiferencia quebrantan su estabilidad afectiva. Su adiestramiento debe ser claro, amable y motivacional, respondiendo con entusiasmo cuando percibe la coherencia, la calidez y el respeto de su guía."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Brinda una compañía extremadamente cariñosa, noble y pacífica que aporta armonía al entorno familiar. Es un protector abnegado pero sin asperezas, destacando por su paciencia ejemplar con los niños y su buen comportamiento con otros animales. Su inteligencia cooperativa facilita un adiestramiento fluido, convirtiéndolo en un perro versátil, limpio, majestuoso y profundamente leal a sus seres queridos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Es propenso a desarrollar ansiedad por separación si se le somete a largos periodos de soledad e inactividad social. Su marcada sensibilidad requiere evitar castigos o gritos, los cuales erosionan su confianza hacia el guía. Asimismo, su tupido pelaje blanco requiere cepillados constantes para controlar la pérdida de pelo durante las épocas de muda y mantener su esplendor natural."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en labores de búsqueda y rescate, asistencia médica y terapia de apoyo emocional gracias a su templanza y sensibilidad intuitiva. Posee un olfato finísimo para el rastro y una gran aptitud para deportes como el agilidad, la obediencia y el canicross. Destaca como un guardián disuasorio de presencia imponente y carácter pacífico pero siempre atento."
        }
      ],
      "imageUrl": "/images/breeds/pastor-blanco-suizo.webp",
      "origen": "Suiza"
    },
    {
      "id": "beauceron",
      "breed": "Pastor de Beauce (Beauceron)",
      "title": "Beauceron: El Gigante Rústico del Perímetro",
      "epithet": "El Gigante Rústico del Perímetro",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Protección Estructurada Moderna",
        "Guardia Ancestral de Tiempo Largo"
      ],
      "motivations": [
        "Custodia",
        "Trabajo",
        "Control de espacio"
      ],
      "traits": [
        "Rusticidad",
        "Autoconfianza",
        "Sobriedad",
        "Fuerza contenida"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Alto",
        "motivacion_intrinseca": "Vigilancia Territorial y Trabajo Físico",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Reservado y Distante con Extraños",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Pastor de Beauce o Beauceron es un gigante rústico de estampa imponente, musculatura poderosa y mirada noblemente franca. Tradicionalmente dedicado al pastoreo de gran calibre y a la custodia de fincas en Francia, este moloso de pastor destaca por su resiliencia emocional extraordinaria y su serenidad sobria. Su psicología se fundamenta en un autocontrol inquebrantable, una valentía calmada y una necesidad de trabajo físico orientada al control del espacio.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es calmado, franco, seguro de sí mismo y profundamente sobrio. El Beauceron no muestra signos de nerviosismo o agitación sin motivo; evalúa las situaciones con frialdad y juicio maduro. Muestra una actitud naturalmente reservada y distante con los desconocidos, vigilando el perímetro con paciencia. Su elevada resiliencia emocional le permite soportar momentos de estrés manteniendo una conducta equilibrada y serena."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una alianza de lealtad indestructible basada en la coherencia, la justicia y el respeto mutuo. El Beauceron respeta únicamente a tutores serenos que ejerzan un liderazgo claro sin violencia ni inconsistencias. Demuestra una devoción profunda hacia su familia, a la que protege con determinación. Su adiestramiento requiere paciencia, ya que su maduración mental es tardía pero sólida una vez asentada."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un guardián natural incorruptible de potencia física soberbia que transmite una enorme sensación de seguridad al hogar. Posee una salud rústica excepcional, gran resistencia al trabajo duro y una paciencia protectora muy dulce con los niños de la casa. Su nobleza, autoconfianza y compostura lo convierten en un compañero de vida seguro, estable, leal y altamente confiable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere obligatoriamente un dueño con experiencia previa en razas de trabajo de gran tamaño y carácter firme. Si carece de actividad física exigente y estimulación mental, su energía contenida puede transformarse en conductas territoriales rígidas o terquedad. Además, sus características dobles espolones en las patas traseras requieren inspección y cuidados periódicos para evitar enganches o heridas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale con maestría en el pastoreo de bovinos, la protección perimetral, el trabajo policial y la defensa deportiva (IGP, Ring Francés). Posee una fuerza de empuje colosal, resistencia atlética para travesías prolongadas y aptitud para el rastreo en terrenos difíciles. Destaca como un perro de utilidades múltiples capaz de operar bajo condiciones climatológicas severas."
        }
      ],
      "imageUrl": "/images/breeds/beauceron.webp",
      "origen": "Francia"
    },
    {
      "id": "bouvier-des-flandres",
      "breed": "Boyero de Flandes",
      "title": "Boyero de Flandes: La Muralla Inquebrantable",
      "epithet": "La Muralla Inquebrantable",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Custodia",
        "Defensa",
        "Familia"
      ],
      "traits": [
        "Sobriedad",
        "Potencia",
        "Paciencia",
        "Templanza"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Protección Serena del Hogar",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Muy Reservado pero Indiferente",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Boyero de Flandes es la encarnación de la serenidad colosal, la sobriedad y la fuerza contenida. Con su característica barba, pelaje denso y constitución compacta, este histórico perro belga fue moldeado para el tiro de cargas, el manejo de ganado y la guardia perimetral. Su psicología destaca por un umbral de estimulación muy alto, una calma profunda y una firmeza incorruptible que solo se activa frente a amenazas reales.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es ecuánime, sensato, valiente y dotado de una serenidad imperturbable. El Boyero de Flandes observa el entorno con paciencia estoica, sin demostrar sobresaltos ante ruidos o movimientos bruscos. Es sumamente reservado e indiferente con los desconocidos, pero mantiene una alerta consciente sobre su territorio. Su fuerza mental le permite reaccionar con absoluta firmeza únicamente cuando la situación lo requiere de verdad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un afecto sobrio, profundo y protector hacia la totalidad del núcleo familiar. No es un perro expansivo ni efusivo, pero manifiesta su devoción permaneciendo cerca de sus seres queridos como un guardián silencioso. Su adiestramiento debe basarse en la serenidad, la firmeza y la motivación clara, rechazando de plano el trato brusco que vulnere su dignidad y orgullo natural."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una protección familiar insuperable caracterizada por el equilibrio mental, el juicio acertado y la ausencia de agresividad innecesaria. Es extraordinariamente paciente y tolerante con los niños, actuando como un protector paciente y noble. Su enorme fuerza física y resistencia se combinan con un comportamiento pacífico dentro del hogar, haciendo de él una muralla de tranquilidad y seguridad."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su pelaje áspero y tupido exige un cepillado minucioso y limpieza regular para retirar suciedad acumulada en su barba y manto. Debido a su marcada independencia cognitiva y masa corporal, requiere un manejo responsable desde temprana edad para evitar que tome decisiones de guardia por cuenta propia. Asimismo, necesita un mínimo de ejercicio diario para mantener su tono muscular sano."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca de forma estelar en la custodia territorial, la defensa personal, la tracción de cargas pesadas y el trabajo policial. Posee una potencia de agarre respetable, una resistencia al dolor muy alta y excelentes facultades para el rastreo táctico. Su instinto de protección estructurada lo convierte en un perro de utilidad y guardia de primerísimo nivel."
        }
      ],
      "imageUrl": "/images/breeds/bouvier-des-flandres.webp"
    },
    {
      "id": "pastor-holandes",
      "breed": "Pastor Holandés",
      "title": "Pastor Holandés: El Atleta Atigrado de Precisión",
      "epithet": "El Atleta Atigrado de Precisión",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Inteligencia Funcional Obsesiva",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Trabajo conjunto",
        "Resolución de problemas",
        "Eficacia"
      ],
      "traits": [
        "Tenacidad",
        "Vivacidad",
        "Agilidad",
        "Lealtad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Agilidad, Rastreo y Obediencia Dinámica",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Atento con la Familia, Cauteloso con Extraños",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Pastor Holandés es un atleta atigrado de deslumbrante precisión táctica, agilidad mental y entrega funcional. Reconocido por su manto atigrado único y su mirada chispeante, este perro de trabajo posee un sentido del deber impecable y un deseo inagotable de cooperar con su guía. Su psicología destaca por una tenacidad enfocada, un umbral de estimulación bajo y una capacidad asombrosa para resolver tareas complejas mediante un rendimiento continuo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente dinámico, despierto, tenaz y dotado de una concentración envidiable. El Pastor Holandés procesa la información con extrema rapidez, manteniéndose siempre listo para la acción. Muestra un comportamiento atento y afectuoso con la familia, mientras que ante los desconocidos adopta una postura cautelosa y vigilante. Su elevado entusiasmo exige canalizar adecuadamente su focalización para evitar estados de impaciencia."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece un lazo cooperativo intenso y apasionado con su tutor, al que sigue con devoción incondicional. Prospera en entornos donde se le exige trabajo en equipo y adiestramiento continuo. Su aprendizaje es sumamente rápido cuando se utiliza el refuerzo positivo; sin embargo, exige coherencia absoluta y liderazgo activo para prevenir que su agilidad cognitiva lo lleve a imponer sus propias reglas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una capacidad de aprendizaje fantástica, una agilidad física portentosa y una lealtad a toda prueba. Es un perro de trabajo atlético, limpio, resistente y con una salud rústica envidiable. Su versatilidad le permite destacar en múltiples disciplinas deportivas, ofreciendo además una protección alerta y afectuosa que brinda gran tranquilidad y dinamismo al hogar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Es una raza exigente que no se adapta a estilos de vida sedentarios ni a dueños sin experiencia previa en perros de alta energía. La falta de estimulación mental y física derivará rápidamente en hiperactividad, ladrido obsesivo o conductas destructivas. Además, su alta reactividad ante impulsos en movimiento requiere una socialización temprana rigurosa para controlar sus impulsos de persecución."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale con brillantez en deportes caninos de máxima exigencia como IGP, Mondioring, agility, canicross y búsqueda y rescate. Posee una agilidad de salto superior, olfato finísimo para la detección de sustancias y una velocidad de carrera relámpago. Su obediencia dinámica y tenacidad lo convierten en un perro operativo y deportivo de primer orden."
        }
      ],
      "imageUrl": "/images/breeds/pastor-holandes.webp",
      "origen": "Países Bajos"
    },
    {
      "id": "komondor",
      "breed": "Komondor",
      "title": "Komondor: El Guardián Acorazado de Rebaños",
      "epithet": "El Guardián Acorazado de Rebaños",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Territorial Absoluta",
        "Guardia Ancestral de Tiempo Largo"
      ],
      "motivations": [
        "Territorialidad",
        "Custodia",
        "Independencia"
      ],
      "traits": [
        "Dignidad",
        "Inflexibilidad",
        "Valentía",
        "Silencio"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Defensa Autónoma de Perímetro",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Cero Tolerancia a Intrusos",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Komondor es un guardián acorazado de leyenda, famoso por su imponente pelaje blanco acordonado que lo mimetizaba con los rebaños en las estepas húngaras. Detrás de esta rasta natural se oculta un protector territorial formidable de valentía inquebrantable e independencia cognitiva absoluta. Su psicología se orienta hacia la defensa autónoma de perímetros, la vigilancia en silencio y un sentido innato de la custodia que no requiere instrucciones para actuar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es reservado, digno, firme e inflexible frente a lo desconocido. El Komondor no busca llamar la atención ni muestra agitación innecesaria; observa desde un punto elevado con aparente tranquilidad. Posee un umbral de estimulación alto para ruidos menores, pero responde con contundencia inmediata ante cualquier intromisión territorial. Toma decisiones de defensa de forma autónoma con un valor temible y decidido."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de respeto sobrio y lealtad profunda hacia su grupo familiar, al que considera su rebaño protegido. No es un perro servil ni excesivamente efusivo; demuestra su afecto estando presente y velando por la seguridad de todos. Requiere un tutor experimentado que entienda la psicología de la guardia ancestral y maneje su carácter con calma, firmeza e inteligencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una protección territorial y personal de eficacia absoluta, siendo un disuasor visual y físico sin igual contra intrusos. Es sumamente tranquilo dentro del hogar, silencioso y respetuoso con la familia. Su fidelidad es inquebrantable y su valentía legendaria aporta una tranquilidad imponente a propiedades rurales o fincas que requieran un guardián incorruptible de primer nivel."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Es completamente intolerante con intrusos o desconocidos que ingresen a su territorio sin supervisión de su dueño. Su mantenimiento de pelaje es extremadamente laborioso, requiriendo separar los cordones a mano para evitar que se apelmacen o acumulen humedad. Además, su marcada independencia cognitiva dificulta la obediencia convencional, siendo inapropiado para dueños principiantes o pisos urbanos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el especialista supremo en la guardia autónoma de rebaños y la protección perimetral contra grandes depredadores como lobos y osos. Su denso manto acordonado funciona como una armadura natural contra mordeduras y clima extremo. Destaca por su capacidad para mimetizarse en el entorno, su patrullaje nocturno silencioso y una potencia física disuasoria devastadora."
        }
      ],
      "imageUrl": "/images/breeds/komondor.webp"
    },
    {
      "id": "corgi-cardigan",
      "breed": "Welsh Corgi Cardigan",
      "title": "Welsh Corgi Cardigan: El Antiguo Pastor de la Colina",
      "epithet": "El Antiguo Pastor de la Colina",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Compañía",
        "Exploración",
        "Familia"
      ],
      "traits": [
        "Adaptabilidad",
        "Prudencia",
        "Lealtad",
        "Vivacidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Exploración Rústica y Compañía",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Sociable pero más Reservado que el Pembroke",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Welsh Corgi Cardigan es un antiguo pastor galés de figura alargada, patas cortas y larga cola afelpada. A diferencia de su pariente el Pembroke, conserva un temperamento más sosegado, prudente y profundamente observador. Su psicología equilibra la tenacidad rústica del boyero tradicional con una gran adaptabilidad doméstica, guiado por una inteligencia serena, motivación de exploración y una devoción incondicional por la vida en familia.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sensato, equilibrado, cariñoso y dotado de una prudencia natural. El Cardigan no es impulsivo; prefiere analizar los cambios en su entorno antes de actuar. Muestra una actitud amable pero reservada con los desconocidos, ganando confianza de forma progresiva. Posee un umbral de estimulación medio que le permite mantenerse apacible en casa, exhibiendo una gran firmeza cuando trabaja al aire libre."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de compañerismo leal y constante con toda la familia, adaptándose con facilidad a diversas dinámicas del hogar. Disfruta participando en caminatas y actividades compartidas, demostrando un deseo sincero de agradar a sus tutores. Su educación resulta sencilla cuando se emplean métodos amables y motivadores, apreciando una guía clara que encauce su inteligencia práctica con paciencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un carácter más pausado y menos reactivo que otros perros de pastor, lo que facilita su convivencia en diversos entornos urbanos o rurales. Es extremadamente cariñoso, limpio, adaptado a la vida hogareña y muy fiel a sus amados dueños. Su inteligencia y buen juicio lo convierten en un excelente perro de compañía, atento y con instinto guardián moderado."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Al igual que todos los perros de estructura alargada y patas cortas, requiere cuidar su peso corporal para proteger la salud de su columna vertebral. Puede mostrar cierta terquedad si percibe incoherencia en las normas domésticas. Asimismo, si no realiza suficiente ejercicio diario o se aburre, puede desarrollar hábitos de ladrido molesto o intentar guiar objetos y personas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en el pastoreo de ganado menor y mayor mediante cobro rápido de talones y giros cerrados. Posee excelentes cualidades para deportes como la obediencia, el rastro deportivo y el agilidad adaptado. Destaca además como un vigilante doméstico atento de oído fino y un explorador rústico con notable capacidad para terrenos irregulares."
        }
      ],
      "imageUrl": "/images/breeds/corgi-cardigan.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "san-bernardo",
      "breed": "San Bernardo",
      "title": "San Bernardo: El Rescatador Imponente del Manto Nieve",
      "epithet": "El Rescatador Imponente",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Auxilio",
        "Afecto",
        "Comodidad"
      ],
      "traits": [
        "Paciencia",
        "Gentileza",
        "Soberanía",
        "Nobleza"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto",
        "motivacion_intrinseca": "Auxilio y Convivencia Apacible",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Pacífico y Tolerante con Niños y Extraños",
        "independencia_cognitiva": "Media"
      },
      "summary": "El San Bernardo es el legendario gigante de los Alpes, famoso por su porte colosal, manto espeso y corazón bondadoso. Moldeado históricamente para el auxilio en pasos de montaña nevados y el trabajo de guarda, equilibra su potencia física masiva con una serenidad insuperable. Su psicología se rige por un umbral de estimulación altísimo, una dulzura benévola con los vulnerables y una búsqueda constante de comodidad apacible en el hogar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es manso, pausado, pacífico y profundamente bondadoso. El San Bernardo es la personificación de la calma soberana; rara vez se muestra alterado o reactivo ante imprevistos. Muestra una tolerancia asombrosa hacia niños y desconocidos, actuando siempre con una caballerosidad tranquila. Su elevada resiliencia emocional y temperamento estable le permiten desenvolverse en situaciones caóticas con una templanza admirable e imperturbable."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una devoción afectuosa e incondicional hacia toda la familia, buscando formar parte activa de la rutina del hogar. Disfruta recostarse cerca de sus tutores para recibir caricias y brindar su compañía cálida. Su adiestramiento debe iniciarse desde muy cachorro con amabilidad y paciencia, ya que su colosal tamaño adulto exige una educación impecable basada en la cooperación mutua."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una presencia llena de nobleza, calidez y seguridad, siendo uno de los perros más pacíficos y cariñosos del mundo canino. Su paciencia con los niños es proverbial, comportándose como un protector dulce y tolerante. Es un perro noble, de excelente temperamento, silencioso en casa y cuyo instinto de auxilio y rescate forma parte de su historia ancestral."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su tamaño colosal y peso elevado conllevan desafíos logísticos, requerimientos de espacio amplio y mayor gasto en alimentación y salud. Produce un babeo abundante que requiere paciencia en la limpieza del hogar. Además, es muy sensible a los golpes de calor debido a su denso pelaje, necesitando lugares frescos y sombra permanente durante las épocas calurosas de verano."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el especialista histórico por excelencia en el rescate y localización de personas sepultadas bajo la nieve gracias a su soberbio sentido de orientación y olfato térmico. Posee una fuerza de tracción colosal, gran resistencia a temperaturas gélidas y aptitudes excepcionales para la terapia asistida debido a su carácter manso, estable y extremadamente reconfortante."
        }
      ],
      "imageUrl": "/images/breeds/san-bernardo.webp",
      "origen": "Suiza"
    },
    {
      "id": "mastin-espanol",
      "breed": "Mastín Español",
      "title": "Mastín Español: El Señor de la Mesta y las Cañadas",
      "epithet": "El Señor de la Mesta",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Guardia Ancestral de Tiempo Largo",
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Custodia",
        "Territorialidad",
        "Reposo"
      ],
      "traits": [
        "Magnanimidad",
        "Sobriedad",
        "Independencia",
        "Silencio"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto",
        "motivacion_intrinseca": "Disuasión y Custodia de Ganado",
        "resiliencia_emocional": "Extrema",
        "sociabilidad": "Indiferente y Noble con Amigos, Disuasorio con Extraños",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Mastín Español es el legendario coloso moloso de la península ibérica, moldeado históricamente para la protección atenta del ganado merino frente a depredadores. Con su papada bien desarrollada, estructura ósea masiva y un característico ladrido cavernoso de gran alcance, su estrategia defensiva principal se cimenta en la presencia disuasoria pacífica antes de recurrir a la confrontación física directa. Su psicología se rige por un umbral de estimulación altísimo, una autonomía soberana y un temperamento profundamente noble, sereno e inquebrantable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es pacífico, equilibrado, sobrio y dotado de una serenidad soberana impresionante. El Mastín Español no demuestra agitación sin sentido ni reactividad innecesaria durante la rutina diaria; observa su entorno con paciencia estoica y frialdad analítica. Muestra una gran tranquilidad en el hogar durante las horas diurnas, transformándose en un vigilante nocturno sumamente atento sobre su territorio. Su elevada resiliencia emocional le permite mantener una calma imperturbable en cualquier circunstancia."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad silenciosa, profunda y sincera con su grupo familiar, al que considera su rebaño protegido. El Mastín Español no requiere demostraciones efusivas de afecto ni una supervisión constante para cumplir con sus cometidos; demuestra su devoción permaneciendo cerca de sus seres queridos como un guardián incorruptible. Su educación exige una guía serena, respetuosa y coherente que valore su independencia cognitiva y naturaleza rústica ancestral."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una protección territorial y personal de eficacia insuperable mediante una presencia física masiva y disuasoria que evita conflictos. Es un perro de carácter noble, apacible e inmensamente tolerante con los niños de la casa, a quienes cuida con gentileza bondadosa. Su temperamento equilibrado, su ladrido grave de advertencia y su salud rústica aportan una tranquilidad profunda y una seguridad invaluable a propiedades rurales o fincas de gran extensión."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su masa corporal colosal y gran tamaño conllevan requerimientos de espacio amplio y elevados costes de mantenimiento alimenticio y veterinario. Muestra una marcada independencia cognitiva que dificulta el adiestramiento de obediencia tradicional o servil. Asimismo, su propensión natural al patrullaje nocturno y a ladrar con tono grave ante ruidos lejanos exige un manejo responsable en entornos residenciales para evitar molestias a los vecinos durante la noche."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista supremo en la guardia autónoma de explotaciones ganaderas y fincas de gran extensión contra depredadores o intrusos. Posee una resistencia física notable para el pastoreo transhumante, tolerancia al clima adverso y una fuerza de empuje colosal. Su impresionante ladrido disuasorio de frecuencia baja y su instinto de protección pacífica lo convierten en un guardián de perímetro tradicional verdaderamente inigualable."
        }
      ],
      "imageUrl": "/images/breeds/mastin-espanol.webp",
      "origen": "España"
    },
    {
      "id": "mastin-napolitano",
      "breed": "Mastín Napolitano",
      "title": "Mastín Napolitano: La Escultura Romana de Disuasión",
      "epithet": "La Escultura Romana de Disuasión",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Territorial Absoluta",
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Territorialidad",
        "Protección",
        "Reposo"
      ],
      "traits": [
        "Potencia",
        "Reserva",
        "Gravedad",
        "Fuerza contenida"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Custodia Estática del Dominio",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Cerrada y Muy Cautelosa",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Mastín Napolitano es una imponente escultura viviente de la molosogía italiana, descendiente directo de los antiguos perros de combate romanos. Caracterizado por su piel gruesa y arrugada, cabeza gigantesca y una musculatura masiva de fuerza colosal, este guardián posee un temperamento grave y profundamente territorial. Su psicología se orienta hacia la custodia estática del dominio doméstico, la reserva cautelosa ante extraños y una contención pesada que transmite una disuasión física inmediata e inamovible.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es serio, sereno, adusto y caracterizado por un instinto de guardia sumamente territorial. El Mastín Napolitano no busca el conflicto ni muestra reactividad apresurada; observa su entorno desde el reposo con una alerta consciente e imperturbable. Presenta una conducta cerrada y muy cautelosa frente a presencias desconocidas en su propiedad. Su elevada masa corporal y naturaleza quieta contrastan con la potencia devastadora que despliega si percibe peligro real."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una devoción absoluta, leal y afectuosa hacia su tutor y el núcleo familiar íntimo. A pesar de su aspecto fiero e imponente, el Napolitano busca la cercanía constante de sus seres queridos, mostrando una dulzura sobria en el hogar. Requiere guías con experiencia demostrada en el manejo de molosos de gran volumen, capaces de ofrecer una dirección serena, justa y estructurada que encauce su marcada territorialidad sin violencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un nivel de protección territorial e inmovilización de intrusos de máxima eficacia disuasoria sin igual en el mundo canino. Su sola presencia e impresionante estampa imponente desaniman cualquier intento de intrusión no deseada en la propiedad. Es un compañero tranquilísimo en interiores, sumamente fiel a sus tutores y dotado de un afecto dulce y protector con los miembros del hogar a los que considera su familia."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Exige un manejo riguroso debido a su inmensa potencia física, peso y tendencia a la territorialidad estricta con personas ajenas. Su abundante pliegue cutáneo facial requiere una higiene continua para prevenir dermatitis en las arrugas, sumado a un babeo frecuente tras beber o ejercitarse. Además, no se adapta a pisos reducidos ni a tutores novatos que carezcan de firmeza serena en la gestión de perros dominantes."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca en la custodia perimetral estática, la defensa de la propiedad y la inmovilización disuasoria de intrusos por peso y empuje. Su mordida potente y estructura pesada lo convierten en una barrera infranqueable. Posee facultades para la detección de presencias en la oscuridad y una capacidad instintiva para la protección doméstica que no requiere entrenamiento previo para manifestarse con efectividad."
        }
      ],
      "imageUrl": "/images/breeds/mastin-napolitano.webp",
      "origen": "Italia"
    },
    {
      "id": "bullmastiff",
      "breed": "Bullmastiff",
      "title": "Bullmastiff: El Guardián Nocturno Silencioso",
      "epithet": "El Guardián Nocturno Silencioso",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Estructurada Moderna",
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Control de espacio",
        "Seguridad",
        "Familia"
      ],
      "traits": [
        "Discreción",
        "Autocontrol",
        "Valentía",
        "Calma"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Inmovilizar Intrusos sin Morder",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Afectuoso con Amigos, Vigilante Discreto con Extraños",
        "independencia_cognitiva": "Media-Alta"
      },
      "summary": "El Bullmastiff es el renombrado guardián nocturno silencioso, desarrollado históricamente en Gran Bretaña mediante el cruce entre el Mastiff y el Bulldog para inmovilizar cazadores furtivos sin despedazarlos. Poseedor de una cabeza ancha, mirada inteligente y estructura atlética de gran potencia, combina una velocidad sorprendente con un instinto de protección sobrio. Su psicología destaca por la discreción operativa, el autocontrol frente a amenazas y una convivencia pacífica, cariñosa y equilibrada dentro del entorno familiar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es dócil, sereno, valeroso y dotado de una contención pesada admirable. El Bullmastiff no es un perro ruidoso ni reactivo; permanece en reposo atento sin mostrar inquietud innecesaria. Ante presencias extrañas en la oscuridad adopta una postura vigilante y discreta, evaluando la situación antes de intervenir. Si detecta un peligro real, actúa con una velocidad y determinación fulgurantes para neutralizar la amenaza sin necesidad de ensañamiento."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de apego estrecho, ternura y lealtad incondicional con toda la familia. El Bullmastiff disfruta enormemente del contacto físico y la compañía tranquila en el hogar, comportándose como un verdadero perro de familia. Su adiestramiento debe ser amable, coherente y motivacional; responde magníficamente cuando se respeta su sensibilidad y dignidad natural, mientras que la brusquedad arruina su confianza y disposición para cooperar."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un guardián equilibrado excepcional que protege sin recurrir a ladridos constantes ni agresividad injustificada. Muestra una paciencia encantadora con los niños del hogar, comportándose como un compañero afable, limpio y cariñoso en interiores. Su combinación de potencia atlética, autocontrol y buena convivencia lo convierten en una opción soberbia para familias que buscan seguridad y paz en un moloso noble y dócil."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Debido a su gran fuerza y peso, requiere una educación temprana en obediencia para evitar empujones o tirones de correa accidentales. Presenta sensibilidad a las altas temperaturas debido a su hocico moderadamente chato, exigiendo sombra y lugares frescos durante el verano. Asimismo, puede mostrar intolerancia hacia perros desconocidos de su mismo sexo si no ha recibido una socialización adecuada, continua y estructurada desde cachorro."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la inmovilización táctica de intrusos mediante derribo y bloqueo corporal sin necesidad de morder severamente. Posee una agilidad de arranque sorprendente para su volumen físico, excelente visión nocturna y habilidades para la custodia perimetral discreta. Destaca además en pruebas de obediencia urbana y rastreo de rastro por su inteligencia equilibrada y temperamento enfocado bajo control."
        }
      ],
      "imageUrl": "/images/breeds/bullmastiff.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "schnauzer-gigante",
      "breed": "Schnauzer Gigante",
      "title": "Schnauzer Gigante: La Barba de Poder y Foco",
      "epithet": "La Barba de Poder y Foco",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Estructurada Moderna",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Trabajo",
        "Custodia",
        "Desafío físico"
      ],
      "traits": [
        "Energía",
        "Seriedad",
        "Lealtad",
        "Impulsividad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Defensa y Adiestramiento Operativo",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Reservado y Dominante con Perros Desconocidos",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Schnauzer Gigante es un atleta impetuoso de porte majestuoso, mirada penetrante y frondosa barba característica. Desarrollado en Baviera como perro de trabajo versátil y guardián de ganado, combina una musculatura potente con un intelecto enfocado de alta exigencia. Su psicología está impulsada por el deseo constante de trabajo, la protección estructurada de su núcleo y una vivacidad enérgica que requiere rutinas deportivas exigentes para encauzar su poderío físico y mental con equilibrio.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es decidido, energizante, territorial e intensamente enfocado en la acción. El Schnauzer Gigante posee una mente alerta que busca estímulos continuos y desafíos deportivos. Muestra una actitud vigilante y reservada ante desconocidos, manteniendo un control riguroso de su perímetro. Su temperamento valeroso y carácter fuerte exigen una rutina activa para evitar estados de frustración, demostrando siempre una seriedad noble en cada tarea encomendada."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad profunda y apasionada con su tutor de referencia, a quien sigue con devoción inquebrantable. Este perro exige un guía activo, coherente y seguro de sí mismo que le proporcione liderazgo claro y misiones diarias. Disfruta enormemente de la colaboración en entrenamientos deportivos; si percibe debilidad o falta de rumbo en su entorno, intentará asumir el control de la dinámica familiar de forma dominante."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una capacidad de trabajo operativa, entrenabilidad y protección de nivel superior para familias activas. Su inteligencia funcional permite un aprendizaje veloz en múltiples disciplinas, mostrando una valentía a toda prueba frente a situaciones de amenaza. Es un perro noble, enérgico, de aspecto elegante e incorruptible guardián que brinda una compañía dinámica, fiel y llena de vitalidad a tutores que disfrutan del deporte."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su elevado nivel de energía e impulsividad resultan abrumadores para personas sedentarias o sin experiencia previa en razas de trabajo exigentes. Si carece de ejercicio intenso y estimulación cognitiva, puede desarrollar conductas reactivas, dominancia o ladridos excesivos. Además, su característica barba y manto duro requieren un mantenimiento periódico con cepillados y arreglo especializado mediante técnica de stripping para mantener su salud cutánea."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Brilla de forma estelar en trabajo policial, detección táctica de sustancias, custodia de instalaciones y disciplinas deportivas como IGP y Mondioring. Posee una mordida deportiva potente, agilidad de salto superior y un olfato finísimo para labores de rastro y rescate. Su resistencia física atlética y foco mental constante lo convierten en un perro operativo de máxima categoría."
        }
      ],
      "imageUrl": "/images/breeds/schnauzer-gigante.webp",
      "origen": "Alemania"
    },
    {
      "id": "schnauzer-miniatura",
      "breed": "Schnauzer Miniatura",
      "title": "Schnauzer Miniatura: El Alerta Imparable del Hogar",
      "epithet": "El Alerta Imparable del Hogar",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Hiperreactividad Ornamental",
        "Protección Territorial Absoluta"
      ],
      "motivations": [
        "Atención",
        "Custodia",
        "Alerta"
      ],
      "traits": [
        "Vivacidad",
        "Vocalización",
        "Valentía",
        "Afecto"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Aviso Sonoro y Cazador de Pequeñas Presas",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Alta con su Familia, Chistoso y Vocal con Visitas",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Schnauzer Miniatura es un pequeño gigante de energía inagotable, mirada perspicaz y barba inconfundible. Pese a su reducido tamaño, conserva íntegramente la estructura robusta, la valentía y el instinto guardián de sus ancestros de trabajo. Su psicología se rige por un umbral de estimulación bajo, una curiosidad vibrante y una motivación de alerta sonora que lo convierte en un centinela incansable, afectuoso y profundamente involucrado en la rutina familiar cotidiana.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, curioso, audaz y sumamente despierto ante cualquier estímulo ambiental. El Schnauzer Miniatura no se reconoce como un perro de juguete; afronta la vida con valentía y una autoconfianza imponente. Posee un sentido de la territorialidad muy marcado y un oído fino que lo mantiene en constante alerta. Suele recurrir a su ladrido agudo para dar aviso inmediato ante la presencia de extraños."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de afecto efusivo, devoción y participación entusiasta en la dinámica del hogar. Le apasiona estar presente en todas las actividades de sus tutores, buscando atención e interacción continua. Responde de forma brillante al adiestramiento motivacional basado en juegos; requiere una educación constante y afectuosa que encauce su ímpetu y evite que asuma el rol de director del espacio doméstico."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un perro de compañía vibrante, cariñoso y adaptado perfectamente a pisos urbanos o casas con jardín. Su tamaño práctico facilita el transporte en viajes familiares, mientras que su inteligencia facilita el aprendizaje rápido de trucos y normas de convivencia. Es un excelente guardián de aviso temprano, juguetón con los niños y dotado de un pelaje que apenas suelta pelo en el hogar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su tendencia natural a la vocalización reactiva puede convertirse en un hábito de ladrido excesivo si no se educa con firmeza y serenidad. Presenta un fuerte impulso cazador hacia pequeños animales como roedores, exigiendo precaución en parques o campos. Asimismo, su manto tupido y barba requieren cepillados diarios para evitar enredos y visitas regulares al peluquero canino para el mantenimiento de su corte."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como centinela de aviso sonoro temprano y exterminador instintivo de pequeñas presas o roedores en entornos rurales y urbanos. Destaca en pruebas de agilidad adaptada, obediencia competitiva y juegos de olfato gracias a su rapidez mental. Su vivacidad de respuesta y oído agudo lo convierten en un vigilante doméstico imbatible en su categoría de tamaño."
        }
      ],
      "imageUrl": "/images/breeds/schnauzer-miniatura.webp",
      "origen": "Alemania"
    },
    {
      "id": "dogo-de-burdeos",
      "breed": "Dogo de Burdeos",
      "title": "Dogo de Burdeos: La Calma Dulce del Moloso Francés",
      "epithet": "La Calma Dulce del Moloso Francés",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda",
        "Apego Extremo (Fusión Emocional)"
      ],
      "motivations": [
        "Afecto",
        "Cercanía",
        "Tranquilidad"
      ],
      "traits": [
        "Calidez",
        "Fuerza contenida",
        "Tranquilidad",
        "Devoción"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Compañía Cercana y Protección Pacífica",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Afable con Amigos, Cauteloso con Extraños",
        "independencia_cognitiva": "Baja-Media"
      },
      "summary": "El Dogo de Burdeos es la síntesis perfecta entre una masa molosa imponente de cabeza gigantesca y un temperamento dulce, tranquilo y profundamente afectuoso. Histórico guardián francés de castillos y fincas, este canino impresiona por su fuerza contenida y una mirada tierna llena de sensibilidad. Su psicología destaca por un alto umbral de estimulación, un apego extremo al núcleo familiar y una búsqueda constante de cercanía física, actuando como un protector pacífico de nobleza absoluta.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es extremadamente sereno, paciente, apacible y caracterizado por una calma profunda. El Dogo de Burdeos no es un perro nervioso ni reactivo; permanece echado observando su entorno con mansedumbre sosegada. Muestra una actitud cautelosa pero sin agresividad innecesaria ante la llegada de desconocidos. Su fuerza colosal se mantiene siempre bajo un autocontrol sobrio, activándose únicamente si percibe una amenaza directa hacia sus seres queridos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de fusión emocional y dependencia afectiva entrañable con su grupo familiar. El Dogo de Burdeos necesita sentirse querido y estar físicamente cerca de sus tutores, buscando apoyar su pesada cabeza sobre sus piernas. Su educación exige métodos dulces, respetuosos y positivos; las voces elevadas o la brusquedad entristecen su noble carácter, mientras que el afecto sincero potencia su devoción protectora."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una convivencia doméstica pacífica, caracterizada por el silencio, la ternura y la paciencia infinita con los niños de la casa. Es un guardián natural disuasorio de presencia imponente que infunde seguridad absoluta sin resultar ruidoso ni problemático. Su carácter afectuoso, su fidelidad inquebrantable y su dulce naturaleza lo convierten en un compañero de vida conmovedor para familias que aman a los grandes molosos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Padece una esperanza de vida lamentablemente corta en comparación con razas de menor tamaño, además de propensión a problemas cardiacos y articulares. Produce un babeo abundante que requiere aceptación por parte de la familia y limpieza frecuente en el hogar. Asimismo, su inmensa masa física exige un control riguroso de paseos desde cachorro para evitar tirones de correa difíciles de manejar en su etapa adulta."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca en la custodia perimetral disuasoria, la inmovilización de intrusos por peso corporal y la protección cercana de la familia. Posee una potencia de empuje masiva, tolerancia alta al dolor y aptitudes para la terapia de acompañamiento afectivo por su calma reconfortante. Su mera presencia física constituye un freno infranqueable ante cualquier intención delictiva."
        }
      ],
      "imageUrl": "/images/breeds/dogo-de-burdeos.webp",
      "origen": "Francia"
    },
    {
      "id": "terranova",
      "breed": "Terranova (Newfoundland)",
      "title": "Terranova: El Gigante Amable de las Aguas",
      "epithet": "El Gigante Amable de las Aguas",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda",
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Auxilio",
        "Afecto",
        "Contacto físico"
      ],
      "traits": [
        "Gentileza",
        "Paciencia",
        "Bondad",
        "Resistencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto",
        "motivacion_intrinseca": "Rescate Acuático y Convivencia Familiar",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Extraordinaria con Niños y Animales",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Terranova o Newfoundland es el gigante amable de los mares, famoso por su heroico instinto innato de rescate acuático, pelaje espeso e impermeable y corazón de inmensa nobleza. Moldeado en la gélida isla canadiense para ayudar a pescadores y salvar vidas en el agua, posee una fuerza colosal combinada con una dulzura legendaria. Su psicología destaca por un umbral de estimulación altísimo, una paciencia infinita y una vocación natural de auxilio y convivencia pacífica.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es manso, dócil, pacífico y caracterizado por una benevolencia universal. El Terranova no conoce la agresividad o la irritabilidad; afronta la vida cotidiana con una tranquilidad soberana y serena. Muestra una sociabilidad extraordinaria con niños, adultos y otros animales por igual, siendo considerado el niñero por excelencia del mundo canino. Su elevada resiliencia emocional le permite mantener una templanza imperturbable en cualquier situación."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una conexión de amor incondicional, lealtad y ternura constante con todos los miembros de la casa. Disfruta enormemente formando parte de las actividades familiares, especialmente si involucran salidas al aire libre o agua. Su adiestramiento es extremadamente sencillo gracias a su inteligencia cooperativa y deseo de complacer; responde con entusiasmo cuando se le trata con el mismo cariño y respeto que él prodiga."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es la quintaesencia de la nobleza canina, ofreciendo una convivencia pacífica, segura y enriquecedora en hogares con niños. Su instinto de protección y auxilio es dulce y protector sin rastro de violencia. Su resistencia física, bondad natural y pasión por el agua brindan momentos maravillosos a la familia, convirtiéndolo en un perro entrañable de presencia majestuosa que llena la vivienda de paz y calidez."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su denso y frondoso manto de doble capa requiere cepillados frecuentes para evitar apelmazamiento y retención de humedad tras baños. Es propenso al babeo abundante y su gran volumen físico genera acumulación de barro y agua en casa tras sus paseos. Además, sufre con las altas temperaturas estivales, exigiendo espacios frescos, sombra constante y acceso libre a agua para evitar golpes de calor."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el especialista insuperable en salvamento acuático de precisión, capaz de arrastrar embarcaciones pequeñas o nadadores a la orilla mediante sus patas palmeadas. Posee una capacidad pulmonar y resistencia natatoria portentosas en aguas frías. Destaca también en trabajos de tracción pesada, terapia asistida y apoyo emocional por su carácter extremadamente manso, estable y protector."
        }
      ],
      "imageUrl": "/images/breeds/terranova.webp"
    },
    {
      "id": "shar-pei",
      "breed": "Shar Pei",
      "title": "Shar Pei: La Dignidad Oriental Arrugada",
      "epithet": "La Dignidad Oriental Arrugada",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Protección Territorial Absoluta"
      ],
      "motivations": [
        "Autonomía",
        "Custodia",
        "Tranquilidad"
      ],
      "traits": [
        "Reserva",
        "Independencia",
        "Seriedad",
        "Lealtad selectiva"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Guardia Silenciosa y Autonomía",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Reservado e Indiferente a Desconocidos",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Shar Pei es la dignidad arrugada del antiguo Oriente, criado en China como perro polivalente de caza, guardia y pastoreo en granjas. Distinguido por sus característicos pliegues cutáneos, su lengua de tono azul-negro y sus orejas pequeñas, posee una mirada seria y un porte majestuoso. Su psicología se fundamenta en la autosuficiencia, la independencia cognitiva, una reserva limpia ante extraños y una lealtad selectiva e inquebrantable hacia su núcleo familiar íntimo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es silencioso, sereno, digno y marcadamente independiente. El Shar Pei no es un perro expansivo ni busca agradar a desconocidos; mantiene una distancia prudente e indiferente ante presencias ajenas. Posee un alto sentido de la territorialidad que gestiona con tranquilidad sin ladrar en vano. Su carácter sosegado dentro del hogar contrasta con la firmeza valerosa que demuestra si debe proteger a los suyos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una lealtad íntima, profunda y selectiva con los miembros de su hogar, a los que considera su auténtica familia. Demuestra su afecto de forma discreta y sobria, prefiriendo la presencia tranquila a las efusiones ruidosas. Su adiestramiento exige comprensión de su mente soberana; no responde a la imposición autoritaria ni a órdenes arbitrarias, requiriendo tutores pacientes que respeten su dignidad sin rigidez."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un perro sumamente limpio, silencioso y tranquilo que destaca por su comportamiento ejemplar dentro de la vivienda. Ofrece una guardia de alerta sobria e inteligente sin generar molestias ruidosas a los vecinos. Su porte exótico, su devoción selectiva y su naturaleza independiente lo convierten en un compañero fascinante para personas que aprecian el equilibrio, el respeto mutuo y la tranquilidad en la convivencia diaria."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Presenta predisposición a afecciones dermatológicas en sus pliegues cutáneos y problemas oculares como el entropión si no procede de una buena crianza. Muestra una marcada reserva con perros desconocidos que puede derivar en conflictos si no se socializa desde cachorro. Además, su pronunciada independencia cognitiva requiere paciencia durante la educación, no siendo apto para quienes buscan obediencia servil e inmediata."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la guardia territorial silenciosa y en la alerta disuasoria por su actitud adusta e imponente. Posee un agarre histórico firme derivado de su piel suelta que le permitía girarse ante agarres de presas en el campo. Destaca además por su higiene felina autónoma, su resistencia física rústica y una intuición protectora natural sobre la propiedad."
        }
      ],
      "imageUrl": "/images/breeds/shar-pei.webp"
    },
    {
      "id": "presa-canario",
      "breed": "Dogo Canario / Presa Canario",
      "title": "Presa Canario: El Guardián de las Islas",
      "epithet": "El Guardián de las Islas",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Territorial Absoluta",
        "Guardia Ancestral de Tiempo Largo"
      ],
      "motivations": [
        "Territorialidad",
        "Custodia",
        "Dominio"
      ],
      "traits": [
        "Potencia",
        "Mirada severa",
        "Seriedad",
        "Autoconfianza"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Alto",
        "motivacion_intrinseca": "Protección de Finca y Manejo de Ganado",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Desconfiado con Extraños, Imponente",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Presa Canario o Dogo Canario es un moloso insular español de impresionante robustez, musculatura atlética y mirada adusta y profunda. Desarrollado en las Islas Canarias para el manejo de ganado vacuno bravo y la guardia de propiedades rurales, destaca por un ladrido grave y cavernoso de potencia disuasoria temible. Su psicología se cimenta en una territorialidad estricta, un coraje inamovible, una autoconfianza sobria y un apego devoto hacia sus tutores de referencia.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es firme, adusto, seguro de sí mismo y profundamente territorial. El Presa Canario posee una actitud seria que no tolera la debilidad ni las intrusiones en su espacio protegido. Muestra una marcada desconfianza hacia los desconocidos, observando con calma calculadora antes de actuar. Su umbral de estimulación es medio-alto, permaneciendo en reposo vigilante hasta que la situación requiere una intervención firme."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad apasionada, fiel y protectora hacia su tutor de referencia y su grupo familiar. El Presa Canario necesita un guía experimentado que posea temple sereno, firmeza y coherencia en el liderazgo. Es un perro sumamente afectuoso en la intimidad del hogar con su gente; sin embargo, no aceptará liderazgos ambiguos ni castigos injustos, requiriendo un manejo profesional desde la etapa de cachorro."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es uno de los guardias territoriales más eficaces, potentes y disuasorios del mundo canino, aportando una seguridad absoluta a fincas e instalaciones. Su lealtad hacia la familia es inquebrantable, mostrando un comportamiento noble y tranquilo dentro de la propiedad. Su presencia imponente, fuerza atlética y temperamento seguro brindan una protección incorruptible que garantiza la tranquilidad total de sus amados tutores."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su inmensa potencia física y marcada territorialidad exigen un compromiso estricto de socialización temprana y adiestramiento continuo de control. Puede mostrar alta dominancia hacia otros perros de su mismo sexo si no ha sido educado adecuadamente. Además, está sujeto a regulaciones legales de tenencia de perros potencialmente peligrosos en múltiples jurisdicciones, requiriendo licencias, bozal y seguros obligatorios."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la custodia perimetral de fincas, la sujeción de ganado mayor bravo y la inmovilización de intrusos con una potencia de mordida formidable. Posee un arranque veloz para su peso corporal, resistencia rústica al trabajo duro bajo sol y una capacidad de disuasión pasiva por estampa física que neutraliza cualquier amenaza antes de atacar."
        }
      ],
      "imageUrl": "/images/breeds/presa-canario.webp"
    },
    {
      "id": "bull-terrier",
      "breed": "Bull Terrier",
      "title": "Bull Terrier: El Gladiador Alegre de Cabeza Ovoide",
      "epithet": "El Gladiador Alegre",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales",
        "Apego Extremo (Fusión Emocional)"
      ],
      "motivations": [
        "Juego",
        "Desafío físico",
        "Afecto"
      ],
      "traits": [
        "Obstinación",
        "Humor",
        "Intrepidez",
        "Energía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Juego Físico, Interacción y Afecto",
        "resiliencia_emocional": "Extrema",
        "sociabilidad": "Muy Cariñoso con Personas, Requiere Socialización Canina",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Bull Terrier es célebre por su singular cabeza ovoide de perfil continuo y su musculatura atlética y compacta. Conocido como el gladiador alegre del mundo canino, este terrier combina una fuerza física notable con un espíritu bromista, inventivo y rebosante de energía. Su psicología está marcada por un altísimo umbral de resistencia al dolor, un entusiasmo inagotable hacia el juego dinámico y una necesidad constante de afecto e interacción directa con su grupo familiar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente intrépido, extrovertido, juguetón y caracterizado por un fino sentido del humor. El Bull Terrier se comporta como un eterno cachorro que busca divertir a su entorno con travesuras e inventiva continua. Posee un umbral de estimulación medio y un coraje inquebrantable que no conoce la fatiga fácil. Si carece de límites claros y ejercicio adaptado, su testarudez natural y gran energía física pueden convertirlo en un compañero excesivamente impetuoso."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de apego entusiasta, cariñoso y de fusión emocional intensa con su núcleo familiar. Al Bull Terrier le apasiona participar en todas las dinámicas del hogar, buscando sentirse incluido como el centro de atención. Su adiestramiento debe basarse en la paciencia, la firmeza serena y el adiestramiento motivacional mediante juegos y recompensas, evitando correcciones severas que chocan frontalmente contra su terquedad e indomable orgullo terrier."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una alegría desbordante, momentos divertidos y un compañerismo incondicional lleno de afecto a familias muy activas. Es un perro sumamente valiente, resistente y devoto que demuestra una gran devoción por los suyos. Su temperamento alegre y su pelaje de mantenimiento sencillo lo convierten en una mascota limpia, enérgica y profundamente entrañable para tutores dispuestos a compartir un estilo de vida dinámico y lleno de juegos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su marcada obstinación e ímpetu físico pueden resultar difíciles de gestionar para tutores novatos que carezcan de firmeza serena. Requiere un compromiso diario de ejercicio para canalizar su desbordante energía y prevenir conductas destructivas o fijaciones por aburrimiento. Además, su elevada fuerza mandibular exige una socialización temprana rigurosa con otros perros para evitar altercados y controlar su impulso de juego bruto durante los paseos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en deportes caninos de alta intensidad física como agility, weight pulling, canicross y pruebas de obediencia dinámica. Posee un agarre mandibular potente, una resistencia al esfuerzo sobresaliente y un sentido del juego incansable. Destaca también en actividades de discriminación olfativa y en la resolución de rompecabezas de agilidad cognitiva gracias a su perspicacia, curiosidad natural y tenacidad característica."
        }
      ],
      "imageUrl": "/images/breeds/bull-terrier.webp"
    },
    {
      "id": "staffordshire-bull-terrier",
      "breed": "Staffordshire Bull Terrier",
      "title": "Staffordshire Bull Terrier: El Nanny Dog Corajudo",
      "epithet": "El Nanny Dog Corajudo",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Afecto",
        "Contacto físico",
        "Juego"
      ],
      "traits": [
        "Calidez",
        "Valentía",
        "Entusiasmo",
        "Resiliencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Contacto Humano Directo y Dinámicas de Juego",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Excepcional con Humanos y Niños",
        "independencia_cognitiva": "Baja-Media"
      },
      "summary": "El Staffordshire Bull Terrier es un canino compacto, musculoso y extraordinariamente potente, famoso históricamente por su devoción abnegada hacia las personas. Conocido afectuosamente en Gran Bretaña como el perro niñero por su dulzura y paciencia con los más pequeños, combina una mandíbula bien desarrollada con una mirada tierna. Su psicología destaca por una resiliencia emocional muy alta, un umbral de dolor elevado y una motivación insaciable hacia el contacto humano directo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es intrépido, entusiasta, afectuoso y sumamente equilibrado frente a presencias humanas. El Staffie no conoce la reserva o el resentimiento hacia las personas; aborda el mundo con una simpatía arrolladora y un coraje notable. Posee un umbral de estimulación medio que le permite mantenerse calmado en casa, desplegando un gran entusiasmo durante el juego físico. Su fuerza concentrada contrasta con la delicadeza con que trata a sus seres queridos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de fusión emocional profunda y necesidad de cercanía física constante con toda su familia. El Staffie adora recostarse junto a sus tutores, recibir caricias y ser parte activa de la vida cotidiana. Su educación resulta sencilla cuando se emplean métodos positivos, amables y motivadores; su deseo genuino de complacer al humano es tan grande que responde con entusiasmo ante recompensas y palabras de afecto sincero."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un amor incondicional, una valentía serena y una paciencia de oro con los niños, siendo uno de los compañeros familiares más leales y afectuosos del mundo canino. Es un perro de tamaño práctico, limpio, sumamente resistente y alegre que llena la vivienda de calidez. Su buen carácter con humanos y su capacidad de adaptación lo convierten en un integrador extraordinario del hogar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Debido a su fuerza muscular masiva, requiere un adiestramiento temprano de paseo para evitar tirones de correa bruscos. Muestra una menor tolerancia natural hacia otros perros de su mismo sexo si no ha sido socializado adecuadamente desde cachorro. Asimismo, está sujeto a legislaciones de perros potencialmente peligrosos en diversas comunidades, requiriendo el cumplimiento de normativas específicas como uso de bozal y seguro de responsabilidad civil."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca en disciplinas deportivas de potencia y velocidad como weight pulling, agility, canicross y frisbee debido a su musculatura atlética y capacidad de explosión física. Posee un agarre seguro, gran tolerancia al esfuerzo y una adaptabilidad magnífica para el adiestramiento urbano. Es además un excelente perro de compañía y apoyo emocional por su empatía contagiosa y equilibrio temperamental."
        }
      ],
      "imageUrl": "/images/breeds/staffordshire-bull-terrier.webp"
    },
    {
      "id": "west-highland-white-terrier",
      "breed": "West Highland White Terrier (Westie)",
      "title": "West Highland White Terrier: El Espirituoso Blanco de las Tierras Altas",
      "epithet": "El Espirituoso Blanco",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales",
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Exploración",
        "Caza",
        "Atención"
      ],
      "traits": [
        "Astucia",
        "Independencia",
        "Vivacidad",
        "Persistencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Bajo",
        "motivacion_intrinseca": "Caza de Pequeñas Presas y Curiosidad",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Amistoso y Seguro de Sí Mismo",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El West Highland White Terrier o Westie es el espirituoso cazador blanco de las Tierras Altas de Escocia, criado para la persecución de zorros, tejones y roedores en terrenos abruptos. Poseedor de un doble manto blanco resistente y una mirada negra perspicaz, este pequeño canino combina una estampa simpática con un carácter audaz y autosuficiente. Su psicología está guiada por la curiosidad inagotable, la persistencia olfativa y un orgullo independiente muy afable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, vivaz, astuto, seguro de sí mismo y lleno de una valentía simpática. El Westie no se percibe a sí mismo como un perro faldero; conserva el corazón intrépido de un verdadero trabajador de campo. Posee un umbral de estimulación medio-bajo que lo mantiene alerta ante cualquier movimiento en su entorno. Muestra una actitud amigable con los desconocidos, afrontando la vida con optimismo contagioso y energía noble."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de afecto leal y sincero con sus tutores, sin llegar a mostrarse empalagoso ni dependiente. El Westie aprecia la compañía humana y disfruta de los paseos compartidos, pero valora enormemente sus momentos de autonomía diaria. Su adiestramiento requiere astucia, variedad y refuerzo positivo; su mente independiente rechaza la monotonía y las órdenes autoritarias, respondiendo con entusiasmo a juegos de recompensa y desafíos."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una presencia alegre, activa y divertida que llena de vida el hogar sin exigir espacios descomunales. Es un perro limpio, adaptado tanto a pisos urbanos como a casas rurales con jardín, destacando por su salud rústica y buena longevidad. Su carácter extrovertido, su alerta temprana ante visitas y su simpatía natural lo convierten en un compañero de vida ameno, afectuoso y muy entretenido."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su fuerte instinto cazador lo impulsa a excavar hoyos en jardines y a perseguir pequeños animales con determinación obsesiva. Presenta cierta tendencia al ladrido de aviso y a la terquedad si se siente aburrido o ignorado por sus tutores. Además, su pelaje blanco de doble capa requiere cepillados frecuentes, limpieza de barba tras las comidas y visitas periódicas a la peluquería para mantener su textura dura característica."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la caza de roedores y alimañas en madrigueras por su flexibilidad corporal, tenacidad y potencia de excavación. Brilla en pruebas de agilidad adaptada, rastreo y detección gracias a su agudo sentido olfativo y curiosidad nata. Destaca además como centinela de aviso sonoro temprano y compañero de senderismo rústico con insuperable resistencia para su tamaño."
        }
      ],
      "imageUrl": "/images/breeds/west-highland-white-terrier.webp"
    },
    {
      "id": "yorkshire-terrier",
      "breed": "Yorkshire Terrier",
      "title": "Yorkshire Terrier: La Chispa Dinámica en Miniatura",
      "epithet": "La Chispa Dinámica",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Hiperreactividad Ornamental",
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Atención",
        "Cercanía",
        "Alerta"
      ],
      "traits": [
        "Vivacidad",
        "Audacia",
        "Vocalización",
        "Afecto"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Aviso Sonoro y Búsqueda de Cariño",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Alta con la Familia, Guardián Vocal de Puerta",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Yorkshire Terrier es una chispa dinámica vestida con un pelaje sedoso de tonos azul acero y fuego. Aunque popularizado como perro de compañía elegante, en su origen histórico fue moldeado como un incansable cazador de ratas en las minas e industrias textiles victorianas. Su psicología combina la vivacidad ornamental con la audacia indómita del verdadero terrier, destacando por un umbral de estimulación bajo, un afecto efusivo y una alerta constante sobre el espacio.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vibrante, audaz, curioso, cariñoso y dotado de una valentía sorprendente que desafía su pequeño volumen corporal. El Yorkshire Terrier ignora su reducida estatura; se comporta con la determinación y orgullo de un gran perro de guardia. Muestra un estado de alerta continuo ante su entorno, utilizando su ladrido agudo para anunciar cualquier novedad o presencia. Es un ser alegre que contagia vitalidad a la casa."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de apego estrecho, devoción y lealtad absoluta con sus tutores principales. Al Yorkie le encanta acompañar a su persona de referencia a todas partes, disfrutando de los mimos y el contacto cercano. Su adiestramiento requiere constancia, amabilidad y límites claros desde cachorro; si se le consiente de forma excesiva por su aspecto tierno, puede desarrollar conductas caprichosas o un comportamiento sobreprotector hacia su dueño."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un compañero de tamaño minúsculo perfecto para viajes, pisos reducidos y vida urbana moderna. Ofrece un afecto sincero, una alegría contagiosa y una alerta temprana impecable ante cualquier eventualidad doméstica. Su pelaje no suelta pelo de forma habitual, lo que facilita la convivencia en interiores. Su inteligencia perspicaz y capacidad para aprender trucos hacen de él un pequeño amigo divertido, leal y entrañable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Es sumamente propenso al ladrido excesivo y reactivo ante timbres, ruidos o visitas si no se le educa con límites firmes y serenidad. Su frágil estructura ósea lo expone a lesiones o caídas si se le maneja con brusquedad o se le permite saltar de muebles altos. Asimismo, su pelaje largo y sedoso exige cuidados diarios de cepillado e higiene periódica para prevenir enredos molestos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca como centinela de aviso sonoro doméstico de oído agudísimo y rapidez de reacción inmediata. Conserva aptitudes ancestrales para la caza e inmovilización de pequeños roedores con mordida rápida. Brilla en pruebas de agilidad en categoría miniatura y en la ejecución de trucos cognitivos gracias a su inteligencia despierta y rápida capacidad de procesamiento de órdenes."
        }
      ],
      "imageUrl": "/images/breeds/yorkshire-terrier.webp"
    },
    {
      "id": "scottish-terrier",
      "breed": "Terrier Escocés (Scottie)",
      "title": "Scottish Terrier: El Caballero de las Sombras",
      "epithet": "El Caballero de las Sombras",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Autonomía",
        "Persistencia",
        "Exploración"
      ],
      "traits": [
        "Dignidad",
        "Terquedad",
        "Reserva",
        "Valentía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Independencia y Exterminio de Alimañas",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Reservado e Indiferente a Extraños",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Terrier Escocés o Scottie es el elegante caballero de las sombras, inconfundible por su silueta icónica de faldas largas, cejas pobladas y barba prominente. Criado en las Tierras Altas escocesas para encarar zorros y tejones en cavidades rocosas, es un perro de estructura compacta, centro de gravedad bajo y gran osamenta. Su psicología destaca por una dignidad soberana, una independencia cognitiva altísima, terquedad serena y una reserva sobria ante extraños.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sobrio, digno, firme, reservado e inusualmente independiente dentro de la familia de los terriers. El Scottie no busca llamar la atención ni demuestra entusiasmo superficial ante desconocidos; observa el mundo con una distancia educada y seria. Posee un umbral de estimulación alto para nimiedades, pero responde con un coraje inquebrantable si se ve provocado. Mantiene siempre una postura majestuosa y serena."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad profunda, íntima y selectiva con uno o dos miembros de su núcleo familiar, a quienes entrega su afecto de forma discreta. El Scottie no es un perro servil ni tolera el manejo brusco; exige ser tratado con respeto mutuo y equidad. Su adiestramiento debe basarse en la paciencia, la consistencia y la motivación inteligente, ya que su terquedad innata rechaza de plano la imposición autoritaria."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un comportamiento silencioso, limpio y sumamente educado dentro de la vivienda, siendo un compañero de piso magnífico. Es un perro de gran personalidad, leal hasta la médula y con un carácter independiente que no agobia a sus tutores con demandas continuas de atención. Su estampa distinguida, su salud rústica y su valentía reservada le otorgan un atractivo único, noble y profundamente respetable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su marcada terquedad e independencia dificultan la obediencia rápida convencional, exigiendo tutores experimentados y pacientes. Muestra una actitud dominante o reactiva hacia otros perros si no recibe socialización continua desde cachorro. Asimismo, su fuerte instinto de caza lo vuelve peligroso para pequeñas mascotas del hogar, mientras que su manto duro requiere un arreglo estético especializado mediante técnica de stripping para mantener su salud."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la caza en madriguera de tejones y zorros por su mordida potente, cuello musculoso y tenacidad inexpugnable. Posee habilidades para la custodia perimetral silenciosa y el rastro en terrenos escarpados. Destaca también por su resistencia rústica al clima adverso y su capacidad para la resolución autónoma de problemas de exploración subterránea."
        }
      ],
      "imageUrl": "/images/breeds/scottish-terrier.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "dachshund-pelo-duro",
      "breed": "Teckel / Dachshund de Pelo Duro",
      "title": "Teckel de Pelo Duro: El Cazador Barbudo de Toperas",
      "epithet": "El Cazador Barbudo de Toperas",
      "fciGroup": "Grupo 4: Teckels (Dachshunds)",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Terriers Instrumentales",
        "Sensorialidad Olfativa Profunda"
      ],
      "motivations": [
        "Rastreo",
        "Caza",
        "Desafío"
      ],
      "traits": [
        "Tenacidad",
        "Astucia",
        "Rusticidad",
        "Vocalización"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Madriguera, Rastreo y Determinación",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Sociable pero con Fuerte Carácter",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Teckel de Pelo Duro es el cazador barbudo de toperas por excelencia, fruto del cruce histórico entre el Dachshund tradicional y terriers rústicos como el Schnauzer. Esta combinación le confirió un manto áspero con barba expresiva y un temperamento notablemente resuelto, valiente y tenaz. Su psicología se fundamenta en la motivación olfativa profunda, la determinación obstinada para encarar presas bajo tierra y una autonomía cognitiva muy alta que desafía la rutina.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es peleón, astuto, alegre, extremadamente valeroso y dotado de una tenacidad inagotable. El Teckel de Pelo Duro no se amedrenta ante nada ni nadie; afronta los retos del campo y de la ciudad con un descaro simpático y resuelto. Posee un umbral de estimulación medio y un olfato agudísimo que lo mantiene constantemente enfocado en rastros. Su carácter rústico combina una gran picardía con un coraje sobresaliente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de complicidad divertida, afecto leal y gran entusiasmo con su grupo familiar. Le chifla participar en salidas al aire libre y juegos de exploración con sus tutores, mostrando una gran simpatía en casa. Su adiestramiento requiere astucia y paciencia infinita; su herencia terrier lo vuelve terco frente a órdenes rígidas, respondiendo mejor cuando el adiestramiento se plantea como un desafío estimulante."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un dinamismo contagioso, un humor simpático y una lealtad a prueba de bomba al entorno doméstico. Es un perro de tamaño práctico, sumamente resistente a inclemencias del tiempo y de salud rústica envidiable. Su versatilidad como cazador de rastro y su comportamiento afectuoso en el sofá familiar lo convierten en un amigo extraordinario, enérgico, divertido y lleno de carácter para tutores activos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su terquedad natural e independencia pueden transformar la llamada en un reto si detecta un rastro de olor interesante. Presenta una tendencia acusada al cavado en jardines y al ladrido potente de aviso. Además, la estructura alargada de su columna vertebral lo expone a sufrir hernias discales si se le permite subir escaleras en exceso o saltar desde superficies elevadas, requiriendo cuidados físicos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un especialista de primer orden en el trabajo bajo tierra en madrigueras de zorros y tejones por su cuerpo cilíndrico y tenacidad. Destaca en el rastreo de sangre de caza mayor, la detección de rastros olfativos complejos y el cobro en maleza tupida. Su voz sonora de gran alcance y su instinto de búsqueda lo convierten en un perro de campo excepcional."
        }
      ],
      "imageUrl": "/images/breeds/dachshund-pelo-duro.webp"
    },
    {
      "id": "dachshund-pelo-largo",
      "breed": "Teckel / Dachshund de Pelo Largo",
      "title": "Teckel de Pelo Largo: La Dulzura Sedosa del Rastro",
      "epithet": "La Dulzura Sedosa del Rastro",
      "fciGroup": "Grupo 4: Teckels (Dachshunds)",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Sensorialidad Olfativa Profunda",
        "Apego Frágil Afiliativo"
      ],
      "motivations": [
        "Afecto",
        "Rastreo",
        "Confort"
      ],
      "traits": [
        "Gentileza",
        "Calidez",
        "Curiosidad",
        "Sensibilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Rastreo Suave y Búsqueda de Mimos",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Afable y Cariñoso con Todos",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Teckel de Pelo Largo representa la vertiente más dulce, elegante y apacible de la familia Dachshund, producto de cruces históricos con spaniels de campo. Con su pelaje sedoso de hilos largos que caen con elegancia y sus orejas afelpadas, combina una estampa refinada con una fina capacidad de rastro. Su psicología equilibra la curiosidad del perro de caza con una resiliencia emocional media, una sensibilidad receptiva y una búsqueda constante de afecto.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es dulce, calmado, afectuoso, curioso y de una caballerosidad sumamente agradable. A diferencia de sus parientes de pelo duro o corto, el Teckel de Pelo Largo muestra una actitud más pausada, apacible y menos reactiva ante los estímulos diarios. Conserva un olfato brillante para el rastro en la naturaleza, pero demuestra un trato delicado y afable tanto con conocidos como con personas ajenas."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye un lazo de apego cariñoso, cercano y profundamente afable con toda la familia. Este Teckel busca la proximidad física con sus tutores, adorando acurrucarse bajo las cobijas o recibir caricias en el regazo. Su educación es fluida y sencilla mediante refuerzo positivo, ya que su sensibilidad receptiva responde maravillosamente a la amabilidad y el afecto sincero, rechazando por completo los tonos de voz elevados."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es una de las variedades de Teckel más dóciles, amables y adaptables para la convivencia en pisos y entornos familiares con niños. Aporta una elegancia estética refinada, una compañía sumamente afectuosa y un comportamiento tranquilo dentro del hogar. Su carácter pacífico, su inteligencia cooperativa y su lealtad constante lo convierten en una mascota encantadora que llena la vivienda de calidez, ternura y armonía."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su hermoso y sedoso pelaje largo requiere un mantenimiento constante mediante cepillados regulares para evitar enredos en orejas, flecos y vientre. Al igual que el resto de Teckels, su columna vertebral alargada exige prevenir el sobrepeso y evitar que suba o baje tramos de escaleras para proteger sus discos intervertebrales. Asimismo, puede desarrollar cierta timidez o ansiedad si se le aísla o trata con dureza."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en el rastreo olfativo de baja velocidad y en el cobro de piezas en terrenos suaves por su fina sensibilidad nasal. Posee aptitudes excelentes para la búsqueda de rastros de sangre en caza, el adiestramiento de obediencia básica y la terapia de acompañamiento emocional debido a su carácter manso, dulce, dócil y reconfortante en la interacción humana."
        }
      ],
      "imageUrl": "/images/breeds/dachshund-pelo-largo.webp"
    },
    {
      "id": "akita-americano",
      "breed": "Akita Americano",
      "title": "Akita Americano: El Centinela de Mirada Imperial",
      "epithet": "El Centinela de Mirada Imperial",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Working Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Protección Territorial Absoluta"
      ],
      "motivations": [
        "Custodia",
        "Territorialidad",
        "Autonomía"
      ],
      "traits": [
        "Soberanía",
        "Silencio",
        "Poder",
        "Lealtad insular"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Protección Soberana y Presencia Disuasoria",
        "resiliencia_emocional": "Extrema",
        "sociabilidad": "Distante e Intolerante con Perros del Mismo Sexo",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Akita Americano es un centinela de mirada imperial, presencia monumental y majestuosidad sobria. Desarrollado en Estados Unidos a partir de las líneas del Akita japonés con aportes de molosos, posee una cabeza ancha de oso, estructura ósea masiva y un pelaje espeso de variados colores. Su psicología destaca por la soberanía dignified, una territorialidad estricta pero silenciosa, una resiliencia emocional extrema y una lealtad sagrada e inamovible hacia su núcleo familiar íntimo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sereno, majestuoso, reservado, adusto y caracterizado por una calma imponente. El Akita Americano no ladra sin motivo ni muestra agitación superficial; analiza su entorno con paciencia analítica y soberanía absoluta. Presenta una actitud distante y cautelosa ante personas extrañas, vigilando su territorio con discreción. Su temperamento fuerte y valentía extrema se combinan con un autocontrol frío que transmite un respeto inmediato."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye un pacto de lealtad sagrado, incondicional y devoto con sus tutores de referencia. El Akita Americano protegerá a su familia con su propia vida si fuera necesario, mostrando un afecto silencioso y tierno en la intimidad. Exige un guía experimentado, sereno y coherente que aplique un liderazgo justo; no acepta la imposición arbitraria ni los castigos físicos, los cuales fracturan irremediablemente la confianza con su dueño."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un nivel de protección territorial e individual de eficacia absoluta, siendo un disuasor visual y físico imbatible contra intrusos. Es un perro sumamente limpio, silencioso en interiores y de un comportamiento equilibrado que no genera molestias a los vecinos. Su fidelidad legendaria, su estampa imponente y su nobleza inquebrantable brindan una sensación de tranquilidad y orgullo inaccesible para la mayoría de razas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Muestra una marcada dominancia e intolerancia hacia otros perros del mismo sexo, exigiendo un manejo responsable y paseos bajo control estricto. Su gran fuerza física y masa muscular requieren un tutor con experiencia previa en razas de gran tamaño. Además, está sujeto a normativas legales de perros potencialmente peligrosos en diversas comunidades, requiriendo licencias, bozal en espacios públicos y seguro de responsabilidad civil."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la custodia perimetral disuasoria, la defensa personal, la caza de caza mayor y el trabajo de tracción pesada en nieve. Posee una fuerza de empuje masiva, tolerancia extrema al frío por su denso manto térmico y excelente visión nocturna. Su instinto de protección territorial autónomo y su mordida potente lo convierten en un centinela defensivo de primer orden."
        }
      ],
      "imageUrl": "/images/breeds/akita-americano.webp"
    },
    {
      "id": "podenco-ibicenco",
      "breed": "Podenco Ibicenco",
      "title": "Podenco Ibicenco: El Salto de la Luz Antiguo",
      "epithet": "El Salto de la Luz Antiguo",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Independencia Cazadora Solitaria",
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Caza",
        "Carrera",
        "Libertad"
      ],
      "traits": [
        "Agilidad",
        "Independencia",
        "Rusticidad",
        "Elegancia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo ante Presas",
        "motivacion_intrinseca": "Caza por Oído, Vista u Olfato",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Gentil pero Distante",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Podenco Ibicenco es la encarnación del salto de la luz antiguo, una joya canina primitiva del Mediterráneo esculpida para la caza de conejos sin armas de fuego. De silueta esbelta, orejas erguidas romboidales y expresivos ojos de tono ámbar, destaca por una agilidad felina capaz de dar saltos verticales prodigiosos. Su psicología combina la independencia cazadora por vista, oído u olfato con una dignidad sobria, gentileza doméstica y una gran nobleza.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es pacífico, felino, noble, curioso y sumamente independiente en su conducta diaria. En el campo, el Podenco Ibicenco se transforma en un atleta explosivo guiado por un instinto cazador voraz; en el hogar, se comporta como una estatua silenciosa, limpia y apacible. Muestra una actitud reservada pero amable ante desconocidos, destacando por un umbral de estimulación bajo ante presencias en movimiento en la naturaleza."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad afable y respeto mutuo con su grupo familiar, manteniendo una marcada autonomía personal. El Podenco no busca complacer de manera servil; prefiere compartir espacio en silencio y acompañar en paseos por el campo. Su adiestramiento exige una comprensión profunda de su arquetipo primitivo, requiriendo métodos amables, paciencia y libertad supervisada en espacios seguros para canalizar su necesidad de carrera libre."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un perro maravillosamente limpio, silencioso, sin olor corporal y de una elegancia estética sin igual. Su comportamiento en el hogar es extraordinariamente tranquilo y educado, descansando plácidamente en sofás o camas mullidas. Su salud rústica, su resistencia física insuperable y su carácter pacífico con las personas lo convierten en un compañero de vida fascinante para amantes del deporte y la naturaleza."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su instinto cazador primitivo y su finísimo oído dificultan la suelta segura en espacios abiertos no cercados, ya que perseguirá cualquier presa pequeña hasta perderse. Es un saltador prodigioso capaz de superar vallas altas de un solo brinco si se siente aburrido o motivado. Además, su fina piel y escasa grasa corporal lo hacen vulnerable al frío extremo, requiriendo abrigo adecuado en invierno."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un cazador todoterreno supremo que emplea simultáneamente la vista, el oído agudísimo y el olfato para rastrear y capturar conejos en terrenos abruptos. Destaca por su capacidad para dar saltos en suspensión vertical de más de dos metros de altura y quiebros en el aire. Posee una velocidad de carrera sobresaliente, gran agilidad física y resistencia rústica al calor mediterráneo."
        }
      ],
      "imageUrl": "/images/breeds/podenco-ibicenco.webp",
      "origen": "España"
    },
    {
      "id": "podenco-canario",
      "breed": "Podenco Canario",
      "title": "Podenco Canario: El Rastreador del Malpaís Volcánico",
      "epithet": "El Rastreador del Malpaís Volcánico",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Independencia Cazadora Solitaria",
        "Sensorialidad Olfativa Profunda"
      ],
      "motivations": [
        "Rastreo",
        "Caza",
        "Resistencia"
      ],
      "traits": [
        "Rusticidad",
        "Resistencia",
        "Agilidad",
        "Persistencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo en Rastreo",
        "motivacion_intrinseca": "Trabajo Incesante en Terrenos Abruptos",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Pacífico y Cauteloso",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Podenco Canario es un cazador primitivo emblemático de las Islas Canarias, moldeado históricamente para la persecución incesante de conejos en la accidentada geografía volcánica del malpaís. Poseedor de una silueta esbelta, musculatura enjuta, orejas erguidas y una resistencia extraordinaria al calor, destaca por trabajar jornadas extenuantes sin fatiga. Su psicología combina pasión cazadora con un temperamento noble y sereno.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es altamente activo, sobrio, independiente y centrado en la búsqueda durante las jornadas de trabajo en el campo, transformándose en un animal manso, tranquilo y silencioso descansando en el hogar. El Podenco Canario no demuestra agresividad hacia personas ni hacia otros perros, manteniendo una conducta noble. Su umbral de estimulación en presencia de rastros es muy bajo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad sincera, respeto mutuo y afecto sereno con sus tutores, requiriendo un trato respetuoso que comprenda su naturaleza cazadora ancestral. El Podenco Canario no es un perro servil, sino un colaborador independiente que disfruta compartiendo actividad física con su guía. Su adiestramiento debe basarse en el refuerzo positivo, la empatía y la libertad supervisada."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un comportamiento doméstico sumamente limpio, apacible y silencioso que facilita la convivencia en el hogar tras sus sesiones de ejercicio. Es una raza de rusticidad física envidiable, inmune a muchas enfermedades hereditarias y con excelente adaptación a climas cálidos. Su carácter noble, ausencia de agresividad y paciencia con otros perros lo convierten en un gran compañero."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su altísima independencia cognitiva y fuerte instinto de caza dificultan el control de la llamada sin correa en espacios abiertos no cercados. Si detecta la presencia de un conejo o roedor, ignorará las órdenes verbales para entregarse al rastreo. Asimismo, su elevada necesidad de actividad física diaria requiere un compromiso constante, no siendo apto para vidas sedentarias."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista de primer orden en el rastreo combinando vista, oído u olfato para la localización de piezas en terrenos volcánicos complejos. Su agilidad para saltar entre rocas, su resistencia al calor intenso y su habilidad para cazar sin ladrar innecesariamente lo convierten en un perro insuperable. Posee además una capacidad notable para deportes de resistencia."
        }
      ],
      "imageUrl": "/images/breeds/podenco-canario.webp"
    },
    {
      "id": "bloodhound",
      "breed": "Bloodhound (Perro de San Huberto)",
      "title": "Bloodhound: El Catedrático del Mapeo Olfativo",
      "epithet": "El Catedrático del Mapeo Olfativo",
      "fciGroup": "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Sensorialidad Olfativa Profunda",
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Rastreo",
        "Olfato",
        "Persistencia"
      ],
      "traits": [
        "Obstinación",
        "Gentileza",
        "Paciencia",
        "Serenidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto salvo en Rastro",
        "motivacion_intrinseca": "Rastrear Rastros Complejos por Horas",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Extraordinariamente Paciente y Afable",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Bloodhound o Perro de San Huberto es el monarca absoluto del rastreo canino, dotado de la trufa más afinada del reino animal y una estructura imponente. Desarrollado en monasterios belgas para el seguimiento de rastros complejos en terrenos difíciles, canaliza partículas olorosas mediante sus arrugas faciales y orejas largas. Su psicología combina serenidad noble y tenacidad olfativa.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es apacible, paciente, bondadoso y caracterizado por una caballerosidad inalterable en la convivencia diaria. El Bloodhound no demuestra reactividad ni agresividad hacia personas u otros animales, manteniendo una calma imperturbable en la casa. Sin embargo, cuando se conecta con una huella olorosa, transforma su estado mental hacia una determinación obstinada e ininterrumpida que ignora cualquier distracción."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de afecto manso, lealtad sincera y apego tranquilo con todos los miembros del hogar. El Bloodhound es un compañero tolerante que disfruta de la presencia humana sin resultar agobiante. Su adiestramiento exige paciencia y métodos basados exclusivamente en motivación positiva, ya que su marcada independencia cognitiva hace que la coerción sea inútil para lograr colaboración."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un carácter infinitamente dulce, una paciencia legendaria con los niños y un comportamiento pacífico que infunde armonía en la vivienda. Su capacidad olfativa es un recurso único de utilidad social incontestable para labores de búsqueda y rescate de personas. Es un gigante noble, inofensivo y cariñoso que brinda un amor incondicional a las familias que entienden sus necesidades."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su atención se desconecta del entorno cuando capta una pista olorosa, dificultando el paseo sin correa. Produce un babeo abundante que requiere limpieza continua en la vivienda. Además, sus arrugas faciales y orejas pendulares exigen una rutina rigurosa de higiene para prevenir infecciones cutáneas, sumado a su gran volumen corporal que requiere espacio y alimento de calidad."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el especialista supremo en mantrailing o seguimiento de rastros humanos envejecidos por días en terrenos urbanos y rurales. Su morfología facial canaliza el aire con partículas olorosas directamente hacia la cavidad nasal, manteniendo concentración durante horas. Posee además una resistencia física constante al trote largo y un aullido bañado de frecuencia grave para avisar al guía."
        }
      ],
      "imageUrl": "/images/breeds/bloodhound.webp",
      "origen": "Bélgica"
    },
    {
      "id": "rhodesian-ridgeback",
      "breed": "Rhodesian Ridgeback (Crestado Rodesiano)",
      "title": "Rhodesian Ridgeback: El Cazador de Leones del Sur",
      "epithet": "El Cazador de Leones del Sur",
      "fciGroup": "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Protección Estructurada Moderna",
        "Sensorialidad Olfativa Profunda"
      ],
      "motivations": [
        "Custodia",
        "Carrera",
        "Familia"
      ],
      "traits": [
        "Valentía",
        "Reserva",
        "Fuerza",
        "Dignidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Alto",
        "motivacion_intrinseca": "Acoso de Caza Mayor y Custodia Familiar",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Reservado e Indiferente con Extraños",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Rhodesian Ridgeback es el imponente cazador de leones de las estepas sudafricanas, célebre por la cresta de pelo inverso que recorre su columna vertebral. Desarrollado mediante el cruce entre perros autóctonos de los khoikhoi y sabuesos europeos, combina fuerza muscular, velocidad de carrera y agilidad. Su psicología destaca por la dignidad soberana, reserva cautelosa ante desconocidos y custodia familiar equilibrada.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es digno, sereno, valeroso y caracterizado por una calma majestuosa en el hogar. El Rhodesian Ridgeback no es un perro reactivo ni propenso a ladridos innecesarios; evalúa su entorno con distancia analítica antes de actuar. Presenta una actitud reservada e indiferente hacia personas ajenas a su núcleo, desplegando fuera de casa una gran energía y poderío atlético."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad profunda, devoción silenciosa y protección constante hacia sus tutores de referencia. El Crestado Rodesiano exige ser considerado un miembro más del grupo familiar, prefiriendo estar cerca de los suyos en interiores. Su educación requiere una guía firme, justa y coherente, rechazando de plano la violencia física o verbal, la cual deteriora su confianza."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una combinación magnífica entre un guardián disuasorio de presencia imponente y un compañero doméstico tranquilo, limpio y afectuoso. Es un perro de excelente salud rústica, pelaje corto de mantenimiento mínimo y gran tolerancia al calor estival. Su discreción sonora y su devoción abnegada por la familia lo convierten en un perro protector excepcional para personas activas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su gran volumen corporal y marcada potencia física exigen un control de correa estricto desde cachorro para evitar empujones. Posee una independencia cognitiva alta que requiere paciencia durante el entrenamiento, evitando la repetición monótona de ejercicios. Además, su instinto de caza exige precaución en zonas abiertas, mientras que su naturaleza reservada requiere socialización constante con extraños."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca por su capacidad para el acoso táctico y contención de fauna mayor mediante fintas y resistencia física de larga distancia sin confrontación directa. Es un corredor de potencia sobresaliente en canicross, bikejoring y agilidad. Posee aptitudes excelentes para la guardia territorial disuasoria, el rastreo olfativo en terrenos secos y el acompañamiento atlético en carreras."
        }
      ],
      "imageUrl": "/images/breeds/rhodesian-ridgeback.webp",
      "origen": "Sudáfrica"
    },
    {
      "id": "pointer-ingles",
      "breed": "Pointer Inglés",
      "title": "Pointer Inglés: La Estatua del Viento",
      "epithet": "La Estatua del Viento",
      "fciGroup": "Grupo 7: Perros de Muestra",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Caza",
        "Carrera",
        "Colaboración"
      ],
      "traits": [
        "Velocidad",
        "Elegancia",
        "Enfoque",
        "Gentileza"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo ante Emisiones de Olor",
        "motivacion_intrinseca": "Muestra Escultórica de Aves",
        "resiliencia_emocional": "Media-Alta",
        "sociabilidad": "Muy Afable y Gentil con Todos",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Pointer Inglés es el indiscutible aristócrata del campo de caza, célebre por su muestra estatuaria congelada en el tiempo y su galope atlético. Diseñado en Gran Bretaña para la localización veloz de aves mediante efluvios aéreos, posee una cabeza esculpida, cavidad torácica profunda y elegancia plástica sin igual. Su psicología se fundamenta en la cooperación apasionada con el humano y un temperamento dulce.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es extremadamente enérgico, enfocado y pasional en el campo, contrastando con una dulzura noble, tranquila e inofensiva en el hogar. El Pointer Inglés no muestra agresividad hacia las personas ni hacia otros perros, caracterizándose por una sociabilidad abierta. Posee un umbral de estimulación bajo ante olores de caza en el aire, lo que desencadena una concentración estatuaria fascinante con absoluta precisión."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad profunda, colaboración simbiótica y afecto constante con su guía o grupo familiar. El Pointer es un perro sensible que busca agradar a su tutor, respondiendo a un adiestramiento positivo basado en el entendimiento mutuo. Requiere un compañero activo que comprenda su necesidad de ejercicio atlético, sufriendo si se le somete a aislamiento o castigos."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una convivencia hogareña llena de tranquilidad, limpieza y caballerosidad, siendo un perro noble y sumamente paciente con los niños. Su estampa atlética y su comportamiento inofensivo lo convierten en una mascota fascinante para amantes del deporte al aire libre. Es una raza saludable, de pelaje corto facilísimo de cuidar y con una gran capacidad de trabajo en equipo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su inmensa necesidad de ejercicio físico aeróbico requiere caminatas largas y carreras libres diarias en lugares seguros, no siendo apto para estilos de vida sedentarios. Si carece de estimulación adecuada, puede canalizar su frustración en nerviosismo dentro del hogar. Asimismo, su fuerte instinto olfativo hace que tienda a alejarse persiguiendo rastros si no se trabaja el control de llamada."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el especialista supremo en la muestra de alta velocidad de aves de caza mediante la detección de efluvios aéreos a gran distancia. Su estampa estatuaria congelada, con la cabeza erguida y la cola rígida, es un monumento genético. Posee además una capacidad galopante de cobertura de terreno gigantesca y aptitudes sobresalientes para deportes de ritmo intenso como canicross."
        }
      ],
      "imageUrl": "/images/breeds/pointer-ingles.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "setter-ingles",
      "breed": "Setter Inglés",
      "title": "Setter Inglés: La Elegancia de Manto Moteado",
      "epithet": "La Elegancia de Manto Moteado",
      "fciGroup": "Grupo 7: Perros de Muestra",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Apego Frágil Afiliativo"
      ],
      "motivations": [
        "Afecto",
        "Caza",
        "Compañía"
      ],
      "traits": [
        "Gentileza",
        "Dulzura",
        "Elegancia",
        "Vitalidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Búsqueda Cruzada y Afecto Familiar",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Amistoso y Cariñoso con Niños y Extraños",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Setter Inglés es la máxima expresión de elegancia y dulzura entre los perros de muestra, distinguido por su hermoso pelaje sedoso con motas denominado Belton. Criado en Gran Bretaña para la búsqueda felina de pluma en praderas, destaca por su movimiento fluido y cabeza bien moldeada. Su psicología combina afecto entrañable, baja reactividad agresiva y un apego frágil afiliativo que busca compañía.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es apacible, cariñoso, jovial y marcado por una gentileza innata que conquista a todo su entorno. El Setter Inglés muestra un comportamiento calmado e inofensivo en la vivienda, transformándose en un buscador dinámico al salir al campo. Posee una sociabilidad extraordinaria con adultos, niños y otros perros, careciendo de instintos territoriales. Su sensibilidad emocional le permite sintonizar con su tutor."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye un lazo afectivo muy estrecho, tierno y dependiente de la compañía de sus seres queridos. El Setter Inglés necesita sentirse amado e integrado en la rutina familiar cotidiana, sufriendo si se le deja solo durante periodos prolongados. Su educación debe ser extremadamente suave y cariñosa; los métodos coercitivos inhiben su carácter alegre, haciendo que se repliegue sobre sí mismo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es uno de los mejores perros de familia del mundo canino por su infinita paciencia, dulzura sin límites y carácter inofensivo con los niños. Aporta una elegancia estética deslumbrante y una compañía cariñosa que llena el hogar de tranquilidad. Su sociabilidad nativa con otros animales facilita la convivencia múltiple, mientras que su pasión por la naturaleza lo hace un compañero maravilloso."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su frondoso y sedoso pelaje con flecos largos exige cepillados constantes y revisiones minuciosas tras salidas al campo para eliminar espigas o barro. Presenta predisposición a desarrollar ansiedad por separación si no se le gestiona la independencia desde cachorro. Además, su marcada motivación de caza puede llevarlo a despistarse tras olores lejanos si se le suelta en áreas abiertas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la muestra felina de aves de pradera, combinando una búsqueda cruzada armónica con un movimiento casi silencioso sobre el césped. Posee un olfato excepcional para captar partículas suspendidas en la brisa y una adaptabilidad magnífica para el cobro en monte bajo. Destaca también en agility y como perro de terapia por su temperamento pacífico y dulzura."
        }
      ],
      "imageUrl": "/images/breeds/setter-ingles.webp"
    },
    {
      "id": "setter-irlandes",
      "breed": "Setter Irlandés Rojo",
      "title": "Setter Irlandés: El Fuego Rojo de las Praderas",
      "epithet": "El Fuego Rojo de las Praderas",
      "fciGroup": "Grupo 7: Perros de Muestra",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Carrera",
        "Juego",
        "Afecto"
      ],
      "traits": [
        "Entusiasmo",
        "Vitalidad",
        "Alegría",
        "Velocidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Carrera Libre y Sociabilidad Exuberante",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Extrovertido y Amistoso sin Reservas",
        "independencia_cognitiva": "Baja-Media"
      },
      "summary": "El Setter Irlandés Rojo es el fuego rojo de las praderas, célebre por su deslumbrante manto caoba brillante, elegancia atlética y jovialidad inagotable. Criado en Irlanda para la localización veloz de aves mediante gallardo galope, se comporta como un eterno cachorro de energía efervescente. Su psicología destaca por un umbral de estimulación bajo, sociabilidad exuberante y motivación irrefrenable hacia la carrera libre.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es efervescente, alegre, impulsivo, cariñoso y lleno de una vitalidad contagiosa. El Setter Irlandés aborda cada día con un entusiasmo desbordante que lo convierte en el alma de cualquier hogar activo. Posee un umbral de estimulación bajo que lo impulsa a reaccionar con rapidez ante invitaciones de juego. Muestra una sociabilidad abierta y extrovertida hacia todas las personas, sin timidez ni agresividad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de afecto efusivo, devoción alegre y necesidad de compartir actividades físicas con sus tutores. El Setter Irlandés adora sentirse rodeado de su grupo familiar, expresando su cariño con efervescencia. Su educación exige tutores pacientes y consistentes que canalicen su ímpetu mediante métodos positivos; la imposición dura genera dispersión mental, dificultando su capacidad de concentración."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un espectáculo estético de belleza sublime con su manto caoba y una energía positiva que llena de alegría el entorno familiar. Es un compañero de juegos incansable, paciente e inofensivo con los niños, ideal para familias deportistas que disfrutan de actividades al aire libre. Su sociabilidad nativa elimina tensiones con extraños, siendo una mascota simpática, cariñosa y leal."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su desbordante nivel de energía requiere largas sesiones diarias de ejercicio intenso en libertad para evitar hiperactividad en casa. Su entusiasmo desmedido puede provocar empujones involuntarios a niños muy pequeños si no se modera su efervescencia. Además, su pelaje largo y sedoso exige mantenimiento constante con cepillados para evitar nudos y retirada de espigas tras correr por el campo."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca por su galope sostenido de gran amplitud y velocidad en la localización de aves en praderas abiertas. Su muestra erguida y elegante es una manifestación genética de gran belleza deportiva. Posee aptitudes atléticas sobresalientes para carreras de canicross, agility y pruebas de cobro en agua dulce, manteniendo una resistencia al esfuerzo físico que pocos pueden igualar."
        }
      ],
      "imageUrl": "/images/breeds/setter-irlandes.webp"
    },
    {
      "id": "epagneul-breton",
      "breed": "Epagneul Breton (Spaniel Bretón)",
      "title": "Spaniel Bretón: El Inagotable Todoterreno Francés",
      "epithet": "El Inagotable Todoterreno Francés",
      "fciGroup": "Grupo 7: Perros de Muestra",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Caza",
        "Cobro",
        "Trabajo conjunto"
      ],
      "traits": [
        "Versatilidad",
        "Vivacidad",
        "Afabilidad",
        "Enfoque"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Búsqueda Incesante en Monte Bajo",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Sociable y Alegre",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Epagneul Breton o Spaniel Bretón es el inagotable todoterreno del monte bajo, famoso por ser el perro de muestra francés de talla compacta más popular y versátil del mundo. De cuerpo corto, osamenta fina, mirada inteligente y cola naturalmente corta, combina una agilidad pasmosa con energía incombustible. Su psicología se rige por un umbral de estimulación bajo, inteligencia funcional y afectuosidad desbordante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vivaz, alegre, despierto, entusiasta y lleno de una expresividad sumamente simpática. El Bretón posee una mente ágil que procesa estímulos ambientales a gran velocidad, manteniéndose siempre listo para la acción. En el hogar se comporta de forma cariñosa y tranquila si ha satisfecho su cuota de ejercicio diario. Muestra una sociabilidad abierta con desconocidos y convivencia pacífica con niños."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad apasionada, comunicación fluida y necesidad de agradar continuamente a su guía. El Spaniel Bretón es un colaborador nato que busca la aprobación de su tutor en cada movimiento. Su adiestramiento resulta sumamente fluido debido a su elevada inteligencia funcional, respondiendo maravillosamente al entrenamiento positivo, mientras que la dureza entristece su carácter y frena su iniciativa."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un tamaño compacto felicísimo para el transporte y la vida en pisos sin renunciar al rendimiento de un gran perro de trabajo. Es una raza sumamente cariñosa, limpia, inteligente y fácil de educar que se adapta a múltiples entornos familiares. Su pasión por el trabajo en equipo, su buen carácter con los niños y su resistencia lo convierten en una opción estelar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su gran nivel de energía física y estimulación mental exige un compromiso de ejercicio diario que no puede obviarse sin sufrir nerviosismo doméstico. Si se le priva de actividad física o trabajo olfativo, puede desarrollar conductas ansiosas o ladridos de aburrimiento. Además, su pelaje moderadamente largo requiere cepillados periódicos tras paseos por el monte para eliminar maleza y espigas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la búsqueda enérgica y muestra firme de aves en monte bajo, zanjas y terrenos espesos de difícil acceso. Posee un cobro instintivo magnífico tanto en tierra firme como en agua dulce con agarre suave de la pieza. Destaca además en pruebas de agility, canicross y detección olfativa por su agilidad felina y rapidez de respuesta mental."
        }
      ],
      "imageUrl": "/images/breeds/epagneul-breton.webp"
    },
    {
      "id": "perro-de-agua-espanol",
      "breed": "Perro de Agua Español",
      "title": "Perro de Agua Español: El Rústico de Rizos Infinitos",
      "epithet": "El Rústico de Rizos Infinitos",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Inteligencia Funcional Obsesiva",
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Trabajo",
        "Cobro",
        "Aprobación social"
      ],
      "traits": [
        "Rusticidad",
        "Inteligencia",
        "Vigilancia",
        "Lealtad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo-Medio",
        "motivacion_intrinseca": "Trabajo en Agua, Cobro y Pastoreo",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Leal a la Familia, Cauteloso con Extraños",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Perro de Agua Español es el rústico de rizos infinitos de las marismas andaluzas y sierras ibéricas, moldeado históricamente para labores polifacéticas de pastoreo, cobro en agua y auxilio a pescadores. Cubierto por un singular manto lanoso de cordones rizados e impermeable, posee una estructura muscular atlética e inteligencia funcional. Su psicología combina un enfoque total hacia las tareas y lealtad familiar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es atlético, trabajador, vigilante, obediente y profundamente enfocado en su grupo humano de referencia. El Perro de Agua Español posee un intelecto despierto que aprende rutinas con pasmosa rapidez. Muestra un estado de alerta natural sobre su territorio, actuando con cautela reservada ante la presencia de extraños. En el ámbito familiar es cariñoso, necesitando retos físicos y cognitivos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad absoluta, devota y enfocada con su guía principal y la familia cercana. El Turco Andaluz necesita sentirse útil y valorado a través de misiones diarias de colaboración. Su adiestramiento es sumamente fluido gracias a su asombrosa capacidad de aprendizaje, requiriendo métodos basados en refuerzo positivo y variedad de ejercicios, evitando la monotonía o la dureza que afectan su confianza."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un rendimiento de trabajo y una capacidad de aprendizaje excepcionales que destacan en múltiples disciplinas caninas. Es un perro rústico, resistente, de gran adaptabilidad y cuyo pelaje rizado apenas suelta pelo en la vivienda. Su devoción protectora por la familia, su paciencia con los niños y su pasión inagotable por las actividades acuáticas lo convierten en un compañero fascinante."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su reserva natural hacia extraños requiere una socialización temprana estricta para evitar conductas desconfiadas o territoriales. Si carece de trabajo cognitivo y ejercicio físico, su agudeza mental puede canalizarse en ladridos de aviso persistentes o ansiedad por aburrimiento. Además, su característico pelaje rizado no debe cepillarse jamás con cepillos tradicionales, exigiendo cortes periódicos a tijera o esquilado."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Brilla como un atleta todoterreno insuperable en pastoreo de ganado vacuno u ovino, buceo para cobro de objetos sumergidos y detección táctica de estupefacientes o rescate en escombros. Es una figura estelar en pruebas de agility por su potencia de salto, flexibilidad y velocidad de giro. Posee un olfato privilegiado y gran capacidad de trabajo en entornos acuáticos."
        }
      ],
      "imageUrl": "/images/breeds/perro-de-agua-espanol.webp"
    },
    {
      "id": "perro-de-agua-portugues",
      "breed": "Perro de Agua Portugués",
      "title": "Perro de Agua Portugués: El Marineros de las Olas",
      "epithet": "El Marineros de las Olas",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Working Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Trabajo",
        "Nadar",
        "Compañía"
      ],
      "traits": [
        "Fuerza",
        "Inteligencia",
        "Vivacidad",
        "Adaptabilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Nado y Tareas Acuáticas",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Amistoso y Sociable",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Perro de Agua Portugués o Cão de Água Português es el marinero incombustible de las costas atlánticas, criado históricamente por los pescadores lusos para nadar entre barcos, guiar peces hacia redes y recuperar aparejos perdidos. De estructura robusta, excelente musculatura y manto rizado u ondulado sin muda, posee un carácter valeroso y atlético. Su psicología destaca por inteligencia cooperativa y pasión por la natación.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es valeroso, alegre, sumamente obediente, activo y caracterizado por una disposición abierta y afable. El Perro de Agua Portugués posee una mente equilibrada que afronta nuevos retos con entusiasmo y curiosidad. Muestra un temperamento afable y extrovertido tanto con desconocidos como con otros perros, manteniendo una conducta limpia en la vivienda. Su pasión por el agua lo llena de vitalidad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad profunda, colaboración alegre y deseo incesante de formar parte de las actividades de su tutor. El Cão de Água es un colaborador nato que aprende con gran rapidez cuando se le estimula adecuadamente. Su adiestramiento resulta fácil y fluido mediante técnicas de motivación positiva y juegos en el agua, respondiendo con entusiasmo ante recompensas afectivas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un comportamiento doméstico sumamente limpio, dócil e inteligente, con un manto no alérgeno que no suelta pelo en el hogar. Es un compañero de vida extraordinario para personas activas y familias con niños por su paciencia, buen carácter nativo y alegría constante. Su versatilidad para aprender trucos complejos y su pasión por los deportes acuáticos lo convierten en una mascota entrañable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su elevada necesidad de estímulo mental y ejercicio físico acuático exige un compromiso constante por parte de la familia. Si no se le proporcionan retos de aprendizaje o salidas activas, puede buscar entretenimiento propio abriendo puertas o manipulando objetos del hogar. Además, su pelaje denso rizado u ondulado requiere cepillados frecuentes y visitas regulares al peluquero canino."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es un especialista inigualable en natación de potencia, buceo a profundidad para rescate de objetos y salvamento acuático en mar abierto. Sus patas palmeadas le otorgan una propulsión anfibia sobresaliente. Destaca además en pruebas de obediencia avanzada, agility y terapia de apoyo emocional por su alta inteligibilidad cognitiva, capacidad de concentración y carácter sumamente afable."
        }
      ],
      "imageUrl": "/images/breeds/perro-de-agua-portugues.webp"
    },
    {
      "id": "english-springer-spaniel",
      "breed": "English Springer Spaniel",
      "title": "English Springer Spaniel: El Levantador Incansable",
      "epithet": "El Levantador Incansable",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Caza",
        "Cobro",
        "Afecto"
      ],
      "traits": [
        "Entusiasmo",
        "Vivacidad",
        "Gentileza",
        "Persistencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Levantar Aves en Espesuras y Cobro",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Cariñoso y Afable",
        "independencia_cognitiva": "Media"
      },
      "summary": "El English Springer Spaniel es un emblemático levantador y cobrador de caza británico, reconocido por su entusiasmo inagotable, orejas afelpadas y movimiento constante de cola. Desarrollado históricamente para irrumpir en espesuras tupidas y levantar aves para el cazador, posee una estructura atlética bien balanceada y una energía vibrante. Su psicología destaca por un umbral de estimulación bajo ante rastros de caza, una inteligencia funcional brillante, una sociabilidad desbordante y un temperamento afable, alegre, cooperativo y profundamente cariñoso con toda su familia.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente alegre, dinámico, trabajador, dócil y lleno de una expresividad sumamente simpática. El Springer Spaniel posee una mente despierta que disfruta explorando senderos, matorrales y zonas acuáticas con entusiasmo incansable. En el entorno doméstico se comporta como un perro apacible, limpio y cariñoso si ha satisfecho su cuota de ejercicio diario. Muestra una sociabilidad extraordinaria con personas extrañas, niños y otros perros, careciendo por completo de tendencias agresivas o territoriales en su vida cotidiana."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad entusiasta, devoción sincera y cooperación constante con sus tutores de referencia. El English Springer Spaniel es un colaborador nato que busca complacer continuamente a su guía en cada actividad que comparte. Su adiestramiento resulta fácil y fluido debido a su inteligencia y deseo de trabajar en equipo. Responde maravillosamente al adiestramiento motivacional basado en premios y juegos, mientras que la brusquedad o la indiferencia afectan seriamente su confianza y su entusiasmo habitual."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una vitalidad contagiosa, una simpatía arrolladora y un compañerismo incondicional que llena de alegría el hogar. Es un perro sumamente versátil, adaptado a múltiples actividades al aire libre y deportes caninos, con un excelente carácter familiar. Su paciencia infinita con los niños, su amor por la natación y su capacidad para aprender normas de convivencia con rapidez lo convierten en un compañero extraordinario para familias activas que disfrutan de la naturaleza y del contacto animal constante."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su elevado nivel de energía física y estimulación mental requiere un compromiso diario de paseos largos y ejercicio intenso en libertad. Si se le priva de actividad física o trabajo olfativo, puede canalizar su aburrimiento en hiperactividad doméstica o ladridos insistentes. Asimismo, sus orejas largas y caídas requieren una limpieza frecuente para prevenir otitis, mientras que su pelaje sedoso necesita cepillados periódicos tras paseos por el campo para retirar barro, enredos o espigas enganchadas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista supremo en el levantamiento de aves en espesuras tupidas, matorrales y zanjas de difícil acceso por su intrepidez y agilidad. Posee un cobro instintivo magnífico tanto en tierra firme como en agua dulce con agarre suave de las piezas. Destaca además en pruebas de agilidad, canicross, rastreo de rastro y detección olfativa gracias a su finísimo olfato, rapidez de respuesta física y capacidad de concentración bajo motivación."
        }
      ],
      "imageUrl": "/images/breeds/english-springer-spaniel.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "bichon-frise",
      "breed": "Bichón Frisé",
      "title": "Bichón Frisé: La Nube Alegre de la Simpatía",
      "epithet": "La Nube Alegre de la Simpatía",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Apego Frágil Afiliativo",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Afecto",
        "Atención",
        "Juego"
      ],
      "traits": [
        "Alegría",
        "Dulzura",
        "Adaptabilidad",
        "Sociabilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Compañía Cercana y Juegos Suaves",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Excelente con Niños, Ancianos y Extraños",
        "independencia_cognitiva": "Baja"
      },
      "summary": "El Bichón Frisé es la viva imagen de la alegría y la elegancia, célebre por su espeso pelaje blanco rizado que asemeja una suave nube de algodón. Desarrollado en la cuenca mediterránea y popularizado entre la realeza europea, este pequeño canino de compañía destaca por su naturaleza afectuosa, mirada vivaz y expresión dulce. Su psicología se rige por un apego afiliativo cercano, un umbral de estimulación medio, una sociabilidad extraordinaria sin agresividad y una empatía constante hacia su entorno humano.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es encantador, alegre, extrovertido, afable y completamente libre de agresión o recelo hacia los demás. El Bichón Frisé aborda la vida con una positividad radiante que contagia entusiasmo a todo el hogar. Posee un estado de ánimo estable que no genera tensiones ni ladridos innecesarios en la convivencia diaria. Muestra un comportamiento sumamente amigable con niños, personas mayores, extraños y otros animales, siendo un perro de compañía pacífico y equilibrado."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de cariño profundo, dulce dependencia y búsqueda constante de contacto físico con sus tutores. Al Bichón Frisé le apasiona descansar en el regazo, participar en juegos tranquilos y acompañar a su familia a todas partes. Su adiestramiento es ágil y gratificante cuando se utilizan métodos positivos y amables, respondiendo con entusiasmo ante recompensas verbales y mimos, mientras que el aislamiento o la distancia afectiva le provocan cierta tristeza."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una convivencia doméstica pacífica, caracterizada por la armonía, el afecto continuo y una empatía reconfortante. Es un perro de tamaño práctico, ideal para pisos urbanos o espacios reducidos, cuyo manto rizado casi no suelta pelo, siendo muy apreciado por personas con alergias. Su carácter amigable con todo el mundo, su paciencia con los más pequeños y su capacidad para adaptarse al ritmo familiar lo convierten en una mascota ideal."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su necesidad de compañía humana constante puede derivar en ansiedad por separación si no se le enseña a gestionar la soledad gradualmente desde cachorro. Asimismo, su refinado manto blanco rizado exige un mantenimiento riguroso de cepillado diario, baños periódicos y cortes profesionales de peluquería para evitar nudos. Requiere también cuidados específicos en la zona ocular para limpiar las manchas del lagrimal y mantener su aspecto blanco e impecable."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como perro de compañía y terapia asistida debido a su empatía natural, dulzura y temperamento reconfortante con personas de todas las edades. Destaca en la ejecución de trucos de agilidad cognitiva, juegos de interacción y rutinas de obediencia básica por su inteligencia vivaz. Posee además una adaptabilidad física notable para caminatas urbanas y actividades recreativas en interiores sin requerir esfuerzos físicos extenuantes para mantenerse equilibrado."
        }
      ],
      "imageUrl": "/images/breeds/bichon-frise.webp",
      "origen": "Bélgica"
    },
    {
      "id": "bichon-maltes",
      "breed": "Bichón Maltés",
      "title": "Bichón Maltés: La Elegancia de Manto Sedoso",
      "epithet": "La Elegancia de Manto Sedoso",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Afecto",
        "Cercanía",
        "Atención"
      ],
      "traits": [
        "Dulzura",
        "Sensibilidad",
        "Vivacidad",
        "Fidelidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo-Medio",
        "motivacion_intrinseca": "Afecto Humano Directo",
        "resiliencia_emocional": "Media-Baja",
        "sociabilidad": "Muy Cariñoso con su Dueño, Atento a Visitas",
        "independencia_cognitiva": "Baja"
      },
      "summary": "El Bichón Maltés es una de las razas de compañía más antiguas y veneradas del Mediterráneo, célebre por su suntuoso manto blanco, sedoso y de caída recta. Conocido históricamente como el perro faldero de la nobleza, combina una estampa refinada con una vivacidad entrañable y una mirada oscura sumamente expresiva. Su psicología se fundamenta en el apego extremo y la fusión emocional con sus tutores, un umbral de estimulación bajo-medio, una alta reactividad afectiva y una fidelidad incondicional.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es dulce, afectuoso, alerta, alegre y sumamente fiel a su grupo humano de referencia. A pesar de su diminuto tamaño y aspecto delicado, el Bichón Maltés posee una valentía curiosa que lo mantiene atento a los pasos y movimientos en el hogar. Muestra una actitud cariñosa y cercana con sus tutores, aunque puede manifestar cierta reserva inicial o aviso sonoro ante la llegada de personas extrañas a su territorio."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de fusión emocional intensa y dependencia afectiva entrañable con sus personas de referencia. El Maltés necesita sentirse querido e incluido en el día a día familiar, adorando seguir a su tutor como una pequeña sombra blanca. Su adiestramiento resulta sencillo mediante refuerzo positivo y caricias, requiriendo tutores amorosos y consistentes que establezcan límites suaves para evitar que se vuelva excesivamente caprichoso o sobreprotector."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un afecto incondicional, una elegancia clásica y una compañía sumamente reconfortante que llena de ternura cualquier vivienda. Es una mascota excelente para pisos pequeños, personas mayores y vida urbana, cuyo pelaje no suelta pelo de forma habitual en la casa. Su inteligencia rápida para aprender normas básicas, su fidelidad devota y su alegría sutil la convierten en una compañera de vida encantadora y profundamente amada."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Presenta una marcada propensión a sufrir ansiedad por separación si se le deja solo durante periodos prolongados sin preparación previa. Su tendencia a ladrar ante ruidos lejanos o timbres puede volverse molesta si no se educa con serenidad desde edad temprana. Además, su largo y sedoso manto exige cepillados diarios indispensables para evitar enredos dolorosos, junto con la limpieza frecuente del área facial y lagrimal."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en labores de acompañamiento afectivo y apoyo emocional gracias a su sensibilidad receptiva para percibir los estados de ánimo de sus dueños. Destaca como centinela de aviso sonoro doméstico de oído agudo ante presencias ajenas. Posee además aptitudes excelentes para el aprendizaje de trucos de obediencia en miniatura, rutinas de baile canino y actividades de interacción en interiores que estimulan su inteligencia vivaz."
        }
      ],
      "imageUrl": "/images/breeds/bichon-maltes.webp",
      "origen": "Italia"
    },
    {
      "id": "shih-tzu",
      "breed": "Shih Tzu",
      "title": "Shih Tzu: El Pequeño León Sagrado de los Palacios",
      "epithet": "El Pequeño León Sagrado",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda",
        "Apego Frágil Afiliativo"
      ],
      "motivations": [
        "Comodidad",
        "Afecto",
        "Reposo"
      ],
      "traits": [
        "Calma",
        "Dignidad",
        "Dulzura",
        "Amabilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Descanso Cómodo y Convivencia Apacible",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Amigable y Confiado con Todos",
        "independencia_cognitiva": "Media-Alta"
      },
      "summary": "El Shih Tzu es el venerable pequeño león sagrado criado en los palacios imperiales chinos, apreciado por su majestuoso manto largo, cola curvada y rostro amigable de hocico chato. A pesar de su aristocrático pasado palaciego, es un perro de compañía robusto, tranquilo y extraordinariamente dulce. Su psicología destaca por un umbral de estimulación alto, un temperamento dócil sin agresividad, un apetito por la comodidad y el descanso, y una sociabilidad confiada con todos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es extremadamente sereno, pacífico, afectuoso, digno y caracterizado por una amabilidad contagiosa. El Shih Tzu aborda la vida diaria con una calma apacible, sin mostrar nerviosismo ni agresividad innecesaria en sus interacciones. Rara vez ladra sin motivo, prefiriendo observar su entorno con curiosidad simpática. Se comporta como un perro seguro de sí mismo que disfruta de la compañía humana y del confort de lugares blandos en el hogar."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad afable, cariño dulce y convivencia pacífica con todos los miembros de la casa. El Shih Tzu se adapta con enorme flexibilidad a la rutina de sus tutores, disfrutando tanto de un paseo relajado como de una tarde de descanso en el sofá. Su adiestramiento debe basarse en la amabilidad y la paciencia, respondiendo bien al refuerzo positivo cuando se respeta su ritmo tranquilo e independiente."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una compañía sumamente silenciosa, relajada y afectuosa, ideal para personas de cualquier edad, familias y habitantes de pisos urbanos. Es un perro muy amigable con desconocidos, visitas y otros animales, careciendo de instintos cazadores o territoriales problemáticos. Su naturaleza robusta, su dulce temperamento y su capacidad para brindar paz al entorno doméstico lo convierten en un amigo de piso ejemplar y reconfortante."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su estructura braquicefálica de hocico corto lo hace sensible a las altas temperaturas, exigiendo precauciones durante el verano para evitar golpes de calor. Su abundante pelaje largo requiere cepillados frecuentes y aseo continuado para prevenir nudos, además de atención a la higiene de sus ojos y pliegues faciales. Asimismo, su independencia pacífica puede traducirse en cierta terquedad si se intenta apresurar su aprendizaje con órdenes estrictas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista en terapia de acompañamiento y confort emocional debido a su presencia pacífica, baja reactividad y naturaleza mansa. Posee aptitudes excelentes para la convivencia pacífica con múltiples mascotas, paseos relajados a ritmo pausado y adaptación a viajes en transporte. Su capacidad para mantener la calma en situaciones concurridas lo convierte en un perro de compañía urbano de primer orden."
        }
      ],
      "imageUrl": "/images/breeds/shih-tzu.webp"
    },
    {
      "id": "cavalier-king-charles",
      "breed": "Cavalier King Charles Spaniel",
      "title": "Cavalier King Charles: El Regazo Dulce de la Realeza",
      "epithet": "El Regazo Dulce de la Realeza",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)",
        "Apego Frágil Afiliativo"
      ],
      "motivations": [
        "Afecto",
        "Contacto físico",
        "Sintonía"
      ],
      "traits": [
        "Gentileza",
        "Sensibilidad",
        "Ternura",
        "Calidez"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Contacto Físico Humano y Mimos",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Amoroso con Todo el Mundo",
        "independencia_cognitiva": "Muy Baja"
      },
      "summary": "El Cavalier King Charles Spaniel es el regazo dulce de la realeza británica, famoso por sus grandes ojos oscuros de expresión melting, orejas sedosas caídas y elegancia natural. Esta raza de compañía combina la ternura incondicional de un perro faldero con la jovialidad sutil de sus ancestros de caza. Su psicología destaca por un apego extremo y afiliativo, un umbral de estimulación medio, una empatía emocional sobresaliente y una incapacidad absoluta para la malicia o la agresividad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es dulce, apacible, gentil, cariñoso y totalmente desprovisto de agresividad o aspereza en su conducta. El Cavalier King Charles aborda al mundo con una ternura infinita que desarma a cualquier persona. Posee un estado de ánimo alegre y adaptable que se ajusta sin esfuerzo al ritmo de vida familiar. Muestra una sociabilidad fabulosa con niños, adultos, extraños y otros animales, siendo un perro amoroso de naturaleza pacífica."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad profunda, sintonía emocional y dependencia afectiva intensa con sus personas de referencia. El Cavalier sigue a sus tutores por la casa como una sombra amorosa, buscando siempre el contacto físico directo y los mimos. Su adiestramiento es sumamente sencillo gracias a su inteligencia cooperativa y deseo de complacer; responde con entusiasmo a palabras dulces y recompensas, sufriendo si se le trata con brusquedad."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una calidez reconfortante, una empatía conmovedora y un comportamiento doméstico pacífico que llena de amor el hogar. Es un perro sumamente paciente con los niños, adaptable tanto a pisos urbanos como a casas rurales, y con una simpatía nativa que facilita los paseos en sociedad. Su carácter dulce, su mirada expresiva y su lealtad constante lo convierten en uno de los perros de compañía más queridos del mundo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Presenta una marcada propensión a desarrollar problemas cardiacos hereditarios, como la soplos en la válvula mitral, requiriendo revisiones veterinarias periódicas. Su necesidad de afecto y compañía puede derivar en ansiedad por separación si se le deja solo durante periodos largos de tiempo. Además, sus orejas largas y sedosas exigen cuidados de cepillado e higiene frecuente para evitar infecciones y acumulaciones de suciedad tras salir al campo."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale de forma estelar como perro de terapia asistida y apoyo emocional debido a su capacidad única para brindar consuelo con su presencia mansa y cariñosa. Destaca en pruebas de obediencia básica, juegos de cobro suave de pelota y caminatas familiares por su naturaleza cooperativa. Su olfato heredado de los spaniels le otorga también aptitudes divertidas para juegos de rastreo casual en jardines."
        }
      ],
      "imageUrl": "/images/breeds/cavalier-king-charles.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "papillon",
      "breed": "Papillon (Epagneul Enano Continental)",
      "title": "Papillon: La Mariposa Inteligente del Grupo Toy",
      "epithet": "La Mariposa Inteligente",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Inteligencia Funcional Obsesiva",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Juego",
        "Desafío mental",
        "Aprobación social"
      ],
      "traits": [
        "Inteligencia",
        "Agilidad",
        "Vivacidad",
        "Afecto"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Aprender Trucos y Agility Miniatura",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Sociable, Extrovertido y Despierto",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Papillon o Epagneul Enano Continental es la mariposa inteligente del grupo Toy, distinguido por sus grandes orejas erguidas con flecos sedosos que recuerdan las alas abiertas de una mariposa. Clasificado entre las razas más inteligentes del mundo canino, combina una estampa ligera con un intelecto privilegiado y un cuerpo atlético. Su psicología está guiada por la curiosidad vivaz, una alta motivación hacia el juego cognitivo, un umbral de estimulación bajo y una sociabilidad extrovertida y alegre.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vivaz, despierto, curioso, alegre, afectuoso e intensamente enfocado en aprender todo de su entorno. El Papillon posee una agudeza mental sorprendente que procesa estímulos con rapidez pasmosa, manteniendo una actitud siempre alerta pero sin manifestar agresividad ni timidez. Muestra una sociabilidad abierta con personas y otros perros, disfrutando de las interacciones dinámicas. Es un pequeño canino lleno de energía positiva y encanto natural."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad entusiasta, colaboración rápida y búsqueda de aprobación constante con su grupo familiar. Al Papillon le apasiona participar en juegos interactivos, aprender trucos y compartir actividades físicas con sus tutores. Su adiestramiento es facilísimo y rapidísimo debido a su inteligencia superior; responde maravillosamente al refuerzo positivo y a los desafíos cognitivos, disfrutando cuando se estimula su mente despierta."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una brillantez intelectual, un dinamismo divertido y una elegancia estética que deslumbran en la convivencia diaria. Es un perro de tamaño práctico pero con la resistencia física y agilidad de un perro de trabajo de gran talla. Su capacidad para aprender órdenes complejas en tiempo récord, su excelente salud en comparación con otros perros pequeños y su afecto constante lo convierten en un compañero fascinante."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su aguda inteligencia y umbral de estimulación bajo pueden convertirse en un reto si se le priva de retos mentales, desarrollando aburrimiento o ladridos de aviso persistentes. Sus finas extremidades requieren precaución durante su etapa de cachorro para evitar fracturas por caídas de muebles altos. Además, su pelaje sedoso con flecos largos en orejas y cola requiere cepillados frecuentes para mantenerlo libre de enredos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es la figura estelar absoluta del grupo Toy en pruebas de agility por su impresionante velocidad de carrera, flexibilidad y precisión de giro. Destaca de forma sobresaliente en obediencia competitiva, aprendizaje de trucos complejos y rutinas de freestyle canino gracias a su procesador cognitivo brillante. Posee además aptitudes magníficas como perro de aviso sonoro y acompañante atlético en caminatas."
        }
      ],
      "imageUrl": "/images/breeds/papillon.webp",
      "origen": "Bélgica"
    },
    {
      "id": "boston-terrier",
      "breed": "Boston Terrier",
      "title": "Boston Terrier: El Caballero Americano de Esmoquin",
      "epithet": "El Caballero Americano de Esmoquin",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Apego Frágil Afiliativo"
      ],
      "motivations": [
        "Afecto",
        "Juego",
        "Compañía"
      ],
      "traits": [
        "Humor",
        "Dulzura",
        "Adaptabilidad",
        "Gentileza"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Juego Dinámico en Casa y Descanso",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Amistoso con Todos",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Boston Terrier es el célebre caballero americano de esmoquin, inconfundible por su patrón de pelaje que simula un traje de gala, su cabeza cuadrada y su mirada redonda e inteligente. Desarrollado en Estados Unidos a partir de cruces entre Bulldog y Terrier, se ha consolidado como un perro urbano ejemplar, simpático, limpio y adaptado a la vida moderna. Su psicología destaca por un temperamento ecuánime, un umbral de estimulación medio, alta resiliencia emocional y una amabilidad genuina.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es divertido, educado, dulce, dócil, inteligente y caracterizado por un fino sentido del humor. El Boston Terrier posee una personalidad equilibrada que combina momentos de juego entusiasta con periodos de descanso apacible. Rara vez ladra sin motivo, siendo un perro de modales ejemplares en la vivienda. Muestra una sociabilidad abierta y amistosa con adultos, niños, visitas y otros perros, careciendo de agresividad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad afable, cariño cercano y gran adaptabilidad con su grupo familiar. El Boston Terrier adora participar en las actividades del hogar, buscando el contacto afectuoso sin resultar agobiante. Su adiestramiento es fluido y agradable gracias a su inteligencia cooperativa; responde de forma excelente al refuerzo positivo, las recompensas en juego y la amabilidad, requiriendo una guía serena y coherente."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una convivencia doméstica modélica por su limpieza, silencio, comportamiento educado y tamaño práctico para pisos urbanos. Es un compañero de vida tremendamente divertido, cariñoso y paciente con los niños, cuyo pelaje corto requiere un mantenimiento facilísimo. Su carácter amistoso con todo el mundo, su expresividad facial encantadora y su adaptabilidad a la vida moderna lo convierten en un perro familiar sensacional."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su estructura facial braquicefálica lo hace vulnerable a los golpes de calor y al cansancio excesivo en días calurosos, exigiendo precauciones estivales. Sus grandes ojos prominentes requieren atención para prevenir irritaciones o arañazos durante sus paseos por zonas de vegetación. Asimismo, puede presentar propensión a ronquidos nocturnos suaves o flatulencias si no recibe una dieta equilibrada de alta digestibilidad."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la ejecución de trucos domésticos, juegos de pelota y rutinas de obediencia urbana por su mente despierta y deseo de agradar. Destaca en pruebas de agilidad adaptada para razas pequeñas y en terapia de acompañamiento por su carácter afable y simpático. Su capacidad para mantener modales perfectos en lugares públicos lo convierte en un perro de compañía en ciudad insuperable."
        }
      ],
      "imageUrl": "/images/breeds/boston-terrier.webp",
      "origen": "Estados Unidos"
    },
    {
      "id": "borzoi",
      "breed": "Borzoi (Galgo Ruso)",
      "title": "Borzoi: La Aristocracia Escultórica de la Estepa",
      "epithet": "La Aristocracia Escultórica",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Lebreles (Desapego y Movimiento)",
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Carrera",
        "Caza visual",
        "Reposo"
      ],
      "traits": [
        "Silencio",
        "Elegancia",
        "Reserva",
        "Velocidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto en Reposo, Nulo ante Presas",
        "motivacion_intrinseca": "Sprint Exclusivo y Descanso Silencioso",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Extremadamente Reservado e Indiferente",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Borzoi o Galgo Ruso es la personificación de la aristocracia canina, reconocido por su silueta estilizada, rostro alargado y suntuoso pelaje sedoso. Desarrollado por la nobleza zarista para la caza de lobos y liebres en las vastas estepas, combina velocidad explosiva en carrera con calma monacal en interiores. Su psicología destaca por un temperamento reservado, silencioso e independiente, resiliencia elevada y nobleza serena.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es independiente, educado, digno, silencioso y caracterizado por una reserva natural que evita estridencias en el día a día. En el hogar, el Borzoi se comporta con la tranquilidad de un felino gigante, descansando plácidamente sin causar molestias ni emitir ladridos. Muestra una actitud educada e indiferente hacia personas extrañas, manteniendo siempre una distancia prudente, refinada y serena."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de afecto discreto, lealtad serena y respeto mutuo con su guía y familia, sin recurrir a demandas insistentes de atención física. El Galgo Ruso no es un perro de obediencia servil ni repetición monótona. Su adiestramiento debe guiarse mediante métodos positivos y paciencia, comprendiendo su alta independencia cognitiva y evitando correcciones duras que dañen su sensibilidad."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un comportamiento doméstico de una pulcritud y silencio admirables, siendo un habitante del hogar que apenas se hace notar cuando descansa. Su belleza plástica aporta una presencia aristocrática única al entorno familiar. Es un perro pacífico que no genera conflictos con otros caninos. Para tutores tranquilos que valoran la serenidad y la independencia, representa una opción de convivencia idónea."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su potente instinto de caza por persecución visual significa que ante el movimiento de un animal pequeño en campo abierto arrancará en sprint fulgurante, siendo difícil detenerlo mediante llamada verbal. Requiere pasear en áreas cercadas y seguras cuando se le suelta. Además, su gran tamaño necesita camas amplias, mientras que su fino pelaje sedoso exige cepillado continuo para evitar enredos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como velocista excepcional de persecución en distancias intermedias, combinando zancada elástica de gran amplitud con aceleración impresionante. Posee una visión periférica y telescópica sumamente aguda para detectar movimientos a largas distancias. Destaca además en carreras de lebreles en pista y señuelo artificial, mostrando una plasticidad gimnástica prodigiosa y una conducta doméstica higiénica que armoniza la convivencia familiar."
        }
      ],
      "imageUrl": "/images/breeds/borzoi.webp",
      "origen": "Rusia"
    },
    {
      "id": "galgo-espanol",
      "breed": "Galgo Español",
      "title": "Galgo Español: La Nobleza Silenciosa de los Campos",
      "epithet": "La Nobleza Silenciosa de los Campos",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Lebreles (Desapego y Movimiento)",
        "Apego Frágil Afiliativo"
      ],
      "motivations": [
        "Carrera",
        "Reposo",
        "Afecto"
      ],
      "traits": [
        "Timidez noble",
        "Silencio",
        "Dulzura",
        "Velocidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio en Casa, Nulo en Carrera",
        "motivacion_intrinseca": "Sprint en Abierto y Sofá Cálido",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Dulce y Cauteloso pero Pacifico",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Galgo Español es el atleta milenario de la península ibérica, célebre por su silueta enjuta, mirada dulce y nobleza silenciosa. Criado históricamente para la carrera y la caza de liebres en campos abiertos, posee un corazón atlético y aceleración asombrosa. Su psicología combina delicadeza doméstica con un impulso de sprint libre, umbral bajo en carrera, sociabilidad pacífica y descanso constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es humilde, reservado, dulce, silencioso y marcado por una timidez noble que evita cualquier conflicto. En la casa es la serenidad personificada, pasando gran parte de la jornada durmiendo plácidamente en camas mullidas junto a sus tutores. El Galgo Español no manifiesta agresividad hacia personas ni caninos, relacionándose con prudencia, respeto y gran calma en el entorno."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un apego profundo, sutil y reconfortante con sus cuidadores, expresando su afecto a través de miradas tiernas y presencia calmada. Es un perro sumamente sensible que necesita un trato respetuoso, cariñoso y empático. Su adiestramiento debe basarse en la motivación positiva y la paciencia, ya que cualquier grito o método coercitivo lo asusta y destruye su confianza con rapidez."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una convivencia hogareña llena de paz, sin ladridos ni comportamientos destructivos, siendo uno de los perros más tranquilos en interiores. Su manto fino de poco mantenimiento es sumamente limpio y libre de olores. Además, es un perro muy pacífico con otros caninos, adaptándose magníficamente a pisos de ciudad si se le brindan paseos diarios y camas cálidas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su marcado instinto de caza por persecución visual exige prudencia al soltarlo en espacios abiertos que no estén vallados, ya que perseguirá presas ignorando la llamada verbal. Al poseer capa fina de piel y escasa grasa corporal, es sensible al frío de invierno y al calor extremo, requiriendo abrigos adecuados. Algunos ejemplares rescatados necesitan socialización gradual para superar miedos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca como corredor de resistencia y velocidad sobresaliente en terreno rústico y desigual, capaz de realizar giros cerrados a gran velocidad persiguiendo un señuelo. Posee una visión panorámica privilegiada para detectar estímulos en movimiento. En el ámbito deportivo, brilla en carreras de coursing. En el hogar, su habilidad distintiva es brindar un acompañamiento silencioso, afectuoso e higiénico en la convivencia."
        }
      ],
      "imageUrl": "/images/breeds/galgo-espanol.webp",
      "origen": "España"
    },
    {
      "id": "greyhound",
      "breed": "Greyhound (Galgo Inglés)",
      "title": "Greyhound: El Guepardo Canino del Sofá",
      "epithet": "El Guepardo Canino del Sofá",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Lebreles (Desapego y Movimiento)",
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Carrera",
        "Reposo",
        "Confort"
      ],
      "traits": [
        "Velocidad extrema",
        "Calma doméstica",
        "Dulzura",
        "Silencio"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto en Reposo",
        "motivacion_intrinseca": "Sprint de Corta Distancia y Descanso",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Amable y Tranquilo con Todos",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Greyhound o Galgo Inglés es el velocista supremo del reino animal, capaz de alcanzar 70 km/h gracias a su poderosa musculatura y corazón atlético. A pesar de su imponente aceleración, en el hogar es conocido como el 'dormilón de 45 kilos' por su carácter sereno. Su psicología combina un umbral de estimulación alto en descanso, sprint explosivo y afabilidad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es apacible, silencioso, dulce, educado y marcado por una calma imperturbable dentro de la vivienda. El Greyhound pasa la mayor parte del día durmiendo plácidamente estirado en sofás o camas mullidas, comportándose como un compañero dócil y nada invasivo. Muestra una actitud amigable hacia personas, niños y otros perros, careciendo de agresividad y disfrutando de paseos tranquilos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de cariño apacible, lealtad constante y devoción sin estridencias hacia todos los integrantes del hogar. El Galgo Inglés disfruta de la cercanía de sus tutores, apoyando suavemente su cabeza en el regazo para pedir afecto. Su educación es sencilla debido a su docilidad natural; responde con gratitud a elogios amables, caricias y premios, mientras que correcciones bruscas son innecesarias."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un comportamiento doméstico de una tranquilidad inigualable, siendo una mascota limpia y silenciosa que rara vez ladra en casa. A pesar de su condición de atleta supremo, requiere moderada actividad diaria, conformándose con paseos tranquilos y momentos puntuales de libertad. Su carácter amigable con extraños y su pelaje corto fácil de mantener lo convierten en un compañero maravilloso."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su instinto innato de persecución visual ante animales pequeños exige precaución si hay gatos en la casa, requiriendo pruebas de compatibilidad previas. En el exterior, si divisa una presa en movimiento, acelerará a máxima velocidad ignorando las llamadas, por lo que debe soltarse solo en zonas cercadas. Además, su fina piel y escasa grasa corporal lo hacen sensible al frío."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Es el plusmarquista absoluto de la velocidad canina en sprint corto, con una potencia de aceleración y elasticidad espinal que superan a cualquier otra raza. Brilla de forma estelar en carreras de pista y coursing sobre señuelo artificial. En el plano doméstico, destaca por su habilidad para integrarse pacíficamente en la dinámica familiar, aportando una convivencia silenciosa, limpia y reconfortante."
        }
      ],
      "imageUrl": "/images/breeds/greyhound.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "whippet",
      "breed": "Whippet",
      "title": "Whippet: La Gracia Veloz en Miniatura",
      "epithet": "La Gracia Veloz en Miniatura",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Lebreles (Desapego y Movimiento)",
        "Apego Frágil Afiliativo"
      ],
      "motivations": [
        "Carrera",
        "Contacto físico",
        "Confort"
      ],
      "traits": [
        "Sensibilidad",
        "Velocidad",
        "Dulzura",
        "Silencio"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo en Movimiento",
        "motivacion_intrinseca": "Carrera de Agilidad y Cobijo en la Cama",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Muy Afable y Cariñoso",
        "independencia_cognitiva": "Media-Alta"
      },
      "summary": "El Whippet es la gracia veloz en miniatura, desarrollado en Gran Bretaña mediante el cruce entre galgos y terriers para carreras populares y caza menor. De silueta aerodinámica y mirada tierna, combina la velocidad explosiva de sus parientes lebreles con una dimensión práctica y afectuosidad desbordante. Su psicología destaca por apego afiliativo, umbral bajo en movimiento, dulzura profunda y confort.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es extremadamente sensible, dulce, cariñoso, silencioso y lleno de una delicadeza encantadora en el entorno doméstico. El Whippet en casa se comporta como un peluche mimoso que busca continuamente rincones cálidos y cobijos bajo las mantas. No emite ladridos molestos ni muestra actitudes agresivas, siendo muy educado. Sin embargo, al salir al campo, se transforma en un rayo de agilidad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de afecto estrecho, apego dulce y profunda necesidad de sentir el calor corporal de sus cuidadores. Al Whippet le encanta dormir pegado a su tutor o acurrucarse a su lado mientras descansa en el salón. Su adiestramiento es muy sencillo gracias a su docilidad y sensibilidad; responde maravillosamente al refuerzo positivo, caricias y tono suave de voz."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece un tamaño mediano ideal que facilita la convivencia en departamentos pequeños y el transporte en viajes. Es un perro sumamente limpio, casi sin olor corporal y cuyo pelaje fino apenas requiere mantenimiento. Su carácter afectuoso, silencioso y paciente lo convierte en un compañero fabuloso para familias. Su mezcla de elegancia visual y ternura cariñosa hace que convivir sea un deleite."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Al carecer de subpelo y poseer una grasa corporal mínima, es muy propenso a pasar frío en invierno, requiriendo ropa de abrigo adecuada para pasear. Su potente instinto de persecución visual ante animales pequeños puede hacer que eche a correr tras presas ignorando la llamada, por lo que exige precaución en zonas no valladas. Su sensibilidad requiere tutores afectuosos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca por una aceleración relámpago y agilidad asombrosa en distancias cortas y medias, alcanzando velocidades de hasta 55 km/h. Brilla de forma estelar en competencias de coursing, agility y carreras de lebreles. En el ámbito doméstico, su mayor destreza es brindar un contacto físico afable, una compañía silenciosa e higiénica y una capacidad única para acurrucarse plácidamente en casa."
        }
      ],
      "imageUrl": "/images/breeds/whippet.webp"
    },
    {
      "id": "afghan-hound",
      "breed": "Lebrel Afgano (Afghan Hound)",
      "title": "Lebrel Afgano: La Majestad Sedosa del Desierto",
      "epithet": "La Majestad Sedosa del Desierto",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Lebreles (Desapego y Movimiento)"
      ],
      "motivations": [
        "Libertad",
        "Carrera",
        "Autonomía"
      ],
      "traits": [
        "Independencia",
        "Soberanía",
        "Elegancia",
        "Orgullo"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Carrera Libre Autónoma y Dignidad",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Muy Distante e Indiferente a Extraños",
        "independencia_cognitiva": "Extrema"
      },
      "summary": "El Lebrel Afgano es la soberana majestad sedosa del desierto, famoso por su espectacular manto largo, porte distinguido y agilidad montañesa. Criado en la geografía accidentada de Afganistán para la caza autónoma de felinos y gazelas, combina un físico de pasarela con la resistencia rústica de un cazador primitivo. Su psicología destaca por independencia cognitiva extrema, orgullo, reserva e imprevisibilidad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es orgulloso, soberano, independiente, distante y caracterizado por una serenidad misteriosa que no busca complacer por sumisión. El Lebrel Afgano se comporta en el hogar con una calma aristocrática, observando su entorno con una mirada lejana que parece atravesar a las personas. Muestra una actitud sumamente reservada e indiferente hacia visitas extrañas, relacionándose sin agresividad pero guardando una marcada distancia."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de igual a igual basada en la fascinación mutua, el respeto silencioso y un afecto reservado que entrega a muy pocos. El Afgano no es un perro servil ni obediente en el sentido tradicional, exigiendo tutores que comprendan su naturaleza felina e independiente. Su adiestramiento requiere paciencia infinita, creatividad y motivación positiva pura, evitando cualquier tipo de imposición o gritos."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una belleza plástica deslumbrante y una presencia majestuosa que cautiva a los amantes de la estética canina. En el hogar es un habitante limpio, silencioso y tranquilo que no genera alboroto ni ladridos molestos. Su nobleza primitiva, su trote flotante de gran vistosidad y su lealtad serena hacia sus elegidos convierten la convivencia con este lebrel en una experiencia única."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su largo, denso y sedoso pelaje exige un compromiso abrumador de mantenimiento, con varias horas de cepillado meticuloso a la semana y baños regulares para evitar nudos. Su extrema independencia cognitiva hace que el control de llamada sin correa sea casi imposible si detecta un estímulo en movimiento. Tampoco es adecuado para personas que busquen un perro sumiso u obediente."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale por una agilidad física prodigiosa para negociar terrenos rocosos y desérticos a gran velocidad, utilizando sus articulaciones cadéricas flexibles para giros imposibles. Brilla de forma estelar en competencias de coursing por señuelo por su velocidad y visión telescópica. En el ámbito de exhibición, su trote flotante con la cabeza en alto y el pelaje al viento ofrece un espectáculo estético."
        }
      ],
      "imageUrl": "/images/breeds/afghan-hound.webp"
    },
    {
      "id": "saluki",
      "breed": "Saluki (Galgo Persa)",
      "title": "Saluki: La Perla del Viento de Arabia",
      "epithet": "La Perla del Viento de Arabia",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Lebreles (Desapego y Movimiento)",
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Carrera",
        "Caza visual",
        "Respeto"
      ],
      "traits": [
        "Gracejo",
        "Dignidad",
        "Velocidad de fondo",
        "Sensibilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Acoso Visual de Gacelas y Serenidad",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Reservado y Muy Digno",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Saluki o Galgo Persa es la legendaria perla del viento de Arabia, venerado históricamente por tribus beduinas como regalo divino de gracia y velocidad. Diseñado para la persecución de gacelas en las abrasadoras arenas del desierto, posee anatomía grácil, orejas plumadas y resistencia de fondo inigualable. Su psicología se rige por temperamento reservado, nobleza, resiliencia elevada y serenidad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sereno, tranquilo, limpio, reservado y caracterizado por una dignidad misteriosa que impone respeto sin agresividad. En la vivienda, el Saluki es la calma encarnada, reposando pacíficamente en lugares cómodos y aislados sin generar ruido ni desorden. Muestra una actitud distanciada e indiferente hacia personas desconocidas, pero mantiene un comportamiento pacífico y educado en todo momento dentro del hogar."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad silenciosa, profunda y sincera con su grupo familiar, expresando su afecto de forma refinada y sin caer en conductas pegajosas. El Galgo Persa respeta a sus cuidadores y busca una convivencia armoniosa basada en la confianza mutua. Su educación requiere sensibilidad, paciencia y métodos positivos suaves, comprendiendo su alta independencia cognitiva y evitando cualquier trato brusco o impositivo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un comportamiento doméstico de una pulcritud e higiene ejemplares, siendo un animal silencioso que no ladra en casa. Su belleza oriental, sus orejas plumadas y su estampa liviana brindan una presencia estética fascinante al hogar. Es un perro sumamente pacífico que no busca pleitos con otros caninos, ofreciendo una compañía fiel, serena y profundamente agradecida a sus tutores."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su potente instinto de persecución visual ante animales pequeños exige mantenerlo sujeto con correa en entornos no cercados, ya que saldrá corriendo tras presas potenciales ignorando las llamadas verbales. Su anatomía delgada y baja grasa corporal lo hacen sensible al frío intenso y a superficies duras para dormir. Además, requiere un cepillado periódico en los flecos de orejas y cola."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como un galgo de resistencia inigualable en carrera de larga distancia sobre terrenos secos y arenosos, manteniendo altas velocidades donde otros lebreles se agotan. Posee una vista privilegeda de gran alcance para detectar presas lejanas. En deportes caninos, destaca brillantemente en pruebas de coursing sobre señuelo artificial por su combinación única de velocidad, resistencia de fondo y ligereza corporal."
        }
      ],
      "imageUrl": "/images/breeds/saluki.webp",
      "origen": "Oriente Medio"
    },
    {
      "id": "irish-wolfhound",
      "breed": "Irish Wolfhound (Lobero Irlandés)",
      "title": "Lobero Irlandés: El Gigante Amable de la Galia",
      "epithet": "El Gigante Amable de la Galia",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda",
        "Lebreles (Desapego y Movimiento)"
      ],
      "motivations": [
        "Afecto",
        "Reposo",
        "Auxilio"
      ],
      "traits": [
        "Gentileza",
        "Soberanía",
        "Calma",
        "Poder contenido"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto",
        "motivacion_intrinseca": "Compañía Pacífica y Galope Noble",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Pacífico y Tolerante con Todos",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Irish Wolfhound o Lobero Irlandés es el gigante amable de la Galia y una de las razas más altas, alcanzando 90 cm a la cruz. Criado ancestralmente para la caza de lobos y alces en la verde Irlanda, encarna la máxima 'cordero en casa, león en la caza'. Su psicología destaca por poder contenido, gentileza, umbral alto y benevolencia.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es pacífico, extremadamente dulce, sereno, noble y poseedor de un autocontrol sorprendente en todas sus acciones. A pesar de su imponente tamaño corporal, el Lobero Irlandés no manifiesta agresividad hacia las personas ni busca conflictos con otros animales. En el hogar es la calma hecha perro, moviéndose con cuidado y pasando largos ratos descansando tranquilamente en camas mullidas."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de afecto profundo, lealtad entrañable y cariño sereno con su familia humana. Al Lobero Irlandés le encanta recostar su enorme cabeza o apoyarse suavemente contra las piernas de sus tutores para pedir mimos. Su educación es fluida debido a su docilidad y sensibilidad; responde maravillosamente a la motivación positiva y palabras amables, sufriendo ante la dureza."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una presencia majestuosa y una bondad infinita que transforma el ambiente del hogar en un espacio de paz absoluta. Es un perro sumamente paciente y tolerante con todos los miembros de la casa, actuando con delicadeza. A pesar de su enorme corpulencia, no es hiperactivo en casa y su pelaje duro requiere un mantenimiento sencillo de cepillado periódico y bañado."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su gigantesco volumen físico requiere espacios habitables amplios, vehículos adaptados para su transporte y un presupuesto financiero considerable en alimentación de alta calidad y cuidados veterinarios. Trágicamente, al igual que ocurre con otras razas de talla gigante, posee una esperanza de vida sensiblemente más reducida que la media canina. Además, requiere supervisión rigurosa durante su desarrollo óseo para prevenir patologías."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como un corredor de potencia y galope elástico imponente, capaz de cubrir distancias masivas a gran velocidad con zancadas colosales. Posee una fuerza de contención natural disuasoria insuperable combinada con un carácter apacible. En el hogar, su habilidad principal es brindar una compañía afectuosa, paciente y serena que llena de paz la convivencia familiar, siendo un embajador noble."
        }
      ],
      "imageUrl": "/images/breeds/irish-wolfhound.webp",
      "origen": "Irlanda"
    },
    {
      "id": "italian-greyhound",
      "breed": "Pequeño Lebrel Italiano (Piccolo Levriero)",
      "title": "Pequeño Lebrel Italiano: La Escultura de Cristal y Viento",
      "epithet": "La Escultura de Cristal y Viento",
      "fciGroup": "Grupo 10: Lebreles",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Apego Frágil Afiliativo",
        "Lebreles (Desapego y Movimiento)"
      ],
      "motivations": [
        "Contacto físico",
        "Confort",
        "Afecto"
      ],
      "traits": [
        "Sensibilidad",
        "Ternura",
        "Velocidad mini",
        "Fragilidad aparente"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Calor Humano y Piques de Carrera",
        "resiliencia_emocional": "Baja-Media",
        "sociabilidad": "Muy Afectuoso pero Asustadizo con Ruidos",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Pequeño Lebrel Italiano es la refinada escultura de cristal y viento del renacimiento, admirado por su silueta grácil, movimientos etéreos y devoción amorosa. De origen milenario y predilecto entre la nobleza europea, combina la velocidad miniatura de un lebrel con la ternura delicada de un perro de regazo. Su psicología destaca por apego afiliativo, sensibilidad emocional y confort.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sensible, afectuoso, alegre, refinado y caracterizado por una delicadeza etérea en sus movimientos. El Piccolo Levriero es una joya de compañía que busca estar siempre cerca de sus cuidadores, sintiendo devoción por el confort. En el hogar se comporta de forma limpia y cariñosa, aunque puede mostrar cierta timidez ante desconocidos y ruidos estruendosos, prefiriendo la calma."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de apego estrecho, ternura incondicional y profunda necesidad de estar en contacto físico directo con su tutor. Le fascina acurrucarse bajo las cobijas de la cama, descansar en el regazo y recibir caricias constantes. Su adiestramiento requiere una suavidad extrema y refuerzo positivo suave, ya que cualquier tono de voz duro o impaciencia lo asusta."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un afecto entrañable, una estética refinada y un tamaño diminuto sumamente práctico para pisos de ciudad. Es un perro excepcionalmente limpio, sin olor corporal y cuyo manto corto requiere mínimos cuidados de aseo. Su dulzura constante, su trote elativo de alta gracia y su profunda devoción cariñosa convierten a este pequeño lebrel en una mascota verdaderamente encantadora."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Sus finas y delicadas extremidades requieren cuidados especiales y atentos durante la etapa de cachorro para evitar fracturas óseas por saltos desafortunados desde muebles altos. Es un perro extremadamente friolero que sufre con las bajas temperaturas, necesitando ropa de abrigo adecuada en invierno y buscando continuamente fuentes de calor. Además, su aprendizaje de la higiene del baño puede requerir tiempo."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como un atleta miniatura de aceleración y galope elástico asombroso, capaz de alcanzar velocidades de hasta 40 km/h a pesar de su diminuto tamaño. Destaca en competencias de agility en categoría toy y coursing con señuelo artificial. En el hogar, su habilidad distintiva es brindar un cariño reconfortante, buscar cobijo bajo cobijas con extrema gracia y ser cariñoso."
        }
      ],
      "imageUrl": "/images/breeds/italian-greyhound.webp"
    },
    {
      "id": "pastor-de-anatolia",
      "breed": "Pastor de Anatolia (Kangal)",
      "title": "Kangal: El Guardián de los Toros de Turquía",
      "epithet": "El Guardián de Turquía",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Territorial Absoluta",
        "Guardia Ancestral de Tiempo Largo"
      ],
      "motivations": [
        "Territorialidad",
        "Custodia"
      ],
      "traits": [
        "Inflexibilidad",
        "Poder",
        "Silencio"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Custodia de Rebaño",
        "resiliencia_emocional": "Extrema",
        "sociabilidad": "Inflexible con Intrusos",
        "independencia_cognitiva": "Extrema"
      },
      "summary": "El Pastor de Anatolia o Kangal es un coloso guardián de rebaños originario de las mesetas turcas, reconocido mundialmente por poseer la mordida más potente de la especie canina. Moldado por siglos de selección rústica para defender el ganado frente a lobos y osos, combina una osamenta pesada con agilidad funcional y resistencia al clima extremo. Su psicología está marcada por un instinto de protección territorial absoluto, serenidad majestuosa, independencia cognitiva extrema y una determinación inflexible ante amenazas reales.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente reservado, sereno, paciente, observador y dotado de un temple imperturbable mientras no detecte peligro en su perímetro. El Kangal pasa el día vigilando su territorio desde posiciones elevadas con aparente calma, pero manteniendo una alerta constante sobre el entorno. No muestra agitación ni ladridos innecesarios en su rutina diaria. Ante la presencia de extraños o intrusos no autorizados, su actitud se vuelve rígida, disuasoria e inflexible, protegiendo su dominio con firmeza soberana."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad noble, devoción protectora y respeto ancestral hacia su guía y la familia que considera bajo su tutela. El Pastor de Anatolia no es un perro sumiso ni obediente por simple complacencia, sino un protector autónomo que analiza las situaciones con criterio propio. Su adiestramiento requiere tutores experimentados, serenos y coherentes que se ganen su respeto a través del liderazgo tranquilo, evitando rotundamente cualquier violencia o coerción física."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un valor de custodia y seguridad territorial inigualable, siendo el guardián de rebaños y propiedades más eficaz del mundo frente a depredadores o intrusos. Su comportamiento en el hogar es silencioso, limpio y sumamente calmado cuando reconoce la normalidad del ambiente. Su rusticidad física es extraordinaria, con una salud fuerte y pocas necesidades de aseo especializado, convirtiéndolo en un protector noble, independiente y profundamente leal para entornos rurales amplios."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su dominancia territorial y extrema sospecha hacia extraños imposibilitan su adaptación a pisos urbanos o vecindarios concurridos sin espacios vallados. Si no se gestiona con conocimiento etológico desde cachorro, puede volverse peligroso e inmanejable ante visitas o personas ajenas al hogar. Además, su descomunal fuerza física y elevada independencia cognitiva requieren instalaciones de alta seguridad, junto con un manejo firme que prevenga incidentes de agresión territorial."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como guardián disuasorio y defensor activo de rebaños frente a grandes depredadores en condiciones climáticas adversas y terrenos accidentados. Posee una fuerza de presión maxilar colosal, una visión panorámica de largo alcance y la capacidad de patrullar perímetros masivos durante jornadas nocturnas prolongadas sin fatiga. En el trabajo de campo, su mayor destreza radica en neutralizar amenazas sin necesidad de conflicto físico si el intruso retrocede."
        }
      ],
      "imageUrl": "/images/breeds/pastor-de-anatolia.webp"
    },
    {
      "id": "briard",
      "breed": "Pastor de Brie (Briard)",
      "title": "Briard: Corazón Envalentonado bajo Pelaje Mop",
      "epithet": "Corazón Envalentonado",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Familia",
        "Trabajo"
      ],
      "traits": [
        "Lealtad",
        "Energía",
        "Vigilancia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Pastoreo y Guardia",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Atento con la Familia",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Pastor de Brie o Briard es un ancestral perro de trabajo francés, célebre por su abundante manto largo de aspecto rústico y un carácter equilibrado que combina valentía con sensibilidad. Desarrollado para el pastoreo y la guardia de propiedades, posee una estructura fuerte, agilidad atlética y una mirada expresiva bajo su característico flequillo. Su psicología destaca por una lealtad incondicional hacia su grupo familiar, agudeza cognitiva, instinto de protección estructurado y energía constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, alerta, valeroso, inteligente y profundamente devoto de su núcleo familiar. El Briard conserva un marcado instinto guardián que lo mantiene vigilante ante la presencia de desconocidos, mostrando reserva inicial pero sin agresividad injustificada. En el ámbito doméstico se comporta con gran afectuosidad y entusiasmo, disfrutando de las dinámicas de juego con niños. Su mente despierta procesa los cambios ambientales rápidamente, manteniéndose siempre dispuesto a participar en actividades."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de apego intenso, lealtad inquebrantable y necesidad de integración total en la vida familiar cotidiana. El Pastor de Brie necesita sentirse parte activa del grupo, sufriendo si se le aisla en un patio sin interacción. Su educación requiere firmeza respetuosa, consistencia y métodos de motivación positiva, ya que es una raza sensible que responde mal a la brusquedad, pero aprende con enorme rapidez cuando confía."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Ofrece una combinación perfecta entre un excelente perro de guardia disuasorio y un compañero familiar afectuoso, alegre y protector con los niños. Su inteligencia funcional facilita el aprendizaje de tareas complejas, deportes caninos y rutinas de obediencia. Es un perro versátil, enérgico y rústico que aporta vitalidad al hogar, mostrando un compromiso afectuoso constante con todas las personas a quienes considera miembros de su manada."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su abundante pelaje largo exige un compromiso constante de cepillado meticuloso varias veces por semana para evitar nudos dolorosos y acumulación de suciedad. Requiere un nivel de ejercicio físico y estimulación mental elevado para prevenir la frustración o comportamientos destructivos por aburrimiento. Además, su marcada tendencia protectora exige una socialización temprana rigurosa para evitar que se vuelva excesivamente receloso ante visitas o personas extrañas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Destaca por sus aptitudes tradicionales para el pastoreo y la conducción de rebaños mediante movimientos precisos y control territorial. Posee una gran agilidad física, potencia de salto y resistencia atlética que lo hacen sobresalir en pruebas de agility, obediencia y trabajo de salvamento. Asimismo, sus cualidades innatas para la guardia disuasoria y la detección sonora lo convierten en un protector doméstico atento, valiente y sumamente confiable."
        }
      ],
      "imageUrl": "/images/breeds/briard.webp"
    },
    {
      "id": "pastor-de-los-pirineos",
      "breed": "Pastor de los Pirineos",
      "title": "Pastor de los Pirineos: La Centella de la Montaña",
      "epithet": "La Centella de la Montaña",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Agilidad",
        "Trabajo"
      ],
      "traits": [
        "Vivacidad",
        "Astucia",
        "Nervio"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Mover Ganado",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Reservado",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Pastor de los Pirineos es el más pequeño y vivaz de los perros de pastor franceses, famoso por su agilidad felina, mirada astuta y energía incansable. Moldado en la alta montaña para la conducción de rebaños en terrenos escarpados, posee una anatomía ligada al nervio, ligereza física y gran resistencia. Su psicología destaca por un umbral de estimulación bajo, una inteligencia brillante orientada al trabajo y una hiperconexión constante con su guía.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vivaz, despierto, astuto, alegre e hiperactivo si no dispone de tareas que canalicen su inagotable energía mental. El Pastor de los Pirineos vive en permanente estado de alerta, reaccionando con rapidez de centella ante cualquier estímulo del entorno. Muestra una actitud reservada e indecisa frente a personas ajenas a su círculo, prefiriendo mantener la distancia hasta evaluar la situación con su inteligencia analítica habitual."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de lealtad obsesiva, devoción absoluta e intensa comunicación corporal con su tutor de referencia. Este pequeño pastor vive pendiente de cada gesto, mirada o palabra de su guía, buscando complacerlo en todo momento. Su educación requiere paciencia, sensibilidad y un adiestramiento positivo dinámico, evitando correcciones bruscas que puedan dañar su temperamento nervioso, mientras se potencia su gran deseo de aprendizaje."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un entusiasmo desbordante, una inteligencia prodigiosa y una capacidad de aprendizaje que deslumbran en cualquier disciplina deportiva o de trabajo. Es un compañero inseparable para amantes del senderismo de montaña, canicross y actividades al aire libre que exijan resistencia física. Su tamaño compacto facilita su transporte, mientras que su devoción afectuosa hacia la familia lo convierte en un amigo leal, simpático y muy divertido."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su bajo umbral de estimulación y alta reactividad pueden desencadenar ladridos compulsivos o nerviosismo si carece de ejercicio físico diario y retos cognitivos exigentes. No es adecuado para personas sedentarias o pisos sin actividad constante, ya que el aburrimiento deteriora su equilibrio emocional. Además, su reserva hacia extraños requiere una socialización temprana cuidada para evitar conductas miedosas o desconfiadas en entornos urbanos concurridos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale de forma estelar en pruebas de agility por su impresionante velocidad de giro, aceleración, ligereza física y capacidad de anticipación a las órdenes de su guía. Es un especialista nato en la conducción de ganado en pendientes pronunciadas y pasos estrechos de montaña. Destaca también en obediencia deportiva, aprendizaje de trucos complejos y juegos de disco volador gracias a su reflejo atlético único."
        }
      ],
      "imageUrl": "/images/breeds/pastor-de-los-pirineos.webp"
    },
    {
      "id": "bobtail",
      "breed": "Old English Sheepdog (Bobtail)",
      "title": "Bobtail: El Peluche Gigante Pastor",
      "epithet": "El Peluche Gigante Pastor",
      "fciGroup": "Grupo 1: Perros de Pastor y Boyeros",
      "akcGroup": "Herding Group",
      "archetypes": [
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Familia",
        "Juego"
      ],
      "traits": [
        "Alegría",
        "Dulzura",
        "Paciencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Juego y Pastoreo",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Excelente",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Old English Sheepdog o Bobtail es el simpático gigante bonachón del grupo de pastor, famoso por su denso manto frondoso gris y blanco y su característico ladrido de tono hueco. Desarrollado en Gran Bretaña para la conducción de ganado al mercado, combina una corpulencia fuerte con una agilidad alegre y juguetona. Su psicología destaca por una gran resiliencia emocional, dulzura inagotable, paciencia infinita con los niños y una sociabilidad abierta con todos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es jovial, apacible, cariñoso, extrovertido y dotado de un espíritu juguetón que conserva hasta edad avanzada. El Bobtail aborda la vida cotidiana con un entusiasmo amigable que contagia alegría a toda la familia. No muestra agresividad ni tendencias territoriales problemáticas, relacionándose con niños, visitas y otros caninos con suma paciencia. Su andar contoneado y su expresión afectuosa reflejan un carácter estable, equilibrado y noble."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de afecto profundo, lealtad constante y devoción entrañable con todos los integrantes del hogar. Al Bobtail le apasiona sentirse rodeado de sus seres queridos y participar en dinámicas de juego familiar. Su educación es fluida y gratificante cuando se emplean métodos de refuerzo positivo y paciencia, respondiendo maravillosamente al afecto y las caricias, ya que busca agradar de manera natural a sus tutores."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un carácter extraordinariamente amigable, tierno y paciente que lo convierte en uno de los mejores compañeros para familias con niños pequeños. Es un perro muy dócil, equilibrado y sin malicia, que tolera con calma el alboroto doméstico. Su adaptabilidad a la convivencia, su sociabilidad con desconocidos y su naturaleza afectuosa hacen que tener un Bobtail llene el hogar de momentos alegres y reconfortantes."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su profuso y largo pelaje requiere un compromiso de acicalado abrumador, exigiendo cepillados meticulosos casi diarios para prevenir nudos masivos y mantener la higiene en hocico y patas. Además, durante paseos en días lluviosos o por el campo, su manto arrastra barro, ramas y suciedad al hogar. Requiere también ejercicio moderado a diario para evitar el sobrepeso y canalizar su energía juguetona en interiores."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale históricamente en la conducción de ganado bovino y ovino mediante empuje corporal suave y ladridos disuasorios característicos. Posee una gran aptitud para deportes de cobro, obediencia básica y actividades recreativas en familia. Asimismo, su enorme paciencia y dulzura innata lo convierten en un perro excepcional para labores de terapia asistida y apoyo emocional con personas de todas las edades."
        }
      ],
      "imageUrl": "/images/breeds/bobtail.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "hovawart",
      "breed": "Hovawart",
      "title": "Hovawart: El Guardián de la Granja",
      "epithet": "El Guardián de la Granja",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Custodia",
        "Familia"
      ],
      "traits": [
        "Equilibrio",
        "Lealtad",
        "Nivel de alerta"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio-Alto",
        "motivacion_intrinseca": "Vigilancia de Finca",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Reservado",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Hovawart es un rústico e imponente perro de trabajo alemán cuyo nombre significa literalmente 'guardián de la granja'. Criado históricamente en la Selva Negra para la custodia de propiedades y ganado, posee una silueta atlética, pelaje ondulado resistente y un temperamento de gran equilibrio emocional. Su psicología se rige por una protección territorial estructurada, lealtad incondicional hacia su familia, discreción en la guardia y alta resiliencia ante situaciones estresantes.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es equilibrado, seguro de sí mismo, sereno, valeroso y dotado de un nivel de alerta natural muy desarrollado. El Hovawart no es un perro reactivo ni propenso a ladrar sin motivo; observa su entorno con calma analítica antes de intervenir. Muestra una actitud reservada e indiferente ante extraños, pero mantiene una conducta profundamente afectuosa, dulce y relajada con los miembros de su grupo familiar."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad abnegada, protección constante y apego respetuoso con sus cuidadores de referencia. El Hovawart busca la cercanía de sus tutores sin resultar empalagoso, comportándose como un guardián atento. Su educación requiere una guía firme, serena y coherente que utilice el refuerzo positivo, ya que posee una alta independencia cognitiva que rechaza los métodos autoritarios o la brusquedad sin sentido."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una protección territorial disuasoria de altísima eficacia y fiabilidad, siendo un perro de guardia inteligente que distingue perfectamente situaciones de amenaza real. Su gran equilibrio emocional y paciencia lo convierten en un excelente compañero para familias activas. Es un perro rústico, saludable y polivalente, capaz de destacar en múltiples tareas de trabajo, salvamento o custodia mientras mantiene una convivencia hogareña apacible."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su madurez tardía, tanto física como mental, requiere paciencia durante los primeros años para consolidar su adiestramiento. Si no recibe suficiente estimulación mental y física, su instinto de guardia puede canalizarse en una sobreprotección territorial excesiva o conductas destructivas por aburrimiento. Requiere también tutores experimentados que sepan canalizar su independencia cognitiva sin recurrir a correcciones autoritarias."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la custodia de propiedades, vigilancia de fincas rústicas y protección de familias frente a todo tipo de intrusos. Posee aptitudes excelentes para el rastreo olfativo de personas desaparecidas, trabajo de salvamento en escombros y disciplinas de defensa deportiva como IGP por su versatilidad física, resistencia al esfuerzo y mente sumamente equilibrada en situaciones complejas."
        }
      ],
      "imageUrl": "/images/breeds/hovawart.webp"
    },
    {
      "id": "leonberger",
      "breed": "Leonberger",
      "title": "Leonberger: El León Dulce de Baden",
      "epithet": "El León Dulce de Baden",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Afecto",
        "Compañía"
      ],
      "traits": [
        "Nobleza",
        "Paciencia",
        "Bondad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto",
        "motivacion_intrinseca": "Afecto y Convivencia",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Extraordinaria",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Leonberger es el gigante majestuoso de Baden-Wurtemberg, creado en el siglo XIX para asemejarse al león del escudo municipal de Leonberg mediante cruces de Terranova, San Bernardo y Perro de Montaña de los Pirineos. De imponente melena, osamenta masiva y máscara negra expresiva, combina el aspecto de una fiera con un corazón profundamente pacífico. Su psicología destaca por un umbral de estimulación muy alto, paciencia infinita y nobleza entrañable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es extremadamente sereno, bondadoso, paciente, apacible y dotado de un autocontrol asombroso en cualquier entorno. El Leonberger no se altera fácilmente con ruidos o movimientos bruscos, manteniendo una calma imperturbable en la casa. Muestra una sociabilidad abierta y amigable con adultos, niños, visitas y otros animales, careciendo de agresividad. Se comporta como un gigante afectuoso que disfruta de la compañía y la paz doméstica."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de lealtad noble, afecto profundo y necesidad de convivencia cercana con todos los miembros de la familia. El Leonberger adora sentirse incluido en la vida cotidiana, apoyando suavemente su gran cabeza en sus tutores para pedir mimos. Su adiestramiento es fluido debido a su deseo de agradar y su carácter dócil, respondiendo de maravilla a palabras amables, caricias y recompensas en un ambiente amoroso."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una presencia imponente y una bondad gigantesca que llena el hogar de tranquilidad, seguridad y cariño incondicional. Es un perro fantásticamente paciente con los niños, tolerando sus juegos con una dulzura conmovora. A pesar de su enorme corpulencia, es una mascota muy equilibrada en interiores, limpia y cuyo carácter amigable facilita la interacción social durante paseos y reuniones familiares."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su colosal tamaño corporal requiere espacios amplios en la vivienda, vehículos adaptados para su transporte y un presupuesto elevado en alimentación y cuidados veterinarios. Produce abundante muda de pelo que exige cepillados frecuentes para controlar el pelo suelto en casa. Además, como ocurre con las razas molosas de gran volumen, posee una esperanza de vida más corta y es sensible al golpe de calor estival."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale por sus aptitudes naturales para el salvamento acuático y el tiro de carros pesados gracias a su fuerza física muscular y resistencia en agua. Posee una gran capacidad disuasoria por su simple volumen de león, sin requerir conductas agresivas. Destaca también como perro de terapia y apoyo emocional por su temple sereno, paciencia inagotable y afectuosidad dócil con personas vulnerables."
        }
      ],
      "imageUrl": "/images/breeds/leonberger.webp",
      "origen": "Alemania"
    },
    {
      "id": "landseer",
      "breed": "Landseer",
      "title": "Landseer: El Guardián Blanco y Negro del Agua",
      "epithet": "El Guardián del Agua",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Contención Pesada / Calma Profunda"
      ],
      "motivations": [
        "Nadar",
        "Auxilio"
      ],
      "traits": [
        "Bondad",
        "Fuerza",
        "Gentileza"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Rescate y Nado",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Pacífica",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Landseer es el imponente guardián blanco y negro de las zonas costeras y fluviales, inmortalizado por el pintor Sir Edwin Landseer por su heroico instinto de salvamento. Pariente cercano del Terranova, posee una alzada ligeramente más alta, estructura fuerte y un tupido pelaje impermeable. Su psicología se rige por una paciencia infinita, pasional atracción por el agua, vocación de auxilio, umbral de estimulación alto y bondad doméstica serena.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es pacífico, noble, dócil, amigable y caracterizado por una calma majestuosa en todas sus interacciones diarias. El Landseer observa el mundo con una benevolencia tranquila, sin mostrar nerviosismo ni agresividad hacia personas o caninos. Le apasiona la naturaleza y especialmente los entornos acuáticos, donde despliega una alegría entusiasta. En casa se comporta con serenidad, buscando la compañía de su familia con delicadeza."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad sincera, afecto constante y devota protección hacia su grupo humano, mostrando un instinto natural de cuidado. El Landseer disfruta formando parte activa del día a día familiar, acompañando a sus tutores con una presencia reconfortante. Su adiestramiento resulta sencillo gracias a su docilidad y deseo de colaborar, respondiendo excelentemente a métodos motivacionales positivos y al trato cariñoso y constante."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un comportamiento noble, protector y pacifico que brinda una gran sensación de seguridad y armonía en la vivienda. Es un perro excepcionalmente gentil y paciente con los niños, actuando con sumo cuidado dada su corpulencia. Su amor por el agua y su carácter amigable hacen que sea un compañero de aventuras al aire libre maravilloso para familias amantes de la naturaleza y los deportes acuáticos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su gran tamaño y denso pelaje bicapa requieren cuidados constantes de cepillado para evitar nudos y controlar el desprendimiento de pelo. Tras baños en lagos o ríos, su manto tarda horas en secar, requiriendo secado manual para prevenir olores en casa. Además, su volumen corporal exige espacios habitables amplios, alimentación de alta calidad y supervisión del ejercicio intenso en días de calor estival."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista supremo e insuperable en salvamento acuático y rescate de personas en mares, ríos y lagos agitados. Posee patas con membranas interdigitales muy desarrolladas que le otorgan una propulsión anfibia prodigiosa. Destaca además en el arrastre de cargas pesadas en nieve o tierra, y en labores de terapia emocional gracias a su temperamento paciente, dócil y protector."
        }
      ],
      "imageUrl": "/images/breeds/landseer.webp"
    },
    {
      "id": "dogo-de-palma",
      "breed": "Ca de Bou (Dogo Mallorquín)",
      "title": "Ca de Bou: El Guardián Balear",
      "epithet": "El Guardián Balear",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Territorial Absoluta"
      ],
      "motivations": [
        "Custodia",
        "Defensa"
      ],
      "traits": [
        "Fuerza",
        "Seriedad",
        "Valentía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Guarda de Finca",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Firme con Extraños",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Ca de Bou o Dogo Mallorquín es el moloso autóctono de las Islas Baleares, criado históricamente para la guarda de fincas, manejo de ganado vacuno y defensa territorial. De cabeza masiva, pecho ancho y musculatura potente, combina una presencia física disuasoria con un carácter firme y seguro. Su psicología destaca por un instinto de custodia territorial absoluto, seriedad ante extraños, resiliencia emocional elevada y lealtad tranquila hacia su tutor.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es serio, sereno, seguro de sí mismo, valeroso y dotado de una marcada calma cuando no hay amenazas presentes. El Ca de Bou no es un perro ruidoso ni impulsivo; analiza las situaciones con cabeza fría antes de reaccionar. Muestra una actitud reservada, firme y vigilante ante personas extrañas, mientras que en la intimidad del hogar se transforma en un compañero apacible, cariñoso y limpio."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de lealtad inquebrantable, devoción protectora y respeto profundo hacia su guía y la familia cercana. El Dogo Mallorquín reconoce a un tutor equilibrado y busca complacerlo activamente con una conducta obediente. Su adiestramiento exige experiencia, firmeza serena y socialización constante basada en refuerzo positivo, rechazando métodos violentos que puedan arruinar su temperamento o generar desconfianza."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un valor de guarda territorial e integridad física incomparable, siendo un disuasor natural implacable contra intrusos o robos en fincas. Es un perro muy tranquilo, silencioso y limpio en la vivienda, que no causa destrozos si está bien ejercitado. Su pelaje corto requiere muy poco mantenimiento y su fidelidad devota por la familia lo convierte en un protector noble y seguro de su hogar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su gran potencia física y dominancia innata requieren un manejo firme y experimentado, no siendo adecuado para tutores novatos. Muestra poca tolerancia hacia otros perros del mismo sexo si no se le socializa rigurosamente desde cachorro. Además, su fuerte sentido territorial exige cierres de seguridad adecuados en la propiedad para evitar incidentes con personas ajenas que intenten acceder sin permiso."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la guarda y custodia de fincas, propiedades rústicas y bienes contra todo tipo de intrusiones sin mostrar titubeo. Posee una potencia maxilar de agarre sobresaliente y una resistencia física destacada para el trabajo de defensa. En el hogar, su principal habilidad radica en brindar una vigilancia silenciosa, disuasoria y equilibrada que garantiza la tranquilidad de sus tutores en todo momento."
        }
      ],
      "imageUrl": "/images/breeds/dogo-de-palma.webp"
    },
    {
      "id": "pinscher-mediano",
      "breed": "Pinscher Alemán",
      "title": "Pinscher Alemán: La Elegancia Atlética",
      "epithet": "La Elegancia Atlética",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Working Group",
      "archetypes": [
        "Protección Estructurada Moderna"
      ],
      "motivations": [
        "Alerta",
        "Trabajo"
      ],
      "traits": [
        "Vivacidad",
        "Velocidad",
        "Valentía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Guarda Ligera",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Alerta con Extraños",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Pinscher Alemán es la elegante cepa mediana original de la familia Pinscher, célebre por sus líneas musculosas, manto corto brillante y mirada despierta. Criado en granjas centroeuropeas para la caza de roedores y aviso de intrusos, combina la agilidad de un atleta con la valentía de un perro de guardia. Su psicología destaca por un umbral de estimulación bajo, vivacidad constante, inteligencia ágil y un instinto de alerta bien estructurado.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vivaz, despierto, valeroso, juguetón, inteligente y caracterizado por un estado de alerta continuo ante estímulos ambientales. El Pinscher Alemán posee un intelecto agudo que aprende ruidos y patrones con rapidez. Muestra una actitud desconfiada y vigilante frente a personas desconocidas, ladrando para avisar la llegada de visitas, pero en el entorno familiar es sumamente afectuoso, dinámico y muy divertido."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad apasionada, colaboración cercana y apego enérgico con sus tutores de referencia. Al Pinscher Alemán le encanta participar en todas las actividades físicas del hogar y acompañar a su guía. Su adiestramiento es fluido debido a su alta inteligibilidad cognitiva, requiriendo métodos de motivación positiva, retos variados y coherencia para evitar que su astucia natural intente sobrepasar las normas establecidas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un excelente perro de alerta sonora doméstica, cuyo tamaño mediano y pelaje corto liso hacen que sea sumamente limpio y de fácil mantenimiento en piso. Su energía vital, inteligencia y simpatía llenan el hogar de momentos activos y dinámicos. Es un compañero perfecto para personas deportistas que disfruten del running, la agilidad canina y las excursiones, mostrando una fidelidad absoluta hacia su tutor."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su umbral de estimulación bajo y tendencia a la alerta sonora pueden traducirse en ladridos frecuentes si no se educa adecuadamente desde cachorro. Su alto nivel de energía física y mental requiere paseos diarios activos y juegos para evitar frustración o nerviosismo en casa. Además, su instinto cazador de roedores exige precaución en presencia de pequeñas mascotas en el hogar."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la detección olfativa y eliminación de roedores o alimañas con rapidez y precisión quirúrgica. Destaca de forma estelar en disciplinas deportivas como agility, canicross y obediencia competitiva por su velocidad, reflejos elásticos e inteligencia de trabajo. Es además un perro de aviso sonoro doméstico sumamente efectivo que detecta presencias o anomalías en el perímetro a gran distancia."
        }
      ],
      "imageUrl": "/images/breeds/pinscher-mediano.webp"
    },
    {
      "id": "pinscher-miniatura",
      "breed": "Pinscher Miniatura",
      "title": "Pinscher Miniatura: La Dinamita Guardiana en Formato Bolsillo",
      "epithet": "La Dinamita Guardiana en Formato Bolsillo",
      "fciGroup": "Grupo 2: Molosoides tipo Pinscher y Schnauzer Molosoides y Boyeros Suizos",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Terriers Instrumentales",
        "Apego Extremo (Fusión Emocional)",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Alarma",
        "Acción",
        "Atención",
        "Lealtad"
      ],
      "traits": [
        "Alerta",
        "Valentía",
        "Inteligencia",
        "Energía",
        "Tenacidad",
        "Apego"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Atencion, Vigilancia y Protección del Espacio",
        "resiliencia_emocional": "Baja",
        "sociabilidad": "Media – Evaluador y Guardián Compacto",
        "independencia_cognitiva": "Baja"
      },
      "summary": "El Pinscher Miniatura es una contradicción con patas: tamaño mínimo, energía máxima. Es actualmente el motor de conflicto, movimiento y ruido emocional de la casa. Su genética no le permite pasar desapercibido; es un perro de alta demanda emocional, diseñado para estar siempre en primer plano.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Es intrépido, desafiante y valiente hasta rozar la imprudencia. Su autoconfianza es tan sólida que ignora su tamaño real. No se percibe como un perro pequeño: se mueve, decide y enfrenta el mundo con la autoridad psicológica de un perro de 40 kilos. Su carácter es intenso, reactivo y teatral. No observa el entorno: lo confronta.Posee una inteligencia rápida pero orientada a sus propios intereses, lo que lo convierte en un perro manipulador y encantador a partes iguales."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo es de codependencia activa. No solo te ve como su humano, sino como su recurso principal, su centro de gravedad y su razón de ser. Su apego es posesivo y absorbente; necesita contacto constante, seguimiento visual y validación permanente. Es un compañero leal pero demandante, que requiere un guía con sentido del humor y firmeza. Para él, tú no eres compañía, eres misión."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su agudeza mental es sorprendente. Aprende con una rapidez casi insolente: tres repeticiones bastan para que incorpore un truco. Es un perro extremadamente atento, siempre presente y emocionalmente involucrado. Aporta una chispa constante de vida, juego y movimiento. Con él, el aburrimiento es estructuralmente imposible. Además, su valentía lo convierte en un compañero de aventuras incansable"
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "La ansiedad por separación es su punto más frágil. La distancia física o emocional la vive como una amenaza real. A esto se suma una fuerte tendencia a la protección de recursos, especialmente tu atención. Los celos no son un rasgo ocasional: son parte de su sistema operativo. Sin manejo consciente, puede escalar fácilmente en conductas demandantes o disruptivas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la detección de roedores y pequeños intrusos con una rapidez y agilidad física impresionantes. Destaca de forma estelar en competencias deportivas como agility toy y aprendizaje de trucos complejos por su agudeza cognitiva. En el hogar, su habilidad principal es ofrecer una guardia ligera y aviso sonoro sumamente efectivo, combinado con una capacidad atlética sorprendente para saltar y correr."
        }
      ],
      "imageUrl": "/images/breeds/pinscher-miniatura.webp",
      "origen": "Alemania"
    },
    {
      "id": "kerry-blue-terrier",
      "breed": "Kerry Blue Terrier",
      "title": "Kerry Blue Terrier: El Dragón Azul de Irlanda",
      "epithet": "El Dragón Azul de Irlanda",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Caza",
        "Desafío"
      ],
      "traits": [
        "Intrepidez",
        "Orgullo",
        "Versatilidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Madriguera y Guarda",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Firme con Otros Perros",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Kerry Blue Terrier es el emblemático perro de trabajo del condado de Kerry en Irlanda, famoso por su suave pelaje ondulado de tono azulado y su barba característica. Criado como cazador polivalente de alimañas, cobrador y guardián de granjas, posee un cuerpo musculoso, ágil y de porte distinguido. Su psicología combina intrepidez de terrier instrumental, resiliencia emocional muy alta, orgullo natural y devoción apasionada hacia su familia.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es valiente, alegre, decidido, orgulloso e inteligente, mostrando una gran seguridad en cada uno de sus movimientos. El Kerry Blue Terrier posee una energía inagotable y un espíritu despierto que disfruta explorando el entorno. Aunque es cariñoso y afable con las personas de su núcleo, tiende a mostrar una actitud firme y poco tolerante ante otros perros, exigiendo una presencia tranquila por parte del tutor."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una relación de lealtad absoluta, profundo afecto y compañerismo constante con los miembros de su hogar. Es un perro que adora involucrarse en las actividades familiares y defender a sus allegados si percibe peligro. Su educación requiere firmeza coherente, socialización temprana y motivación positiva, ya que su alta independencia cognitiva y fuerte personalidad rechazan los métodos autoritarios, aprendiendo mejor con retos estimulantes."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un carácter versátil y una fidelidad incondicional, siendo un excelente guardián y un compañero doméstico divertido y afectuoso. Su característico pelaje rizado no desprende pelo suelto en casa, lo que resulta ideal para personas con alergias. Es un animal fuerte, saludable y lleno de vitalidad que se adapta de maravilla a familias activas que disfruten de actividades físicas, excursiones y deportes caninos variados."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su inclinación a desafiar o no tolerar a otros perros del mismo sexo requiere supervisión estrecha y un manejo experto durante los paseos. Su pelaje suave exige cuidados de peluquería profesional, lavados y cepillados periódicos para evitar que se anude o acumule suciedad. Además, si no canaliza su potente energía diaria mediante ejercicio físico y estimulación cognitiva, puede volverse destructor o terco."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la caza de alimañas en madrigueras, cobro en agua y tareas de guarda de propiedades agrícolas por su versatilidad física. Destaca también en deportes caninos como agility, obediencia y rastreo olfativo debido a su resistencia y agilidad muscular. En el hogar, su principal destreza es brindar una protección atenta y alegre, actuando como un custodio polivalente y devoto de la familia."
        }
      ],
      "imageUrl": "/images/breeds/kerry-blue-terrier.webp",
      "origen": "Irlanda"
    },
    {
      "id": "bedlington-terrier",
      "breed": "Bedlington Terrier",
      "title": "Bedlington Terrier: El Corazón de León con Piel de Cordero",
      "epithet": "Corazón de León con Piel de Cordero",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Carrera",
        "Caza"
      ],
      "traits": [
        "Velocidad",
        "Valor",
        "Dulzura"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Carrera y Caza de Roedores",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Afectuoso",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Bedlington Terrier es el singular cazador de las minas de Northumberland en Inglaterra, célebre por su apariencia de corderito suave con cabeza arqueada y esquilado característico. A pesar de su aspecto delicado, esconde la resistencia, velocidad y valentía propia de un terrier de trabajo rústico. Su psicología combina un temperamento dulce y tranquilo en la casa con un impulso atlético de carrera, valentía noble y afectuosidad constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es apacible, afectuoso, noble, sereno en interiores y sorprendentemente audaz cuando se le presenta un reto o una presa. El Bedlington Terrier se comporta en el hogar con una elegancia tranquila, disfrutando del descanso junto a sus tutores. No es un perro buscador de conflictos, pero si se le provoca, desplegará el coraje indomable de sus ancestros mineros para defenderse con gran firmeza y potencia."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad profunda, cariñosa y delicada con su grupo familiar, mostrando una devoción especial hacia los niños de la casa. Disfruta enormemente de las caricias, el contacto físico y la compañía constante de sus seres queridos. Su adiestramiento resulta muy fluido debido a su inteligencia y docilidad relativa dentro del grupo terrier, respondiendo de manera excelente a métodos positivos basados en recompensas y amabilidad."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un comportamiento doméstico pacífico, limpio y cariñoso, siendo un perro de compañía encantador que no suelta pelo en la vivienda. Su apariencia elegante y refinada atrae miradas, mientras que su carácter dulce lo convierte en una mascota maravillosa para familias. Es adaptativo, pudiendo vivir felizmente en un piso si se le brindan oportunidades diarias para correr en espacios abiertos y seguros."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su pelaje rizado requiere un mantenimiento de peluquería especializado de forma regular para conservar su forma característica y evitar enredos. Posee un fuerte instinto de persecución visual ante roedores o pequeños animales, por lo que puede salir corriendo si no se le controla en zonas abiertas. Asimismo, aunque sea pacífico, no duda en enfrentarse con firmeza si otro perro inicia una pelea."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como un velocista excepcional de corta y media distancia, capaz de alcanzar velocidades sorprendentes gracias a su lomo flexible y estructura galgueada. Destaca en la caza de roedores, competencias de agility y carreras en pista o coursing. En la vida familiar, su mayor habilidad es ofrecer una compañía reconfortante, limpia y afable, combinando la dulzura de un perro de regazo con el coraje terrier."
        }
      ],
      "imageUrl": "/images/breeds/bedlington-terrier.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "fox-terrier-pelo-duro",
      "breed": "Fox Terrier de Pelo Duro",
      "title": "Fox Terrier: El Nervio del Cazador de Zorreras",
      "epithet": "El Nervio del Cazador de Zorreras",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Caza",
        "Exploración"
      ],
      "traits": [
        "Impulsividad",
        "Valentía",
        "Vivacidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Bajo",
        "motivacion_intrinseca": "Desalojar Presas",
        "resiliencia_emocional": "Extrema",
        "sociabilidad": "Entusiasta",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Fox Terrier de Pelo Duro es el clásico y enérgico cazador británico desarrollado para desalojar zorras de sus guaridas subterráneas. Posee una estampa elegante de dorso corto, manto de alambre denso y una expresión viva con barba pronunciada. Su psicología destaca por un umbral de estimulación muy bajo, impulsividad innata, resiliencia emocional extrema, valentía sin límites y una inagotable motivación por la exploración y la acción constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, efervescente, audaz, intrépido e hiperatento a cualquier movimiento o sonido en su entorno. El Fox Terrier vive en un estado de permanente entusiasmo y curiosidad, buscando constantemente estímulos con los que interactuar. Es un perro extrovertido que aborda el mundo sin temores, mostrando una gran valentía. En casa es una fuente continua de energía y juegos, requiriendo tutores que disfruten de su dinamismo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de complicidad alegre, afecto enérgico y lealtad divertida con sus cuidadores. Le encanta participar en aventuras al aire libre y juegos de pelota o cobro. Su adiestramiento es un reto interesante por su mente independiente y tendencia a distraerse con facilidad; requiere sesiones breves, muy variadas y basadas en la motivación positiva para mantener su atención sin generar frustración o terquedad."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un dinamismo contagioso, una simpatía arrolladora y una vitalidad que llena el hogar de momentos divertidos. Es un perro sumamente resistente, saludable y longevo que soporta largas caminatas y juegos sin fatiga. Su tamaño compacto facilita su transporte, mientras que su manto duro, con el stripping adecuado, apenas desprende pelo en casa, siendo un compañero intrépido para tutores dinámicos que busquen un perro activo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su alta reactividad e instinto cazador lo llevan a perseguir gatos o pequeñas mascotas con tenacidad obsesiva si no se le supervisa. Muestra una fuerte propensión a ladrar y excavar en jardines si se aburre o pasa mucho tiempo solo. Además, su carácter dominante con otros caninos exige una socialización firme desde cachorro y precaución al soltarlo en parques infantiles o espacios concurridos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista subterráneo en la excavación y desalojo de presas en madrigueras con una determinación física asombrosa. Brilla en pruebas de agility, flyball y juegos de rastreo por su rapidez de reflejos y potencia de salto. En el plano doméstico, destaca por su capacidad para mantener la casa libre de roedores y por su habilidad inigualable para inventar juegos y entretener a la familia."
        }
      ],
      "imageUrl": "/images/breeds/fox-terrier-pelo-duro.webp"
    },
    {
      "id": "border-terrier",
      "breed": "Border Terrier",
      "title": "Border Terrier: La Nobleza Rústica de la Frontera",
      "epithet": "La Nobleza Rústica de la Frontera",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Caza",
        "Trabajo"
      ],
      "traits": [
        "Rusticidad",
        "Equilibrio",
        "Tenacidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Seguir a los Sabuesos",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Buena con Perros",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Border Terrier es el rústico y equilibrado trabajador de la frontera entre Inglaterra y Escocia, diseñado para acompañar a las jaurías de sabuesos y desalojar zorras. Con su característica cabeza en forma de nutria y su piel gruesa, combina durabilidad física con una disposición amigable. Su psicología destaca por un temperamento más sereno que otros terriers, alta resiliencia emocional, tenacidad laboral y una excelente sociabilidad canina.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es afectuoso, alegre, equilibrado, sensato y caracterizado por una rusticidad sin artificios en el día a día. El Border Terrier posee el valor y la tenacidad de un cazador, pero muestra un trato mucho más dócil y pacífico en el hogar. Es un perro curioso y alerta que disfruta del aire libre, relacionándose con amabilidad y sin la agresividad típica de otros representantes del grupo terrier."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una lealtad entrañable, cariño sincero y un fuerte deseo de integración con su grupo familiar. Es un perro sumamente dulce que agradece las muestras de afecto y busca agradar a sus tutores de forma constante. Su adiestramiento resulta muy llevadero gracias a su disposición colaborativa, respondiendo excelentemente al refuerzo positivo, premios comestibles y palabras amables en un ambiente de aprendizaje relajado y constante."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un equilibrio emocional fabuloso que facilita una convivencia pacífica tanto en entornos rurales como en pisos urbanos. Su excelente sociabilidad con otros perros permite paseos tranquilos y juegos en grupo sin conflictos. Es un animal rústico de salud robusta, cuyo pelaje duro requiere mantenimientos sencillos de arranque manual. Su carácter bondadoso, tamaño práctico y cariño incondicional lo convierten en un compañero de vida maravilloso."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su instinto de persecución hacia animales pequeños como roedores o conejos se mantiene vivo, requiriendo atención al pasear sin correa por el campo. Si se siente aburrido o pasa jornadas largas sin atención, puede manifestar tendencias a excavar pozos en el jardín. Asimismo, su piel gruesa y alta tolerancia al dolor pueden enmascarar heridas o lesiones que requieren una revisión veterinaria atenta tras paseos rústicos."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en el trabajo de madriguera y seguimiento de rastro en terrenos escarpados gracias a su resistencia física y piel protectora. Destaca en pruebas de agilidad, rastreo olfativo y juegos de búsqueda por su tenacidad e inteligencia funcional. En el hogar, su principal destreza radica en ofrecer un acompañamiento afectuoso, tranquilo y equilibrado, integrándose de maravilla en grupos multiperro y dinámicas familiares."
        }
      ],
      "imageUrl": "/images/breeds/border-terrier.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "cairn-terrier",
      "breed": "Cairn Terrier",
      "title": "Cairn Terrier: El Escarbador de las Tierras Altas",
      "epithet": "El Escarbador de las Tierras Altas",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Exploración",
        "Caza"
      ],
      "traits": [
        "Curiosidad",
        "Audacia",
        "Simpatía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Escarbar y Explorar",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Alegré",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Cairn Terrier es uno de los perros de trabajo más antiguos de Escocia, célebre por su habilidad para escarbar entre los montones de piedras (cairns) para expulsar alimañas. Inmortalizado por interpretar a 'Toto' en El Mago de Oz, posee un cuerpo compacto, pelaje áspero rústico y mirada curiosa. Su psicología destaca por audacia indomable, alegría constante, motivación intrínseca por escarbar y explorar, y gran simpatía.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, extrovertido, valiente, curioso y repleto de una astucia simpática que cautiva a su entorno. El Cairn Terrier aborda cada jornada como una emocionante aventura, explorando rincones con entusiasmo desbordante. Muestra una actitud confiada y amigable con las personas, conservando esa chispa independiente de terrier de montaña. En la casa se comporta con gran vitalidad, manteniéndose siempre dispuesto a jugar o investigar."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de afecto estrecho, lealtad divertida y compañerismo constante con todos los integrantes del hogar. Le encanta estar presente en el centro de las actividades familiares y recibir atención afectuosa. Su educación requiere creatividad, paciencia y consistencia en el refuerzo positivo, ya que su mente inquieta y tenaz se aburre con repeticiones monótonas, aprendiendo rápido cuando el adiestramiento se plantea como un juego motivador."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una alegría arrolladora y una vitalidad simpática que llena el hogar de momentos divertidos e inolvidables. Su tamaño pequeño y su anatomía robusta lo hacen muy adaptable a la vida en piso y a excursiones rurales. Es un perro resistente, de salud fuerte y pelaje rústico que protege contra la intemperie. Su carácter extrovertido y afectuoso lo convierte en un amigo genial para familias activas."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su desmedida pasión por escarbar puede causar destrozos en jardines o macetas si no se canaliza adecuadamente en zonas permitidas. Muestra una tendencia marcada a ladrar ante ruidos extraños o presencia de pequeños animales, exigiendo educación temprana. Además, su instinto cazador hacia roedores requiere cautela si convive con pequeñas mascotas, necesitando paseos con correa en entornos donde haya presencia de fauna silvestre."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la excavación y búsqueda de presas ocultas entre rocas y madrigueras gracias a sus patas fuertes y uñas resistentes. Brilla en pruebas de agility, rastreo olfativo y actividades recreativas de cobro por su agilidad y perseverancia. En la convivencia diaria, su habilidad más destacada es brindar un compañerismo alegre, afectuoso y vigilante, actuando como un pequeño guardián simpático y lleno de energía."
        }
      ],
      "imageUrl": "/images/breeds/cairn-terrier.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "irish-terrier",
      "breed": "Terrier Irlandés",
      "title": "Irish Terrier: El Temerario Rojo",
      "epithet": "El Temerario Rojo",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Caza",
        "Acción"
      ],
      "traits": [
        "Valentía",
        "Lealtad",
        "Impulsividad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Acción y Guardia",
        "resiliencia_emocional": "Extrema",
        "sociabilidad": "Cariñoso con la Gente",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Terrier Irlandés o Irish Terrier es el legendario 'temerario rojo' de la isla esmeralda, admirado por su hermoso manto de alambre pelirrojo, silueta atlética y valor sin límites. Criado como cazador polivalente, guardián de granjas y perro de mensajería en guerras, posee un físico estilizado y músculos potentes. Su psicología destaca por un valor indomable, resiliencia emocional extrema, lealtad apasionadamente afectuosa hacia su humano y una impulsividad enérgica.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es valeroso, apasionado, noble, vivaz y caracterizado por una intrepidez absoluta cuando enfrenta desafíos. El Terrier Irlandés posee un corazón ardiente que no retrocede ante el peligro, mostrando una lealtad feroz en la defensa de los suyos. En el ámbito doméstico se comporta con sorprendente dulzura y afecto hacia su familia, pero mantiene una actitud firme y dominante frente a otros perros del mismo sexo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una lealtad incondicional, profunda y sumamente afectuosa con sus cuidadores, demostrando una devoción que roza el enamoramiento. Le encanta estar cerca de sus tutores y participar en juegos intensos. Su adiestramiento exige tutores experimentados que empleen firmeza serena, empatía y métodos de motivación positiva, ya que su orgullo noble y alto temperamento rechazan la brusquedad, respondiendo maravillosamente al respeto mutuo y la coherencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un valor de protección y una fidelidad inquebrantable, siendo un guardián valiente y un compañero cariñoso con la familia. Su pelaje de alambre pelirrojo es muy limpio y apenas desprende pelo en casa cuando se le realiza el stripping adecuado. Es un perro atlético, de salud rústica y energía inagotable, ideal para amantes del deporte outdoor que busquen un compañero intrépido, leal y lleno de carácter."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su tendencia a entrar en conflicto con otros perros si es provocado exige un manejo responsable y atento durante los paseos diarios. Su impulsividad y alto nivel de energía requieren ejercicio físico significativo para evitar frustración o nerviosismo en la vivienda. Además, su instinto de caza hacia pequeños animales exige cautela en zonas abiertas o presencia de mascotas menores en el entorno doméstico."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como cazador polivalente, cobrador de agua y perro de guarda o mensajería histórica por su valor y resistencia física excepcional. Destaca en deportes caninos exigentes como canicross, agility y pruebas de trabajo por su velocidad y potencia muscular. En el hogar, su habilidad principal es ofrecer una lealtad devota y una protección activa, defendiendo a su familia con una nobleza e intrepidez legendarias."
        }
      ],
      "imageUrl": "/images/breeds/irish-terrier.webp"
    },
    {
      "id": "welsh-terrier",
      "breed": "Welsh Terrier",
      "title": "Welsh Terrier: El Espíritu Galés Negro y Fuego",
      "epithet": "El Espíritu Galés",
      "fciGroup": "Grupo 3: Terriers",
      "akcGroup": "Terrier Group",
      "archetypes": [
        "Terriers Instrumentales"
      ],
      "motivations": [
        "Juego",
        "Caza"
      ],
      "traits": [
        "Alegría",
        "Resistencia",
        "Equilibrio"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Rastreo y Juego",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Sociable",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Welsh Terrier es el enérgico y simpático cazador de las montañas de Gales, distinguible por su manto denso negro y fuego y su silueta compacta similar al Airedale en miniatura. Desarrollado para la caza de zorros, tejones y nutrias, combina una salud rústica con un carácter extrovertido. Su psicología destaca por mayor equilibrio emocional que otros terriers, alegría constante, motivación por el rastreo y juego, y excelente resistencia.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, constante, valiente, curioso y dotado de una serenidad afectuosa que facilita la convivencia. El Welsh Terrier posee la energía típica del grupo terrier, pero muestra una actitud menos impulsiva y más reflexiva en sus interacciones cotidianas. Disfruta investigando su entorno con una simpatía contagiosa, relacionándose con amabilidad con las personas y manteniendo un nivel de alerta adecuado sin caer en nerviosismos innecesarios."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una relación de afecto sincero, lealtad constante y compañerismo divertido con su núcleo familiar. Le apasiona compartir momentos de juego, paseos por la naturaleza y descansar cerca de sus cuidadores. Su adiestramiento es fluido dentro del contexto terrier gracias a su carácter tratable, respondiendo de maravilla a métodos de educación positivos, recompensas jugosas y dinámicas variadas que despierten su inteligencia de forma amena."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un dinamismo equilibrado, una estética clásica preciosa y un carácter simpático que encaja genial en la vida familiar. Su pelaje duro negro y fuego apenas desprende pelo suelto en casa con el mantenimiento adecuado de peluquería. Es un perro de tamaño mediano compacto muy manejable, de salud sólida y espíritu alegre, ideal para familias que busquen un terrier activo, noble y afectuoso en todo momento."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su instinto cazador hacia roedores o presas pequeñas exige mantener el control mediante correa en zonas de campo o parques. Si carece de ejercicio adecuado o estimulación mental, puede manifestar conductas de excavación o ladridos de aburrimiento en el jardín. Asimismo, requiere un mantenimiento periódico de peluquería especializado para conservar la textura rústica y el color brillante de su característico manto."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la caza de madriguera y cobro en terrenos difíciles por su tenacidad, agilidad física y resistencia muscular. Destaca en disciplinas deportivas como agility, flyball y juegos de olfato por su rapidez de aprendizaje y entusiasmo. En el ámbito cotidiano, su principal destreza es brindar una compañía equilibrada, alegre e higiénica, siendo un guardián ligero y un amigo fiel para toda la familia."
        }
      ],
      "imageUrl": "/images/breeds/welsh-terrier.webp"
    },
    {
      "id": "finnish-spitz",
      "breed": "Finnish Spitz",
      "title": "Finnish Spitz: El Cantante de los Bosques",
      "epithet": "El Cantante de los Bosques",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Vocalización",
        "Caza"
      ],
      "traits": [
        "Vivacidad",
        "Alerta",
        "Independencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Aviso por Ladrido Rítmico",
        "resiliencia_emocional": "Media",
        "sociabilidad": "Afectuoso",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Finnish Spitz o Spitz Finlandés es el orgulloso perro nacional de Finlandia, célebre por su espeso manto rojo zorro, cola enroscada y su particular ladrido rítmico utilizado para señalar aves en los árboles. Desarrollado en los bosques nórdicos para la caza autónoma, posee una estampa canina bella y una mente alerta. Su psicología destaca por una alta independencia cognitiva, vocalización expresiva, vivacidad constante y un temperamento afectuoso y digno.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es vivaz, despierto, independiente, afectuoso y caracterizado por una expresividad vocal única en el reino canino. El Spitz Finlandés aborda la vida con curiosidad e inteligencia, manteniéndose atento a todo lo que ocurre en su entorno. Muestra una actitud cariñosa y alegre con su familia, mientras que ante desconocidos se muestra educado y reservado. Su naturaleza nórdica le otorga una dignidad serena en interiores y entusiasmo al aire libre."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una lealtad profunda, cariñosa y respetuosa hacia sus cuidadores, sintiéndose muy vinculado a su grupo humano. Le gusta estar presente en las actividades del hogar y recibir trato afectuoso. Su educación requiere sensibilidad, paciencia y métodos positivos suaves, respetando su independencia cognitiva primitiva; las correcciones duras causan rechazo en esta raza, mientras que el liderazgo sereno consigue una colaboración fluida y receptiva."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un afecto sincero, una belleza estética nórdica deslumbrante y una compañía alegre y vigilante en el hogar. Es un perro de tamaño mediano limpio, sin olor corporal y de salud robusta adaptada al clima frío. Su inteligencia y sensibilidad lo convierten en un amigo devoto para familias que valoren su carácter primitivo, ofreciendo momentos entrañables y una alerta sonora eficaz ante cualquier visita o presencia."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su tendencia natural a la vocalización y el ladrido rítmico requiere trabajo educativo desde temprana edad para evitar molestias a vecinos en entornos urbanos. Produce mudas de pelo intensas dos veces al año que exigen cepillado diario para eliminar el subpelo suelto en casa. Además, su alta independencia cognitiva significa que no mostrará una obediencia ciega, requiriendo tutores que comprendan y respeten su naturaleza nórdica."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale en la caza de aves forestales mediante el rastreo visual y su ladrido rítmico ininterrumpido que ubica a la presa para el cazador. Destaca en competencias de agility, senderismo invernal y deportes de olfato por su agilidad física y resistencia al frío. En el hogar, su habilidad principal es actuar como un guardián de aviso sonoro sumamente atento, brindando un cariño limpio y noble a la familia."
        }
      ],
      "imageUrl": "/images/breeds/finnish-spitz.webp"
    },
    {
      "id": "norwegian-elkhound",
      "breed": "Norwegian Elkhound",
      "title": "Norwegian Elkhound: El Cazador de Alces Noruego",
      "epithet": "El Cazador de Alces",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Caza",
        "Resistencia"
      ],
      "traits": [
        "Valentía",
        "Sobriedad",
        "Rusticidad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Acoso de Caza Mayor",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Sociable con la Familia",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Norwegian Elkhound o Cazador de Alces Noruego es el antiguo compañero de los vikingos, moldeado en la dura geografía escandinava para la caza de grandes mamíferos como alces y osos. De constitución robusta, pelaje denso de tono gris plateado y cola enroscada sobre el lomo, combina sobriedad atlética con una resistencia climática extraordinaria. Su psicología destaca por un temperamento valiente, alta independencia cognitiva, motivación intrínseca por la caza mayor y devoción equilibrada.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sereno, seguro de sí mismo, valeroso, independiente y dotado de una gran sobriedad en sus interacciones cotidianas. El Cazador de Alces Noruego se comporta en el hogar con calma y dignidad, mostrando una observación atenta sobre todo lo que sucede a su alrededor. Ante extraños se mantiene reservado y cauteloso, sin manifestar agresividad injustificada. Mantiene un espíritu firme y rústico que disfruta de la vida al aire libre en climas fríos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad sincera, profunda y respetuosa hacia su guía y la familia, mostrando un afecto equilibrado que no resulta empalagoso. Es un compañero fiel que busca estar presente en las actividades del hogar sin exigir atención física continua. Su adiestramiento requiere tutores experimentados que comprendan su alta independencia cognitiva, empleando firmeza calmada y métodos positivos basados en el respeto mutuo, ya que rechaza frontalmente la brusquedad o el trato autoritario."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una compañía noble, serena y muy resistente, siendo un perro de familia sumamente leal y protector sin caer en conductas destructivas. Su constitución rústica y salud sólida le otorgan una gran longevidad y tolerancia a climas invernales exigentes. Es un excelente guardián de aviso que alerta ante presencias extrañas con firmeza. Su personalidad digna y equilibrada lo convierte en un compañero maravilloso para personas amantes de la naturaleza y el senderismo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su tendencia natural a acosar presas mediante ladridos rítmicos puede traducirse en una vocalización frecuente si no se gestiona mediante educación y ejercicio diario. Produce mudas de pelo muy abundantes dos veces al año que exigen cepillado constante para controlar el subpelo suelto en la casa. Además, su marcada independencia cognitiva significa que no mostrará una obediencia ciega o servil, requiriendo tutores pacientes que sepan guiar su instinto nórdico."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como un rastreador y acosador de caza mayor insuperable, capaz de acorralar presas gigantescas como alces mediante ladridos intermitentes mientras esquiva sus embestidas con agilidad. Destaca por su resistencia física para recorrer distancias masivas en terrenos nevados o escarpados sin dar muestras de fatiga. En el hogar, su habilidad principal es ofrecer una vigilancia serena, protectora e inteligente que brinda seguridad constante a su grupo familiar."
        }
      ],
      "imageUrl": "/images/breeds/norwegian-elkhound.webp"
    },
    {
      "id": "kishu-ken",
      "breed": "Kishu Ken",
      "title": "Kishu Ken: La Pureza Blanca de la Caza Japonesa",
      "epithet": "La Pureza Blanca",
      "fciGroup": "Grupo 5: Perros tipo Spitz y tipo Primitivo",
      "akcGroup": "Working Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Autonomía",
        "Caza"
      ],
      "traits": [
        "Silencio",
        "Nobleza",
        "Independencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Caza Silenciosa de Jabalí",
        "resiliencia_emocional": "Muy Alta",
        "sociabilidad": "Reservado",
        "independencia_cognitiva": "Extrema"
      },
      "summary": "El Kishu Ken es una noble raza primitiva originaria de las regiones montañosas de Japón, venerada ancestralmente por su capacidad para la caza silenciosa del jabalí y el ciervo. De pelaje predominantemente blanco, orejas erguidas y cola curvada, posee una presencia física majestuosa y pulcra. Su psicología destaca por un temperamento calmo, silencio ético, extrema independencia cognitiva, alta resiliencia emocional y una devoción sincera y reservada hacia su cuidador.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente sereno, digno, silencioso, reservado e impregnado de una majestuosidad calma que impone respeto. El Kishu Ken rara vez ladra sin motivo, prefiriendo observar el entorno con una mirada profunda y analítica. Muestra una actitud distanciada e indiferente hacia personas desconocidas, evitando acercamientos efusivos. En la intimidad de su hogar es la tranquilidad personificada, comportándose con una pulcritud y paciencia que recuerdan al temperamento felino."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una lealtad inquebrantable, devota y silenciosa hacia su guía de referencia, creando un lazo afectivo de enorme profundidad y respeto mutuo. El Kishu Ken expresa su cariño mediante la presencia tranquila y la mirada atenta, sin requerir mimos excesivos. Su adiestramiento exige tutores con experiencia en razas primitivas que utilicen la motivación positiva y el liderazgo sereno, comprendiendo su extrema independencia cognitiva y su rechazo absoluto a cualquier corrección dura."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un comportamiento doméstico de una limpieza y silencio impecables, siendo un habitante del hogar extraordinariamente pacífico que no causa molestias ni ladridos innecesarios. Su belleza estética de blanco inmaculado y su porte noble otorgan una presencia cautivadora. Es un perro sumamente resistente, saludable y longevo que no busca conflictos. Para tutores que valoran la serenidad y la independencia dócil, representa un compañero de vida de valor incalculable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su potente instinto cazador y su naturaleza de persecución silenciosa representan un riesgo serio para gatos o pequeñas mascotas si no se le socializa rigurosamente desde cachorro. Su extrema independencia cognitiva exige mantenerlo sujeto con correa en espacios abiertos no vallados, ya que puede seguir rastros sin atender llamadas verbales. Asimismo, su reserva hacia extraños requiere una socialización cuidada para prevenir conductas excesivamente territoriales o distantes en la convivencia."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como un cazador de acoso y agarre silencioso en terrenos accidentados de alta montaña, capaz de acorralar jabalíes con una valentía y agilidad físicas extraordinarias. Posee un sentido del olfato agudísimo y una capacidad de movimiento sigiloso que le permite aproximarse a las presas sin ser detectado. En el entorno familiar, su mayor destreza es brindar una convivencia pulcra, pacífica y profundamente leal sin emitir un solo ruido."
        }
      ],
      "imageUrl": "/images/breeds/kishu-ken.webp"
    },
    {
      "id": "sabueso-espanol",
      "breed": "Sabueso Español",
      "title": "Sabueso Español: La Voz Profunda del Rastro Cantábrico",
      "epithet": "La Voz Profunda del Rastro",
      "fciGroup": "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Sensorialidad Olfativa Profunda"
      ],
      "motivations": [
        "Rastreo",
        "Olfato"
      ],
      "traits": [
        "Tenacidad",
        "Nieve de rastro",
        "Gentileza"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo en Rastro",
        "motivacion_intrinseca": "Seguir Latidos de Rastro",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Pacífico",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Sabueso Español es el ancestral rastreador de las cordilleras del norte de la península ibérica, célebre por su portentoso olfato, sus largas orejas caídas y su melodiosa voz de rastro. Estructurado para el seguimiento de caza mayor y menor en terrenos montañosos difíciles, posee una musculatura fuerte y gran resistencia física. Su psicología destaca por una tenacidad inquebrantable en el rastreo, gentileza doméstica, independencia cognitiva y temperamento pacífico.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es noble, gentil, tranquilo, afectuoso y caracterizado por una doble personalidad fascinante según el entorno en que se encuentre. En el hogar es la mansedumbre encarnada, reposando placenteramente durante horas en camas cálidas sin causar estridencias. Sin embargo, cuando sale al campo y detecta un rastro olfativo, se transforma en un trabajador incombustible, apasionado y tenaz que sigue la huella con una concentración casi hipnótica."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un apego sincero, dulce y sumamente afectuoso con sus cuidadores, disfrutando de la compañía constante de la familia. El Sabueso Español es un perro de corazón blando que busca el contacto físico amable y reconfortante. Su educación requiere paciencia, tono suave y refuerzo positivo con recompensas sabrosas; las brusquedades destruyen su confianza, mientras que una guía respetuosa canaliza su inteligencia y predisposición colaborativa de forma fluida."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una convivencia familiar llena de paz, afecto y dulzura, siendo un perro sumamente pacífico que se lleva de maravilla con otros caninos y niños. Su carácter noble e incapaz de guardar rencor facilita una integración armoniosa en el hogar. Es un animal rústico de salud fuerte que disfruta acompañando a sus tutores en largas caminatas al aire libre, ofreciendo una fidelidad entrañable y un comportamiento limpio y respetuoso."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su desmedida pasión olfativa lo lleva a desconectar del entorno cuando detecta un rastro interesante, ignorando por completo la llamada verbal del tutor si no está sujeto con correa. Sus largas orejas caídas requieren revisiones e higiene periódicas para prevenir infecciones óticas causadas por humedad o suciedad acumulada. Además, su voz potente y sonora en el rastro puede manifestarse como un aullido melódico si se siente frustrado."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale por poseer una capacidad olfativa de rastreo en sangre o huella fría verdaderamente prodigiosa, capaz de descifrar rumbos complejos en vegetación densa. Posee una modulada voz de rastro o 'latido' que informa al cazador sobre la distancia de la presa. En la vida diaria, su habilidad principal es brindar una compañía dulce, serena e higiénica, destacando además en deportes de búsqueda olfativa y juegos de nariz."
        }
      ],
      "imageUrl": "/images/breeds/sabueso-espanol.webp"
    },
    {
      "id": "basset-leonado",
      "breed": "Basset Leonado de Bretaña",
      "title": "Basset Leonado: El Pequeño Rústico de Monte Bajo",
      "epithet": "El Pequeño Rústico",
      "fciGroup": "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Sensorialidad Olfativa Profunda"
      ],
      "motivations": [
        "Rastreo",
        "Caza"
      ],
      "traits": [
        "Rusticidad",
        "Tenacidad",
        "Simpatía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Rastreo de Conejos",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Muy Sociable",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Basset Leonado de Bretaña es un pequeño y rústico sabueso francés de patas cortas, famoso por su manto duro de color dorado y su mirada vivaz llena de simpatía. Criado para el rastreo de conejos y zorros en tupidos matorrales de monte bajo, combina una agilidad sorprendente con resistencia incansable. Su psicología destaca por un temperamento alegre, excelente sociabilidad con otros perros, tenacidad olfativa y afectuosidad constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, dinámico, extrovertido, rústico e incansable cuando se encuentra en espacios abiertos explora el terreno. El Basset Leonado de Bretaña aborda la vida cotidiana con un optimismo contagioso y una simpatía natural que encanta a todos. En casa es un perro sociable y cariñoso que disfruta del descanso reconfortante, pero conserva esa chispa inquieta que lo impulsa a olfatear cualquier rincón con curiosidad divertida."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de afecto sincero, lealtad divertida y compañerismo constante con todos los integrantes de su hogar. Le apasiona participar en las actividades familiares y recibir muestras de cariño. Su adiestramiento es fluido dentro del grupo de sabuesos gracias a su disposición amigable, respondiendo de maravilla a métodos de motivación positiva con premios apetitosos y juegos de olfato, evitando la monotonía para mantener activa su motivación."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una alegría constante y una vitalidad equilibrada que llena el hogar de momentos entrañables y sonrisas. Su tamaño compacto de patas cortas y su estructura rústica lo hacen fácil de transportar y muy adaptable a diferentes tipos de vivienda. Su excelente sociabilidad con otros perros facilita los paseos en grupo sin conflictos. Su pelaje duro es muy limpio y requiere mantenimientos sencillos para mantenerse libre de suciedad."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su desarrollado instinto de rastreo olfativo significa que si detecta un olor fascinante en el campo, echará a correr tras él ignorando las llamadas de su tutor. Sus orejas caídas exigen revisiones regulares para evitar acumulación de cera o humedad. Además, su energía rústica requiere paseos diarios activos y oportunidades para usar su olfato, ya que el aburrimiento prolongado puede derivar en excavaciones o ladridos en el jardín."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale por su capacidad para penetrar matorrales densos y zarzamoras inaccesibles para otros perros, siguiendo rastros de caza menor con tenacidad inagotable. Posee un sentido del olfato finísimo y un ladrido claro que orienta en el monte. En el contexto familiar, su mayor destreza es brindar una compañía afectuosa, sociable e higiénica, destacando también en juegos recreativos de búsqueda y deportes de olfato."
        }
      ],
      "imageUrl": "/images/breeds/basset-leonado.webp"
    },
    {
      "id": "petit-basset",
      "breed": "Petit Basset Griffon Vendéen",
      "title": "Petit Basset Griffon: La Energía Despeinada",
      "epithet": "La Energía Despeinada",
      "fciGroup": "Grupo 6: Perros Tipo Sabueso rastro y semejantes",
      "akcGroup": "Hound Group",
      "archetypes": [
        "Sensorialidad Olfativa Profunda"
      ],
      "motivations": [
        "Exploración",
        "Rastreo"
      ],
      "traits": [
        "Vivacidad",
        "Entusiasmo",
        "Simpatía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Rastreo Alegre",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Extrovertido",
        "independencia_cognitiva": "Alta"
      },
      "summary": "El Petit Basset Griffon Vendéen es un extasiado y despeinado sabueso de origen francés, famoso por su manto áspero de aspecto rústico, cejas frondosas y cola de sable levantada. Diseñado para la caza de conejos en el agreste terreno costero de la Vendée, posee una constitución fuerte y patas cortas de gran movilidad. Su psicología destaca por un temperamento extrovertido, entusiasmo arrollador, vivacidad constante, sociabilidad brillante e independencia cognitiva.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es alegre, efervescente, audaz, simpático e infinitamente entusiasta ante cualquier novedad del entorno. El Petit Basset Griffon Vendéen vive en un estado de júbilo permanente que contagia vitalidad a su alrededor. Es un perro extrovertido que saluda a conocidos y extraños con un movimiento de cola incansable. En la casa es cariñoso y juguetón, mostrando una personalidad cómica, curiosa y llena de iniciativas divertidas."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad alegre, afectuosa y profundamente amigable con todos los miembros de la familia, considerándose un integrante indispensable de la manada. Le encanta formar parte del alboroto cotidiano y compartir aventuras al aire libre. Su adiestramiento requiere paciencia, sentido del humor y métodos positivos dinámicos, ya que su mente independiente de sabueso se distrae fácilmente con olores, respondiendo mejor cuando la educación se plantea como un juego."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una simpatía inigualable y un buen humor contagioso que transforma cualquier hogar en un espacio alegre. Su sociabilidad extraordinaria lo convierte en un amigo genial para niños, visitas y otros perros de todas las razas. Es un animal rústico, resistente y de tamaño muy práctico, cuyo pelaje duro despeinado le da una belleza rústica encantadora que requiere cuidados sencillos de cepillado semanal para mantenerse saludable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su marcada voz de sabueso y su tendencia al ladrido festivo exigen pautas educativas tempranas para controlar las vocalizaciones en pisos o zonas residenciales. Su pasión por explorar mediante el olfato hace que pasear sin correa en espacios no cercados sea arriesgado, pues seguirá rastros sin mirar atrás. Además, su energía efervescente necesita salidas diarias donde pueda liberar su entusiasmo acumulado mediante ejercicio y olfateo."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale por su agilidad para negociar terrenos de maleza espinosa y rocas costeras a gran velocidad mientras sigue pistas olfativas con determinación. Posee un olfato privilegeda y un 'latido' vocal muy expresivo que señala sus descubrimientos. En el hogar, su habilidad principal es ofrecer una compañía cómica, afectuosa y vitalista, destacando además en pruebas de trabajo de olfato, agilidad y caminatas de montaña."
        }
      ],
      "imageUrl": "/images/breeds/petit-basset.webp"
    },
    {
      "id": "setter-gordon",
      "breed": "Setter Gordon",
      "title": "Setter Gordon: El Caballero Negro y Fuego de Escocia",
      "epithet": "El Caballero Escocés",
      "fciGroup": "Grupo 7: Perros de Muestra",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Caza",
        "Familia"
      ],
      "traits": [
        "Dignidad",
        "Lealtad",
        "Potencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Muestra y Compañía",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Afectuoso",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Setter Gordon es el aristocrático y robusto cazador de las Tierras Altas escocesas, célebre por su deslumbrante manto de seda negro y fuego, constitución musculosa y trote poderoso. Desarrollado en el castillo del Duque de Gordon para la muestra de aves en brezales escarpados, es el más fuerte y pesado del grupo setter. Su psicología destaca por dignidad sobria, lealtad profunda, motivación por la muestra y la familia, y temperamento afectuoso.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sobrio, sereno, digno, noble e intensamente afectuoso con las personas a quienes otorga su confianza. El Setter Gordon posee una presencia calmada en el hogar que transmite seguridad y paz cotidiana. Muestra una actitud prudente y educada ante desconocidos, manteniendo una reserva distinguida sin manifestar timidez ni agresividad. En el campo despliega una potencia física imponente y un trabajo de muestra concentrado y elegante."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una lealtad profunda, devota y sumamente afectuosa con sus tutores, creando un vínculo familiar sólido e inquebrantable. El Caballero Escocés es un perro protector de corazón blando que adora sentirse cerca de sus seres queridos. Su adiestramiento requiere una guía serena, coherente y basada en el refuerzo positivo; su madurez tardía exige paciencia, aprendiendo con brillantez cuando se establece una relación basada en la confianza y el afecto."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una belleza plástica majestuosa y un comportamiento doméstico de una nobleza y tranquilidad admirables. Es un perro de familia dulce, paciente y afectuoso que actúa como un guardián tranquilo que vela por la seguridad del hogar. Su inteligencia funcional facilita un aprendizaje profundo de tareas de trabajo y convivencia. Su resistencia atlética lo convierte en un compañero fabuloso para personas apasionadas de la naturaleza y excursiones."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su madurez mental y física es más lenta que en otras razas, requiriendo un periodo de desarrollo más prolongado antes de consolidar su adiestramiento definitivo. Su sedoso manto negro con flecos necesita cepillados periódicos para evitar que se formen nudos o se acumulen abrojos tras paseos por el monte. Requiere también ejercicio físico diario significativo para canalizar su potencia muscular y mantener su equilibrio emocional en casa."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale por su capacidad para cubrir amplios terrenos de brezal y montaña con un trote elástico y potente, realizando muestras estatuarias ante la presencia de aves silvestres. Posee un olfato privilegeda para la detección de piezas a gran distancia y excelentes aptitudes de cobro. En la vida familiar, su mayor destreza es brindar una protección calmada, noble y profundamente afectuosa como guardián de la casa."
        }
      ],
      "imageUrl": "/images/breeds/setter-gordon.webp"
    },
    {
      "id": "braco-aleman",
      "breed": "Braco Alemán de Pelo Corto (GSP)",
      "title": "Braco Alemán: El Atleta Total de la Caza",
      "epithet": "El Atleta Total",
      "fciGroup": "Grupo 7: Perros de Muestra",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Caza",
        "Cobro",
        "Trabajo"
      ],
      "traits": [
        "Versatilidad",
        "Energía",
        "Foco"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Muestra, Cobro y Rastreo",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Sociable",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Braco Alemán de Pelo Corto (GSP) es el atleta total de la caza moderna, reconocido como el perro de muestra más polivalente y extendido en todo el mundo. De silueta aerodinámica, musculatura esculpida y mirada inteligente, combina elegancia física con una potencia de trabajo inagotable. Su psicología destaca por una motivación intrínseca por la muestra y el cobro, bajo umbral de estimulación en campo, resiliencia emocional elevada y constante necesidad de cooperación.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es enérgico, inteligente, equilibrado, seguro de sí mismo y caracterizado por una pasión inquebrantable por la actividad física y mental. El Braco Alemán posee un foco de atención agudísimo cuando trabaja o juega, respondiendo a los estímulos con velocidad atlética. En el hogar es un perro sumamente afectuoso, sociable y noble que busca la cercanía de la familia, comportándose con tranquilidad si satisface sus necesidades de ejercicio."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de cooperación estrecha, lealtad absoluta e hiperconexión constante con su tutor de referencia. Este atleta necesita sentirse útil y trabajar en equipo con su humano en disciplinas diversas. Su adiestramiento es un deleite por su brillante inteligencia funcional y deseo de agradar, respondiendo de manera sobresaliente al refuerzo positivo, retos complejos y pautas claras que encaucen su enorme dinamismo hacia conductas deseadas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una capacidad de aprendizaje y versatilidad extraordinarias que deslumbran en cualquier deporte canino o tarea al aire libre. Su pelaje corto y apretado es de bajísimo mantenimiento, requiriendo solo cepillados ocasionales para lucir brillante y limpio. Es un compañero afectuoso, alegre y deportista incansable que llena de energía la vida de tutores activos, mostrando una gran nobleza y adaptabilidad a entornos familiares dinámicos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su descomunal nivel de energía física y mental requiere varias horas de ejercicio diario significativo y estimulación cognitiva para prevenir frustración, nerviosismo o conductas compulsivas en casa. Su fuerte instinto cazador exige un trabajo firme en el control de llamada para evitar que persiga fauna silvestre. Además, no es apto para personas sedentarias o familias que no dispongan de tiempo abundante para dedicarle cada día."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como cazador polivalente capaz de realizar muestras estatuarias, rastreo de rastro de sangre y cobro impecable tanto en tierra firme como en aguas profundas. Destaca de forma estelar en disciplinas deportivas como canicross, bikejoring, agility y búsqueda y rescate por su potencia atlética y olfato superior. En el hogar, su habilidad principal es ofrecer una lealtad devota y un compañerismo deportivo apasionado."
        }
      ],
      "imageUrl": "/images/breeds/braco-aleman.webp"
    },
    {
      "id": "flat-coated-retriever",
      "breed": "Flat-Coated Retriever",
      "title": "Flat-Coated Retriever: El Peter Pan de los Cobradores",
      "epithet": "El Peter Pan de los Cobradores",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica"
      ],
      "motivations": [
        "Juego",
        "Cobro",
        "Afecto"
      ],
      "traits": [
        "Optimismo",
        "Dulzura",
        "Energía"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Medio",
        "motivacion_intrinseca": "Cobro en Agua y Juego",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Extraordinaria",
        "independencia_cognitiva": "Baja"
      },
      "summary": "El Flat-Coated Retriever es el 'Peter Pan' del mundo canino, célebre por conservar un espíritu juguetón, alegre y jovial de cachorro durante toda su existencia. De elegante manto liso brillante de color negro o hígado, silueta estilizada y cola oscilante permanente, es un cobrador acuático de primera categoría. Su psicología destaca por un optimismo inagotable, dulzura profunda, motivación por el cobro y el agua, extraordinaria sociabilidad y un deseo constante de agradar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es efervescente, extremadamente afectuoso, alegre, confiado y lleno de una amabilidad arrolladora que no conoce la malicia. El Flat-Coated Retriever aborda la existencia con un entusiasmo contagioso, moviendo su cola de forma ininterrumpida. Muestra una sociabilidad abierta y cariñosa con todas las personas, niños y otros animales, comportándose como un eterno adolescente juguetón que busca convertir cada instante en un motivo de fiesta."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un apego profundo, devoto y sumamente cariñoso con su núcleo familiar, necesitando formar parte central de la vida cotidiana. Su mayor satisfacción es agradar a sus tutores y recibir muestras constantes de afecto. Su adiestramiento resulta muy gratificante por su inteligencia receptiva y su motivación por colaborar, requiriendo métodos de educación suaves, positivos y muy amables, ya que es un perro sensible que florece con el elogio."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una alegría de vivir única y una dulzura reconfortante que llena la vivienda de paz, cariño y momentos divertidos. Su sociabilidad extraordinaria y su paciencia con los niños lo convierten en un compañero familiar excepcional. Es un perro acuático maravilloso y deportista entusiasta que disfruta acompañando a su familia en excursiones, mostrando siempre una actitud optimista, limpia y profundamente devota con todos sus allegados."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su entusiasmo desbordante y madurez tardía pueden hacer que mantenga conductas de salto o hiperactividad juguetona si no se canaliza con paciencia y educación suave. Su amor por el agua lo llevará a lanzarse a cualquier charco o río durante los paseos, requiriendo secado constante de su pelaje. Asimismo, necesita ejercicio físico diario y estimulación cognitiva para canalizar su energía alegre y evitar aburrimiento en interiores."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como especialista de élite en el cobro de presas en agua y terreno pantanoso gracias a su boca suave y natación potente. Destaca en competencias de cobro (dummy trial), agilidad, deportes acuáticos y cobro de pelotas con una rapidez y júbilo asombrosos. En la convivencia familiar, su mayor habilidad es brindar un cariño reconfortante e incondicional, actuando además como perro de terapia por su dulzura."
        }
      ],
      "imageUrl": "/images/breeds/flat-coated-retriever.webp",
      "origen": "Reino Unido"
    },
    {
      "id": "tolling-retriever",
      "breed": "Nova Scotia Duck Tolling Retriever",
      "title": "Nova Scotia Duck Tolling Retriever: El Pequeño Zorro Cobrador",
      "epithet": "El Pequeño Zorro Cobrador",
      "fciGroup": "Grupo 8: Perros Cobradores levantadores de caza y de agua",
      "akcGroup": "Sporting Group",
      "archetypes": [
        "Cooperación Humana Clásica",
        "Inteligencia Funcional Obsesiva"
      ],
      "motivations": [
        "Juego",
        "Cobro"
      ],
      "traits": [
        "Agilidad",
        "Inteligencia",
        "Entusiasmo"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Atraer Patos jugando en la orilla",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Amistoso",
        "independencia_cognitiva": "Media"
      },
      "summary": "El Nova Scotia Duck Tolling Retriever o Toller es el más pequeño de los perros cobradores, famoso por su brillante manto rojizo con marcas blancas y su cola frondosa. Desarrollado en Canadá para atraer aves acuáticas jugando alegremente en la orilla antes de cobrarlas, posee una agilidad atlética excepcional y una mirada despierta. Su psicología destaca por un umbral de estimulación bajo, motivación intrínseca desbordante por el juego y el agua, inteligencia funcional obsesiva y gran entusiasmo colaborativo en cada jornada.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es sumamente enérgico, astuto, alegre, alerta e hiperactivo cuando detecta la oportunidad de trabajar o jugar. El Toller posee un intelecto despierto y una curiosidad inagotable que lo impulsan a interactuar constantemente con su entorno. Muestra un comportamiento entusiasta en exteriores y una actitud amistosa pero algo reservada ante personas desconocidas. En la intimidad de su hogar es afectuoso y cariñoso, manteniendo siempre un nivel de atención elevado hacia cualquier dinámica que implique juguetes o agua."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de lealtad apasionada, colaboración estrecha e intensa complicidad con sus cuidadores de referencia. Al Toller le apasiona trabajar en equipo con su humano, estando siempre dispuesto a participar en actividades físicas y retos cognitivos. Su adiestramiento es muy gratificante gracias a su extraordinaria inteligencia y deseo de complacer, requiriendo métodos de motivación positiva dinámicos que canalicen su alta energía con diversión, pautas claras y cariño constante para evitar la frustración por aburrimiento."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un entusiasmo contagioso y una agilidad atlética deslumbrante que llena el hogar de vitalidad y momentos divertidos. Su tamaño mediano compacto facilita el transporte en viajes cotidianos y la adaptabilidad a diferentes tipos de vivienda. Es un perro sumamente versátil, inteligente y trabajador que destaca en deportes caninos y actividades al aire libre. Su carácter afectuoso, limpio y devoto lo convierte en un compañero incondicional para familias deportistas que disfruten del contacto directo con la naturaleza."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su altísimo nivel de energía y su baja tolerancia a la monotonía requieren ejercicio físico diario significativo y estimulación mental frecuente para prevenir comportamientos destructivos en casa. Posee una vocalización particular conocida como el 'grito del Toller', un chillido agudo de excitación que puede resultar molesto si no se educa desde cachorro. Además, su intenso impulso por perseguir pelotas o aves exige supervisar atentamente sus paseos sin correa para evitar fugas no deseadas."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale de forma única por su técnica tradicional de 'tolling', jugando e interactuando en las orillas para atraer patos curiosos a tiro de cobro. Es un nadador excelente de boca suave con una capacidad gimnástica para el cobro en aguas frías. Destaca de manera sobresaliente en pruebas de agility, flyball y deportes de cobro por su rapidez de respuesta, reflejos atléticos e inteligencia resolutiva ante problemas complejos durante el trabajo."
        }
      ],
      "imageUrl": "/images/breeds/tolling-retriever.webp"
    },
    {
      "id": "lhasa-apso",
      "breed": "Lhasa Apso",
      "title": "Lhasa Apso: El Centinela del Tíbet",
      "epithet": "El Centinela del Tíbet",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Non-Sporting Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad",
        "Protección Territorial Absoluta"
      ],
      "motivations": [
        "Custodia",
        "Comodidad"
      ],
      "traits": [
        "Independencia",
        "Vigilancia",
        "Reserva"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Alto",
        "motivacion_intrinseca": "Aviso Sonoro de Intrusión",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Reservado con Extraños",
        "independencia_cognitiva": "Muy Alta"
      },
      "summary": "El Lhasa Apso es el milenario centinela místico de los monasterios del Tíbet, considerado tradicionalmente como un amuleto sagrado de buena suerte. De abundante manto largo que cae hasta el suelo, rostro cubierto por largos bigotes y cola pluma curvada sobre el lomo, posee una presencia soberana y equilibrada. Su psicología se rige por un instinto de guarda y aviso sonoro territorial absoluto, finísimo oído, independencia cognitiva muy elevada, dignidad serena y una reserva natural ante personas ajenas al hogar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es independiente, vigilante, reservado, sereno y dotado de una firmeza de carácter que contrasta con su tamaño pequeño. El Lhasa Apso actúa en el hogar con la dignidad de un guardián aristocrático, analizando los ruidos con un oído prodigioso. Muestra una actitud prudente e indiferente hacia personas desconocidas, no aceptando familiaridades de extraños. En la convivencia con su familia es cariñoso, apacible y alegre, manteniendo siempre una postura noble y sobria."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Establece una lealtad profunda, respetuosa y calmada con su núcleo familiar, otorgando su afecto de forma selectiva a quienes se ganan su confianza. El Lhasa Apso no es un perro servil ni dependiente, prefiriendo una relación basada en la dignidad y el respeto mutuo. Su educación requiere paciencia, tacto suave y métodos de motivación positiva, ya que su altísima independencia cognitiva rechaza los mandatos autoritarios o los tonos bruscos, respondiendo bien al liderazgo sereno."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta una vigilancia sonora y protección territorial excepcional para la vivienda, alertando ante presencias extrañas con rapidez sin mostrar agresividad física sin motivo. Su comportamiento doméstico es tranquilo, limpio y de baja destructividad, siendo ideal para la vida en pisos. Su belleza estética de pelaje largo le otorga un encanto exótico refinado. Es un compañero longevo, de salud resistente y carácter firme que brinda una lealtad sincera y serena a sus tutores."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su abundante y denso pelaje largo requiere un compromiso constante de cepillado meticuloso diario y baños periódicos para evitar que se anude dolorosamente o acumule suciedad. Su marcada terquedad e independencia cognitiva pueden dificultar el adiestramiento convencional si el tutor carece de paciencia y consistencia. Además, su inclinación al aviso sonoro puede traducirse en ladridos repetitivos si no se educa adecuadamente desde cachorro su instinto guardián en entornos comunitarios."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como perro de alarma e intromisión por su capacidad auditiva superior, capaz de diferenciar pasos de conocidos frente a los de extraños a gran distancia. Posee una gran resiliencia para adaptarse a climas fríos y terrenos interiores. En el entorno familiar, su mayor habilidad es brindar un acompañamiento noble, silencioso y vigilante, destacando además en exhibiciones caninas por su elegante caminata y la majestuosidad de su extenso manto sedoso."
        }
      ],
      "imageUrl": "/images/breeds/lhasa-apso.webp",
      "origen": "Tíbet"
    },
    {
      "id": "pekingese",
      "breed": "Pekinés (Pekingese)",
      "title": "Pekinés: El León Sagrado en Miniatura",
      "epithet": "El León Sagrado en Miniatura",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Autonomía Primitiva / Dignidad"
      ],
      "motivations": [
        "Reposo",
        "Respeto"
      ],
      "traits": [
        "Dignidad",
        "Orgullo",
        "Independencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Muy Alto",
        "motivacion_intrinseca": "Compañía Soberana",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Distante",
        "independencia_cognitiva": "Extrema"
      },
      "summary": "El Pekinés es el milenario león sagrado de la Ciudad Prohibida de China, criado exclusivamente para la realeza imperial como perro de regazo y compañía soberana. De característico andar meciéndose, melena abundante alrededor del cuello y hocico chato expresivo, encarna una presencia majestuosa y única. Su psicología destaca por un orgullo innato, temperamento independiente, umbral de estimulación muy alto, resiliencia emocional elevada y un afecto reservado pero inquebrantable hacia su tutor principal.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es independiente, orgulloso, digno, sereno, valeroso y marcado por una actitud soberana que no busca complacer por sumisión. El Pekinés se comporta en la vivienda con una calma majestuosa, desplazándose con seguridad sin mostrar agitación innecesaria. Muestra una actitud distante e indiferente hacia extraños, manteniendo una reserva aristocrática. A pesar de su diminuta estatura, posee el coraje intrépido de un león, enfrentando cualquier situación percibida como amenaza con audacia imperturbable."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un lazo afectivo exclusivo, profundo y sumamente leal con su tutor de referencia, a quien considera su compañero de igual a igual. El Pekinés demuestra su cariño de forma sutil y tranquila, evitando demostraciones efusivas pero buscando estar presente cerca de su humano. Su adiestramiento exige una paciencia infinita y delicadeza, ya que su extrema independencia cognitiva hace que ignore las órdenes si considera que carecen de elegancia o sentido inmediato."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un comportamiento doméstico pacifico, silencioso y limpio, siendo un habitante del hogar que no causa desorden ni requiere ejercicio intenso. Su belleza exótica de melena leonina y su porte aristocrático convierten la convivencia en una experiencia visual cautivadora. Es un guardián de alarma valiente y muy observador que cuida su espacio con determinación. Su lealtad exclusiva brinda un compañerismo noble, tranquilo y reconfortante para personas que valoren la independencia."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su estructura braquicefálica de hocico muy chato lo hace sumamente sensible al calor extremo y al ejercicio físico intenso, requiriendo ambientes frescos y paseos breves. Su denso manto largo necesita un cepillado diario meticuloso para prevenir nudos y cuidar la higiene en ojos y pliegues faciales. Asimismo, su terquedad imperial puede dificultar la enseñanza de obediencia si no se gestiona con respeto absoluto y premios atractivos sin brusquedad."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como perro de compañía soberana y guardián de regazo imperial por su valor incorruptible y su aguda percepción del entorno. Posee una gran resistencia emocional para mantener la calma en situaciones concurridas sin mostrar miedo. En la vida diaria, su habilidad principal es ofrecer una presencia serena, limpia e higiénica, destacando por su andadura mecida característica y su capacidad para brindar una compañía noble y tranquilizadora a su cuidador."
        }
      ],
      "imageUrl": "/images/breeds/pekingese.webp"
    },
    {
      "id": "chinese-crested",
      "breed": "Crestado Chino (Chinese Crested)",
      "title": "Crestado Chino: El Gracejo Desnudo",
      "epithet": "El Gracejo Desnudo",
      "fciGroup": "Grupo 9: Perros de Compañía",
      "akcGroup": "Toy Group",
      "archetypes": [
        "Apego Extremo (Fusión Emocional)"
      ],
      "motivations": [
        "Calor",
        "Afecto"
      ],
      "traits": [
        "Sensibilidad",
        "Ternura",
        "Dependencia"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Calor Corporal y Mimos",
        "resiliencia_emocional": "Baja",
        "sociabilidad": "Muy Cariñoso",
        "independencia_cognitiva": "Muy Baja"
      },
      "summary": "El Crestado Chino es una exótica y delicada raza de compañía, célebre por su variante sin pelo con elegantes mechones en cabeza, cola y patas. De cuerpo fino, mirada tierna y movimientos gráciles, es un animal sumamente cariñoso desarrollado para brindar calor corporal y afecto incondicional. Su psicología destaca por un apego afiliativo extremo, dependencia emocional muy alta, sensibilidad fina, umbral de estimulación bajo y una necesidad constante de cobijo y caricias humanas.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es dulce, afectuoso, sensible, juguetón, atento y caracterizado por una ternura desbordante en su trato cotidiano. El Crestado Chino busca la cercanía humana de forma continua, comportándose con una delicadeza encantadora en la vivienda. Muestra una actitud amigable e inquisitiva con su núcleo familiar, aunque puede manifestar timidez o cautela ante desconocidos y ruidos estruendosos, prefiriendo siempre refugiarse en los brazos o regazo de sus tutores para sentirse protegido."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una relación de dependencia afectiva intensa, fusión emocional y devoción incondicional con su guía y la familia. Al Crestado Chino le fascina el contacto piel con piel, acurrucarse bajo las cobijas y acompañar a su tutor a cualquier rincón de la casa. Su educación requiere extrema suavidad, paciencia y motivación positiva, ya que es una raza emocionalmente frágil que se asusta ante tonos de voz duros o la impaciencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Aporta un afecto inagotable, una dulzura única y una compañía reconfortante que llena la vivienda de cariño y calidez. Al carecer de pelo en la mayor parte del cuerpo, no desprende pelusa en el hogar ni genera alergias típicas por caspa. Su tamaño diminuto y carácter dócil facilitan su transporte y convivencia en pisos de ciudad. Es un perro alegre y limpio que premia el trato amoroso con una devoción entrañable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su piel expuesta requiere cuidados especiales diarios, incluyendo protector solar para evitar quemaduras en verano y cremas hidratantes periódicas. Es extremadamente friolero y sensible a las bajas temperaturas, necesitando ropa de abrigo adecuada en invierno. Además, su alta dependencia emocional lo hace propenso a sufrir ansiedad por separación si se le deja solo durante periodos prolongados, requiriendo tutores con tiempo abundante para brindarle compañía continua y afectuosa."
        },
        {
          "title": "Habilidades características",
          "sourceLevel": 1,
          "content": "Sobresale como animal de compañía terapéutica y apoyo emocional por su capacidad para emitir calor corporal reconfortante y brindar afecto incondicional. Posee una agilidad física sorprendente y movimientos elásticos que le permiten destacar en juegos de destreza y habilidades toy. En el hogar, su mayor virtud es ofrecer un contacto directo sumamente cariñoso, buscando siempre el amparo del regazo y la tranquilidad de la convivencia familiar."
        }
      ],
      "imageUrl": "/images/breeds/chinese-crested.webp",
      "origen": "China"
    }
  ],
  "archetypes": [
    {
      "id": "apego-extremo-fusion-emocional",
      "number": 1,
      "title": "Apego Extremo (Fusión Emocional)",
      "signature": "Regulación Externalizada / Homeostasis Simbiótica.",
      "summary": "Firma Sistémica: Regulación Externalizada / Homeostasis Simbiótica.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 1,
          "content": "Su identidad está tercerizada. El guía funciona como su córtex prefrontal externo, decidiendo qué es seguro. Sin él, el sistema colapsa emocionalmente al carecer de mecanismos internos para procesar la existencia de forma aislada. No es extrañar; es perder la fuente de seguridad vital."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 1,
          "content": "Demuestran hipervigilancia extrema al rastrear constantemente al guía. Su calma depende totalmente de la presencia cercana de su referente humano. Presentan una fragilidad estructural significativa, desorganizándose emocionalmente ante cualquier cambio en su rutina o ante la separación."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 1,
          "content": "El riesgo principal es la desorganización sistémica (pánico) ante la separación. El perro queda desconfigurado, derivando en vocalizaciones extremas o destrucción. Es un sistema con margen de error mínimo que requiere trabajar la autonomía para evitar la ansiedad crónica."
        }
      ]
    },
    {
      "id": "apego-fragil-afiliativo",
      "number": 2,
      "title": "Apego Frágil Afiliativo",
      "signature": "Espejo Emocional / Ausencia de Buffers Defensivos.",
      "summary": "Firma Sistémica: Espejo Emocional / Ausencia de Buffers Defensivos.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Poseen una empatía elevada que los hace absorber el clima emocional del hogar. Su centro de regulación es el humano, pero su respuesta ante el conflicto no es el control, sino el repliegue."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Poseen una mínima tolerancia al conflicto, recurriendo a la inhibición ante tensiones. Su empatía pasiva refleja el estrés del guía, mientras buscan la invisibilidad física para gestionar la saturación sensorial cuando el entorno se vuelve caótico."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo es la somatización. Al no tener válvulas de escape externas, la tensión se manifiesta en problemas digestivos, alergias o debilidad inmunológica. Son propensos a miedos crónicos en entornos agresivos o volátiles."
        }
      ]
    },
    {
      "id": "cooperacion-humana-clasica",
      "number": 3,
      "title": "Cooperación Humana Clásica",
      "signature": "Plasticidad Cognitiva / Operación en Equipo.",
      "summary": "Firma Sistémica: Plasticidad Cognitiva / Operación en Equipo.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Su equilibrio depende de la acción coordinada. Poseen alta Plasticidad Cognitiva, aprendiendo y transfiriendo funciones con facilidad. El éxito reside en completar secuencias de trabajo validadas por el guía, más que en el afecto pasivo."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Buscan contacto visual referencial para sincronizarse antes de actuar. Su estructura mental lógica facilita el aprendizaje de secuencias complejas. Además, demuestran alta resiliencia social, adaptándose bien a cambios mientras mantengan una función o misión clara."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El peligro es la atrofia funcional. Diseñados para actuar, la falta de desafíos los sume en apatía o aburrimiento crónico. Sin una Misión Compartida, pierden su brillo y pueden desarrollar conductas destructivas por inactividad."
        }
      ]
    },
    {
      "id": "inteligencia-funcional-obsesiva",
      "number": 4,
      "title": "Inteligencia Funcional Obsesiva",
      "signature": "Hiperfoco Operativo / Bucle de Retroalimentación de Tarea.",
      "summary": "Firma Sistémica: Hiperfoco Operativo / Bucle de Retroalimentación de Tarea.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Su bienestar depende de un bucle: Percepción-Acción-Resultado. Al completarse, el sistema libera neurotransmisores de calma. Sin este ciclo, el perro permanece en tensión constante, ya que para él la inactividad es desorden."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Poseen un hiperfoco capaz de bloquear distracciones ambientales. Muestran persistencia física excesiva, ignorando el agotamiento para completar tareas. Su capacidad de anticipación cognitiva les permite predecir órdenes del guía basándose en micro-gestos y patrones del entorno."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo es la neurosis funcional. Sin escape operativo, pastorean estímulos inapropiados. Carecen de un botón de apagado natural; el guía debe enseñarles activamente a descansar y procesar la calma."
        }
      ]
    },
    {
      "id": "proteccion-estructurada-moderna",
      "number": 5,
      "title": "Protección Estructurada Moderna",
      "signature": "Inhibición Reflexiva / Guardia con Referencia.",
      "summary": "Firma Sistémica: Inhibición Reflexiva / Guardia con Referencia.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Opera bajo un modelo jerárquico estratégico. Prioriza la evaluación y espera la confirmación del guía para escalar su respuesta. Si el humano no gestiona el espacio con coherencia, el perro asume el mando defensivo por obligación sistémica."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Este arquetipo distingue con precisión rutinas de intrusos mediante micro-señales ambientales. Su autocontrol sostenido gestiona altos niveles de tensión evitando respuestas agresivas salvo fallo de seguridad. Su ejecución es eficiente y limpia, interviniendo solo con la intensidad necesaria para neutralizar conflictos y evitando el desperdicio de energía."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo surge ante un guía errático. Si el referente no toma decisiones, el sistema activa un mando defensivo autónomo, lo que puede derivar en protección excesiva o reactividad ante extraños al perderse el filtro de seguridad del guía."
        }
      ]
    },
    {
      "id": "proteccion-territorial-absoluta",
      "number": 6,
      "title": "Protección Territorial Absoluta",
      "signature": "Lógica Binaria / Codificación de Perímetro.",
      "summary": "Firma Sistémica: Lógica Binaria / Codificación de Perímetro.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Su regulación es espacial; recupera el centro vigilando el perímetro. Su vínculo se basa en la propiedad: el guía es un activo a preservar. Su diseño mental es de exclusión, dividiendo el mundo entre familia e intrusos."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Este arquetipo actúa con autonomía, interviniendo rápidamente ante intrusiones. Su círculo social es cerrado, diferenciando tajantemente entre familia y extraños, mientras mantiene una vigilancia pasiva constante y altamente eficiente sobre la seguridad de su territorio"
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El desafío es su integración urbana. Su lógica binaria lee lo cotidiano como invasión. Requieren guías que respeten su necesidad de distancia y gestionen las interacciones sociales de forma muy estructurada para evitar conflictos reactivos."
        }
      ]
    },
    {
      "id": "guardia-ancestral-de-tiempo-largo",
      "number": 7,
      "title": "Guardia Ancestral de Tiempo Largo",
      "signature": "Vigilancia Estocástica / Tiempo Geológico.",
      "summary": "Firma Sistémica: Vigilancia Estocástica / Tiempo Geológico.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Su regulación es interna y autónoma. El equilibrio nace de la inmovilidad y la observación silenciosa. No busca tareas constantes; su estabilidad reside en estar presente, gestionando su propio enfriamiento emocional sin necesidad de validación externa."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Estos perros poseen un umbral de estimulación altísimo, ignorando lo trivial para conservar energía. Su autonomía decisional y presencia disuasoria permiten gestionar conflictos mediante la calma y la observación, priorizando la eficacia instintiva sobre la acción reactiva innecesaria."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo es la incomprensión del guía. Su ritmo lento y economía de movimientos se confunden con falta de inteligencia. Forzar una obediencia dinámica daña el vínculo; su biología está hecha para resistencia emocional y autonomía decisional."
        }
      ]
    },
    {
      "id": "contencion-pesada-calma-profunda",
      "number": 8,
      "title": "Contención Pesada / Calma Profunda",
      "signature": "Regulación por Absorción / Masa Estabilizadora.",
      "summary": "Firma Sistémica: Regulación por Absorción / Masa Estabilizadora.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Funcionan como amortiguadores emocionales. Su baja reactividad les permite absorber el caos ambiental sin alterar su centro. Regulan el entorno mediante una presencia pasiva que disuade el conflicto por mero volumen y calma estructural."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Gracias a su paciencia estructural, toleran manipulaciones y juegos intensos sin inmutarse. Su baja reactividad sensorial les permite evaluar situaciones con calma, mientras su imponente volumen físico establece límites naturales, protegiendo el espacio sin necesidad de recurrir al ladrido."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo es la invisibilidad de su sufrimiento. Al absorber estrés sin vocalizar, los guías pueden ignorar señales sutiles de angustia o dolor. El desafío es no abusar de su paciencia y asegurarles momentos de descarga real."
        }
      ]
    },
    {
      "id": "autonomia-primitiva-dignidad",
      "number": 9,
      "title": "Autonomía Primitiva / Dignidad",
      "signature": "Cierre Sistémico / Autorregulación Interna.",
      "summary": "Firma Sistémica: Cierre Sistémico / Autorregulación Interna.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Posee una psicología de baja dependencia y autorregulación interna. El humano es un aliado, no el centro del universo. Operan bajo una agenda propia; si una orden choca con su lógica instintiva, elegirán ignorarla para mantener su integridad."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Estos perros destacan por su silencio comunicativo mediante micro-gestos, un afecto selectivo que nace de la voluntad real y no de la dependencia, y una gran resiliencia que les permite gestionar la soledad con dignidad sin requerir constante entretenimiento externo."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo es la ruptura del vínculo por autoritarismo. Los métodos basados en la fuerza se perciben como traiciones al respeto mutuo. No se someten; se cierran emocionalmente. El éxito requiere invitar, no mandar, respetando sus límites."
        }
      ]
    },
    {
      "id": "independencia-cazadora-solitaria",
      "number": 10,
      "title": "Independencia Cazadora Solitaria",
      "signature": "Radar Externo / Desconexión del Vínculo.",
      "summary": "Firma Sistémica: Radar Externo / Desconexión del Vínculo.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Toma de decisiones autónoma enfocada en el rastreo y la persecución de presas en solitario."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Presentan sordera funcional al enfocarse en rastros y autonomía exploratoria de gran rango. Su energía corporal se proyecta siempre hacia adelante, manteniendo un foco intenso y constante en el horizonte, ignorando el entorno social cuando persiguen estímulos."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El desafío principal son las fugas y la falta de control. Su desconexión biológica ante el rastro es innegociable. El guía debe gestionar su libertad y construir canales de comunicación que resistan la potencia de sus instintos de exploración."
        }
      ]
    },
    {
      "id": "sensorialidad-olfativa-profunda",
      "number": 11,
      "title": "Sensorialidad Olfativa Profunda",
      "signature": "Inmersión Química / Tiempo Circular.",
      "summary": "Firma Sistémica: Inmersión Química / Tiempo Circular.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "El olfato es su pensamiento principal. El rastro actúa como ansiolítico, estabilizando su ritmo cardíaco y mente. Es una meditación en movimiento donde la verdadera conversación ocurre con el suelo, no con el guía."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Hiperconexión olfativa donde lo visual es secundario. Poseen una persistencia monótona, capaz de seguir pistas durante horas. Muestran una baja urgencia emocional, manteniendo un temperamento estable y pausado, inalterable ante ruidos o movimientos bruscos del entorno."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El desafío es la desconexión por saturación. Cuando la nariz se activa, el canal auditivo se bloquea físicamente. Es un estado de flujo profundo que el guía debe respetar como alimento emocional necesario para su equilibrio sistémico."
        }
      ]
    },
    {
      "id": "lebreles-desapego-y-movimiento",
      "number": 12,
      "title": "Lebreles (Desapego y Movimiento)",
      "signature": "Activación Binaria / Regulación por Reposo.",
      "summary": "Firma Sistémica: Activación Binaria / Regulación por Reposo.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Se estabilizan a través del silencio y la inactividad en el hogar. Poseen una psicología binaria: del reposo felino a la intensidad máxima en segundos. Su vínculo es paralelo, basado en la compañía silenciosa y el respeto mutuo."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Activación visual instantánea mediante radar de movimiento. En casa, muestran un letargo basal extremo, siendo sumamente silenciosos. Al correr, inician una persecución con autonomía total, entrando en un túnel sensorial que anula cualquier intento de control externo."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo son las fugas visuales. El movimiento anula su seguridad personal. Son sensibles a la rudeza y ambientes caóticos. Su afecto es sutil; requiere un refugio de paz y la gestión cuidadosa de su libertad en espacios abiertos."
        }
      ]
    },
    {
      "id": "terriers-instrumentales",
      "number": 13,
      "title": "Terriers Instrumentales",
      "signature": "Bucle Acción-Resolución / Tenacidad Física.",
      "summary": "Firma Sistémica: Bucle Acción-Resolución / Tenacidad Física.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "La regulación depende de la resolución física. Necesitan que su esfuerzo modifique el entorno para equilibrar su química interna. El vínculo es operativo: respetan al guía como socio, pero mantienen autonomía total en la ejecución táctica."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Poseen baja inhibición ante el riesgo, priorizando objetivos sobre la autoprotección. Su tenacidad física les permite ignorar fatiga y dolor. Son expertos en inteligencia práctica, utilizando su cuerpo de forma creativa para superar obstáculos físicos y resolver problemas."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo es la escalada de intensidad sin escape. Sin tareas, resuelven problemas inexistentes destructivamente. Su falta de interruptor de apagado exige que el guía dirija su energía hacia retos constructivos para evitar la neurosis funcional."
        }
      ]
    },
    {
      "id": "hiperreactividad-ornamental",
      "number": 14,
      "title": "Hiperreactividad Ornamental",
      "signature": "Amplificación Sensorial / Fragilidad de Baseline.",
      "summary": "Firma Sistémica: Amplificación Sensorial / Fragilidad de Baseline.",
      "sections": [
        {
          "title": "Dinámica Psicológica",
          "sourceLevel": 2,
          "content": "Regulación mixta: descarga funcional (morder/traccionar) y sintonía con el guía. Son dependientes emocionales; si el guía es inestable, el perro se vuelve errático. Su psicología es de entrega total en cada acción."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "Demuestran resiliencia física extrema ante estímulos negativos. Son hiper-responsivos al lenguaje no verbal del guía. Su instinto los lleva a utilizar la boca como herramienta principal para gestionar la excitación, canalizando energía a través del agarre."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 2,
          "content": "El riesgo es la sobreexcitación mal gestionada. Su intensidad suele malinterpretarse como agresión. El desafío es educar en el autocontrol y la calma, proporcionando canales seguros para su necesidad de agarre y una estructura de vida predecible."
        }
      ]
    }
  ],
  "frameworks": [
    {
      "id": "regulacion-emocional",
      "number": 1,
      "title": "Regulación Emocional",
      "signature": "¿Cómo recupera mi perro la calma tras reaccionar a un estímulo?",
      "summary": "La regulación emocional es la capacidad del sistema nervioso canino para volver a la calma tras una activación. Cada perro utiliza vías distintas para lograr este retorno. Identificar el método específico es fundamental, ya que aplicar una estrategia incompatible con su biología aumenta la frustración y la incomunicación.",
      "sections": [
        {
          "title": "1. Regulación Externa (Humana)",
          "sourceLevel": 2,
          "content": "El perro depende del guía para recuperar la calma emocional. Ante situaciones estresantes, necesita la mirada, contacto físico o confirmación verbal del humano, ya que no puede gestionar su estado de ánimo por cuenta propia.\nSEÑAL: Si el perro busca proximidad o contacto visual contigo ante eventos estresantes, su regulación es externa. Sin tu intervención, no logra recuperar la calma por sí mismo."
        },
        {
          "title": "2. Autorregulación (Interna)",
          "sourceLevel": 2,
          "content": "El perro gestiona el estrés de forma autónoma. No necesita validación externa para recuperar la calma; emplea mecanismos propios como alejarse, olfatear o pausar su actividad para procesar la información de forma independiente.\nSEÑAL: Tras momentos de tensión, el perro se aleja, se sacude o realiza pausas sin solicitar ayuda. Es un proceso biológico independiente que no requiere intervención externa."
        },
        {
          "title": "3. Regulación por Tarea (Funcional)",
          "sourceLevel": 2,
          "content": "El perro recupera la calma mediante acciones dirigidas. Necesita un objetivo o problema que resolver para gestionar la energía de un estímulo. La inactividad le causa estrés, por lo que requiere realizar tareas para liberar tensión.\nSEÑAL: El perro gestiona su estrés mediante actividades dirigidas como morder u objetos portadores. La inactividad lo mantiene tenso; requiere un objetivo específico para regular su estado."
        },
        {
          "title": "4. Regulación Territorial",
          "sourceLevel": 2,
          "content": "La estabilidad depende de la seguridad del espacio y del control del entorno. El perro se calma al verificar que su territorio es predecible y que sus fronteras están bajo supervisión constante.\nSEÑAL: El perro recupera su equilibrio patrullando o vigilando puntos altos. Su estabilidad depende de supervisar el entorno; si pierde el control visual, su recuperación se dificulta."
        },
        {
          "title": "5. Inmersión Sensorial",
          "sourceLevel": 2,
          "content": "El perro recobra la calma mediante el uso de sus sentidos, principalmente el olfato. Esta conducta no busca evitar el estímulo, sino procesar la información del entorno a través de la exploración olfativa.\nSEÑAL: Ante el estrés, el perro explora rastros olfativos. La recolección de información química le permite procesar el entorno y reducir su activación emocional de forma independiente."
        }
      ]
    },
    {
      "id": "tipo-de-vinculo",
      "number": 2,
      "title": "Tipo de Vínculo",
      "signature": "¿Cuál es la naturaleza de la conexión entre mi perro y yo y qué espera él de nuestra interacción diaria?",
      "summary": "El mecanismo de gestión del estrés y la convivencia determina cómo el perro se relaciona contigo. Entender esta dinámica permite ajustar las expectativas, la demanda y el contacto físico. Al conocer el tipo de vínculo, puedes adaptar tu comportamiento para mejorar la interacción diaria y fortalecer la relación con tu perro.",
      "sections": [
        {
          "title": "1. Vínculo de Fusión (Simbiosis)",
          "sourceLevel": 2,
          "content": "Es una relación intensa donde el perro pierde su individualidad. Depende totalmente de tu presencia y estado de ánimo, sin marcar límites claros entre ambos.\nSEÑAL: El perro orbita cerca de ti, reflejando tus tensiones. Su lealtad absoluta implica fragilidad: la distancia física o emocional es percibida como una falla de seguridad vital."
        },
        {
          "title": "2. Vínculo Cooperativo (Equipo)",
          "sourceLevel": 2,
          "content": "Aquí, el perro y tú son socios. Existe una comunicación constante donde el perro observa tus acciones para coordinarse contigo. Ambos trabajan juntos para lograr metas compartidas mediante la cooperación mutua.\nSEÑAL: Disfruta la tarea compartida y mantiene una sintonía constante. Ofrece conductas esperando tu respuesta para coordinarse. Es un vínculo funcional de alta cooperación y mutuo respeto operativo."
        },
        {
          "title": "3. Vínculo Funcional (Referencial)",
          "sourceLevel": 2,
          "content": "El humano es el guía que dicta normas y recursos. La relación es práctica y jerárquica. El perro respeta las reglas y sigue tus instrucciones para obtener seguridad y estructura.\nSEÑAL: El perro es obediente y respeta las normas buscando previsibilidad. No requiere contacto emocional profundo; te sigue porque eres el director que otorga estructura y estabilidad."
        },
        {
          "title": "4. Vínculo Paralelo (Coexistencia)",
          "sourceLevel": 2,
          "content": "Esta conexión destaca por la autonomía. Ambos comparten espacio y tiempo, pero mantienen vidas independientes. La relación no necesita una interacción constante para ser válida, basada en la convivencia respetuosa.\nSEÑAL: Coexiste pacíficamente sin demandar atención constante. Valora su autonomía y espacio personal. Su lealtad se manifiesta en un pacto silencioso de convivencia respetuosa y cercanía no invasiva."
        },
        {
          "title": "5. Vínculo Territorial (Patrimonial)",
          "sourceLevel": 2,
          "content": "El perro te protege porque te considera parte importante de su entorno. Su lealtad se muestra a través de la vigilancia y la protección física, priorizando tu seguridad antes que el afecto social.\nSEÑAL: Se muestra vigilante y protector, priorizando tu seguridad sobre el afecto social. Te integra en su instinto de propiedad como un activo valioso que debe ser preservado."
        }
      ]
    },
    {
      "id": "fuente-de-motivacion",
      "number": 3,
      "title": "Motivaciones",
      "signature": "¿Cuál es el motor biológico que realmente enciende el sistema de recompensa y acción de mi perro?",
      "summary": "Los perros tienen diferentes preferencias biológicas que activan su sistema de recompensa. Identificar qué gratifica específicamente a tu perro permite proponer actividades alineadas con sus necesidades, mejorando la convivencia. Entender estas motivaciones evita frustraciones cuando los premios habituales, como la comida, no resultan efectivos para el aprendizaje o la colaboración.",
      "sections": [
        {
          "title": "1. Afecto y Cercanía",
          "sourceLevel": 2,
          "content": "Estos perros buscan interacción social. La gratificación proviene de la validación del guía mediante contacto físico, palabras de aprobación y proximidad, que funcionan como sus recompensas principales.\nSEÑAL: El perro prefiere caricias antes que juguetes o comida. Su prioridad es la interacción afectiva y sentirse seguro dentro de su grupo social."
        },
        {
          "title": "2. Cooperación Social",
          "sourceLevel": 2,
          "content": "La satisfacción surge de la coordinación con el guía. Realizar actividades en conjunto resulta más gratificante para el perro que obtener un premio material al finalizar la tarea.\nSEÑAL: El perro colabora activamente en tareas coordinadas. Encuentra agrado en la ejecución de acciones compartidas junto a su guía por sobre otros estímulos."
        },
        {
          "title": "3. Control y Orden",
          "sourceLevel": 2,
          "content": "Perros de pastoreo o guardia se satisfacen gestionando su entorno. Prefieren dirigir movimientos ajenos o supervisar la integridad de un espacio físico determinado.\nSEÑAL: El perro busca detener movimientos o vigilar áreas. El orden ambiental funciona como su refuerzo positivo, mientras que el descontrol le provoca malestar."
        },
        {
          "title": "4. Activación Visual",
          "sourceLevel": 2,
          "content": "La recompensa es el movimiento observado. El perro busca perseguir estímulos visuales por la acción misma, sin necesidad de capturar o morder el objeto seguido.\nSEÑAL: El perro reacciona ante objetos móviles. Correr tras un estímulo visual constituye su satisfacción principal, independientemente de si logra atraparlo o morderlo."
        },
        {
          "title": "5. Exploración Olfativa",
          "sourceLevel": 2,
          "content": "El mundo se decodifica a través de la nariz. Para estos perros, recolectar datos químicos del entorno es una necesidad vital y una fuente de placer profundo.\nSEÑAL: Este perro prioriza explorar rastros olfativos sobre cualquier otra actividad. Leer el entorno mediante su nariz es su fuente principal de satisfacción."
        },
        {
          "title": "6. Resolución Instrumental",
          "sourceLevel": 2,
          "content": "Es la tenacidad física y mental llevada al extremo. El perro disfruta usando su fuerza, su mandíbula o su astucia para modificar el mundo físico.\nSEÑAL: Estos perros disfrutan manipular objetos, excavar o tirar de cuerdas. Su satisfacción proviene de superar obstáculos físicos usando su potencia y mandíbula."
        },
        {
          "title": "7. Autonomía",
          "sourceLevel": 2,
          "content": "La recompensa es el ejercicio de la voluntad propia. Hacer lo que ellos quieren, cuando ellos quieren, sin supervisión ni instrucciones.\nSEÑAL: El perro está más equilibrado cuando toma sus propias decisiones y explora a su antojo. La libertad de elección mantiene su motivación alta."
        }
      ]
    },
    {
      "id": "gestion-del-estimulo",
      "number": 4,
      "title": "Gestión de estímulos",
      "signature": "¿Cómo reacciona el sistema de mi perro si la información externa supera su tolerancia?",
      "summary": "El sistema nervioso del perro tiene una capacidad límite para procesar estímulos diarios. Cuando la información sobrepasa este umbral, se activa una respuesta automática de emergencia para evitar el colapso. Estos comportamientos suelen malinterpretarse como problemas de conducta, cuando en realidad son mecanismos fisiológicos necesarios para que el perro gestione la sobrecarga informativa.",
      "sections": [
        {
          "title": "1. Escalamiento",
          "sourceLevel": 2,
          "content": "El perro aumenta su intensidad de respuesta ante estímulos fuertes. Este incremento físico en su comportamiento le permite gestionar la energía y recuperar el control ante la presión ambiental.\nSEÑAL: Ladridos, saltos o excitación alta. El perro aumenta su actividad física y vocal para gestionar la presión externa mediante una descarga de energía directa."
        },
        {
          "title": "2. Repliegue",
          "sourceLevel": 2,
          "content": "El perro elige alejarse para evitar la sobrecarga. Esta conducta defensiva busca crear distancia física y limitar la interacción social para reducir el estrés causado por el entorno.\nSEÑAL: El perro se esconde, se aleja o evita el contacto visual. Entra en un estado de protección emocional al no poder gestionar la saturación ambiental."
        },
        {
          "title": "3. Contención",
          "sourceLevel": 2,
          "content": "El perro mantiene su posición sin reaccionar de inmediato. Se encuentra en un estado de vigilancia y tensión contenida mientras analiza la situación antes de decidir cómo responder.\nSEÑAL: El perro permanece quieto, en tensión y observa atentamente. Mantiene el control de la situación mediante una respuesta interna de alta intensidad y baja expresión."
        },
        {
          "title": "4. Intervención",
          "sourceLevel": 2,
          "content": "El perro realiza acciones físicas directas sobre el estímulo. Su conducta busca cambiar o desplazar el elemento del entorno que le genera conflicto, intentando neutralizar el problema de inmediato.\nSEÑAL: El perro interfiere físicamente, bloqueando el paso o empujando. Actúa directamente sobre el entorno para neutralizar o modificar el estímulo que percibe como un problema."
        },
        {
          "title": "5. Desconexión",
          "sourceLevel": 2,
          "content": "El perro decide que el estímulo no requiere una respuesta. Opta por ignorar el entorno para conservar su energía y mantener un estado interno de calma y equilibrio estable.\nSEÑAL: El perro ignora activamente el entorno estresante. Utiliza un filtro de atención selectivo para mantener su equilibrio y protegerse de estímulos que considera irrelevantes."
        },
        {
          "title": "6. Absorción",
          "sourceLevel": 2,
          "content": "Ante estímulos intensos, el perro no muestra cambios conductuales. Debido a su alta tolerancia, el sistema nervioso procesa el evento sin necesidad de reaccionar visiblemente ante la situación externa.\nSEÑAL: El perro mantiene su calma habitual ante estímulos intensos. No reacciona al evento, ya que su sistema no lo clasifica como un conflicto necesario."
        }
      ]
    },
    {
      "id": "tiempo-y-recuperacion",
      "number": 5,
      "title": "Tiempo y recuperación",
      "signature": "¿Cuál es el margen de tiempo de mi perro y cuánto tarda en volver a la calma tras un evento intenso?",
      "summary": "La capacidad de cada perro para procesar emociones y recuperar la calma tras un evento varía considerablemente. Este parámetro, fundamental para la convivencia, determina cuánto tiempo persiste un estado emocional. Aunque es común esperar reacciones uniformes, la realidad biológica de cada perro es distinta, influyendo directamente en su tiempo de procesamiento.",
      "sections": [
        {
          "title": "1. Tiempo Corto (Inmediato)",
          "sourceLevel": 2,
          "content": "Estos perros reaccionan rápidamente a los estímulos. Su capacidad para olvidar eventos pasados es alta, evitando que los estados emocionales persistan entre diferentes experiencias.\nSEÑAL: Tras una experiencia intensa, el perro recupera su comportamiento normal rápidamente sin mostrar efectos persistentes del evento previo."
        },
        {
          "title": "2. Tiempo Medio (Secuencial)",
          "sourceLevel": 2,
          "content": "Estos perros vinculan eventos lógicamente, comprendiendo secuencias. Su nivel de atención les permite mantener el foco durante actividades prolongadas y tareas complejas.\nSEÑAL: El perro mantiene la atención durante secuencias largas y predice rutinas con estabilidad, facilitando el aprendizaje de tareas complejas."
        },
        {
          "title": "3. Tiempo Largo (Estacionario)",
          "sourceLevel": 2,
          "content": "Estos perros procesan eventos como estados duraderos. Una experiencia afecta su conducta durante horas o días, demostrando una memoria emocional prolongada que condiciona sus respuestas.\nSEÑAL: Perros sensibles que tardan días en procesar un evento negativo. Su sistema emocional \"rumia\" los sucesos, requiriendo guías pacientes para recuperar la calma con lentitud."
        },
        {
          "title": "4. Tasa de Recuperación",
          "sourceLevel": 2,
          "content": "La recuperación mide la velocidad química de retorno al reposo. Los perros con recuperación rápida se calman al terminar el estímulo, mientras que otros requieren más tiempo."
        }
      ]
    },
    {
      "id": "plasticidad-vs-rigidez",
      "number": 6,
      "title": "Plasticidad y rigidez",
      "signature": "¿Qué tan capaz es mi perro de adaptarse a nuevos contextos sin colapsar?",
      "summary": "La resiliencia canina define la capacidad de un perro para adaptarse a nuevos contextos o cambios en su rutina sin sufrir estrés. Mientras algunos individuos se ajustan fácilmente a diversas situaciones cotidianas, otros muestran dificultad para gestionar variaciones, sintiéndose inseguros o superados ante cualquier alteración de su entorno habitual.",
      "sections": [
        {
          "title": "1. Plasticidad Alta (El Generalista)",
          "sourceLevel": 2,
          "content": "Estos perros poseen gran versatilidad. Aprenden tareas opuestas y cambian entre ellas sin conflictos internos, manteniendo estabilidad emocional ante diversos contextos y situaciones nuevas.\nSEÑAL: Se adapta fácilmente a diversos entornos y rutinas sin estrés. Gestiona cambios con curiosidad y flexibilidad, demostrando gran versatilidad en su comportamiento diario."
        },
        {
          "title": "2. Rigidez Especializada (El Especialista)",
          "sourceLevel": 2,
          "content": "Estos perros están especializados en funciones específicas como correr o rastrear. Su sistema tolera poco las variaciones; fuera de su actividad habitual, muestran inseguridad y estrés significativo.\nSEÑAL: Depende estrictamente de la previsibilidad. Cambios mínimos en su rutina o entorno le generan alertas desproporcionadas, mostrando incapacidad para gestionar situaciones fuera de su especialidad."
        }
      ]
    }
  ],
  "lifeStages": [
    {
      "id": "infancia-y-juventud",
      "number": 1,
      "title": "Infancia y Juventud",
      "signature": "Plasticidad Explosiva",
      "summary": "Alta capacidad de aprendizaje, desarrollo neurosensorial, baja inhibición fina e identidad en formación.",
      "sections": []
    },
    {
      "id": "adultez",
      "number": 2,
      "title": "Adultez: La Consolidación",
      "signature": "Consolidación de Criterio",
      "summary": "Criterio, consistencia conductual, eficiencia energética y máxima especialización de rol.",
      "sections": []
    },
    {
      "id": "vejez",
      "number": 3,
      "title": "Vejez: La Síntesis",
      "signature": "Tiempo Geológico",
      "summary": "Ahorro de energía, necesidad de estabilidad, sabiduría ambiental y tasa de recuperación más lenta.",
      "sections": []
    }
  ],
  "energyBiases": [
    {
      "id": "femenino",
      "number": 1,
      "title": "Femenino: Centralidad y Perímetro Interno",
      "signature": "Núcleo + Selectividad",
      "summary": "Enfoque en la regulación vincular, lectura de microgestos y protección del perímetro interno.",
      "sections": []
    },
    {
      "id": "masculino",
      "number": 2,
      "title": "Masculino: Expansión y Movimiento",
      "signature": "Mapa + Desplazamiento",
      "summary": "Enfoque en la delimitación externa, exploración espacial y marcas territoriales del mapa.",
      "sections": []
    }
  ]
};
