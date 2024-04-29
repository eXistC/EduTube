import useSWR from 'swr';
import fetcher from '@/app/libs/fetcher';

const useVideoList = () => {
    const { data, error, isLoading } = useSWR('/api/videos', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {
        data,
        error,
        isLoading
    }
};

export default useVideoList;
