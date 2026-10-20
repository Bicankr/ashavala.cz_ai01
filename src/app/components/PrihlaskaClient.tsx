"use client";
import { IZadatel, zZadatel } from "@/types/Zadatel";
import { handleZadatelSubmit } from "../lib/actions";
import { AutoForm } from "./AutoForm";
import PrihlaskaVyberSkupin from "./PrihlaskaVyberSkupin";

type TProps = { defaultValues: IZadatel };
export default function PrihlaskaClient(props: TProps) {
  return (
    <>
      <PrihlaskaVyberSkupin />
      <AutoForm
        schema={zZadatel}
        onSubmit={handleZadatelSubmit}
        defaultValues={props.defaultValues}
        submitText="Vytvořit účet"
      />
    </>
  );
}
