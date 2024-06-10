<script lang="ts">
    export let id: number;
    export let title: string;
    export let createdAt: Date;
</script>

<div class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out flex">
    <div>
        <a href="{`/articles/${id}`}" class="hover:underline">
            <h2 class="text-lg font-bold">{title}</h2>
        </a>
        <time datetime="{createdAt.toISOString()}" class="text-sm text-gray-500"></time>
    </div>
</div>