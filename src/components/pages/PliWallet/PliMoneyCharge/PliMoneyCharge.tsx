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
  padding-left: 125px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
`;

const MoneyContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  width: 410px;
  height: 100px;
  margin-bottom: 70px;
`;

const Table = styled.div`
  width: 1280px;
`;

const THead = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: #ebf5ff;
  height: 58px;
  border-bottom: 1px solid #ededed;
  :not(:last-child) {
    border-right: 1px solid #ededed;
  }
`;

const THeadTd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #797979;
  font-size: 14px;
  font-weight: 500;
`;

const TBody = styled.div`
  background-color: white;
`;

const TBodyTr = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 58px;
  border-bottom: 1px solid #ededed;
  :not(:last-child) {
    border-right: 1px solid #ededed;
  }
`;

const TBodyTd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
`;

const RefundContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;

const RefundSpan = styled.span`
  text-decoration: underline;
  color: #9f9f9f;
  font-size: 14px;
  font-weight: 500;
`;

export default function PliMoneyCharge() {
  return (
    <Main>
      <TopWrapper>
        <TopContainer>
          <TopTitle>플리머니 충전</TopTitle>
          <BtnContainer>
            <AccentTopBtn>충전하기</AccentTopBtn>
          </BtnContainer>
        </TopContainer>
      </TopWrapper>
      <ContentWrapper>
        <Title>플리머니 잔액</Title>
        <MoneyContainer>
          <span style={{ color: "#797979", fontWeight: "500" }}>플리머니</span>
          <div style={{ display: "flex", gap: "10px" }}>
            <span
              style={{ color: "#2282e9", fontWeight: "600", fontSize: "20px" }}
            >
              1,046,500
            </span>
            <span
              style={{ fontWeight: "700", fontSize: "18px", color: "#555555" }}
            >
              머니
            </span>
          </div>
        </MoneyContainer>
        <Title>플리머니 내역</Title>
        <Table>
          <THead>
            <THeadTd>번호</THeadTd>
            <THeadTd>거래일시</THeadTd>
            <THeadTd>거래수단</THeadTd>
            <THeadTd>거래상태</THeadTd>
            <THeadTd>금액</THeadTd>
            <THeadTd>내용</THeadTd>
          </THead>
          <TBody>
            <TBodyTr>
              <TBodyTd>000001</TBodyTd>
              <TBodyTd>000001</TBodyTd>
              <TBodyTd>000001</TBodyTd>
              <TBodyTd>000001</TBodyTd>
              <TBodyTd>000001</TBodyTd>
              <TBodyTd>000001</TBodyTd>
            </TBodyTr>
          </TBody>
          <RefundContainer>
            <RefundSpan>환불 관리</RefundSpan>
          </RefundContainer>
        </Table>
      </ContentWrapper>
    </Main>
  );
}
