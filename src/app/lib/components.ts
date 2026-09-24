export type TSkupinyData = {
  popis: string;
  prezentace?: boolean;
  cena: number;
  skupina: string;
  imagePath?: string;
  iconPath?: string;
};

export const SkupinyData: TSkupinyData[] = [
  {
    skupina: "AM",
    prezentace: true,
    popis: "do 45 Km/h, 15 let",
    cena: 16000,
    imagePath: "/vozy/AM_HondaCPX125.png",
    iconPath: "/Skupiny/AM.svg",
  },
  {
    prezentace: true,
    popis: "max 11kW, 16 let",
    cena: 16000,
    skupina: "A1",
    imagePath: "/vozy/A1_HondaCB125.png",
    iconPath: "/Skupiny/A1.svg",
  },
  {
    prezentace: true,
    popis: "max 35kW, 18 let",
    cena: 17000,
    skupina: "A2",
    imagePath: "/vozy/HondaCB500F.gif",
    iconPath: "/Skupiny/A2.svg",
  },
  {
    prezentace: true,
    popis: "24 let",
    cena: 18000,
    skupina: "A",
    imagePath: "/vozy/A_Kawasaki650.png",
    iconPath: "/Skupiny/A.svg",
  },
  {
    popis: "2 roky praxe A1",
    cena: 6000,
    skupina: "A1/A2 rozšíření",
    imagePath: "/vozy/HondaCB500F.gif",
    iconPath: "/Skupiny/A2.svg",
  },
  {
    popis: "2 roky praxe A2",
    cena: 6000,
    skupina: "A2/A rozšíření",
    imagePath: "/vozy/A_Kawasaki650.png",
    iconPath: "/Skupiny/A.svg",
  },
  {
    prezentace: true,
    popis: "Vozidla do 3 500Kg, 18 let",
    cena: 20000,
    skupina: "B",
    imagePath: "/vozy/KamiqCernyLeva.png",
    iconPath: "/Skupiny/B.svg",
  },
  {
    popis: "Vozidla do 3 500Kg, 18 let, cizí jazyk",
    cena: 23000,
    skupina: "B foreign",
    imagePath: "/vozy/KamiqCernyLeva.png",
    iconPath: "/Skupiny/B.svg",
  },

  {
    prezentace: true,
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
    prezentace: true,
  },
  {
    prezentace: true,
    popis: "C+E",
    cena: 12000,
    skupina: "C+E",
    imagePath: "/vozy/Iveco2Vlek.png",
    iconPath: "/Skupiny/CE.svg",
  },
  {
    popis: "24 let",
    cena: 40000,
    skupina: "B/D",
    imagePath: "/vozy/autobus.png",
    iconPath: "/Skupiny/D.svg",
  },
  {
    popis: "24 let",
    cena: 20000,
    skupina: "C/D",
    imagePath: "/vozy/autobus.png",
    iconPath: "/Skupiny/D.svg",
  },
  {
    prezentace: true,
    popis: "24 let",
    cena: 20000,
    skupina: "D",
    imagePath: "/vozy/autobus.png",
    iconPath: "/Skupiny/D.svg",
  },
];
