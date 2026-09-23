# Module 2.6 — Pinecone & Vector Databases

## What this does
Uploads 5 sample sentences  into a Pinecone index, then queries with a new vector to see how cosine similarity ranks them by semantic closeness.

## The sentences (grouped by topic on purpose)
- Food: "I love eating pizza", "Pasta is my favorite food"
- Finance: "The stock market crashed today", "Investors are worried about inflation"
- Exercise: "I went for a run this morning"

## Result
Querying with a vector representing "I enjoy tasty food" returned:
1. "I love eating pizza" — similarity 0.999
2. "Pasta is my favorite food" — similarity 0.999
3. "I went for a run this morning" — similarity 0.406

This shows cosine similarity correctly ranking the two food-related sentences far above the unrelated ones, based purely on how close their vectors are — this is how semantic search finds relevant results without matching exact keywords.

## how to run
- install requred packages
npm install
- run progran 
node sentences.js
- Requires a `.env` file with `PINECONE_API_KEY=<your key>` (not committed to Git).

## Reference documentation
https://docs.pinecone.io/