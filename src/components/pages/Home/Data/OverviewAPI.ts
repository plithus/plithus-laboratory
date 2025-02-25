import instance from "../../../../API/MainAPI";

export default function OverviewAPI() {
  return instance.get("/v1/labs");
}
