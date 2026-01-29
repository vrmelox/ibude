import { CreateUser, ResponseCreateUser } from "@/types/types";
import api from "./api";

export const SendCreateUser = async (data: CreateUser): Promise<ResponseCreateUser> => {
    const response = await api.post<ResponseCreateUser>('/users', data);
    return response.data;
}