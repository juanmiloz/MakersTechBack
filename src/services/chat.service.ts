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
    entregame el resultado en formato JSON de los productos que son recomendados para mi, dame unicamente el json de los productos recomendados y previamente añade la palabra "recomendados" al inicio de tu respuesta.`;
    const { text } = await generateText({ model: this.model, prompt: prompt });
    console.log(text);
    return text;
  }
}

export default new ChatService();
