
export interface KycRequirement {
  id: string;
  name: string;
  description: string;
  required: boolean;
  minAge?: number;
  format?: string[];
  maxSize?: number;
}

export interface KycDocument {
  id: string;
  userId: string;
  type: string;
  status: "pending" | "approved" | "rejected";
  uploadDate: string;
  fileUrl: string;
  fileName: string;
  documentType?: "id_card" | "ssn" | "proof_address" | "selfie";
}

export interface KycSettings {
  autoVerification: boolean;
  strictMode: boolean;
  documentExpiry: number;
  reVerificationPeriod: number;
  ssnMask: boolean;
  ssnRetentionDays: number;
  idCardValidation: {
    checkExpiry: boolean;
    checkHologram: boolean;
    checkBarcode: boolean;
  };
}
