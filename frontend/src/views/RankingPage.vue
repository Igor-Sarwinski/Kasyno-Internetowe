<script setup>
import { onMounted, ref } from 'vue'
import PopupUser from '@/components/PopupUser.vue'
import { getTopUsers } from '@/utils/utils.js'
const users = ref([])

onMounted(async () => {
  users.value = await getTopUsers()
})

const selectedUser = ref(null)
const showPopup = ref(false)
const button = ref(false)
const openPopup = (user) => {
  selectedUser.value = user
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
  selectedUser.value = null
}
const showButton = () => {
  button.value = true
}
const hideButton = () => {
  button.value = false
}
</script>

<template>
  <div class="ranking">
    <table class="ranking__table">
      <tr class="ranking__table-headers">
        <th class="ranking__table-header">Lp.</th>
        <th class="ranking__table-header">Użytkownik</th>
        <th class="ranking__table-header">Saldo</th>
        <th class="ranking__table-header">Ilość wygranych</th>
        <th v-if="button" class="ranking__table-header">Akcje</th>
      </tr>

      <tr
        @mouseleave="hideButton"
        @mouseenter="showButton"
        @click="openPopup(user)"
        v-for="(user, index) in users"
        :key="user._id"
        class="ranking__table-users"
      >
        <td class="ranking__table-user">{{ index + 1 }}</td>
        <td class="ranking__table-user">{{ user?.name }} {{ user?.surname }}</td>
        <td class="ranking__table-user">{{ user?.money }}</td>
        <td class="ranking__table-user">{{ user?.wins }}</td>
        <td v-if="button" class="ranking__table-user ranking__table-user-button">Zobacz</td>
      </tr>
      <PopupUser :user="selectedUser" :visible="showPopup" @close="closePopup" />
    </table>
  </div>
</template>
