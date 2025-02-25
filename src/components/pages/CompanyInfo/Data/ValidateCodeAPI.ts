import instance from "../../../../API/MainAPI";

export default function ValidateCodeAPI(formData: any) {
  return instance.post("/v1/labs/companies/validations/phone/code", formData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
