export default function handler(req, res) {
  return res.status(200).json({ greet: '안녕하세요? welcome API 입니다.' });
}
