Real Estate Analyst Fullstack (React + Bootstrap frontend, Django backend)
--------------------------------------------------

This zip contains two folders: backend and frontend, plus a dataset (if included).

Backend (Django):
  - location: backend/
  - quick steps:
    1. cd backend
    2. python3 -m venv venv
    3. source venv/bin/activate   # On Windows: venv\Scripts\activate
    4. pip install -r requirements.txt
    5. python manage.py migrate
    6. python manage.py runserver 0.0.0.0:8000
  - API endpoint: POST http://localhost:8000/api/analyze/  with JSON body: {"query":"Analyze Wakad"} or {"area":"Wakad"}

Frontend (React + Vite):
  - location: frontend/
  - quick steps:
    1. cd frontend
    2. npm install
    3. npm run dev
    4. Open http://localhost:5173 (or link shown by Vite)
  - The frontend expects backend on http://localhost:8000

Dataset:
  - A file called sample_data.xlsx was copied to backend/analysis/ if it existed in /mnt/data/Sample_data.xlsx on the environment that produced this zip.
  - If no dataset was found, please add one at backend/analysis/sample_data.xlsx with columns: Area, Year, Price, Demand (Year numeric).

Notes:
  - This project uses a simple mock LLM style summary generated in the backend utils.
  - CORS is enabled for development convenience.
