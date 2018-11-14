import {
	GraphQLObjectType, GraphQLString, GraphQLBoolean
} from 'graphql'; 

import {adminuserType} from './adminuser'

export const authPayload = new GraphQLObjectType({
    name: 'AuthPayload',
    fields: function () {
        return {
            token: {
                type: GraphQLString
            },
            ok: {
                type: GraphQLBoolean
            },
            Admin: {
                type: adminuserType
            }
        }
    }
});