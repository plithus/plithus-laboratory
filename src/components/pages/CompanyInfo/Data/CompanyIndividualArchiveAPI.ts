import instance from "../../../../API/MainAPI";

export default function CompanyIndividualArchiveAPI(formData: any) {
  return instance.post("/v1/labs/companies/individual/archives", formData, {
    headers: {
      "Content-Type": "multipart/form-data; boundary=Paw",
      Accept: "application/json",
    },
  });
}
