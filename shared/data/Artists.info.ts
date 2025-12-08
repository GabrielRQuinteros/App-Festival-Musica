
export interface ArtistInfo {
  name: string,
  imageUrl: string,
  presentationDescription: string
}

export const artists: ArtistInfo[] = [
  {
    name: "Los Mate Cósmico",
    imageUrl: "/images/band1.jpg",
    presentationDescription: "1 de julio, 21:00 hs - Escenario Principal",
  },
  {
    name: "La Peña del Trueno",
    imageUrl: "/images/band2.jpg",
    presentationDescription: "2 de julio, 20:30 hs - Escenario Principal",
  },
  {
    name: "Baldomero y la Ruta 40",
    imageUrl: "/images/band3.jpg",
    presentationDescription: "3 de julio, 21:30 hs - Escenario Principal",
  },
  {
    name: "Las Pastillas del Mercado",
    imageUrl: "/images/band4.jpg",
    presentationDescription: "4 de julio, 22:00 hs - Escenario Principal",
  },
  {
    name: "Cumbia Quantum",
    imageUrl: "/images/band5.jpg",
    presentationDescription: "5 de julio, 20:00 hs - Escenario Principal",
  },
  {
    name: "La Tercera Orilla",
    imageUrl: "/images/band6.jpg",
    presentationDescription: "6 de julio, 21:00 hs - Escenario Principal",
  },
  {
    name: "Guitarras del Sur",
    imageUrl: "/images/band7.jpg",
    presentationDescription: "7 de julio, 22:00 hs - Escenario Principal",
  },
];


// TIMELINE

export interface TimelineArtist {
  name: string;
  time: string;
  stage: string;
  isMain: boolean;
}

export interface DaySchedule {
  day: string;
  artists: TimelineArtist[];
}

export const timelineData: DaySchedule[] = [
  {
    day: "1 de julio",
    artists: [
      {
        name: "Los Mate Cósmico",
        time: "21:00 hs",
        stage: "Escenario Principal",
        isMain: true,
      },
      {
        name: "Electro Ñandú",
        time: "18:30 hs",
        stage: "Escenario Secundario",
        isMain: false,
      },
    ],
  },
  {
    day: "2 de julio",
    artists: [
      {
        name: "La Peña del Trueno",
        time: "20:30 hs",
        stage: "Escenario Principal",
        isMain: true,
      },
      {
        name: "Los Hijos del Viento",
        time: "17:45 hs",
        stage: "Escenario Secundario",
        isMain: false,
      },
    ],
  },
  {
    day: "3 de julio",
    artists: [
      {
        name: "Baldomero y la Ruta 40",
        time: "21:30 hs",
        stage: "Escenario Principal",
        isMain: true,
      },
      {
        name: "Matambre Funk",
        time: "19:00 hs",
        stage: "Escenario Secundario",
        isMain: false,
      },
    ],
  },
  {
    day: "4 de julio",
    artists: [
      {
        name: "Las Pastillas del Mercado",
        time: "22:00 hs",
        stage: "Escenario Principal",
        isMain: true,
      },
      {
        name: "Pibes del Altiplano",
        time: "18:00 hs",
        stage: "Escenario Secundario",
        isMain: false,
      },
    ],
  },
  {
    day: "5 de julio",
    artists: [
      {
        name: "Cumbia Quantum",
        time: "20:00 hs",
        stage: "Escenario Principal",
        isMain: true,
      },
      {
        name: "La Máquina Lunar",
        time: "17:30 hs",
        stage: "Escenario Secundario",
        isMain: false,
      },
    ],
  },
  {
    day: "6 de julio",
    artists: [
      {
        name: "La Tercera Orilla",
        time: "21:00 hs",
        stage: "Escenario Principal",
        isMain: true,
      },
      {
        name: "Samba del Desierto",
        time: "18:15 hs",
        stage: "Escenario Secundario",
        isMain: false,
      },
    ],
  },
  {
    day: "7 de julio",
    artists: [
      {
        name: "Guitarras del Sur",
        time: "22:00 hs",
        stage: "Escenario Principal",
        isMain: true,
      },
      {
        name: "Los Cactus Errantes",
        time: "19:00 hs",
        stage: "Escenario Secundario",
        isMain: false,
      },
    ],
  },
];