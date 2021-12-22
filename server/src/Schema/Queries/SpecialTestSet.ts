import { GraphQLList } from "graphql";
import { SpecialTestSetType } from "../TypeDefs/SpecialTestSet";
import { SpecialTestSet } from "../../Entities/SpecialTestSet";

export const GET_SPECIAL_TEST_SETS = {
    type: new GraphQLList(SpecialTestSetType),
    async resolve() {
        let a = await SpecialTestSet.find()
        return a?.map(item => {
            return {
                ...item,
                questions: JSON.stringify(item?.questions),
            }
        })
    },
};
