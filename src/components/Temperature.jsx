import React from 'react';
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";

const Temperature = ({ setUnits, weather: {details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like}}) => {
    const verticalDetails = [
        {
            id:1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${feels_like.toFixed()}°`,
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },
        {
            id:3,
            Icon: FiWind,
            title: "Wind Speed",
            value: `${speed.toFixed()} km/h`,
        },

    ];

    const horizontalDetails = [
        {
            id:1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise,
        },
        {
            id:2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset,
        },

    ];
    const highlowDetails = [
        {
            id:1,
            title: "High",
            value: `${temp_max.toFixed()}°`,
        },
        {
            id:2,
            title: "Low",
            value: `${temp_min.toFixed()}°`,
        },
    ]
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl">
            <p>{details}</p>
        </div>
        <div className="flex flex-row justify-center items-center">
            <button className="text-2xl font-medium tranition ease-out hover:scale-125" onClick={() => setUnits("metric")}>°C</button>
            <p className="text-2xl font-medium mx-1">|</p>
            <button className="text-2xl font-medium tranition ease-out hover:scale-125" onClick={() => setUnits("imperial")}>°F</button>
        </div>
        <div className="flex flex-row items-center justify-between py-3">
        <div className="flex flex-col items-start justify-center space-x-0 text-sm py-3 ">
            {
                horizontalDetails.map(({id, Icon, title, value}) => (
                    <div key={id} className="flex flex-row items-center">
                        <Icon size={30}/>
                            <p className="font-light ml-1">
                                {`${title}:`} 
                                <span className="font-medium ml-1">{value}</span>
                            </p>
                        
                    </div>
                ))
            }
            {
                highlowDetails.map(({id, title, value}) => (
                    <div key={id} className="flex flex-row items-center">
                            <p className="font-light ml-1">
                                {`${title}:`}
                                <span className="font-medium ml-1">{value}</span>
                            </p>
                        
                    </div>
                ))
            }
                
        </div>
        <div>
            <p className="text-5xl">{`${temp.toFixed()}°`}</p>
            <img src={icon} alt="weather icon" className="flex flex-col items-center justify-center"/>
        </div>
            <div className="flex flex-col space-y-3 items-start">

                {
                    verticalDetails.map(({id, Icon, title, value}) => (
                    <div key={id} className="flex font-light text-sm items-center justify-center">
                    <Icon size={18} className="mr-1"/>
                    {`${title}:`} <span className="font-medium ml-1">{value}</span>
                </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
};
//text-cyan-300 in line 58
export default Temperature;