import { GraphQLID, GraphQLString } from "graphql";
import { Community } from "../../Entities/Community";
import { GeneralTestSet } from "../../Entities/GeneralTestSet";
import { CommunityType } from "../TypeDefs/Community";
import { GeneralTestSetType } from "../TypeDefs/GeneralTestSet";
import { MessageType } from "../TypeDefs/Messages";

export const CREATE_GENERAL_TEST_SET = {
    type: GeneralTestSetType,
    args: {
        questions: { type: GraphQLString },

    },
    async resolve(parent: any, args: any) {
        const { questions } = args;
        await GeneralTestSet.insert({
            questions
        });
        return args;
    },
};