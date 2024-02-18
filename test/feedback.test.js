import getFeedback from '../modules/feedback.js';

describe('getFeedback', () => {
  test('should generate feedback based on provided reactions summary', async () => {
    // Mock reactions summary
    const reactionsSummary = {
      totalLikes: 10,
      totalLoves: 5,
      totalHahas: 2,
      totalWows: 3,
      totalSads: 1,
      totalAngrys: 0,
    };

    // Call the function
    const result = await getFeedback(reactionsSummary);

    // Assert the output
    expect(result).toEqual({
      totalScore: 24, // (10 * 1) + (5 * 2) + (2 * 1) + (3 * 1) + (1 * -1) + (0 * -2)
      feedback: 'Your sentiment score is influenced by the types and quantity of reactions on your posts. Your positive interactions outweigh the negative ones, your posts are radiating positivity! Your audience loves engaging with your content.'
    });
  });

  test('should generate neutral feedback when total score is 0', async () => {
    const reactionsSummary = {
      totalLikes: 0,
      totalLoves: 0,
      totalHahas: 0,
      totalWows: 3,
      totalSads: 1,
      totalAngrys: 1, // Add a negative reaction to make total score 0
    };
  
    const result = await getFeedback(reactionsSummary);
  
    expect(result).toEqual({
      totalScore: 0,
      feedback: 'Your sentiment score is influenced by the types and quantity of reactions on your posts. You have an equal balance of positive and negative interactions, your posts are maintaining a neutral sentiment. Spice things up with diverse content to keep your audience engaged.'
    });
  });
  
  test('should generate neutral feedback when total score is 0', async () => {
    const reactionsSummary = {
      totalLikes: 0,
      totalLoves: 0,
      totalHahas: 0,
      totalWows: 0,
      totalSads: 1,
      totalAngrys: 1, // Add a negative reaction to make total score 0
    };
  
    const result = await getFeedback(reactionsSummary);
  
    expect(result).toEqual({
      totalScore: -3,
      feedback: 'Your sentiment score is influenced by the types and quantity of reactions on your posts. Negative interactions have a higher impact, some of your posts may be causing concern. Consider addressing any issues and fostering a more positive community.'
    });
  });
});
