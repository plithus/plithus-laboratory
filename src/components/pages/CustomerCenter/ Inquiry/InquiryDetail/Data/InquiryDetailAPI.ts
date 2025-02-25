import instance from "../../../../../../API/MainAPI";

export default function InquiryDetailAPI(id: any) {
  return instance.get(`/v1/labs/inquiries/${id}`);
}
