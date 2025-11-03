"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: " Supporter Club Website",
    description:
      "A dynamic online platform dedicated to uniting Nigerian football supporters worldwide. Featuring club news, media, memberships, donation options, and a fully integrated e-commerce store.",
    image: "/sport.png",
    technologies: ["Next.js", "WordPress", "Material UI", "Firebase", "WooCommerce"],
    github: "https://github.com/Famswit/anfassc-official",
    demo: "https://anfassc-official.vercel.app/",
  },
  {
    id: 2,
    title: "Dashboard Website",
    description:
      "A React.js project featuring a modern Dashboard system which contains different Data Tables with API integration and a Two-Factor Authentication (2FA) system using Mui and React Query for data fetching..",
    image: "/dashboard.png",
    technologies: ["React", "Material UI", "ReactQuery", "Formik"],
    github: "https://github.com/Famswit/tap_mobile",
    demo: "https://tap-mobile.vercel.app/login",
  },
  
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "A featured online store with cake listings, cart functionality, and filtering.",
    image: "/dakes.png",
    technologies: ["Javascript", "Bootstrap", "JQuery"],
    github: "https://github.com/Famswit/Dakes-Bakery",
    demo: "https://dakes-bakery.vercel.app/",
  },
  {
    id: 4,
    title: "Radio Podcast App",
    description: "A Next.js application for radio podcast.",
    image: "/ABR.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind css",
      "ReactQuery",
    ],
    github: "https://github.com/Famswit/abr_website",
    demo: "https://abr-website.vercel.app/",
  },
  {
    id: 5,
    title: "Job Listing App",
    description:
      "A Next.js application for posting jobs, job form filling, and job searching.",
    image: "/job_listing.png",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Famswit/jobs-posting",
    demo: "https://job-posting-project-six.vercel.app/",
  },
  {
    id: 6,
    title: "Customer Pinning Location System",
    description:
      "A user tracking form built with React, Formik, Firebase, and Google Maps Integration, allowing users track, pin an address, and store geolocation data in Firestore with real-time map interactions.",
    image: "/pinning_location.png",
    technologies: ["React", "Firebase", "Mui", "Google API"],
    github: "https://github.com/Famswit/pinning-customer-location",
    demo: "https://customer-pinning-system.vercel.app/",
  },
  {
    id: 7,
    title: "E-Commerce Website",
    description:
      "A responsive cloth vendor website showcasing clothes and cart functionality.",
    image: "/clothVendor.png",
    technologies: ["Next.js", "Material UI", "Framer Motion"],
    github: "https://github.com/Famswit/clothes-shopping",
    demo: "https://clothes-shopping-alpha.vercel.app/",
  },
  {
    id: 8,
    title: "E-Commerce Website",
    description:
      "A responsive estate management web page design showcasing different home properties, pricing and location.",
    image: "/HomeLand.png",
    technologies: ["React", "Firebase", "TailwindCSS"],
    github: "https://github.com/Famswit/Home-Land",
    demo: "https://home-land-omega.vercel.app/",
  },
  {
    id: 9,
    title: "Chatting Website",
    description:
      "A facebook prototype webpage featuring posting, likes, friends online and more",
    image: "/chatBox.png",
    technologies: ["React", "Mui", "Styled Component"],
    github: "https://github.com/Famswit/Facebook-proto",
    demo: "https://proto-chat-psi.vercel.app/",
  },
  {
    id: 10,
    title: "E-Commerce Website",
    description:
      "An e-commerce webpage design showcasing different pasteries, filtering functions and cart.",
    image: "/BestEat.png",
    technologies: ["React", "TailwindCSS"],
    github: "https://github.com/Famswit/Best-Eat",
    demo: "https://best-eat-vendor.vercel.app/",
  },
  {
    id: 11,
    title: "E-Commerce Website",
    description:
      "A responsive blog post web page design showcasing different blog articles.",
    image: "/BlogPost.png",
    technologies: ["React", "Next.js", "Mui"],
    github: "https://github.com/Famswit/blog-post",
    demo: "https://blog-post-tan-six.vercel.app/",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <Box id="projects" sx={{ py: 10 }}>
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
            My Projects
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
            sx={{ mb: 6 }}
          >
            Check out some of my recent work
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {projects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              style={{ width: "30%", minWidth: "280px", perspective: "1000px" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "450px",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  "&:hover": { transform: "rotateY(180deg)" },
                }}
              >
                {/* Front Side (Image + Info) */}
                <Card
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="500"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}
                    >
                      {project.technologies.map((tech) => (
                        <Chip
                          variant="outlined"
                          key={tech}
                          label={tech}
                          sx={{
                            color: "inherit",
                            fontWeight: "bold",
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>

                {/* Back Side (Links) */}
                <Card
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    background: "linear-gradient(180deg, #E2F87B, #ff4b2b)",
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    sx={{ mb: 2, width: "80%", background: "#fff" }}
                  >
                    View Code
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    sx={{ width: "80%" }}
                  >
                    Live Demo
                  </Button>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Box>

        {visibleProjects < projects.length && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="contained"
                onClick={showMoreProjects}
                sx={{
                  background: "linear-gradient(180deg, #E2F87B, #ff4b2b)",
                  fontSize: "1rem",
                }}
              >
                See More
              </Button>
            </motion.div>
          </Box>
        )}
      </Container>
    </Box>
  );
}
