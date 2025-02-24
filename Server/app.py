from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.latest_ai_development.crew import LatestAiDevelopment  # Adjusted import path

app = FastAPI()

# Allow CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your frontend's URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/enhance")
async def enhance_prompt(prompt: str, negative_prompt: str = "", selected_model: str = "DALL-E"):
    print(f"Received prompt: {prompt}, negative_prompt: {negative_prompt}, selected_model: {selected_model}")
    # Prepare inputs as required by your crew
    inputs = {
        "prompt": prompt,
        "negative_prompt": negative_prompt,
        "selected_model": selected_model,
    }

    # Create your crew instance and run the kickoff
    crew_instance = LatestAiDevelopment()
    crew = crew_instance.crew()
    try:
        result = crew.kickoff(inputs=inputs)
        return {"result": result}
    except Exception as e:
        return {"error": str(e)}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
