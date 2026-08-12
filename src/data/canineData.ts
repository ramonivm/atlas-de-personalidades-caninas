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
      ]
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
      ]
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
      "summary": "El Alaskan Malamute es el estudio definitivo sobre la fortaleza ancestral y la economía de esfuerzo. A diferencia del Siberian Husky, fue forjado para la carga pesada y la supervivencia extrema. Representa la voluntad inamovible y una psicología que no busca complacer, sino coexistir bajo leyes de jerarquía y respeto mutuo muy antiguas.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es digno, afectuoso, leal y profundamente juguetón, aunque con una seriedad subyecente. Posee una autoconfianza masiva; no es un perro que se impresione fácilmente por el entorno. Su inteligencia es de tipo práctico-superviviente: solo gasta energía en aquello que considera necesario o gratificante. Es un perro de rituales sociales claros y una honestidad comunicativa que no deja lugar a dudas."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo se define como \"Pertenencia de Manada con Respeto Jerárquico\". El Malamute ve al guía como el líder de una expedición. Su afecto es expansivo y cálido, pero no es servil. La conexión se construye a través de la coherencia y la capacidad del guía para establecer límites claros. Si siente que el líder es errático, asumirá la toma de decisiones por seguridad del grupo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es un perro de una nobleza y una paciencia admirables con su núcleo familiar. Su resistencia física es legendaria, siendo el compañero ideal para travesías de larga distancia. Es un perro muy limpio, silencioso (aunque suele \"hablar\" o aúllar) y posee una resiliencia ante la adversidad climática y física que pocas razas pueden igualar. Su presencia aporta estabilidad y calma rústica al hogar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su independencia y terquedad son un desafío para el manejo; no posee obediencia ciega. Presenta un instinto de presa muy alto que requiere gestión constante. No tolera bien el calor extremo debido a su denso pelaje. Además, su jerarquía con otros perros de su mismo sexo suele ser muy marcada, lo que puede derivar en conflictos de dominancia si no se gestiona la socialización de forma experta."
        }
      ]
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
      "summary": "El American Pit Bull Terrier es un perro que concentra potencia y determinación en un formato medio, sin adornos. Su esencia real —cuando está bien criado y bien llevado— es la de un animal atlético, intensamente presente y muy orientado al vínculo. Es un cuerpo diseñado para rendir y una mente que, si no tiene dirección, se inventa una.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Es intenso, tenaz y sorprendentemente sensible a la dinámica humana. Tiene un tipo de confianza que no se expresa como calma flemática, sino como determinación: cuando algo lo motiva, cuesta sacarlo del foco. En casa puede ser muy cariñoso y relajado, pero su sistema nervioso no es de \"modo ahorro\" como un mastín; es más bien un motor que necesita regulación y límites claros. Bien equilibrado, tiende a ser estable; mal gestionado, puede volverse impulsivo, demandante o reactivo por frustración."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Suele ser un vínculo afiliativo e intenso, con mucha necesidad de contacto y participación. No tanto desde la fragilidad, sino desde una lógica de pertenencia: \"yo estoy contigo y tú estás conmigo\". El APBT normalmente busca feedback humano y se ordena mejor cuando siente estructura, rutina y coherencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su corazón social (con su familia) suele ser enorme. Es un perro muy dispuesto a vincular, con una alegría física que se nota en cómo usa el cuerpo: juega con todo, abraza, se pega, se entrega. También tiene una tolerancia alta al esfuerzo y una capacidad atlética real, lo que lo vuelve excelente para actividades estructuradas. Con buena guía, puede ser un compañero profundamente leal, estable y \"de equipo\" en la vida cotidiana."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su tenacidad es un arma de doble filo: cuando se fija, insiste. Esto exige un humano capaz de entrenar autocontrol (pausas, límites, manejo de impulsos) y no solo \"cansarlo\". Además, como tipo terrier, puede tener una predisposición a escalar en conflictos si no se socializa y maneja con criterio, especialmente en situaciones de alta excitación."
        }
      ]
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
      "summary": "El American Staffordshire Terrier es un estudio sobre la dualidad: una potencia física explosiva envuelta en una de las naturalezas más afectuosas que existen hacia el ser humano. Su estampa es la de un atleta de fuerza pura; musculoso, de centro de gravedad bajo y una mandíbula que denota una tenacidad histórica. Sin embargo, su mirada es brillante, curiosa y profundamente conectada con las emociones de su guía.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es audaz, vital y sumamente entusiasta. El Amstaff posee una confianza en sí mismo que roza lo imperturbable, lo que le otorga una estabilidad emocional notable en entornos humanos. Es un perro que vive con intensidad: cuando juega, lo hace con todo su cuerpo, y cuando descansa, busca la calma total. A diferencia de otras razas de guardia que son reservadas, el Amstaff suele ser expansivo y optimista."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo con su dueño es de una dependencia afectiva muy alta. Para el Amstaff, el ser humano no es solo un guía, es su centro de gravedad. Es un perro que sufre profundamente con el aislamiento, ya que su psicología está diseñada para la interacción constante. Su lealtad es absoluta y su deseo de agradar es uno de los motores más fuertes de su comportamiento."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su equilibrio emocional y su paciencia con el núcleo familiar son extraordinarios. Es una raza de una nobleza inmensa, capaz de soportar el ajetreo de un hogar activo con una sonrisa perenne. Su inteligencia es muy alta y su disposición para el aprendizaje es excelente, siempre que se base en el refuerzo positivo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su potencia física puede ser difícil de gestionar si no se entrena el control de impulsos desde cachorro. Posee una baja tolerancia a la frustración si no se trabaja correctamente, lo que puede derivar en conductas destructivas por exceso de energía. Además, debido a su herencia genética, puede presentar una alta reactividad hacia otros perros si no ha sido socializado de manera exquisita."
        }
      ]
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
      "summary": "El Australian Cattle Dog, también conocido como Blue Heeler, es un monumento a la funcionalidad y la resistencia. No es un perro diseñado para la estética, sino para la utilidad absoluta bajo el sol abrasador y terrenos implacables. Su cuerpo es compacto, denso y extremadamente potente, proyectando una sensación de fuerza inagotable. Su mirada es una de las más intensas del mundo canino: vigilante, inteligente y carente de cualquier rastro de duda.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es intensamente valiente, decidido y dotado de una lealtad que raya en la obsesión. El Cattle Dog es un perro de \"misión\": siempre necesita estar haciendo algo. Posee una seriedad operativa que lo distingue de la alegría juguetona de otros pastores. Es un animal de un solo dueño, extremadamente protector y con una desconfianza natural hacia lo desconocido."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo con su dueño es de una profundidad absoluta, pero de naturaleza posesiva. Se le conoce como un \"perro velcro\" porque su lugar favorito es pegado a la pierna de su referente. A diferencia de razas más independientes, el Cattle Dog siente la necesidad de supervisar cada movimiento de su dueño. Su lealtad es activa y vigilante: no solo te acompaña, te protege y te asiste."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su ética de trabajo es inigualable; es un perro que nunca se rinde ante la fatiga o el dolor. Posee una salud física y mental extremadamente robusta, siendo una de las razas más longevas entre los perros de trabajo. Su capacidad de aprendizaje es asombrosa, especialmente en tareas que requieren resolución de problemas complejos."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su alta energía y su instinto de pastoreo pueden ser problemáticos si no se canalizan. Al ser un \"Heeler\" (perro que muerde los talones para mover el ganado), tiene una tendencia natural a morder tobillos o manos si se sobreexcita. Un Cattle Dog sin propósito se volverá obsesivo, territorial o destructivo."
        }
      ]
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
      "summary": "El Azawakh es la personificación de la altivez y la reactividad primitiva. Físicamente es de una delgadez extrema y una elegancia casi arquitectónica, pero debajo de esa piel fina hay una estructura de puro nervio y músculo. Es un perro que emana una vibración de alerta constante. No es un animal de \"compañía\" en el sentido moderno; es un centinela que permite la cercanía de su familia pero mantiene una frontera invisible e infranqueable para el resto del mundo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es intensamente independiente, reservado y altivo. El Azawakh posee una personalidad \"felina\": es selectivo con su afecto y muy consciente de su espacio personal. A diferencia de otros lebreles, no es sumiso. Tiene un carácter fuerte y una dignidad que no tolera la manipulación física innecesaria."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo se define como \"Pertenencia Selectiva Exclusiva\". El Azawakh no se entrega a cualquiera; elige a su guía y a su núcleo familiar con un criterio casi místico. Una vez que el vínculo se establece, es de una lealtad feroz, pero siempre manteniendo su autonomía."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su lealtad es inquebrantable y su valentía es desproporcionada para su físico liviano. Es un perro extremadamente limpio, silencioso en el hogar y de una elegancia que cautiva. Posee una salud de hierro y una resistencia física al calor y al esfuerzo que es legendaria."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su alta reactividad ante extraños puede ser difícil de gestionar en entornos urbanos. El Azawakh no suele aceptar que desconocidos lo toquen. Su instinto de caza es masivo; cualquier cosa que corra activará su sistema de persecución a altas velocidades."
        }
      ]
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
      "summary": "El Barbet es un estudio sobre la versatilidad benevolente. Bajo su icónico manto de rizos densos y a menudo embarrados, se esconde una mente equilibrada que no conoce la agresividad. Su psicología está marcada por una necesidad vital de agua y de contacto humano; es un perro que se siente incompleto si no tiene una superficie que explorar o un guía al que acompañar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es dócil, alegre y sumamente equilibrado. Posee una naturaleza pacífica en casa siempre que descargue su energía fuera. Es empático y comprende de manera sutil el estado de ánimo de sus dueños."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Se caracteriza por una dependencia cooperativa. Disfruta participando en las actividades cotidianas del núcleo familiar."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Es muy versátil, hipoalergénico (no suelta pelo), excelente con niños y otros animales, y posee una salud robusta."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere un cuidado constante de su manto rizado para evitar nudos y acumulación de suciedad. Necesita estímulo mental y físico regular."
        }
      ]
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
      "summary": "El Basenji no parece un perro moderno porque no responde a la lógica del perro moderno. Su cuerpo es compacto, elástico y funcional, sin exageraciones ni adornos. Sus orejas erguidas, su cola enroscada y su mirada atenta remiten a un animal más cercano al origen que a la domesticación plena. No proyecta sumisión ni búsqueda de aprobación: proyecta presencia autosuficiente.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Es un perro independiente, curioso y mentalmente agudo. El Basenji no actúa desde la obediencia ni desde la complacencia, sino desde la evaluación constante del entorno. Tiene una inteligencia rápida, pero no cooperativa; entiende, pero no necesariamente acepta."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo es de asociación funcional y respeto mutuo, no de dependencia. El Basenji no se fusiona ni se somete; convive. Puede desarrollar un apego real, pero este es silencioso, no demandante y poco expresivo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Su autonomía emocional es extraordinaria. No desarrolla ansiedad por separación con facilidad y puede autorregularse sin apoyo constante. Es limpio, silencioso (no ladra tradicionalmente) y poco invasivo en el hogar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Su baja predisposición a la obediencia tradicional. No responde bien al entrenamiento basado en repetición o jerarquía rígida. Además, su instinto de caza y exploración es fuerte."
        }
      ]
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
      "summary": "El Basset Hound es un maestro del estoicismo y la persistencia. Posee una de las mentes más enfocadas de la naturaleza: una vez que un aroma entra en su sistema, el resto del mundo desaparece. Es un perro de una nobleza rústica, con una mirada melancólica que esconde una determinación inquebrantable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es pacífico, bondadoso y extremadamente sociable, pero con una veta de terquedad legendaria. Posee una calma profunda que lo hace inmune a la mayoría de los estresores cotidianos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "El vínculo es afectuoso, constante y de baja demanda energética. Disfruta de la compañía y de descansar cerca de sus dueños."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Muy tolerante con niños y otros animales, casi imposible de provocar. Posee un olfato extraordinario y una estabilidad psicológica inmensa."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Dificultad de adiestramiento por su enfoque olfativo. Tiende a la obesidad y requiere atención en orejas y columna."
        }
      ]
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
      "summary": "El Beagle es la personificación del optimismo y la tenacidad sensorial. Es un sabueso de proporciones armoniosas, cuya apariencia amable y compacta esconde una resistencia física asombrosa. Su misión evolutiva: seguir un rastro sin descanso.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Su temperamento es audaz, alegre y equilibrado. Extrovertido, sin timidez ni agresividad, con una gran fortaleza mental y curiosidad por el entorno."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Es afectuoso pero sin dependencia. Disfruta de la compañía activa, pero su olfato siempre compite por su atención."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Extremadamente sociable con perros y humanos, de tamaño ideal, robusto y muy optimista."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Sordera selectiva cuando sigue un olor, tendencia a vocalizar/aullar si se aburre, y apetito voraz."
        }
      ]
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
      "summary": "El Border Collie es el epítome de la inteligencia funcional y la agudeza visual. Definido por la precisión, donde cada fibra muscular y cada proceso cognitivo están orientados hacia la eficiencia. Su mirada fija (\"ojo\") y su disposición corporal sugieren que siempre está un paso por delante de la realidad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Intensidad intelectual y física sobrecogedora. No simplemente está, sino que observa y procesa. Posee una ética de trabajo inquebrantable y una receptividad extrema a los matices del entorno."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Asociación operativa de alta fidelidad. Busca una misión compartida con su guía, entregando su atención completa a las señales humanas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Capacidad de aprendizaje número 1 del mundo canino, versatilidad máxima en agility y trabajo, devoción y precisión absoluta."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere un alto nivel de estimulación mental y física. Puede desarrollar obsesiones o conductas de pastoreo no deseado si no canaliza su energía."
        }
      ]
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
      "summary": "El Boxer es energía emocional en estado puro. Es el perro que nunca termina de crecer, no por inmadurez, sino porque se niega a soltar la alegría. Vive con el cuerpo, siente con todo y ama sin cálculo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Expansivo, expresivo y vital. Vive con intensidad emocional frontal y transparente. Combina juventud de espíritu con valentía cuando se requiere."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Apego alegre y protector. Necesita contacto físico, juego e interacción constante, además de proteger activamente a su familia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Alegría contagiosa, paciencia con niños, lealtad y expresividad transparente."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Dificultad para autorregular la excitación, necesidad de espacio y ejercicio, no tolera bien la soledad prolongada."
        }
      ]
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
      "summary": "El Boyero de Berna es la personificación de la nobleza rústica. Sólido, sereno y profundamente reconfortante. Su estampa tricolor es el reflejo de un equilibrio emocional que parece tallado en los Alpes suizos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Serenidad imponente y temperamento equilibrado. Observador, reflexivo, sabe estar y prefiere la armonía."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Devoción absoluta. Custodia con su presencia y busca sentir el peso de su cuerpo cerca del guía."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Paciente con niños, nobleza innata, presencia reconfortante y pacífica."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Gran tamaño requiere manejo, sufre si se le aísla o deja solo por períodos largos."
        }
      ]
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
      "summary": "El Bulldog Francés es un estudio sobre la densidad emocional en formato pequeño. Monopoliza el espacio afectivo con su mezcla de entusiasmo explosivo y obstinación inquebrantable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Audaz, lúdico y profundamente testarudo. Posee un gran sentido del humor y expresión facial manipuladora."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Fusión táctil y posesiva. Necesita el contacto directo y no tolera bien ser ignorado."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Excelente adaptabilidad urbana, cómico, cariñoso y lleno de presencia."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Salud delicada (braquiocefalia), baja tolerancia a la frustración si se le consiente, resoplidos que otros perros pueden malinterpretar."
        }
      ]
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
      "summary": "El Cane Corso es la encarnación del poder bajo control. Atleta de respuesta rápida, musculatura definida y mirada analítica. Un sistema de vigilancia activo que prefiere la disuasión inteligente antes que la fuerza bruta.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Equilibrado, serio y leal. Discernimiento superior para distinguir visitas amables de amenazas reales."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Conectividad táctica. Necesita sentir a su guía y trabajar en equipo."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Alta entrenabilidad, devoto con la familia, guardián nato con excelente autocontrol."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere un guía experimentado. No tolera la soledad prolongada ni la falta de dirección."
        }
      ]
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
      "summary": "El Chihuahua es un perro pequeño con una presencia psicológica desproporcionada. Con radar permanente, memoria emocional rápida y una relación intensa con el control del entorno.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Agudo, reactivo y sensible a microcambios. Atento, gracioso e inteligente si se educa con límites."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Estrecho y selectivo. Busca calor, proximidad y lectura emocional continua."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Súper perceptivo, adaptable a pisos pequeños, afectuoso y leal con su círculo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Riesgo de vocalización o reactividad por sobreprotección o falta de socialización."
        }
      ]
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
      "summary": "El Chow Chow tiene una presencia sólida, contenida y autosuficiente. Expresión reservada y andar felino que proyecta dignidad inalterable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Independiente, reflexivo y autocentrado. Observa, evalúa y decide."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Lealtad selectiva. Afecto profundo pero poco demostrativo, basado en la permanencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Gran autonomía emocional, silencioso, limpio y poco reactivo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Rigidez emocional, no tolera métodos coercitivos ni incoherencia."
        }
      ]
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
      "summary": "El Cocker Spaniel Inglés es la esencia del entusiasmo transformado en perro. Irradia optimismo y curiosidad inagotable, combinando la dulzura doméstica con la pasión exploradora.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sociable, alegre, con la cola siempre en movimiento y gran empatía."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Cálido y dependiente de refuerzo afectivo y participación."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Carismático, versátil, atlético y cariñoso."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Mantenimiento exigente de orejas y manto, posible ansiedad si no se le canaliza."
        }
      ]
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
      "summary": "El Dachshund posee una conciencia de gigante: no se percibe a sí mismo como un perro pequeño. Audaz, decidido y con una resiliencia formidable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Valiente, astuto, picaro e independiente. Obstinación operativa cuando detecta un rastro."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Lealtad selectiva y protectora con su persona favorita."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Inteligencia práctica, excelente perro de alerta, adaptable y leal."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Cuidado con la columna, tendencia a excavar y ladrar si no se entrena."
        }
      ]
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
      "summary": "El Dálmata fue diseñado para acompañar: seguir un ritmo constante durante horas, recorrer distancias largas y mantener alerta funcional. Estética icónica y resistencia física de atleta.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Energético, atento y mentalmente activo. Necesidad constante de estar en marcha."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Apego a un estilo de vida activo compartido con su guía."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Resistencia física notable, carismático, inteligente y dinámico."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere ejercicio real diario para evitar hiperactividad o nerviosismo."
        }
      ]
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
      "summary": "El Doberman es la expresión más pura del perro alerta y comprometido. Elegante, intenso y profundamente leal, combina presencia física con una sensibilidad mental sorprendente.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Temperamento intenso, altamente perceptivo y consciente del entorno."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Apego visceral y absoluto. Sombra silenciosa de su persona de referencia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Devoción extraordinaria, capacidad disuasiva natural, aprendizaje ultrarrápido."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Alta dependencia emocional, necesita un entorno estructurado para no sobrecargarse."
        }
      ]
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
      "summary": "Escultura clásica de potencia física y armonía. Manto blanco inmaculado y presencia majestuosa de cazador y guardián.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Entereza, equilibrio emocional, observador silencioso e imponente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Lealtad protectora e intensamente afectuosa con la familia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Excelente freno de mano en casa, perro limpio, silencioso y valiente."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere socialización experta con otros perros y protección solar en la piel."
        }
      ]
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
      "summary": "Punto de equilibrio exacto entre la agilidad del cazador de alimañas y la sobriedad del perro de guarda. Atento, seguro y de alta longevidad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Vivaz, sobrio, sin nerviosismo exagerado, con gran capacidad de evaluación."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Socio de responsabilidad. Leal y digno con la familia."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Salud rústica y longeva, tamaño mediano versátil, silencioso e hiperatento."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Instinto de presa fuerte que requiere guía clara."
        }
      ]
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
      "summary": "El Golden Retriever es la encarnación de la cooperación y la confianza. Amable, luminoso, competente y empático. Un puente social entre personas y animales.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Optimista, seguro, tolerante, de aprendizaje rápido y baja reactividad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañerismo afectivo y colaborativo. Ama participar en el grupo familiar."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Extraordinaria adaptabilidad, excelente asistente y compañero familiar, no agresivo."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Sufre con la indiferencia o inactividad, tendencia a ganar peso si no hace ejercicio."
        }
      ]
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
      "summary": "Estudio sobre la presencia pasiva. A pesar de su imponente estatura, es un gigante de salón dulce, sereno y orientado a la convivencia en el hogar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Gentil, paciente y afectuoso. Confianza serena en su propio tamaño."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Apego de contacto total; se siente un perrito faldero gigante."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Muy tranquilo en interiores, excelente con niños, disuasión visual insuperable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Esperanza de vida corta (8-10 años), gastos logísticos y veterinarios elevados."
        }
      ]
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
      "summary": "Energía concentrada en un cuerpo compacto. Audaz, rápido, sin miedo y con una tenacidad inextinguible.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Inagotable, valiente, práctico y de acción inmediata."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Asociación funcional y lúdica. Leal cuando hay aventuras compartidas."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Resolutivo, súper divertido, inteligente y muy resistente."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Necesita aprender rutina de calma; sin canalización es hiperactivo e insistente."
        }
      ]
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
      "summary": "El Labrador Retriever vive desde la expectativa positiva: las cosas se pueden resolver y la cooperación es la mejor estrategia. Noble, versátil y apasionado del agua y el cobro.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Estable, alegre, dispuesto a actuar y socialmente abierto."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Socio activo de trabajo y vida familiar."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Alta entrenabilidad, nobleza total, adaptabilidad a cualquier hogar."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Entusiasmo efusivo de joven, glotón si no se le controla la comida."
        }
      ]
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
      "summary": "El arquetipo del perro funcional e íntegro. Inteligencia, lealtad y una ética de trabajo incansable al servicio de su humano.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Firme, atento y consciente. Seguro de sí mismo y con un alto sentido del deber."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Relación de rol y equipo; necesita sentir una misión conjunta."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Versatilidad insuperable, foco, capacidad de protección y nobleza."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Sufre si no tiene estímulo mental o si las reglas son incoherentes."
        }
      ]
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
      "summary": "Intenso, reactivo y expansivo en escala reducida. Pelaje abundante y expresión viva de alerta constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Alerta basal elevada, expresivo e intrepido."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Dependencia afectiva y búsqueda de contención continua."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Cariñoso, gracioso, muy alerta y de gran personalidad."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Propenso a ladrar ante estímulos si no se le enseña autorregulación."
        }
      ]
    },
    {
      "id": "poodle",
      "breed": "Poodle",
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
      "summary": "Soberbia inteligencia, agilidad y empatía. Atlético y cerebral, ideal para deportes y compañía avanzada.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Curioso, observador, aprende secuencias complejas al instante."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Sintonía cognitiva profunda; entiende los matices de su guía."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Súper entrenable, no suelta pelo, elegante y limpio."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Se aburre con la monotonía; requiere estimulación cognitiva."
        }
      ]
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
      "summary": "El Pug busca estar contigo en calma. Afable, pacífico y cómico, un regulador emocional del hogar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tranquilo, humorístico, sin agresividad y muy amigable."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Acompañamiento constante y búsqueda de confort compartido."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Sumamente pacífico, apto para pisos, excelente con niños."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Propenso al calor y problemas respiratorios por su braquiocefalia."
        }
      ]
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
      "summary": "Fuerza contenida y lealtad inquebrantable. Músculo y temple reflexivo para proteger a su núcleo familiar con nobleza.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tranquilo en casa, seguro de sí mismo, protector consciente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Siente la responsabilidad de cuidar a su familia y busca apoyarse físicamente."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Muy firme, noble, altamente entrenable y estable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Requiere un dueño experimentado con reglas claras."
        }
      ]
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
      "summary": "Manto blanco esponjoso y 'sonrisa de samoyedo'. Trabajo en equipo, gran energía y sociabilidad universal.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Entusiasta, gregario, hablador/vocal y muy alegre."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Integra a la familia como su manada de expedición."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Sin agresividad, hermoso, resistente y divertido."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Mantenimiento del pelo, vocalización si se aburre."
        }
      ]
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
      "summary": "Dignidad concentrada en cuerpo zuno y ágil. Soberano, limpio como un gato e indómito.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Audaz, independiente, reservado, limpio y felino."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Basado en el respeto mutuo; elige amar sin sumisión."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Súper limpio, silencioso, fascinante y de gran personalidad."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Trata las órdenes como sugerencias; posesivo con juguetes."
        }
      ]
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
      "summary": "Resistencia indomable, ojos magnéticos y pasión por correr en manada. Pacífico, amigable y libre.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Extrovertido, sociable, expresivo mediante aullidos, infatigable."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañero de expedición y manada."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Hermoso, limpio, sin agresividad y súper amigable."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Experto escapista si se aburre; alta necesidad de ejercicio."
        }
      ]
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
      "summary": "Atleta dorado de máxima sensibilidad y apego. Necesita estar 'encima' del dueño y cooperar con dulzura.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Gentil, veloz, ultra empático y sensible a los tonos de voz."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Apego extremo en fusión física y emocional."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Extraordinario compañero, sin olor, súper entrenable y cariñoso."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Muy vulnerable a la soledad o al trato brusco."
        }
      ]
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
      "summary": "Manto gris metálico aristocrático y energía atlética continua. Requiere presencia humana y dirección clara.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sensible, intenso, atlético y apasionado por la actividad en equipo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Dependencia cooperativa de alta intensidad."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Elegante, versátil en outdoor, fiel y muy enfocado en su guía."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "No tolera el vacío o la inactividad; requiere dueño presente."
        }
      ]
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
      "summary": "Perro milenario sagrado, místico y de piel desnuda o corta. Sereno, observador y leal con su núcleo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sereno, intuitivo, reservado con desconocidos y calmo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Lealtad por capas; busca el contacto físico templado y silencioso."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Elegancia mística, limpio, noble, silencioso e hipoalergénico."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Cuidados de la piel (protector solar / hidratación) en la variedad sin pelo."
        }
      ]
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
      "summary": "El Pastor Australiano es un atleta incansable con una mirada penetrante y una capacidad táctica innata. Diseñado para dirigir ganado con agilidad relámpago, requiere estimulación cognitiva continua para evitar la frustración.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Súper enfocado, versátil y protector. Posee una energía inagotable y una obsesión natural por organizar el movimiento de su entorno."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Demanda un liderazgo estructurado y actividades de alta exigencia mental para canalizar su enorme drive."
        }
      ]
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
      "summary": "Prototipo de perro de trabajo operacional supremo. Posee reflejos felinos y una intensidad reactiva que exige un manejo profesional y deportivo de alto nivel.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Hiperatento, enfocado y con impulsos de presa altísimos. No tolera la inactividad ni la incoherencia en las instrucciones."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Requiere una relación simbiótica basada en el adiestramiento avanzado y la disciplina constante."
        }
      ]
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
      "summary": "Un perro de pastor en cuerpo compacto. Pese a su baja estatura, conserva la tenacidad y firmeza necesarias para mover ganado mayor sin arredrarse.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Alegre, audaz y persistente. Suele usar su ladrido sonoro para marcar límites e interactuar."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Le encanta sentirse parte activa del núcleo familiar participando en todas las actividades."
        }
      ]
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
      "summary": "Elegante y sumamente empático, el Sheltie capta los matices del estado de ánimo humano con precisión casi mística. Sensible a tonos de voz duros.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tranquilo, leal y dulce. Responde con extrema delicadeza a la corrección positiva."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Se funde con su tutor, buscando agradar constantemente en un ambiente sereno."
        }
      ]
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
      "summary": "Derivado del Pastor Alemán, con un pelaje deslumbrante blanco y un carácter notablemente más suave y afable, profundamente centrado en el hogar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Atento, cariñoso y equilibrado. Muestra una actitud guardiana sobria sin llegar a la agresividad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Forma apegos sólidos e intensos; no soporta el aislamiento o el trato brusco."
        }
      ]
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
      "summary": "Un pastor francés imponente de patas dobles y mirada franca. Frank, leal y con una fuerza física que requiere un canal de trabajo claro.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Calmado, seguro de sí mismo y firme. No demuestra ansiedad pero vigilancia constante."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Construye una lealtad inquebrantable basada en la coherencia y el respeto mutuo."
        }
      ]
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
      "summary": "Aspecto barbudo y robusto. Antiguo perro de tracción y boyero versátil con un coraje legendario y un carácter centrado.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tranquilo y sensato. Reacciona únicamente ante una amenaza real con firmeza imponente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Profundamente devoto a toda la familia, paciente con los niños y sobrio."
        }
      ]
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
      "summary": "Raza atigrada hiper-activa y atlética. Posee un sentido impecable del deber y una agilidad mental sobresaliente para deportes caninos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Energético, persistente y despierto. Necesita tareas continuas para canalizar su foco."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Disfruta el adiestramiento positivo y la colaboración estrecha en el campo."
        }
      ]
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
      "summary": "Inconfundible por su denso pelaje acordonado. Diseñado para mimetizarse con las ovejas y repeler lobos y depredadores en solitario.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Independiente, digno y reservado. Toma decisiones de defensa por su cuenta sin esperar órdenes."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Respetuoso con su familia, pero requiere un dueño experimentado en perros de guardia ancestral."
        }
      ]
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
      "summary": "A diferencia de su primo el Pembroke, posee cola larga y orejas más redondeadas. Conserva un temperamento más sosegado y cauteloso.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sensato, trabajador y adaptable. Muy cariñoso en el hogar y firme en el exterior."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Excelente perro de compañía y trabajo ligero en entornos rurales o urbanos."
        }
      ]
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
      "summary": "Leyenda viva de los Alpes alpinos. Su masa física colosal se equilibra con una dulzura y paciencia asombrosas frente a la vida cotidiana.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Manso, pausado y profundamente bondadoso. Rara vez pierde los estribos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Adora el contacto con la familia y requiere espacios donde descansar cómodo."
        }
      ]
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
      "summary": "Coloso ibérico con papada desarrollada y ladrido grave y cavernoso. Su estrategia es la presencia disuasoria pacífica antes del combate.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Calmo, noble y ecuánime. Muestra un temperamento afable en la casa y vigilante de noche."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Protege con devoción silenciosa a su grupo sin necesidad de órdenes activas."
        }
      ]
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
      "summary": "Piel suelta arrugada e hiper-musculada. Guardián doméstico ancestral de las villas italianas con un instinto territorial poderoso.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Serio, leal y con presencia disuasoria masiva. Reservado ante la intrusión."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Afectuoso con los suyos; requiere tutores que entiendan la gestión de molosos grandes."
        }
      ]
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
      "summary": "Creado para inmovilizar cazadores furtivos sin despedazarlos. Ágil para su tamaño, silencioso y con un instinto de guardián equilibrado.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Docil y cariñoso en el hogar, tremendamente valeroso si detecta amenaza en la oscuridad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Perro de familia excepcional que disfruta de la vida tranquila cerca de su gente."
        }
      ]
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
      "summary": "Un atleta impetuoso con aspecto majestuoso. Requiere una rutina deportiva firme y un adiestramiento bien canalizado.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Impulsivo, territorial e intensamente leal. Siempre listo para la acción."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Demanda un líder activo y claro con el que compartir rutinas exigentes."
        }
      ]
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
      "summary": "Pese a su tamaño pequeño, conserva la valentía y estructura de un perro de guardia. Su ladrido de advertencia es certero.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Alegre, protector, curioso y vocal. No se percibe a sí mismo como un perro pequeño."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Se involucra en la dinámica familiar diaria con entusiasmo contagioso."
        }
      ]
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
      "summary": "Cabeza gigantesca y arrugada con una mirada tierna. Un moloso sensible que busca la presencia continua de sus dueños.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tranquilísimo, dulce y paciente con los niños. Guardián natural sin violencia innecesaria."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un vínculo de apego estrecho; prefiere estar recostado a los pies de su dueño."
        }
      ]
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
      "summary": "Famoso por su instinto innato de rescate en el agua y su denso pelaje impermeable. Un verdadero 'niñero' canino por su paciencia infinita.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Extremadamente dócil, tranquilo y amoroso. Difícilmente muestra agresividad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Siente fascinación por estar rodeado de seres queridos y sumergirse en el agua."
        }
      ]
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
      "summary": "Antiguo perro chino de guardia y caza. Piel con pliegues característicos, lengua azul-negra y un carácter soberano independiente.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Silencioso, digno e independiente. Mantiene una distancia serena con extraños."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Devoto a su círculo íntimo; demuestra afecto de manera sobria y contenida."
        }
      ]
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
      "summary": "Moloso robusto de origen insular español. Tono de ladrido grave y potente con una presencia física sumamente disuasoria.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Firme, seguro y adusto. Posee un fuerte sentido de la territorialidad y la guardia."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Fiel a su dueño; necesita un tutor con experiencia en molosos de trabajo."
        }
      ]
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
      "summary": "Famoso por su perfil único de cabeza en forma de huevo. Musculoso, lleno de energía e inventiva juguetona, con un umbral de dolor altísimo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Payaso, payaso e intrépido. Se apasiona por el juego y no conoce la fatiga fácil."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla un apego entusiasta; le encanta ser parte activa de bromas y juegos familiares."
        }
      ]
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
      "summary": "Compacto y con mandíbulas bien desarrolladas, es célebre por su devoción sin límites por las personas y los niños.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Extremadamente cariñoso, valiente y confiable con la gente. Un verdadero peluche en casa."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Busca acurrucarse constantemente; su mayor recompensa es la cercanía física."
        }
      ]
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
      "summary": "Pequeño cazador de zorros y roedores con pelaje blanco y doble capa. Curioso, con personalidad alegre y tenaz.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Intrépido, independiente y simpático. Siempre listo para explorar jardines o parques."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañero afectuoso pero sin resultar empalagoso; valora sus momentos de autonomía."
        }
      ]
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
      "summary": "Pelaje sedoso y elegancia diminuta que esconde el verdadero corazón de un terrier cazador de roedores.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Valiente, vivaz y territorial. No duda en ladrar para anunciar cualquier novedad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Adora acompañar a su dueño a todas partes y ser mimado intensamente."
        }
      ]
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
      "summary": "Silueta icónica de cejas pobladas y barba. Perro sobrio, digno e inusualmente independiente para un terrier.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Reservado, independiente y leal. No le interesan los juegos superficiales con desconocidos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Forma un lazo profundo con una o dos personas elegidas en el hogar."
        }
      ]
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
      "summary": "Posee sangre de terrier en su cruce histórico, otorgándole una barba expresiva y un temperamento más rústico y resuelto.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Peleón, inteligente y tenaz. Se enfrenta a cualquier reto sin medir tamaños."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Cómplice divertido en el campo y cariñoso en el sofá familiar."
        }
      ]
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
      "summary": "Con pelaje largo e hilos sedosos, es la variedad más apacible y dócil de los Teckels.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Dulce, calmado y afectuoso. Mantiene el buen olfato pero con un trato muy delicado."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Le encanta acurrucarse bajo las cobijas y acompañar en paseos relajados."
        }
      ]
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
      "summary": "Más pesado y colorido que su pariente japonés. Un coloso silencioso de mirada penetrante y lealtad incuestionable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sereno, majestuoso y reservado. No ladra innecesariamente; actúa con calma imponente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Vínculo sagrado y devoto con su familia; distante ante extraños."
        }
      ]
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
      "summary": "Perro primitivo mediterráneo capaz de dar saltos verticales prodigiosos. Orejas erguidas grandes y ojos color ámbar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Felino, veloz, noble e independiente. En casa es una estatua tranquila."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Requiere comprensión de su naturaleza primitiva y libertad supervisada en el campo."
        }
      ]
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
      "summary": "Cazador de conejos incansable en terrenos volcánicos. Gran resistencia al calor y olfato finísimo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Nervioso en la caza, manso y noble en el hogar. Sobrio y trabajador."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Leal a quien respeta su instinto natural de movimiento y exploración."
        }
      ]
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
      "summary": "Posee el olfato más potente del reino canino. Sus arrugas faciales y orejas largas canalizan las partículas de olor directamente a su trufa.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Gentil, pacífico y terco cuando sigue una huella. Una vez que engancha un rastro, nada lo distrae."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Un bonachón entrañable que necesita paseos de rastreo para canalizar su mente."
        }
      ]
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
      "summary": "Distinguido por la cresta de pelo inverso a lo largo de la espina dorsal. Fuerte, veloz e intrépido cazador africano.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Digno, tranquilo en casa y poderoso en el exterior. Gran perro guardián."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Profundamente leal a su familia; no responde bien a la fuerza bruta."
        }
      ]
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
      "summary": "El aristócrata del campo de caza. Su muestra estatuaria congelada en el tiempo es una obra maestra de la genética canina.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Energético en el campo, dulce e inofensivo en casa. Lleno de gracia y nobleza."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Siente devoción por trabajar en equipo con su cazador o tutor activo."
        }
      ]
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
      "summary": "Pelaje sedoso moteado ('Belton'). Un perro de muestra con carácter afable y cariñoso, perfecto para el hogar.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Dulce, juguetón y pacífico. Muy dócil con los niños."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Busca la compañía constante y disfrutar de paseos por la naturaleza."
        }
      ]
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
      "summary": "Espectacular manto rojo caoba. Eterno cachorro de espíritu jovial que transmite energía constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Demonio de alegría, afectuoso e impulsivo. Ama correr a máxima velocidad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Necesita tutores dinámicos que le brinden horas de ejercicio libre."
        }
      ]
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
      "summary": "Compacto y vivaz. Uno de los perros de muestra más populares por su increíble adaptabilidad y energía constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Entusiasta, rápido y fácil de adiestrar. Siempre atento a su guía."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañero leal y extrovertido tanto en el trabajo como en la vida urbana."
        }
      ]
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
      "summary": "Manto rizado característico. Utilizado históricamente para pastoreo, cobro en agua y ayuda a pescadores en las costas andaluzas.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tratable, atlético y de aprendizaje rapidísimo. Muy enfocado en su grupo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Adora las tareas activas y las dinámicas acuáticas con su guía."
        }
      ]
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
      "summary": "Usado por pescadores lusos para llevar redes y mensajes entre barcos. Muy obediente, con pelo rizado u ondulado sin muda.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Valiente, alegre y obediente. Excepcional nadador."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Excelente perro familiar de espíritu colaborador."
        }
      ]
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
      "summary": "Ancestral perro de cobro y levantamiento. Mueve la cola incesantemente mientras explora matorrales con energía alegre.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Alegre, trabajador y sumamente dócil. Ama el agua y los senderos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Forma apegos entusiastas con toda la familia."
        }
      ]
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
      "summary": "Aspecto de bola de algodón blanco. Extrovertido, afectuoso y sin agresión, diseñado para acompañar con dulzura.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Encantador, alegre y sumamente cariñoso. No genera tensiones."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Prospera en el regazo y en el ambiente familiar cálido."
        }
      ]
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
      "summary": "Una de las razas de compañía más antiguas del Mediterráneo. Pelo largo blanco y sedoso con temperamento cariñoso.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Alerta, dulce y fiel. Reacciona a los pasos con curiosidad."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Desarrolla una dependencia afectiva profunda y dulce."
        }
      ]
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
      "summary": "Criado en los palacios imperiales chinos. Pese a su aspecto aristocrático, es un perro robusto, tranquilo y extremadamente dulce.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tranquilo, confiado y cariñoso. Rara vez ladra o se altera."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Un verdadero compañero de piso sereno y amoroso."
        }
      ]
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
      "summary": "Ojos grandes expresivos y orejas sedosas. Combina la dulzura de un perro de regazo con el toque alegre de un spaniel.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Incapaz de tener malicia. Tierno, adaptable y pacífico."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Sigue a sus dueños como una sombra amorosa."
        }
      ]
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
      "summary": "Orejas erguidas que recuerdan las alas de una mariposa. Una de las razas pequeñas más inteligentes del mundo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Curioso, despierto y extraordinariamente hábil para aprender."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Ama participar en juegos interactivos y trucos."
        }
      ]
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
      "summary": "Patrón de manto en 'esmoquin'. Perro urbano ideal, simpático, limpio y de temperamento sumamente agradable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Divertido, educado y muy dócil. Rara vez ladra sin motivo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañero adaptable para la vida moderna en ciudad."
        }
      ]
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
      "summary": "Galgo ruso de pelaje ondulado largo. Su estampa es pura poesía visual: silencioso y calmado en casa, un rayo en campo abierto.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Independiente, educado y silencioso. En el hogar parece un felino gigante."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Afecto discreto y digno sin pedir atención constante."
        }
      ]
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
      "summary": "Atleta milenario hispano. Famoso por su dulzura profunda, su hábito de dormir largas horas y su estallido de velocidad en libertad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sensible, dulce, silencioso y humilde. Un alma pacífica."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Forma apegos sutiles y reconfortantes de presencia tranquila."
        }
      ]
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
      "summary": "El perro más rápido del mundo (hasta 70 km/h). Curiosamente, en casa es conocido como el 'dormilón de 45 kilos' por su calma total.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Apacible, silencioso y enormemente cariñoso."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Disfruta de la comodidad del hogar y paseos estirando sus patas."
        }
      ]
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
      "summary": "Versión mediana del Galgo. Elegante, hiper-afectuoso y extraordinariamente limpio y silencioso en departamentos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sensible, dulce y mimoso en la casa. Un rayo de agilidad al aire libre."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Adora dormir pegado a su dueño sintiendo su calor corporal."
        }
      ]
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
      "summary": "Manto largo y sedoso de valor de pasarela con la agilidad de un cazador de leopardos de las montañas de Afganistán.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Orgulloso, independiente y distante. No responde a la complacencia sumisa."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Una relación de igual a igual basada en la fascinación mutua."
        }
      ]
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
      "summary": "Cazador sagrado de los beduinos. Estampa liviana, orejas plumadas y una resistencia a la carrera en desierto inigualable.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tranquilo, limpio y misterioso. Profundamente fiel pero sin empalagar."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Respeta a su tutor en una convivencia serena y armoniosa."
        }
      ]
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
      "summary": "Una de las razas más altas del mundo (hasta 90 cm a la cruz). 'Cordero en casa, león en la caza', su presencia impone respeto pero transmite paz.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Noble, paciente y extraordinariamente dulce. No guarda rencores."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Se apoya suavemente en las piernas de su dueño pidiendo afecto."
        }
      ]
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
      "summary": "Diminuto lebrel renacentista de elegancia sublime. Busca cobijo bajo las cobijas y calor constante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sensible, cariñoso y de movimientos etéreos."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Un mimado de la casa que premia el cariño suave."
        }
      ]
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
      "summary": "Guardián turco con la mordida más fuerte del mundo canino. Implacable contra depredadores.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Inflexión absoluta ante amenazas. Tranquilo si nada turba su dominio."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Lealtad ancestral y protectora."
        }
      ]
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
      "summary": "Pastor francés de pelo largo e instinto guardián refinado.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sensible pero valiente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Muy unido a su núcleo."
        }
      ]
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
      "summary": "Pequeño pastor ágil de mirada vivaz.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Puro nervio e inteligencia."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Hiperconectado con su guía."
        }
      ]
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
      "summary": "Famoso pelaje abundante con tono de ladrido hueco y alegre.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Juguetón y cariñoso."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Amigo incondicional de los niños."
        }
      ]
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
      "summary": "Raza alemana de trabajo rústico con equilibrio emocional excepcional.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Calmado pero seguro."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Protector abnegado."
        }
      ]
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
      "summary": "Aspecto simiesco de león con un corazón de oro pacífico.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Tranquilísimo y bondadoso."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Un miembro gentil de la familia."
        }
      ]
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
      "summary": "Pariente del Terranova en manto blanco y negro.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Amante del agua y las personas."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Devoto y protector."
        }
      ]
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
      "summary": "Moloso balear autóctono potente e imponente.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Serio y seguro."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Fiel a su hogar."
        }
      ]
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
      "summary": "Tamaño mediano de pelo corto y músculos definidos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Despierto y vivaz."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Guardián ágil."
        }
      ]
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
        "Protección Estructurada Moderna",
        "Hiperreactividad Ornamental"
      ],
      "motivations": [
        "Alarma",
        "Acción",
        "Atención",
        "Custodia"
      ],
      "traits": [
        "Alerta",
        "Valentía",
        "Inteligencia",
        "Energía",
        "Tenacidad",
        "Lealtad"
      ],
      "sourceValues": null,
      "metrics": {
        "umbral_de_estimulacion": "Bajo",
        "motivacion_intrinseca": "Vigilancia y Protección del Espacio",
        "resiliencia_emocional": "Alta",
        "sociabilidad": "Media – Evaluador y Guardián Compacto",
        "independencia_cognitiva": "Media-Alta"
      },
      "summary": "Raza valiente, hiperatenta y llena de energía. Posee el temperamento y carácter firme de un perro de guarda de gran tamaño en una estructura pequeña y estilizada.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Audaz, dinámico y extremadamente alerta. Es un guardián natural con un gran temperamento y una curiosidad inagotable."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Extremadamente afable, devoto y cariñoso con su núcleo familiar, aunque tiende a ser reservado y desconfiado ante desconocidos."
        },
        {
          "title": "Lo positivo",
          "sourceLevel": 1,
          "content": "Excelente perro de alarma, gran agilidad e inteligencia, pelaje de bajo mantenimiento y salud atlética y resistente."
        },
        {
          "title": "Lo negativo",
          "sourceLevel": 1,
          "content": "Propenso a ladridos excesivos y territorialidad si no se le proporciona estimulación mental y límites claros."
        }
      ],
      "imageUrl": "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_4057.jpg"
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
      "summary": "Manto suave azulado y barba distintiva.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Orgulloso y valiente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Un todoterreno fiel."
        }
      ]
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
      "summary": "Aspecto de corderito pero con la velocidad y valor de un terrier de minas.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Dulce en casa, veloz en el campo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañero noble."
        }
      ]
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
      "summary": "Clásico terrier británico repleto de chispa y agilidad.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Inagotable y vivaz."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Cómplice de aventuras."
        }
      ]
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
      "summary": "Cabeza con forma de nutria y temperamento más equilibrado que otros terriers.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sociable y rústico."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Amable y afectuoso."
        }
      ]
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
      "summary": "Raza famosa por interpretar a 'Toto' en El Mago de Oz.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Curioso y simpático."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Siempre listo para jugar."
        }
      ]
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
      "summary": "Pelo rojo alambrado con un corazón intrépido sin límites.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Apasionado y valeroso."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Un amigo incondicional."
        }
      ]
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
      "summary": "Aspecto similar al Airedale pero en tamaño compacto.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Alegre y constante."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Tratable y simpático."
        }
      ]
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
      "summary": "Perro nacional de Finlandia conocido por su ladrido rítmico al señalar aves.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Vivaz y expresivo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañero atento."
        }
      ]
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
      "summary": "Antiguo compañero de los vikingos en la caza de grandes mamíferos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Valiente y rústico."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Fiel e independiente."
        }
      ]
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
      "summary": "Raza sagrada japonesa de pelaje blanco y carácter calmo y digno.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Silencioso e imponente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Devoto a su guía."
        }
      ]
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
      "summary": "Sabueso autóctono del norte de España con una voz melódica y potente.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Incombustible en el campo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Noble y cariñoso."
        }
      ]
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
      "summary": "Basset francés de pelo duro dorado y temperamento alegre.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Alegre e incansable."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Amable y divertido."
        }
      ]
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
      "summary": "Cazador galo despeinado de temperamento extasiado.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Lleno de energía y buen humor."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañero simpático."
        }
      ]
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
      "summary": "El más pesado y fuerte de los setters, de manto negro y fuego.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Sobrio y fiel."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Guardia afectuoso de la casa."
        }
      ]
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
      "summary": "El perro de muestra más polivalente y extendido en el mundo.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Energético e inteligente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Compañero incansable."
        }
      ]
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
      "summary": "Conserva un espíritu juguetón de cachorro durante toda su vida.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Eternamente jovial y afectuoso."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Busca agradar sin parar."
        }
      ]
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
      "summary": "El más pequeño de los retrievers con un pelaje rojizo brillante.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Astuto e hiper-activo."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Adora la pelota y el agua."
        }
      ]
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
      "summary": "Aviso sagrado de los monasterios tibetanos con fino oído.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Independiente y vigilante."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Respetuoso y calmado."
        }
      ]
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
      "summary": "Andar meciéndose característico y carácter incorruptible.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Majestuoso e independiente."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Lazo exclusivo con su tutor."
        }
      ]
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
      "summary": "Sin pelo salvo en cabeza y patas. Cariñoso como pocos.",
      "sections": [
        {
          "title": "Personalidad",
          "sourceLevel": 1,
          "content": "Dulce y sensible."
        },
        {
          "title": "El vínculo con su humano",
          "sourceLevel": 1,
          "content": "Inseparable en el hogar."
        }
      ]
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
          "content": "El centro de regulación es exclusivamente externo. Ante la ausencia del humano, el perro carece de herramientas de autorregulación, lo que genera una desorganización sistémica."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 1,
          "content": "- Ancla de Baseline: Necesidad de contacto físico para bajar revoluciones.\n- Hipervigilancia de movimientos: El sistema monitorea al guía como fuente única de seguridad.\n- Presente de Urgencia: Incapacidad de proyectar el regreso del humano."
        },
        {
          "title": "Riesgos",
          "sourceLevel": 1,
          "content": "- Ansiedad severa ante la separación.\n- Comportamientos de control por pánico.\n- Fragilidad absoluta ante cambios en la rutina."
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
          "content": "- Resiliencia Crítica: Muy baja tolerancia al conflicto o tonos de voz elevados.\n- Empatía Pasiva: Refleja el estrés del guía sin procesarlo.\n- Repliegue como defensa: Búsqueda de invisibilidad ante la presión."
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
          "content": "Son psicológicamente flexibles y poseen una alta plasticidad cognitiva que les permite adaptarse a diversos contextos y situaciones."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "- Contacto Visual Referencial: El perro busca la sintonía antes de actuar.\n- Tiempo Secuencial: Entiende perfectamente el ciclo (inicio, desarrollo, cierre).\n- Refuerzo Social: La aprobación humana es un combustible biológico efectivo."
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
          "content": "Regulación centrada en la tarea. El perro necesita \"hacer\" para \"ser\". Poseen una baja tolerancia al vacío y un umbral de estimulación muy bajo ante objetos en movimiento o problemas complejos."
        },
        {
          "title": "Rasgos Clave",
          "sourceLevel": 2,
          "content": "- Focalización (Tackling): Mirada fija y bloqueo del entorno para priorizar la tarea.\n- Latencia Cero: Capacidad de activarse instantáneamente tras el descanso.\n- Persistencia Física: Ignora el agotamiento mientras la tarea siga no haya terminado."
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
          "content": "Evaluación contextual y discernimiento de amenazas. El perro actúa como filtro de seguridad en coordinación con el referente humano."
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
          "content": "Codificación estricta entre propio e intruso. Alta respuesta ante violaciones del perímetro conocido."
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
          "content": "Economía de energía en grandes espacios. Vigilancia pasiva en stand-by que se transforma en intervención decidida."
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
          "content": "Masa estabilizadora que ralentiza el entorno. Alta tolerancia y absorción de la tensión emocional de la casa."
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
          "content": "Soberanía de carácter. El perro coexiste sin someterse, con baja necesidad de validación o aprobación externa."
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
          "content": "Inmersión en el mundo aromático. El perro procesa la realidad como capas de datos olfativos pasados y presentes."
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
          "content": "Contraste extremo entre sprint de alta velocidad e inercia de reposo profundo en sofá."
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
          "content": "Tenacidad física y foco en modificar el entorno a través de la presa, la excavación y el trabajo."
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
          "content": "Sistema nervioso de gatillo rápido en cuerpos pequeños, con alta expresividad y respuesta ante cambios sociales o de entorno."
        }
      ]
    }
  ],
  "frameworks": [
    {
      "id": "regulacion-emocional",
      "number": 1,
      "title": "Regulación Emocional",
      "signature": "Autorregulación vs Externalizada",
      "summary": "Mecanismos por los cuales un perro recupera su centro emocional tras un estímulo o estrés.",
      "sections": [
        {
          "title": "1.1 Regulación Externa (Humana)",
          "sourceLevel": 2,
          "content": "Dependencia del guía para bajar pulsaciones y recuperar la calma."
        },
        {
          "title": "1.2 Autorregulación (Interna)",
          "sourceLevel": 2,
          "content": "Mecanismos autónomos (olfateo, alejamiento, sacudida, pausas) para volver al equilibrio."
        },
        {
          "title": "1.3 Regulación por Tarea (Funcional)",
          "sourceLevel": 2,
          "content": "Acción dirigida y resolución de problemas como vía para descargar la tensión."
        }
      ]
    },
    {
      "id": "tipo-de-vinculo",
      "number": 2,
      "title": "Tipo de Vínculo",
      "signature": "Formas de Relación Humano-Canina",
      "summary": "Estructuras de apego y dinámicas de interacción entre el perro y su guía.",
      "sections": [
        {
          "title": "2.1 Vínculo de Fusión (Simbiosis)",
          "sourceLevel": 2,
          "content": "Alta intensidad emocional y necesidad constante de proximidad física."
        },
        {
          "title": "2.2 Vínculo Cooperativo (Equipo)",
          "sourceLevel": 2,
          "content": "Paridad operativa basada en metas compartidas y comunicación bidireccional."
        },
        {
          "title": "2.3 Vínculo Paralelo (Coexistencia)",
          "sourceLevel": 2,
          "content": "Autonomía social respetuosa donde se comparte espacio con agendas independientes."
        }
      ]
    },
    {
      "id": "fuente-de-motivacion",
      "number": 3,
      "title": "Fuente de Motivación",
      "signature": "Motores Biológicos y De Aprendizaje",
      "summary": "Estímulos principales que encienden el interés y el aprendizaje del individuo.",
      "sections": [
        {
          "title": "3.1 Afecto y Cercanía",
          "sourceLevel": 2,
          "content": "Validación social y caricias como mayor recompensa."
        },
        {
          "title": "3.2 Exploración Olfativa",
          "sourceLevel": 2,
          "content": "Decodificación química del ambiente como motor primario."
        },
        {
          "title": "3.3 Resolución Instrumental",
          "sourceLevel": 2,
          "content": "Uso de la fuerza física, mandíbula o astucia para superar un obstáculo."
        }
      ]
    },
    {
      "id": "gestion-del-estimulo",
      "number": 4,
      "title": "Gestión del Estímulo",
      "signature": "Protocolos de Respuesta ante la Presión",
      "summary": "Estrategias innatas para afrontar sorpresas, amenazas o sobrecarga sensorial.",
      "sections": [
        {
          "title": "4.1 Escalamiento / Vocalización",
          "sourceLevel": 2,
          "content": "Aumento del volumen o intensidad (ladridos, saltos) para tomar control del evento."
        },
        {
          "title": "4.2 Repliegue / Evitación",
          "sourceLevel": 2,
          "content": "Distancia o invisibilidad emocional como estrategia de autoprotección."
        },
        {
          "title": "4.3 Contención / Buffer",
          "sourceLevel": 2,
          "content": "Evaluación en tensión controlada manteniendo la posición sin sobreactivarse."
        }
      ]
    },
    {
      "id": "tiempo-y-recuperacion",
      "number": 5,
      "title": "Tiempo y Recuperación",
      "signature": "Reloj Biológico y Desintoxicación Química",
      "summary": "Velocidad a la que el sistema procesa sucesos y retorna al baseline en reposo.",
      "sections": [
        {
          "title": "5.1 Tiempo Corto",
          "sourceLevel": 2,
          "content": "Reacciones inmediatas con rápida capacidad de olvido y reseteo."
        },
        {
          "title": "5.2 Tiempo Largo",
          "sourceLevel": 2,
          "content": "Memoria emocional sostenida que requiere días o rutinas estables para asimilar picos de estrés."
        }
      ]
    },
    {
      "id": "plasticidad-vs-rigidez",
      "number": 6,
      "title": "Plasticidad vs. Rigidez",
      "signature": "Generalista vs. Especialista",
      "summary": "Nivel de flexibilidad del perro ante variaciones de contexto y entorno.",
      "sections": [
        {
          "title": "6.1 Plasticidad Alta",
          "sourceLevel": 2,
          "content": "Capacidad multitarea y rápida adaptación a nuevas personas, lugares y normas."
        },
        {
          "title": "6.2 Rigidez Especializada",
          "sourceLevel": 2,
          "content": "Especialización extrema que requiere previsibilidad y rutinas constantes."
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

// Ensure every breed has its exact imageUrl assigned
canineData.breeds.forEach((b) => {
  if (!b.imageUrl) {
    b.imageUrl = getBreedImageUrl(b.id);
  }
});
