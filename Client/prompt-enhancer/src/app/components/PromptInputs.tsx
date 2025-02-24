'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs } from './types'
import { PromptInputData } from './types'
import axios from 'axios'


const PromptInputs = ({ onsubmit }: PromptInputData) => {
    const [loading, setLoading] = useState(false)
    const [negativePrompt, setNegativePrompt] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>()
    const onFormSubmit: SubmitHandler<Inputs> = (data) => {
        setLoading(true);

        const requestData = {
            prompt: data.prompt,
            negative_prompt: data.negative_prompt || "",  // ✅ Set default empty string if missing
            selected_model: data.image_model,  // ✅ Rename `image_model` to `selected_model`
            image_type: data.image_type,
            image_dimensions: data.image_dimension || "square" // ✅ Ensure `image_dimensions` is always sent
        };

        const response = axios.post('http://127.0.0.1:8000/api/enhance', requestData).then((resp) => {
            console.log(resp.data)
            onsubmit(resp.data)
        }).catch((error) => {
            console.log("Error from backend", error)
        }
        ).finally(() => {
            setLoading(false)
            reset();
            setNegativePrompt(false)
        })



    }

    return (
        <>
            <div className='text-white text-lg '>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className='flex flex-col gap-3'>
                        <div className='flex'>
                            <input className='inputfield' type="text" placeholder='Enter your prompt here...' {...register("prompt", { required: true })} />
                            <button type="submit" className=' rounded-r-md bg-blue-500 p-2 text-white'>{loading ? "Generating..." : "Generate"}</button>
                        </div>
                        {errors.prompt && <p className='text-red-500'>This field is required</p>}
                        <div className='flex items-centerv gap-3'>
                            <div className='flex bg-blue-500 text-white items-center rounded-md p-2 gap-3 text-nowrap'>
                                <label htmlFor="">Negative Prompt</label>
                                <input type="checkbox" name="negative" id="negative" className='size-4' onChange={() => setNegativePrompt(prev => !prev)} checked={negativePrompt} />
                            </div>
                            {negativePrompt && <input className='inputfield2' type="text" placeholder='Add negative prompt here...' {...register("negative_prompt", { required: false })} />}
                        </div>
                        <div className='flex gap-3'>
                            <select id="model" className='Dropdown' {...register("image_model", { required: false })}>
                                <option value="">Model</option>
                                <option value="DallE">Dall-E</option>
                                <option value="LeonardoAI">Leonardo AI</option>
                            </select>

                            <select id="imageType" className='Dropdown' {...register('image_type', { required: false })}>
                                <option value="">Image Type</option>
                                <option value="realistic">Realistic</option>
                                <option value="illutration">Illustration</option>
                            </select>
                            <select id="dimensions" className='Dropdown' {...register('image_dimension', { required: false })}>
                                <option value="">Dimensions</option>
                                <option value="square">Square (1080 x 1080)</option>
                                <option value="cover">Cover (820 x 312)</option>
                            </select>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PromptInputs