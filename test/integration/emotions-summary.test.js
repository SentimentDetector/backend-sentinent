// generate-emotions-summary.test.js
import generateEmotionsSummary from '../../modules/emotion-summary.js';

async function runIntegrationTest() {
    // Exemple de données de post pour le test
    const posts = [
        {
            id: 1,
            message: "This is a happy post.",
        },
        {
            id: 2,
            message: "Feeling sad today.",
        },
        
    ];

    try {
        const result = await generateEmotionsSummary(posts);
        console.log('Résultat de la génération du résumé des émotions :', result);
    } catch (error) {
        console.error('Erreur lors de la génération du résumé des émotions :', error.message);
    }
}

runIntegrationTest();
