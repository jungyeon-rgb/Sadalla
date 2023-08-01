import styles from '@/styles/userInfo.module.css';
import Checkbox from '@/components/forms/Checkbox';

export default function userInfo() {
  return (
    <>
      <main>
        <div className={styles.userInfo}>
          <div className={styles.renewInfo}>회원정보 수정</div>
          <div className={styles.userInfoWarp}>
            <div className={styles.userInfoView}>회원정보</div>
            <div className={styles.renewUserInfo}>
              <div className={styles.userName}>이름</div>
              <div className={styles.userPhone}>전화번호</div>
              <div className={styles.userAddress}>주소</div>
              <div className={styles.userEmail}>이메일</div>
            </div>
            <div className={styles.userAgree}>
              <div className={styles.email}>
                이메일 수신에 동의하시겠습니까?
              </div>
              <div className={styles.email}>문자 수신에 동의하시겠습니까?</div>
              <div className={styles.email}>
                개인정보 수집에 동의하시겠습니까?
              </div>
            </div>
            <div className={styles.deletUser}>회원탈퇴하시겠습니까?</div>
            <div className={styles.button}>
              <button>수정하기</button>
              <button>취소</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
