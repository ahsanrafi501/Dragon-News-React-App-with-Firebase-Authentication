import React from 'react';
import SweemImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playImg from "../../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold'>Qzone</h2>
            <div className="flex flex-col justify-center">
                <img src={SweemImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />

            </div>
        </div>
    );
};

export default Qzone;