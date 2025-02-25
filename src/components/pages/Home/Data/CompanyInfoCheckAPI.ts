import instance from "../../../../API/MainAPI";

export default function CompanyInfoCheckAPI() {
  return instance.get("/v1/labs/companies/ever-approved-status");
}
