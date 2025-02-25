import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { formatDate } from "../../../utils";

import AdModal from "./Modal/AdModal";

import image from "../../../assets/images/image.png";

import OverviewAPI from "./Data/OverviewAPI";
import CompanyInfoCheckAPI from "./Data/CompanyInfoCheckAPI";
import HomeSkipPromotionAPI from "./Data/HomeSkipPromotionAPI";
import MakerTesterOverviewAPI from "./Data/MakerTesterOverviewAPI";
import MakerGameProposalOverviewAPI from "./Data/MakerGameProposalOverviewAPI";

const Main = styled.main`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding-left: 320px;
  padding-top: 40px;
`;

const CompanyInfoContainer = styled.div`
  width: 1280px;
  height: 110px;
  background-color: white;
  padding: 0px 40px;
  border-radius: 5px;
  margin-bottom: 50px;
  font-weight: 500;
  color: #555555;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const CompanyInfoSpan = styled.span`
  color: #2282e9;
  text-decoration: underline;
`;

const InfoWrapper = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const InfoContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 30px 48px 32px 40px;
`;

const InfoTitleContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 28px;
`;

const InfoTitle = styled.span`
  font-weight: 600;
  color: #2282e9;
  margin-right: 12px;
`;

const InfoDate = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #9f9f9f;
`;

const CountWrapper = styled.div`
  display: grid;
  grid-template-columns: 146fr 64fr;
  height: 64px;
`;

const CountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
`;

const PersonnelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const PersonnelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  color: #797979;
  font-size: 12px;
  font-weight: 500;
`;

const ColorCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #2282e9;
`;

const TestcompleteCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  height: 64px;
`;

const TestBtn = styled.button`
  width: 1280px;
  height: 70px;
  margin-bottom: 50px;
  background-color: #2282e9;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
`;

const Title = styled.span`
  display: block;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
`;

const BoxContainer = styled.div`
  margin-bottom: 50px;
`;

const BlankBox = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #c0c0c0;
  line-height: 26px;
  width: 300px;
  height: 300px;
`;

const BoxContent = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const BoxLinear = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(#ffffff00, #ffffff51 55%, #ffffff 75%);
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 26px 30px;
`;

const BoxTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 13px;
`;

const BoxDate = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #9f9f9f;
`;

export default function Home() {
  const [modal, setModal] = useState(false);
  const queryClient = useQueryClient();

  function modalClose(check: boolean) {
    if (check) {
      CallPromotionMutationAPI();
    }
    setModal(false);
  }

  const { data: overviewData } = useQuery({
    queryKey: ["overview"],
    queryFn: async () => await OverviewAPI(),
  });

  const { data: companyInfoCheckData } = useQuery({
    queryKey: ["companyInfoCheck"],
    queryFn: async () => await CompanyInfoCheckAPI(),
  });

  const { data: MakerGameProposalOverviewData } = useQuery({
    queryKey: ["MakerGameProposalOverview"],
    queryFn: async () => await MakerGameProposalOverviewAPI(),
  });

  const { data: makerTesterOverviewData, refetch: makerTesterOverviewRefetch } =
    useQuery({
      queryKey: ["makerTesterOverview"],
      queryFn: async () => await MakerTesterOverviewAPI(),
      enabled: false,
    });

  const homeSkipPromotionMutation = useMutation({
    mutationFn: HomeSkipPromotionAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["homeSkipPromotionMutation"],
      });
    },
  });

  const CallPromotionMutationAPI = async () => {
    homeSkipPromotionMutation.mutate();
  };

  useEffect(() => {
    if (overviewData?.data.showPromotionPopup) {
      setModal(true);
    } else {
      setModal(false);
    }
  }, [overviewData?.data.showPromotionPopup]);

  useEffect(() => {
    if (companyInfoCheckData?.data.everApproved) {
      makerTesterOverviewRefetch();
    }
  }, [companyInfoCheckData?.data.everApproved, makerTesterOverviewRefetch]);

  return (
    <Main>
      {modal && <AdModal close={modalClose} />}
      {companyInfoCheckData?.data.everApproved === false && (
        <CompanyInfoContainer>
          <span>
            잠깐! 프로젝트 진행을 위해 반드시 게임사 인증이 필요합니다. 필요한
            자료 제출을 완료하셨을까요?
          </span>
          <Link to="/home/company-info" style={{ textDecoration: "none" }}>
            <CompanyInfoSpan>게임사 인증하기</CompanyInfoSpan>
          </Link>
        </CompanyInfoContainer>
      )}

      <InfoWrapper>
        <InfoContainer>
          <InfoTitleContainer>
            <InfoTitle>참여 인원</InfoTitle>
            <InfoDate>{formatDate(Date())} 기준</InfoDate>
          </InfoTitleContainer>
          <TestcompleteCountContainer>
            {makerTesterOverviewData
              ? makerTesterOverviewData.data.participants + "명"
              : "--"}
          </TestcompleteCountContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoTitleContainer>
            <InfoTitle>1단계 완료 인원</InfoTitle>
            <InfoDate>{formatDate(Date())} 기준</InfoDate>
          </InfoTitleContainer>
          <CountWrapper>
            <CountContainer>
              {makerTesterOverviewData
                ? makerTesterOverviewData.data.phaseOneCompletion.total + "명"
                : "--"}
            </CountContainer>
            <PersonnelWrapper>
              <PersonnelContainer>
                <ColorCircle></ColorCircle>
                <span>
                  승인{" "}
                  {makerTesterOverviewData
                    ? makerTesterOverviewData.data.phaseOneCompletion.approved
                    : "-"}
                  명
                </span>
              </PersonnelContainer>
              <PersonnelContainer>
                <ColorCircle
                  style={{ backgroundColor: "#FF1F00" }}
                ></ColorCircle>
                <span>
                  반려{" "}
                  {makerTesterOverviewData
                    ? makerTesterOverviewData.data.phaseOneCompletion.rejected
                    : "-"}
                  명
                </span>
              </PersonnelContainer>
              <PersonnelContainer>
                <ColorCircle
                  style={{ backgroundColor: "#8E8E8E" }}
                ></ColorCircle>
                <span>
                  대기{" "}
                  {makerTesterOverviewData
                    ? makerTesterOverviewData.data.phaseOneCompletion.pending
                    : "-"}
                  명
                </span>
              </PersonnelContainer>
            </PersonnelWrapper>
          </CountWrapper>
        </InfoContainer>
        <InfoContainer>
          <InfoTitleContainer>
            <InfoTitle>2단계 완료 인원</InfoTitle>
            <InfoDate>{formatDate(Date())} 기준</InfoDate>
          </InfoTitleContainer>
          <CountWrapper>
            <CountContainer>
              {makerTesterOverviewData
                ? makerTesterOverviewData.data.phaseTwoCompletion.total + "명"
                : "--"}
            </CountContainer>
            <PersonnelWrapper>
              <PersonnelContainer>
                <ColorCircle></ColorCircle>
                <span>
                  승인{" "}
                  {makerTesterOverviewData
                    ? makerTesterOverviewData.data.phaseTwoCompletion.approved
                    : "-"}
                  명
                </span>
              </PersonnelContainer>
              <PersonnelContainer>
                <ColorCircle
                  style={{ backgroundColor: "#FF1F00" }}
                ></ColorCircle>
                <span>
                  반려{" "}
                  {makerTesterOverviewData
                    ? makerTesterOverviewData.data.phaseTwoCompletion.rejected
                    : "-"}
                  명
                </span>
              </PersonnelContainer>
              <PersonnelContainer>
                <ColorCircle
                  style={{ backgroundColor: "#8E8E8E" }}
                ></ColorCircle>
                <span>
                  대기{" "}
                  {makerTesterOverviewData
                    ? makerTesterOverviewData.data.phaseTwoCompletion.pending
                    : "-"}
                  명
                </span>
              </PersonnelContainer>
            </PersonnelWrapper>
          </CountWrapper>
        </InfoContainer>
        <InfoContainer>
          <InfoTitleContainer>
            <InfoTitle>테스트 완료 인원</InfoTitle>
            <InfoDate>{formatDate(Date())} 기준</InfoDate>
          </InfoTitleContainer>
          <TestcompleteCountContainer>
            {makerTesterOverviewData
              ? makerTesterOverviewData.data.totalCompleted + "명"
              : "--"}
          </TestcompleteCountContainer>
        </InfoContainer>
      </InfoWrapper>
      <TestBtn>테스트 등록하기</TestBtn>
      <Title>진행 중인 게임 테스트</Title>
      <BoxContainer>
        {MakerGameProposalOverviewData?.data.ongoingGames.length === 0 ? (
          <BlankBox>
            현재 진행 중인 <br />
            테스트가 없습니다 :(
          </BlankBox>
        ) : (
          MakerGameProposalOverviewData?.data.ongoingGames.map((game: any) => (
            <BoxContent
              id={game.gameId}
              style={{ backgroundImage: `url(${game.bannerUrl})` }}
            >
              <BoxLinear>
                <BoxTitle>{game.title}</BoxTitle>
                <BoxDate>
                  {formatDate(game.startedAt) +
                    " - " +
                    formatDate(game.expiredAt)}
                </BoxDate>
              </BoxLinear>
            </BoxContent>
          ))
        )}
      </BoxContainer>
      <Title>작성 중인 게임 테스트</Title>
      <BoxContainer style={{ marginBottom: "147px" }}>
        {MakerGameProposalOverviewData?.data.draftGames.length === 0 ? (
          <BlankBox>
            작성 중인 <br />
            테스트가 없습니다 :(
          </BlankBox>
        ) : (
          MakerGameProposalOverviewData?.data.draftGames.map((game: any) => (
            <BoxContent
              id={game.gameId}
              style={{ backgroundImage: `url(${game.bannerUrl})` }}
            >
              <BoxLinear>
                <BoxTitle>{game.title}</BoxTitle>
                <BoxDate>
                  {formatDate(game.startedAt) +
                    " - " +
                    formatDate(game.expiredAt)}
                </BoxDate>
              </BoxLinear>
            </BoxContent>
          ))
        )}
      </BoxContainer>
    </Main>
  );
}
