import analyzeSentiment from '../../modules/analyze-sentiment.js';

async function runIntegrationTest() {
    const userId = 'Id token';
    const accessToken = 'access token';
    const limit = 10; // Ou la limite que vous souhaitez tester

    try {
        const result = await analyzeSentiment(userId, accessToken, limit);
        console.log('Résultat de l\'analyse de sentiment :', result);
    } catch (error) {
        console.error('Erreur lors de l\'analyse de sentiment :', error.message);
    }
}

runIntegrationTest();
