import { useRouter } from 'vue-router';
export const useLogout = () => {
    const router = useRouter();
    return () => {
        localStorage.removeItem('id');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        router.push('/');
    };
};

