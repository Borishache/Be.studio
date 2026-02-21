import { GoogleGenAI } from "@google/genai";

// Inicializamos lazy en caso de que la API key falte (para no tumbar la app en el render inicial)
let aiClient: GoogleGenAI | null = null;
const getAIClient = () => {
  if (!aiClient) {
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "missing-key-for-preview" });
    } catch (error) {
      console.warn("Failed to initialize GoogleGenAI", error);
    }
  }
  return aiClient;
};

export async function generateMarketingStrategy(businessType: string, goals: string) {
  const ai = getAIClient();
  if (!ai) return "El asistente táctico no está disponible en este momento por falta de configuración del API Key.";

  const model = "gemini-2.5-flash";
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
