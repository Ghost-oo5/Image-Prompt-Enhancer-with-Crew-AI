export const Models = {
    Midjourney: "Midjourney",
    StableDiffusion: "StableDiffusion",
    LeonardoAI: "LeonardoAI",
    DallE: "Dall-E",
    AdobeFirefly: "AdobeFirefly",
} as const;

export const ImageTypes = {
    photorealistic: "Photorealistic",
    hyperrealistic: "Hyperrealistic",
    ai_enhanced_realism: "AI-Enhanced Realism",
    illustration: "Illustration",
    concept_art: "Concept Art",
    cartoon: "Cartoon",
    anime: "Anime",
    pixel_art: "Pixel Art",
    oil_painting: "Oil Painting",
    watercolor: "Watercolor",
    sketch: "Sketch",
    dreamlike_fantasy: "Dreamlike Fantasy",
    glitch_cyberpunk: "Glitch Cyberpunk",
    geometric_minimalist: "Geometric Minimalist",
    diagram_chart: "Diagram & Chart",
    infographic: "Infographic",
    branding_logo: "Branding & Logo",
    ui_ux_mockup: "UI/UX Mockup",
    three_d_render: "3D Render",
    ai_generated_face: "AI-Generated Face",
} as const;

export const Dimensions = {
    instagram_feed: "Instagram Feed (1080x1080)",
    instagram_story: "Instagram Story (1080x1920)",
    instagram_carousel: "Instagram Carousel (1080x1080)",
    igtv_cover: "IGTV Cover (420x654)",
    facebook_feed: "Facebook Feed (1200x630)",
    facebook_story: "Facebook Story (1080x1920)",
    facebook_profile: "Facebook Profile (170x170)",
    facebook_cover: "Facebook Cover (851x315)",
    linkedin_feed: "LinkedIn Feed (1200x627)",
    linkedin_company_banner: "LinkedIn Company Banner (1536x768)",
    linkedin_profile_banner: "LinkedIn Profile Banner (1584x396)",
    linkedin_profile_picture: "LinkedIn Profile Picture (400x400)",
    twitter_feed: "Twitter Feed (1600x900)",
    twitter_header: "Twitter Header (1500x500)",
    twitter_profile_picture: "Twitter Profile Picture (400x400)",
    youtube_thumbnail: "YouTube Thumbnail (1280x720)",
    youtube_banner: "YouTube Banner (2560x1440)",
    youtube_profile: "YouTube Profile (800x800)",
    pinterest_standard: "Pinterest Standard Pin (1000x1500)",
    pinterest_square: "Pinterest Square Pin (1000x1000)",
    pinterest_story: "Pinterest Story Pin (1080x1920)",
    square: "Square (1080x1080)",
    cover: "Cover (820x312)",
} as const;

export interface Inputs {
    prompt: string;
    negative_prompt: string;
    image_type: string;
    enhanced_prompt: string;
    selected_model: string;
    image_dimensions: string;
    original_prompt: string, 

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
