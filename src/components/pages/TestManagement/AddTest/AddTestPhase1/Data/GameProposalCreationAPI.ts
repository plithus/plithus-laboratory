import instance from "../../../../../../API/MainAPI";

export default function GameProposalCreationAPI() {
  return instance.post("/v1/labs/game-proposals", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
