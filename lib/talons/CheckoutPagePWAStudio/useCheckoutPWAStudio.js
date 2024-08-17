import { useMemo } from 'react';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import { useQuery } from '@apollo/client';
import DEFAULT_OPERATIONS from './checkoutPWAStudio.gql';

export const useCheckoutPWAStudio = (props = {}) => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getConfigsQuery } = operations;

    const { data, loading, error } = useQuery(getConfigsQuery, {
        fetchPolicy: 'cache-and-network'
    });

    const layout = useMemo(() => {
        if(error)
            return '3columns';

        if (data) {
            const { layouts } = data.checkoutPWAStudio;
            return layouts;
        }
    }, [data]);

    return {
        layout,
        loading
    };
};
