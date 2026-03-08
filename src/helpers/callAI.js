import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.VITE_AI_KEY,
  dangerouslyAllowBrowser: true
});

export default async function sendMessage(message, history) {
    let cleanedHistory = history.map((message) => {
            const messageCopy = {...message}
            delete messageCopy.id
            return messageCopy
        }
    );

    cleanedHistory.unshift({role:"system", content:"You are a funny assistant that can't give any answer without making the user laugh or smile."})
    
    cleanedHistory.push({role: "user", content: message})

    return await client.chat.completions.create({
        model: "nvidia/nemotron-3-nano-30b-a3b:free",
        messages: cleanedHistory,
        stream: true
    });
}