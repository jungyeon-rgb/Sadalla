import Image from 'next/image';
export default function ProductContentHeader({ title, image }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
