import React, { useState } from 'react';
import ShareModal from '../../../Modal/ShareModal';
import { GrFormClose } from 'react-icons/gr'
import { useForm } from "react-hook-form"

const AddHotelQ_Ans = ({ isOpen, setIsOpen, setQA, QA }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    
    const [qaPairs, setQAPairs] = useState([{ question: '', answer: '' }]);
    console.log(qaPairs)
    const onSubmit = (data) => {
        setQA(qaPairs)
        setIsOpen(false)
    }
    console.log(QA)
    const handleAddMoreQuestion = () => {
        setQAPairs(previous => [...previous, { question: '', answer: '' }]);
    }

    const handleRemoveQuestion = (index) => {
        const remainingPairs = qaPairs.filter((pair, pairIndex) => pairIndex !== index);
        setQAPairs(remainingPairs);
    }
    // explore korte hobe 
    const handleQuestionChange = (index, value) => {
        const updatedPairs = qaPairs.map((pair, pairIndex) => {
            if (pairIndex === index) {
                return { ...pair, question: value };
            }
            return pair;
        });
        setQAPairs(updatedPairs);
    }

    const handleAnswerChange = (index, value) => {
        const updatedPairs = qaPairs.map((pair, pairIndex) => {
            if (pairIndex === index) {
                return { ...pair, answer: value };
            }
            return pair;
        });
        setQAPairs(updatedPairs);
    }
    
    const submitQA = () => {
        setQA(qaPairs)
    }

    return (
        <div>
            <ShareModal isOpen={isOpen} setIsOpen={setIsOpen} title={'Write your questions and answer'}>
                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    {
                        qaPairs.map((pair, index) => (
                            <div className='relative' key={index}>
                                <div className="space-y-1 text-sm mb-4">
                                    <label htmlFor={`question-${index}`} className="block text-gray-600 mb-2">
                                        Question
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 text-gray-800 border border-cyan-300  focus:outline-cyan-500 rounded-md "
                                        // id={`question-${index}`}
                                        type="text"
                                        required
                                        placeholder="Question"
                                        value={pair.question}
                                        onChange={(e) => handleQuestionChange(index, e.target.value)}
                                    />
                                </div>
                                <div className="space-y-1 text-sm mb-4">
                                    <label htmlFor={`answer-${index}`} className="block text-gray-600 mb-2">
                                        Answer
                                    </label>
                                    <textarea
                                        required
                                        className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 "
                                        // id={`answer-${index}`}
                                        value={pair.answer}
                                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                                    ></textarea>
                                </div>
                                <GrFormClose onClick={() => handleRemoveQuestion(index)} size={30} className='absolute top-2 right-2 cursor-pointer'></GrFormClose>
                            </div>
                        ))
                    }
                    <div className='divider'></div>
                    <div className='flex items-center justify-between'>
                        <span onClick={handleAddMoreQuestion} className='px-2 cursor-pointer py-1 border text-white rounded-md bg-gray-500 '>Add More</span>
                        {
                            qaPairs.length > 0 && <button onClick={submitQA} type='submit' className={`px-2 py-1 border text-white rounded-md bg-black`}>Submit</button>
                        }
                    </div>
                </form>
            </ShareModal>
        </div>
    );
};

export default AddHotelQ_Ans;
