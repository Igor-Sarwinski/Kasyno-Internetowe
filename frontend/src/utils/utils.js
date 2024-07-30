import { useRouter } from 'vue-router';
import {ref} from 'vue';
import axios from 'axios'
export const useLogout = () => {
    const router = useRouter();
    return () => {
        localStorage.removeItem('id');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        router.push('/');
    };
};
export const setUserMoney = async (value) => {
    const id = ref('')
    id.value = localStorage.getItem('token');
    try {
        const response = await axios.put(`/api/users/${id.value}/money`, {money: value})
        console.log(response.data);
    }catch(err){
        console.log(err);
    }
};
export const setUserWins = async (value) => {
    const id = ref('')
    id.value = localStorage.getItem('token');
    try {
        const response = await axios.put(`/api/users/${id.value}/wins`, {wins: value})
        console.log(response.data);
    }catch(err){
        console.log(err);
    }
};
export const fetchUser = async () => {
    const id = ref('')
    id.value = localStorage.getItem('token');
    try {
        const response = await axios.get(`/api/user/${id.value}`)
        console.log(response.data);
        return (response.data);
    }catch(err){
        console.log(err);
    }

};

