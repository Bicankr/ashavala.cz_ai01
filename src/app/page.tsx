import AppAppBar from "./components/AppAppBar";
import Home from "./components/Home";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const img = (await searchParams).img as string;
  return (
    <>
      <AppAppBar />
      <Home img={img} />
    </>
  );
}
