import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GameProposalExistsAPI from "./Data/GameProposalExistsAPI";

const Main = styled.main`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding-left: 195px;
`;

const Wrapper = styled.div`
  padding-top: 48px;
  padding-left: 125px;
`;

const Title = styled.span`
  display: block;
  font-weight: 700;
  font-size: 20px;
  color: #2282e9;
  margin-bottom: 16px;
`;

const SubTitle = styled.span`
  display: block;
  font-weight: 500;
  font-size: 18px;
  color: #9f9f9f;
  margin-bottom: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  width: 664px;
  height: 70px;
  border-radius: 5px;
  border: none;
  background-color: #2282e9;
  color: white;
  margin-bottom: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const AccentBtn = styled(Btn)`
  background-color: #ebf5ff;
  color: #2282e9;
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
  width: 160px;
  height: 55px;
  border-radius: 5px;
  background-color: #add5ff;
  border: 1px solid #add5ff;
  color: white;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 125px;
  padding-top: 40px;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 1280px;
  height: 120px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 70px;
  z-index: 10;
`;

const ContentContainerBox = styled.div`
  width: 12px;
  height: 120px;
  background-color: #262626;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const ContentNumber = styled.span`
  font-weight: 700;
  font-size: 80px;
  margin-left: 46px;
  color: #ededed;
  padding-top: 10px;
`;

const ContentTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 47px;
  gap: 8px;
`;

const ContentTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
`;

const ContentSubTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #9f9f9f;
`;

const ContentBtn = styled.button`
  width: 173px;
  height: 60px;
  border: 1.5px solid #e3e3e3;
  background-color: white;
  color: #e7e7e7;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

const AccentContentBtn = styled(ContentBtn)`
  color: #2282e9;
  border: 1.5px solid #2282e9;
`;

const ContentLine = styled.div`
  height: 544px;
  width: 4px;
  position: absolute;
  left: 1249px;
  border-right: 2px dashed #d1d1d1;
`;

export default function AddTest() {
  const queryClient = useQueryClient();

  const { data: gameProposalExistsData } = useQuery({
    queryKey: ["gameProposalExists"],
    queryFn: async () => await GameProposalExistsAPI(),
  });

  return (
    <Main>
      {gameProposalExistsData?.data.exists ? (
        <Wrapper>
          <Title>작성 중인 테스트가 있습니다</Title>
          <SubTitle>
            이전에 작성한 테스트를 이어서 만들거나 새로운 테스트를 등록할 수
            있습니다.
          </SubTitle>
          <Container>
            <Btn>테스트 새로 만들기</Btn>
            <AccentBtn>작성 중인 테스트 이어서 만들기</AccentBtn>
          </Container>
        </Wrapper>
      ) : (
        <>
          <TopWrapper>
            <TopContainer>
              <TopTitle>게임 테스트 등록</TopTitle>
              <BtnContainer>
                <TopBtn>테스트 등록 제출</TopBtn>
              </BtnContainer>
            </TopContainer>
          </TopWrapper>
          <ContentWrapper>
            <ContentLine></ContentLine>
            <ContentContainer>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ContentContainerBox></ContentContainerBox>
                <ContentNumber>1</ContentNumber>
                <ContentTextBox>
                  <ContentTitle>테스트 플랜</ContentTitle>
                  <ContentSubTitle>
                    진행하고자 하는 프로젝트와 맞는 플랜을 선택해 성공적인 FGT를
                    진행하세요.
                  </ContentSubTitle>
                </ContentTextBox>
              </div>
              <Link to="1">
                <AccentContentBtn>작성하기</AccentContentBtn>
              </Link>
            </ContentContainer>
            <ContentContainer>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ContentContainerBox></ContentContainerBox>
                <ContentNumber>2</ContentNumber>
                <ContentTextBox>
                  <ContentTitle>프로젝트 정보</ContentTitle>
                  <ContentSubTitle>
                    유저들이 프로젝트를 잘 이해할 수 있도록 게임에 관한 정보들을
                    작성해주세요.
                  </ContentSubTitle>
                </ContentTextBox>
              </div>
              <ContentBtn>작성하기</ContentBtn>
            </ContentContainer>
            <ContentContainer>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ContentContainerBox></ContentContainerBox>
                <ContentNumber>3</ContentNumber>
                <ContentTextBox>
                  <ContentTitle>질문 구성</ContentTitle>
                  <ContentSubTitle>
                    테스트를 구성할 질문들을 조합해 작성해주세요.
                  </ContentSubTitle>
                </ContentTextBox>
              </div>
              <ContentBtn>작성하기</ContentBtn>
            </ContentContainer>
            <ContentContainer>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ContentContainerBox></ContentContainerBox>
                <ContentNumber>4</ContentNumber>
                <ContentTextBox>
                  <ContentTitle>견적 확인</ContentTitle>
                  <ContentSubTitle>
                    1, 2, 3단계 프로젝트 내용을 모두 작성 후 견적을
                    확인해주세요.
                  </ContentSubTitle>
                </ContentTextBox>
              </div>
              <ContentBtn>작성하기</ContentBtn>
            </ContentContainer>
          </ContentWrapper>
        </>
      )}
    </Main>
  );
}
