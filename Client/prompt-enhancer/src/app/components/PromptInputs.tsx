'use client'
import React, { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs, Models, ImageTypes, Dimensions, ImageOptions } from './types'
import { PromptInputData } from './types'
import axios from 'axios'

const PromptInputs = ({ onsubmit }: PromptInputData) => {
    const [loading, setLoading] = useState(false)
    const [negativePrompt, setNegativePrompt] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>()
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const onFormSubmit: SubmitHandler<Inputs> = (data) => {
        setLoading(true);

        if (!apiUrl) {
            console.error("API URL is not defined");
            setLoading(false);
            return; // Exit if apiUrl is not defined
        }

        axios.post(apiUrl, data)
            .then((resp) => {
                console.log(resp.data);
                onsubmit(resp.data);
            })
            .catch((error) => {
                console.log("Error from backend", error);
            })
            .finally(() => {
                setLoading(false);
                reset();
                setNegativePrompt(false);
            });
    }

    return (
        <div className='text-white text-lg'>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className='flex flex-col gap-3'>
                    <div className='flex'>
                        <input className='inputfield' type="text" placeholder='Enter your prompt here...' {...register("prompt", { required: true })} />
                        <button type="submit" className='rounded-r-md bg-blue-500 p-2 text-white'>{loading ? "Generating..." : "Generate"}</button>
                    </div>
                    {errors.prompt && <p className='text-red-500'>This field is required</p>}
                    <div className='flex items-center gap-3 max-sm:flex-col'>
                        <div className='flex bg-blue-500 text-white items-center rounded-md p-2 gap-3 text-nowrap'>
                            <label htmlFor="negative">Negative Prompt</label>
                            <input type="checkbox" id="negative" className='size-4' onChange={() => setNegativePrompt(prev => !prev)} checked={negativePrompt} />
                        </div>
                        {negativePrompt && <input className='inputfield2' type="text" placeholder='Add negative prompt here...' {...register("negative_prompt", { required: false })} />}
                    </div>
                    <div className='flex gap-3 max-sm:flex-col'>
                        {/* Models Dropdown */}
                        <select id="model" className='Dropdown' {...register("selected_model", { required: false })}>
                            <option value="">Select Model</option>
                            {Object.keys(Models).map((key) => (
                                <option key={key} value={key}>{key}</option>
                            ))}
                        </select>
                        <select id="imageType" className='Dropdown' {...register('image_type', { required: false })}>
                            <option value="">Select Image Type</option>
                            {Object.keys(ImageTypes).map((key) => (
                                <option key={key} value={key}>{key.replace(/_/g, " ")}</option>
                            ))}
                        </select>
                        <select id="dimensions" className='Dropdown' {...register('image_dimensions', { required: false })}>
                            <option value="">Select Dimensions</option>
                            {Object.keys(Dimensions).map((key) => (
                                <option key={key} value={key}>{key.replace(/_/g, " ")}</option>
                            ))}
                        </select>
                        {/* New Image Options Dropdown */}
                        <select id="imageOptions" className='Dropdown' {...register('image_option', { required: false })}>
                            <option value="">Select Image Option</option>
                            {Object.keys(ImageOptions).map((key) => (
                                <option key={key} value={key}>{key.replace(/_/g, " ")}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PromptInputs
