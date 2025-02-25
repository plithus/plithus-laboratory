import instance from "../../../../API/MainAPI";

export default function CompanyInfoOverviewAPI() {
  return instance.get("/v1/labs/companies");
}
