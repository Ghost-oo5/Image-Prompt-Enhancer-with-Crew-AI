export interface Model {
    DallE: string,
    LeonardoAI: string
}

export interface ImageTypes {
    realistic: string,
    illustration: string
}

export interface Dimensions {
    square: string,
    cover: string
}

export interface Inputs {
    prompt: string,
    negative_prompt: string,
    image_model: Model[]
    image_type: ImageTypes[],
    image_dimension: Dimensions[],
}

export interface ResultProps 
{
    data: Inputs | null
}

export interface PromptInputData {
    onsubmit:(data: Inputs)=>void;
}