import quotes from '../data/quotes.js';

export const getQuote = (req, res) => {
  const { token, authorId } = req.query;

  if (token && authorId) {
    const authorQuotes = quotes.filter(
      (q) => q.authorId === parseInt(authorId)
    );
    const randomQuote =
      authorQuotes[Math.floor(Math.random() * authorQuotes.length)];

    setTimeout(() => {
      res.json({
        success: true,
        data: randomQuote,
      });
    }, 5000);
  } else {
    res.json({
      success: false,
      data: { message: 'Token and authorId required.' },
    });
  }
};
