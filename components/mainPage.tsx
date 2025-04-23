"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/theme-context";

export default function MainPage() {
  const [displayedName, setDisplayedName] = useState("");
  const { mode } = useTheme();
  const fullName = "Adewole Oluwafemi";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        background: mode === "light" ? "radial-gradient(circle at center, #294E28, #031A09)" : "#0A0A0A",
        color: "white",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Left Text Section */}
          <Box
            sx={{ maxWidth: "800px", textAlign: { xs: "center", md: "left" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ mr: "20px", fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Hi, I'm
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  background: "linear-gradient(90deg, #E2F87B, #ff4b2b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {displayedName}
              </Typography>
            </Box>

            <Typography
              variant="h4"
              component="h5"
              gutterBottom
              sx={{ fontSize: { xs: "1.25rem", md: "2rem" } }}
            >
              Web Developer & Designer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              I create beautiful, responsive websites with modern technologies
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "start" }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 2,
                  background: "linear-gradient(120deg, #E2F87B, #ff4b2b)",
                  color: "black",
                  ":hover": {
                    background: "transparent",
                    color: "white",
                    border: "1px solid white",
                  },
                }}
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outlined"
                color="inherit"
                size="large"
                sx={{
                  borderRadius: 2,
                  ":hover": {
                    background: "linear-gradient(120deg, #E2F87B, #ff4b2b)",
                    color: "black",
                  },
                }}
              >
                Contact Me
              </Button>
            </Stack>

            {/* Social Icons */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "start" }}
              mt={3}
            >
              {[
                {
                  icon: <LinkedInIcon />,
                  href: "https://www.linkedin.com/in/oluwafemi-eben-adewole",
                  label: "LinkedIn",
                },
                {
                  icon: <GitHubIcon />,
                  href: "https://github.com/Famswit",
                  label: "GitHub",
                },
                {
                  icon: <EmailIcon />,
                  href: "https://www.gmail.com",
                  label: "Email",
                },
                {
                  icon: <PhoneIcon />,
                  href: "tel:+2348123456789",
                  label: "Phone: +234-816-831-4822",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Tooltip title={item.label}>
                    <IconButton
                      component="a"
                      href={item.href}
                      target="_blank"
                      sx={{
                        color: "white",
                        background: "transparent",
                        transition: "all 0.3s ease",
                        ":hover": {
                          background:
                            "linear-gradient(120deg, #E2F87B, #ff4b2b)",
                          color: "black",
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  </Tooltip>
                </motion.div>
              ))}
            </Stack>
          </Box>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Box
              sx={{
                width: { xs: 220, sm: 280, md: 355 },
                height: { xs: 240, sm: 300, md: 385 },
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: "white",
                position: "relative",
                borderRadius: "50px",
                overflow: "hidden",
                mt: { xs: "50px", md: 0 },
              }}
            >
              <motion.img
                src="./portfolio_pics.png"
                alt="Profile Picture"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  width: "99%",
                  height: "99%",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "linear-gradient(90deg, #E2F87B, #ff4b2b)",
                  borderRadius: "50px",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </Box>
          </motion.div>
        </Box>

        {/* Scroll Down Button */}
        <Box
          sx={{
            position: "absolute",
            bottom: 80,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <IconButton color="inherit" 
              onClick={() => scrollToSection("about")}                            >
              <ArrowDownwardIcon fontSize="large" />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
