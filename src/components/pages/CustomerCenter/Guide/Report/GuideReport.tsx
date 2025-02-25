import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "../../../../../assets/images/guideReportBanner.png";

const Main = styled.main`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding-left: 195px;
`;

const TopWrapper = styled.div`
  padding-left: 125px;
  border-bottom: 1px solid #ededed;
  height: 120px;
  display: flex;
  align-items: center;
`;

const TopContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopTitle = styled.span`
  color: #2282e9;
  font-size: 20px;
  font-weight: 700;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const TopBtn = styled.button`
  width: 205px;
  height: 55px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ededed;
  color: #c0c0c0;
  font-weight: 600;
`;

const AccentTopBtn = styled(TopBtn)`
  border: 1px solid #2282e9;
  color: #2282e9;
`;

const ContentWrapper = styled.div`
  padding-top: 40px;
  padding-left: 125px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 22px;
`;

const Desc = styled.p`
  display: block;
  width: 1280px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 50px;
`;

export default function GuideReport() {
  return (
    <Main>
      <TopWrapper>
        <TopContainer>
          <Link to="/home/guide" style={{ textDecoration: "none" }}>
            <TopTitle>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ marginRight: "20px" }}
              />
              테스트 연구소 가이드
            </TopTitle>
          </Link>
          <BtnContainer>
            <AccentTopBtn>테스트 등록 바로가기</AccentTopBtn>
          </BtnContainer>
        </TopContainer>
      </TopWrapper>
      <ContentWrapper>
        <Title>테스트 리포트 가이드</Title>
        <img
          src={Banner}
          alt="banner"
          style={{ width: "1280px", height: "202px", marginBottom: "30px" }}
        />
        <Desc>
          테스트가 종료된 후 제공되는 리포트는 게임 테스트의 전반적인 결과와
          유저 피드백을 종합하여 작성된 분석 자료입니다. 리포트에는 테스트에
          참여한 유저들의 데이터와 주요 피드백, <br />
          게임의 강점과 개선이 필요한 부분, 그리고 향후 개발 방향에 대한
          인사이트가 포함되어 있습니다. 이를 기반으로 게임의 완성도를 높이고
          유저 경험을 향상시키는 데 활용해 주시기 바랍니다.
          <br />
          <br />
          테스트 상세 데이터의 경우에는 작성해주셨던 희망 유저 테스터의 10%가
          참여를 완료했을 경우 데이터들을 확인 할 수 있으며, <br />
          해당 상세 데이터는 [테스트 목록] - [진행 중인 게임] 카테고리에서 해당
          게임을 선택해 데이터를 확인 하실 수 있습니다.
        </Desc>
      </ContentWrapper>
    </Main>
  );
}
