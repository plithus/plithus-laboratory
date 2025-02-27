import { faCircleXmark, faImage } from "@fortawesome/free-solid-svg-icons";
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
  top: calc(50vh - 200px);
  left: calc(50vw - 500px);
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 1000px;
  height: 450px;
  overflow: hidden;
`;

const TitleBox = styled.div`
  width: 1000px;
  height: 49px;
  background-color: #ededed;
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 600;
  color: #2282e9;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 22px;
  padding: 22px 32px;
`;

const ImageBox = styled.div`
  width: 218px;
  height: 356px;
  border: 1px solid #e7e7e7;
  padding: 14px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed #d9d9d9;
  border-radius: 7px;
  width: 190px;
  height: 156px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ImageSelect = styled.div`
  width: 32.63px;
  height: 11.52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #dee2e6;
  font-size: 7px;
  font-weight: 500;
  color: #5f5f5f;
  margin-top: 7px;
`;

const ImageTitle = styled.span`
  font-weight: 600;
  margin-bottom: 10px;
  display: block;
`;

const ImageSizeText = styled.span`
  display: block;
  font-weight: 500;
  font-size: 12px;
  color: #2282e9;
  margin-bottom: 2px;
`;

const ImageSizeText2 = styled.span`
  display: block;
  font-weight: 500;
  font-size: 12px;
  color: #c0c0c0;
  margin-bottom: 17px;
`;

const ImageContent = styled.span`
  display: block;
  font-weight: 500;
  font-size: 12px;
  color: #9f9f9f;
  text-align: center;
  line-height: 18px;
`;

const ThumbnailImgContainer = styled.div`
  position: relative;
`;

const ThumbnailImg = styled.img`
  width: 140px;
  height: 140px;
`;

const BackgroundImgContainer = styled.div`
  position: relative;
`;

const BackgroundImg = styled.img`
  width: 60.33px;
  height: 131.42px;
`;

const SurveyBackgroundImgContainer = styled.div`
  position: relative;
`;

const SurveyBackgroundImg = styled.img`
  width: 169px;
  height: 105px;
`;

const IngameImgsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
`;

const IngameImgsContainer = styled.div`
  width: 73px;
  height: 41px;
  position: relative;
`;

const IngameImgs = styled.img`
  width: 73px;
  height: 41px;
`;

export default function ImageModal(props: any) {
  return (
    <ModalBg>
      <ModalBox>
        <TitleBox>
          <Title>게임 이미지 파일 제출</Title>
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ color: "#9f9f9f", cursor: "pointer" }}
            onClick={() => props.close()}
          />
        </TitleBox>
        <ContentBox>
          <ImageBox>
            <input
              type="file"
              accept=".jpeg, .png"
              onChange={(e) => props.ThumbnailImageChange(e)}
              style={{ display: "none" }}
              id="thumbnailImage"
            />
            <Image htmlFor="thumbnailImage">
              {props.thumbnailImage ? (
                <ThumbnailImgContainer>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      color: "white",
                    }}
                    onClick={props.removeThumbnailImage}
                  />
                  <ThumbnailImg
                    src={URL.createObjectURL(props.thumbnailImage)}
                    alt=""
                  />
                </ThumbnailImgContainer>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faImage}
                    style={{ color: "#d1d1d1" }}
                  />
                  <ImageSelect>파일 선택</ImageSelect>
                </>
              )}
            </Image>
            <ImageTitle>썸네일 이미지</ImageTitle>
            <ImageSizeText>1장 (1MB 이하)</ImageSizeText>
            <ImageSizeText2>추천 사이즈 900 X 900</ImageSizeText2>
            <ImageContent>
              게임 목록 썸네일 부분에
              <br />
              노출되는 이미지입니다.
              <br />
              정사각 형태의 게임로고 이미지를
              <br />
              추가해주세요.
            </ImageContent>
          </ImageBox>
          <ImageBox>
            <input
              type="file"
              accept=".jpeg, .png"
              onChange={(e) => props.ingameImagesChange(e)}
              style={{ display: "none" }}
              id="ingameImages"
              multiple
            />
            <Image htmlFor="ingameImages">
              {props.ingameImages.length !== 0 ? (
                <IngameImgsWrapper>
                  {props.ingameImages.map((img: any, index: any) => (
                    <IngameImgsContainer key={index}>
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          color: "white",
                        }}
                        onClick={() => props.removeIngameImages(index)}
                      />
                      <IngameImgs src={URL.createObjectURL(img)} alt="" />
                    </IngameImgsContainer>
                  ))}
                </IngameImgsWrapper>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faImage}
                    style={{ color: "#d1d1d1" }}
                  />
                  <ImageSelect>파일 선택</ImageSelect>
                </>
              )}
            </Image>
            <ImageTitle>인게임 이미지</ImageTitle>
            <ImageSizeText>최대 5장 (1장 당 1MB 이하)</ImageSizeText>
            <ImageSizeText2>추천 사이즈 1000 X 563</ImageSizeText2>
            <ImageContent>
              게임 상세페이지의 가로형 형식의 <br />
              이미지입니다. 인게임 요소가 <br />잘 드러난 이미지를 추가해주세요.
            </ImageContent>
          </ImageBox>
          <ImageBox>
            <input
              type="file"
              accept=".jpeg, .png"
              onChange={(e) => props.backgroundImageChange(e)}
              style={{ display: "none" }}
              id="backgroundImage"
            />
            <Image htmlFor="backgroundImage">
              {props.backgroundImage ? (
                <BackgroundImgContainer>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      color: "white",
                    }}
                    onClick={props.removeBackgroundImage}
                  />
                  <BackgroundImg
                    src={URL.createObjectURL(props.backgroundImage)}
                    alt=""
                  />
                </BackgroundImgContainer>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faImage}
                    style={{ color: "#d1d1d1" }}
                  />
                  <ImageSelect>파일 선택</ImageSelect>
                </>
              )}
            </Image>
            <ImageTitle>신청 배경 이미지</ImageTitle>
            <ImageSizeText>1장 (1MB 이하)</ImageSizeText>
            <ImageSizeText2>추천 사이즈 300 X 730</ImageSizeText2>
            <ImageContent>
              플리더스 앱 버전에서 CBT
              <br />
              신청시 뒷 배경으로 들어가는 <br />
              세로형 이미지입니다.
            </ImageContent>
          </ImageBox>
          <ImageBox>
            <input
              type="file"
              accept=".jpeg, .png"
              onChange={(e) => props.surveyBackgroundImageChange(e)}
              style={{ display: "none" }}
              id="surveyBackgroundImage"
            />
            <Image htmlFor="surveyBackgroundImage">
              {props.surveyBackgroundImage ? (
                <SurveyBackgroundImgContainer>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      color: "white",
                    }}
                    onClick={props.removeSurveyBackgroundImage}
                  />
                  <SurveyBackgroundImg
                    src={URL.createObjectURL(props.surveyBackgroundImage)}
                    alt=""
                  />
                </SurveyBackgroundImgContainer>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faImage}
                    style={{ color: "#d1d1d1" }}
                  />
                  <ImageSelect>파일 선택</ImageSelect>
                </>
              )}
            </Image>
            <ImageTitle>설문 배경 이미지</ImageTitle>
            <ImageSizeText>1장 (1MB 이하)</ImageSizeText>
            <ImageSizeText2>추천 사이즈 1280 X 725</ImageSizeText2>
            <ImageContent>
              플리더스 웹 버전에서 설문지 <br />
              뒷 배경으로 들어가는 가로형
              <br />
              이미지입니다.
            </ImageContent>
          </ImageBox>
        </ContentBox>
      </ModalBox>
    </ModalBg>
  );
}
