import { ResultProps } from './types'
import { CopyIcon } from './utils/icons'


const Results = ({ data }: ResultProps) => {

    const copyToClipboard = () => {
        if (data?.enhanced_prompt) {
            navigator.clipboard.writeText(data.enhanced_prompt)
                .then(() => alert("Copied to clipboard!"))
                .catch((err) => console.error("Error copying text: ", err));
        }
    };
    return (
        <>
            <div className="max-w-sm p-5 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {data?.enhanced_prompt || "No enhanced prompt available"}
                </p>
                <div className='flex flex-col items-end'>
                    <button className="btn-primary" onClick={copyToClipboard}>
                        Copy
                        <CopyIcon />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Results