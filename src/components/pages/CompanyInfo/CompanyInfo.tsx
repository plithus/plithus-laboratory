import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal/Modal";
import TermsAgreedModal from "./Modal/TermsAgreedModal";

import CompanyInfoOverviewAPI from "./Data/CompanyInfoOverviewAPI";
import CompanyInfoBusinessDetailAPI from "./Data/CompanyInfoBusinessDetailAPI";
import CompanyInfoIndividualDetailAPI from "./Data/CompanyInfoIndividualDetailAPI";
import CompanyIndividualArchiveAPI from "./Data/CompanyIndividualArchiveAPI";
import CompanyIndividualSubmitAPI from "./Data/CompanyIndividualSubmitAPI";
import SendCodeAPI from "./Data/SendCodeAPI";
import ValidateCodeAPI from "./Data/ValidateCodeAPI";
import CompanyInfoBusinessArchiveAPI from "./Data/CompanyBusinessArchiveAPI";
import CompanyBusinessSubmitAPI from "./Data/CompanyBusinessSubmitAPI";
import BusinessNumberAPI from "./Data/BusinessNumberAPI";

const Main = styled.main`
  background-color: #f8f9fa;
  width: 100%;
  min-height: 100vh;
  padding-left: 195px;
`;

const TopWrapper = styled.div`
  padding-left: 125px;
  width: 100%;
  height: 121px;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #f8f9fa;
  z-index: 1;
`;

const TopContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
`;

const TopText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #2282e9;
  padding-top: 15px;
`;

const TopButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TopBtn = styled.button`
  border-radius: 5px;
  border: 1px solid #2282e9;
  width: 160px;
  height: 50px;
  font-weight: 600;
  cursor: pointer;
`;

const TopSaveBtn = styled(TopBtn)`
  color: #2282e9;
  background-color: white;
`;

const TopFinishedBtn = styled(TopBtn)`
  color: white;
  background-color: ${(props) => (props.disabled ? "#add5ff" : "#2282e9")};
  border-color: ${(props) => (props.disabled ? "#add5ff" : "#2282e9")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Wrapper = styled.div`
  padding-left: 125px;
  padding-top: 161px;
`;

const CompanyType = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;

const CompanyTypeSub = styled.p`
  line-height: 26px;
  color: #9f9f9f;
  margin-bottom: 30px;
`;

const CompanyTypeBtnContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 30px;
`;

const CompanyTypeBtn = styled.button`
  background-color: white;
  border: none;
  color: #9f9f9f;
  font-weight: 500;
  width: 209px;
  height: 60px;
  border-radius: 5px;
`;

const CompanyTypeBtnAccent = styled.button`
  background-color: white;
  border: 1px solid #2282e9;
  color: #2282e9;
  font-weight: 500;
  width: 209px;
  height: 60px;
  border-radius: 5px;
`;

const SubTitle = styled.span`
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
`;

const LargeInput = styled.input`
  outline: none;
  width: 630px;
  height: 65px;
  border-radius: 5px;
  border: 1px solid #2282e9;
  box-sizing: border-box;
  padding-left: 20px;
  ::placeholder {
    color: #9f9f9f;
  }
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 8px;
`;

const Comments = styled.span`
  display: block;
  color: #9f9f9f;
  margin-bottom: 30px;
`;

const FileLabel = styled.label`
  border-radius: 5px;
  border: 1px solid #2282e9;
  width: 630px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #2282e9;
  font-weight: 500;
  margin-bottom: 8px;
  cursor: pointer;
`;

const AccentFileLabel = styled(FileLabel)`
  justify-content: space-between;
  padding: 0px 30px;
  box-sizing: border-box;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 30px;
  margin-bottom: 60px;
`;

const PhoneBtn = styled.button`
  background-color: #add5ff;
  color: white;
  width: 105px;
  height: 65px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  right: 0px;
  border: 1px solid #2282e9;
  background-color: ${(props) => (props.disabled ? "#add5ff" : "#2282e9")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const BoxContainer = styled.div`
  width: 414px;
  height: 540px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const BoxTitleContainer = styled.div`
  padding: 36px 40px;
  border-bottom: 1px solid #ededed;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const BoxTitle = styled.span`
  font-weight: 500;
  color: #2282e9;
`;

const BoxBadge = styled.span`
  padding: 2px 10px;
  background-color: #2282e9;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 9px;
`;

const BoxContentContainer = styled.div`
  padding: 40px;
  display: flex;
`;

const BoxContentTitleContainer = styled.div`
  width: 148px;
  display: flex;
  flex-direction: column;
`;

const BoxContentTitle = styled.span`
  color: #9f9f9f;
  margin-bottom: 30px;
`;

const BoxContentContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxContentContents = styled.span`
  font-weight: 500;
  margin-bottom: 30px;
`;

const Button = styled.div`
  height: 60px;
  background-color: #2282e9;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  background-color: #26262680;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 414px;
  height: 540px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalContent = styled.div`
  border-radius: 10px;
  background-color: white;
  width: 282px;
  height: 252px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContentTitle = styled.span`
  display: block;
  color: #2282e9;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 25px;
  text-align: center;
`;

const ModalContentContent = styled.span`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;

const BusinessInfoContainer = styled.div`
  width: 630px;
  height: 445px;
  border-radius: 5px;
  border: 1px solid #ededed;
  margin-bottom: 30px;
  background-color: white;
`;

const BusinessInfoTitleBox = styled.div`
  padding: 36px 40px;
  border-bottom: 1px solid #ededed;
`;

const BusinessInfoTitle = styled.span`
  color: #9f9f9f;
`;

const BusinessInfoContent = styled.span`
  font-weight: 500;
  height: 19px;
`;

const BusinessInfoContentBox = styled.div`
  padding: 30px 40px;
  display: flex;
`;

const BusinessInfoContentTitleBox = styled.div`
  width: 148px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BusinessInfoContentContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface FileInfo {
  name: string;
}

export default function CompanyInfo() {
  const { register, getValues, watch, setValue } = useForm();

  const [overviewStatus, setOverviewStatus] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [sendCode, setSendCode] = useState(false);
  const [validateCode, setValidateCode] = useState(false);
  const [modal, setModal] = useState(false);
  const [businessModal, setBusinessModal] = useState(false);
  const [termsAgreedModal, setTermsAgreedModal] = useState(false);
  const [businessNumber, setBusinessNumber] = useState(false);
  const [businessInfo, setBusinessInfo] = useState<any>();

  const [file, setFile] = useState<File | undefined>();
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [licensefile, setLicenseFile] = useState<File | undefined>();
  const [licensefileInfo, setLicenseFileInfo] = useState<FileInfo | null>(null);
  const queryClient = useQueryClient();

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeBusinessModal = () => {
    setBusinessModal(false);
  };

  const openBusinessModal = () => {
    setBusinessModal(true);
  };

  const closeTermsAgreedModal = () => {
    setTermsAgreedModal(false);
  };

  const GameFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileSizeInMB = selectedFile.size / (1024 * 1024);
        if (fileSizeInMB < 10) {
          setValue("gameDescriptionFile", selectedFile);
          encodeGameFileToBase64(selectedFile);
          setFileInfo({
            name: selectedFile.name,
          });
        } else {
          alert("파일 크기가 10MB를 초과합니다. 다른 파일을 등록해주세요.");
        }
      }
    }
  };

  const encodeGameFileToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFile(file);
    };
  };

  const LicenseFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileSizeInMB = selectedFile.size / (1024 * 1024);
        if (fileSizeInMB < 10) {
          setValue("businessLicenseFile", selectedFile);
          encodeLicenseFileToBase64(selectedFile);
          setLicenseFileInfo({
            name: selectedFile.name,
          });
        } else {
          alert("파일 크기가 10MB를 초과합니다. 다른 파일을 등록해주세요.");
        }
      }
    }
  };

  const encodeLicenseFileToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setLicenseFile(file);
    };
  };

  const { data: overviewData } = useQuery({
    queryKey: ["companyInfoOverview"],
    queryFn: async () => await CompanyInfoOverviewAPI(),
  });

  const { data: businessDetailData, refetch: businessDetailRefetch } = useQuery(
    {
      queryKey: ["companyInfoBusinessDetail"],
      queryFn: async () => await CompanyInfoBusinessDetailAPI(),
      enabled: false,
    }
  );

  const { data: individualDetailData, refetch: individualDetailRefetch } =
    useQuery({
      queryKey: ["companyInfoIndividualDetail"],
      queryFn: async () => await CompanyInfoIndividualDetailAPI(),
      enabled: false,
    });

  const individualArchiveMutation = useMutation<unknown, Error, FormData>({
    mutationFn: CompanyIndividualArchiveAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["individualArchiveMutation"],
      });
    },
  });

  const CallIndividualArchiveAPI = async () => {
    const formData = new FormData();

    const companyName = getValues("iCompanyName");
    const adminName = getValues("iAdminName");
    const occupation = getValues("iOccupation");
    const email = getValues("iEmail");
    const phone = getValues("iPhone");
    const termsAgreed = watch("iTermsAgreed");
    const privacyAgreed = watch("iPrivacyAgreed");

    const blob = new Blob(
      [
        JSON.stringify({
          companyName,
          adminName,
          occupation,
          email,
          phone,
          termsAgreed,
          privacyAgreed,
        }),
      ],
      {
        type: "application/json",
      }
    );

    formData.append("data", blob);
    if (file) {
      formData.append("gameDescriptionFile", file);
    }

    individualArchiveMutation.mutate(formData);
  };

  const businessArchiveMutation = useMutation<unknown, Error, FormData>({
    mutationFn: CompanyInfoBusinessArchiveAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["businessArchiveMutation"],
      });
    },
  });

  const CallBusinessArchiveAPI = async () => {
    const formData = new FormData();

    const companyName = getValues("bCompanyName");
    const adminName = getValues("bAdminName");
    const businessNumber = getValues("bBusinessNumber");
    const employeePosition = getValues("bEmployeePosition");
    const jobRole = getValues("bJobRole");
    const email = getValues("bEmail");
    const phone = getValues("bPhone");
    const termsAgreed = watch("bTermsAgreed");
    const privacyAgreed = watch("bPrivacyAgreed");

    const blob = new Blob(
      [
        JSON.stringify({
          companyName,
          adminName,
          businessNumber,
          employeePosition,
          jobRole,
          email,
          phone,
          termsAgreed,
          privacyAgreed,
        }),
      ],
      {
        type: "application/json",
      }
    );

    formData.append("data", blob);
    if (file) {
      formData.append("gameDescriptionFile", file);
    }
    if (licensefile) {
      formData.append("businessLicenseFile", licensefile);
    }

    businessArchiveMutation.mutate(formData);
  };

  const individualSubmitMutation = useMutation<unknown, Error, FormData>({
    mutationFn: CompanyIndividualSubmitAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["individualSubmitMutation"],
      });
      window.location.reload();
    },
  });

  const CheckBodyIndividual = useCallback(() => {
    const companyName = getValues("iCompanyName");
    const adminName = getValues("iAdminName");
    const occupation = getValues("iOccupation");
    const email = getValues("iEmail");
    const phone = getValues("iPhone");
    const termsAgreed = watch("iTermsAgreed");
    const privacyAgreed = watch("iPrivacyAgreed");

    const allFieldsFilled =
      companyName &&
      adminName &&
      occupation &&
      email &&
      phone &&
      termsAgreed &&
      privacyAgreed &&
      fileInfo &&
      validateCode;

    return allFieldsFilled ? false : true;
  }, [fileInfo, getValues, watch, validateCode]);

  const CallIndividualSubmitAPI = async () => {
    const formData = new FormData();

    const companyName = getValues("iCompanyName");
    const adminName = getValues("iAdminName");
    const occupation = getValues("iOccupation");
    const email = getValues("iEmail");
    const phone = getValues("iPhone");
    const termsAgreed = getValues("iTermsAgreed");
    const privacyAgreed = getValues("iPrivacyAgreed");
    const phoneVerified = true;

    const blob = new Blob(
      [
        JSON.stringify({
          companyName,
          adminName,
          occupation,
          email,
          phone,
          termsAgreed,
          privacyAgreed,
          phoneVerified,
        }),
      ],
      {
        type: "application/json",
      }
    );

    formData.append("data", blob);
    if (file) {
      formData.append("gameDescriptionFile", file);
    }
    if (fileInfo) {
      formData.append("gameDescriptionFile", "");
    }

    individualSubmitMutation.mutate(formData);
  };

  const businessSubmitMutation = useMutation<unknown, Error, FormData>({
    mutationFn: CompanyBusinessSubmitAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["businessSubmitMutation"],
      });
      window.location.reload();
    },
  });

  const CheckBodyBusiness = useCallback(() => {
    const companyName = getValues("bCompanyName");
    const adminName = getValues("bAdminName");
    const businessNumber = getValues("bBusinessNumber");
    const employeePosition = getValues("bEmployeePosition");
    const jobRole = getValues("bJobRole");
    const email = getValues("bEmail");
    const phone = getValues("bPhone");
    const termsAgreed = watch("bTermsAgreed");
    const privacyAgreed = watch("bPrivacyAgreed");

    const allFieldsFilled =
      companyName &&
      adminName &&
      businessNumber &&
      employeePosition &&
      jobRole &&
      email &&
      phone &&
      termsAgreed &&
      privacyAgreed &&
      fileInfo &&
      licensefileInfo &&
      validateCode &&
      businessInfo;

    return allFieldsFilled ? false : true;
  }, [fileInfo, licensefileInfo, getValues, watch, validateCode, businessInfo]);

  const CallBusinessSubmitAPI = async () => {
    const formData = new FormData();

    const companyName = getValues("bCompanyName");
    const adminName = getValues("bAdminName");
    const businessNumber = getValues("bBusinessNumber");
    const employeePosition = getValues("bEmployeePosition");
    const jobRole = getValues("bJobRole");
    const email = getValues("bEmail");
    const phone = getValues("bPhone");
    const termsAgreed = watch("bTermsAgreed");
    const privacyAgreed = watch("bPrivacyAgreed");
    const phoneVerified = true;

    const blob = new Blob(
      [
        JSON.stringify({
          companyName,
          adminName,
          businessNumber,
          employeePosition,
          jobRole,
          email,
          phone,
          termsAgreed,
          privacyAgreed,
          phoneVerified,
          businessInfo,
        }),
      ],
      {
        type: "application/json",
      }
    );

    formData.append("data", blob);
    if (file) {
      formData.append("gameDescriptionFile", file);
    }
    if (fileInfo) {
      formData.append("gameDescriptionFile", "");
    }
    if (licensefile) {
      formData.append("businessLicenseFile", licensefile);
    }
    if (licensefileInfo) {
      formData.append("businessLicenseFile", "");
    }

    businessSubmitMutation.mutate(formData);
  };

  const sendCodeMutation = useMutation({
    mutationFn: SendCodeAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sendCodeMutation"],
      });
      setSendCode(true);
    },
  });

  const CallSendCodeAPI = async (phone: any) => {
    const formData = new FormData();

    formData.append("query", phone);

    sendCodeMutation.mutate(formData);
  };

  const validateCodeMutation = useMutation({
    mutationFn: ValidateCodeAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["validateCodeMutation"],
      });
      setValidateCode(true);
    },
  });

  const CallValidateCodeAPI = async () => {
    const formData = new FormData();

    const verificationCode = getValues("code");

    formData.append("verificationCode", verificationCode);

    validateCodeMutation.mutate(formData);
  };

  const businessNumberMutation = useMutation({
    mutationFn: BusinessNumberAPI,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["businessNumberMutation"],
      });
      setBusinessNumber(true);
      setBusinessInfo(data.data.businessInfo);
    },
  });

  const CallBusinessNumberAPI = async () => {
    const formData = new FormData();

    const businessNumber = getValues("bBusinessNumber");

    formData.append("businessNumber", businessNumber);

    businessNumberMutation.mutate(formData);
  };

  useEffect(() => {
    if (overviewData?.status === 204) {
      setOverviewStatus("NEW");
    } else {
      if (overviewData?.data.status === "SUBMITTED") {
        setOverviewStatus("SUBMITTED");
      } else if (overviewData?.data.status === "APPROVED") {
        setOverviewStatus("APPROVED");
      } else if (overviewData?.data.status === "REJECTED") {
        setOverviewStatus("REJECTED");
      }
    }

    if (individualDetailData?.status === 200) {
      setValue("iCompanyName", individualDetailData.data.companyName);
      setValue("iAdminName", individualDetailData.data.adminName);
      setValue("iOccupation", individualDetailData.data.occupation);
      setValue("iPhone", individualDetailData.data.phone);
      setValue("iEmail", individualDetailData.data.email);
      setValue("iTermsAgreed", individualDetailData.data.termsAgreed);
      setValue("iPrivacyAgreed", individualDetailData.data.privacyAgreed);
      if (individualDetailData.data.gameDescriptionFileName) {
        setFileInfo({
          name: individualDetailData.data.gameDescriptionFileName,
        });
      }
    }

    if (businessDetailData?.status === 200) {
      setValue("bCompanyName", businessDetailData.data.companyName);
      setValue("bAdminName", businessDetailData.data.adminName);
      setValue("bBusinessNumber", businessDetailData.data.businessNumber);
      setValue("bEmployeePosition", businessDetailData.data.employeePosition);
      setValue("bJobRole", businessDetailData.data.jobRole);
      setValue("bPhone", businessDetailData.data.phone);
      setValue("bEmail", businessDetailData.data.email);
      setValue("bTermsAgreed", businessDetailData.data.termsAgreed);
      setValue("bPrivacyAgreed", businessDetailData.data.privacyAgreed);
      if (businessDetailData.data.gameDescriptionFileName) {
        setFileInfo({
          name: businessDetailData.data.gameDescriptionFileName,
        });
      }
      if (businessDetailData.data.businessLicenseFileName) {
        setLicenseFileInfo({
          name: businessDetailData.data.businessLicenseFileName,
        });
      }
    }
  }, [
    overviewData?.status,
    individualDetailData?.status,
    businessDetailData?.status,
  ]);

  const onClickBusinessType = () => {
    setCompanyType("BUSINESS");
    businessDetailRefetch();
  };

  const onClickIndividualType = () => {
    setCompanyType("INDIVIDUAL");
    individualDetailRefetch();
  };

  const onClickSendCode = () => {
    let phone = "";
    if (companyType === "INDIVIDUAL") {
      phone = getValues("iPhone");
    } else {
      phone = getValues("bPhone");
    }

    if (phone) {
      CallSendCodeAPI(phone);
    }
  };

  const onClickValidateCode = () => {
    const code = getValues("code");
    if (code) {
      CallValidateCodeAPI();
    }
  };

  const onClickBusinessNumber = () => {
    const code = getValues("bBusinessNumber");
    if (code) {
      CallBusinessNumberAPI();
    }
  };

  return (
    <Main>
      {modal && <Modal close={closeModal} CallAPI={CallIndividualSubmitAPI} />}
      {businessModal && (
        <Modal close={closeBusinessModal} CallAPI={CallBusinessSubmitAPI} />
      )}
      {termsAgreedModal && <TermsAgreedModal close={closeTermsAgreedModal} />}
      <TopWrapper>
        <TopContainer>
          <TopText>게임사 정보</TopText>
          {overviewStatus === "NEW" &&
            (companyType === "INDIVIDUAL" ? (
              <TopButtonContainer>
                <TopSaveBtn onClick={CallIndividualArchiveAPI}>
                  임시저장
                </TopSaveBtn>
                <TopFinishedBtn
                  disabled={CheckBodyIndividual()}
                  onClick={openModal}
                >
                  게임사 등록 완료
                </TopFinishedBtn>
              </TopButtonContainer>
            ) : (
              <TopButtonContainer>
                <TopSaveBtn onClick={CallBusinessArchiveAPI}>
                  임시저장
                </TopSaveBtn>
                <TopFinishedBtn
                  disabled={CheckBodyBusiness()}
                  onClick={openBusinessModal}
                >
                  게임사 등록 완료
                </TopFinishedBtn>
              </TopButtonContainer>
            ))}
        </TopContainer>
      </TopWrapper>
      {overviewStatus === "NEW" && (
        <Wrapper>
          <CompanyType>게임사 유형 선택</CompanyType>
          <CompanyTypeSub>
            개인사업자 또는 법인사업자로 사업자 번호가 있다면 ‘사업자 만들기’를
            선택해주세요.
            <br />
            사업자가 아닌 개인도 테스트 설계가 가능합니다. 본인에 해당하는
            게임사 유형을 선택하세요.
          </CompanyTypeSub>
          <CompanyTypeBtnContainer>
            {companyType === "BUSINESS" ? (
              <CompanyTypeBtnAccent onClick={onClickBusinessType}>
                사업자
              </CompanyTypeBtnAccent>
            ) : (
              <CompanyTypeBtn onClick={onClickBusinessType}>
                사업자
              </CompanyTypeBtn>
            )}
            {companyType === "INDIVIDUAL" ? (
              <CompanyTypeBtnAccent onClick={onClickIndividualType}>
                개인
              </CompanyTypeBtnAccent>
            ) : (
              <CompanyTypeBtn onClick={onClickIndividualType}>
                개인
              </CompanyTypeBtn>
            )}
          </CompanyTypeBtnContainer>
          {companyType === "INDIVIDUAL" && (
            <div style={{ width: "1280px" }}>
              <SubTitle>게임사 이름</SubTitle>
              {watch("iCompanyName") ? (
                <LargeInput
                  {...register("iCompanyName")}
                  type="text"
                  placeholder="ex) moomogames, 무모게임즈"
                  style={{ borderColor: "#ededed" }}
                />
              ) : (
                <LargeInput
                  {...register("iCompanyName")}
                  type="text"
                  placeholder="ex) moomogames, 무모게임즈"
                />
              )}

              <Title>제작 중인 게임</Title>
              <Comments>
                테스트를 진행할 게임의 포트폴리오 및 제작 현황에 대한 설명을
                확인할 수 있는 파일을 올려주세요.
              </Comments>
              {fileInfo != null ? (
                <AccentFileLabel htmlFor="file">
                  <span>{fileInfo?.name}</span>
                  <div>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span
                      style={{
                        color: "#828282",
                        textDecoration: "underline",
                        marginLeft: "20px",
                      }}
                    >
                      파일 변경
                    </span>
                  </div>
                </AccentFileLabel>
              ) : (
                <FileLabel htmlFor="file">파일 올리기</FileLabel>
              )}
              <input
                type="file"
                accept=".jpeg, .png, .pdf"
                onChange={GameFileChange}
                style={{ display: "none" }}
                id="file"
              />
              <span style={{ color: "#9f9f9f" }}>
                10MB 이내PDF,JPEG,PNG 파일을 등록해주세요.
              </span>
              <Title>관리자 정보 입력</Title>
              <Comments>
                위더스 메이커 관리자를 설정해 테스트 설계 및 문의 소통을
                원활하게 도와줍니다.
              </Comments>
              <GridDiv>
                <div>
                  <SubTitle>관리자 이름</SubTitle>
                  {watch("iAdminName") ? (
                    <LargeInput
                      {...register("iAdminName")}
                      type="text"
                      placeholder="ex) 김00"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("iAdminName")}
                      type="text"
                      placeholder="ex) 김00"
                    />
                  )}
                </div>
                <div>
                  <SubTitle>유형</SubTitle>
                  {watch("iOccupation") ? (
                    <LargeInput
                      {...register("iOccupation")}
                      type="text"
                      placeholder="ex) 학생, 직장인, 개인, 개발자, 프리랜서"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("iOccupation")}
                      type="text"
                      placeholder="ex) 학생, 직장인, 개인, 개발자, 프리랜서"
                    />
                  )}
                </div>
                <div style={{ position: "relative" }}>
                  <SubTitle>휴대폰 번호</SubTitle>
                  {watch("iPhone") ? (
                    <LargeInput
                      {...register("iPhone")}
                      type="number"
                      placeholder="ex) 01000000000"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("iPhone")}
                      type="text"
                      placeholder="ex) 01000000000"
                    />
                  )}
                  {watch("iPhone") ? (
                    <PhoneBtn onClick={onClickSendCode} disabled={false}>
                      인증하기
                    </PhoneBtn>
                  ) : (
                    <PhoneBtn onClick={onClickSendCode} disabled={true}>
                      인증하기
                    </PhoneBtn>
                  )}
                </div>
                <div>
                  <SubTitle>연락 가능 이메일</SubTitle>
                  {watch("iEmail") ? (
                    <LargeInput
                      {...register("iEmail")}
                      type="text"
                      placeholder="ex) plithus@naver.com"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("iEmail")}
                      type="text"
                      placeholder="ex) plithus@naver.com"
                    />
                  )}
                </div>
                {sendCode && (
                  <div style={{ position: "relative" }}>
                    <SubTitle>인증 번호</SubTitle>
                    {watch("code") ? (
                      <LargeInput
                        {...register("code")}
                        type="text"
                        placeholder="인증 번호 4자리를 입력해주세요."
                        style={{ borderColor: "#ededed" }}
                      />
                    ) : (
                      <LargeInput
                        {...register("code")}
                        type="text"
                        placeholder="인증 번호 4자리를 입력해주세요."
                      />
                    )}
                    {watch("code") ? (
                      <PhoneBtn onClick={onClickValidateCode} disabled={false}>
                        확인
                      </PhoneBtn>
                    ) : (
                      <PhoneBtn onClick={onClickValidateCode} disabled={true}>
                        확인
                      </PhoneBtn>
                    )}
                  </div>
                )}
              </GridDiv>
              <div style={{ marginBottom: "50px" }}>
                <input
                  {...register("iTermsAgreed")}
                  type="checkbox"
                  style={{ marginRight: "14px" }}
                />
                <span style={{ marginRight: "205px" }}>
                  위더스 메이커 서비스 약관 동의 (필수)
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={() => setTermsAgreedModal(true)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div style={{ marginBottom: "107px" }}>
                <input
                  {...register("iPrivacyAgreed")}
                  type="checkbox"
                  style={{ marginRight: "14px" }}
                />
                <span style={{ marginRight: "233px" }}>
                  개인정보 수집 및 이용 동의 (필수)
                </span>
                <Link
                  to="https://blog.naver.com/plithus/222886285043"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
            </div>
          )}
          {companyType === "BUSINESS" && (
            <div style={{ width: "1280px" }}>
              <Title>게임사 정보 입력</Title>
              <Comments>
                사업자 등록 번호만 입력하면 편하게 기본 정보가 등록됩니다.
              </Comments>
              <SubTitle>사업자 등록 번호</SubTitle>
              <div style={{ position: "relative" }}>
                {watch("bBusinessNumber") ? (
                  <LargeInput
                    {...register("bBusinessNumber")}
                    type="text"
                    placeholder="사업자 번호를 입력해주세요."
                    style={{ borderColor: "#ededed", marginBottom: "30px" }}
                  />
                ) : (
                  <LargeInput
                    {...register("bBusinessNumber")}
                    type="text"
                    placeholder="사업자 번호를 입력해주세요."
                    style={{ marginBottom: "30px" }}
                  />
                )}
                {watch("bBusinessNumber") ? (
                  <PhoneBtn
                    onClick={onClickBusinessNumber}
                    disabled={false}
                    style={{ bottom: "30px", left: "525px" }}
                  >
                    조회하기
                  </PhoneBtn>
                ) : (
                  <PhoneBtn
                    onClick={onClickBusinessNumber}
                    disabled={true}
                    style={{ bottom: "30px", left: "525px" }}
                  >
                    조회하기
                  </PhoneBtn>
                )}
              </div>
              {businessNumber && (
                <BusinessInfoContainer>
                  <BusinessInfoTitleBox>
                    <BusinessInfoTitle style={{ marginRight: "30px" }}>
                      기업명
                    </BusinessInfoTitle>
                    {businessInfo.companyName}
                  </BusinessInfoTitleBox>
                  <BusinessInfoContentBox>
                    <BusinessInfoContentTitleBox>
                      <BusinessInfoTitle>사업자등록번호</BusinessInfoTitle>
                      <BusinessInfoTitle>대표자</BusinessInfoTitle>
                      <BusinessInfoTitle>설립일</BusinessInfoTitle>
                      <BusinessInfoTitle>소재지</BusinessInfoTitle>
                      <BusinessInfoTitle>기업규모</BusinessInfoTitle>
                      <BusinessInfoTitle>기업형태</BusinessInfoTitle>
                      <BusinessInfoTitle>임직원수</BusinessInfoTitle>
                      <BusinessInfoTitle>업종</BusinessInfoTitle>
                    </BusinessInfoContentTitleBox>
                    <BusinessInfoContentContentBox>
                      <BusinessInfoContent>
                        {businessInfo.businessNumber}
                      </BusinessInfoContent>
                      <BusinessInfoContent>
                        {businessInfo.representativeName}
                      </BusinessInfoContent>
                      <BusinessInfoContent>
                        {businessInfo.establishmentDate}
                      </BusinessInfoContent>
                      <BusinessInfoContent>
                        {businessInfo.postalCode}
                      </BusinessInfoContent>
                      <BusinessInfoContent> </BusinessInfoContent>
                      <BusinessInfoContent> </BusinessInfoContent>
                      <BusinessInfoContent>
                        {businessInfo.employeeCount}
                      </BusinessInfoContent>
                      <BusinessInfoContent>
                        {businessInfo.businessType}
                      </BusinessInfoContent>
                    </BusinessInfoContentContentBox>
                  </BusinessInfoContentBox>
                </BusinessInfoContainer>
              )}
              <SubTitle>게임사 이름</SubTitle>
              {watch("bCompanyName") ? (
                <LargeInput
                  {...register("bCompanyName")}
                  type="text"
                  placeholder="ex) moomogames, 무모게임즈"
                  style={{ borderColor: "#ededed" }}
                />
              ) : (
                <LargeInput
                  {...register("bCompanyName")}
                  type="text"
                  placeholder="ex) moomogames, 무모게임즈"
                />
              )}
              <Title>제작 중인 게임</Title>
              <Comments>
                테스트를 진행할 게임의 포트폴리오 및 제작 현황에 대한 설명을
                확인할 수 있는 파일을 올려주세요.
              </Comments>
              {fileInfo != null ? (
                <AccentFileLabel htmlFor="file">
                  <span>{fileInfo?.name}</span>
                  <div>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span
                      style={{
                        color: "#828282",
                        textDecoration: "underline",
                        marginLeft: "20px",
                      }}
                    >
                      파일 변경
                    </span>
                  </div>
                </AccentFileLabel>
              ) : (
                <FileLabel htmlFor="file">파일 올리기</FileLabel>
              )}
              <input
                type="file"
                accept=".jpeg, .png, .pdf"
                onChange={GameFileChange}
                style={{ display: "none" }}
                id="file"
              />
              <span style={{ color: "#9f9f9f" }}>
                10MB 이내PDF,JPEG,PNG 파일을 등록해주세요.
              </span>
              <Title>관리자 정보 입력</Title>
              <Comments>
                위더스 메이커 관리자를 설정해 테스트 설계 및 문의 소통을
                원활하게 도와줍니다.
              </Comments>
              <GridDiv>
                <div>
                  <SubTitle>관리자 이름</SubTitle>
                  {watch("bAdminName") ? (
                    <LargeInput
                      {...register("bAdminName")}
                      type="text"
                      placeholder="ex) 김00"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("bAdminName")}
                      type="text"
                      placeholder="ex) 김00"
                    />
                  )}
                </div>
                <div>
                  <SubTitle>직급</SubTitle>
                  {watch("bEmployeePosition") ? (
                    <LargeInput
                      {...register("bEmployeePosition")}
                      type="text"
                      placeholder="ex) 사원, 팀장, 실장, 대표"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("bEmployeePosition")}
                      type="text"
                      placeholder="ex) 사원, 팀장, 실장, 대표"
                    />
                  )}
                </div>
                <div>
                  <SubTitle>역할</SubTitle>
                  {watch("bJobRole") ? (
                    <LargeInput
                      {...register("bJobRole")}
                      type="text"
                      placeholder="ex) PM, 디자이너, 매니저"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("bJobRole")}
                      type="text"
                      placeholder="ex) PM, 디자이너, 매니저"
                    />
                  )}
                </div>
                <div>
                  <SubTitle>연락 가능 이메일</SubTitle>
                  {watch("bEmail") ? (
                    <LargeInput
                      {...register("bEmail")}
                      type="text"
                      placeholder="ex) plithus@naver.com"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("bEmail")}
                      type="text"
                      placeholder="ex) plithus@naver.com"
                    />
                  )}
                </div>
                <div style={{ position: "relative" }}>
                  <SubTitle>휴대폰 번호</SubTitle>
                  {watch("bPhone") ? (
                    <LargeInput
                      {...register("bPhone")}
                      type="number"
                      placeholder="ex) 01000000000"
                      style={{ borderColor: "#ededed" }}
                    />
                  ) : (
                    <LargeInput
                      {...register("bPhone")}
                      type="text"
                      placeholder="ex) 01000000000"
                    />
                  )}
                  {watch("bPhone") ? (
                    <PhoneBtn
                      onClick={onClickSendCode}
                      disabled={false}
                      style={{ bottom: "29px" }}
                    >
                      인증하기
                    </PhoneBtn>
                  ) : (
                    <PhoneBtn
                      onClick={onClickSendCode}
                      disabled={true}
                      style={{ bottom: "29px" }}
                    >
                      인증하기
                    </PhoneBtn>
                  )}
                </div>
                <div>
                  <SubTitle>사업자등록증</SubTitle>

                  {licensefileInfo != null ? (
                    <AccentFileLabel htmlFor="file" style={{ height: "67px" }}>
                      <span>{licensefileInfo?.name}</span>
                      <div>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <span
                          style={{
                            color: "#828282",
                            textDecoration: "underline",
                            marginLeft: "20px",
                          }}
                        >
                          파일 변경
                        </span>
                      </div>
                    </AccentFileLabel>
                  ) : (
                    <FileLabel htmlFor="licenseFile">파일 올리기</FileLabel>
                  )}
                  <input
                    type="file"
                    accept=".jpeg, .png, .pdf"
                    onChange={LicenseFileChange}
                    style={{ display: "none" }}
                    id="licenseFile"
                  />

                  <span style={{ color: "#9f9f9f" }}>
                    10MB 이내PDF,JPEG,PNG 파일을 등록해주세요.
                  </span>
                </div>
                {sendCode && (
                  <div style={{ position: "relative" }}>
                    <SubTitle>인증 번호</SubTitle>
                    {watch("code") ? (
                      <LargeInput
                        {...register("code")}
                        type="text"
                        placeholder="인증 번호 4자리를 입력해주세요."
                        style={{ borderColor: "#ededed" }}
                      />
                    ) : (
                      <LargeInput
                        {...register("code")}
                        type="text"
                        placeholder="인증 번호 4자리를 입력해주세요."
                      />
                    )}
                    {watch("code") ? (
                      <PhoneBtn onClick={onClickValidateCode} disabled={false}>
                        확인
                      </PhoneBtn>
                    ) : (
                      <PhoneBtn onClick={onClickValidateCode} disabled={true}>
                        확인
                      </PhoneBtn>
                    )}
                  </div>
                )}
              </GridDiv>
              <div style={{ marginBottom: "50px" }}>
                <input
                  type="checkbox"
                  style={{ marginRight: "14px" }}
                  {...register("bTermsAgreed")}
                />
                <span style={{ marginRight: "205px" }}>
                  위더스 메이커 서비스 약관 동의 (필수)
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={() => setTermsAgreedModal(true)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div style={{ marginBottom: "107px" }}>
                <input
                  type="checkbox"
                  style={{ marginRight: "14px" }}
                  {...register("bPrivacyAgreed")}
                />
                <span style={{ marginRight: "233px" }}>
                  개인정보 수집 및 이용 동의 (필수)
                </span>
                <Link
                  to="https://blog.naver.com/plithus/222886285043"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
            </div>
          )}
        </Wrapper>
      )}
      {overviewStatus === "SUBMITTED" && (
        <Wrapper>
          <BoxContainer>
            <BoxTitleContainer>
              <BoxTitle>{overviewData?.data.companyName}</BoxTitle>
              <BoxBadge>
                {overviewData?.data.companyType === "INDIVIDUAL"
                  ? "개인"
                  : "사업자"}
              </BoxBadge>
            </BoxTitleContainer>
            {overviewData?.data.conpanyType === "INDIVIDUAL" ? (
              <BoxContentContainer>
                <BoxContentTitleContainer>
                  <BoxContentTitle>게임사 이름</BoxContentTitle>
                  <BoxContentTitle>관리자</BoxContentTitle>
                  <BoxContentTitle>유형</BoxContentTitle>
                  <BoxContentTitle>이메일</BoxContentTitle>
                  <BoxContentTitle>휴대폰 번호</BoxContentTitle>
                </BoxContentTitleContainer>
                <BoxContentContentsContainer>
                  <BoxContentContents>
                    {overviewData?.data.companyName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.adminName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.occupation}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.email}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.phone}
                  </BoxContentContents>
                </BoxContentContentsContainer>
              </BoxContentContainer>
            ) : (
              <BoxContentContainer style={{ paddingBottom: "0px" }}>
                <BoxContentTitleContainer>
                  <BoxContentTitle>사업자등록번호</BoxContentTitle>
                  <BoxContentTitle>게임사 이름</BoxContentTitle>
                  <BoxContentTitle>관리자</BoxContentTitle>
                  <BoxContentTitle>직급</BoxContentTitle>
                  <BoxContentTitle>역할</BoxContentTitle>
                  <BoxContentTitle>이메일</BoxContentTitle>
                  <BoxContentTitle>휴대폰 번호</BoxContentTitle>
                </BoxContentTitleContainer>
                <BoxContentContentsContainer>
                  <BoxContentContents>
                    {overviewData?.data.businessNumber}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.companyName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.adminName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.employeePosition}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.jobRole}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.email}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.phone}
                  </BoxContentContents>
                </BoxContentContentsContainer>
              </BoxContentContainer>
            )}
            <Button>내용 변경</Button>
            <ModalContainer>
              <ModalContent>
                <ModalContentTitle>
                  게임사 심사가
                  <br />
                  진행중입니다.
                </ModalContentTitle>
                <ModalContentContent>
                  심사 기간은 영업일 기준
                  <br />
                  0-2일이 소요됩니다.
                </ModalContentContent>
              </ModalContent>
            </ModalContainer>
          </BoxContainer>
        </Wrapper>
      )}
      {overviewStatus === "REJECTED" && (
        <Wrapper>
          <BoxContainer>
            <BoxTitleContainer>
              <BoxTitle>{overviewData?.data.companyName}</BoxTitle>
              <BoxBadge>
                {overviewData?.data.companyType === "INDIVIDUAL"
                  ? "개인"
                  : "사업자"}
              </BoxBadge>
            </BoxTitleContainer>
            {overviewData?.data.companyType === "INDIVIDUAL" ? (
              <BoxContentContainer>
                <BoxContentTitleContainer>
                  <BoxContentTitle>게임사 이름</BoxContentTitle>
                  <BoxContentTitle>관리자</BoxContentTitle>
                  <BoxContentTitle>유형</BoxContentTitle>
                  <BoxContentTitle>이메일</BoxContentTitle>
                  <BoxContentTitle>휴대폰 번호</BoxContentTitle>
                </BoxContentTitleContainer>
                <BoxContentContentsContainer>
                  <BoxContentContents>
                    {overviewData?.data.companyName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.adminName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.occupation}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.email}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.phone}
                  </BoxContentContents>
                </BoxContentContentsContainer>
              </BoxContentContainer>
            ) : (
              <BoxContentContainer style={{ paddingBottom: "0px" }}>
                <BoxContentTitleContainer>
                  <BoxContentTitle>사업자등록번호</BoxContentTitle>
                  <BoxContentTitle>게임사 이름</BoxContentTitle>
                  <BoxContentTitle>관리자</BoxContentTitle>
                  <BoxContentTitle>직급</BoxContentTitle>
                  <BoxContentTitle>역할</BoxContentTitle>
                  <BoxContentTitle>이메일</BoxContentTitle>
                  <BoxContentTitle>휴대폰 번호</BoxContentTitle>
                </BoxContentTitleContainer>
                <BoxContentContentsContainer>
                  <BoxContentContents>
                    {overviewData?.data.businessNumber}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.companyName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.adminName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.employeePosition}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.jobRole}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.email}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.phone}
                  </BoxContentContents>
                </BoxContentContentsContainer>
              </BoxContentContainer>
            )}
            <Link to="edit">
              <Button style={{ backgroundColor: "#262626" }}>수정하기</Button>
            </Link>
            <ModalContainer style={{ height: "484px" }}>
              <ModalContent>
                <ModalContentTitle style={{ color: "#FF1F00" }}>
                  게임사 승인이
                  <br />
                  반려되었습니다.
                </ModalContentTitle>
                <ModalContentContent>
                  {overviewData?.data.rejectionReason}
                </ModalContentContent>
              </ModalContent>
            </ModalContainer>
          </BoxContainer>
        </Wrapper>
      )}
      {overviewStatus === "APPROVED" && (
        <Wrapper>
          <BoxContainer>
            <BoxTitleContainer>
              <BoxTitle>{overviewData?.data.companyName}</BoxTitle>
              <BoxBadge>
                {overviewData?.data.companyType === "INDIVIDUAL"
                  ? "개인"
                  : "사업자"}
              </BoxBadge>
            </BoxTitleContainer>
            {overviewData?.data.companyType === "INDIVIDUAL" ? (
              <BoxContentContainer>
                <BoxContentTitleContainer>
                  <BoxContentTitle>게임사 이름</BoxContentTitle>
                  <BoxContentTitle>관리자</BoxContentTitle>
                  <BoxContentTitle>유형</BoxContentTitle>
                  <BoxContentTitle>이메일</BoxContentTitle>
                  <BoxContentTitle>휴대폰 번호</BoxContentTitle>
                </BoxContentTitleContainer>
                <BoxContentContentsContainer>
                  <BoxContentContents>
                    {overviewData?.data.companyName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.adminName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.occupation}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.email}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.phone}
                  </BoxContentContents>
                </BoxContentContentsContainer>
              </BoxContentContainer>
            ) : (
              <BoxContentContainer style={{ paddingBottom: "0px" }}>
                <BoxContentTitleContainer>
                  <BoxContentTitle>사업자등록번호</BoxContentTitle>
                  <BoxContentTitle>게임사 이름</BoxContentTitle>
                  <BoxContentTitle>관리자</BoxContentTitle>
                  <BoxContentTitle>직급</BoxContentTitle>
                  <BoxContentTitle>역할</BoxContentTitle>
                  <BoxContentTitle>이메일</BoxContentTitle>
                  <BoxContentTitle>휴대폰 번호</BoxContentTitle>
                </BoxContentTitleContainer>
                <BoxContentContentsContainer>
                  <BoxContentContents>
                    {overviewData?.data.businessNumber}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.companyName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.adminName}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.employeePosition}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.jobRole}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.email}
                  </BoxContentContents>
                  <BoxContentContents>
                    {overviewData?.data.phone}
                  </BoxContentContents>
                </BoxContentContentsContainer>
              </BoxContentContainer>
            )}

            <Link to="edit" style={{ textDecoration: "none" }}>
              <Button>내용 변경</Button>
            </Link>
          </BoxContainer>
        </Wrapper>
      )}
    </Main>
  );
}
