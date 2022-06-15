import { useLocation, useParams } from 'react-router-dom';

export const useBasePath = () => {
    const location = useLocation();
    const params = useParams<Record<string, string>>();

    const pathname = Object.values(params).reduce((path: any, param) => path.replace(`/${param}`, ''), location.pathname);

    return {
        pathname,
        getFluxPath: (fluxItem: { id: number | null }) => `${pathname}${fluxItem ? `/${fluxItem.id}` : ''}`,
    };
};

export default useBasePath;
