"use client"

import { useState } from "react"
import { Person4, Email} from "@mui/icons-material"
import ContactsIcon from '@mui/icons-material/Contacts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { SendCreateUser } from "@/api/auth";
import { useRouter } from "next/navigation";
import { UserRole as UserType} from "@/types/types";

export const CreateUser = () => {
    const router = useRouter();
    const [userRole, SetRole] = useState<UserType>("guest");
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        role: "guest",
        profession: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
            e.preventDefault();
            setError('');
            setSuccess('');
    
        setIsLoading(true);
        try {
            await SendCreateUser({
                ...formData,
                role: userRole
            });
            setSuccess("User successfully created");
              setFormData({
                nom: "",
                prenom: "",
                email: "",
                role: "guest",
                profession: ""
            });
            SetRole("guest");
        } catch (err: any) {
            console.log("Creation failed: ", err.response?.data);
            const errorMessage = err.response?.data;
                setError(errorMessage);
        }finally {
            setIsLoading(false);
        }
    }
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        SetRole(event.target.value as UserType)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    return (
        <div className="p-4">
            <form  className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-black">
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                                nom
                            </label>
                            <div className="relative">
                                <Person4 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleInputChange}
                                    placeholder="Votre nom"
                                    required
                                    className="w-full pl-10 pr-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-bold"
                                />
                            </div>
                        </div>
                        <div className="text-black">
                            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                                Prénom
                            </label>
                            <div className="relative">
                                <Person4 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                <input
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleInputChange}
                                    placeholder="Votre prénom"
                                    required
                                    className="w-full pl-10 pr-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-bold"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-black">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <Email className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Votre email"
                                required
                                className="w-full pl-10 pr-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-bold"
                            />
                        </div>
                    </div>
                    <div className="text-black">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                            Rôle
                        </label>
                        <div className="relative">
                            <AssignmentIndIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                            <select
                                value={formData.role}
                                onChange={handleSelect}
                                className="w-full pl-10 pr-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-bold"
                            >
                                <option value="guest">Guest</option>
                                <option value="host">Host</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-black">
                        <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                            Profession
                        </label>
                        <div className="relative">
                            <ContactsIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                            <input
                                type="text"
                                id="profession"
                                name="profession"
                                value={formData.profession}
                                onChange={handleInputChange}
                                placeholder="Votre profession"
                                required
                                className="w-full pl-10 pr-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-bold"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-3">
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 cursor-pointer bg-brand-primary hover:bg-brand-bold text-white rounded-xl transition-colors font-medium shadow-lg shadow-purple-600/20"
                            >
                                Confirm
                            </button>
                    </div>
                        {success && (
                            <div className="bg-green-50 border border-green-100 text-green-600 text-sm p-3 rounded-xl text-center animate-in fade-in slide-in-from-top-1">
                                {success}
                            </div>
                        )}
            </form>
        </div>
    )
}