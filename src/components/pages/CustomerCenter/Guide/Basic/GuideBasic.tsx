import { faArrowRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Banner from "../../../../../assets/images/basicBanner.png";
import { useState } from "react";
import GuideImg1 from "../../../../../assets/images/guideImg1.png";
import GuideImg2 from "../../../../../assets/images/guideImg2.png";
import GuideImg3 from "../../../../../assets/images/guideImg3.png";
import GuideImg4 from "../../../../../assets/images/guideImg4.png";
import { Link } from "react-router-dom";

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
  margin-bottom: 50px;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 6px;
  padding-left: 125px;
  margin-bottom: 276px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 178px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #797979;
  height: 60px;
  cursor: pointer;
`;

const NavAccent = styled(Nav)`
  background-color: #ebf5ff;
  color: #2282e9;
`;

const Content = styled.div`
  width: 1096px;
  background-color: white;
  padding: 50px;
  border-radius: 5px;
`;

const ContentTitle = styled.span`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 30px;
`;

const ContentP = styled.p`
  font-weight: 500;
  line-height: 30px;
`;

const ContentSubTitle = styled.span`
  display: block;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 14px;
`;

const ContentBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContentBox = styled.div`
  background-color: #ebf5ff;
  border-radius: 10px;
  width: 114px;
  height: 114px;
  margin-right: 7px;
  font-weight: 500;
  line-height: 30px;
  color: #797979;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentGuideBox = styled.div`
  border-radius: 5px;
  border: 1px solid #ededed;
  padding: 22px 22px 22px 40px;
  width: 730px;
  height: 236px;
  display: flex;
  gap: 67px;
  margin-bottom: 40px;
`;

const ContentGuideTitle = styled.span`
  display: block;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 12px;
`;

const ContentGuideDesc = styled.span`
  color: #797979;
  line-height: 20px;
  font-size: 12px;
`;

const ContentGuideImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 220px;
  height: 269px;
`;

export default function GuideBasic() {
  const [guidePhase, setGuidePhase] = useState(1);
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
        <Title>플리더스 테스트 연구소 초심자 기초 가이드</Title>
        <img
          src={Banner}
          alt="banner"
          style={{ width: "1280px", height: "202px", marginBottom: "30px" }}
        />
        <Desc>
          플리더스(Plithus)는 게임 개발자와 테스트 플레이어를 연결하는
          플랫폼입니다. 게임 개발자들은 플리더스를 통해 출시 전 게임의 품질을
          검증하고, 게임 경험을 최적화하기 위한 실질적인 피드백을 <br /> 받을 수
          있습니다. 반면, 테스트 플레이어들은 다양한 신작 게임을 미리 체험하며,
          자신들의 의견과 경험을 통해 게임 발전에 기여할 기회를 얻습니다. <br />{" "}
          이제 플리더스와 함께 게임 개발을 한 단계 더 도약시켜 보세요! <br />
          <br /> 테스트 설계는 복잡하거나 어렵지 않습니다. 효과적인 테스트
          설계를 통해 여러분의 게임이 더 많은 유저들에게 사랑받을 수 있도록,{" "}
          <br />
          간단하고 실용적인 가이드를 단계별로 제공해 드리겠습니다. 지금 바로
          시작해 보세요!
        </Desc>
      </ContentWrapper>
      <NavWrapper>
        <NavContainer>
          {guidePhase === 1 ? (
            <NavAccent onClick={() => setGuidePhase(1)}>1. 시작하기</NavAccent>
          ) : (
            <Nav onClick={() => setGuidePhase(1)}>1. 시작하기</Nav>
          )}
          {guidePhase === 2 ? (
            <NavAccent onClick={() => setGuidePhase(2)}>
              2. 테스트 플랜
            </NavAccent>
          ) : (
            <Nav onClick={() => setGuidePhase(2)}>2. 테스트 플랜</Nav>
          )}
          {guidePhase === 3 ? (
            <NavAccent onClick={() => setGuidePhase(3)}>
              3. 프로젝트 정보
            </NavAccent>
          ) : (
            <Nav onClick={() => setGuidePhase(3)}>3. 프로젝트 정보</Nav>
          )}
          {guidePhase === 4 ? (
            <NavAccent onClick={() => setGuidePhase(4)}>4. 질문 구성</NavAccent>
          ) : (
            <Nav onClick={() => setGuidePhase(4)}>4. 질문 구성</Nav>
          )}
          {guidePhase === 5 ? (
            <NavAccent onClick={() => setGuidePhase(5)}>5. 견적 확인</NavAccent>
          ) : (
            <Nav onClick={() => setGuidePhase(5)}>5. 견적 확인</Nav>
          )}
        </NavContainer>
        {guidePhase === 1 && (
          <Content>
            <ContentTitle>1. 시작하기</ContentTitle>
            <ContentP style={{ marginBottom: "50px" }}>
              게임사 분들에게 이젠 필수 요건인 CBT. 새롭게 제작한 게임들을
              유저분들에게 미리 선보여 출시 전 게임의 다양한 부분들에 실질적인
              피드백 받을 수 있고, 바로 게임에 적용해 더 나은 게임 제작 환경이
              될 수 있도록 도움이 되고 있습니다.
              <br /> <br />
              ﹒효율성: 테스트 과정을 간소화하고, 시간과 비용을 절약할 수
              있습니다.
              <br /> ﹒접근성: 다양한 플레이어들에게 접근하여 폭넓은 의견을
              수집할 수 있습니다. <br /> ﹒데이터 기반 개선: 정량 및 정성
              데이터를 활용해 게임 품질을 효과적으로 향상시킬 수 있습니다.
            </ContentP>
            <ContentSubTitle>게임 테스트 설계 과정</ContentSubTitle>
            <ContentBoxContainer>
              <ContentBox>
                게임사 <br />
                등록
              </ContentBox>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#e7e7e7", marginRight: "7px" }}
              />
              <ContentBox>
                게임사 <br />
                심사
              </ContentBox>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#e7e7e7", marginRight: "7px" }}
              />
              <ContentBox>
                테스트 <br />
                설계
              </ContentBox>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#e7e7e7", marginRight: "7px" }}
              />
              <ContentBox>
                테스트 <br />
                심사
              </ContentBox>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#e7e7e7", marginRight: "7px" }}
              />
              <ContentBox>
                테스트 <br />
                시작
              </ContentBox>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#e7e7e7", marginRight: "7px" }}
              />
              <ContentBox>
                테스트 <br />
                진행/종료
              </ContentBox>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#e7e7e7", marginRight: "7px" }}
              />
              <ContentBox>
                데이터 <br />
                확인
              </ContentBox>
            </ContentBoxContainer>
            <ContentP>
              플리더스 테스트 연구소에서는 크게{" "}
              <span style={{ color: "#2282e9" }}>
                심사 -&gt; 테스트 설계 -&gt; 결제 -&gt; 테스트 진행 -&gt; 테스트
                데이터 확인
              </span>{" "}
              순서로 진행됩니다. <br />
              테스트 등록하기를 통해 테스트 설계를 완료하셨다면 테스트 제출을
              완료하실 수 있습니다.
              <br /> 테스트 제출시에 반드시 게임사 정보가 등록되어 있어야 테스트
              제출을 완료하실 수 있습니다. <br />
              심사 과정을 거친 후 승인을 받은 테스트는 테스트 상세페이지에서
              [테스트 시작] 버튼을 누름과 동시에 결제와 오픈이 이루어집니다.
              <br />
              <br /> 테스트 제출을 완료 하면 영업일 2일 이내로 심사 결과를
              안내드리고 있습니다.
              <br />
              규정에 따라 잘 설계해주신 테스트의 경우에는 바로 승인이 완료되며,
              필요시 수정.보완 사항이 필요시 반려되어 다시 작성하시게 됩니다.
              <br />
              결제는 테스트 제출 후 심사가 완료된 후에 모집이 시작되면 테스트
              등록시에 확인하셨던 견적을 토대로 결제가 이루어집니다.
              <br />{" "}
              <span style={{ color: "#2282e9" }}>
                *반드시 테스트 시작 전 플리머니가 견적만큼 충전이 완료되어
                있어야 합니다.
              </span>
              <br />
              <br /> 게임 개발 일정과 테스트 심사 일정 등 상황들을 고려해 테스트
              일정을 설계해주시기 바랍니다.
              <br /> 테스트 설계가 익숙하지 않고 경험이 없어도 충분히 제작
              가능하며, 가이드 내용들 잘 확인하셔서 준비하시고 <br />
              혹시라도 이해가 되지 않거나 문의사항이 있는 경우에는 왼편에
              문의하기 서비스를 통해 문의해주시기 바랍니다 :)
            </ContentP>
          </Content>
        )}
        {guidePhase === 2 && (
          <Content>
            <ContentTitle>2. 테스트 플랜</ContentTitle>
            <ContentP style={{ marginBottom: "40px" }}>
              효과적인 게임 테스트를 위해서는 테스트 계획의 명확한 수립이
              중요합니다. 게임 테스트를 준비하는 과정에서 플랫폼 선정, 테스트
              유형 결정, <br />
              희망 테스트 유저 수 설정, 모집 기간 및 실제 테스트 기간 계획을
              효율적으로 세워 테스트를 설계해주세요.
            </ContentP>
            <ContentSubTitle>﹒게임 플랫폼</ContentSubTitle>
            <ContentP style={{ marginBottom: "30px" }}>
              나의 게임이 모바일 게임인지 PC게임인지 아니면 두개 모두 진행
              가능한 게임인지 선택해주세요.
            </ContentP>
            <ContentSubTitle>﹒게임 테스트 유형</ContentSubTitle>
            <ContentP style={{ marginBottom: "30px" }}>
              현재는 플랫폼에서는 CBT 설계가 가능하며 OBT 게임을 등록 원하실
              경우에 오른편에 [고객센터] - [문의하기]를 통해 문의해주시면
              <br />
              빠르게 처리 도와드리겠습니다.
            </ContentP>
            <ContentSubTitle>﹒희망 테스트 유저 수</ContentSubTitle>
            <ContentP style={{ marginBottom: "30px" }}>
              테스트에 참여했으면 좋겠는 유저들의 수를 설정해주세요. 설정해주는
              수에 따라 모집 인원과 지급 재화 포인트가 달라집니다. <br />
              자세한 지급 재화 포인트 내용은 [3.프로젝트 정보] 부분에서
              설명드리겠습니다.
            </ContentP>
            <ContentSubTitle>﹒모집일수</ContentSubTitle>
            <ContentP style={{ marginBottom: "30px" }}>
              희망 테스트 유저들의 수를 모집하는 기간을 설정해주세요. 모집일
              수는 평균적으로 10일로 기간을 설정해 모집을 진행하며 <br />
              최소 5일부터 최대 14일까지 설정이 가능합니다.
            </ContentP>
            <ContentSubTitle>﹒테스트 일수</ContentSubTitle>
            <ContentP>희망 테스트 일수를 설정해주세요.</ContentP>
          </Content>
        )}
        {guidePhase === 3 && (
          <Content>
            <ContentTitle>3. 프로젝트 정보</ContentTitle>
            <ContentP style={{ marginBottom: "40px" }}>
              효과적인 CBT 진행을 위해 명확한 테스트 지침이 중요합니다. 테스트를
              준비하는 과정에서 게임 설치 및 실행 환경 확인, 테스트 미션의
              구체적인 목표 설정, <br />
              테스트 기간 동안 유저 활동 가이드라인 제공, 지급 재화 설정 등 모든
              과정을 체계적으로 계획하여 작성해주세요.
            </ContentP>
            <ContentSubTitle>﹒게임 기본 설명</ContentSubTitle>
            <ContentP style={{ marginBottom: "40px" }}>
              유저들이 게임을 잘 이해할 수 있도록 명확하게 소개해주세요. 게임
              이름, 게임 장르, 게임 설명 및 플레이 방식을 작성해주세요.
            </ContentP>
            <ContentSubTitle>﹒CBT 정보</ContentSubTitle>
            <ContentP style={{ marginBottom: "18px" }}>
              CBT 신청하기를 클릭하면 팝업창에 표시되는 텍스트입니다. CBT 참여
              방법 및 안내 사항 등을 작성해 유저들이 이해하기 쉽게 테스트를
              <br />
              참여할 수 있도록 작성해주세요.
            </ContentP>
            <ContentGuideBox>
              <div>
                <ContentGuideTitle>💡 GUIDE</ContentGuideTitle>
                <ContentGuideDesc>
                  CBT 신청하기 팝업창에 <br />
                  표시되는 텍스트 입니다.
                </ContentGuideDesc>
              </div>
              <img src={GuideImg1} alt="img" />
            </ContentGuideBox>
            <ContentSubTitle>﹒게임 이미지</ContentSubTitle>
            <ContentP style={{ marginBottom: "18px" }}>
              이미지를 규격에 맞게 추가해 주세요. 영상의 경우에는 유튜브 링크를
              작성해 주세요.
            </ContentP>
            <img
              src={GuideImg2}
              alt="img"
              style={{ width: "730px", height: "330px", marginBottom: "40px" }}
            />
            <ContentSubTitle>﹒게임 다운로드 방식</ContentSubTitle>
            <ContentP style={{ marginBottom: "40px" }}>
              원하는 형태의 다운로드 방식을 작성해주세요. 중복으로 작성이
              가능하며, 업로드 되어 있는 게임 플팻폼을 보유하고 있으시다면{" "}
              <br />
              구글플레이스토어, 앱스토어 등 플랫폼 링크를 작성하여 주시면
              됩니다. 파일 형태일 경우 테스트를 진행할 버전의 파일을 업로드
              해주시면 됩니다.
            </ContentP>
            <ContentSubTitle>﹒테스트 미션 설정</ContentSubTitle>
            <ContentP style={{ marginBottom: "18px" }}>
              게임 플레이 후 1단계 설문 참여시 도달 미션을 작성해주세요.
              상세하게 표시해주는 것이 좋습니다. <br />
              또한 이미지 등록시 미션이 확인되는 부분을 강조해주시는 것을
              추천드립니다.
            </ContentP>
            <ContentGuideBox style={{ gap: "0px", height: "336px" }}>
              <div style={{ marginRight: "43px" }}>
                <ContentGuideTitle>💡 GUIDE</ContentGuideTitle>
                <ContentGuideDesc>
                  이미지를 등록했을시 <br />
                  보여지는 화면 예시입니다!
                  <br />
                  참고하여 유형을 선택해
                  <br />
                  이미지를 추가해주세요.
                </ContentGuideDesc>
              </div>
              <ContentGuideImgContainer style={{ marginRight: "28px " }}>
                <img src={GuideImg3} alt="img" />
                <span
                  style={{
                    color: "#797979",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  » 가로형 이미지 적용 예시
                </span>
              </ContentGuideImgContainer>
              <ContentGuideImgContainer>
                <img src={GuideImg4} alt="img" />
                <span
                  style={{
                    color: "#797979",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  » 세로형 이미지 적용 예시
                </span>
              </ContentGuideImgContainer>
            </ContentGuideBox>
            <ContentSubTitle>﹒지급재화</ContentSubTitle>
            <ContentP style={{ marginBottom: "18px" }}>
              테스트 참여시 유저에게 기본으로 지급되어야 하는 포인트는 1000
              포인트로 그 이상으로 작성이 가능합니다. <br />
              유저에게 지급되는 재화가 높을 수록 안정적인 테스터 모집과 높은
              등급의 유저와 매칭될 수 있습니다. <br />
              1000 포인트 초과시 추가 금액 (차액 X 희망 유저 수)이 발생됩니다.{" "}
              <br />
              <span style={{ color: "#2282e9" }}>
                ex)지급재화 1,500 포인트 / 희망 유저 수 50명 -&gt; 500X50 =
                25,000 추가 금액 발생
              </span>
            </ContentP>
          </Content>
        )}
        {guidePhase === 4 && (
          <Content>
            <ContentTitle>4. 질문 구성</ContentTitle>
            <ContentP>
              효과적인 설문 구성을 위해, 질문은 크게 '플리더스 추천 질문 구성'과
              '장르별 질문 구성' 두 가지로 나뉘어 있습니다. 테스트 목표와 게임
              특성에 따라 <br />
              적합한 구성 방식을 선택하여 질문을 생성해 주세요. 각 질문의 구성
              방식은 테스트 목적에 최적화된 질문 템플릿과 방향성을 제공하고
              있습니다. <br />
              아래 안내를 참고하여 적절히 활용해 선택하여 주세요.
              <br />
              <br />
              '플리더스 추천 질문 구성'과 '장르별 질문 구성' 두가지 카테고리 중
              한가지를 선택 후에 추가로 객관식 1개/주관식 2개의 자유 질문을
              추가할 수 있으며 <br />
              추가 비용은 매겨지지 않습니다. 객관식 1개 초과/주관식 2개 초과의
              자유 질문을 추가하고 싶은 경우에는 질문당 가격이 책정됩니다.{" "}
            </ContentP>
          </Content>
        )}
        {guidePhase === 5 && (
          <Content>
            <ContentTitle>5. 견적 확인</ContentTitle>
            <ContentP>
              견적 확인 페이지에서는 앞서 선택하신 테스트 인원, 지급 재화,
              그리고 질문 개수에 따라 최종 비용이 산정됩니다. 각 항목은 테스트
              설계의 핵심 요소로, <br />
              선택한 내용에 따라 비용이 달라지므로 신중하게 검토 후 입력해
              주시기 바랍니다. 정확한 정보를 기반으로 견적이 산출되며, 이를
              바탕으로
              <br />
              최적의 테스트 환경을 구성하실 수 있습니다.
            </ContentP>
          </Content>
        )}
      </NavWrapper>
    </Main>
  );
}
