export type TSkupinyData = {
  popis: string;
  prezentace?: boolean;
  cenik: boolean;
  cena: number;
  skupina: string;
  imagePath: string;
  iconPath: string;
};
export type TVozidlaData = {
  popis: string;
  skupina: string;
  imagePath: string;
};

export const SkupinyData: TSkupinyData[] = [
  {
    skupina: "AM",
    cenik: true,
    prezentace: true,
    popis: "do 45 Km/h, 15 let",
    cena: 16000,
    imagePath: "/vozy/AM_HondaCPX125.png",
    iconPath: "/Skupiny/AM.svg",
  },
  {
    cenik: true,
    prezentace: true,
    popis: "max 11kW, 16 let",
    cena: 16000,
    skupina: "A1",
    imagePath: "/vozy/A1_HondaCB125.png",
    iconPath: "/Skupiny/A1.svg",
  },
  {
    cenik: true,
    prezentace: true,
    popis: "max 35kW, 18 let",
    cena: 17000,
    skupina: "A2",
    imagePath: "/vozy/HondaCB500F.gif",
    iconPath: "/Skupiny/A2.svg",
  },
  {
    cenik: true,

    prezentace: true,
    popis: "24 let",
    cena: 18000,
    skupina: "A",
    imagePath: "/vozy/A_Kawasaki650.png",
    iconPath: "/Skupiny/A.svg",
  },
  {
    cenik: true,
    popis: "2 roky praxe A1",
    cena: 6000,
    skupina: "A1/A2 rozšíření",
    imagePath: "/vozy/HondaCB500F.gif",
    iconPath: "/Skupiny/A2.svg",
  },
  {
    cenik: true,
    popis: "2 roky praxe A2",
    cena: 6000,
    skupina: "A2/A rozšíření",
    imagePath: "/vozy/A_Kawasaki650.png",
    iconPath: "/Skupiny/A.svg",
  },
  {
    cenik: true,
    prezentace: true,
    popis: "Vozidla do 3 500Kg, 18 let",
    cena: 20000,
    skupina: "B",
    imagePath: "/vozy/KamiqCernyLeva.png",
    iconPath: "/Skupiny/B.svg",
  },
  {
    cenik: true,
    popis: "Vozidla do 3 500Kg, 18 let, cizí jazyk",
    cena: 23000,
    skupina: "B foreign",
    imagePath: "/vozy/KamiqCernyLeva.png",
    iconPath: "/Skupiny/B.svg",
  },

  {
    cenik: true,
    prezentace: true,
    popis: "18 let",
    cena: 8000,
    skupina: "B+E",
    imagePath: "/vozy/bewhite.jpeg",
    iconPath: "/Skupiny/BE.svg",
  },

  {
    cenik: true,
    popis: "C",
    cena: 22000,
    skupina: "C",
    imagePath: "/vozy/Iveco3.png",
    iconPath: "/Skupiny/C.svg",
    prezentace: true,
  },
  {
    cenik: true,
    prezentace: true,
    popis: "C+E",
    cena: 12000,
    skupina: "C+E",
    imagePath: "/vozy/Iveco2Vlek.png",
    iconPath: "/Skupiny/CE.svg",
  },
  {
    cenik: true,
    popis: "24 let",
    cena: 40000,
    skupina: "B/D",
    imagePath: "/vozy/autobus.png",
    iconPath: "/Skupiny/D.svg",
  },
  {
    cenik: true,
    popis: "24 let",
    cena: 20000,
    skupina: "C/D",
    imagePath: "/vozy/autobus.png",
    iconPath: "/Skupiny/D.svg",
  },
  {
    cenik: false,
    prezentace: true,
    popis: "24 let",
    cena: 20000,
    skupina: "D",
    imagePath: "/vozy/autobus.png",
    iconPath: "/Skupiny/D.svg",
  },
];

export const VozidlaData: TVozidlaData[] = [
  {
    skupina: "AM",
    popis: "Honda CPX125",
    imagePath: "/vozy/AM_HondaCPX125.png",
  },
  {
    popis: "Honda CB125",
    skupina: "A1",
    imagePath: "/vozy/A1_HondaCB125.png",
  },
  {
    popis: "Honda CB500F",
    skupina: "A2",
    imagePath: "/vozy/HondaCB500F.gif",
  },
  {
    popis: "Kawasaki 650",
    skupina: "A",
    imagePath: "/vozy/A_Kawasaki650.png",
  },
  {
    popis: "Kamiq 01",
    skupina: "B",
    imagePath: "/vozy/Kamiq1ADE978Uhel.webp",
  },
  {
    popis: "Kamiq 02",
    skupina: "B",
    imagePath: "/vozy/Kamiq8M43453Uhel.webp",
  },
  {
    popis: "Scala 01",
    skupina: "B",
    imagePath: "/vozy/Scala4SY5934Uhel.webp",
  },
  {
    popis: "Scala 02",
    skupina: "B",
    imagePath: "/vozy/Scala8AF2187Uhel.webp",
  },
  {
    popis: "Scala 03",
    skupina: "B",
    imagePath: "/vozy/Scala4SY5403Uhel.webp",
  },
  {
    popis: "Fabia 01",
    skupina: "B",
    imagePath: "/vozy/FabiaBAE9200Uhel.webp",
  },
  {
    popis: "B + E",
    skupina: "B+E",
    imagePath: "/vozy/bewhite.jpeg",
  },

  {
    popis: "Iveco",
    skupina: "C",
    imagePath: "/vozy/Iveco3.png",
  },
  {
    popis: "Iveco + vlek",
    skupina: "C+E",
    imagePath: "/vozy/Iveco2Vlek.png",
  },
  {
    popis: "Man",
    skupina: "D",
    imagePath: "/vozy/Man.webp",
  },
];
