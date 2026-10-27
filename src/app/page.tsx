import { Stack } from "@mui/material";
import { Suspense } from "react";
import AppAppBar from "./components/AppAppBar";
import Cenik from "./components/Cenik";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ONas from "./components/ONas";
import Prihlaska from "./components/Prihlaska";
import Skupiny from "./components/Skupiny";
import Vozidla from "./components/Vozidla";

type TProps = {
  searchParams: Promise<{ img?: string }>;
};

export default function Page({ searchParams }: TProps) {
  return (
    <Suspense fallback={null}>
      <Content searchParams={searchParams} />
    </Suspense>
  );
}

// Dynamická část: čte parametry konkrétního požadavku
async function Content({ searchParams }: TProps) {
  const { img } = await searchParams;

  return <Results img={img} />;
}

async function Results(props: { img?: string }) {
  "use cache";

  return (
    <Stack>
      <AppAppBar />
      <Home img={props.img} />
      <Skupiny />
      <ONas />
      <Cenik />
      <Prihlaska />
      <Vozidla />
      <FAQ />
      <Footer />
    </Stack>
  );
}

export async function Page1({ searchParams }: TProps) {
  const img = (await searchParams).img as string;
}
