"use client"
import { Box, Container, Typography, Divider, Link, IconButton, Stack } from "@mui/material"
import { motion } from "framer-motion"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import { useTheme } from "@/contexts/theme-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { mode } = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: mode === "light" ? "#151C39" : "#0A0A0A",
        color: "white",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.1 }}>
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(143, 136, 255, 0.5) 0%, rgba(143, 136, 255, 0) 70%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 122, 151, 0.5) 0%, rgba(255, 122, 151, 0) 70%)",
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" component="div" sx={{ mb: { xs: 3, md: 0 }, fontWeight: "bold" }}>
              Famswit
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Stack direction="row" spacing={2}>
              {[
                { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/Famswit" },
                {
                  icon: <LinkedInIcon />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/oluwafemi-eben-04662313b",
                },
                { icon: <TwitterIcon />, label: "Twitter", href: "#" },
                { icon: <InstagramIcon />, label: "Instagram", href: "#" },
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    color="inherit"
                    aria-label={item.label}
                    component="a"
                    href={item.href}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      ":hover": {
                        background:
                          "linear-gradient(120deg, #E2F87B, #ff4b2b)",
                        color: "black",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </Box>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="body2" sx={{ mb: { xs: 3, md: 0 }, opacity: 0.7 }}>
              © {currentYear} famswit. All rights reserved.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
              {["Home", "About", "Projects", "Contact", "Privacy Policy"].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  color="inherit"
                  sx={{
                    mx: { xs: 0, sm: 1 },
                    opacity: 0.7,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                      color: "primary.main",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}

