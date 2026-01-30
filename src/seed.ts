import { getPayload } from 'payload'
import config from './payload.config'

const industries = [
  { name: 'Naval', slug: 'naval', shortDescription: 'Protección para embarcaciones y estructuras marinas', icon: 'ship', benefits: 'Resistencia al agua salada\nProtección UV\nDurabilidad extrema', useCases: 'Cascos de barcos\nPlataformas marinas\nMuelles', order: 1 },
  { name: 'Petróleo y Gas', slug: 'petroleo', shortDescription: 'Recubrimientos para la industria del petróleo y gas', icon: 'oil', benefits: 'Resistencia química\nAlta temperatura\nAntifuego', useCases: 'Tuberías\nTanques de almacenamiento\nRefinerías', order: 2 },
  { name: 'Construcción', slug: 'construccion', shortDescription: 'Pinturas para estructuras y edificaciones', icon: 'building', benefits: 'Larga duración\nFácil aplicación\nEconómico', useCases: 'Estructuras metálicas\nPuentes\nEdificios', order: 3 },
  { name: 'Vehículos y Maquinaria', slug: 'vehiculos', shortDescription: 'Acabados para vehículos, maquinaria e industria automotriz', icon: 'car', benefits: 'Acabado brillante\nResistencia a rayones\nSecado rápido', useCases: 'Carrocerías\nAutopartes\nMaquinaria pesada', order: 4 },
  { name: 'Energía', slug: 'energia', shortDescription: 'Recubrimientos para sector eléctrico y energético', icon: 'zap', benefits: 'Aislamiento\nResistencia térmica\nDurabilidad', useCases: 'Torres eléctricas\nSubestaciones\nGeneradores', order: 5 },
]

const locations = [
  { name: 'Caracas', slug: 'caracas', state: 'Distrito Capital', region: 'capital' as const, priority: 10 },
  { name: 'Maracaibo', slug: 'maracaibo', state: 'Zulia', region: 'occidente' as const, priority: 9 },
  { name: 'Valencia', slug: 'valencia', state: 'Carabobo', region: 'centro' as const, priority: 9 },
  { name: 'Barquisimeto', slug: 'barquisimeto', state: 'Lara', region: 'centro' as const, priority: 8 },
  { name: 'Maracay', slug: 'maracay', state: 'Aragua', region: 'centro' as const, priority: 8 },
  { name: 'Puerto La Cruz', slug: 'puerto-la-cruz', state: 'Anzoátegui', region: 'oriente' as const, priority: 8 },
  { name: 'Ciudad Guayana', slug: 'ciudad-guayana', state: 'Bolívar', region: 'oriente' as const, priority: 7 },
  { name: 'Maturín', slug: 'maturin', state: 'Monagas', region: 'oriente' as const, priority: 7 },
  { name: 'San Cristóbal', slug: 'san-cristobal', state: 'Táchira', region: 'andes' as const, priority: 6 },
  { name: 'Mérida', slug: 'merida', state: 'Mérida', region: 'andes' as const, priority: 6 },
]

const colors = [
  { code: '1000', name: 'Beige verdoso', hex: '#BEBD7F', category: '1' as const },
  { code: '1001', name: 'Beige', hex: '#C2B078', category: '1' as const },
  { code: '1002', name: 'Amarillo arena', hex: '#C6A664', category: '1' as const },
  { code: '1003', name: 'Amarillo señales', hex: '#E5BE01', category: '1' as const },
  { code: '1004', name: 'Amarillo oro', hex: '#CDA434', category: '1' as const },
  { code: '2000', name: 'Amarillo naranja', hex: '#ED760E', category: '2' as const },
  { code: '2001', name: 'Naranja rojizo', hex: '#C93C20', category: '2' as const },
  { code: '2002', name: 'Naranja sanguíneo', hex: '#CB2821', category: '2' as const },
  { code: '3000', name: 'Rojo fuego', hex: '#AF2B1E', category: '3' as const },
  { code: '3001', name: 'Rojo señales', hex: '#A52019', category: '3' as const },
  { code: '3002', name: 'Rojo carmín', hex: '#A2231D', category: '3' as const },
  { code: '3003', name: 'Rojo rubí', hex: '#9B111E', category: '3' as const },
  { code: '5000', name: 'Azul violeta', hex: '#354D73', category: '5' as const },
  { code: '5001', name: 'Azul verdoso', hex: '#1F3438', category: '5' as const },
  { code: '5002', name: 'Azul ultramar', hex: '#20214F', category: '5' as const },
  { code: '5003', name: 'Azul zafiro', hex: '#1D1E33', category: '5' as const },
  { code: '5005', name: 'Azul señales', hex: '#1E2460', category: '5' as const },
  { code: '6000', name: 'Verde patina', hex: '#316650', category: '6' as const },
  { code: '6001', name: 'Verde esmeralda', hex: '#287233', category: '6' as const },
  { code: '6002', name: 'Verde hoja', hex: '#2D572C', category: '6' as const },
  { code: '7000', name: 'Gris ardilla', hex: '#78858B', category: '7' as const },
  { code: '7001', name: 'Gris plata', hex: '#8A9597', category: '7' as const },
  { code: '7016', name: 'Gris antracita', hex: '#293133', category: '7' as const },
  { code: '7035', name: 'Gris luminoso', hex: '#D7D7D7', category: '7' as const },
  { code: '9001', name: 'Blanco crema', hex: '#FDF4E3', category: '9' as const },
  { code: '9002', name: 'Blanco grisáceo', hex: '#E7EBDA', category: '9' as const },
  { code: '9003', name: 'Blanco señales', hex: '#F4F4F4', category: '9' as const },
  { code: '9005', name: 'Negro intenso', hex: '#0A0A0A', category: '9' as const },
  { code: '9010', name: 'Blanco puro', hex: '#FFFFFF', category: '9' as const },
  { code: '9011', name: 'Negro grafito', hex: '#1C1C1C', category: '9' as const },
]

const faqs: Array<{ question: string; answer: string; category: 'general' | 'product' | 'shipping' | 'technical'; order: number }> = [
  { question: '¿Cuánto rinde un galón de pintura Huten?', answer: 'Un galón de pintura Huten rinde aproximadamente 35-40 m² por capa, dependiendo de la porosidad de la superficie.', category: 'product', order: 1 },
  { question: '¿La pintura es realmente 2 en 1?', answer: 'Sí, nuestra fórmula combina fondo y esmalte anticorrosivo en un solo producto, eliminando la necesidad de aplicar primer por separado.', category: 'product', order: 2 },
  { question: '¿Hacen envíos a todo el país?', answer: 'Sí, realizamos envíos a toda Venezuela. El tiempo de entrega varía según la ubicación, generalmente entre 3-7 días hábiles.', category: 'shipping', order: 3 },
  { question: '¿Cuánto tiempo tarda en secar?', answer: 'El tiempo de secado al tacto es de aproximadamente 2 horas y el secado total para repintado es de 24 horas en condiciones normales.', category: 'technical', order: 4 },
  { question: '¿Qué colores tienen disponibles?', answer: 'Tenemos disponible toda la carta RAL con más de 200 colores. También realizamos igualación de colores personalizados.', category: 'product', order: 5 },
]

const testimonials = [
  { name: 'Carlos Rodríguez', company: 'Construcciones CR', role: 'Gerente de Proyectos', quote: 'Llevamos 5 años usando Pinturas Huten en todos nuestros proyectos. La durabilidad y acabado son incomparables.', rating: 5, featured: true },
  { name: 'María González', company: 'Astilleros del Caribe', role: 'Directora de Operaciones', quote: 'Para el ambiente marino, no hay mejor opción. Nuestras embarcaciones lucen impecables años después.', rating: 5, featured: true },
  { name: 'José Pérez', company: 'Taller Automotriz JP', role: 'Propietario', quote: 'El acabado es profesional y el rendimiento excelente. Mis clientes siempre quedan satisfechos.', rating: 5, featured: true },
  { name: 'Ana Martínez', company: 'PDVSA', role: 'Ingeniera de Mantenimiento', quote: 'En la industria petrolera necesitamos productos que soporten condiciones extremas. Huten cumple y supera expectativas.', rating: 5, featured: true },
  { name: 'Roberto Díaz', company: 'Minera Los Andes', role: 'Supervisor de Planta', quote: 'Reducimos el mantenimiento de equipos en un 60%. La inversión se paga sola.', rating: 5, featured: true },
  { name: 'Carmen López', company: 'Electricidad de Caracas', role: 'Jefa de Proyectos', quote: 'Las torres eléctricas protegidas con Huten resisten años sin necesidad de repintado.', rating: 5, featured: true },
  { name: 'Fernando Suárez', company: 'Naviera del Orinoco', role: 'Capitán', quote: 'Navegamos por aguas dulces y saladas. Solo Huten nos da la protección que necesitamos.', rating: 5, featured: true },
  { name: 'Patricia Mendoza', company: 'Constructora Mendoza', role: 'Arquitecta', quote: 'El acabado estético combinado con la protección anticorrosiva es exactamente lo que buscábamos.', rating: 4, featured: true },
  { name: 'Luis Hernández', company: 'Taller Industrial LH', role: 'Dueño', quote: 'Fácil de aplicar, seca rápido y dura. ¿Qué más se puede pedir?', rating: 5, featured: true },
  { name: 'Gabriela Torres', company: 'Infraestructura Nacional', role: 'Directora Técnica', quote: 'Hemos pintado puentes, edificios y estructuras. Huten es nuestro estándar de calidad.', rating: 5, featured: true },
  { name: 'Miguel Ángel Rivas', company: 'Autobuses del Centro', role: 'Gerente de Flota', quote: 'Nuestra flota de 50 autobuses luce impecable. El mantenimiento se redujo drásticamente.', rating: 5, featured: true },
  { name: 'Sofía Vargas', company: 'Petroquímica Zulia', role: 'Coordinadora de Seguridad', quote: 'La resistencia química es impresionante. Cumple con todos nuestros estándares industriales.', rating: 5, featured: true },
  { name: 'Andrés Moreno', company: 'Grupo Constructor AM', role: 'Contratista', quote: 'Antes usaba 3 productos diferentes. Ahora solo necesito Huten. Ahorro tiempo y dinero.', rating: 5, featured: true },
  { name: 'Valentina Rojas', company: 'Marina Puerto Cabello', role: 'Administradora', quote: 'Los yates de nuestros clientes lucen espectaculares temporada tras temporada.', rating: 4, featured: true },
  { name: 'Eduardo Blanco', company: 'Siderúrgica del Turbio', role: 'Jefe de Mantenimiento', quote: 'En un ambiente con altas temperaturas y químicos agresivos, Huten es la única que aguanta.', rating: 5, featured: true },
  { name: 'Diana Castillo', company: 'Arquitectura DC', role: 'Diseñadora Industrial', quote: 'La variedad de colores RAL nos permite lograr cualquier diseño sin sacrificar protección.', rating: 5, featured: true },
]

// Applications by industry - will be linked to industry IDs after seeding
const applicationsByIndustry = {
  naval: [
    { name: 'Cascos de Embarcaciones', slug: 'cascos-embarcaciones', shortDescription: 'Recubrimientos especializados para cascos de barcos, yates y embarcaciones comerciales con máxima protección contra la corrosión marina.', benefits: 'Resistencia al agua salada\nProtección antifouling\nDurabilidad de 5+ años\nFácil mantenimiento', order: 1 },
    { name: 'Cubiertas y Superestructuras', slug: 'cubiertas-superestructuras', shortDescription: 'Pinturas antideslizantes y decorativas para cubiertas, puentes de mando y áreas de tránsito en embarcaciones.', benefits: 'Superficie antideslizante\nResistencia UV\nFácil limpieza\nAcabados decorativos', order: 2 },
    { name: 'Tanques de Lastre', slug: 'tanques-lastre', shortDescription: 'Recubrimientos internos para tanques de lastre con resistencia extrema a la corrosión por agua de mar.', benefits: 'Resistencia química total\nProtección catódica compatible\nLarga vida útil\nBajo mantenimiento', order: 3 },
    { name: 'Hélices y Propulsores', slug: 'helices-propulsores', shortDescription: 'Pinturas especiales para hélices, timones y sistemas de propulsión con alta resistencia a la cavitación.', benefits: 'Resistencia a la cavitación\nMenor fricción\nProtección galvánica\nMayor eficiencia', order: 4 },
    { name: 'Muelles y Estructuras Portuarias', slug: 'muelles-estructuras-portuarias', shortDescription: 'Recubrimientos para pilotes, defensas, grúas y toda la infraestructura portuaria expuesta al ambiente marino.', benefits: 'Zona de splash protegida\nResistencia a impactos\nProtección UV extrema\nFácil reparación', order: 5 },
    { name: 'Plataformas Offshore', slug: 'plataformas-offshore', shortDescription: 'Sistemas de pintado para plataformas petroleras, gasíferas y eólicas en mar abierto.', benefits: 'Certificación offshore\nResistencia extrema\nProtección contra incendios\nBajo VOC', order: 6 },
    { name: 'Boyas y Señalización Marítima', slug: 'boyas-senalizacion', shortDescription: 'Pinturas de alta visibilidad y durabilidad para boyas, faros y señalización náutica.', benefits: 'Alta visibilidad\nColores normalizados\nReflectancia nocturna\nResistencia UV', order: 7 },
    { name: 'Contenedores Marítimos', slug: 'contenedores-maritimos', shortDescription: 'Recubrimientos para contenedores de carga con resistencia a la intemperie y manipulación constante.', benefits: 'Resistencia a impactos\nProtección multicapa\nFácil retoque\nColores corporativos', order: 8 },
    { name: 'Equipos de Cubierta', slug: 'equipos-cubierta', shortDescription: 'Pinturas para grúas, malacates, cabrestantes y todo el equipamiento de cubierta.', benefits: 'Resistencia a grasas\nProtección mecánica\nFácil identificación\nDurabilidad industrial', order: 9 },
    { name: 'Salas de Máquinas', slug: 'salas-maquinas', shortDescription: 'Recubrimientos especiales para salas de máquinas con resistencia a temperaturas elevadas y químicos.', benefits: 'Resistencia térmica\nFácil limpieza\nColores claros\nResistencia a aceites', order: 10 },
  ],
  petroleo: [
    { name: 'Tuberías de Proceso', slug: 'tuberias-proceso', shortDescription: 'Recubrimientos para tuberías de transporte de crudo, gas y derivados del petróleo.', benefits: 'Resistencia química\nCódigo de colores\nFácil inspección\nLarga vida útil', order: 1 },
    { name: 'Tanques de Almacenamiento', slug: 'tanques-almacenamiento', shortDescription: 'Pinturas internas y externas para tanques de almacenamiento de hidrocarburos.', benefits: 'Resistencia a hidrocarburos\nProtección interna\nReflectancia solar\nBajo mantenimiento', order: 2 },
    { name: 'Torres de Destilación', slug: 'torres-destilacion', shortDescription: 'Recubrimientos resistentes a alta temperatura para columnas y torres de refinación.', benefits: 'Hasta 650°C\nAislamiento térmico\nProtección CUI\nFácil inspección', order: 3 },
    { name: 'Intercambiadores de Calor', slug: 'intercambiadores-calor', shortDescription: 'Pinturas especiales para intercambiadores, condensadores y equipos de transferencia térmica.', benefits: 'Resistencia térmica\nBaja conductividad\nProtección CUI\nColores codificados', order: 4 },
    { name: 'Válvulas y Accesorios', slug: 'valvulas-accesorios', shortDescription: 'Recubrimientos para válvulas, bridas, juntas y accesorios de proceso.', benefits: 'Identificación rápida\nResistencia química\nFácil retoque\nProtección total', order: 5 },
    { name: 'Estructuras de Soporte', slug: 'estructuras-soporte', shortDescription: 'Pinturas anticorrosivas para estructuras metálicas, racks de tuberías y soportes.', benefits: 'Protección pasiva contra fuego\nDurabilidad extrema\nFácil aplicación\nBajo costo', order: 6 },
    { name: 'Áreas de Carga y Descarga', slug: 'areas-carga-descarga', shortDescription: 'Recubrimientos para terminales, brazos de carga y áreas de transferencia de productos.', benefits: 'Antiestático\nResistencia a derrames\nSeñalización\nFácil limpieza', order: 7 },
    { name: 'Equipos Rotativos', slug: 'equipos-rotativos', shortDescription: 'Pinturas para bombas, compresores, turbinas y equipos en movimiento.', benefits: 'Resistencia a vibración\nProtección térmica\nFácil inspección\nColores de seguridad', order: 8 },
    { name: 'Sistemas Contra Incendio', slug: 'sistemas-contra-incendio', shortDescription: 'Recubrimientos retardantes de fuego y señalización para sistemas de protección contra incendios.', benefits: 'Certificación UL\nColores normalizados\nResistencia al fuego\nFácil identificación', order: 9 },
    { name: 'Separadores y Tratadores', slug: 'separadores-tratadores', shortDescription: 'Pinturas para equipos de separación, tratamiento y procesamiento primario.', benefits: 'Resistencia H2S\nProtección interna\nBajo mantenimiento\nLarga vida útil', order: 10 },
  ],
  construccion: [
    { name: 'Estructuras Metálicas', slug: 'estructuras-metalicas', shortDescription: 'Recubrimientos anticorrosivos para vigas, columnas, cerchas y estructuras de acero.', benefits: 'Protección estructural\nFácil aplicación\nSecado rápido\nBajo costo m²', order: 1 },
    { name: 'Puentes y Viaductos', slug: 'puentes-viaductos', shortDescription: 'Sistemas de pintado de alto desempeño para puentes peatonales, vehiculares y ferroviarios.', benefits: 'Durabilidad 15+ años\nResistencia UV\nBajo mantenimiento\nColores oficiales', order: 2 },
    { name: 'Cubiertas y Techos Metálicos', slug: 'cubiertas-techos', shortDescription: 'Pinturas reflectantes y protectoras para láminas, techos y cubiertas industriales.', benefits: 'Reflectancia solar\nAislamiento térmico\nResistencia UV\nImpermeabilización', order: 3 },
    { name: 'Barandas y Pasamanos', slug: 'barandas-pasamanos', shortDescription: 'Recubrimientos decorativos y protectores para barandas, escaleras y elementos de seguridad.', benefits: 'Acabado decorativo\nResistencia al tacto\nFácil limpieza\nMúltiples colores', order: 4 },
    { name: 'Puertas y Ventanas Metálicas', slug: 'puertas-ventanas', shortDescription: 'Pinturas para carpintería metálica, marcos, puertas y ventanería de aluminio y hierro.', benefits: 'Acabado profesional\nResistencia UV\nAdhesión superior\nRápido secado', order: 5 },
    { name: 'Tanques de Agua', slug: 'tanques-agua', shortDescription: 'Recubrimientos aptos para contacto con agua potable para tanques y cisternas.', benefits: 'Certificación sanitaria\nSin sabor ni olor\nLarga duración\nFácil aplicación', order: 6 },
    { name: 'Rejas y Cerramientos', slug: 'rejas-cerramientos', shortDescription: 'Pinturas protectoras y decorativas para rejas, cercas y elementos perimetrales.', benefits: 'Protección exterior\nMúltiples acabados\nFácil retoque\nDuración garantizada', order: 7 },
    { name: 'Mobiliario Urbano', slug: 'mobiliario-urbano', shortDescription: 'Recubrimientos para bancos, luminarias, postes y elementos de equipamiento urbano.', benefits: 'Resistencia vandálica\nFácil limpieza\nColores personalizados\nDurabilidad', order: 8 },
    { name: 'Pisos Industriales', slug: 'pisos-industriales', shortDescription: 'Pinturas epóxicas para pisos de naves industriales, estacionamientos y áreas de tráfico.', benefits: 'Alta resistencia\nFácil limpieza\nAntideslizante\nMarcación de zonas', order: 9 },
    { name: 'Fachadas Metálicas', slug: 'fachadas-metalicas', shortDescription: 'Sistemas de recubrimiento para fachadas ventiladas, paneles y revestimientos metálicos.', benefits: 'Estética superior\nDurabilidad extrema\nBajo mantenimiento\nVariedad de colores', order: 10 },
  ],
  vehiculos: [
    { name: 'Carrocerías de Automóviles', slug: 'carrocerias-automoviles', shortDescription: 'Pinturas automotrices de alto brillo para vehículos particulares y comerciales.', benefits: 'Brillo espejo\nResistencia UV\nFácil pulido\nAmplia gama de colores', order: 1 },
    { name: 'Chasis y Bastidores', slug: 'chasis-bastidores', shortDescription: 'Recubrimientos anticorrosivos para partes bajas, chasis y estructuras de vehículos.', benefits: 'Protección inferior\nResistencia a piedras\nAnticorrosivo\nAplicación fácil', order: 2 },
    { name: 'Camiones y Remolques', slug: 'camiones-remolques', shortDescription: 'Pinturas industriales para flotas de camiones, remolques y vehículos de carga.', benefits: 'Durabilidad comercial\nFácil retoque\nColores corporativos\nBajo costo', order: 3 },
    { name: 'Autobuses y Transporte Público', slug: 'autobuses-transporte', shortDescription: 'Sistemas de pintado para unidades de transporte público con alta resistencia.', benefits: 'Resistencia al lavado\nColores vivos\nDurabilidad urbana\nFácil mantenimiento', order: 4 },
    { name: 'Maquinaria Agrícola', slug: 'maquinaria-agricola', shortDescription: 'Recubrimientos para tractores, cosechadoras y equipos agrícolas.', benefits: 'Resistencia al campo\nProtección solar\nFácil reparación\nColores identificativos', order: 5 },
    { name: 'Maquinaria de Construcción', slug: 'maquinaria-construccion', shortDescription: 'Pinturas para excavadoras, retroexcavadoras, grúas y equipos de obra.', benefits: 'Alta resistencia\nVisibilidad seguridad\nProtección extrema\nFácil aplicación', order: 6 },
    { name: 'Montacargas y Equipos de Almacén', slug: 'montacargas-almacen', shortDescription: 'Recubrimientos para montacargas, transpaletas y equipos de manejo de materiales.', benefits: 'Colores de seguridad\nResistencia industrial\nFácil retoque\nBajo mantenimiento', order: 7 },
    { name: 'Motocicletas y Motopartes', slug: 'motocicletas-motopartes', shortDescription: 'Pinturas especiales para tanques, guardafangos y partes de motocicletas.', benefits: 'Alto brillo\nResistencia a gasolina\nColores personalizados\nAcabado premium', order: 8 },
    { name: 'Vehículos Recreativos', slug: 'vehiculos-recreativos', shortDescription: 'Recubrimientos para motorhomes, trailers, botes y vehículos de recreación.', benefits: 'Protección exterior\nEstética superior\nBajo mantenimiento\nDurabilidad', order: 9 },
    { name: 'Autopartes y Componentes', slug: 'autopartes-componentes', shortDescription: 'Pinturas para rines, suspensiones, motores y componentes automotrices.', benefits: 'Resistencia térmica\nAcabados especiales\nProtección OEM\nFácil aplicación', order: 10 },
  ],
  energia: [
    { name: 'Torres de Transmisión', slug: 'torres-transmision', shortDescription: 'Recubrimientos para torres de alta tensión, estructuras de transmisión eléctrica.', benefits: 'Durabilidad extrema\nResistencia UV\nGalvanizado compatible\nBajo mantenimiento', order: 1 },
    { name: 'Subestaciones Eléctricas', slug: 'subestaciones-electricas', shortDescription: 'Pinturas para transformadores, interruptores y equipos de subestaciones.', benefits: 'Aislamiento eléctrico\nDisipación térmica\nColores normalizados\nProtección total', order: 2 },
    { name: 'Paneles Solares y Estructuras', slug: 'paneles-solares', shortDescription: 'Recubrimientos para estructuras de soporte y marcos de instalaciones fotovoltaicas.', benefits: 'Reflectancia controlada\nResistencia UV extrema\nBajo mantenimiento\nDurabilidad 25 años', order: 3 },
    { name: 'Aerogeneradores', slug: 'aerogeneradores', shortDescription: 'Sistemas de pintado para torres, góndolas y palas de turbinas eólicas.', benefits: 'Resistencia a erosión\nProtección UV\nBajo peso\nFácil inspección', order: 4 },
    { name: 'Generadores y Turbinas', slug: 'generadores-turbinas', shortDescription: 'Pinturas térmicas para generadores, turbinas y equipos de generación.', benefits: 'Resistencia térmica\nAislamiento\nFácil limpieza\nProtección industrial', order: 5 },
    { name: 'Centros de Distribución', slug: 'centros-distribucion', shortDescription: 'Recubrimientos para tableros, gabinetes y centros de control eléctrico.', benefits: 'Acabado industrial\nResistencia química\nColores RAL\nFácil aplicación', order: 6 },
    { name: 'Postes y Luminarias', slug: 'postes-luminarias', shortDescription: 'Pinturas para postes de alumbrado público, luminarias y mobiliario eléctrico.', benefits: 'Resistencia exterior\nDurabilidad urbana\nFácil retoque\nColores estándar', order: 7 },
    { name: 'Cables y Bandejas', slug: 'cables-bandejas', shortDescription: 'Recubrimientos para bandejas portacables, ductos y sistemas de cableado.', benefits: 'Protección galvánica\nResistencia al fuego\nFácil identificación\nBajo costo', order: 8 },
    { name: 'Plantas Hidroeléctricas', slug: 'plantas-hidroelectricas', shortDescription: 'Sistemas de pintado para compuertas, turbinas y estructuras hidroeléctricas.', benefits: 'Resistencia al agua\nProtección subacuática\nLarga duración\nBajo mantenimiento', order: 9 },
    { name: 'Baterías y Almacenamiento', slug: 'baterias-almacenamiento', shortDescription: 'Recubrimientos para sistemas de almacenamiento de energía y salas de baterías.', benefits: 'Resistencia ácida\nAislamiento\nFácil limpieza\nSeguridad industrial', order: 10 },
  ],
}

const articles = [
  { title: 'Hüten expande su capacidad de producción', slug: 'huten-expande-produccion', excerpt: 'Con la inauguración de una nueva línea de producción, Pinturas Hüten aumenta su capacidad para atender la creciente demanda del mercado venezolano.', category: 'empresa' as const, publishedDate: '2025-11-15', featured: true, order: 1 },
  { title: 'Certificación de calidad ISO 9001', slug: 'certificacion-iso-9001', excerpt: 'Pinturas Hüten obtiene la certificación ISO 9001, reafirmando su compromiso con los más altos estándares de calidad en la industria de recubrimientos.', category: 'empresa' as const, publishedDate: '2025-09-20', featured: true, order: 2 },
  { title: 'Nuevo sistema de colores RAL ampliado', slug: 'nuevo-sistema-colores-ral', excerpt: 'Ampliamos nuestro catálogo de colores RAL disponibles, ofreciendo más de 200 tonalidades para satisfacer las necesidades de cada proyecto.', category: 'producto' as const, publishedDate: '2025-07-10', featured: true, order: 3 },
  { title: 'Alianza estratégica con el sector naval', slug: 'alianza-sector-naval', excerpt: 'Pinturas Hüten firma acuerdo de colaboración con los principales astilleros de Venezuela para el suministro exclusivo de recubrimientos marítimos.', category: 'empresa' as const, publishedDate: '2025-06-01', featured: false, order: 4 },
  { title: 'Lanzamiento de línea ecológica', slug: 'lanzamiento-linea-ecologica', excerpt: 'Presentamos nuestra nueva línea de pinturas con bajo contenido de VOC, contribuyendo a un futuro más sostenible sin comprometer la calidad.', category: 'producto' as const, publishedDate: '2025-04-22', featured: true, order: 5 },
  { title: 'Participación en Expo Industrial 2025', slug: 'expo-industrial-2025', excerpt: 'Hüten participa como expositor principal en la feria industrial más importante de Venezuela, presentando las últimas innovaciones en recubrimientos.', category: 'empresa' as const, publishedDate: '2025-03-15', featured: false, order: 6 },
  { title: 'Récord de exportaciones al Caribe', slug: 'record-exportaciones-caribe', excerpt: 'Por tercer año consecutivo, Pinturas Hüten incrementa sus exportaciones a la región del Caribe, consolidando su presencia internacional.', category: 'empresa' as const, publishedDate: '2025-02-28', featured: false, order: 7 },
  { title: 'Nueva tecnología anticorrosiva de última generación', slug: 'tecnologia-anticorrosiva', excerpt: 'Desarrollamos una fórmula innovadora que duplica la protección anticorrosiva en ambientes marinos y de alta salinidad.', category: 'producto' as const, publishedDate: '2025-01-20', featured: true, order: 8 },
  { title: 'Programa de capacitación técnica', slug: 'programa-capacitacion', excerpt: 'Lanzamos programa gratuito de formación para aplicadores profesionales en técnicas avanzadas de aplicación de recubrimientos industriales.', category: 'empresa' as const, publishedDate: '2024-12-10', featured: false, order: 9 },
]

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding industries...')
  for (const industry of industries) {
    try {
      await payload.create({ collection: 'industries', data: industry })
      console.log(`  Created: ${industry.name}`)
    } catch (e) {
      console.log(`  Exists: ${industry.name}`)
    }
  }

  console.log('Seeding locations...')
  for (const location of locations) {
    try {
      await payload.create({ collection: 'locations', data: location })
      console.log(`  Created: ${location.name}`)
    } catch (e) {
      console.log(`  Exists: ${location.name}`)
    }
  }

  console.log('Seeding colors...')
  for (const color of colors) {
    try {
      await payload.create({ collection: 'colors', data: color })
      console.log(`  Created: RAL ${color.code}`)
    } catch (e) {
      console.log(`  Exists: RAL ${color.code}`)
    }
  }

  console.log('Seeding FAQs...')
  for (const faq of faqs) {
    try {
      await payload.create({ collection: 'faqs', data: faq })
      console.log(`  Created FAQ`)
    } catch (e) {
      console.log(`  Exists FAQ`)
    }
  }

  console.log('Seeding testimonials...')
  for (const testimonial of testimonials) {
    try {
      await payload.create({ collection: 'testimonials', data: testimonial })
      console.log(`  Created: ${testimonial.name}`)
    } catch (e) {
      console.log(`  Exists: ${testimonial.name}`)
    }
  }

  console.log('Seeding articles...')
  for (const article of articles) {
    try {
      await payload.create({ collection: 'articles', data: article })
      console.log(`  Created: ${article.title}`)
    } catch (e) {
      console.log(`  Exists: ${article.title}`)
    }
  }

  // Seed applications - need to get industry IDs first
  console.log('Seeding applications...')
  const { docs: seededIndustries } = await payload.find({ collection: 'industries', limit: 100 })

  for (const industry of seededIndustries) {
    const industrySlug = industry.slug as keyof typeof applicationsByIndustry
    const apps = applicationsByIndustry[industrySlug]
    if (apps) {
      for (const app of apps) {
        try {
          await payload.create({
            collection: 'applications',
            data: {
              ...app,
              industry: industry.id,
            },
          })
          console.log(`  Created: ${app.name} (${industry.name})`)
        } catch (e) {
          console.log(`  Exists: ${app.name} (${industry.name})`)
        }
      }
    }
  }

  console.log('Seeding complete!')
  process.exit(0)
}

seed()
