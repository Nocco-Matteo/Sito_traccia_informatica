import { CartaLezioni } from '../models/carta-lezioni.model';

export const MOCK_CARTE: CartaLezioni[] = [
  {
    id:'',
    periodo: {
      data: '01/11/2022',
      giorno: 'Martedì',
      
    },
    lezioni: [
      {
        orarioInizio: '18:00',
        materia: 'Matematica',
        argomento: 'Equazioni di secondo grado',
        presenza: true,
      },
      {
        orarioInizio: '19:00',
        materia: 'Storia',
        argomento: 'Rivoluzione francese',
        presenza: false,
      },
      {
        orarioInizio: '20:00',
        materia: 'Fisica',
        argomento: 'Leggi di Newton',
        presenza: true,
      },
      {
        orarioInizio: '20:50',
        materia: 'Chimica',
        argomento: 'Tavola periodica degli elementi',
        presenza: false,
      }
    ],
  },
  {
    id:'',
    periodo: {
      data: '02/11/2022',
      giorno: 'Mercoledì',
    },
    lezioni: [
      {
        orarioInizio: '18:00',
        materia: 'Italiano',
        argomento: 'Analisi del periodo',
        presenza: false,
      },
      {
        orarioInizio: '19:00',
        materia: 'Inglese',
        argomento: 'Present perfect',
        presenza: true,
      },
      {
        orarioInizio: '20:00',
        materia: 'Geografia',
        argomento: 'Cartografia',
        presenza: true,
      },
      {
        orarioInizio: '20:50',
        materia: 'Arte',
        argomento: 'Rinascimento italiano',
        presenza: false,
      }
    ],
  },
  {
    id:'',
    periodo: {
      data: '03/11/2022',
      giorno: 'Giovedì',
    },
    lezioni: [
      {
        orarioInizio: '18:00',
        materia: 'Matematica',
        argomento: 'Equazioni di secondo grado',
        presenza: true,
      },
      {
        orarioInizio: '19:00',
        materia: 'Storia',
        argomento: 'Rivoluzione industriale',
        presenza: false,
      },
      {
        orarioInizio: '20:00',
        materia: 'Scienze',
        argomento: 'Biologia cellulare',
        presenza: true,
      },
      {
        orarioInizio: '20:50',
        materia: 'Filosofia',
        argomento: 'Idealismo tedesco',
        presenza: true,
      }
    ],
  },
  {
    id:'',
    periodo: {
      data: '04/11/2022',
      giorno: 'Venerdì',
    },
    lezioni: [
      {
        orarioInizio: '18:00',
        materia: 'Fisica',
        argomento: 'Leggi di Newton',
        presenza: true,
      },
      {
        orarioInizio: '19:00',
        materia: 'Chimica',
        argomento: 'Legame chimico',
        presenza: false,
      },
      {
        orarioInizio: '20:00',
        materia: 'Latino',
        argomento: 'Dichiarazioni indirette',
        presenza: true,
      },
      {
        orarioInizio: '20:50',
        materia: 'Musica',
        argomento: 'Armonia e contrappunto',
        presenza: false,
      }
    ],
  }
];
