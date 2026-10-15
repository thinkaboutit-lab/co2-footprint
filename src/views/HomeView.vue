<template>
  <div class="d-flex flex-column flex-lg-row gap-4">

    <!-- Lokales Menü: links (LTR) bzw. rechts (RTL) durch dir am <html> -->
    <aside class="local-menu-wrap">
      <LocalMenu />
    </aside>

    <div class="flex-grow-1 content-col">

      <!-- Übersicht / Hero -->
      <section id="uebersicht" class="bg-light rounded-4 p-5 mb-5 shadow-sm">
        <div class="row align-items-center">

          <div class="col-lg-8">
            <h1 class="display-5 fw-bold text-success">
              CO₂ Footprint Dashboard
            </h1>

            <p class="lead mt-3">
              Diese Webanwendung visualisiert fiktive CO₂-Emissionsdaten von Ländern
              und Unternehmen. Die Daten können durchsucht, gefiltert und sortiert werden.
            </p>

            <div class="mt-4">
              <span class="badge bg-success me-2">Länder</span>
              <span class="badge bg-primary me-2">Unternehmen</span>
              <span class="badge bg-dark">CO₂-Daten</span>
            </div>

          </div>

          <div class="col-lg-4 text-center">
            <i class="bi bi-globe-americas display-1 text-success"></i>
          </div>

        </div>
      </section>

      <!-- Filter -->
      <section id="filter">
        <FilterBar
            v-model:countrySearch="countrySearch"
            v-model:countryFilter="countryFilter"
            v-model:companySearch="companySearch"
            v-model:companyFilter="companyFilter"
            :countries="countries"
            :companies="companies"
        />
      </section>

      <!-- Tabelle -->
      <section id="tabelle">
        <Co2Table
            :entries="filteredData"
            :sort-column="sortColumn"
            :sort-direction="sortDirection"
            @sort="sortBy"
        />
      </section>

    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import FilterBar from '../components/FilterBar.vue'
import Co2Table from '../components/Co2Table.vue'
import LocalMenu from '../components/LocalMenu.vue'

import { co2Data } from '../data/co2Data'

const countrySearch = ref('')
const companySearch = ref('')

const countryFilter = ref('')
const companyFilter = ref('')

const sortColumn = ref<'country' | 'company' | 'emissions' | 'year'>('country')
const sortDirection = ref<'asc' | 'desc'>('asc')

const countries = [...new Set(co2Data.map(entry => entry.country))].sort()
const companies = [...new Set(co2Data.map(entry => entry.company))].sort()

function sortBy(column: 'country' | 'company' | 'emissions' | 'year') {

  if (sortColumn.value === column) {
    sortDirection.value =
        sortDirection.value === 'asc'
            ? 'desc'
            : 'asc'
  } else {
    sortColumn.value = column
    sortDirection.value = 'asc'
  }

}

const filteredData = computed(() => {

  const filtered = co2Data.filter(entry => {

    const matchesCountrySearch =
        entry.country
            .toLowerCase()
            .includes(countrySearch.value.toLowerCase())

    const matchesCompanySearch =
        entry.company
            .toLowerCase()
            .includes(companySearch.value.toLowerCase())

    const matchesCountryFilter =
        countryFilter.value === '' ||
        entry.country === countryFilter.value

    const matchesCompanyFilter =
        companyFilter.value === '' ||
        entry.company === companyFilter.value

    return (
        matchesCountrySearch &&
        matchesCompanySearch &&
        matchesCountryFilter &&
        matchesCompanyFilter
    )

  })

  return filtered.sort((a, b) => {

    const direction =
        sortDirection.value === 'asc'
            ? 1
            : -1

    switch (sortColumn.value) {

      case 'country':
        return a.country.localeCompare(b.country) * direction

      case 'company':
        return a.company.localeCompare(b.company) * direction

      case 'emissions':
        return (a.emissions - b.emissions) * direction

      case 'year':
        return (a.year - b.year) * direction

      default:
        return 0

    }

  })

})
</script>

<style scoped>
.local-menu-wrap {
  flex: 0 0 auto;
}

@media (min-width: 992px) {
  .local-menu-wrap {
    width: 200px;
  }
}

.content-col {
  min-width: 0;
}

section[id] {
  scroll-margin-top: 1rem;
}

#uebersicht {
  border: 1px solid #dee2e6;
}

.badge {
  font-size: 0.9rem;
}

.display-1 {
  font-size: 7rem;
}
</style>