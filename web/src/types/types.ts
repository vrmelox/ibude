export type UserRole = "guest" | "host" | "both";

export interface CreateUser {
  email: string;
  nom: string;
  prenom: string;
  role: UserRole;
  adresse?: string | null;
  profession?: string | null;
};

export interface ResponseCreateUser {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role: UserRole;
  adresse: string | null;
  profession: string | null;
  note_globale: number;
  statut: "verified" | "pending" | "processing";
  created_at: Date;
  updated_at: Date;
};