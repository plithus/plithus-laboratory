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
  top: calc(50vh - 300px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 503px;
  height: 569px;
  overflow: hidden;
`;

const TitleBox = styled.div`
  display: flex;
  height: 49px;
  padding: 15px 30px;
  font-weight: 600;
  border-bottom: 1px solid #ededed;
`;

const ContentBox = styled.div`
  padding: 26px 30px 30px 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
`;

const Comment = styled.span`
  font-size: 12px;
  color: #9f9f9f;
`;

const Input = styled.input`
  width: 443px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f8f9fa;
  border: none;
  outline: none;
  padding: 0px 20px;
  margin-bottom: 30px;

  ::placeholder {
    color: #9f9f9f;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 191px;
`;

const Btn = styled.button`
  width: 214px;
  height: 55px;
  border-radius: 37px;
  color: white;
  font-weight: 600;
  border: none;
  background-color: #c0c0c0;
  cursor: pointer;
`;

const CompleteBtn = styled(Btn)`
  background-color: #2282e9;
`;

export default function SubjectiveQuestionModal(props: any) {
  return (
    <ModalBg>
      <ModalBox>
        <TitleBox>객관식 질문 추가</TitleBox>
        <ContentBox>
          <TitleContainer>
            <Title>질문</Title>
            <Comment>*40자 이내로 작성해주세요.</Comment>
          </TitleContainer>
          <Input
            type="text"
            placeholder="ex) 어느 정도의 가격으로 형성되어야 구매하기 적합하다고 생각하시나요?"
          />
          <TitleContainer>
            <Title>답변길이</Title>
            <Comment>
              *숫자만 입력이 가능하며, 최소 답변길이를 작성해주세요.
            </Comment>
          </TitleContainer>
          <Input type="number" />
          <BtnContainer>
            <Btn onClick={() => props.close()}>취소</Btn>
            <CompleteBtn>확인</CompleteBtn>
          </BtnContainer>
        </ContentBox>
      </ModalBox>
    </ModalBg>
  );
}
