<template>

  <div class="table-responsive">

    <table class="table table-striped table-hover align-middle">

      <thead class="table-success">

      <tr>

        <th
            @click="emit('sort', 'country')"
            class="sortable"
        >
          Land

          <i
              v-if="sortColumn === 'country'"
              :class="sortDirection === 'asc'
                ? 'bi bi-caret-up-fill text-success'
                : 'bi bi-caret-down-fill text-success'"
          ></i>

          <i
              v-else
              class="bi bi-arrow-down-up text-secondary"
          ></i>

        </th>

        <th
            @click="emit('sort', 'company')"
            class="sortable"
        >
          Unternehmen

          <i
              v-if="sortColumn === 'company'"
              :class="sortDirection === 'asc'
                ? 'bi bi-caret-up-fill text-success'
                : 'bi bi-caret-down-fill text-success'"
          ></i>

          <i
              v-else
              class="bi bi-arrow-down-up text-secondary"
          ></i>

        </th>

        <th
            @click="emit('sort', 'emissions')"
            class="sortable"
        >
          Emissionen

          <i
              v-if="sortColumn === 'emissions'"
              :class="sortDirection === 'asc'
                ? 'bi bi-caret-up-fill text-success'
                : 'bi bi-caret-down-fill text-success'"
          ></i>

          <i
              v-else
              class="bi bi-arrow-down-up text-secondary"
          ></i>

        </th>

        <th
            @click="emit('sort', 'year')"
            class="sortable"
        >
          Jahr

          <i
              v-if="sortColumn === 'year'"
              :class="sortDirection === 'asc'
                ? 'bi bi-caret-up-fill text-success'
                : 'bi bi-caret-down-fill text-success'"
          ></i>

          <i
              v-else
              class="bi bi-arrow-down-up text-secondary"
          ></i>

        </th>

      </tr>

      </thead>

      <tbody>

      <tr
          v-for="entry in entries"
          :key="entry.country + entry.company"
      >
        <td>{{ entry.country }}</td>
        <td>{{ entry.company }}</td>
        <td>

          <span
              class="badge"
              :class="entry.emissions > 500
                  ? 'bg-danger'
                  : entry.emissions > 250
                      ? 'bg-warning text-dark'
                      : 'bg-success'"
          >
              {{ entry.emissions }}
          </span>

        </td>
        <td>
          {{ entry.year }}
        </td>
      </tr>

      <tr v-if="entries.length === 0">
        <td colspan="4" class="text-center text-muted py-4">
          Keine Einträge gefunden.
        </td>
      </tr>

      </tbody>

    </table>

  </div>

</template>

<script setup lang="ts">
import type { Co2Entry } from '../types/Co2Entry'

defineProps<{

  entries: Co2Entry[]
  sortColumn: string
  sortDirection: string

}>()

const emit = defineEmits<{

  (e: 'sort', column: 'country' | 'company' | 'emissions' | 'year'): void

}>()
</script>

<style scoped>

.sortable{

  cursor:pointer;
  user-select:none;
  transition:.2s;

}

.sortable:hover{

  background:#d1e7dd;

}

i{

  margin-left:6px;

}

.table tbody tr:hover {
  transform: scale(1.01);
  transition: .2s;
}

.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color .2s;
  white-space: nowrap;
}

.sortable:hover {
  background-color: #d1e7dd;
}

.sortable i {
  margin-left: 6px;
  font-size: .9rem;
}

.table tbody tr {
  transition: transform .15s ease;
}

.table tbody tr:hover {
  transform: scale(1.01);
}

</style>