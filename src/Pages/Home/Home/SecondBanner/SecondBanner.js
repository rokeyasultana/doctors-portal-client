import React from 'react';
import PrimaryButton from '../../../Shared/PrimaryButton';
import treatment from '../../../../assets/images/treatment.png';

const SecondBanner = () => {
    return (
        <div>
             <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img className='rounded' style={{width:"458px"}} src={treatment} />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi magni necessitatibus nisi explicabo nam eos earum dicta? Illo aliquam adipisci soluta enim quibusdam beatae laudantium atque ipsum nemo ad?</p>
     <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default SecondBanner;