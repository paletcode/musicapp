import React, { useRef, useState } from "react";
import { tracks } from "../data/tracks";
import { Button, ButtonGroup, Stack, Card, Box, AbsoluteCenter, Center, Container } from '@chakra-ui/react'
//import components list
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBarTrack from "./ProgressBarTrack";

export default function Player() {

    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    //reference for methods
    const audioReference = useRef();
    console.log('state of the audioref' + audioReference);
    return (
        <Container centerContent >
            <Box position='relative' h='100vh' w='100%' alignContent='center'>
                <AbsoluteCenter axis="both" borderWidth='1px' borderRadius='lg' p={4} alignContent='center'>
                    <DisplayTrack currentTrack={currentTrack} audioReference={audioReference} />
                    <ProgressBarTrack />
                    <Controls audioReference={audioReference} />
                </AbsoluteCenter>

            </Box>
        </Container>

    );
}