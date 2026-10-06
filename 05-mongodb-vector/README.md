# Module 2.5 — MongoDB Database & MongoDB Vector Search

## What this does
Connects to a MongoDB Atlas database and saves a document that has normal info plus a "vector" — a list of numbers that represents meaning. Then sets up a special index so we can search by similarity.

## The document saved
```json
{
  "author": "string",
  "category": "string",
  "timestamp": "date",
  "vector": [number, number, number, number, number]
}
```
The `vector` part is just some numbers standing in for a real AI-generated embedding — in a real app, these numbers would come from an AI model.

## The search index set up
```json
{
  "fields": [
    {
      "type": "vector",
      "path": "vector",
      "numDimensions": 5,
      "similarity": "cosine"
    }
  ]
}
```
- **path** — tells MongoDB which field holds the vector
- **numDimensions** — how many numbers are in the vector (must match the data)
- **similarity** — how MongoDB compares vectors to find similar ones

## how to run
- install pakages
npm install
- running program 
node insertData.js 
- Requires a `.env` file with `MONGO_URI` (not committed to Git).

## Reference documentation
https://www.mongodb.com/docs/atlas/atlas-vector-search/