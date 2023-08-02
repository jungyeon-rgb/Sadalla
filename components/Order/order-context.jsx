import { useState } from 'react';
import classes from './order-context.styles';

export default function OrderList() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '상품1',
      count: 2,
      price: 10000,
      totalPrice: 20000,
    },
    {
      id: 2,
      name: '상품2',
      count: 5,
      price: 1000,
      totalPrice: 20000,
    },
    // 아래의 더미데이터로 쓸 수 있나요?
  ]);

  function handleCheckboxChange(event) {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedIds([...selectedIds, value]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== value));
    }
  }

  function handleDelete() {
    const newCartItems = cartItems.filter(
      (item) => !selectedIds.includes(item.id.toString()),
    );
    setCartItems(newCartItems);
    setSelectedIds([]);
  }

  function updateCartItem(id, count) {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count, totalPrice: count * item.price };
      }
      return item;
    });
    setCartItems(newCartItems);
  }

  return (
    <div>
      <h3>주문 목록</h3>

      <table>
        <thead>
          <tr>
            <th>선택</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>총 가격</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked="checked"
                  value={item.id}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  value={item.count}
                  onChange={(e) => updateCartItem(item.id, e.target.value)}
                />
              </td>
              <td>{item.price}</td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDelete}>선택 삭제</button>
    </div>
  );
}

export async function getServerSideProps() {
  // API를 호출해서 상품 데이터를 가져오는 경우
  // const res = await fetch("http://localhost:3000/api/products");
  // const products = await res.json();

  // 임시 데이터로 대체
  const DUMMY_PRODUCT = [
    {
      id: 100,
      title: 'Products 1',
      image: 'https://picsum.photos/500',
      price: 1000,
      slug: 'product-1',
      content: '# 완전 멋진 물건이다',
      maker: '경은문구사',
    },
    {
      id: 1,
      title: 'Products 1',
      image: 'https://picsum.photos/500',
      price: 1000,
      slug: 'product-1',
    },
    {
      id: 2,
      title: 'Products 2',
      image: 'https://picsum.photos/500',
      price: 2000,
      slug: 'product-2',
    },
    {
      id: 3,
      title: 'Products 3',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      id: 4,
      title: 'Products 4',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      id: 5,
      title: 'Products 5',
      image: 'https://picsum.photos/500',
      price: 7777,
      slug: 'product-3',
    },
    {
      id: 6,
      title: 'Products 6',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      id: 7,
      title: 'Products 7',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      id: 8,
      title: 'Products 8',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      title: 'Products 9',
      image: 'https://picsum.photos/500',
      price: 2000,
      slug: 'product-3',
    },
    {
      id: 9,
      title: 'Products 10',
      image: 'https://picsum.photos/500',
      price: 1000,
      slug: 'product-3',
    },
  ];

  return {
    props: {
      product: DUMMY_PRODUCT,
    },
  };
}
