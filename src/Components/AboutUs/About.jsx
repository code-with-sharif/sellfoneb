import React from 'react';
import AboutHerosection from './AboutHerosection';
import Ourvision from './Ourvision';
import ChooseUs from '../Home/ChooseUs';
import SellmobilePhone from '../Home/SellmobilePhone';
import Sellphonesafly from '../Home/Sellphonesafly';
import Needquestion from '../Home/Needquestion';
import aboutheroimg1 from '../../Images/About/AboutHerosection/aboutheroimg1.png';

const About = () => {
  const aboutHerodata = [
    {
      heading: 'About Sellfone.pk',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: aboutheroimg1,
    },
  ];

  return (
    <>
      {aboutHerodata.map((data, index) => (
        <AboutHerosection
          key={index}
          heading={data.heading}
          paragraph={data.paragraph}
          image={data.image}
        />
      ))}
      <sellerproductherosection />
      <Ourvision />
      <ChooseUs />
      <SellmobilePhone />
      <Sellphonesafly />
      <Needquestion />
    </>
  );
};

export default About;
