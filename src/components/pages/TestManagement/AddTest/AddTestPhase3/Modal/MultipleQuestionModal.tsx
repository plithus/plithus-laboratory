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

const NumInputContainer = styled.div`
  border-radius: 5px;
  width: 443px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid #ededed;
  padding: 6px;
  margin-bottom: 30px;
`;

const NumInput = styled.input`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  outline: none;
  border: none;
`;

const NumBtn = styled.div`
  width: 38px;
  height: 38px;
  background-color: #f8f9fa;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Minus = styled.div`
  background-color: #9f9f9f;
  border-radius: 1%.6;
  width: 14px;
  height: 2px;
`;
const Plus = styled.div`
  background-color: #9f9f9f;
  border-radius: 1.69px;
  height: 14px;
  width: 2px;
  position: absolute;
  top: 12px;
  left: 18px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 50px;
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

const SubTitle = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 10px;
`;

const AddBtn = styled.div`
  width: 443px;
  height: 30px;
  background-color: #ebf5ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2282e9;
  font-weight: 500;
  font-size: 12px;
  border-radius: 5px;
`;

export default function MultipleQuestionModal(props: any) {
  const [count, setCount] = useState<number>(0);

  const minusCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const plusCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onChangeCount = (e: any) => {
    setCount(Number(e.target.value));
  };
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
            <Title>중복 투표 허용 갯수</Title>
            <Comment>*최대 5개까지 가능합니다.</Comment>
          </TitleContainer>
          <NumInputContainer>
            <NumBtn onClick={minusCount}>
              <Minus></Minus>
            </NumBtn>
            <NumInput type="number" value={count} onChange={onChangeCount} />
            <NumBtn onClick={plusCount}>
              <Minus></Minus>
              <Plus></Plus>
            </NumBtn>
          </NumInputContainer>
          <TitleContainer>
            <Title>선택지</Title>
            <Comment>*30자 이내로 작성해주세요.</Comment>
          </TitleContainer>
          <SubTitle>선택지 #1</SubTitle>
          <Input
            type="text"
            placeholder="ex) 가격이 얼마든 구매할 가치가 있다고 생각함"
            style={{ marginBottom: "10px" }}
          />
          <AddBtn>+ 선택지 추가하기</AddBtn>
          <BtnContainer>
            <Btn onClick={() => props.close()}>취소</Btn>
            <CompleteBtn>확인</CompleteBtn>
          </BtnContainer>
        </ContentBox>
      </ModalBox>
    </ModalBg>
  );
}
