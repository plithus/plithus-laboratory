import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import moomo from "../../../../assets/images/moomo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ModalBg = styled.div`
  position: fixed;
  z-index: 10;
  top: 160px;
  left: 195px;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalBox = styled.div`
  z-index: 15;
  position: absolute;
  top: calc(50vh - 250px);
  left: calc(50vw - 350px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 528px;
  height: 331px;
`;

const XContainer = styled.div`
  width: 528px;
  display: flex;
  justify-content: end;
  padding-right: 12px;
  margin-bottom: 16px;
`;

const AdContainer = styled.div`
  width: 528px;
  height: 512px;
  background: linear-gradient(#000000 50%, #005cbf);
  border-radius: 10px;
  padding: 73px 0px 60px 50px;
  position: relative;
`;

const EventText = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 16px;
`;

const Title = styled.span`
  display: block;
  font-size: 40px;
  font-weight: 700;
  color: white;
  line-height: 50px;
  margin-bottom: 30px;
`;

const Comment = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #2282e9;
  line-height: 30px;
  margin-bottom: 69px;
`;

const Button = styled.button`
  width: 309px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 90px;
  background-color: #2282e9;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

const Img = styled.img`
  width: 200px;
  height: 282px;
  position: absolute;
  bottom: 30px;
  right: 0px;
`;

const CheckBoxContainer = styled.div`
  font-weight: 500;
  color: white;
  margin-top: 20px;
  width: 528px;
`;

export default function AdModal(props: any) {
  const { register, watch } = useForm();
  return (
    <ModalBg>
      <ModalBox>
        <XContainer>
          <FontAwesomeIcon
            icon={faX}
            style={{
              color: "#ffffff",
              width: "20px",
              height: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => props.close(watch("check"))}
          />
        </XContainer>
        <AdContainer>
          <EventText>테스트 연구소 감사 이벤트</EventText>
          <Title>
            150,000 플리머니
            <br />
            적립 이벤트!
          </Title>
          <Comment>
            적립된 플리머니는 테스트 설계에
            <br />
            바로 사용하실 수 있습니다.
          </Comment>
          <Link to="/home/company-info" style={{ textDecoration: "none" }}>
            <Button>게임사 등록하고 적립 받기</Button>
          </Link>
          <Img src={moomo} alt="img" />
        </AdContainer>
        <CheckBoxContainer>
          <input
            {...register("check")}
            type="checkbox"
            style={{ marginRight: "14px" }}
          />
          <span>다시 보지 않기</span>
        </CheckBoxContainer>
      </ModalBox>
    </ModalBg>
  );
}
