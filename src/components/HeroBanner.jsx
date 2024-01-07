import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import Herobanner from '../assets/assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}>
      <Typography color="#6B7280" fontWeight="600" fontSize="24px" mb={2}>
        Best Exercises
        <br/>for
        <br/>Muscle Growth
      </Typography>
      <Typography fontWeight="700" sx={{fontSize: {lg: '44px', xs: '40px'}}} mb={3}>
        Don't be afraid to
        <br/>Bleed
        <br/>And Sweat
      </Typography>

      <Button variant="contained" color="info" href="#exercises">Explore Exercises</Button>
      <img src={Herobanner} alt="banner" className="hero-banner-img" style={{ marginTop: '50px' }}/>
    </Box>
  );
};

export default HeroBanner;
