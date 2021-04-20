<div class="content-border"></div>
<div class="content-wrap">
	<div class="content">
		<slot></slot>
	</div>
</div>

<style>
	.content-wrap {
		position: absolute;
		width: 100%;
		min-height: 100%;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		width: clamp(45ch, 50%, 75ch);
		height: 400px;
		background-color: #ccc;
		border-radius: 10px;
		border: 3px solid linear-gradient(130deg, #F00 0%, #FF6A00 100%);
	}

	.content-border {
		width: clamp(45ch, 50%, 75ch);
		height: 400px;
		background-color: #F00;
		position: fixed;
		left: calc( 50% - ( clamp(45ch, 50%, 75ch) / 2 ) );
		padding: 3px;
		top: calc(50% - 200px);
	}
</style>