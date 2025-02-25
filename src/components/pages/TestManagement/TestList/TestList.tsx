import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding-left: 320px;
`;

const NoticeWrapper = styled.div`
  width: 1280px;
  margin-top: 40px;
  background-color: white;
  height: 110px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  border-radius: 5px;
`;

const Notice = styled.span`
  font-weight: 500;
  color: #555555;
`;

const AuthSpan = styled.span`
  text-decoration: underline;
  color: #2282e9;
  font-weight: 500;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 1280px;
  overflow-x: scroll;
  margin-bottom: 50px;
`;

const ContentBox = styled.div`
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;

const ContentZeroSpan = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  color: #c0c0c0;
  text-align: center;
`;

export default function TestList() {
  return (
    <Main>
      <NoticeWrapper>
        <Notice>
          잠깐! 프로젝트 진행을 위해 반드시 게임사 인증이 필요합니다. 필요한
          자료 제출을 완료하셨을까요?
        </Notice>
        <Link to="/home/company-info">
          <AuthSpan>게임사 인증하기</AuthSpan>
        </Link>
      </NoticeWrapper>
      <Title>진행 중인 게임 테스트</Title>
      <ContentWrapper>
        <ContentBox>
          <ContentZeroSpan>
            현재 진행 중인 <br />
            테스트가 없습니다 :(
          </ContentZeroSpan>
        </ContentBox>
      </ContentWrapper>
      <Title>작성 중인 게임 테스트</Title>
      <ContentWrapper style={{ marginBottom: "308px" }}>
        <ContentBox>
          <ContentZeroSpan>
            새로운 <br />
            테스트 설계하기 <br />
            <FontAwesomeIcon
              icon={faCirclePlus}
              style={{
                width: "30px",
                height: "30px",
                marginTop: "20px",
                color: "#e7e7e7",
              }}
            />
          </ContentZeroSpan>
        </ContentBox>
      </ContentWrapper>
    </Main>
  );
}
