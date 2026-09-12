import Box from "@mui/material/Box";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "15500px",
          maxHeight: "750px", // tvoje maximální výška
          overflow: "hidden", // ořízne přetékající části
          mt: "55px",
        }}
      >
        <Image
          src="/olomouc-kamiq.png"
          alt="Example"
          fill
          style={{
            objectFit: "cover", // vyplní box
          }}
        />
      </Box>
    </>
  );
}
