"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Material UI", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind", level: 75 },
  { name: "Git", level: 80 },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 1 }}>
      <Container maxWidth="lg">
        <motion.div variants={fadeUpVariant}
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}>
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
            My Skills
          </Typography>
        </motion.div>

        <motion.div variants={fadeUpVariant}
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            sx={{ mb: 6 }}
          >
            Technologies I work with
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={staggerContainer}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* Technical Skills */}
            <Paper
              elevation={3}
              sx={{
                flex: 1,
                p: 4,

              }}
            >
              <motion.div variants={fadeUpVariant}
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    textAlign:{ lg:"start", xs:"center"},
                    marginBottom:'20px',
                    fontSize: { xs: "1.5rem", sm: "1.25rem" }, 
                  }}
                >
                  Technical Skills
                </Typography>
              </motion.div>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "center", 
                  width: "100%",
                }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
                    variants={fadeUpVariant}
                    style={{width:'48%'}}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }} 
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }} 
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          bgcolor: "rgba(0,0,0,0.1)",
                          "& .MuiLinearProgress-bar": { borderRadius: 5 },
                        }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Paper>

            {/* Professional Skills */}
            <Paper elevation={3} sx={{ flex: 1, p: 4 }}>
              <motion.div variants={fadeUpVariant}
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}>
                <Typography variant="h6" gutterBottom>
                  Professional Skills
                </Typography>
              </motion.div>

              <motion.div variants={fadeUpVariant}
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body1" paragraph>
                    Beyond technical abilities, I bring a range of professional
                    skills to my work:
                  </Typography>
                  <Typography component="ul" sx={{ pl: 2 }}>
                    <li>Problem Solving & Critical Thinking</li>
                    <li>Project Management & Organization</li>
                    <li>Communication & Collaboration</li>
                    <li>Adaptability & Quick Learning</li>
                    <li>Attention to Detail</li>
                    <li>User Experience Design</li>
                  </Typography>
                </Box>
              </motion.div>

              <motion.div variants={fadeUpVariant}
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}>
                <Typography variant="body1" paragraph sx={{ mt: 3 }}>
                  I am committed to continuous learning and staying updated with
                  the latest web development trends and best practices.
                </Typography>
              </motion.div>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
