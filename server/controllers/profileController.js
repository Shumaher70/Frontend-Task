export const getProfile = (req, res) => {
  const { token } = req.query;

  if (token) {
    return res.json({
      success: true,
      data: { fullname: 'Aleksei K', email: 'aleksei@example.com' },
    });
  } else {
    return res.json({
      success: false,
      data: { message: 'Token required.' },
    });
  }
};
