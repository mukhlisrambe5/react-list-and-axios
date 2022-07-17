import React, {useEffect, useState} from 'react';
import { Box, Typography } from '@mui/material';  
import axios from 'axios';

import "./ListMovies.css";
import jsonMovies from "../data/movies.json";
import CardMovie from './CardMovie';



const ListMovies = ()=>{
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchDataMovies= async()=>{
            try{
            // const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c0d4330747b4572aa670778c3c816b00");
            const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=process.env.REACT_APP_TMDB_KEY");
            setMovies(response.data.results);
            }catch(err){
                console.log("Error", err)
            }
        }; 
        fetchDataMovies();
    });
    return (
        <>
        <Box className='boxy'>
            <Typography variant='h5'>
                Container ListMovies
            </Typography>
            {/* {jsonMovies.results.slice(-3). map((movie)=>{
                return <CardMovie key={movie.id} propsMovie={movie}/>;
             })} */}
             {movies.map((movie)=>{
                return <CardMovie key={movie.id} propsMovie={movie}/>;
             })}
        </Box>
       
        </>
    )
}

export default ListMovies;