import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Box,
    Text,
    Flex,
    Spacer
} from '@chakra-ui/react'

export default function ProgressBarTrack() {
    return (
        <>
            <Flex>
                <Text as='b' className='trackTime' id='initTime'>00:00</Text>
                <Spacer />
                <Text as='b' className='trackTime' id='endTime'>00:00</Text>
            </Flex>


            <Slider aria-label='slider-ex-4' defaultValue={30}>
                <SliderTrack bg='blue.100'>
                    <SliderFilledTrack bg='teal' />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                </SliderThumb>
            </Slider>


        </>

    );
}