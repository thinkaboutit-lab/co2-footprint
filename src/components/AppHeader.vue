<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div class="container">

        <!-- Logo + Titel -->
        <RouterLink
            to="/"
            class="navbar-brand d-flex align-items-center gap-3"
        >
          <img
              :src="logo"
              alt="CO₂ Footprint Logo"
              class="logo"
          />

          <div>
            <div class="fw-bold fs-5">
              CO₂ Footprint
            </div>

            <small class="text-light opacity-75">
              Transparenz von CO₂-Emissionen
            </small>
          </div>
        </RouterLink>

        <!-- Burger-Menü -->
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Navigation öffnen"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation -->
        <div
            class="collapse navbar-collapse"
            id="navbar"
        >
          <ul class="navbar-nav ms-auto">

            <li class="nav-item">
              <RouterLink
                  to="/"
                  class="nav-link"
                  active-class="active"
              >
                <i class="bi bi-house-door me-1"></i>
                Home
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink
                  to="/about"
                  class="nav-link"
                  active-class="active"
              >
                <i class="bi bi-info-circle me-1"></i>
                Über das Projekt
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink
                  to="/legal"
                  class="nav-link"
                  active-class="active"
              >
                <i class="bi bi-file-earmark-text me-1"></i>
                Impressum
              </RouterLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logo from '../assets/images/logo.svg'
</script>

<style scoped>
.logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.navbar-brand {
  text-decoration: none;
}

.nav-link {
  font-weight: 500;
}

.nav-link.active {
  font-weight: 700;
}
</style>