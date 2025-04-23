"use client";
import { useState } from "react";
import type React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpen(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const socialBoxStyle = {
    display: "flex",
    alignItems: "center",
    p: 2,
    borderRadius: 2,
    cursor: "pointer",
    mb: "20px",
    backgroundColor: isDark ? "#191919" : "#f4f4f4",
    color: isDark ? "#fff" : "#000",
  };

  return (
    <Box id="contact" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              background: "linear-gradient(270deg, #E2F87B, #ff4b2b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            sx={{ mb: 6 }}
          >
            Get in touch for collaborations or inquiries
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {/* Left: Let’s Connect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 2,
                color: isDark ? "#fff" : "#000",
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Let’s Connect
              </Typography>

              <Box sx={{ mt: 4 }}>
                {[
                  {
                    icon: <LinkedInIcon sx={{ mr: 2 }} />,
                    text: "linkedin.com/in/oluwafemi-eben-adewole",
                    href: "https://www.linkedin.com/in/oluwafemi-eben-adewole",
                  },
                  {
                    icon: <EmailIcon sx={{ mr: 2 }} />,
                    text: "ebenezeradewole8@gmail.com",
                    href: "mailto:ebenezeradewole8@gmail.com",
                  },
                  {
                    icon: <GitHubIcon sx={{ mr: 2 }} />,
                    text: "github.com/Famswit",
                    href: "https://github.com/Famswit",
                  },
                  {
                    icon: <PhoneIcon sx={{ mr: 2 }} />,
                    text: "+234-816-831-4822",
                    href: "tel:+2348168314822",
                  },
                ].map(({ icon, text, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <MotionBox
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      sx={socialBoxStyle}
                    >
                      {icon}
                      <Typography>{text}</Typography>
                    </MotionBox>
                  </a>
                ))}
              </Box>
            </Paper>
          </motion.div>

          {/* Right: Send a Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Send Me a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                  required
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(180deg, #E2F87B, #ff4b2b)",
                    color: "#000",
                    fontWeight: 600,
                    ":hover": {
                      opacity: 0.9,
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>

      {/* Notification Snackbar */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
