<template>
  <header class="header">
    <a class="header__logo" href="#">Mon site</a>
    <nav>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
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