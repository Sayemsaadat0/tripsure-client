import React from 'react';

const MyTrips = () => {
    console.log(new Date().getFullYear())
    const myTrips = [
        {
            name: 'Al-Habib',
            place: 'Madhutila Eco-Park',
            cost: 300,
            date: new Date()
        },
        {
            name: 'Al-Habib',
            place: 'Madhutila Eco-Park',
            cost: 300,
            date: new Date()
        },
        {
            name: 'Al-Habib',
            place: 'Madhutila Eco-Park',
            cost: 300,
            date: new Date()
        }
    ]

    function formatDateToDayMonYear(date) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }


    return (
        <div className='max-w-2xl pb-10 '>
            <h2 className='text-2xl font-bold py-10 whitespace-nowrap'>My Trips</h2>

            <div className="overflow-x-auto bg-white">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#e6a17e]'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Place Name</th>
                            <th>Totall Cost</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myTrips.map((trip, index) => <tr className={index % 2 === 0 ? 'hover' : ''} key={index}>
                                <th>{index + 1}</th>
                                <td>{trip.name}</td>
                                <td>{trip.place}</td>
                                <td>{trip.cost}</td>
                                <td>{formatDateToDayMonYear(trip.date)}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTrips;