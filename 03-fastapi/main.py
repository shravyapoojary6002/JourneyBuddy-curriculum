from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI()

class Item(BaseModel):
    id: int = Field(..., gt=0)          # must be a positive integer
    name: str = Field(..., min_length=1)  # must be a non-empty string
    price: float = Field(..., gt=0)      # must be a positive number



items_db = {}


# ---- ENDPOINT WITH QUERY PARAMETER VALIDATION ----
@app.get("/items")
def get_items(category: str | None = None, limit: int = 10):

    results = list(items_db.values())
    if category:
        results = [i for i in results if i.get("category") == category]
    return results[:limit]


# ---- ENDPOINT WITH BODY VALIDATION ----
@app.post("/items")
def create_item(item: Item):

    items_db[item.id] = item.dict()
    return {"message": "Item created", "item": item}


# ---- ENDPOINT WITH PATH PARAMETER VALIDATION ----
@app.get("/items/{item_id}")
def get_item(item_id: int):
    
    if item_id not in items_db:
        raise HTTPException(status_code=404, detail="Item not found")
    return items_db[item_id]