import styles from "@/styles/myPage.module.css";
import Link from "next/link";
import React from "react";
import Counter from "@/components/events/Counter";
import Checkbox from "@/components/forms/Checkbox";
import Image from "next/image";

export default function myPage() {
  return (
    <>
      <main className={styles.backgroun}>
        <aside>
          <div className={styles.myPageMenu}>
            <div className={styles.cart}>
              <button className={styles.cartBtn}>
                <Link href="/my-page">장바구니</Link>
              </button>
            </div>
            <div className={styles.wishList}>
              <button className={styles.wishListBtn}>
                <Link href="/wish-list">찜 목록</Link>
              </button>
            </div>
            <div className={styles.userInfo}>
              <button className={styles.userInfoBtn}>
                <Link href="/user-info">정보 수정</Link>
              </button>
            </div>
          </div>
        </aside>
        <article>
          <div className={styles.myOrderList}>
            <div className={styles.myOrder}>
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
              <div>
                <a href="/">
                  <Image
                    className={styles.productImg}
                    src="/img/order/1.jpg"
                    alt="itemSideImg"
                    width={200}
                    height={200}
                  ></Image>
                </a>
              </div>
              <ul className={styles.orderList}>
                <li>
                  <div className={styles.productName}>
                    사고싶은상품은사고말겠어
                  </div>
                </li>
                <li>
                  <div className={styles.productEa}>
                    <Counter />
                  </div>
                </li>
                <li>
                  <div className={styles.productPrice}>3,000 원</div>
                </li>
                <li>
                  <button className={styles.productDel}>삭제</button>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.finOrder}>
            <div className={styles.totalProduct}>
              <div className={styles.toPro1}>총</div>
              <div className={styles.toPro2}>1개</div>
            </div>
            <div className={styles.totalPrice}>
              <div className={styles.toPri1}>최종금액</div>
              <div className={styles.toPri2}>3,000 원</div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

function Remove() {
  return (
    // https://velog.io/@ewon20/1-5-React-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0
    <>
      <button>삭제</button>
    </>
  );
}
