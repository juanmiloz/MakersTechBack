import { google } from "@ai-sdk/google";
import { generateText } from "ai";

class ChatService {
  private model = google("gemini-1.5-flash-002");

  async getProductInfo(allInfo: string, message: string): Promise<string> {
    const prompt = `Estos son productos en formato JSON: \n${allInfo} \n. Apartir de la anterior información, responde:\n ${message}`;
    const { text } = await generateText({ model: this.model, prompt: prompt });
    return text;
  }

  async getRecomendedProducts(
    products: string,
    preference: string
  ): Promise<string> {
    const prompt = `Estos son productos en formato JSON: \n${products} \n. Estas son las preferencias del usuario: \n${preference}\n. 
    A partir de la anterior información, responde: Teniendo en cuenta las preferencias del usuario ¿que productos recomendarías? \n
    entregame el resultado dirigiendote al usuario, mencionando que en base a sus preferencias, estos son los productos que mas encajan con ellas.`;
    const { text } = await generateText({ model: this.model, prompt: prompt });
    return text;
  }
}

export default new ChatService();
