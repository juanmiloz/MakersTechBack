import { AppDataSource } from "../config/db";
import { Product } from "../enitites/product.entity";

class ProductService {

    private productRepository = AppDataSource.getRepository(Product);

    public async getAllProducts(): Promise<Product[] | null> {
        try {
            return await this.productRepository.find();
        }catch (error) {
            throw error;
        }
    }

    public async findById(productId: number): Promise<Product | null> {
        try {
            const product = await this.productRepository.find({ where: { productId } });

            return product[0];
        }catch (error) {
            throw error;
        }
    }

}

export default new ProductService();