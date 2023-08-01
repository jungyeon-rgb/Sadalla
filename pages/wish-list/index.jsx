import styles from '@/styles/myPage.module.css';
import Image from 'next/image';

export default function wishList() {
  return (
    <>
      <main className={styles.backgroun}>
        <aside>
          <div className={styles.myPageMenu}>
            <div className={styles.cart}>
              <button className={styles.cartBtn}>
                <a href="/my-page">장바구니</a>
              </button>
            </div>
            <div className={styles.wishList}>
              <button className={styles.wishListBtn}>
                <a href="/wish-list">찜 목록</a>
              </button>
            </div>
            <div className={styles.userInfo}>
              <button className={styles.userInfoBtn}>
                <a href="/user-info">정보 수정</a>
              </button>
            </div>
          </div>
        </aside>
        <article>
          <div className={styles.myOrderList}>
            <div className={styles.myOrder}>
              <div>
                <Image
                  className={styles.productImg}
                  src="/img/order/1.jpg"
                  alt="itemSideImg"
                ></Image>
              </div>
              <ul className={styles.orderList}>
                <li>
                  <div className={styles.productName}>
                    사고싶은상품은사고말겠어
                  </div>
                </li>
                <li>
                  <div className={styles.productEa}>1개</div>
                </li>
                <li>
                  <div className={styles.productPrice}>12,456 원</div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
