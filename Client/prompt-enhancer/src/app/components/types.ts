export const Models = {
    Midjourney: "Midjourney",
    StableDiffusion: "StableDiffusion",
    LeonardoAI: "LeonardoAI",
    Dall_E: "Dall-E",
    AdobeFirefly: "AdobeFirefly",
    Ideogram: "Ideogram",
    Recraft: "Recraft",
} as const;

export const ImageTypes = {
    Photorealistic: "Photorealistic",
    Hyperrealistic: "Hyperrealistic",
    AiEnhancedRealism: "AI-Enhanced Realism",
    Illustration: "Illustration",
    ConceptArt: "Concept Art",
    Cartoon: "Cartoon",
    Anime: "Anime",
    PixelArt: "Pixel Art",
    OilPainting: "Oil Painting",
    Watercolor: "Watercolor",
    Sketch: "Sketch",
    DreamlikeFantasy: "Dreamlike Fantasy",
    GlitchCyberpunk: "Glitch Cyberpunk",
    GeometricMinimalist: "Geometric Minimalist",
    DiagramChart: "Diagram & Chart",
    Infographic: "Infographic",
    BrandingLogo: "Branding & Logo",
    UiUxMockup: "UI/UX Mockup",
    ThreeDRender: "3D Render",
    AiGeneratedFace: "AI-Generated Face",
    Advertisement: "Advertisement",
    GraphicsDesign: "Graphics Design",
    BlogThumbnail: "Blog Thumbnail",
    IdeogramSpecific: "Ideogram Specific",
    RecraftSpecific: "Recraft Specific",
} as const;

export const Dimensions = {
    Square: "Square (1:1)",
    Portrait: "Portrait (9:16)",
    Landscape: "Landscape (16:9)",
    Standard: "Standard (varies)",
} as const;

export const ImageOptions = {
    Background: "Background Image",
    Title: "Title Image",
    Thumbnail: "Thumbnail Image",
    FullSize: "Full-Size Image",
} as const;

export interface Inputs {
    prompt: string;
    negative_prompt: string;
    image_type: string;
    enhanced_prompt: string;
    selected_model: string;
    image_dimensions: keyof typeof Dimensions;
    image_option: keyof typeof ImageOptions;
    original_prompt: string;
    additional_text: string;
}

export interface ResultData extends Inputs {
    enhanced_prompt: string;
    original_prompt: string, 
}

export interface ResultProps {
    data: ResultData;
}

export interface PromptInputData {
    onsubmit: (data: Inputs) => void;
}
export interface HistorySidebarProps {
    history: ResultData[];
}
