import styled from 'styled-components';
import { GlobalStyles } from './styles';
const ContainerImage = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;
const MainImgs = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  objcet-position: center;
`;
const MainTitle = styled.div`
  position: absolute;
  width: 500px;
  // font-size: 50px;
  font-weight: bold;
  top: 50%;
  left: 50%;
  color: white;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
const SubTitle = styled.div`
  font-size: 30px;
  margin-top: 40px;
  text-align: center;
`;
export default function MainImage() {
  return (
    <div>
      <GlobalStyles />
      <ContainerImage>
        <MainImgs
          src="https://cdn.pixabay.com/photo/2023/04/28/02/43/car-7955720_1280.jpg"
          alt=""
        />
      </ContainerImage>
      <MainTitle>
        <h1>가죽시트 전문 관리업체</h1>
        <SubTitle>이제는 청바지 걱정 NO!</SubTitle>
      </MainTitle>
    </div>
  );
}
