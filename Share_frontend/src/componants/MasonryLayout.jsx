
import React from 'react';
import Masonry from 'react-masonry-css';
import SinglePin from './SinglePin';

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ pins }) => (
  <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
    {pins?.map((pin) => <SinglePin key={pin._id} pin={pin} className="w-max" />)}
  </Masonry>
);

export default MasonryLayout;