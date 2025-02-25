import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import OverviewAPI from "./Data/OverviewAPI";
import { formatToWon } from "../../utils";

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 10;
`;

const Container = styled.div`
  height: 100px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #e3e3e3;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: end;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 24px;
  margin-right: 4px;
`;

const Badge = styled.span`
  font-size: 10px;
  font-weight: 600;
  margin-right: 12px;
  background-color: #262626;
  color: white;
  padding: 2px 8px;
  border-radius: 999px;
`;

const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const SubContainer = styled.div`
  height: 60px;
  display: flex;
  gap: 70px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Contents = styled.span`
  font-weight: 500;
  color: #4e4e4e;
`;

const ContentsBold = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

export default function MainNav() {
  const { data: overviewData } = useQuery({
    queryKey: ["overview"],
    queryFn: async () => await OverviewAPI(),
  });

  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>테스트 연구소</Title>
          <Badge>admin</Badge>
          <SubTitle>플리더스 테스트 제작소</SubTitle>
        </TitleContainer>
      </Container>
      <SubContainer>
        <ContentContainer>
          <Contents>진행 중인 프로젝트</Contents>
          <ContentsBold>{overviewData?.data.projectCount}</ContentsBold>
        </ContentContainer>
        <ContentContainer>
          <Contents>나의 보유 플리머니</Contents>
          <ContentsBold>
            {formatToWon(+overviewData?.data.plimoney)} P
          </ContentsBold>
        </ContentContainer>
      </SubContainer>
    </Wrapper>
  );
}
