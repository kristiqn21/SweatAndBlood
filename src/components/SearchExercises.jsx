import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const handleSearch = async() => {
    if(search) {
      // const exerciseData = await fetchData();
    }
  }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        mt="300px"
        textAlign="center"
      >
        Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button  className="search-btn"
          sx={{
            bgcolor: '#4281f5',
            color: '#fff',
            textTransform: 'none',
            width: {lg: '175px', xs:'85px'},
            fontSize: {lg: '20px', xs:'14px'},
            height: '56px',
            position: 'absolute',
            right: '0',
            '&:hover': {
              bgcolor: '#4281f5',
              boxShadow: 'none',
              outlineColor: '#fff'
            },   
          }}
          onClick={handleSearch}
        >
            Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
