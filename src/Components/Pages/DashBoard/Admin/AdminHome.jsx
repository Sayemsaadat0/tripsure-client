import React from 'react';

const AdminHome = () => {
  return (
    <div className=' pt-4 px-4'>

      {/* input */}
      <section className='flex  items-center justify-between'>
      <div className="form-control ">
      
      <div className="input-group">
        <input type="text" placeholder="Search User" className="input input-bordered" />
        <button className="btn">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
    <div className='bg-white p-3 rounded-lg shadow-md'>
      <p >7.47 pm 27 Aug 2023</p>
    </div>
      </section>



      <section className='grid grid-cols-1 md:grid-cols-3 mt-10'>
        <div className='border flex flex-col items-center justify-center card bg-white shadow-md w-40 h-40'>
          <h3 className='text-3xl font-semibold '>545555</h3>
          <p>Satisfied Customer</p>
        </div>
        <div className='border flex flex-col items-center justify-center card bg-white shadow-md w-40 h-40'>
          <h3 className='text-3xl font-semibold '>545555</h3>
          <p>Satisfied Customer</p>
        </div>
        <div className='border flex flex-col items-center justify-center card bg-white shadow-md w-40 h-40'>
          <h3 className='text-3xl font-semibold '>545555</h3>
          <p>Satisfied Customer</p>
        </div>
      </section>

    </div>
  );
};

export default AdminHome;





