import {hello} from "./hello"

export const workflowSettings = {
    id: 'addUserTokenClaim',
    trigger: 'user:tokens_generation',
    bindings: {
        console: {},
        'kinde.fetch': {},
        'kinde.idToken': {
            resetClaims: true
        },
        'kinde.accessToken': {
            resetClaims: true
        }
    }
};

export default {
    async handle(event: any) {
        kinde.idToken.setCustomClaim('random', 'test');
        return 'testing add user token claim';
    },

}
