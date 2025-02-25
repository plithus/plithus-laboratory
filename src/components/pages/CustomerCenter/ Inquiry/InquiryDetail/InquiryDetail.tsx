import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import InquiryDetailAPI from "./Data/InquiryDetailAPI";
import { formatDate } from "../../../../../utils";

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

const Wrapper = styled.div`
  padding-top: 70px;
  padding-left: 125px;
  width: 1280px;
`;

const ContentWrapper = styled.div`
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 70px;
  border: 1px solid #ededed;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Content = styled.span`
  color: #797979;
`;

const ContentBadge = styled.div`
  margin-right: 10px;
  background-color: #2282e9;
  color: white;
  border-radius: 50px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
`;

const ContentBox = styled.div`
  height: 374px;
  padding: 30px 40px;
  background-color: white;
  border: 1px solid #ededed;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #797979;
`;

const AnswerBox = styled.div`
  height: 200px;
  padding: 30px 40px;
  background-color: white;
  border: 1px solid #ededed;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #797979;
`;

const AnswerBadge = styled.div`
  margin-right: 10px;
  background-color: #262626;
  color: white;
  border-radius: 50px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  width: fit-content;
  margin-bottom: 12px;
`;

export default function InquiryDetail() {
  const { id } = useParams();

  const { data: InquiryDetailData } = useQuery({
    queryKey: ["InquiryDetail"],
    queryFn: async () => await InquiryDetailAPI(id),
  });

  return (
    <Main>
      <TopWrapper>
        <TopContainer>
          <Link to="/home/inquiry/list" style={{ textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ marginRight: "20px", color: "#2282e9" }}
            />
            <TopTitle>내 문의내역</TopTitle>
          </Link>
        </TopContainer>
      </TopWrapper>
      <Wrapper>
        <ContentWrapper id={InquiryDetailData?.data?.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {InquiryDetailData?.data?.status === "COMPLETE" && (
              <ContentBadge>메일 답변완료</ContentBadge>
            )}
            <Content>{InquiryDetailData?.data?.title}</Content>
          </div>
          <Content>{formatDate(InquiryDetailData?.data?.createdAt)}</Content>
        </ContentWrapper>
        <ContentBox>{InquiryDetailData?.data?.content}</ContentBox>
        {InquiryDetailData?.data?.response && (
          <AnswerBox>
            <AnswerBadge>답변</AnswerBadge>
            {InquiryDetailData?.data?.response}
          </AnswerBox>
        )}
      </Wrapper>
    </Main>
  );
}
