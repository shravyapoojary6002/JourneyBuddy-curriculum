// load our secret key
require("dotenv").config();
const { Pinecone } = require("@pinecone-database/pinecone");

// connect to pinecone
var pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

async function run() {
  // get the exact host address for our index first
  var indexInfo = await pc.describeIndex("sentence-demo");
  var index = pc.index({ host: indexInfo.host });

  var sentences = [
    { id: "1", text: "I love eating pizza", vector: [0.9, 0.1, 0.05, 0.2, 0.1] },
    { id: "2", text: "Pasta is my favorite food", vector: [0.85, 0.15, 0.1, 0.25, 0.05] },
    { id: "3", text: "The stock market crashed today", vector: [0.1, 0.9, 0.8, 0.05, 0.2] },
    { id: "4", text: "Investors are worried about inflation", vector: [0.15, 0.85, 0.75, 0.1, 0.15] },
    { id: "5", text: "I went for a run this morning", vector: [0.2, 0.1, 0.1, 0.9, 0.8] },
  ];

  var toUpload = sentences.map(function (s) {
    return { id: s.id, values: s.vector, metadata: { text: s.text } };
  });

  console.log("Uploading", toUpload.length, "records...");

  await index.upsert({ records: toUpload });
  console.log("Sentences uploaded!");

  var queryVector = [0.88, 0.12, 0.08, 0.22, 0.08]; // like "I enjoy tasty food"

  var results = await index.query({
    vector: queryVector,
    topK: 3,
    includeMetadata: true,
  });

  console.log("Top matches for the query:");
  results.matches.forEach(function (match) {
    console.log(match.metadata.text, "- similarity score:", match.score);
  });
}

run().catch(function (error) {
  console.log("Something went wrong:", error);
});