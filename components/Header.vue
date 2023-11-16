<template>
  <header class="w-full border-b border-slate-200 py-4">
    <div class="container">
      <div class="flex justify-between items-center">
        <div>
          <NuxtLink to="/" class="text-2xl font-bold ml-4">SMK
            Coding</NuxtLink>
        </div>
        <nav class="flex items-center gap-8 mr-6">
          <NuxtLink to="/" class="text-base">Home</NuxtLink>
          <NuxtLink to="/product" class="textbase">Products</NuxtLink>
          <NuxtLink to="/cart" class="text-base">Cart</NuxtLink>
          <button class="btn btn-primary text-white ml-4">Login/Sign Up</button>
        </nav>
      </div>
    </div>
  </header>
</template>