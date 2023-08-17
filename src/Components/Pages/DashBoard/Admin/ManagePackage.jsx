import React, { useState } from "react";
import Modal from "react-modal";
const ManagePackage = () => {
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
    <div className="w-full ">
      <div className="">
        <h2 className="text-center mb-10"> Manage Bookings </h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-lg text-black font-bold">
                <th>#</th>
                <th>Image</th>
                <th>BooksName</th>
                <th>AGency</th>
                <th>Calender</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://i.ibb.co/Hr6khp9/author3.jpg"
                          alt="tour image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Maldives</td>
                <td>
                  new agenncy <br /> email.com
                </td>
                <td> details</td>
                <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://i.ibb.co/Hr6khp9/author3.jpg"
                          alt="tour image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Maldives</td>
                <td>
                  new agenncy <br /> email.com
                </td>
                <td> details</td>
                <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://i.ibb.co/Hr6khp9/author3.jpg"
                          alt="tour image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Maldives</td>
                <td>
                  new agenncy <br /> email.com
                </td>
                <td> details</td>
                <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://i.ibb.co/Hr6khp9/author3.jpg"
                          alt="tour image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Maldives</td>
                <td>
                  new agenncy <br /> email.com
                </td>
                <td> details</td>
                <td className="text-xl">
                  <button onClick={openModal}>Details</button>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://i.ibb.co/Hr6khp9/author3.jpg"
                          alt="tour image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Maldives</td>
                <td>
                  new agenncy <br /> email.com
                </td>
                <td> details</td>
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
        <div>I am a modal</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          pariatur minima id placeat recusandae quod porro labore maxime
          perferendis soluta?
        </p>
      </Modal>
    </div>
  );
};

export default ManagePackage;
