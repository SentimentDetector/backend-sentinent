// get-posts-selected.test.js
import getPostSelected from '../../modules/get-posts-selected.js';

async function runIntegrationTest() {
    const userId = 'YOUR_USER_ID';
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const limit = 10;

    try {
        const result = await getPostSelected(userId, accessToken, limit);
        console.log('Résultat de la récupération des posts sélectionnés :', result);
    } catch (error) {
        console.error('Erreur lors de la récupération des posts sélectionnés :', error.message);
    }
}

runIntegrationTest();
