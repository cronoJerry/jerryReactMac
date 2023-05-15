import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  width: 1000px;
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
`;
const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;
const MainBox = styled.div`
  background: white;
  height: 300px;
  border-radius: 20px 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    margin-left: 20px;
  }
  div.what {
    font-weight: bold;
    font-size: 25px;
  }
  :hover {
    background: red;
    color: white;
  }
`;
export default function Profile() {
  return (
    <Container>
      {/* 1000px center align  */}
      <InnerContainer>
        {/* grid */}
        <GridContainer>
          {/* box */}
          <MainBox>
            <div className="funLogo">logo</div>
            <div className="people">임차인입니다.</div>
            <div className="what">허위매물 제로!</div>
            <div>
              전수조사 기반 압도적
              <br />
              질과 양의 매물을 제공합니다.
            </div>
            <div>사무실 구하기 &gt;</div>
          </MainBox>
          <MainBox>
            <div className="funLogo">logo</div>
            <div className="people">임대인입니다.</div>
            <div className="what">공실걱정 제로!</div>

            <div>
              지식 산업 센터는 물론 국내외 기업 등<br />
            </div>
            <div>사무실 구하기 &gt;</div>
          </MainBox>
          <MainBox>
            <div className="funLogo">logo</div>
            <div className="people">중개인입니다.</div>
            <div className="what">광고비 제로!</div>
            <div>
              전수조사 기반 압도적
              <br />
              질과 양의 매물을 제공합니다.
            </div>
            <div>사무실 구하기 &gt;</div>
          </MainBox>
        </GridContainer>
      </InnerContainer>
    </Container>
  );
}
