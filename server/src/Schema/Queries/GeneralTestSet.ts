import { GraphQLList } from "graphql";
import { GeneralTestSetType } from "../TypeDefs/GeneralTestSet";
import { GeneralTestSet } from "../../Entities/GeneralTestSet";

export const GET_GENERAL_TEST_SETS = {
    type: new GraphQLList(GeneralTestSetType),
    async resolve() {
        let a = await GeneralTestSet.find()
        return a?.map(item => {
            return {
                ...item,
                questions: JSON.stringify(item?.questions)
            }
        })
    },
};
