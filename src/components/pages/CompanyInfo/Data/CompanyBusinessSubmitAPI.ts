import instance from "../../../../API/MainAPI";

export default function CompanyBusinessSubmitAPI(formData: any) {
  return instance.post("/v1/labs/companies/business/submissions", formData, {
    headers: {
      "Content-Type": "multipart/form-data; boundary=Paw",
      Accept: "application/json",
    },
  });
}
