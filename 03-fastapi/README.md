# Module 2.3 — FastAPI Framework

## What this does
A basic FastAPI app with three endpoints demonstrating automatic request validation using Python type hints and Pydantic models.

## Schema validation rules
- `Item` model: `id` must be a positive integer, `name` a non-empty string,`price` a positive number.
- `GET /items/{item_id}`: `item_id` must be an integer 
- `GET /items`: optional `category` (string) and `limit` (integer) query parameters.

## How to run it
- Create virtual environment:
python -m venv venv
- Activate it:
venv\Scripts\activate
- Install FastAPI:
pip install fastapi uvicorn
- Run the server:
uvicorn main:app --reload
- Then visit http://127.0.0.1:8000/docs to test interactively.

## Reference documentation
https://fastapi.tiangolo.com/