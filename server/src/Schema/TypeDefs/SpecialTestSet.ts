import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const SpecialTestSetType = new GraphQLObjectType({
    name: "SpecialTestSet",
    fields: () => ({
        id: { type: GraphQLID },
        questions: { type: GraphQLString },
        program: { type: GraphQLString },
    }),
});
