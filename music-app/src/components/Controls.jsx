import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Button, ButtonGroup, Stack, Card } from '@chakra-ui/react'

import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
} from 'react-icons/io5'

export default function Controls({audioReference}) {
    //by default, the play button will be on pause.
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(()=> {
        if (isPlaying){
            audioReference.current.play();
        }else {
            audioReference.current.pause();
        }
    }, [isPlaying, audioReference])


    //function to toggle between play and pause buttons
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    }
    
    return (
       <Stack>
        <Stack spacing={4} direction='row' p={4} alignContent='center'>
            <Button colorScheme='blue' variant='outline'>
                <IoPlaySkipBackSharp/>
            </Button>

            <Button colorScheme='blue' variant='outline'>
                <IoPlayBackSharp/>
            </Button>

            <Button onClick={togglePlayPause} colorScheme='blue' variant='outline'>
                {isPlaying ? <IoPauseSharp/> : <IoPlaySharp/>}
            </Button>

            <Button colorScheme='blue' variant='outline'>
                <IoPlayForwardSharp/>
            </Button>

            <Button colorScheme='blue' variant='outline'>
                <IoPlaySkipForwardSharp/>
            </Button>

        </Stack>
       </Stack>

    );
}