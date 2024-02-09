import getFeedback from '../../modules/feedback.js';

async function runIntegrationTest() {
    const reactionsSummary = {
        totalLikes: 5,
        totalLoves: 3,
        totalHahas: 2,
        totalWows: 1,
        totalSads: 0,
        totalAngrys: 4,
    };

    try {
        const result = await getFeedback(reactionsSummary);
        console.log('Résultat de la génération du feedback :', result);
    } catch (error) {
        console.error('Erreur lors de la génération du feedback :', error.message);
    }
}

runIntegrationTest();
