import { Img, Stack, Text, Box } from "@chakra-ui/react";
import React from "react";
import { BsMusicNoteBeamed } from 'react-icons/bs';

export default function DisplayTrack({ currentTrack, audioReference }) {
    return (
        <Box alignContent='center'>
            <audio src={currentTrack.src} ref={audioReference} />
            <Stack alignContent='center'>
                {currentTrack.thumbnail ? (
                    <Img src={currentTrack.thumbnail} borderRadius='30px' />
                ) : (
                    <div className="icon-wrapper">
                        <span className="audio-icon">
                            <BsMusicNoteBeamed />
                        </span>
                    </div>
                )}
            </Stack>

            <Stack alignContent='center' p={1}>
                <Text align='center' fontSize='2xl' noOfLines={1} as='b'>{currentTrack.title}</Text>
            </Stack>

            <Stack alignContent='center' p={1}>
                <Text align='center' fontSize='1xl' noOfLines={1} >{currentTrack.author}</Text>
            </Stack>
        </Box>


    );
}