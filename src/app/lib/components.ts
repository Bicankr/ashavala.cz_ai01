export type TCenik = {
  popis: string;
  cena: number;
  skupina: string;
  imagePath?: string;
  iconPath?: string;
};

export const cenik: TCenik[] = [
  {
    popis: "do 45 Km/h, 15 let",
    cena: 16000,
    skupina: "AM",
    imagePath: "/vozy/AM_HondaCPX125.png",
  },
  {
    popis: "max 11kW, 16 let",
    cena: 16000,
    skupina: "A1",
    imagePath: "/vozy/A1_HondaCB125.png",
  },
  {
    popis: "max 35kW, 18 let",
    cena: 17000,
    skupina: "A2",
    imagePath: "/vozy/HondaCB500F.gif",
  },
  {
    popis: "24 let",
    cena: 18000,
    skupina: "A",
    imagePath: "/vozy/A_Kawasaki650.png",
  },
  {
    popis: "2 roky praxe A1",
    cena: 6000,
    skupina: "A1/A2 rozšíření",
    imagePath: "/vozy/HondaCB500F.gif",
  },
  {
    popis: "2 roky praxe A2",
    cena: 6000,
    skupina: "A2/A rozšíření",
    imagePath: "/vozy/A_Kawasaki650.png",
  },
  {
    popis: "Vozidla do 3 500Kg, 18 let",
    cena: 20000,
    skupina: "B",
    imagePath: "/vozy/KamiqCernyLeva.png",
  },
  {
    popis: "Vozidla do 3 500Kg, 18 let, cizí jazyk",
    cena: 23000,
    skupina: "B foreign",
    imagePath: "/vozy/KamiqCernyLeva.png",
  },

  {
    popis: "18 let",
    cena: 8000,
    skupina: "B+E",
    imagePath: "/vozy/bewhite.jpeg",
  },

  { popis: "C", cena: 22000, skupina: "C", imagePath: "/vozy/Iveco3.png" },
  {
    popis: "C+E",
    cena: 12000,
    skupina: "C+E",
    imagePath: "/vozy/Iveco2Vlek.png",
  },
  {
    popis: "24 let",
    cena: 40000,
    skupina: "B/D",
    imagePath: "/vozy/autobus.png",
  },
  {
    popis: "24 let",
    cena: 20000,
    skupina: "C/D",
    imagePath: "/vozy/autobus.png",
  },
];
export const skupiny: TCenik[] = [
  {
    popis: "do 45 Km/h, 15 let",
    cena: 16000,
    skupina: "AM",
    imagePath: "/vozy/AM_HondaCPX125.png",
    iconPath: "/Skupiny/AM.svg",
  },
  {
    popis: "max 11kW, 16 let",
    cena: 16000,
    skupina: "A1",
    imagePath: "/vozy/A1_HondaCB125.png",
    iconPath: "/Skupiny/A1.svg",
  },
  {
    popis: "max 35kW, 18 let",
    cena: 17000,
    skupina: "A2",
    imagePath: "/vozy/HondaCB500F.gif",
    iconPath: "/Skupiny/A2.svg",
  },
  {
    popis: "24 let",
    cena: 18000,
    skupina: "A",
    imagePath: "/vozy/A_Kawasaki650.png",
    iconPath: "/Skupiny/A.svg",
  },
  {
    popis: "Vozidla do 3 500Kg, 18 let",
    cena: 20000,
    skupina: "B",
    imagePath: "/vozy/KamiqCernyLeva.png",
    iconPath: "/Skupiny/B.svg",
  },

  {
    popis: "18 let",
    cena: 8000,
    skupina: "B+E",
    imagePath: "/vozy/bewhite.jpeg",
    iconPath: "/Skupiny/BE.svg",
  },
  {
    popis: "C",
    cena: 22000,
    skupina: "C",
    imagePath: "/vozy/Iveco3.png",
    iconPath: "/Skupiny/C.svg",
  },
  {
    popis: "C+E",
    cena: 12000,
    skupina: "C+E",
    imagePath: "/vozy/Iveco2Vlek.png",
    iconPath: "/Skupiny/CE.svg",
  },
  {
    popis: "24 let",
    cena: 40000,
    skupina: "D",
    imagePath: "/vozy/autobus.png",
    iconPath: "/Skupiny/D.svg",
  },
];
