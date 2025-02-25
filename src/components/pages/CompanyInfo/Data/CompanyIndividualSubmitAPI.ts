import instance from "../../../../API/MainAPI";

export default function CompanyIndividualSubmitAPI(formData: any) {
  return instance.post("/v1/labs/companies/individual/submissions", formData, {
    headers: {
      "Content-Type": "multipart/form-data; boundary=Paw",
      Accept: "application/json",
    },
  });
}
