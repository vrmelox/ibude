export interface CreateUser {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role: "guest" | "host" | "both";
  adresse: string | null;
  profession: string | null;
  note_globale: number;
  statut: "verified" | "pending" | "processing";
  created_at: Date;
  updated_at: Date;
};

export interface ResponseCreateUser {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role: "guest" | "host" | "both";
  adresse: string | null;
  profession: string | null;
  note_globale: number;
  statut: "verified" | "pending" | "processing";
  created_at: Date;
  updated_at: Date;
};