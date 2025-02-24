from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.latest_ai_development.crew import LatestAiDevelopment  # Import CrewAI

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Ensure `image_dimensions` is included
class PromptData(BaseModel):
    prompt: str
    negative_prompt: str
    selected_model: str
    image_type: str
    image_dimensions: str  

@app.post("/api/enhance")
async def enhance_prompt(data: PromptData):
    print(f"Received: {data}")

    # ✅ Prepare input for CrewAI
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
        result = crew.kickoff(inputs=inputs)  # ✅ CrewAI returns a CrewOutput object

        # ✅ Convert CrewAI output to JSON string
        result_json = str(result)  # Convert CrewOutput to string

        return {
            "enhanced_prompt": result_json,  # ✅ Now it returns readable data
            "negative_prompt": data.negative_prompt,
            "selected_model": data.selected_model,
            "image_type": data.image_type,
            "image_dimensions": data.image_dimensions
        }
    except Exception as e:
        return {"error": str(e)}
