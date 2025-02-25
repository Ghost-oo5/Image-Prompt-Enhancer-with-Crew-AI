from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.latest_ai_development.crew import LatestAiDevelopment  # Import CrewAI
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PromptData(BaseModel):
    prompt: str
    negative_prompt: Optional[str] = ""
    selected_model: Optional[str] = None
    image_type: Optional[str] = None
    image_dimensions: Optional[str] = None


@app.post("/api/enhance")
async def enhance_prompt(data: PromptData):
    print(f"Received: {data}")

    inputs = {
        "prompt": data.prompt,
        "negative_prompt": data.negative_prompt,
        "selected_model": data.selected_model,
        "image_type": data.image_type,
        "image_dimensions": data.image_dimensions,
    }

    crew_instance = LatestAiDevelopment()
    crew = crew_instance.crew()

    try:
        result = crew.kickoff(inputs=inputs)

        result_json = str(result)  # Convert CrewOutput to string

        return {
            "original_prompt": data.prompt,  
            "enhanced_prompt": result_json,
            "negative_prompt": data.negative_prompt,
            "selected_model": data.selected_model,
            "image_type": data.image_type,
            "image_dimensions": data.image_dimensions,
        }
    except Exception as e:
        return {"error": str(e)}
