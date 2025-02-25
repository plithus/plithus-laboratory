import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CompanyInfoCheckAPI from "./Data/CompanyInfoCheckAPI";
import { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./ Modal/Modal";
import InquiryCreationAPI from "./Data/InquiryCreationAPI";

const Main = styled.main`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding-left: 195px;
`;

const TopWrapper = styled.div`
  padding-left: 125px;
  border-bottom: 1px solid #ededed;
  height: 120px;
  display: flex;
  align-items: center;
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

const AccentTopBtn = styled(TopBtn)`
  border: 1px solid #2282e9;
  border-color: ${(props) => (props.disabled ? "#c0c0c0" : "#2282e9")};
  color: ${(props) => (props.disabled ? "#c0c0c0" : "#2282e9")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Wrapper = styled.div`
  padding-top: 40px;
  padding-left: 125px;
  margin-bottom: 500px;
`;

const CompanyInfoCheck = styled.div`
  border-radius: 5px;
  background-color: white;
  width: 1280px;
  height: 111px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  padding: 0px 40px;
  margin-bottom: 50px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  width: 730px;
  height: 71px;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 5px;
  padding: 0px 30px;
  margin-bottom: 30px;
  box-sizing: border-box;
  ::placeholder {
    color: #c0c0c0;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  width: 730px;
  height: 249px;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 5px;
  padding: 20px 30px;
  margin-bottom: 14px;
  box-sizing: border-box;
`;

const Count = styled.div`
  width: 730px;
  display: flex;
  justify-content: end;
  color: #c0c0c0;
  font-weight: 500;
`;

const Label = styled.label`
  width: 730px;
  height: 65px;
  background-color: white;
  border: 1px solid #ededed;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  color: #797979;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

const Comment = styled.div`
  font-size: 14px;
  color: #9f9f9f;
`;

export default function Inquiry() {
  const MAX_FILES = 5;
  const MAX_SIZE = 30 * 1024 * 1024; // 30MB

  const navigate = useNavigate();

  const { register, getValues } = useForm();

  const [text, setText] = useState<string>("");
  const [modal, setModal] = useState(false);

  const { data: companyInfoCheckData } = useQuery({
    queryKey: ["companyInfoCheck"],
    queryFn: async () => await CompanyInfoCheckAPI(),
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    const title = getValues("title");
    const content = getValues("content");

    const allFieldsFilled = title && content;

    if (allFieldsFilled) {
      setModal(true);
    } else {
      alert("내용을 모두 채워주세요.");
    }
  };

  const [files, setFiles] = useState<File[]>([]);
  const queryClient = useQueryClient();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);

    // 새 파일 추가 후 전체 파일 목록 계산
    const totalFiles = [...files, ...selectedFiles];

    // 파일 개수 제한 검사
    if (totalFiles.length > MAX_FILES) {
      alert(`최대 ${MAX_FILES}개의 파일만 업로드할 수 있습니다!`);
      return;
    }

    // 전체 파일 크기 계산
    const totalSize = totalFiles.reduce((acc, file) => acc + file.size, 0);

    if (totalSize > MAX_SIZE) {
      alert("파일들의 총 용량이 30MB를 초과했습니다!");
      return;
    }

    // 파일 목록 업데이트
    setFiles(totalFiles);
  };

  const addInquiryMutation = useMutation<unknown, Error, FormData>({
    mutationFn: InquiryCreationAPI,
    onSuccess: () => {
      setModal(false);
      queryClient.invalidateQueries({ queryKey: ["addInquiryMutation"] });
      navigate("/home/inquiry/list");
    },
  });

  const CallAPI = async () => {
    const formData = new FormData();

    const title = getValues("title");
    const content = getValues("content");

    const blob = new Blob(
      [
        JSON.stringify({
          title,
          content,
        }),
      ],
      {
        type: "application/json",
      }
    );

    formData.append("data", blob);
    if (files) {
      files.forEach((file) => {
        formData.append("attachments", file);
      });
    }

    addInquiryMutation.mutate(formData);
  };

  const CheckBody = useCallback(() => {
    const title = getValues("title");
    const content = getValues("content");

    const allFieldsFilled = title && content;

    return allFieldsFilled ? false : true;
  }, [getValues]);

  return (
    <Main>
      {modal && <Modal close={closeModal} CallAPI={CallAPI} />}
      <TopWrapper>
        <TopContainer>
          <TopTitle>문의하기</TopTitle>
          <BtnContainer>
            <Link to="list">
              <AccentTopBtn>내 문의내역</AccentTopBtn>
            </Link>
            {companyInfoCheckData?.data.everApproved === false ? (
              <TopBtn>문의하기</TopBtn>
            ) : (
              <AccentTopBtn onClick={openModal} disabled={CheckBody()}>
                문의하기
              </AccentTopBtn>
            )}
          </BtnContainer>
        </TopContainer>
      </TopWrapper>
      <Wrapper>
        {companyInfoCheckData?.data.everApproved === false && (
          <CompanyInfoCheck>
            <span>
              잠깐! 문의하기 진행을 위해 반드시 게임사 인증이 필요합니다. 게임사
              등록에 필요한 자료 제출을 완료하셨을까요?
            </span>
            <Link to="/home/company-info" style={{ color: "#2282e9" }}>
              게임사 인증하기
            </Link>
          </CompanyInfoCheck>
        )}
        <Title>문의 제목</Title>
        <Input
          type="text"
          placeholder="제목을 입력해 주세요. (20자 이내)"
          {...register("title")}
        />
        <Title>문의 내용</Title>
        <TextArea
          placeholder="내용을 입력해 주세요."
          maxLength={3000}
          value={text}
          {...register("content", {
            onChange: handleChange,
          })}
        />
        <Count>
          <span style={{ color: "#2282e9", marginRight: "5px" }}>
            {text.length}
          </span>{" "}
          / 3000
        </Count>
        <Title>파일첨부</Title>
        <Label htmlFor="file">+ 파일올리기</Label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          multiple
        />
        <Comment>첨부파일은 최대 5개, 30MB까지 등록 가능합니다.</Comment>
      </Wrapper>
    </Main>
  );
}
