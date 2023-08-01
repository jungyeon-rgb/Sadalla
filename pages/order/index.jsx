import { useState } from "react";
import { useRouter } from "next/router";
import OrderList from "@/components/Order/order-context";
import {
  OrderCompletedContainer,
  OrderCompletedTitle,
  OrderCompletedForm,
  OrderCancelButton,
  OrderCompleteButton,
  OrderInformationContainer,
  OrderInformationTitle,
  OrderInformationForm,
  OrderInformationLabel,
  OrderInformationInput,
  OrderLookUpButton,
} from "@/pages/order/order.styles";

export default function Order() {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    productId: "",
    productName: "",
    count: "",
    price: "",
    totalPrice: "",
    zipcode: "",

    //이렇게써도되나요
  });
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [isOrderNotCompleted, setIsOrderNotCompleted] = useState(false);
  const router = useRouter();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  }

  const handleOrderSubmit = (e, targetUrl) => {
    e.preventDefault();
    setIsOrderCompleted(true);
    router.push(`./order/${targetUrl}`);
  };

  function handleOrderCancel(e) {
    e.preventDefault();
    setIsOrderNotCompleted(true);
    router.push("../my-page");
    // 주문취소, 초기화로 변경이면 장바구니로 이동,,?
  }

  if (isOrderCompleted) {
    return (
      <OrderCompletedContainer>
        <OrderCompletedTitle>주문 완료</OrderCompletedTitle>
        <OrderCompletedForm> {/* 주문 내역 보여주기 */}</OrderCompletedForm>
        <OrderLookUpButton onClick={handleOrderSubmit}>
          주문 조회
        </OrderLookUpButton>
      </OrderCompletedContainer>
    );
  }

  return (
    <OrderInformationContainer>
      <OrderInformationTitle>주문하기</OrderInformationTitle>
      <OrderInformationForm>
        <OrderInformationContainer>
          <OrderInformationLabel html="name">이름</OrderInformationLabel>
          <OrderInformationInput
            type="text"
            id="name"
            name="name"
            value={shippingInfo.name}
            onChange={handleInputChange}
          />
        </OrderInformationContainer>
        <OrderInformationContainer>
          <OrderInformationLabel html="address">
            배송지 주소
          </OrderInformationLabel>
          <OrderInformationInput
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
          />
        </OrderInformationContainer>
        <OrderInformationContainer>
          <OrderInformationLabel htmlFor="phoneNumber">
            전화번호
          </OrderInformationLabel>
          <OrderInformationInput
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={shippingInfo.phoneNumber}
            onChange={handleInputChange}
          />
        </OrderInformationContainer>
        <OrderList />
        {/* 상품 리스트 및 총 금액 보여주기 */}
        <OrderCompleteButton onClick={handleOrderSubmit}>
          주문 완료
        </OrderCompleteButton>
        <OrderCancelButton onClick={handleOrderCancel}>
          주문 취소
        </OrderCancelButton>
      </OrderInformationForm>
    </OrderInformationContainer>
  );
}
