"use client"
import { Box, Container, Typography, Avatar } from "@mui/material"
import { motion } from "framer-motion"

export default function About() {
  
  return (
    <Box id="about" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h2" align="center" gutterBottom
          sx={{background: "linear-gradient(270deg, #E2F87B, #ff4b2b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          }}>
            About Me
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph sx={{ mb: 6, ml:5}}>
            Get to know me a little better
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
      <Box
        sx={{
          width: { xs: 300, sm: 350, md: 400 },
          height: { xs: 280, sm: 330, md: 400 },
          position: "relative",
          mx: "auto",
          my: 5,
          "&:hover .border-box": {
            top: 0,
            left: 0,
          },
        }}
      >
        <Box
          className="border-box"
          sx={{
            position: "absolute",
            top: "-1.5rem",
            left: "-1.7rem",
            width: "100%",
            height: "100%",
            outline: "8px solid #1e6233",
            transition: "all 1s ease-in-out",
            zIndex: 0,
          }}
        />

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          src="./fm2.jpg"
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "relative",
            zIndex: 10,
          }}
        />
      </Box>

         

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Box sx={{textAlign:'left' }}>
              <Typography variant="h5" gutterBottom>
                Who am I?
              </Typography>
              <Typography paragraph>
                I'm a passionate web developer with expertise in creating modern, responsive websites and applications.
                With a strong foundation in both front-end and Graphics Design, I bring ideas to life through
                clean, efficient code.
              </Typography>
              <Typography paragraph>
                My journey in web development began 5 years ago, and since then, I've worked on numerous projects
                ranging from small business websites to complex web applications. I'm constantly learning and adapting
                to new technologies to stay at the forefront of web development.
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                Education & Experience
              </Typography>
              <Typography paragraph>
                • BSc in Computer Science (Obafemi Awolowo University, Osun, Nigeria)
                <br />• 3+ years of professional experience
                <br />• Worked with clients across various industries
                <br />• Completed many successful projects
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
