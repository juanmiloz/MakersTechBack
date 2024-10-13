import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

class ChatService {

    private model = google('gemini-1.5-flash-002');

    async getProductInfo(allInfo: string, message: string): Promise<string> {
        const prompt = `Estos son productos en formato JSON: \n${allInfo} \n. Apartir de la anterior información, responde:\n ${message}`;
        const {text} = await generateText({model: this.model, prompt: prompt});
        return text;
    }

}

export default new ChatService();