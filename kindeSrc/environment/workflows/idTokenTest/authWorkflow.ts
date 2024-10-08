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
         const timeResponse = await kinde.fetch(
              'https://api.stakesocial.com/v1/get_sports',
              {
                method: 'GET',
                responseFormat: 'json'
              }
        );
        
        console.log('timeResponse', timeResponse.json.data);
        kinde.idToken.setCustomClaim('sport', timeResponse.json.data[0].name);
        
        return 'testing add user token claim';
    },

}
