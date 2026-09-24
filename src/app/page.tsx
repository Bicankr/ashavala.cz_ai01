import { Stack } from "@mui/material";
import AppAppBar from "./components/AppAppBar";
import Home from "./components/Home";
import ONas from "./components/ONas";
import Skupiny from "./components/Skupiny";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const img = (await searchParams).img as string;
  return (
    <Stack>
      <AppAppBar />
      <Home img={img} />
      <Skupiny />
      <ONas />

      {/* <Cenik /> */}
    </Stack>
  );
}
