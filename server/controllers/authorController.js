import authors from '../data/authors.js';

export const getAuthor = (req, res) => {
  const { token } = req.query;

  if (token) {
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    setTimeout(() => {
      res.json({
        success: true,
        data: randomAuthor,
      });
    }, 5000);
  } else {
    res.json({
      success: false,
      data: { message: 'Token required.' },
    });
  }
};
