# Module 2.6 — Pinecone & Vector Databases

## What this does
Saves 5 sentences into Pinecone, then asks a question to see which sentences are most similar in meaning.

## The sentences
- Food: "I love eating pizza", "Pasta is my favorite food"
- Finance: "The stock market crashed today", "Investors are worried about inflation"
- Exercise: "I went for a run this morning"

## What happened
I asked something like "I enjoy tasty food" and got back:
1. "I love eating pizza" — very close match
2. "Pasta is my favorite food" — very close match
3. "I went for a run this morning" — not a close match

## Why this matters
The two food sentences scored much higher than the others. This shows that Pinecone can find sentences with similar meaning, even without using the exact same words.

## how to run
- install requred packages:
npm install
- run progran :
node sentences.js
- Requires a `.env` file with `PINECONE_API_KEY` (not committed to Git).

## Reference documentation
https://docs.pinecone.io/