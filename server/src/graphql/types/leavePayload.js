import {
	GraphQLObjectType, GraphQLString, GraphQLBoolean
} from 'graphql'; 

export const leavePayload = new GraphQLObjectType({
    name: 'LeavePayload',
    fields: function () {
        return {
            message: {
                type: GraphQLString
            },
            ok: {
                type: GraphQLBoolean
            }
        }
    }
});