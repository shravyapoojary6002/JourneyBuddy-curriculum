# Module 2.10 — LangChain Framework

## What this does
A small example that shows how LangChain connects a question to an AI model, using a fake (free) model so no API key is needed.

## How it works, step by step
1. **Template with blanks** — We make a sentence with two blank spots:`{context}` and `{question}`. These get filled in later.
2. **Fake database lookup** — Before asking the AI, we look up some info related to the question. Here it's just a small dictionary, but in a real app this would be a proper database search (like we did in the MongoDB and Pinecone modules).
3. **Ask the model** — We send the filled-in template to an AI model. We used a fake model here so this exercise doesn't need a paid API key.
4. **Clean up the answer** — We take the model's reply and remove any extra spaces before showing it.

## How to run it
- python -m venv venv
- venv\Scripts\activate
- pip install langchain langchain-community
- python pipeline.py

## Reference documentation
https://python.langchain.com/docs/