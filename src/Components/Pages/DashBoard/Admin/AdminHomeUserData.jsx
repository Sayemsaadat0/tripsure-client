import React from 'react';

const AdminHomeUserData = () => {
    return (
       
            <div className="mx-auto ">

                <div className="text-center w-[50rem] grid grid-cols-4 place-items-start">
                    {/* 1 */}
                    <div className="border-2 hover:bg-[#454545] duration-500 hover:text-white shadow-lg flex flex-col justify-center items-center  border-gray-200  w-44 h-32  rounded-3xl">
                     
                        <h2 className="title-font font-medium text-3xl ">27</h2>
                        <p className="leading-relaxed">Total Users</p>
                    </div>
                    {/* 1 */}
                    <div className="border-2 hover:bg-[#454545] hover:text-white  duration-500 shadow-lg flex flex-col justify-center border-gray-200  w-44 h-32  rounded-3xl">
                        <h2 className="title-font font-medium text-3xl ">12</h2>
                        <p className="leading-relaxed">new Users</p>
                    </div>
                    {/* 1 */}
                    <div className="border-2 hover:bg-[#454545] duration-500 hover:text-white  shadow-lg flex flex-col justify-center border-gray-200  w-44 h-32  rounded-3xl">
                        <h2 className="title-font font-medium text-3xl ">0</h2>
                        <p className="leading-relaxed">New booking</p>
                    </div>
                    
                    {/* 1 */}
                    <div className="border-2 hover:bg-[#454545] hover:text-white  duration-500 shadow-lg flex flex-col justify-center border-gray-200  w-44 h-32  rounded-3xl">
                        <h2 className="title-font font-medium text-3xl ">27K</h2>
                        <p className="leading-relaxed">Total Transition</p>
                    </div>
                    
                </div>



            </div>
   
    );
};

export default AdminHomeUserData;