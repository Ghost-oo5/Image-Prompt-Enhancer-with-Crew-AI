import { HistorySidebarProps, ResultData } from './types'; // ✅ Import ResultData type
import { copyToClipboard } from './utils/clipboardUtils'; // Import the utility function
import { CopyIcon } from './utils/icons';


const HistorySidebar = ({ history }: HistorySidebarProps) => {

    const handleCopy = (text: string) => {
        copyToClipboard(text)
    };

    return (
        <div className='flex flex-col text-white bg-[#232934] h-full p-5'>
            <div className='border-b-2 border-black mb-3'>
                <h1 className='text-2xl pb-1'>History</h1>
            </div>
            <div className=''>
                {history.length === 0 ? (
                    <p className='text-gray-600'>No history yet</p>
                ) : (
                    history.map((item, index) => (
                        <div key={index} className='p-2 border rounded-md mb-2 flex flex-col justify-between  shadow-sm text-sm'>
                            <p className='font-semibold uppercase'>{item.original_prompt}</p>
                            <div className='flex flex-col items-end'><button onClick={() => handleCopy(item.original_prompt)}><CopyIcon /></button></div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default HistorySidebar
