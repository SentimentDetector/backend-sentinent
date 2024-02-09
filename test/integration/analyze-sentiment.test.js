import analyzeSentiment from '../../modules/analyze-sentiment.js';

async function runIntegrationTest() {
    const userId = '7434017759995896';
    const accessToken = 'EAAK6JJwmFl4BO69SipI8UrP7nP9eiNyCsLZArZCeNZCh1OCGQeL2ZAYYZAVVdyUnlbUZCcuIxy5cu6RIFvd6ymizhoP9vtbncOWa6JU1K5Mt4vb7gtPCaYQWIMRdVvhb0sKYHGrTLZBl200lG3aUETwkTT1uXYRunp0ZAQdFU1Xh2aScY5haQC44OjmuZCAZDZD';
    const limit = 10; // Ou la limite que vous souhaitez tester

    try {
        const result = await analyzeSentiment(userId, accessToken, limit);
        console.log('Résultat de l\'analyse de sentiment :', result);
    } catch (error) {
        console.error('Erreur lors de l\'analyse de sentiment :', error.message);
    }
}

runIntegrationTest();
