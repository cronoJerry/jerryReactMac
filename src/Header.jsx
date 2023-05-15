import styled from 'styled-components';
import { GlobalStyles } from './styles';
import Logo from './bmw_logo.png';
const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;
const GlobalNav = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
const SmallNav = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const MainLogo = styled.img`
  width: 50px;
`;
export default function Header() {
  return (
    <div>
      <GlobalStyles />
      <Container>
        <GlobalNav>
          <div>
            <MainLogo src={Logo} alt="logo" width="30px"></MainLogo>
          </div>
        </GlobalNav>
        <SmallNav>
          <div>업체소개</div>
          <div>포트폴리오</div>
          <div>사진</div>
          <div>게시판</div>
          <div>연락처</div>
        </SmallNav>
      </Container>
    </div>
  );
}
