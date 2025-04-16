<template>
  <header class="header">
    <RouterLink class="header__logo" :to="{name: 'home'}">Mon site</RouterLink>
    <nav>
      <RouterLink :to="{name: 'posts.index'}">Blog</RouterLink>
      <RouterLink :to="{name: 'contact'}">Contact</RouterLink>
    </nav>
  </header>
</template>

<script setup>

</script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: .5rem 1rem;
  gap: 1rem;
  background: #ffffff10;
  border-bottom: 1px solid #ffffff2d;
}

.header a {
  text-decoration: none;
  color: inherit;
}

.header nav {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.header__logo {
  font-size: 1.4rem;
}
</style>