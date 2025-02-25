import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 30px;
  padding-left: 24px;
  width: 195px;
  border-right: 1px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 160px;
  box-sizing: border-box;
  background-color: white;
  z-index: 5;
  height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-weight: 600;
  margin-bottom: 18px;
`;

const SubTitle = styled.span`
  color: #9f9f9f;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
  margin-bottom: 20px;
  display: block;
  cursor: pointer;
`;

const SubTitleAccent = styled.span`
  color: #2282e9;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
  margin-bottom: 20px;
  display: block;
  cursor: pointer;
`;

export default function SideNav() {
  const location = useLocation();
  return (
    <Container>
      <TitleContainer>
        <Title>홈</Title>
        <Link to="/home" style={{ textDecoration: "none" }}>
          {location.pathname === "/home" ? (
            <SubTitleAccent>메이커 홈</SubTitleAccent>
          ) : (
            <SubTitle>메이커 홈</SubTitle>
          )}
        </Link>
        <Link to="/home/company-info" style={{ textDecoration: "none" }}>
          {location.pathname === "/home/company-info" ? (
            <SubTitleAccent>게임사 정보</SubTitleAccent>
          ) : (
            <SubTitle>게임사 정보</SubTitle>
          )}
        </Link>
      </TitleContainer>
      <TitleContainer>
        <Title>플리월렛</Title>
        <Link to="/home/plimoney-charge" style={{ textDecoration: "none" }}>
          {location.pathname === "/home/plimoney-charge" ? (
            <SubTitleAccent>플리머니 충전</SubTitleAccent>
          ) : (
            <SubTitle>플리머니 충전</SubTitle>
          )}
        </Link>
      </TitleContainer>
      <TitleContainer>
        <Title>테스트 관리</Title>
        <Link to="/home/test-list/add" style={{ textDecoration: "none" }}>
          {location.pathname === "/home/test-list/add" ? (
            <SubTitleAccent>테스트 등록</SubTitleAccent>
          ) : (
            <SubTitle>테스트 등록</SubTitle>
          )}
        </Link>
        <Link to="/home/test-list" style={{ textDecoration: "none" }}>
          {location.pathname === "/home/test-list" ? (
            <SubTitleAccent>테스트 목록</SubTitleAccent>
          ) : (
            <SubTitle>테스트 목록</SubTitle>
          )}
        </Link>
      </TitleContainer>
      <TitleContainer>
        <Title>고객센터</Title>
        <Link to="/home/inquiry" style={{ textDecoration: "none" }}>
          {location.pathname === "/home/inquiry" ? (
            <SubTitleAccent>문의하기</SubTitleAccent>
          ) : (
            <SubTitle>문의하기</SubTitle>
          )}
        </Link>
        <Link to="/home/guide" style={{ textDecoration: "none" }}>
          {location.pathname === "/home/guide" ? (
            <SubTitleAccent>가이드 확인</SubTitleAccent>
          ) : (
            <SubTitle>가이드 확인</SubTitle>
          )}
        </Link>
      </TitleContainer>
    </Container>
  );
}
