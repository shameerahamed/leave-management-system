import {
	GraphQLObjectType, GraphQLBoolean, GraphQLString
} from 'graphql'; 

import {userType} from './user'

export const userPayload = new GraphQLObjectType({
    name: 'UserPayload',
    fields: function () {
        return {
            User: {
                type: userType
            },
            ok: {
                type: GraphQLBoolean
            },
            token: {
                type: GraphQLString
            }
        }
    }
});