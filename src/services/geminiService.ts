import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateMarketingStrategy(businessType: string, goals: string) {
  const model = "gemini-3-flash-preview";
  const prompt = `As a world-class marketing and UX/UI agency, provide a concise, high-impact marketing and design strategy for a ${businessType} with the following goals: ${goals}. 
  Include:
  1. A unique value proposition.
  2. Three key UX/UI focus areas to improve conversion.
  3. Two innovative marketing channels to explore.
  Keep it professional, creative, and actionable. Use Markdown formatting.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating strategy:", error);
    return "Sorry, I couldn't generate a strategy at this moment. Please try again later.";
  }
}
