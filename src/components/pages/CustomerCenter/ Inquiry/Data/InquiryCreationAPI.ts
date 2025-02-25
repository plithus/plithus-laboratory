import instance from "../../../../../API/MainAPI";

export default function InquiryCreationAPI(formData: any) {
  return instance.post("/v1/labs/inquiries", formData, {
    headers: {
      "Content-Type": "multipart/form-data; boundary=Paw",
      Accept: "application/json",
    },
  });
}
