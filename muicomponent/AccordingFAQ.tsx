"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import RightArrowCircleIcon from "../data/icon/RightArrowCircleIcon";
import { transform } from "next/dist/build/swc";

const AccordingFAQ = ({
  title,
  typography,
  icon,
}: {
  title: string;
  typography?: string;
  icon?: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState(true);
  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="mb-7">
      <Accordion
        onChange={handleChange}
        sx={{
          padding: {
            xs: "0px",
            sm: "25px",
          },
          boxShadow:
            "-1px -1px 4px 0px rgba(0, 0, 0, 0.25), 1px 1px 4px 0px rgba(0, 0, 0, 0.25); ",
          color: "black",
        }}
      >
        <AccordionSummary
          expandIcon={
            <RightArrowCircleIcon
              style={{
                transform: expanded ? "rotate(0deg)" : "rotate(-90deg)",
                transition: ".2s",
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              borderTop: "1px solid rgba(0, 0, 0, 0.25)",
              padding: "20px 0",
            }}
          >
            {typography}
          </Typography>
          <Typography
            sx={{
              borderTop: "1px solid rgba(0, 0, 0, 0.25)",
              padding: "20px 0",
            }}
          >
            {typography}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordingFAQ;
