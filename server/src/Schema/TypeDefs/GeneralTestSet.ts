import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const GeneralTestSetType = new GraphQLObjectType({
    name: "GeneralTestSet",
    fields: () => ({
        id: { type: GraphQLID },
        questions: { type: GraphQLString },

    }),
});
