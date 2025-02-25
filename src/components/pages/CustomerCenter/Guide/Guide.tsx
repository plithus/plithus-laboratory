import styled from "styled-components";
import Ledger from "../../../../assets/images/emoji_ledger.png";
import ClipBoard from "../../../../assets/images/emoji_clipboard.png";
import ShoppingCart from "../../../../assets/images/emoji_shopping_cart.png";
import { Link } from "react-router-dom";
import ChannelImg from "../../../../assets/images/channelImg.png";

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
  align-items: center;
`;

const TopTitle = styled.span`
  color: #2282e9;
  font-size: 20px;
  font-weight: 700;
`;

const ContentWrapper = styled.div`
  padding-top: 40px;
  padding-left: 125px;
`;

const Title = styled.span`
  display: block;
  font-weight: 600;
  font-size: 22px;
  line-height: 36px;
  margin-bottom: 14px;
`;

const SubTitle = styled.span`
  display: block;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 18px;
  color: #9f9f9f;
  margin-bottom: 40px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  margin-bottom: 70px;
`;

const Content = styled.div`
  height: 148px;
  background-color: white;
  padding: 0px 50px 0px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 5px;
`;

const ContentSpan = styled.span`
  font-weight: 500;
  line-height: 26px;
`;

const ChannelContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  width: 644px;
  height: 260px;
  padding: 36px 67.5px 0px 36px;
  margin-bottom: 357px;
  display: flex;
  gap: 34px;
`;

const ChannelTitle = styled.span`
  display: block;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ChannelSubTitle = styled.span`
  display: block;
  color: #797979;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 40px;
`;

const ChannelBtn = styled.button`
  width: 200px;
  height: 48px;
  background-color: #ffe920;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  border: none;
`;

export default function MakerGuide() {
  return (
    <Main>
      <TopWrapper>
        <TopContainer>
          <TopTitle>메이커 가이드</TopTitle>
        </TopContainer>
      </TopWrapper>
      <ContentWrapper>
        <Title>
          위더스 메이커가 처음이신가요? <br />
          플리더스 위더스 메이커를 통해 성공적인 게임 런칭을 만들어가세요!
        </Title>
        <SubTitle>가이를 통해 궁금하신 점을 해결해드립니다.</SubTitle>
        <ContentContainer>
          <Link to="basic" style={{ textDecoration: "none" }}>
            <Content>
              <ContentSpan>
                플리더스 테스트 연구소 <br />
                초심자 기초 가이드
              </ContentSpan>
              <img
                src={Ledger}
                alt="img"
                style={{ width: "69.6px", height: "76.42px" }}
              />
            </Content>
          </Link>
          <Link to="report" style={{ textDecoration: "none" }}>
            <Content>
              <ContentSpan>테스트 리포트 가이드</ContentSpan>
              <img
                src={ClipBoard}
                alt="img"
                style={{ width: "69.6px", height: "76.42px" }}
              />
            </Content>
          </Link>
          <Link to="plimoney" style={{ textDecoration: "none" }}>
            <Content>
              <ContentSpan>플리머니 결제 관련 가이드</ContentSpan>
              <img
                src={ShoppingCart}
                alt="img"
                style={{ width: "69.6px", height: "76.42px" }}
              />
            </Content>
          </Link>
        </ContentContainer>
        <ChannelContainer>
          <div>
            <ChannelTitle>
              플리더스 메이커 전용 <br />
              카카오톡 채널을 추가해보세요!
            </ChannelTitle>
            <ChannelSubTitle>
              테스트 설계에 막막함을 느끼신다면 진행에 도움이 되는 <br />
              다양한 정보를 받아보시고 소통하세요.
            </ChannelSubTitle>
            <ChannelBtn>카카오톡 채널 추가하기 +</ChannelBtn>
          </div>
          <img
            src={ChannelImg}
            alt="img"
            style={{ width: "204.5px", height: "224px" }}
          />
        </ChannelContainer>
      </ContentWrapper>
    </Main>
  );
}
