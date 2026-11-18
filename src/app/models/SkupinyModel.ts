export type TSkupina =
  | "AM"
  | "A1"
  | "A2"
  | "A"
  | "B1"
  | "B"
  | "B96"
  | "B+E"
  | "C1"
  | "C1+E"
  | "C"
  | "C+E"
  | "D1"
  | "D1+E"
  | "D"
  | "D+E"
  | "T";
export interface TSkupiny {
  nazev: TSkupina;
  zakladniskupina: boolean;
  vlastneneSkupiny: Array<TSkupina>;
  podrazeneSkupiny: Array<TSkupina>;
  nadrazeneSkupiny: Array<TSkupina>;
  rozsireniNaSkupiny: Array<TSkupina>;
  popis: string;
  checked?: boolean;
  disabled?: boolean;
}
