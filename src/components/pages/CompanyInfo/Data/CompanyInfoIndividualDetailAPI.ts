import instance from "../../../../API/MainAPI";

export default function CompanyInfoIndividualDetailAPI() {
  return instance.get("/v1/labs/companies/individual");
}
