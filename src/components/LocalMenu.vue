<template>
  <nav class="local-menu" aria-label="Navigation innerhalb der Seite">

    <div class="local-menu__title text-uppercase text-muted fw-semibold">
      Auf dieser Seite
    </div>

    <ul class="nav flex-column">

      <li
          v-for="link in links"
          :key="link.href"
          class="nav-item"
      >
        <a
            class="nav-link px-0"
            :href="link.href"
        >
          <i :class="link.icon" class="me-2"></i>{{ link.label }}
        </a>
      </li>

    </ul>

  </nav>
</template>

<script setup lang="ts">
// Lokale Links auf Abschnitte der aktuellen Seite.
const links = [
  { href: '#uebersicht', label: 'Übersicht', icon: 'bi bi-info-circle' },
  { href: '#filter', label: 'Filter & Suche', icon: 'bi bi-funnel' },
  { href: '#tabelle', label: 'Emissionsdaten', icon: 'bi bi-table' },
]
</script>

<style scoped>
.local-menu {
  position: sticky;
  top: 1rem;
  border-inline-start: 3px solid #198754;
  padding-inline-start: 1rem;
}

.local-menu__title {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.local-menu .nav-link {
  color: #495057;
  text-align: start;
}

.local-menu .nav-link:hover,
.local-menu .nav-link:focus {
  color: #198754;
}
</style>
