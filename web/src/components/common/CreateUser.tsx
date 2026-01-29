"use client"

import { useState } from "react"
import { Person4, Email} from "@mui/icons-material"
import ContactsIcon from '@mui/icons-material/Contacts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { SendCreateUser } from "@/api/auth";
import { useRouter } from "next/router";
import { UserRole as UserType} from "@/types/types";

export const CreateUser = () => {
    const router = useRouter();
    const [userRole, SetRole] = useState<UserType>("guest");
    const [error, setError] = useState('');
    const [formData, setFromData] = useState({
        nom: "",
        prenom: "",
        email: "",
        role: userRole,
        profession: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
            e.preventDefault();
            setError('');
            setSuccess('');
            formData.role = userRole;

        setIsLoading(true);
        try {
            await SendCreateUser(formData);
            setSuccess("User successfully created");

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
    return (
        <div className="p-4">
            <form  className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-black">
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                                Prénom
                            </label>
                            <div className="relative">
                                <Person4 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                <input
                                    type="text"
                                    id="firstname"
                                    placeholder="Votre prénom"
                                    required
                                    className="w-full pl-10 pr-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-bold"
                                />
                            </div>
                        </div>
                        <div className="text-black">
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                                Nom
                            </label>
                            <div className="relative">
                                <Person4 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                                <input
                                    type="text"
                                    id="firstname"
                                    placeholder="Votre nom"
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
                                type="text"
                                id="email"
                                placeholder="Votre email"
                                required
                                className="w-full pl-10 pr-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-bold"
                            />
                        </div>
                    </div>
                    <div className="text-black">
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                            Rôle
                        </label>
                        <div className="relative">
                            <AssignmentIndIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                            <select
                                value={userRole}
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
                                placeholder="Votre profession"
                                required
                                className="w-full pl-10 pr-3 py-2 border border-brand-primary rounded-md focus:outline-none focus:ring-2 focus:ring-brand-bold"
                            />
                        </div>
                    </div>
                    <div className="">
                        <button>

                        </button>
                    </div>
            </form>
        </div>
    )
}