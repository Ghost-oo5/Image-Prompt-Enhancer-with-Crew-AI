import { ResultProps } from './types'
import { CopyIcon } from './utils/icons'
import { copyToClipboard } from './utils/clipboardUtils'
import { useEffect, useState } from 'react'

const Results = ({ data }: ResultProps) => {
    const [timestamp, setTimestamp] = useState<string | null>(null);

    useEffect(() => {
        if (data?.enhanced_prompt) {
            const now = new Date();
            setTimestamp(now.toLocaleString()); 
        }
    }, [data]);

    const handleCopy = () => {
        if (data?.enhanced_prompt) {
            copyToClipboard(data.enhanced_prompt)
        }
    };

    return (
        <>
            {data?.enhanced_prompt ? (
                <div className="max-w-sm p-5 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.enhanced_prompt}</p>
                   
                    <div className='flex flex-col gap-3 items-end'>
                   
                        <button className="btn-primary" onClick={handleCopy}>
                            Copy
                            <CopyIcon />
                        </button>
                        {timestamp && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">{timestamp}</p>
                    )}
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Results
