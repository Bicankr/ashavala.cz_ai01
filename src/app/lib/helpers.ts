import { TRole } from "../models/ZadatelModel";

export const DiacriticsRemove = (value: string) => {
    return value.normalize("NFD").replace(/\p{Diacritic}/gu, "");
};

export const hasRole = (session: any, role: TRole): boolean => {
    return (session?.user?.roles as TRole[])?.findIndex((e) => e === role) > 0;
};

export const addOrRemove = (arr: any = [], item: any) =>
    arr?.includes(item) ? arr?.filter((i: any) => i !== item) : [...arr, item];

export const serialize = (o: unknown) => {
    if (!o) return;
    return JSON.parse(JSON.stringify(o));
};
