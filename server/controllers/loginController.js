const users = [
  {
    email: 'aleksei@example.com',
    password: 'lkJlkn8hj',
    token: 'fb566635a66295da0c8ad3f467c32dcf',
  },
];

export const login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return res.json({
      success: true,
      data: { token: user.token },
    });
  } else {
    return res.json({
      success: false,
      data: { message: 'Invalid credentials.' },
    });
  }
};
