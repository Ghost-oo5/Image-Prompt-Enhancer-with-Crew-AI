import React from 'react'
import { ResultData } from './types' // ✅ Import ResultData type

interface HistorySidebarProps {
  history: ResultData[];
}

const HistorySidebar = ({ history }: HistorySidebarProps) => {
  return (
    <div className='flex flex-col bg-gray-300 h-full p-5'>
      <div className='border-b-2 border-black mb-3'>
        <h1 className='text-2xl pb-1'>History</h1>
      </div>
      <div className='overflow-y-auto max-h-[80vh]'>
        {history.length === 0 ? (
          <p className='text-gray-600'>No history yet</p> 
        ) : (
          history.map((item, index) => (
            <div key={index} className='p-2 bg-white rounded-md mb-2 shadow-sm text-sm'>
              <p className='font-semibold uppercase'>{item.original_prompt}</p>

            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default HistorySidebar
