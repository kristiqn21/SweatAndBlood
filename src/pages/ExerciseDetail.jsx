import React, { useEffect, useState } from "react";
import { exercisesOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import { Box } from "@mui/material";

import { useParams } from "react-router-dom";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Detail from "../components/Detail";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    const fetchExerciseData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);
        setExerciseDetail(exerciseDetailData);

        const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
        setExerciseVideos(exerciseVideoData.contents)

        const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)
        setTargetMuscleExercises(targetMuscleExerciseData)

        const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)
        setEquipmentMuscleExercises(equipmentExerciseData)
        
    }
    fetchExerciseData();
  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentMuscleExercises={equipmentMuscleExercises}/>
    </Box>
  );
};

export default ExerciseDetails;
