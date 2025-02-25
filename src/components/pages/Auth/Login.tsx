import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import naver from "../../../assets/images/naverLogo.png";
import google from "../../../assets/images/googleLogo.png";
import kakao from "../../../assets/images/kakaoLogo.png";
import apple from "../../../assets/images/appleLogo.png";
import aos from "../../../assets/images/aosQR.png";
import ios from "../../../assets/images/iosQR.png";
import SocialLogin from "../../../API/Auth/socialLogin";
import { useEffect } from "react";

const Container = styled.div`
  background: linear-gradient(#2282e950, #ffffff00 40%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 11.4px;
  margin-bottom: 40px;
`;

const LogoImg = styled.img`
  width: 126.72px;
  height: 33px;
`;

const LogoSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

const Text = styled.p`
  color: #555555;
  text-align: center;
  margin-bottom: 77px;
  line-height: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 158px;
`;

const SocialLogoImg = styled.img`
  width: 71px;
  height: 71px;
  border-radius: 100%;
  cursor: pointer;
`;

const QRContainer = styled.div`
  display: flex;
  gap: 41px;
`;

const QRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const QRImg = styled.img`
  width: 85px;
  height: 85px;
`;

const QRSpan = styled.span`
  font-weight: 600;
  font-size: 12.5px;
  color: #555555;
`;

const Footer = styled.footer`
  color: #d3d3d3;
  text-align: center;
  padding-bottom: 50px;
  font-size: 15px;
  line-height: 24px;
`;

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <Container>
      <div></div>
      <Main>
        <LogoContainer>
          <LogoImg src={logo} alt="logo" />
          <LogoSpan>플리더스</LogoSpan>
        </LogoContainer>
        <Text>
          플리더스 APP 회원정보로 로그인이 진행됩니다! <br />
          플리더스 회원이 아닌 경우 플리더스 앱으로 회원가입 진행 후 로그인
          부탁드립니다.
        </Text>
        <ButtonContainer>
          <SocialLogoImg src={naver} onClick={() => SocialLogin("naver")} />
          <SocialLogoImg src={google} onClick={() => SocialLogin("google")} />
          <SocialLogoImg src={kakao} onClick={() => SocialLogin("kakao")} />
          <SocialLogoImg src={apple} onClick={() => SocialLogin("apple")} />
        </ButtonContainer>
        <QRContainer>
          <QRWrapper>
            <QRImg src={aos} />
            <QRSpan>AOS</QRSpan>
          </QRWrapper>
          <QRWrapper>
            <QRImg src={ios} />
            <QRSpan>IOS</QRSpan>
          </QRWrapper>
        </QRContainer>
      </Main>
      <Footer>
        (주)플리더스 대표이사 : 임찬영 사업자 등록번호 : 726-88-02485 <br />
        주소 : 경기도 고양시 덕양구 향동로 201, GL메트로시티 A동 14층 1402호
        이메일 : plithus@naver.com{" "}
      </Footer>
    </Container>
  );
}
