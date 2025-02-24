import { ResultProps } from './types'
import { CopyIcon } from './utils/icons'


const Results = ({data}:ResultProps) => {
  return (
<>
<div className='bg-slate-300 h-full p-5'>
<div className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {data?.enhanced_prompt || "No enhanced prompt available"}
        </p>
    <div className='flex flex-col items-end'>
        <button  className="btn-primary">
            Copy
            <CopyIcon/>
        </button>
    </div>
</div>

</div>
</>
)
}

export default Results