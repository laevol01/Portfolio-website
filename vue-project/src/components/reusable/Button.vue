<script>
export default {
	props: ['title'],
	data: () => {
		return {
			//
		};
	},
};
</script>

<template>
	<button class="bg-grey hover:bg-secondary text-primary font-regular lg:text-xl text-lg py-4 px-8 lg:px-16 lg:py-8">{{ title }}</button>
</template>

<style lang="scss" scoped>
button {
	border: none;
	cursor: pointer;
	margin: 40px;
}
</style>
