import instance from "../../../../API/MainAPI";

export default function SendCodeAPI(formData: any) {
  return instance.post("/v1/labs/companies/validations/phone", formData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
