import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import dayjs from "dayjs";
import useSWR from "swr";
import { getKurzyZahajeni } from "../lib/actions";
import { IKurzZahajeni } from "../models/KurzZahajeniModel";
import { Loading } from "./Loading";

interface IProps<T> {
  label: string;
  value: string;
  callBack: Function;
}

export default function SelectKurzZahajeni<T>(props: IProps<T>) {
  const handleChange = (event: SelectChangeEvent) => {
    props.callBack(event.target.value as string);
  };
  const {
    data: kurzyZahajeni,
    isLoading,
    isValidating,
  } = useSWR("Roky", getKurzyZahajeni, {});

  if (isLoading) return <Loading />;
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-label">{props.label}</InputLabel>
        <Select
          labelId={"select-label"}
          id={props.label}
          value={props.value}
          label="Druh výuky a výcviku"
          onChange={handleChange}
        >
          {(kurzyZahajeni as IKurzZahajeni[])
            .filter((e) => e.skupina === "B")
            .map((e) => (
              <MenuItem
                key={String(e._id)}
                value={dayjs(e.datumzahajeni).toISOString()}
              >
                {dayjs(e.datumzahajeni).format("D.M.YYYY")} - volných míst{" "}
                {e.pocetmist - e.zadateleIds.length > e.pocetmistmin
                  ? e.pocetmist - e.zadateleIds.length
                  : e.pocetmistmin}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
