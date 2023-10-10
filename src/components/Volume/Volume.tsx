import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { FiVolumeX } from 'react-icons/fi';
import { FiVolume2 } from 'react-icons/fi';

export const Volume = () => {
  const labelStyles = {
    mt: '2.5',
    ml: '-0.5',
    fontSize: 'sm'  ,
  };

  return (
    <Slider defaultValue={0} m={'0 0 15px 1px'}>
      <SliderMark value={0} {...labelStyles}>
        <FiVolumeX/>
      </SliderMark>
      <SliderMark value={100} {...labelStyles}>
        <FiVolume2/>
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack/>
      </SliderTrack>
      <SliderThumb boxSize={4}/>
    </Slider>
  );
};