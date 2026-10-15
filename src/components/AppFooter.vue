<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-light border-top mt-5">
    <div class="container py-4">

      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

        <div class="text-muted small text-center text-md-start">
          © 2026 CO₂ Footprint · Alle dargestellten Daten sind fiktiv und dienen
          ausschließlich Demonstrationszwecken.
        </div>

        <nav aria-label="Rechtliche Hinweise">
          <RouterLink
              to="/legal"
              class="link-secondary text-decoration-none small me-3"
          >
            Impressum
          </RouterLink>

          <RouterLink
              to="/about"
              class="link-secondary text-decoration-none small"
          >
            Über das Projekt
          </RouterLink>
        </nav>

      </div>

    </div>
  </footer>
</template>
