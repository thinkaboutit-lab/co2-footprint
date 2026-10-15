<template>

  <div class="row g-3 mb-4">

    <div class="col-md-3">

      <input
          v-model="countrySearch"
          class="form-control"
          placeholder="Land suchen..."
      >

    </div>

    <div class="col-md-3">

      <select
          v-model="countryFilter"
          class="form-select"
      >

        <option value="">Alle Länder</option>

        <option
            v-for="country in countries"
            :key="country"
            :value="country"
        >
          {{ country }}
        </option>

      </select>

    </div>

    <div class="col-md-3">

      <input
          v-model="companySearch"
          class="form-control"
          placeholder="Unternehmen suchen..."
      >

    </div>

    <div class="col-md-3">

      <select
          v-model="companyFilter"
          class="form-select"
      >

        <option value="">Alle Unternehmen</option>

        <option
            v-for="company in companies"
            :key="company"
            :value="company"
        >
          {{ company }}
        </option>

      </select>

    </div>

  </div>

</template>

<script setup lang="ts">

const countrySearch = defineModel<string>('countrySearch', {
  default: ''
})

const companySearch = defineModel<string>('companySearch', {
  default: ''
})

const countryFilter = defineModel<string>('countryFilter', {
  default: ''
})

const companyFilter = defineModel<string>('companyFilter', {
  default: ''
})

defineProps<{
  countries: string[]
  companies: string[]
}>()

</script>