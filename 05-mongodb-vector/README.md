# Module 2.5 — MongoDB Database & MongoDB Vector Search

## What this does
Connects to a MongoDB Atlas database and inserts a document combining normal metadata fields with a vector (embedding) field, then configures an atlas vector Search index for semantic similarity search on that field.

## Document schema
json
{
  "author": "string",
  "category": "string",
  "timestamp": "date",
  "vector": [number, number, number, number, number]
}

## Vector index specification
json
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

- **path**: which field holds the vector
- **numDimensions**: how many numbers are in each vector
- **similarity**: method used to find similar vectors

## how to run
- install pakages
npm install
- running program
node insertData.js
Requires a `.env` file with `MONGO_URI=<your connection string>` (not committed to Git).

## Reference documentation
https://www.mongodb.com/docs/atlas/atlas-vector-search/