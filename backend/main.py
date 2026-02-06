from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React to call your API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Test endpoint
@app.get("/")
def read_root():
    return {"message": "Baruch Scheduler API is running!"}

# Get courses endpoint (hardcoded for now)
@app.get("/courses")
def get_courses():
    return [
        {
            "id": 1,
            "code": "CIS 2300",
            "name": "Data Structures",
            "professor": "Dr. Smith",
            "rating": 4.5,
            "days": ["Mon", "Wed"],
            "time": "10:00 AM - 11:15 AM",
            "credits": 3
        },
        {
            "id": 2,
            "code": "CIS 3400",
            "name": "Algorithms",
            "professor": "Dr. Johnson",
            "rating": 4.2,
            "days": ["Tue", "Thu"],
            "time": "2:00 PM - 3:15 PM",
            "credits": 3
        }
    ]