import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { articleSchema, createArticle } from "$lib/server/articles";

console.log("bbbbbbbbbbbbbb")
export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const validatedFields = articleSchema.safeParse({
            title: formData.get('title'),
            content: formData.get('content')
        });
        if (!validatedFields.success) {
            return fail(400,{
                errors: validatedFields.error.formErrors,
                fileds: {
                    title: formData.get('title') as string | undefined,
                    content: formData.get('content') as string | undefined
                }
            });
        }

        await createArticle({
            title: validatedFields.data.title,
            content: validatedFields.data.content
        });

        return redirect(303, '/articles')
    }
}