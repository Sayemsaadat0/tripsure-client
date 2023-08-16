import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const AddTour = () => {
   
    const [inputFields, setInputFields] = useState([]);

    const addInputField = () => {
        setInputFields([...inputFields, '']);
      };

      const handleInputChange = (index, value) => {
        const newInputFields = [...inputFields];
        newInputFields[index] = value;
        setInputFields(newInputFields);
      };



      /*   loading  */
    const [loading,setLoading] = useState(false)
    const handleSubmit = () =>{
        console.log('hello')
    }

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      })
    
      const handleDates = ranges => {
        setDates(ranges.selection)
      }

      const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
      const handleImageChange = image => {
    console.log(image)
    setUploadButtonText(image.name)
  }


//   language
const languages = [
    {
      label: 'bangla',
    
    },
    {
      label: 'english',
     
    },
    {
      label: 'Hindi',
      
    },
    {
      label: 'pakistani',
      
    },
  ]

    return (
        <div>
           <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='categoryName' className='block text-gray-600'>
                Category Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='categoryName'
                id='categoryName'
                type='text'
                placeholder='categoryName'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='country' className='block text-gray-600'>
                Country
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='country'
                id='country'
                type='text'
                placeholder='country'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='placetitle' className='block text-gray-600'>
              placetitle
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='placetitle'
                id='placetitle'
                type='text'
                placeholder='placetitle'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='postedby' className='block text-gray-600'>
                Agent Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='postedby'
                id='postedby'
                type='text'
                placeholder=' agent Name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='included' className='block text-gray-600'>
                included
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='included'
                id='included'
                type='text'
                placeholder=' included'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='additonalinfo' className='block text-gray-600'>
                additonal Info
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='additonalinfo'
                id='additonalinfo'
                type='text'
                placeholder='additonalinfo'
                required
              />
            </div>

            
    <div className='space-y-1 text-sm'>
    <label htmlFor='itinerary' className='block text-gray-600'>
                itinerary
    </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='itinerary'
                id='itinerary'
                type='text'
                placeholder=' itinerary'
                required
         />

      {inputFields.map((inputValue, index) => (
        <div key={index} className="mt-4">
          <input
            type="text"
            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
            value={inputValue}
            name='itinerary'
            id='itinerary'
            placeholder='itiniery'
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}

    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addInputField}
      >
        Add More
      </button>
    </div>




            <div className='space-y-1'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              <DateRange
                onChange={handleDates}
                ranges={[dates]}
                rangeColors={['#F43F5E']}
              />
            </div>
           

            

            
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='cardtitle' className='block text-gray-600'>
                Card  Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='cardtitle'
                id='cardtitle'
                type='text'
                placeholder='Title'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='language' className='block text-gray-600'>
                language
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
                {languages.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='ratings' className='block text-gray-600'>
                ratings
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='ratings'
                id='ratings'
                type='text'
                placeholder='ratings'
                required
              />
            </div>

           <div className='flex justify-center gap-3'>
           <div className='space-y-1 text-sm'>
              <label htmlFor='costperperson' className='block text-gray-600'>
                Cost per person
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='costperperson'
                id='costperperson'
                type='text'
                placeholder='costperperson'
                required
              />
            </div>
           <div className='space-y-1 text-sm'>
              <label htmlFor='age' className='block text-gray-600'>
                Age
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='age'
                id='age'
                type='text'
                placeholder='age'
                required
              />
            </div>
           </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      onChange={event => {
                        handleImageChange(event.target.files[0])
                      }}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            

           

            <div className='space-y-1 text-sm'>
              <label htmlFor=' placedetails' className='block text-gray-600'>
                place details
              </label>

              <textarea
                id='placedetails'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='placedetails'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddTour;