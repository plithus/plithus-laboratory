import instance from "../../../../../../API/MainAPI";

export default function InquiryPagesAPI(page: any) {
  return instance.get("/v1/labs/inquiries", {
    params: {
      pageSize: 10,
      pageNumber: page - 1,
    },
  });
}
