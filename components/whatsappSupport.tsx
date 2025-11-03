"use client";

import { useState } from "react";
import { Box, Typography, Button, IconButton, Badge, Alert } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppSupport() {
  const [open, setOpen] = useState(false);
  const [showUpdate, setShowUpdate] = useState(true); 

  const phoneNumber = "2348168314822"; 
  const message = "Hello, you want to hire me?"; 
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1300,
      }}
    >
      {/* Floating WhatsApp Button */}
      <Box sx={{ position: "relative", display: "inline-flex" }}>
       
        {!open && (
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-20deg)", 
              pointerEvents: "none",
            }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 70,70 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
              />
            </defs>
            <text fill="black" fontSize="18" fontWeight="bold">
              <textPath
                xlinkHref="#circlePath"
                startOffset="0%"
                textAnchor="start"
              >
                Chat with me 👋
              </textPath>
            </text>
          </svg>
        )}

       
        <Badge
          badgeContent={1}
          color="error"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "0.7rem",
              height: 18,
              minWidth: 18,
              top: 8,
              right: 8,
            },
          }}
        >
          <IconButton
            onClick={() => setOpen(true)} 
            sx={{
              backgroundColor: "#25D366",
              color: "white",
              width: 60,
              height: 60,
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              "&:hover": {
                backgroundColor: "#20b857",
              },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Badge>
      </Box>

      {/* Popup Chatbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 80,
                right: 0,
                width: 280,
                bgcolor: "white",
                borderRadius: 2,
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  bgcolor: "#25D366",
                  color: "white",
                  px: 2,
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Chat with me
                </Typography>
                <IconButton
                  onClick={() => setOpen(false)}
                  sx={{ color: "white" }}
                  size="small"
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Body with Update Message */}
              <Box sx={{ p: 2 }}>
                {showUpdate && (
                  <Box sx={{ mb: 2 }}>
                    <Alert
                      severity="info"
                      action={
                        <IconButton
                          size="small"
                          onClick={() => setShowUpdate(false)}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      }
                    >
                      I’ve updated my portfolio! Enjoy faster responses.
                    </Alert>
                  </Box>
                )}
                {!showUpdate && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Hi 👋, need me? Click below to chat with me on WhatsApp.
                  </Typography>
                )}

                <Button
                  component="a"
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    bgcolor: "#25D366",
                    color: "white",
                    "&:hover": { bgcolor: "#20b857" },
                    fontWeight: "bold",
                  }}
                  onClick={() => setOpen(false)}
                >
                  Start Chat
                </Button>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}