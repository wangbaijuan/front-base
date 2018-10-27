<template>
	<div id="app">
		<h1>My Todo App!</h1>
		<TodoList/>
	</div>
</template>

<script>

// defined
import TodoList from './components/TodoList.vue'

export default {
	components: {
		TodoList
	}
}
</script>

<style lang="scss">
@import './variables.scss';

*, *::before, *::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
	color: $vue-blue;
}

h1 {
	text-align: center;
}
</style>