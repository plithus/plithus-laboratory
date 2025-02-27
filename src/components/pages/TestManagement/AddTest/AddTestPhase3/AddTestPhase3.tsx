import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding-left: 195px;
`;

const TopWrapper = styled.div`
  padding-left: 125px;
  border-bottom: 1px solid #ededed;
  height: 157px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding-top: 30px;
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
  width: 160px;
  height: 55px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ededed;
  color: #c0c0c0;
  font-weight: 600;
  cursor: pointer;
`;

const PreviewBtn = styled(TopBtn)`
  color: white;
  background-color: #2282e9;
`;

const SaveBtn = styled(TopBtn)`
  color: #2282e9;
  border: 1px solid #2282e9;
`;

const NavCotainer = styled.div`
  color: #c0c0c0;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  width: 1280px;
  height: 37px;
`;

const Nav = styled.div`
  width: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AccentNav = styled(Nav)`
  border-bottom: 2px solid #2282e9;
  color: #2282e9;
`;

const ContentWrapper = styled.div`
  padding-top: 70px;
  padding-left: 125px;
  margin-bottom: 309px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

const Required = styled.span`
  color: #2282e9;
  font-weight: 600;
  font-size: 18px;
`;

const Comment = styled.span`
  display: block;
  line-height: 26px;
  color: #9f9f9f;
  margin-top: 8px;
  margin-bottom: 20px;
`;

const QuestionWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 70px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 358px;
  height: 209px;
  border-radius: 10px;
  border: 1.5px solid #e3e3e3;
  background-color: white;
`;

const QuestionTitle = styled.span`
  display: block;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 29px;
`;
const QuestionContent = styled.span`
  display: block;
  font-weight: 500;
  font-size: 14px;
  color: #8e8e8e;
  margin-bottom: 34px;
`;

const QuestinBtn = styled.button`
  border-radius: 999px;
  background-color: #ebf5ff;
  width: 223px;
  height: 45px;
  border: none;
  color: #2282e9;
  font-weight: 600;
  font-size: 14px;
`;

const QuestionBox = styled.div`
  width: 1280px;
  height: 300px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #ededed;
  margin-bottom: 129px;
`;

export default function AddTestPhase3() {
  return (
    <Main>
      <TopWrapper>
        <TopContainer>
          <Link to="/home/test-list/add" style={{ textDecoration: "none" }}>
            <TopTitle>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ marginRight: "20px" }}
              />
              3단계 테스트 플랜
            </TopTitle>
          </Link>
          <BtnContainer>
            <PreviewBtn>미리보기</PreviewBtn>
            <SaveBtn>저장하기</SaveBtn>
          </BtnContainer>
        </TopContainer>
        <NavCotainer>
          <Nav>1. 테스트 플랜</Nav>
          <Nav>2. 프로젝트 정보</Nav>
          <AccentNav>3. 질문 구성</AccentNav>
          <Nav>4. 견적 확인</Nav>
        </NavCotainer>
      </TopWrapper>
      <ContentWrapper>
        <Title>
          질문 구성
          <Required> *</Required>
        </Title>
        <Comment>
          테스트를 구성할 질문들을 조합해 질문을 구성해주세요.
          <br />
          자동으로 질문이 구성됩니다. 추후 원하는 질문은 직접 추가가 가능합니다.
        </Comment>
        <QuestionWrapper>
          <QuestionContainer>
            <QuestionTitle>추천 질문</QuestionTitle>
            <QuestionContent>플리더스가 추천하는 질문</QuestionContent>
            <QuestinBtn>선택하기</QuestinBtn>
          </QuestionContainer>
          <QuestionContainer>
            <QuestionTitle>장르별 질문</QuestionTitle>
            <QuestionContent>장르별 효과적인 질문</QuestionContent>
            <QuestinBtn>선택하기</QuestinBtn>
          </QuestionContainer>
        </QuestionWrapper>
        <Title>객관식 질문</Title>
        <Comment>현재 총 0 문항</Comment>
        <QuestionBox></QuestionBox>
        <Title>주관식 질문</Title>
        <Comment>현재 총 0 문항</Comment>
        <QuestionBox></QuestionBox>
      </ContentWrapper>
    </Main>
  );
}
