import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ModalBg = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalBox = styled.div`
  z-index: 15;
  position: absolute;
  top: calc(50vh - 400px);
  left: calc(50vw - 200px);
  background-color: white;
  align-items: center;
  border-radius: 10px;
  width: 528px;
  height: 747px;
  overflow: scroll;
`;

const TitleBox = styled.div`
  padding: 30px 40px;
  font-weight: 600;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  padding: 30px 40px;
  font-weight: 500;
  font-size: 12px;
  color: #797979;
  overflow: scroll;
`;

export default function TermsAgreedModal(props: any) {
  return (
    <ModalBg>
      <ModalBox>
        <TitleBox>
          위더스 메이커 서비스 약관 동의
          <FontAwesomeIcon
            icon={faX}
            onClick={() => props.close()}
            style={{ cursor: "pointer" }}
          />
        </TitleBox>
        <ContentBox>
          위더스 메이커 페이지 서비스의 이용과 관련하여 필요한 사항을
          규정합니다.
          <br />
          <br />
          제 1 조 목적
          <br />
          <br />
          ​ 이 약관은 주식회사 플리더스, Plithus Corp. (이하 ‘회사’)에서
          제공하는 ‘플리더스(Plithus)’ <br />
          서비스(이하 ‘플리더스’ 혹은 ‘서비스’) 및 플리더스와 관련된 멤버십,
          제반 서비스를 이용함에 <br />
          있어 회원과 회사 간의 권리, 의무, 책임사항, 이용조건, 이용절차 등
          서비스 이용의 기본적인 <br />
          사항을 정리하고 규정하는 것을 목적으로 합니다.
          <br />
          ​<br />
          ​<br />
          ​<br />
          제 2 조 약관 수락
          <br />
          <br />
          ​ 본 약관은 이용자가 플리더스 계정 생성 과정에서 “동의 및 계속” 버튼을
          클릭한 때 발효하며
          <br />
          (“발효일”), 그렇게 함으로써 이용자는 본 약관의 조건에 구속된다는 데
          동의합니다.
          <br />
          ​<br />
          본 약관은 Plithus Corp.와 본 서비스를 이용하거나 그에 접속하는 개인
          이용자
          <br />
          (“이용자” 또는 “귀하”) 간의 계약을 구성하며, 여기에는
          개인정보처리방침(“개인정보처리방침”)
          <br />
          이 포함됩니다. 플리더스는 본 약관과 본 서비스를 언제든지 업데이트하고
          변경할 권리를 가지며, <br />
          현재의 서비스에 추가되는 일체의 새로운 기능 또는 툴 역시 본 약관의
          적용을 받습니다. <br />
          귀하는 본 약관을 수시로 확인하여 귀하에게 영향을 미칠 수 있는 업데이트
          및 변경사항을 <br />
          파악하시기 바랍니다. 그러한 업데이트 및 변경이 있은 후 본 서비스를
          이용하게 되면 그러한 <br />
          업데이트 및 변경을 수락한 것이 됩니다. 업데이트된 최신 버전의 약관은
          <br />
          https://blog.naver.com/plithus 에서 확인 가능합니다.
          <br />
          <br />
          제 3 조 서비스
          <br />
          본 약관에 따라 플리더스가 제공하는 서비스는 웹사이트 및 모바일
          애플리케이션(“앱”)으로 <br />
          구성됩니다. 이러한 웹사이트 및 모바일 앱은 서비스에서 추천한 게임을
          다운로드하고 리뷰 및<br />
          또는 이용하는 대가로 이용자에게 상품을 제공합니다.
          <br />
          ​<br />
          <br />
          <br />
          제 4 조 용어 정의
          <br />
          ​<br />
          1. 회원 : 서비스를 이용하기 위해 서비스 사이트, 앱 등에 접속하거나
          기타 회사가 제공하는 절차를
          <br />
          거쳐 서비스 이용계약을 체결하고, 회사가 제공하는 서비스와 정보를
          지속적으로 제공받는 자, <br />
          혹은 이용할 수 있는 자를 뜻합니다.
          <br />
          ​<br />
          2. 멤버십 : 플리더스에 가입한 회원들을에게 부여되는 자격을 뜻합니다.
          멤버십에 대한 혜택은 <br />
          회원의 등급과 레벨에 따라 분류됩니다.
          <br />
          ​<br />
          3. 게임 유저, 멤버 : 개인회원으로 플리더스를 통해 게임을 플레이,
          플리더스를 통해 제공되는 <br />
          커뮤니티 활동을 이용하기 위해 가입한 회원을 뜻합니다.
          <br />
        </ContentBox>
      </ModalBox>
    </ModalBg>
  );
}
