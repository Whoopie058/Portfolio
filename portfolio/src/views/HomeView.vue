<template>
	<section class="relative h-130 w-full overflow-hidden rounded-md border-t-2 border-black bg-linear-to-br from-[#E2C99E] via-[#d4c6f2] to-[#b8d2f8] p-6">
		<div class="pointer-events-none absolute inset-0" aria-hidden="true">
			<span class="leaf leaf-1"></span>
			<span class="leaf leaf-2"></span>
			<span class="leaf leaf-3"></span>
			<span class="leaf leaf-4"></span>
			<span class="leaf leaf-5"></span>
			<span class="leaf leaf-6"></span>
			<span class="leaf leaf-7"></span>
			<span class="leaf leaf-8"></span>
			<span class="leaf leaf-9"></span>
			<span class="leaf leaf-10"></span>
			<span class="leaf leaf-11"></span>
			<span class="leaf leaf-12"></span>
			<span class="leaf leaf-13"></span>
			<span class="leaf leaf-14"></span>
		</div>

		<div class="relative z-10 mx-auto mt-14 max-w-xl rounded-xl border-2 border-black bg-white/75 p-8 text-center shadow-lg backdrop-blur-sm">
			<h1 class="text-4xl font-semibold text-[#111827]">Hello and Welcome</h1>
			<p class="mt-3 text-lg text-[#111827]">
				Hi, I am Laura. Welcome to my portfolio.
			</p>
		</div>
	</section>
</template>

<style scoped>

.leaf {
	position: absolute;
	top: -12%;
	width: 16px;
	height: 20px;
	border-radius: 70% 70% 70% 15%;
	background: radial-gradient(circle at 30% 25%, #fff8fb 0%, #ffd8eb 35%, #f4a9c6 75%, #eb8fb3 100%);
	opacity: 0;
	box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3) inset;
	animation: leaf-fall linear infinite, blossom-sway 2s ease-in-out infinite;
}

.leaf-1 {
	left: 6%;
	animation-duration: 13s;
	animation-delay: -1.4s;
}

.leaf-2 {
	left: 18%;
	animation-duration: 16s;
	animation-delay: -5.6s;
}

.leaf-3 {
	left: 30%;
	animation-duration: 12s;
	animation-delay: -3.2s;
}

.leaf-4 {
	left: 44%;
	animation-duration: 15s;
	animation-delay: -6.7s;
}

.leaf-5 {
	left: 58%;
	animation-duration: 14s;
	animation-delay: -2.9s;
}

.leaf-6 {
	left: 70%;
	animation-duration: 17s;
	animation-delay: -7.1s;
}

.leaf-7 {
	left: 82%;
	animation-duration: 13.5s;
	animation-delay: -4.1s;
}

.leaf-8 {
	left: 92%;
	animation-duration: 15.5s;
	animation-delay: -6.2s;
}

.leaf-9 {
	left: 10%;
	animation-duration: 18s;
	animation-delay: -8.6s;
}

.leaf-10 {
	left: 24%;
	animation-duration: 12.8s;
	animation-delay: -5.4s;
}

.leaf-11 {
	left: 37%;
	animation-duration: 16.8s;
	animation-delay: -9.1s;
}

.leaf-12 {
	left: 52%;
	animation-duration: 14.2s;
	animation-delay: -5.8s;
}

.leaf-13 {
	left: 76%;
	animation-duration: 13.2s;
	animation-delay: -7.4s;
}

.leaf-14 {
	left: 88%;
	animation-duration: 17.5s;
	animation-delay: -8.9s;
}

@keyframes leaf-fall {
	0% {
		transform: translateY(0) translateX(0) rotate(0deg);
		opacity: 0;
	}
	8% {
		opacity: 0.82;
	}
	50% {
		transform: translateY(52vh) translateX(28px) rotate(150deg);
		opacity: 0.82;
	}
	100% {
		transform: translateY(105vh) translateX(-22px) rotate(300deg);
		opacity: 0;
	}
}

@keyframes blossom-sway {
	0%,
	100% {
		margin-left: 0;
	}
	50% {
		margin-left: 8px;
	}
}
</style>
