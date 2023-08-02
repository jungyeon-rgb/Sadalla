export default function handler(req, res) {
  const productId = req.query.id;
  res.status(200).json({
    id: productId,
    title: '라이언스티커',
    price: 1000,
    maker: '카카오',
    content: '카카오 라이언 띠부띠부씰!',
    image: 'https://picsum.photos/500',
  });
}
