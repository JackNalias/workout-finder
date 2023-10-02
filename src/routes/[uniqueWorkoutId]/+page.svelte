<script>
	import '../../quill.css';

	export let data;
</script>

<div class="prose prose-xl mx-auto py-12 px-4 sm:px-0">
	<div class="ql-editor">
		{@html data.workout.quill_html}
	</div>
</div>

<style>
	.ql-editor {
		padding: 0px;
	}

	:global(iframe) {
		width: 1000px;
		height: 563px;
	}
</style>
