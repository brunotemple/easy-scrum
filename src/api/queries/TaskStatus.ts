import { gql } from "apollo-boost";

export default gql`
    {
        allTaskStatus {
            id
            title
            order
        }
    }
`;
