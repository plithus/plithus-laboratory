import instance from "../../../../API/MainAPI";

export default function MakerGameProposalOverviewAPI() {
  return instance.get("/v1/labs/game-proposals");
}
