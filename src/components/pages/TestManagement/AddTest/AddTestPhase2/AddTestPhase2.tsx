import { faChevronLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GuideImg1 from "../../../../../assets/images/guideImg1.png";
import GuideImg3 from "../../../../../assets/images/guideImg3.png";
import GuideImg4 from "../../../../../assets/images/guideImg4.png";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

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
  margin-bottom: 285px;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Comment = styled.span`
  display: block;
  line-height: 26px;
  color: #9f9f9f;
  margin-bottom: 20px;
`;

const SelectContainer = styled.div`
  position: relative;
`;

const SelectBox = styled.div`
  width: 730px;
  height: 71px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #2282e9;
  padding: 0px 40px;
  position: relative;
  margin-bottom: 16px;
  z-index: 0;
  position: relative;
`;

const SelectText = styled.span`
  font-size: 14px;
  color: #9f9f9f;
  font-weight: 500;
  position: absolute;
  top: 26px;
  left: 40px;
  display: flex;
`;

const PlatformContainer = styled.div`
  width: 730px;
  height: 207px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #2282e9;
  position: absolute;
  top: 70px;
  z-index: 5;
  :not(:last-child) {
    border-bottom: 1px solid #ededed;
  }
  overflow: hidden;
`;

const Platform = styled.div`
  padding: 0px 40px;
  height: 69px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #9f9f9f;
  cursor: pointer;
  &:hover {
    background-color: #2282e9;
    color: white;
  }
`;

const GenreContainer = styled.div`
  width: 730px;
  height: 207px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  top: 71px;
  z-index: 5;
`;

const Genre = styled.div`
  width: 100%;
  font-size: 12px;
  color: #9f9f9f;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ededed;
  &:hover {
    background-color: #2282e9;
    color: white;
  }
`;

const Input = styled.input`
  width: 730px;
  height: 71px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #2282e9;
  padding: 0px 40px;
  position: relative;
  margin-bottom: 16px;
  box-sizing: border-box;
  color: #2282e9;
  font-size: 14px;
  outline: none;
  ::placeholder {
    color: #9f9f9f;
  }
`;

const TextArea = styled.textarea`
  width: 730px;
  height: 280px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #2282e9;
  padding: 30px 40px;
  position: relative;
  box-sizing: border-box;
  resize: none;
  font-size: 14px;
  color: #2282e9;
  outline: none;
  ::placeholder {
    color: #9f9f9f;
  }
`;

const Bar = styled.div`
  width: 1280px;
  height: 1px;
  background-color: #ededed;
  margin-bottom: 70px;
`;

const GuideBox = styled.div`
  width: 730px;
  height: 236px;
  background-color: white;
  border-radius: 5px;
  padding: 22px 22px 22px 40px;
  display: flex;
  gap: 67px;
  margin-bottom: 70px;
  border: 1px solid #ededed;
`;

const GuideTitle = styled.span`
  display: block;
  font-weight: 600;
  margin-bottom: 16px;
`;

const GuideDesc = styled.span`
  font-size: 12px;
  color: #797979;
  line-height: 20px;
`;

const GuideImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  color: #797979;
  font-size: 12px;
`;

const AddImg = styled.label`
  width: 730px;
  height: 110px;
  border: 1px solid #2282e9;
  border-radius: 5px;
  background-color: white;
  color: #2282e9;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const Plus = styled.span`
  color: #2282e9;
  font-size: 28px;
`;

const SubTitle = styled.span`
  display: block;
  color: #4b4b4b;
  font-weight: 500;
  margin-bottom: 10px;
`;

const LinkInputContainer = styled.div`
  width: 730px;
  height: 65px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #2282e9;
  padding: 0px 20px;
  font-size: 14px;
  color: #2282e9;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const LinkBar = styled.div`
  width: 1px;
  height: 33px;
  background-color: #ededed;
  margin-left: 50px;
  margin-right: 20px;
`;

const LinkInput = styled.input`
  font-size: 14px;
  font-weight: 500;
  color: #2282e9;
  outline: none;
  border: none;
`;

const CommentBlue = styled.span`
  display: block;
  font-size: 13px;
  color: #2282e9;
  line-height: 20px;
`;

const GenreBadgeContainer = styled.span`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  height: 100%;
  align-items: center;
  gap: 14px;
`;

const GenreBadge = styled.div`
  padding: 10px 20px;
  background-color: #2282e9;
  color: white;
  border-radius: 50px;
`;

const Count = styled.div`
  width: 730px;
  display: flex;
  justify-content: end;
  color: #c0c0c0;
  font-weight: 500;
  position: absolute;
  bottom: 16px;
  right: 30px;
`;

const TextAreaContainer = styled.div`
  width: 730px;
  position: relative;
  margin-bottom: 70px;
`;

interface GenreId {
  id: number;
  content: string;
}

const genre = [
  { id: "TRPG_GAME", content: "TRPG" },
  { id: "RTS_GAME", content: "RTS" },
  { id: "DEFENSE_GAME", content: "디펜스" },
  { id: "TURN_BASE_GAME", content: "턴제" },
  { id: "MERGE_GAME", content: "머지(merge-합성)" },
  { id: "FARMING_GAME", content: "농사" },
  { id: "PUZZLE_GAME", content: "퍼즐" },
  { id: "ARCADE_GAME", content: "아케이드" },
  { id: "ACTION_GAME", content: "액션" },
  { id: "ROGUE_LITE_GAME", content: "로그라이트" },
  { id: "SHOOTING_GAME", content: "슈팅" },
  { id: "CASUAL", content: "캐주얼" },
  { id: "STRATEGY_GAME", content: "전술" },
  { id: "MANAGEMENT_GAME", content: "경영(타이쿤)" },
  { id: "SIMULATION_GAME", content: "시뮬레이션" },
  { id: "IDLE_TYPE_GAME", content: "방치형" },
  { id: "RACING_GAME", content: "레이싱" },
  { id: "SPORTS_GAME", content: "스포츠" },
];

export default function AddTestPhase2() {
  const { register } = useForm();
  const [platform, setPlatform] = useState("게임의 플랫폼을 선택해 주세요.");
  const [openPlatform, setOpenPlatform] = useState(false);
  const [genreId, setGenreId] = useState<GenreId[]>([]);
  const [openGenre, setOpenGenre] = useState(false);

  const [description, setDescription] = useState<string>("");
  const [cbtDescription, setCbtDescription] = useState<string>("");

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleCBTDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCbtDescription(e.target.value);
  };

  const clickPlatform = (text: string) => {
    setOpenPlatform(false);
    setPlatform(text);
  };

  const clickGenre = (genre: any) => {
    setOpenGenre(false);
    if (!genreId.some((item: any) => item.id === genre.id)) {
      setGenreId((current: GenreId[]) => [
        ...current,
        { id: genre.id, content: genre.content },
      ]);
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
              2단계 프로젝트 정보
            </TopTitle>
          </Link>
          <BtnContainer>
            <PreviewBtn>미리보기</PreviewBtn>
            <SaveBtn>저장하기</SaveBtn>
          </BtnContainer>
        </TopContainer>
        <NavCotainer>
          <Nav>1. 테스트 플랜</Nav>
          <AccentNav>2. 프로젝트 정보</AccentNav>
          <Nav>3. 질문 구성</Nav>
          <Nav>4. 견적 확인</Nav>
        </NavCotainer>
      </TopWrapper>
      <ContentWrapper>
        <Title>게임 기본 설명</Title>
        <Comment>
          유저들이 게임을 잘 이해할 수 있도록 명확하게 소개해주세요.
        </Comment>
        <SelectContainer>
          <SelectBox onClick={() => setOpenPlatform((prev) => !prev)}>
            {platform === "게임의 플랫폼을 선택해 주세요." ? (
              <SelectText>{platform}</SelectText>
            ) : (
              <SelectText style={{ color: "#2282e9" }}>{platform}</SelectText>
            )}

            <FontAwesomeIcon
              icon={faPlay}
              style={{
                position: "absolute",
                right: "40px",
                top: "28px",
                rotate: "90deg",
                color: "#8e8e8e",
              }}
            />
          </SelectBox>
          {openPlatform && (
            <PlatformContainer>
              <Platform onClick={() => clickPlatform("모바일")}>
                모바일
              </Platform>
              <Platform onClick={() => clickPlatform("PC")}>PC</Platform>
              <Platform onClick={() => clickPlatform("모바일 + PC")}>
                모바일 + PC
              </Platform>
            </PlatformContainer>
          )}
        </SelectContainer>

        <Input type="text" placeholder="게임 이름을 작성해주세요." />
        <SelectContainer>
          <SelectBox onClick={() => setOpenGenre((prev) => !prev)}>
            {genreId.length === 0 ? (
              <SelectText>
                게임 장르를 선택해주세요. 최대 3개까지 선택 가능합니다.
              </SelectText>
            ) : (
              <GenreBadgeContainer>
                {genreId.map((item) => (
                  <GenreBadge>{item.content}</GenreBadge>
                ))}
              </GenreBadgeContainer>
            )}

            <FontAwesomeIcon
              icon={faPlay}
              style={{
                position: "absolute",
                right: "40px",
                top: "28px",
                rotate: "90deg",
                color: "#8e8e8e",
              }}
            />
          </SelectBox>
          {openGenre && (
            <GenreContainer>
              {genre.map((item) => (
                <Genre onClick={() => clickGenre(item)}>{item.content}</Genre>
              ))}
              <Genre></Genre>
              <Genre></Genre>
            </GenreContainer>
          )}
        </SelectContainer>
        <TextAreaContainer>
          <TextArea
            placeholder="게임 설명 및 플레이 방식을 작성해주세요."
            maxLength={2000}
            {...register("description", {
              onChange: handleDescriptionChange,
            })}
          />
          <Count>
            <span style={{ color: "#2282e9", marginRight: "5px" }}>
              {description.length}
            </span>{" "}
            / 2000
          </Count>
        </TextAreaContainer>
        <Bar />
        <Title>CBT 정보</Title>
        <Comment>CBT 참여 방법 및 유의사항을 설명해주세요.</Comment>
        <TextAreaContainer style={{ marginBottom: "30px" }}>
          <TextArea
            maxLength={800}
            placeholder="CBT 신청하기를 클릭하면 팝업창에 표시되는 텍스트 입니다. "
            {...register("cbtDescription", {
              onChange: handleCBTDescriptionChange,
            })}
          />
          <Count>
            <span style={{ color: "#2282e9", marginRight: "5px" }}>
              {cbtDescription.length}
            </span>{" "}
            / 800
          </Count>
        </TextAreaContainer>
        <GuideBox>
          <div>
            <GuideTitle>💡 GUIDE</GuideTitle>
            <GuideDesc>
              CBT 신청하기 팝업창에 <br />
              표시되는 텍스트 입니다.
            </GuideDesc>
          </div>
          <img src={GuideImg1} alt="img" />
        </GuideBox>
        <Bar />
        <Title>게임 이미지</Title>
        <Comment>영상 및 이미지를 규격에 맞게 추가해주세요.</Comment>
        <AddImg>
          <Plus>+</Plus>게임 이미지 추가하기
        </AddImg>
        <Input style={{ borderColor: "#ededed", marginBottom: "70px" }} />
        <Bar />
        <Title>게임 다운로드 방식</Title>
        <Comment>
          원하는 형태의 다운로드 방식을 선택해주세요. 중복으로 작성이
          가능합니다.
        </Comment>
        <SubTitle>링크 형태</SubTitle>
        <LinkInputContainer>
          <span>안드로이드 다운로드 링크</span>
          <LinkBar></LinkBar>
          <LinkInput />
        </LinkInputContainer>
        <SubTitle>APK 파일 다운로드 형태 (모바일)</SubTitle>
        <AddImg>
          <Plus>+</Plus>APK 게임 파일 업로드
        </AddImg>
        <Bar />
        <Title>테스트 미션 설정</Title>
        <Comment>
          게임 플레이 후 1단계 설문 참여시 도달 미션을 설정해주세요.
          <br />
          상세하게 표시해주는 것이 좋습니다.
        </Comment>
        <SubTitle>미션 설명</SubTitle>
        <TextArea style={{ height: "80px" }} />
        <SubTitle>미션 예시 이미지 등록</SubTitle>
        <Comment>미션 확인 부분을 강조 해주시는 것을 추천드립니다.</Comment>
        <AddImg>
          <Plus>+</Plus>미션 이미지 추가하기
        </AddImg>
        <GuideBox style={{ gap: "0px", height: "336px" }}>
          <div style={{ marginRight: "43px" }}>
            <GuideTitle>💡 GUIDE</GuideTitle>
            <GuideDesc>
              이미지를 등록했을시 <br />
              보여지는 화면 예시입니다!
              <br />
              참고하여 유형을 선택해
              <br />
              이미지를 추가해주세요.
            </GuideDesc>
          </div>
          <GuideImg style={{ marginRight: "28px" }}>
            <img
              src={GuideImg3}
              alt="img"
              style={{ width: "220px", height: "269px" }}
            />
            <span>» 가로형 이미지 적용 예시</span>
          </GuideImg>
          <GuideImg>
            <img
              src={GuideImg4}
              alt="img"
              style={{ width: "220px", height: "269px" }}
            />
            <span>» 세로형 이미지 적용 예시</span>
          </GuideImg>
        </GuideBox>
        <Bar />
        <Title>지급재화</Title>
        <Comment>
          테스트 참여시 유저에게 기본으로 지급되어야 하는 포인트는 1000 포인트
          입니다. <br />
          유저에게 지급되는 재화가 높을 수록 안정적인 테스터 모집과 높은 등급의
          유저와 매칭될 수 있습니다.
        </Comment>
        <Input />
        <CommentBlue>
          지급재화는 1000 포인트 이상으로 작성해야 하며, 1000 포인트 초과시 추가
          금액(차액x희망 유저 수)이 발생됩니다. <br />
          ex) 지급재화 1,500 포인트 / 희망 유저 수 50명 -&gt; 500x50 = 25,000
          추가금액 발생
        </CommentBlue>
      </ContentWrapper>
    </Main>
  );
}
