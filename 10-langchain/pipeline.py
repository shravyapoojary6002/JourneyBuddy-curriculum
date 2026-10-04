from langchain_core.prompts import PromptTemplate
from langchain_community.llms.fake import FakeListLLM

# step 1: a template with blank spots that get filled 
template = PromptTemplate(
    input_variables=["context", "question"],
    template="Context: {context}\nQuestion: {question}\nAnswer:"
)

# step 2: pretend this is our vector database
knowledge = {
    "docker": "Docker packages apps into containers.",
    "redis": "Redis is a fast in-memory cache."
}

# this function looks for a matching fact - like a simple search
def find_context(question):
    for word in knowledge:
        if word in question.lower():
            return knowledge[word]
    return "No info found."

# step 3: a fake AI model
model = FakeListLLM(responses=["Docker is a tool for packaging apps into containers."])

# ---- run the pipeline ----

question = "What is Docker?"

# get context from our pretend database
context = find_context(question)

# fill in the template with our context and question
final_prompt = template.format(context=context, question=question)

print("Prompt sent to model:")
print(final_prompt)

# step 4: send it to the model and get a response
response = model.invoke(final_prompt)

# step 5: clean up the response (this is the "output parsing" part)
answer = response.strip()

print("\nFinal Answer:")
print(answer)