import {
	GraphQLObjectType, GraphQLBoolean
} from 'graphql'; 

import {userType} from './user'

export const userpayload = new GraphQLObjectType({
    name: 'UserPayload',
    fields: function () {
        return {
            User: {
                type: userType
            },
            ok: {
                type: GraphQLBoolean
            }
        }
    }
});