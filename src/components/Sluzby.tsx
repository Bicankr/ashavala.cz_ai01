import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const sluzby = [
  {
    imagePath: "/vozy/KamiqCernyLeva.png",
    title: "Výuka a výcvik",
    description:
      "Autoškola Havala poskytuje výuku a výcvik pro získání skupin řidičských oprávnění AM, A1, A2, A, B1, B, B+E, C, C+E, D, D+E. Pro výcvik je k dispozici široký vozový park a široká základna zkušených instruktorů. ",
  },
  {
    imagePath: "/vozy/Iveco2Vlek.png",
    title: "Profesní školení",
    description:
      "Autoškola Havala jako akreditované školící středisko poskytuje pro organizace i fyzické osoby zákonem předepsaná školení zvyšování odborné způsobilosti řidičů. Školení se po dohodě uskuteční v objektu Vaší firmy nebo v naší autoškole vždy s využitím audiovizuální techniky. Školení jsou organizována za velmi výhodných cenových podmínek.",
  },
  {
    imagePath: "/vozy/ScalaB1.png",
    title: "Kondiční jízdy",
    description:
      "Vlastníte léta řidičský průkaz a nemáte odvahu sami vyjet? Tak dlouho Vás učil přítel či manžel jezdit až to vypadalo na rozchod? Pořídili jste si, nebo si hodláte pořídit moderní vůz a nemáte potřebnou praxi v řízení? Myslíte si, že řídit se naučí všichni kromě Vás? Nabízíme jízdu ve vybraném typu výcvikového vozidla nebo Vašem vlastním vozidle pod vedením profesionálního lektora Možnost natrénovat si konkrétní trasu Neostýchejte se a sjednejte si kondiční jízdy. Uvidíte, že po třech až čtyřech lekcích budete samostatně ovládat vozidlo v mimoměstském i městském provozu. Cena za 90 minut kondiční jízdy je 1200 Kč",
  },
  {
    imagePath: "/vozy/ScalaB1.png",
    title: "Přezkoušení z odborné způsobilosti pro vrácení řidičského průkazu",
    description:
      "Pokud Vám byl udělen zákaz řízení na dobu delší než jeden rok, pokud jste dosáhli 12 bodů, nebo pokud jste pozbyli zdravotní způsobilost na dobu delší než tři roky, je potřeba podrobit se přezkoušení z odborní způsobilosti. Toto přezkoušení se provádí zkouškou v následujícím rozsahu: testy z pravidel silničního provozu a zdravovědy ústní zkouška z ovládání a údržby vozidla zkouška z praktické jízdy Po uplynutí lhůty zákazu řízení je třeba před zkouškou dodat následující dokumenty žádost o řidičské oprávnění posudek o zdravotní způsobilosti potvrzený praktickým lékařem rozsudek nebo rozhodnutí o uložení popř. prominutí trestu výpis z evidenční karty řidiče Po uplynutí doby jednoho roku od získání 12 bodů je třeba před zkouškou dodat následující dokumenty žádost o řidičské oprávnění posudek o zdravotní způsobilosti potvrzený praktickým lékařem výpis z evidenční karty řidiče potvrzení o absolvování dopravně psychologického vyšetření po opětovném nabytí zdravotní způsobilosti žádost o řidičské oprávnění  posudek o zdravotní způsobilosti potvrzený praktickým lékařem  Pro bližší informace nás kontaktujte",
  },
  {
    imagePath: "/psycholog.png",
    title: "Dopravní psycholg",
    description: "PhDr. Roman Hradil",
  },
];

export default function Sluzby() {
  return (
    <Box
      id="sluzby"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        background: "linear-gradient(180deg, #ebf0f7 0%, #c7cfdb 100%)",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: "black" }}
          >
            Služby
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Služby poskytované autoškolou a školicím střediskem Havala.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {sluzby.map((item, index) => (
            <Grid size={{ xs: 12, sm: 8, md: 6 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ opacity: "80%" }}>
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width={300}
                    height={200}
                    style={{
                      objectFit: "contain", // Ořízne přebytky a vyplní celý rámec bez deformace
                      objectPosition: "center", // Zaměří středy obrázků
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    gutterBottom
                    sx={{ fontWeight: "medium", color: "black" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
