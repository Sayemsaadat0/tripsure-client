import React from 'react';
import Modal from "react-modal";
const Inquiries = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "300px",
      },
    };



    return (
        <div  className="w-full">
          <div className="w-full">
      <h2 className="text-center mb-10"> Operator Inquireies</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className='text-black font-bold text-xl'>
              <th>#</th>
              <th>place image</th>
              <th>Name</th>
              <th>Booking date</th>
              <th>country</th>
              <th>total person</th>
              <th>status</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className='text-lg'>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-14">
                      <img
                        src="https://i.ibb.co/LYkQG80/Sreemongol.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>srimongol</td>
              <td> 16/08/24 8pm 
                <br />stay: 5 days</td>
              <td>Bangladesh</td>
              <td className="text-center">
                4 
              </td>
              <td className="text-center">
                Accepted
              </td>
              <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
            </tr>
            <tr className='text-lg'>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-14">
                      <img
                        src="https://i.ibb.co/LYkQG80/Sreemongol.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>srimongol</td>
              <td> 16/08/24 8pm 
                <br />stay: 5 days</td>
              <td>Bangladesh</td>
              <td className="text-center">
                4 
              </td>
              <td className="text-center">
                Accepted
              </td>
              <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
            </tr>
            <tr className='text-lg'>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-14">
                      <img
                        src="https://i.ibb.co/LYkQG80/Sreemongol.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>srimongol</td>
              <td> 16/08/24 8pm 
                <br />stay: 5 days</td>
              <td>Bangladesh</td>
              <td className="text-center">
                4 
              </td>
              <td className="text-center">
                Accepted
              </td>
              <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
            </tr>
            <tr className='text-lg'>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-14">
                      <img
                        src="https://i.ibb.co/LYkQG80/Sreemongol.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>srimongol</td>
              <td> 17/08/24 5 pm 
                <br />stay: 2 days</td>
              <td>Bangladesh</td>
              <td className="text-center">
                4 
              </td>
              <td className="text-center">
                Accepted
              </td>
              <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
            </tr>
            <tr className='text-lg'>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-14">
                      <img
                        src="https://i.ibb.co/LYkQG80/Sreemongol.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>srimongol</td>
              <td> 16/08/24 8pm 
                <br />stay: 5 days</td>
              <td>Bangladesh</td>
              <td className="text-center">
                4 
              </td>
              <td className="text-center">
                Accepted
              </td>
              <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>❌</button>
        <div>Tour details</div>
       <div>
        <p className='mt-4 mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eligendi.

        </p>
       <p>
         person: 4 
        </p>

       </div>
      </Modal>
        </div>
    );
};

export default Inquiries;