import { gql } from "apollo-boost";

export default gql`
    {
        allTasks {
            id
            description
            ownerId
            typeId
            statusId
            number
        }
    }
`;
