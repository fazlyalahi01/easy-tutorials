import { Category } from "@/models/category-model";

export async function getCategoryList() {
    const allCateogy = await Category.find().lean();
    return allCateogy
}