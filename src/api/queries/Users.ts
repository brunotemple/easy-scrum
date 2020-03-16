import { gql } from "apollo-boost";

export default gql`
    {
        allUsers {
            id
            firstName
            lastName
        }
    }
`;
