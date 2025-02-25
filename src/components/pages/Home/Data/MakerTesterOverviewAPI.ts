import instance from "../../../../API/MainAPI";

export default function MakerTesterOverviewAPI() {
  return instance.get("/v1/labs/testers");
}
