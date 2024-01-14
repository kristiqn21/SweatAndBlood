import React from 'react'
import Logo from '../assets/assets/images/sweatandblood-high-resolution-logo-black-transparent.png'
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt='80px'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='300px' />
        <Typography variant='h4' pb='40px' mt='10px'>
            <a href='https://www.instagram.com/k_cankov21/' target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href='https://github.com/kristiqn21' target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
