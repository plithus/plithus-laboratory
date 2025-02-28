import { faChevronLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../../../assets/images/logo.png";

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

const ContentBox = styled.div`
  width: 1280px;
  height: 587px;
  background-color: white;
  box-shadow: 0px 24px 48px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  padding: 44px 40px 33px 40px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  margin-bottom: 25px;
`;

const LogoImg = styled.img`
  width: 93.73px;
  height: 24.12px;
`;

const LogoSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  margin-left: 8.43px;
`;

const TextSpanBox = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #2282e9;
  line-height: 20px;
  margin-bottom: 22px;
`;

const ContentContainerWrapper = styled.div`
  display: flex;
  gap: 44px;
`;

const GrayBox = styled.div`
  background-color: #f8f9fa;
  padding: 33px 0px 35px 26px;
  border-radius: 3px;
  width: 496px;
  height: 400px;
  display: grid;
  grid-template-columns: 115fr 96fr 233fr;
`;

const GrayBoxImg = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 5px;
  background-color: #c0c0c0;
  margin-right: 26px;
`;

const GrayBoxTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const GrayBoxTitle = styled.span`
  color: #797979;
  font-weight: 500;
  font-size: 10px;
  margin-bottom: 20px;
`;

const GrayBoxContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const GrayBoxContent = styled.span`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 17px;
`;

const Table = styled.div`
  width: 660px;
  height: 350px;
`;

const TableTHead = styled.div`
  height: 35px;
  display: grid;
  grid-template-columns: 250fr 151fr 152fr 92fr;
  padding-left: 15px;
`;

const TableTHeadTd = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const TBody = styled.div`
  height: 320px;
  border-top: 1.5px solid #add5ff;
  border-bottom: 1.5px solid #add5ff;
  margin-bottom: 18px;
`;

const TableTBody = styled.div`
  border-bottom: 1px solid #ebf5ff;
  height: 50px;
  display: grid;
  grid-template-columns: 250fr 151fr 152fr 92fr;
  padding-left: 15px;
`;

const TableTBodyTd = styled.div`
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const PliMoneyContainer = styled.div`
  color: #2282e9;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: end;
`;

const PliMoney = styled.div``;

export default function AddTestPhase4() {
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
              4단계 견적 확인
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
        <ContentBox>
          <TitleBox>
            <div>
              <LogoBox>
                <LogoImg src={logo} alt="logo" />
                <LogoSpan>플리더스</LogoSpan>
              </LogoBox>
              <TextSpanBox>
                플리더스 테스트 제작소
                <br />
                Date 2024 . 12 . 30
              </TextSpanBox>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <FontAwesomeIcon
                icon={faDownload}
                style={{
                  color: "#797979",
                  width: "20px",
                  height: "20px",
                  marginBottom: "13px",
                }}
              />
              <span
                style={{
                  color: "#2282e9",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                INVOICE
              </span>
            </div>
          </TitleBox>
          <ContentContainerWrapper>
            <GrayBox>
              <GrayBoxImg></GrayBoxImg>
              <GrayBoxTitleBox>
                <GrayBoxTitle>게임이름</GrayBoxTitle>
                <GrayBoxTitle>게임사</GrayBoxTitle>
                <GrayBoxTitle>모집기간</GrayBoxTitle>
                <GrayBoxTitle>진행기간</GrayBoxTitle>
                <GrayBoxTitle>희망 유저수</GrayBoxTitle>
                <GrayBoxTitle>게임 플랫폼</GrayBoxTitle>
                <GrayBoxTitle>게임 테스트 유형</GrayBoxTitle>
                <GrayBoxTitle>지급재화</GrayBoxTitle>
                <GrayBoxTitle>질문 유형</GrayBoxTitle>
                <GrayBoxTitle>객관식 질문 수</GrayBoxTitle>
                <GrayBoxTitle>주관식 질문 수</GrayBoxTitle>
              </GrayBoxTitleBox>
              <GrayBoxContentBox>
                <GrayBoxContent>무모유스타운</GrayBoxContent>
                <GrayBoxContent>CPR-Games</GrayBoxContent>
                <GrayBoxContent>2024.12.18 - 2024.12.24</GrayBoxContent>
                <GrayBoxContent>2024.12.25 - 2024.12.31</GrayBoxContent>
                <GrayBoxContent>50명</GrayBoxContent>
                <GrayBoxContent>모바일</GrayBoxContent>
                <GrayBoxContent>CBT</GrayBoxContent>
                <GrayBoxContent>1,000 포인트</GrayBoxContent>
                <GrayBoxContent>플리더스 추천 질문</GrayBoxContent>
                <GrayBoxContent>14개</GrayBoxContent>
                <GrayBoxContent>12개</GrayBoxContent>
              </GrayBoxContentBox>
            </GrayBox>
            <Table>
              <TableTHead>
                <TableTHeadTd>서비스</TableTHeadTd>
                <TableTHeadTd>갯수</TableTHeadTd>
                <TableTHeadTd>단가</TableTHeadTd>
                <TableTHeadTd>총합</TableTHeadTd>
              </TableTHead>
              <TBody>
                <TableTBody>
                  <TableTBodyTd>1. 희망 테스트 유저 수</TableTBodyTd>
                  <TableTBodyTd>50</TableTBodyTd>
                  <TableTBodyTd>10,000</TableTBodyTd>
                  <TableTBodyTd>500,000</TableTBodyTd>
                </TableTBody>
                <TableTBody>
                  <TableTBodyTd>2. 유저 지급 재화</TableTBodyTd>
                  <TableTBodyTd>50</TableTBodyTd>
                  <TableTBodyTd>1,500</TableTBodyTd>
                  <TableTBodyTd>25,000</TableTBodyTd>
                </TableTBody>
              </TBody>
              <PliMoneyContainer>
                <PliMoney style={{ marginRight: "57px" }}>총 견적</PliMoney>
                <PliMoney>725,000 플리머니</PliMoney>
              </PliMoneyContainer>
            </Table>
          </ContentContainerWrapper>
        </ContentBox>
      </ContentWrapper>
    </Main>
  );
}
