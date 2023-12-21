import React,{useState} from 'react'

const Questions = () => {
    const arr = [1,2,3,4,5,6,7,8,9]
    const [current, setcurrent] = useState(1)
  return (
    <div className='flex flex-col gap-2 px-6 py-6 h-screen  items-center '>
        <div className='flex'>
            {
                arr.map((e,i)=>(
                    <div className='flex items-center text-white' onClick={()=>setcurrent(e)}>
                        <p className={`w-12 h-12 ${current == e ? 'bg-[#6D54BF] pink-shadow':'bg-[#1E2F7D] custom-shadow'} rounded-full text-center text-4xl`}>{e}</p>
                        {i < arr.length -1 && <div className={`w-6 h-2 ${current == e ? 'bg-gradient-to-r from-[#6D54BF] to-[#1E2F7D]':'bg-[#1E2F7D]'}`}></div>}
                        
                    </div>
                ))
            }
        </div>
        <div className='flex flex-wrap gap-12 justify-center mt-8'>
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
           
          
        </div>
    </div>
  )
}

function QuestionCard() {
  return (
    <div className='w-[350px] h-[220px] bg-gradient-to-br from-[#6D54BF] to-[#1E2F7D] rounded-lg p-3 text-white custom-shadow'>
        <p className='text-lg border-b-2 border-gray-400 mb-2'>this is question number one</p>
        <div className='flex gap-1 items-center'>
            <input type="radio" name="q" id="q" />
            <label htmlFor="q">answer</label>
        </div>
        <div className='flex gap-1 items-center'>
            <input type="radio" name="q" id="q" />
            <label htmlFor="q">answer</label>
        </div>
    
    </div>
  )
}

export default Questions