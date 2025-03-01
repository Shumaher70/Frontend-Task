export const getInfo = (req, res) => {
  const info =
    'Welcome to Tech Innovations Inc. We specialize in cutting-edge software solutions for businesses of all sizes. Our team of experts is dedicated to helping companies improve their digital presence and operational efficiency. With over 10 years of experience, we provide tailored solutions to meet the unique needs of each client. Explore our services and discover how we can help your business grow!';

  res.json({
    success: true,
    data: {
      info,
    },
  });
};
