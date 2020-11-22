import React from 'react';
import MCard from './MCardTemplate';

import android from '../../../resources/Blender/Android Dummy.png';
import bowling1 from '../../../resources/Blender/Bowling blue and orange.png';
import bowling2 from '../../../resources/Blender/Bowling Collision.png';
import donut from '../../../resources/Blender/Donut Final.png';
import headphones from '../../../resources/Blender/Headphones.png';
import farm from '../../../resources/Blender/Low Poly Farm.png';
import pyramid from '../../../resources/Blender/Mayan Pyramid.png';
import rocket from '../../../resources/Blender/Rocket.png';
import rubiks from '../../../resources/Blender/Rubiks Cube.png';
import sword from '../../../resources/Blender/Sword.png';
import well from '../../../resources/Blender/Well Lit.png';

const ModellingCards = () => {
    return(<div>
<article className="flex flex-wrap justify-center">
  <MCard 
  source={bowling1}
  name="Bowling"
  />
  <MCard 
  source={bowling2}
  name="Bowling Crashing"
  />
  <MCard 
  source={pyramid}
  name="Mayan Pyramid"
  />
  <MCard 
  source={android}
  name="Android"
  />
  <MCard 
  source={sword}
  name="Sword"
  />
  <MCard 
  source={farm}
  name="Village"
  />
  <MCard 
  source={rubiks}
  name="Rubiks Cubes"
  />
  <MCard 
  source={rocket}
  name="Rocket"
  />
  <MCard 
  source={headphones}
  name="Headphones"
  />
  <MCard 
  source={well}
  name="Well"
  />
  <MCard 
  source={donut}
  name="Donut"
  />
</article>
    </div>)
}

export default ModellingCards;