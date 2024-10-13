import { AppDataSource } from "../config/db";
import { Preference } from "../enitites/preference.entity";
import { User } from "../enitites/user.entity";

class PreferenceService {

    private preferencesRepository = AppDataSource.getRepository(Preference)
    private userRepository = AppDataSource.getRepository(User)

    public async getUserPreferences(id:number): Promise<Preference[]> {
        const user = await this.userRepository.findOne({
            where: { UserID: id },
            relations: ['preferences'], // Cargar las preferencias relacionadas
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user.preferences;
    }


}

export default new PreferenceService(); 