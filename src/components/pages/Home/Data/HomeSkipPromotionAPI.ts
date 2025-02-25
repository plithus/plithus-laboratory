import instance from "../../../../API/MainAPI";

export default function HomeSkipPromotionAPI() {
  return instance.post("/v1/labs/skip-promotion");
}
