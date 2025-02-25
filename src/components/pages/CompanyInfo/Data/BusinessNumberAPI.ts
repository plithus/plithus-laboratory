import instance from "../../../../API/MainAPI";

export default function BusinessNumberAPI(formData: any) {
  return instance.post("/v1/labs/companies/business/info", formData, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
