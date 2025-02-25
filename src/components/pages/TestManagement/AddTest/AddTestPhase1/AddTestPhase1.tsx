import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GameProposalTestPlanSaveAPI from "./Data/GameProposalTestPlanSaveAPI";
import GameProposalCreationAPI from "./Data/GameProposalCreationAPI";

const Main = styled.main`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding-left: 195px;
`;

const TopWrapper = styled.div`
  padding-left: 125px;
  border-bottom: 1px solid #ededed;
  height: 157px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding-top: 30px;
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
  width: 160px;
  height: 55px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ededed;
  color: #c0c0c0;
  font-weight: 600;
  cursor: pointer;
`;

const PreviewBtn = styled(TopBtn)`
  color: white;
  background-color: #2282e9;
`;

const SaveBtn = styled(TopBtn)`
  color: #2282e9;
  border: 1px solid #2282e9;
`;

const NavCotainer = styled.div`
  color: #c0c0c0;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  width: 1280px;
  height: 37px;
`;

const Nav = styled.div`
  width: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AccentNav = styled(Nav)`
  border-bottom: 2px solid #2282e9;
  color: #2282e9;
`;

const ContentWrapper = styled.div`
  padding-top: 70px;
  padding-left: 125px;
  margin-bottom: 309px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

const Required = styled.span`
  color: #2282e9;
  font-weight: 600;
  font-size: 18px;
`;

const SubTitle = styled.span`
  display: block;
  color: #9f9f9f;
  margin-top: 8px;
  margin-bottom: 20px;
  line-height: 26px;
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 100px;
`;

const PlatformLabel = styled.label`
  width: 209px;
  height: 60px;
  color: #9f9f9f;
  font-weight: 500;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  input[type="radio"]:checked + & {
    color: white;
    background-color: #2282e9;
  }
`;

const RadioInput = styled.input`
  display: none;
`;

const NumInputContainer = styled.div`
  border-radius: 5px;
  width: 458px;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 6px;
  margin-bottom: 100px;
`;

const NumInput = styled.input`
  font-weight: 600;
  text-align: center;
  outline: none;
  border: none;
`;

const NumBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f8f9fa;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Minus = styled.div`
  background-color: #9f9f9f;
  border-radius: 3.2px;
  width: 26px;
  height: 3px;
`;
const Plus = styled.div`
  background-color: #9f9f9f;
  border-radius: 3.2px;
  height: 26px;
  width: 3px;
  position: absolute;
  top: 13px;
  left: 24px;
`;

const CheckBoxContainer = styled.div`
  border: 1px solid #ededed;
  background-color: white;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 100px;
  width: 458px;
  height: 62px;
  display: flex;
  align-items: center;
  padding: 0px 12px;
`;

const CheckBoxLabel = styled.label`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #f8f9fa;
  margin-right: 36px;
  position: relative;

  input[type="checkbox"]:checked + & {
    background-color: #2282e9;
  }
`;

const CheckBoxCheck = styled.div`
  width: 12px;
  height: 20px;
  rotate: 45deg;
  border-bottom: 3px solid #f8f9fa;
  border-right: 3px solid #f8f9fa;
  position: absolute;
  top: 7px;
  left: 15px;

  input[type="checkbox"]:checked > & {
    border-bottom: 3px solid white;
    border-right: 3px solid white;
  }
`;

const CheckBoxSpan = styled.span`
  font-weight: 500;
  color: #797979;
`;

const CheckInput = styled.input`
  display: none;
`;

export default function AddTestPhase1() {
  const { register, getValues } = useForm();

  const [userCount, setUserCount] = useState<number>(0);
  const [recruitmentCount, setRecruitmentCount] = useState<number>(0);
  const [testCount, setTestCount] = useState<number>(0);

  const minusUserCount = () => {
    setUserCount((prevCount) => prevCount - 1);
  };

  const plusUserCount = () => {
    setUserCount((prevCount) => prevCount + 1);
  };

  const onChangeUserCount = (e: any) => {
    setUserCount(Number(e.target.value));
  };

  const minusRecruitmentCount = () => {
    setRecruitmentCount((prevCount) => prevCount - 1);
  };

  const plusRecruitmentCount = () => {
    setRecruitmentCount((prevCount) => prevCount + 1);
  };

  const onChangeRecruitmentCount = (e: any) => {
    setRecruitmentCount(Number(e.target.value));
  };

  const minusTestCount = () => {
    setTestCount((prevCount) => prevCount - 1);
  };

  const plusTestCount = () => {
    setTestCount((prevCount) => prevCount + 1);
  };

  const onChangeTestCount = (e: any) => {
    setTestCount(Number(e.target.value));
  };

  const queryClient = useQueryClient();

  const gameProposalTestPlanSaveMutation = useMutation<
    unknown,
    Error,
    { id: number; formData: FormData }
  >({
    mutationFn: ({ id, formData }) => GameProposalTestPlanSaveAPI(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["gameProposalTestPlanSaveMutation"],
      });
    },
  });

  const CallGameProposalTestPlanSaveAPI = async (gameProposalId: any) => {
    const formData = new FormData();

    const desiredTesterCount = getValues("desiredTesterCount");
    const adultCheckRequired = getValues("adultCheckRequired");
    const recruitDays = getValues("recruitDays");
    const testDays = getValues("testDays");

    formData.append("desiredTesterCount", desiredTesterCount);
    formData.append("adultCheckRequired", adultCheckRequired);
    formData.append("recruitDays", recruitDays);
    formData.append("testDays", testDays);

    gameProposalTestPlanSaveMutation.mutate({ id: gameProposalId, formData });
  };

  const CheckBody = useCallback(() => {
    const desiredTesterCount = getValues("desiredTesterCount");
    const recruitDays = getValues("recruitDays");
    const testDays = getValues("testDays");

    const allFieldsFilled = desiredTesterCount && recruitDays && testDays;

    return allFieldsFilled ? false : true;
  }, [getValues]);

  const gameProposalCreationMutation = useMutation({
    mutationFn: GameProposalCreationAPI,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["gameProposalCreationMutation"],
      });
      CallGameProposalTestPlanSaveAPI(data.data.gameProposalId);
    },
  });

  const CallGameProposalCreationAPI = async () => {
    const check = CheckBody();
    if (!check) {
      gameProposalCreationMutation.mutate();
    }
  };

  return (
    <Main>
      <TopWrapper>
        <TopContainer>
          <Link to="/home/test-list/add" style={{ textDecoration: "none" }}>
            <TopTitle>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ marginRight: "20px" }}
              />
              1단계 테스트 플랜
            </TopTitle>
          </Link>
          <BtnContainer>
            <PreviewBtn>미리보기</PreviewBtn>
            <SaveBtn onClick={CallGameProposalCreationAPI}>저장하기</SaveBtn>
          </BtnContainer>
        </TopContainer>
        <NavCotainer>
          <AccentNav>1. 테스트 플랜</AccentNav>
          <Nav>2. 프로젝트 정보</Nav>
          <Nav>3. 질문 구성</Nav>
          <Nav>4. 견적 확인</Nav>
        </NavCotainer>
      </TopWrapper>
      <ContentWrapper>
        <Title>
          게임 테스트 유형
          <Required> *</Required>
        </Title>
        <SubTitle>OBT의 경우 고객센터 문의하기로 연락주시기 바랍니다.</SubTitle>
        <LabelContainer>
          <RadioInput type="radio" id="cbt" name="platform" />
          <PlatformLabel htmlFor="cbt">CBT</PlatformLabel>
        </LabelContainer>
        <Title>
          희망 테스트 유저 수<Required> *</Required>
        </Title>
        <SubTitle>원하시는 유저 테스트 희망 수를 설정해주세요.</SubTitle>
        <NumInputContainer>
          <NumBtn onClick={minusUserCount}>
            <Minus></Minus>
          </NumBtn>
          <NumInput
            type="number"
            value={userCount}
            {...register("desiredTesterCount", {
              onChange: onChangeUserCount,
            })}
          />
          <NumBtn onClick={plusUserCount}>
            <Minus></Minus>
            <Plus></Plus>
          </NumBtn>
        </NumInputContainer>
        <Title>성인인증</Title>
        <SubTitle>성인 인증이 필요한 경우에 체크해주세요.</SubTitle>
        <CheckBoxContainer>
          <CheckInput
            type="checkbox"
            id="check"
            {...register("adultCheckRequired")}
          />
          <CheckBoxLabel htmlFor="check">
            <CheckBoxCheck></CheckBoxCheck>
          </CheckBoxLabel>
          <CheckBoxSpan>19세 미만 청소년은 참여할 수 없습니다.</CheckBoxSpan>
        </CheckBoxContainer>
        <Title>
          모집 일수<Required> *</Required>
        </Title>
        <SubTitle>
          원하는 유저 모집 일수를 설정해주세요.
          <br />
          최소 5일부터 최대 14일까지 설정 가능합니다.
        </SubTitle>
        <NumInputContainer>
          <NumBtn onClick={minusRecruitmentCount}>
            <Minus></Minus>
          </NumBtn>
          <NumInput
            type="number"
            value={recruitmentCount}
            {...register("recruitDays", {
              onChange: onChangeRecruitmentCount,
            })}
          />
          <NumBtn onClick={plusRecruitmentCount}>
            <Minus></Minus>
            <Plus></Plus>
          </NumBtn>
        </NumInputContainer>
        <Title>
          테스트 일수<Required> *</Required>
        </Title>
        <SubTitle>원하는 테스트 일수를 설정해주세요.</SubTitle>
        <NumInputContainer>
          <NumBtn onClick={minusTestCount}>
            <Minus></Minus>
          </NumBtn>
          <NumInput
            type="number"
            value={testCount}
            {...register("testDays", {
              onChange: onChangeTestCount,
            })}
          />
          <NumBtn onClick={plusTestCount}>
            <Minus></Minus>
            <Plus></Plus>
          </NumBtn>
        </NumInputContainer>
      </ContentWrapper>
    </Main>
  );
}
