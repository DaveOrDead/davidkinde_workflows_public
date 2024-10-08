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
        'https://worldtimeapi.org/api/timezone/Etc/UTC',
        {
            method: 'GET',
            responseFormat: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    console.log('timeResponse', timeResponse.json);
        kinde.idToken.setCustomClaim('time', timeResponse.json);
        
        return 'testing add user token claim';
    },

}
