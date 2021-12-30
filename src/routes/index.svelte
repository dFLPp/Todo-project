<script>
    import TodoItem from "$lib/todo-item.svelte"
    const title ="Título da página"
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<form action="" method="">
    <input type="text" name="tap-first-insert" aria-label="Add item" placeholder="tap do add a item">
</form>

<TodoItem />
<TodoItem />
<TodoItem />

