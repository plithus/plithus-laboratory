import instance from "../../../../../API/MainAPI";

export default function GameProposalExistsAPI() {
  return instance.get("/v1/labs/game-proposals/exists");
}
