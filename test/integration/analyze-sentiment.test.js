import analyzeSentiment from '../modules/analyze-sentiment';
import getPosts from '../modules/get-posts-selected';
import processReactions from '../modules/count-reactions';
import getFeedback from '../modules/feedback';
import generateEmotionsSummary from '../modules/emotion-summary';

// Mocking the dependencies
jest.mock('../modules/get-posts-selected');
jest.mock('../modules/count-reactions');
jest.mock('../modules/feedback');
jest.mock('../modules/emotion-summary');

describe('analyzeSentiment', () => {
  it('should analyze sentiment correctly', async () => {
    // Mock data for dependencies
   
getPosts.mockResolvedValue({ data: [{ postId: 1, content: 'Mock post 1' }, { postId: 2, content: 'Mock post 2' }] });
processReactions.mockResolvedValue({ reactions: { like: 5, love: 3, laugh: 2 } });
getFeedback.mockResolvedValue({ feedback: 'Positive' });
generateEmotionsSummary.mockResolvedValue({ emotions: { happy: 10, sad: 2, neutral: 5 } });


    // Call the function and get the result
    const result = await analyzeSentiment('userId', 'accessToken', 10);

    // Assert the expected result
    expect(result).toEqual({
        reactionsSummary: { like: 5, love: 3, laugh: 2 },
        feedback: { feedback: 'Positive' }, 
        emotionsSummary: { happy: 10, sad: 2, neutral: 5 }, 
    });
  });
});