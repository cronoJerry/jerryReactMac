import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 64px 0;
`;
const InnerContainer = styled.div`
  width: 1000px;
`;
const BoxTitle = styled.div`
  font-size: 32px;
  font-weight: 600px;
  padding: 12px 0;
`;
const BoxSubTitle = styled.div`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  padding: 12px 0;
`;
const ImageContents = styled.div`
  margin: 16px 0;
  padding: 64px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 350px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-image: url('https://images.unsplash.com/photo-1682687221213-56e250b36fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60');
  background-size: cover;
`;
const ContentsText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ContentsButton = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 15px;
  background: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Portfolio() {
  return (
    <Container>
      <InnerContainer>
        <div>
          <BoxTitle>온 오프라인 언제 어디서든</BoxTitle>
          <BoxSubTitle>
            간편하고 빠르게 매매/임대차 정보와 투자 인사이트를 받아보세요.
          </BoxSubTitle>
        </div>
        {Array(3)
          .fill('')
          .map((_, i) => (
            <ImageContents>
              <ContentsText>
                <div>kakao talk</div>
                <div>great ocean view</div>
                <div>
                  <div>pama1</div>
                  <div>pama2</div>
                  <div>pama3</div>
                </div>
              </ContentsText>
              <ButtonContainer>
                <ContentsButton>채널 바로가기</ContentsButton>
              </ButtonContainer>
            </ImageContents>
          ))}
      </InnerContainer>
    </Container>
  );
}
