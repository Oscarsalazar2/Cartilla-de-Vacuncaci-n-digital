const VACUNAS_ESQUEMA = [
  // 🧒 Menores de 10 años
  {
    idEsquema: 'BCG_1',
    claveVacuna: 'BCG',
    nombreVacuna: 'BCG',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 0,
    edadMaxMeses: 1,
    descripcionEdad: 'Recién nacido (al nacer)',
    dosisNumero: 1,
    totalDosis: 1,
    obligatoria: true
  },
  {
    idEsquema: 'HEPB_1',
    claveVacuna: 'HEPB',
    nombreVacuna: 'Hepatitis B',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 0,
    edadMaxMeses: 1,
    descripcionEdad: 'Recién nacido',
    dosisNumero: 1,
    totalDosis: 3,
    obligatoria: true
  },
  {
    idEsquema: 'HEPB_2',
    claveVacuna: 'HEPB',
    nombreVacuna: 'Hepatitis B',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 2,
    edadMaxMeses: 3,
    descripcionEdad: '2 meses',
    dosisNumero: 2,
    totalDosis: 3,
    obligatoria: true
  },
  {
    idEsquema: 'HEPB_3',
    claveVacuna: 'HEPB',
    nombreVacuna: 'Hepatitis B',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 6,
    edadMaxMeses: 7,
    descripcionEdad: '6 meses',
    dosisNumero: 3,
    totalDosis: 3,
    obligatoria: true
  },

  // Pentavalente 2,4,6,18 meses
  {
    idEsquema: 'PENTA_1',
    claveVacuna: 'PENTA',
    nombreVacuna: 'Pentavalente acelular',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 2,
    edadMaxMeses: 3,
    descripcionEdad: '2 meses',
    dosisNumero: 1,
    totalDosis: 4,
    obligatoria: true
  },
  {
    idEsquema: 'PENTA_2',
    claveVacuna: 'PENTA',
    nombreVacuna: 'Pentavalente acelular',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 4,
    edadMaxMeses: 5,
    descripcionEdad: '4 meses',
    dosisNumero: 2,
    totalDosis: 4,
    obligatoria: true
  },
  {
    idEsquema: 'PENTA_3',
    claveVacuna: 'PENTA',
    nombreVacuna: 'Pentavalente acelular',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 6,
    edadMaxMeses: 7,
    descripcionEdad: '6 meses',
    dosisNumero: 3,
    totalDosis: 4,
    obligatoria: true
  },
  {
    idEsquema: 'PENTA_4',
    claveVacuna: 'PENTA',
    nombreVacuna: 'Pentavalente acelular',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 18,
    edadMaxMeses: 20,
    descripcionEdad: '18 meses',
    dosisNumero: 4,
    totalDosis: 4,
    obligatoria: true
  },

  // Rotavirus
  {
    idEsquema: 'ROTA_1',
    claveVacuna: 'ROTA',
    nombreVacuna: 'Rotavirus',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 2,
    edadMaxMeses: 3,
    descripcionEdad: '2 meses',
    dosisNumero: 1,
    totalDosis: 3,
    obligatoria: true
  },
  {
    idEsquema: 'ROTA_2',
    claveVacuna: 'ROTA',
    nombreVacuna: 'Rotavirus',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 4,
    edadMaxMeses: 5,
    descripcionEdad: '4 meses',
    dosisNumero: 2,
    totalDosis: 3,
    obligatoria: true
  },
  {
    idEsquema: 'ROTA_3',
    claveVacuna: 'ROTA',
    nombreVacuna: 'Rotavirus',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 6,
    edadMaxMeses: 7,
    descripcionEdad: '6 meses',
    dosisNumero: 3,
    totalDosis: 3,
    obligatoria: true
  },

  // Neumococo 2,4,12 meses
  {
    idEsquema: 'NEUMO_1',
    claveVacuna: 'NEUMO',
    nombreVacuna: 'Neumococo conjugada',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 2,
    edadMaxMeses: 3,
    descripcionEdad: '2 meses',
    dosisNumero: 1,
    totalDosis: 3,
    obligatoria: true
  },
  {
    idEsquema: 'NEUMO_2',
    claveVacuna: 'NEUMO',
    nombreVacuna: 'Neumococo conjugada',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 4,
    edadMaxMeses: 5,
    descripcionEdad: '4 meses',
    dosisNumero: 2,
    totalDosis: 3,
    obligatoria: true
  },
  {
    idEsquema: 'NEUMO_3',
    claveVacuna: 'NEUMO',
    nombreVacuna: 'Neumococo conjugada',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 12,
    edadMaxMeses: 15,
    descripcionEdad: '12 meses',
    dosisNumero: 3,
    totalDosis: 3,
    obligatoria: true
  },

  // SRP 1 año y 6 años
  {
    idEsquema: 'SRP_1',
    claveVacuna: 'SRP',
    nombreVacuna: 'SRP (Sarampión, Rubéola, Parotiditis)',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 12,
    edadMaxMeses: 15,
    descripcionEdad: '1 año',
    dosisNumero: 1,
    totalDosis: 2,
    obligatoria: true
  },
  {
    idEsquema: 'SRP_2',
    claveVacuna: 'SRP',
    nombreVacuna: 'SRP (Sarampión, Rubéola, Parotiditis)',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 72,
    edadMaxMeses: 77,
    descripcionEdad: '6 años (refuerzo)',
    dosisNumero: 2,
    totalDosis: 2,
    obligatoria: true
  },

  // DTP refuerzo 4 años
  {
    idEsquema: 'DTP_R1',
    claveVacuna: 'DTP',
    nombreVacuna: 'DTP (refuerzo)',
    grupoEdad: 'MENOR_10',
    edadMinMeses: 48,
    edadMaxMeses: 53,
    descripcionEdad: '4 años',
    dosisNumero: 1,
    totalDosis: 1,
    obligatoria: true
  },

  // Hepatitis A, Varicela, etc. puedes seguir el mismo patrón...

  // 🧑‍🎓 Adolescentes
  {
    idEsquema: 'VPH_1',
    claveVacuna: 'VPH',
    nombreVacuna: 'Virus del Papiloma Humano',
    grupoEdad: 'ADOLESCENTE',
    edadMinMeses: 108, // 9 años
    edadMaxMeses: 168, // 14 años
    descripcionEdad: '9 a 14 años (1ª dosis)',
    dosisNumero: 1,
    totalDosis: 2,
    obligatoria: true
  },
  {
    idEsquema: 'VPH_2',
    claveVacuna: 'VPH',
    nombreVacuna: 'Virus del Papiloma Humano',
    grupoEdad: 'ADOLESCENTE',
    edadMinMeses: 114,
    edadMaxMeses: 174,
    descripcionEdad: '2ª dosis (6 meses después)',
    dosisNumero: 2,
    totalDosis: 2,
    obligatoria: true
  },

  {
    idEsquema: 'TD_ADO_1',
    claveVacuna: 'TD',
    nombreVacuna: 'Tétanos y Difteria (Td)',
    grupoEdad: 'ADOLESCENTE',
    edadMinMeses: 144,
    edadMaxMeses: 180,
    descripcionEdad: '12 años',
    dosisNumero: 1,
    totalDosis: 1,
    obligatoria: true
  },

  //Adultos (ejemplo)
  {
    idEsquema: 'TD_ADULTO_REF',
    claveVacuna: 'TD',
    nombreVacuna: 'Tétanos y Difteria (Td)',
    grupoEdad: 'ADULTO',
    edadMinMeses: 240,
    edadMaxMeses: null,
    descripcionEdad: 'Cada 10 años',
    dosisNumero: 1,
    totalDosis: 999, // para indicar esquema repetible
    obligatoria: true
  },
  {
    idEsquema: 'INFLU_ADULTO_ANUAL',
    claveVacuna: 'INFLU',
    nombreVacuna: 'Influenza',
    grupoEdad: 'ADULTO',
    edadMinMeses: 240,
    edadMaxMeses: null,
    descripcionEdad: 'Anual (temporada invernal)',
    dosisNumero: 1,
    totalDosis: 999,
    obligatoria: true
  }
];
