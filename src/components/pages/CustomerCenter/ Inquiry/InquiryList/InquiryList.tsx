import { useQuery } from "@tanstack/react-query";
import InquiryPagesAPI from "./Data/InquiryPagesAPI";
import styled from "styled-components";
import moomoClover from "../../../../../assets/images/moomo_clover.png";
import Pagination from "react-js-pagination";
import { formatDate } from "../../../../../utils";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
`;

const Title = styled.span`
  display: block;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #9f9f9f;
`;

const ImgContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const ImgSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #9f9f9f;
  margin-top: 30px;
`;

const ContentContianer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 1280px;
  margin-bottom: 60px;
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

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  ul {
    list-style: none;
    padding: 0;

    li {
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
      font-size: 1rem;

      &:first-child {
        border-radius: 5px 0 0 5px;
      }

      &:last-child {
        border-radius: 0 5px 5px 0;
      }
      &.active {
        background-color: #2282e9;
        a {
          color: white;
        }
      }

      a {
        &:hover,
        &.active {
          color: #333742;
        }
        text-decoration: none;
        color: #2282e9;
      }
    }
  }
`;

export default function InquiryList() {
  const pageNum = sessionStorage.getItem("InquiryListPage") || "1";

  const { data: InquiryPagesData, refetch: InquiryPageRefetch } = useQuery({
    queryKey: ["InquiryPages"],
    queryFn: async () => await InquiryPagesAPI(pageNum),
  });

  const handlePageChange = (pageNumber: number) => {
    sessionStorage.setItem("InquiryListPage", pageNumber.toString());
    InquiryPageRefetch();
  };

  return (
    <Main>
      <TopWrapper>
        <TopContainer>
          <Link to="/home/inquiry" style={{ textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ marginRight: "20px", color: "#2282e9" }}
            />
            <TopTitle>문의하기</TopTitle>
          </Link>
        </TopContainer>
      </TopWrapper>
      <Wrapper>
        <Title>내 문의내역</Title>
        <SubTitle>최근 1년 내 문의 내역을 확인하실 수 있습니다.</SubTitle>
        {InquiryPagesData?.data?.page?.content ? (
          <>
            <ContentContianer>
              {InquiryPagesData?.data?.page?.content.map((item: any) => (
                <Link to={`${item.id}`} style={{ textDecoration: "none" }}>
                  <ContentWrapper id={item.id}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.status === "COMPLETE" && (
                        <ContentBadge>메일 답변완료</ContentBadge>
                      )}
                      <Content>{item.title}</Content>
                    </div>
                    <Content>{formatDate(item.createdAt)}</Content>
                  </ContentWrapper>
                </Link>
              ))}
            </ContentContianer>
            <PaginationWrapper>
              <Pagination
                activePage={Number(pageNum)}
                itemsCountPerPage={10}
                totalItemsCount={
                  InquiryPagesData?.data?.page?.pageable.totalElements || 0
                }
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
              />
            </PaginationWrapper>
          </>
        ) : (
          <ImgContainer>
            <img
              src={moomoClover}
              alt="img"
              style={{ width: "191px", height: "214px" }}
            />
            <ImgSpan>최근 문의하기 내역이 없습니다.</ImgSpan>
          </ImgContainer>
        )}
      </Wrapper>
    </Main>
  );
}
