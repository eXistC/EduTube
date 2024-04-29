import useSWR from 'swr';
import fetcher from '@/app/libs/fetcher';

const useVideoList = () => {
    const { data, error, isLoading } = useSWR('@/app/api/videos', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};

export default useVideoList;
