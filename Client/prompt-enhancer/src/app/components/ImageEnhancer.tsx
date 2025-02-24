'use client'
import React, { useState } from 'react'
import HistorySidebar from './HistorySidebar'
import PromptInputs from './PromptInputs'
import Results from './Results'
import { Inputs } from './types'
const ImageEnhancer = () => {

    const [submittedData, setSubmittedData] = useState<Inputs | null>(null)
    return (
        <>
            <div className='flex justify-between p-10 h-dvh '>
                <div className='w-96'><HistorySidebar /></div>
                <div className='w-full pl-5 flex flex-col gap-5'>
                    <div><PromptInputs onsubmit={setSubmittedData} /></div>
                    <div className='h-full'><Results data={submittedData} /></div>
                </div>
            </div>
        </>
    )
}

export default ImageEnhancer