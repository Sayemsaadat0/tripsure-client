import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AutoComplete, Card } from 'antd';

const HospitalWorldWide = () => {
    const [hospitals, setHospitals] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [filteredHospitals, setFilteredHospitals] = useState(null);

    useEffect(() => {
        fetch('/hospitals.json')
            .then((res) => res.json())
            .then((data) => {
                setHospitals(data);
                setFilteredHospitals(data);
            });
    }, []);

    const options = hospitals.map((hospital) => ({
        value: hospital.country,
        label: `${hospital.country}`,
    }));

    const handleSelectChange = (value) => {
        setSelectedValue(value);

        const filtered = hospitals.filter((hospital) =>
            hospital.country.toLowerCase().includes(value.toLowerCase()) ||
            hospital.hospital_name.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredHospitals(filtered);
    };

    return (
        <div>
            <div className='flex justify-end mt-10'>
                <AutoComplete
                    className=''
                    style={{ width: 250 }}
                    options={options}
                    placeholder='Search Hospital by country or name'
                    filterOption={(inputValue, option) =>
                        option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onChange={handleSelectChange}
                    value={selectedValue}
                />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center ">
                {filteredHospitals !== null ? (
                    filteredHospitals.map((hospital, index) => (
                        <Card 
                        className='relative'
                            key={index}
                            hoverable
                            style={{
                                width: 260,
                                padding: 0,
                                height : 400,
                            }}
                        >
                            <img
                                className='w-full object-cover p-0'
                                src={hospital?.pictures[0]} // Assuming the first picture is the main image
                                alt={hospital.hospital_name}
                                onClick={() => openHospitalDetails(hospital)} // Define this function
                                style={{ cursor: 'pointer' }}
                            />
                            <div className='p-4'>
                                <p className='font-semibold text-lg tracking-widest' onClick={() => openHospitalDetails(hospital)}>
                                    {hospital.hospital_name}
                                </p>
                                <p>Location: {hospital.location}</p>
                                <p>Rating: {hospital.ratings}</p>
                                <div className='pt-4  absolute bottom-3'>
                                    <Link to="/madicalDetails" className=''>
                                        <button className="btn-primary ">Learn More</button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default HospitalWorldWide;
