import React from 'react'
import {X,add} from '../assets/assets'
const UpdateQuestions = () => {
    const data = [
        {
            question: 'soem squestion',
            answers:[
                {
                    answer: 'answer 1',
                    value:0
                },
                {
                    answer: 'answer 1',
                    value:1
                },
                {
                    answer: 'answer 1',
                    value:2
                },
            ]
                
            
        },
        {
            question: 'soem squestion',
            answers:[
                {
                    answer: 'answer 1',
                    value:0
                },
                {
                    answer: 'answer 1',
                    value:1
                },
                {
                    answer: 'answer 1',
                    value:2
                },
            ]
                
            
        },
        {
            question: 'soem squestion',
            answers:[
                {
                    answer: 'answer 1',
                    value:0
                },
                {
                    answer: 'answer 1',
                    value:1
                },
                {
                    answer: 'answer 1',
                    value:2
                },
            ]
                
            
        },
    ]
  return (
    <div className='w-full h-screen sm:p-4 pt-2 flex flex-col items-center overflow-y-auto'>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <img src={add} alt="" className='w-20 cursor-pointer'/>
    </div>
  )
}
function QuestionCard() {
    return (
      <div className='w-10/12 min-h-[220px] bg-gradient-to-br from-[#6D54BF] to-[#1E2F7D] rounded-lg sm:p-3 p-1 text-white custom-shadow mb-6'>
          <input  className='w-full bg-transparent outline-none text-lg border-b-2 border-gray-400 ' placeholder='teh question'/>
          <div className='flex justify-between items-center text-white '>
              <input type="text" className='bg-transparent outline-none w-full mr-4' placeholder='answer'/>
              <div className='flex items-center'>
                <input type="number" className='bg-transparent outline-none w-8' placeholder='value'/>
                <img src={X} alt="" className='cursor-pointer'/>
              </div>
          </div>
      
      </div>
    )
  }

export default UpdateQuestions