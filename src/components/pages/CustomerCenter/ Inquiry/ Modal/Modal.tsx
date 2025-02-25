import { useState } from "react";
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
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 520px;
  height: 331px;
`;

const Title = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 46px;
`;

const Content = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8e8e8e;
  line-height: 24px;
  margin-bottom: 58px;
  text-align: center;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 25px;
`;

const Btn = styled.button`
  width: 203px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  border-radius: 37px;
  cursor: pointer;
  border: none;
`;

const CancelBtn = styled(Btn)`
  background-color: #c0c0c0;
`;

const ConfirmBtn = styled(Btn)`
  background-color: ${(props) => (props.disabled ? "#c0c0c0" : "#2282e9")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export default function Modal(props: any) {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    setIsLoading(true);
    props.CallAPI().then(() => {
      setIsLoading(false);
      props.close();
    });
  };

  return (
    <ModalBg>
      <ModalBox>
        <Title>문의하기를 등록하시겠습니까?</Title>
        <Content>
          문의하기 답변은 영업일 기준 0-2일 정도 소요됩니다.
          <br />
          최대한 빠른 답변 전달 드리도록 하겠습니다.
        </Content>
        <BtnContainer>
          <CancelBtn onClick={() => props.close()}>취소하기</CancelBtn>
          <ConfirmBtn onClick={onClick} disabled={isLoading}>
            {isLoading ? "Loading..." : "등록하기"}
          </ConfirmBtn>
        </BtnContainer>
      </ModalBox>
    </ModalBg>
  );
}
