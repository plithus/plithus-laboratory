import instance from "../../../../API/MainAPI";

export default function CompanyInfoBusinessArchiveAPI(formData: any) {
  return instance.post("/v1/labs/companies/business/archives", formData, {
    headers: {
      "Content-Type": "multipart/form-data; boundary=Paw",
      Accept: "application/json",
    },
  });
}
