import instance from "../../../../../../API/MainAPI";

export default function GameProposalTestPlanSaveAPI(
  gameProposalId: any,
  formData: any
) {
  return instance.post(
    `/v1/labs/game-proposals/${gameProposalId}/test-plan`,
    formData,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}
