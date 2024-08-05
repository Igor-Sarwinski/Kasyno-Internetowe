import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
export const useLogout = () => {
  const router = useRouter()
  return () => {
    localStorage.removeItem('token')
    router.push('/')
  }
}
export const setUserMoney = async (value) => {
  const id = ref('')
  id.value = localStorage.getItem('token')
  try {
    await axios.put(`/api/users/${id.value}/money`, { money: value })
  } catch (err) {
    console.log(err)
  }
}
export const setUserWins = async (value) => {
  const id = ref('')
  id.value = localStorage.getItem('token')
  try {
    await axios.put(`/api/users/${id.value}/wins`, { wins: value })
  } catch (err) {
    console.log(err)
  }
}
export const fetchUser = async () => {
  const id = ref('')
  id.value = localStorage.getItem('token')
  try {
    const response = await axios.get(`/api/user/${id.value}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
}
export const getTopUsers = async () => {
  try {
    const response = await axios.get('/api/top-users')
    return response.data
  } catch (err) {
    console.log(err)
  }
}
export const addUserMoney = async (value) => {
  const user = await fetchUser()
  try {
    await setUserMoney(user.money + value)
    await setUserWins(user.wins + 1)
  } catch (err) {
    console.log(err)
  }
}
export const removeUserMoney = async (value) => {
  const user = await fetchUser()
  try {
    await setUserMoney(user.money - value)
  } catch (err) {
    console.log(err)
  }
}
