import { gql } from "apollo-boost";

export default gql`
    {
        allTaskType {
            id
            title
        }
    }
`;
