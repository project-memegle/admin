import { get } from '../utils/API/fetcher';
import { CategoryResultSectionDTO } from '../services/dto/ResultDto';
import { handleApiError } from '../utils/API/handleApiError';
import { AxiosError } from 'axios';

export const GET_CAGEGORY_LIST_URL = '/categories';
interface GetCategoryListParams<T> {
    setLoading: (loading: boolean) => void;
    setResultData: (data: T) => void;
    setError: (error: string | null) => void;
}

export async function getCategorylist({
    setLoading,
    setResultData,
    setError,
}: GetCategoryListParams<CategoryResultSectionDTO>) {
    setLoading(true);

    try {
        const queryParams = 'POPULARITY';
        const response = await get<CategoryResultSectionDTO>(
            GET_CAGEGORY_LIST_URL,
            { params: { criteria: queryParams } }
        );

        setResultData(response.data);
    } catch (error) {
        console.error('Error fetching categories:', error);
        handleApiError(error as AxiosError, setError);
    } finally {
        setLoading(false);
    }
}
