Backend (Django) - Quick start
1. cd backend
2. python3 -m venv venv
3. source venv/bin/activate  # Windows: venv\Scripts\activate
4. pip install -r requirements.txt
5. python manage.py migrate
6. python manage.py runserver 0.0.0.0:8000
The API endpoint will be: POST http://localhost:8000/api/analyze/ with JSON {"area": "Wakad"} or {"query":"Analyze Wakad"}
