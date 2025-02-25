import instance from "../../../../API/MainAPI";

export default function CompanyInfoBusinessDetailAPI() {
  return instance.get("/v1/labs/companies/business");
}
