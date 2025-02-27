import {
  faCheck,
  faChevronLeft,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GuideImg1 from "../../../../../assets/images/guideImg1.png";
import GuideImg3 from "../../../../../assets/images/guideImg3.png";
import GuideImg4 from "../../../../../assets/images/guideImg4.png";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import ImageModal from "./Modal/ImageModal";

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
  cursor: pointer;
  margin-bottom: 40px;
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

const DirectionContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
`;

const Direction = styled.label`
  width: 359px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  color: #555555;
  cursor: pointer;

  input[type="radio"]:checked + & {
    background-color: #2282e9;
    color: white;
  }
`;

const PointSpan = styled.span`
  position: absolute;
  color: #2282e9;
  font-weight: 500;
  font-size: 14px;
  bottom: 41px;
  right: 30px;
`;

const ThumbnailImg = styled.img`
  width: 80px;
  height: 80px;
`;

const BackgroundImg = styled.img`
  width: 142px;
  height: 80px;
`;

const ImgChangeBtn = styled.label`
  cursor: pointer;
  width: 173px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #ededed;
  color: #797979;
  font-weight: 500;
  font-size: 14px;
  margin-left: 35px;
  margin-right: 30px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImagesContainer = styled.div`
  margin-left: 18px;
  display: flex;
  gap: 8px;
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
  const MAX_FILES = 5;
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB

  const { register, setValue } = useForm();
  const [platform, setPlatform] = useState("게임의 플랫폼을 선택해 주세요.");
  const [openPlatform, setOpenPlatform] = useState(false);
  const [genreId, setGenreId] = useState<GenreId[]>([]);
  const [openGenre, setOpenGenre] = useState(false);

  const [description, setDescription] = useState<string>("");
  const [cbtDescription, setCbtDescription] = useState<string>("");

  const [imageModal, setImageModal] = useState(false);

  const [thumbnailImage, setThumbnailImage] = useState<File | undefined>();
  const [backgroundImage, setBackgroundImage] = useState<File | undefined>();
  const [surveyBackgroundImage, setSurveyBackgroundImage] = useState<
    File | undefined
  >();
  const [ingameImages, setIngameImages] = useState<File[]>([]);
  const [phaseOneExampleImage, setPhaseOneExampleImage] = useState<
    File | undefined
  >();

  const closeImageModal = () => {
    setImageModal(false);
  };

  const openImageModal = () => {
    setImageModal(true);
  };

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

  const ThumbnailImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileSizeInMB = selectedFile.size / (1024 * 1024);
        if (fileSizeInMB < 1) {
          setValue("thumbnail", selectedFile);
          encodeThumbnailImageToBase64(selectedFile);
        } else {
          alert("파일 크기가 1MB를 초과합니다. 다른 파일을 등록해주세요.");
        }
      }
    }
  };

  const encodeThumbnailImageToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setThumbnailImage(file);
    };
  };

  const removeThumbnailImage = () => {
    setThumbnailImage(undefined);
    setValue("thumbnail", "");
  };

  const backgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileSizeInMB = selectedFile.size / (1024 * 1024);
        if (fileSizeInMB < 1) {
          setValue("background", selectedFile);
          encodeBackgroundImageToBase64(selectedFile);
        } else {
          alert("파일 크기가 1MB를 초과합니다. 다른 파일을 등록해주세요.");
        }
      }
    }
  };

  const encodeBackgroundImageToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBackgroundImage(file);
    };
  };

  const removeBackgroundImage = () => {
    setBackgroundImage(undefined);
    setValue("background", "");
  };

  const surveyBackgroundImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileSizeInMB = selectedFile.size / (1024 * 1024);
        if (fileSizeInMB < 1) {
          setValue("surveyBackground", selectedFile);
          encodeSurveyBackgroundImageToBase64(selectedFile);
        } else {
          alert("파일 크기가 1MB를 초과합니다. 다른 파일을 등록해주세요.");
        }
      }
    }
  };

  const encodeSurveyBackgroundImageToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSurveyBackgroundImage(file);
    };
  };

  const removeSurveyBackgroundImage = () => {
    setSurveyBackgroundImage(undefined);
    setValue("surveyBackground", "");
  };

  const ingameImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);

    // 새 파일 추가 후 전체 파일 목록 계산
    const totalFiles = [...ingameImages, ...selectedFiles];

    // 파일 개수 제한 검사
    if (totalFiles.length > MAX_FILES) {
      alert(`최대 ${MAX_FILES}개의 파일만 업로드할 수 있습니다!`);
      return;
    }

    // 전체 파일 크기 계산
    const totalSize = totalFiles.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > MAX_SIZE) {
      alert("파일들의 총 용량이 5MB를 초과했습니다!");
      return;
    }

    // 파일 목록 업데이트
    setIngameImages(totalFiles);
    setValue("images", totalFiles);
  };

  const removeIngameImages = (index: any) => {
    setIngameImages(ingameImages.filter((_, i) => i !== index));
    setValue("images", ingameImages);
  };

  const phaseOneExampleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileSizeInMB = selectedFile.size / (1024 * 1024);
        if (fileSizeInMB < 1) {
          setValue("phaseOneExample", selectedFile);
          encodePhaseOneExampleImageToBase64(selectedFile);
        } else {
          alert("파일 크기가 1MB를 초과합니다. 다른 파일을 등록해주세요.");
        }
      }
    }
  };

  const encodePhaseOneExampleImageToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPhaseOneExampleImage(file);
    };
  };

  const removePhaseOneExampleImage = () => {
    setPhaseOneExampleImage(undefined);
    setValue("phaseOneExample", "");
  };

  return (
    <Main>
      {imageModal && (
        <ImageModal
          close={closeImageModal}
          ThumbnailImageChange={ThumbnailImageChange}
          thumbnailImage={thumbnailImage}
          setThumbnailImage={setThumbnailImage}
          removeThumbnailImage={removeThumbnailImage}
          backgroundImageChange={backgroundImageChange}
          backgroundImage={backgroundImage}
          setBackgroundImage={setBackgroundImage}
          removeBackgroundImage={removeBackgroundImage}
          surveyBackgroundImageChange={surveyBackgroundImageChange}
          surveyBackgroundImage={surveyBackgroundImage}
          setsurveyBackgroundImage={setSurveyBackgroundImage}
          removeSurveyBackgroundImage={removeSurveyBackgroundImage}
          ingameImagesChange={ingameImagesChange}
          ingameImages={ingameImages}
          setIngameImages={setIngameImages}
          removeIngameImages={removeIngameImages}
        />
      )}
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
        {thumbnailImage ||
        ingameImages.length !== 0 ||
        backgroundImage ||
        surveyBackgroundImage ? (
          <AddImg onClick={openImageModal} style={{ alignItems: "stretch" }}>
            <ImagesWrapper>
              {thumbnailImage &&
                ingameImages.length !== 0 &&
                backgroundImage &&
                surveyBackgroundImage && (
                  <div
                    style={{
                      backgroundColor: "#2282e9",
                      width: "20px",
                      height: "20px",
                      borderRadius: "999px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "18px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{
                        color: "white",
                      }}
                    />
                  </div>
                )}
              <ImagesContainer>
                {thumbnailImage && (
                  <ThumbnailImg
                    src={URL.createObjectURL(thumbnailImage)}
                    alt=""
                  />
                )}
                {backgroundImage && (
                  <BackgroundImg
                    src={URL.createObjectURL(backgroundImage)}
                    alt=""
                  />
                )}
                {surveyBackgroundImage && (
                  <BackgroundImg
                    src={URL.createObjectURL(surveyBackgroundImage)}
                    alt=""
                  />
                )}
              </ImagesContainer>
              <ImgChangeBtn onClick={openImageModal}>
                + 게임 이미지 변경하기
              </ImgChangeBtn>
            </ImagesWrapper>
          </AddImg>
        ) : (
          <AddImg onClick={openImageModal}>
            <Plus>+</Plus>
            <span>게임 이미지 추가하기</span>
          </AddImg>
        )}
        <Title>게임 영상</Title>
        <Comment>
          유튜브 페이지 상단 주소창 URL 을 복사한 링크를 작성해주세요.
        </Comment>
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
        <TextArea
          style={{ height: "80px", marginBottom: "40px" }}
          placeholder="미션을 설명해주세요. 간단하고 명료하게 작성해주시는게 좋습니다. (ex. 상점 레벨 8까지 달성해주세요.)"
        />
        <Title>이미지 유형 선택</Title>
        <Comment>
          게임 이미지 방향이 세로형인지 가로형인지 선택해주세요.
        </Comment>
        <DirectionContainer>
          <input
            type="radio"
            id="vertical"
            name="direction"
            style={{ display: "none" }}
          />
          <Direction htmlFor="vertical">세로형</Direction>
          <input
            type="radio"
            id="horizontal"
            name="direction"
            style={{ display: "none" }}
          />
          <Direction htmlFor="horizontal">가로형</Direction>
        </DirectionContainer>
        <SubTitle>미션 예시 이미지 등록</SubTitle>
        <Comment>미션 확인 부분을 강조 해주시는 것을 추천드립니다.</Comment>
        <input
          type="file"
          accept=".jpeg, .png"
          onChange={(e) => phaseOneExampleImageChange(e)}
          style={{ display: "none" }}
          id="phaseOneExample"
        />

        {phaseOneExampleImage ? (
          <AddImg style={{ alignItems: "stretch" }}>
            <ImagesWrapper>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    backgroundColor: "#2282e9",
                    width: "20px",
                    height: "20px",
                    borderRadius: "999px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "18px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      color: "white",
                    }}
                  />
                </div>

                <ImagesContainer>
                  {phaseOneExampleImage && (
                    <ThumbnailImg
                      src={URL.createObjectURL(phaseOneExampleImage)}
                      alt=""
                    />
                  )}
                </ImagesContainer>
              </div>
              <ImgChangeBtn htmlFor="phaseOneExample">
                + 게임 이미지 변경하기
              </ImgChangeBtn>
            </ImagesWrapper>
          </AddImg>
        ) : (
          <AddImg htmlFor="phaseOneExample">
            <Plus>+</Plus>미션 이미지 추가하기
          </AddImg>
        )}

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
        <div style={{ position: "relative", width: "730px" }}>
          <Input />
          <PointSpan>포인트</PointSpan>
        </div>
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
