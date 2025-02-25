'use client'
import React, { useState } from 'react'
import HistorySidebar from './HistorySidebar'
import PromptInputs from './PromptInputs'
import Results from './Results'
import { ResultData } from './types'

const ImageEnhancer = () => {
    // Store an array of results (each with enhanced_prompt, etc.)
    const [submittedData, setSubmittedData] = useState<ResultData[]>([])
    const [history, setHistory] = useState<ResultData[]>([])

    const handleSubmitData = (data: ResultData) => {
        // Append the new result to the end of the array
        setSubmittedData(prev => [data, ...prev])
        setHistory(prev => [data, ...prev])
        console.log('history', history)
    }

    return (
        <div className='flex justify-between p-10 min-h-dvh'>
            <div className='w-96 max-sm:hidden'><HistorySidebar history={history} /></div>
            <div className='w-full pl-5 flex flex-col gap-5'>
                <PromptInputs onsubmit={handleSubmitData} />
                <div className='bg-gray-300 min-h-dvh p-5 rounded-md'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        {submittedData.map((data, index) => (
                            <Results key={index} data={data} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageEnhancer
