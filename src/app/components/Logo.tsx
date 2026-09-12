import { Link } from "@mui/material";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="#home">
      <Image
        src="/LogoAutoskola.svg"
        alt="Název firmy"
        width={180}
        height={46}
        priority
      />
    </Link>
  );
}
