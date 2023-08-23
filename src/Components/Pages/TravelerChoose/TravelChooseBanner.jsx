import React from 'react';

const TravelChooseBanner = ({image,title, subText }) => {
    return (
        <div>
            <div className="relative">
                <div className="bg-black ">
                    <img
                        className="w-full h-[30rem] opacity-50 object-cover"
                        src={image}
                        alt=""
                    />
                    <div className="lg:flex text-center lg:text-left items-center gap-10 absolute bottom-16 lg:left-10 ">
                        <div className="w-24 hidden lg:flex">
                            <img
                                className="w-full"
                                src="https://i.ibb.co/HnjvjtP/icon.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-white text-2xl">{subText}</h2>
                            <h1 className="text-white text-5xl mt-3 font-bold">
                                {title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelChooseBanner;