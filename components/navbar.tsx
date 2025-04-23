"use client"
import { useState, useEffect } from "react"
import type React from "react"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import ThemeToggle from "./theme-toggle"

const pages = ["Home", "About", "Skills", "Projects", "Contact"]

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const { mode } = useTheme()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const scrollToSection = (sectionId: string) => {
    handleCloseNavMenu()
    const section = document.getElementById(sectionId.toLowerCase())
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: scrolled ? 3 : 0,
        bgcolor: scrolled ? (mode === "light" ? "rgba(255, 255, 255, 0.9)" : "rgba(30, 30, 30, 0.9)") : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        color: scrolled ? "text.primary" : mode === "light" ? "white" : "text.primary",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Famswit
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => scrollToSection(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PORTFOLIO
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
            <AnimatePresence>
              {pages.map((page, index) => (
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => scrollToSection(page)}
                    sx={{
                      my: 2,
                      mx: 1,
                      color: "inherit",
                      display: "block",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "2px",
                        bottom: "5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: scrolled ? "green" : mode === "light" ? "white" : "primary.main",
                        transition: "all 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "80%",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>

            <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
              <ThemeToggle />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

