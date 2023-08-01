import styled from '@emotion/styled';

export const LayoutHeaderStyled = styled.header``;

export const LayoutHeaderLogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

  & > a {
    text-decoration: none;
    color: #ff000070;
    font-weight: 600;
    font-size: 42px;

    font-style: oblique;

    border: 0.5rem outset pink;
    border-radius: 50%;
    margin: 2rem;
    padding: 1rem;
  }
`;

export const LayoutHeaderNavStyled = styled.nav``;

export const LayoutHeaderNavUlStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const LayoutHeaderNavLiStyled = styled.li`
  padding: 0 20px;
  list-style: none;

  ::after {
    padding-left: 30px;
    content: '｜';
    color: #5555;
  }

  :last-child::after {
    content: '';
  }

  & > a {
    text-decoration: none;
    color: #000000;
  }
`;

export const LayoutHeaderLoginLiStyled = styled.li``;
