"use client";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

import { Link, MenuList } from "@mui/material";
import * as React from "react";
import { Logo } from "./Logo";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  backgroundColor: "none",
  height: "80px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        background: "linear-gradient(180deg, #ebf0f7 0%, #c7cfdb 100%)",
      }}
    >
      <Container
        sx={{
          width: "100%",
        }}
      >
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              px: 0,
              width: "100%",
            }}
          >
            <Box sx={{ mt: "5px" }}>
              <Logo />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                ml: 1,
                width: "100%",
              }}
            >
              <Link href="#sluzby">
                <Button
                  sx={{ color: "black", textTransform: "none", mt: "5px" }}
                  size="small"
                >
                  Služby
                </Button>
              </Link>
              <Link href="#cenik" sx={{ textDecoration: "none" }}>
                <Button
                  sx={{ color: "black", textTransform: "none", mt: "5px" }}
                  size="small"
                >
                  Ceník
                </Button>
              </Link>
              <Link href="#prihlaska">
                <Button
                  color="info"
                  size="small"
                  sx={{
                    fontSize: "18px",
                  }}
                >
                  Přihláška
                </Button>
              </Link>
              <Link href="#vozidla">
                <Button
                  sx={{ color: "black", textTransform: "none", mt: "5px" }}
                  size="small"
                >
                  Vozidla
                </Button>
              </Link>
              <Link href="#hodnoceni">
                <Button
                  sx={{ color: "black", textTransform: "none", mt: "5px" }}
                  size="small"
                >
                  Hodnocení
                </Button>
              </Link>
              <Link href="#castedotazy">
                <Button
                  sx={{ color: "black", textTransform: "none", mt: "5px" }}
                  size="small"
                >
                  Časté dotazy
                </Button>
              </Link>
              <Link href="/?img=den">
                <Button variant="outlined">Den</Button>
              </Link>
              <Link href="/?img=noc">
                <Button variant="outlined">Noc</Button>
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              slotProps={{
                paper: {
                  sx: {
                    top: "var(--template-frame-height, 0px)",
                  },
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuList>
                  <Link href="/?img=den">
                    <Button variant="outlined">Den</Button>
                  </Link>
                  <Link href="/?img=noc">
                    <Button variant="outlined">Noc</Button>
                  </Link>

                  <Link
                    href="#sluzby"
                    onClick={toggleDrawer(false)}
                    sx={{ width: "200px" }}
                  >
                    <MenuItem>Služby</MenuItem>
                  </Link>
                  <Link
                    href="#cenik"
                    onClick={toggleDrawer(false)}
                    sx={{ width: "200px" }}
                  >
                    <MenuItem>Ceník</MenuItem>
                  </Link>

                  <Link
                    href="#prihlaska"
                    onClick={toggleDrawer(false)}
                    sx={{ width: "200px" }}
                  >
                    <MenuItem>Přihláška</MenuItem>
                  </Link>
                  <Link
                    href="#vozidla"
                    onClick={toggleDrawer(false)}
                    sx={{ width: "200px" }}
                  >
                    <MenuItem>Vozidla</MenuItem>
                  </Link>
                  <Link
                    href="#hodnoceni"
                    onClick={toggleDrawer(false)}
                    sx={{ width: "200px" }}
                  >
                    <MenuItem>Hodnocení</MenuItem>
                  </Link>
                  <Link
                    href="#castedotazy"
                    onClick={toggleDrawer(false)}
                    sx={{ width: "200px" }}
                  >
                    <MenuItem>Časté dotazy</MenuItem>
                  </Link>
                </MenuList>
              </Box>
            </Drawer>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex", height: "1px" },
              gap: 1,
              alignItems: "center",
              height: "5px",
            }}
          >
            <Button
              color="info"
              size="small"
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Přihlášení
            </Button>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
