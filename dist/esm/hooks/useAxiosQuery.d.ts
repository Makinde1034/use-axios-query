import { Method } from "axios";
type useQueryProps<T> = {
    method?: Method;
    data?: T;
    url?: string;
    fetchOnMount?: boolean;
};
export declare const useQuery: <T, R>(props: useQueryProps<T>) => {
    requestHandler: () => Promise<void>;
    loading: boolean;
    error: null;
    response: R | undefined;
};
export {};
