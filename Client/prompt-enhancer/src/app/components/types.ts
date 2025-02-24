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

export interface ResultProps {
    data: {
        enhanced_prompt: string;  // ✅ Add enhanced_prompt
        negative_prompt: string;
        selected_model: string;
        image_type: string;
        image_dimensions: string;
    } | null;
}

export interface PromptInputData {
    onsubmit:(data: Inputs)=>void;
}