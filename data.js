const productosCamiones = [
    {
      id: 1,
      nombre_producto: 'Camión de Carga Heavy Duty 2024',
      descripcion: 'Camión de carga pesada con capacidad de 15 toneladas, motor diésel, ideal para transporte de mercancías grandes.',
      precio: 45000.00,
      stock: 10,
      categoria: 'Camiones de Carga',
      fecha_agregado: '2024-11-01',
      marca: 'Volvo'
    },
    {
      id: 2,
      nombre_producto: 'Camión Refrigerado ColdTrack 5000',
      descripcion: 'Camión refrigerado con sistema de congelación avanzado, adecuado para transporte de productos perecederos.',
      precio: 75000.00,
      stock: 5,
      categoria: 'Camiones Refrigerados',
      fecha_agregado: '2024-10-15',
      marca: 'Mercedes-Benz'
    },
    {
      id: 3,
      nombre_producto: 'Accesorios para Camión de Carga',
      descripcion: 'Kit de accesorios básicos para camión de carga, incluye cadenas de seguridad, luces adicionales y herramientas.',
      precio: 300.00,
      stock: 50,
      categoria: 'Accesorios',
      fecha_agregado: '2024-09-20',
      marca: 'Generic'
    },
    {
      id: 4,
      nombre_producto: 'Neumáticos para Camión Heavy Duty',
      descripcion: 'Neumáticos de alta resistencia para camiones de carga pesada, optimizados para largas distancias.',
      precio: 1500.00,
      stock: 30,
      categoria: 'Neumáticos',
      fecha_agregado: '2024-11-10',
      marca: 'Michelin'
    },
    {
      id: 5,
      nombre_producto: 'Sistema de Navegación para Camión',
      descripcion: 'Sistema GPS avanzado diseñado para camiones, con funciones de seguimiento de rutas y control de carga.',
      precio: 1200.00,
      stock: 20,
      categoria: 'Tecnología',
      fecha_agregado: '2024-11-12',
      marca: 'Garmin'
    },
    {
      id: 6,
      nombre_producto: 'Camión de Obras Terex 6000',
      descripcion: 'Camión todo terreno para obras de construcción, ideal para trabajos pesados y terrenos difíciles.',
      precio: 95000.00,
      stock: 7,
      categoria: 'Camiones de Construcción',
      fecha_agregado: '2024-08-25',
      marca: 'Terex'
    },
    {
      id: 7,
      nombre_producto: 'Camión Eléctrico GreenTruck 2024',
      descripcion: 'Camión eléctrico de carga media, ideal para transporte urbano con cero emisiones.',
      precio: 68000.00,
      stock: 8,
      categoria: 'Camiones Eléctricos',
      fecha_agregado: '2024-11-05',
      marca: 'Tesla'
    },
    {
      id: 8,
      nombre_producto: 'Sistema de Seguridad para Camión',
      descripcion: 'Kit de cámaras y sensores de seguridad para camiones, ayuda a prevenir accidentes y mejora la visibilidad.',
      precio: 2500.00,
      stock: 15,
      categoria: 'Seguridad',
      fecha_agregado: '2024-09-15',
      marca: 'Bosch'
    },
    {
      id: 9,
      nombre_producto: 'Frenos de Alta Performance para Camiones',
      descripcion: 'Sistema de frenos de alto rendimiento, diseñado para soportar condiciones extremas y largas distancias.',
      precio: 5000.00,
      stock: 25,
      categoria: 'Piezas de Repuesto',
      fecha_agregado: '2024-07-10',
      marca: 'Brembo'
    },
    {
      id: 10,
      nombre_producto: 'Camión Liviano Isuzu NRR',
      descripcion: 'Camión liviano de carga, ideal para pequeñas empresas de transporte con capacidad de hasta 5 toneladas.',
      precio: 32000.00,
      stock: 12,
      categoria: 'Camiones Livianos',
      fecha_agregado: '2024-10-01',
      marca: 'Isuzu'
    },
    {
      id: 11,
      nombre_producto: 'Camión Volquete Volvo A40G',
      descripcion: 'Camión volquete con capacidad de carga de hasta 40 toneladas, ideal para minería y construcción.',
      precio: 150000.00,
      stock: 4,
      categoria: 'Camiones Volquete',
      fecha_agregado: '2024-06-30',
      marca: 'Volvo'
    },
    {
      id: 12,
      nombre_producto: 'Bastidor para Camión de Carga',
      descripcion: 'Bastidor robusto para camión de carga pesada, fabricado en acero de alta resistencia.',
      precio: 12000.00,
      stock: 10,
      categoria: 'Piezas de Repuesto',
      fecha_agregado: '2024-05-15',
      marca: 'Generic'
    },
    {
      id: 13,
      nombre_producto: 'Camión de Transporte Internacional Freightliner Cascadia',
      descripcion: 'Camión de larga distancia para transporte internacional, con tecnología avanzada y bajo consumo de combustible.',
      precio: 95000.00,
      stock: 6,
      categoria: 'Camiones Internacionales',
      fecha_agregado: '2024-04-10',
      marca: 'Freightliner'
    },
    {
      id: 14,
      nombre_producto: 'Camión de Bomberos Scania',
      descripcion: 'Camión de bomberos diseñado para servicios de emergencia, con sistema de bombeo de alta capacidad y espacio para personal.',
      precio: 130000.00,
      stock: 3,
      categoria: 'Camiones Especiales',
      fecha_agregado: '2024-03-05',
      marca: 'Scania'
    },
    {
      id: 15,
      nombre_producto: 'Accesorios de Cabina para Camión',
      descripcion: 'Accesorios para cabina de camión, incluyendo asientos ergonómicos, reposabrazos y sistemas de climatización.',
      precio: 800.00,
      stock: 40,
      categoria: 'Accesorios',
      fecha_agregado: '2024-11-02',
      marca: 'Generic'
    },
    {
      id: 16,
      nombre_producto: 'Camión de Cemento Kenworth T880',
      descripcion: 'Camión de cemento con mezcladora de alta capacidad, ideal para la construcción de grandes proyectos.',
      precio: 85000.00,
      stock: 9,
      categoria: 'Camiones de Cemento',
      fecha_agregado: '2024-02-25',
      marca: 'Kenworth'
    },
    {
      id: 17,
      nombre_producto: 'Barras Antivuelco para Camión',
      descripcion: 'Barras de seguridad antivuelco para camiones de carga pesada, garantizando la estabilidad durante el transporte.',
      precio: 2000.00,
      stock: 15,
      categoria: 'Seguridad',
      fecha_agregado: '2024-01-15',
      marca: 'Generic'
    },
    {
      id: 18,
      nombre_producto: 'Camión con Plataforma Elevadora',
      descripcion: 'Camión con plataforma elevadora, ideal para trabajos de carga y descarga en espacios reducidos.',
      precio: 70000.00,
      stock: 4,
      categoria: 'Camiones con Plataforma',
      fecha_agregado: '2024-11-10',
      marca: 'MAN'
    },
    {
      id: 19,
      nombre_producto: 'Cargador Frontal para Camión',
      descripcion: 'Cargador frontal compatible con camiones pesados, para transporte de materiales a granel.',
      precio: 22000.00,
      stock: 5,
      categoria: 'Equipos Pesados',
      fecha_agregado: '2024-08-05',
      marca: 'Caterpillar'
    },
    {
      id: 20,
      nombre_producto: 'Repuestos para Motor de Camión',
      descripcion: 'Repuestos originales para motores de camiones de carga pesada, garantizando la máxima eficiencia del vehículo.',
      precio: 2500.00,
      stock: 50,
      categoria: 'Piezas de Repuesto',
      fecha_agregado: '2024-07-01',
      marca: 'Cummins'
    }
  ];
  
  export default productosCamiones;
  