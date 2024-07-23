import { useRouter } from 'vue-router';
export const useLogout = () => {
    const router = useRouter();
    return () => {
        localStorage.removeItem('id');
        localStorage.removeItem('user');
        router.push('/');
    };
};

