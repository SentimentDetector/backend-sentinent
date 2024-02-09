// count-reactions.test.js
import countReactions from '../../modules/count-reactions.js';

async function runIntegrationTest() {
    // Exemple de données de post pour le test
    const posts = [
        {
            like: { summary: { total_count: 5 } },
            love: { summary: { total_count: 3 } },
            haha: { summary: { total_count: 2 } },
            wow: { summary: { total_count: 1 } },
            sad: { summary: { total_count: 0 } },
            angry: { summary: { total_count: 4 } },
        },
    
    ];

    try {
        const result = await countReactions(posts);
        console.log('Résultat du comptage des réactions :', result);
    } catch (error) {
        console.error('Erreur lors du comptage des réactions :', error.message);
    }
}

runIntegrationTest();
