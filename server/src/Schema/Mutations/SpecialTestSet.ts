import { GraphQLID, GraphQLString } from "graphql";
import { Community } from "../../Entities/Community";
import { SpecialTestSet } from "../../Entities/SpecialTestSet";
import { SpecialTestSetType } from "../TypeDefs/SpecialTestSet";

export const CREATE_SPECIAL_TEST_SET = {
    type: SpecialTestSetType,
    args: {
        questions: { type: GraphQLString },
        program: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { questions, program } = args;
        await SpecialTestSet.insert({
            questions,
            program
        });
        return args;
    },
};

export const EDIT_SPECIAL_TEST_SET = {
    type: SpecialTestSetType,
    args: {
        questions: { type: GraphQLString },
        id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const { questions, id } = args;
        await SpecialTestSet.update({ id: id }, { questions: questions });
        return args;
    },
};