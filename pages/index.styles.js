import styled from '@emotion/styled';

// export const Button = styled.button`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;

//   &:hover {
//     color: white;
//   }
// `;
// /*flex-direction: column;

export const HomeProductEventCommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
`;

export const HomeProductContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 550px;
  padding: 30px 0;
  margin: 0 auto;
`;

export const ImageContentColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > a {
    padding: 12px 0;
  }

  > a:nth-of-type(odd) {
    display: flex;
    justify-content: flex-start;
  }

  > a:nth-of-type(even) {
    display: flex;
    justify-content: flex-end;
  }

  img {
    height: auto;
    max-height: 150px;
    object-fit: contain;
  }
`;

export const HomeToProductLinkStyled = styled.button`
  border: none;
  background-color: transparent;

  margin: 10px;
  font-size: 15px;
  // font-color: #f7da64;
  // text-decoration-line: none;
`;
export const HomeProductImageDivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1600px;
`;

export const HomeProductImageStyled = styled.img`
  width: 200px;
  height: 350px;

  margin: 20px 35px;

  border: 3px solid #5fafd4;
  background-color: #5fafd4;
  border-radius: 35% 35% 35% 0;
`;
// export const HomeProductTitleStyled = styled.img``
