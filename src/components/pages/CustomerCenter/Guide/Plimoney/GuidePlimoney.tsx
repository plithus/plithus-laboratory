import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "../../../../../assets/images/guidePlimoneyBanner.png";
import PliMoneyGuide1 from "../../../../../assets/images/plimoneyGuide1.png";
import PliMoneyGuide2 from "../../../../../assets/images/plimoneyGuide2.png";

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
  margin-bottom: 120px;
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
  margin-bottom: 30px;
`;

const ImgContainer = styled.div`
  display: flex;
  gap: 22px;
`;

export default function GuidePlimoney() {
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
          테스트 등록을 위해 필요한 결제는 플리머니를 통해 진행됩니다. 테스트
          심사 과정에서 견적 금액에 해당하는 플리머니가 충전되어 있어야 심사가
          진행되며,
          <br /> 잔액이 부족할 경우 심사가 반려될 수 있으니 유의해 주시기
          바랍니다. 플리머니는 [플리월렛] &gt; [플리머니 관리] 메뉴에서 충전이
          가능하니, 테스트 등록 전에 반드시 확인 및 충전을 완료해 주셔야 합니다.
          <br />
          <br />
          플리머니에서는 나의 플리머니 잔액을 확인할 수 있으며, 플리머니 사용
          내역을 확인 할 수 있습니다.
          <br />
          충전 형태는 무통장 입금과 신용카드로 결제가 가능합니다. 환불의
          경우에는 테스트가 진행된 후에는 환불이 불가하며,
          <br />
          플리머니 관리 오른편 하단의 환불 문의를 통해 문의해주시기 바랍니다.
        </Desc>
        <ImgContainer>
          <img
            src={PliMoneyGuide1}
            alt="img"
            style={{ width: "779px", height: "536px" }}
          />
          <img
            src={PliMoneyGuide2}
            alt="img"
            style={{ width: "409px", height: "536px" }}
          />
        </ImgContainer>
      </ContentWrapper>
    </Main>
  );
}
