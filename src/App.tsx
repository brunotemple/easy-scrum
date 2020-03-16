import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { GraphQLClient } from "./api/graphQL-client";
import Board from "./components/board/Board";

function App() {
    return (
        <ApolloProvider client={GraphQLClient}>
            <Board />
        </ApolloProvider>
    );
}

export default App;
