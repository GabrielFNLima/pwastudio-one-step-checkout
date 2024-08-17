import { gql } from '@apollo/client';

export const GET_CONFIGS_QUERY = gql`
    query getConfigsCheckoutPWAStudio {
        checkoutPWAStudio {
            layouts
        }
    }
`;

export default {
    getConfigsQuery: GET_CONFIGS_QUERY
};
