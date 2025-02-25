import { ResultProps } from './types'
import { CopyIcon } from './utils/icons'
import { copyToClipboard } from './utils/clipboardUtils'


const Results = ({ data }: ResultProps) => {

    const handleCopy = () => {
        if (data?.enhanced_prompt) {
            copyToClipboard(data.enhanced_prompt)
        }
    };
    return (
        <>
            {data?.enhanced_prompt ? (
                <div className="max-w-sm p-5 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {data.enhanced_prompt}
                    </p>
                    <div className='flex flex-col items-end'>
                        <button className="btn-primary" onClick={handleCopy}>
                            Copy
                            <CopyIcon />
                        </button>
                    </div>
                </div>
            ) : (
                null
            )}
        </>
    )
}

export default Results