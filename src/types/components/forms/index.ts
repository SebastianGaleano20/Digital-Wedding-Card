export type DataForm = {
  name: string;
  allergy: string;
  song: string;
  message: string;
};
export interface RSVPFormData {
  firstName: string;
  lastName: string;
  attendChurch: boolean;
  attendParty: boolean;
  message: string;
}

export interface RSVPResponse {
  success: boolean;
  message: string;
  data?: RSVPFormData;
}
