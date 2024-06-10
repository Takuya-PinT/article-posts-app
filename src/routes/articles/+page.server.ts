import { getArticles } from "$lib/server/articles";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const { articles } = await getArticles();
    console.log(articles)
    return { articles};
}