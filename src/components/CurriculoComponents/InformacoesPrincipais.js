import { UserCircleIcon } from '@heroicons/react/24/solid'
import React,{ useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import defaultPhoto from '../../assets/imgs/astronauta.png'

function InformacoesPrincipais() {

    const {principais, setPrincipais, errors, setErrors } = useContext(UserContext); // Captura a função para atualizar o contexto

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPrincipais((prevPrincipais)=>({
            ...prevPrincipais,
            [name]:value,
        }))

        validateField(name,value)
    };


    const handlePhotoChange = (e) => {
        const file = e.target.files[0]; // Obtém o arquivo selecionado
        if (file) {
            const photoUrl = URL.createObjectURL(file); // Cria uma URL temporária para preview
            setPrincipais((prevPrincipais) => ({
                ...prevPrincipais,
                photo: photoUrl, // Salva a URL temporária em 'principais'
            }));
        }
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors };

        switch (name) {
            case "username":
                newErrors.username =
                    value.length < 3 ? "O username deve ter pelo menos 3 caracteres." : "";
                break;
            case "sobre":
                newErrors.sobre =
                    value.length < 5 ? "O Sobre deve ter pelo menos 5 caracteres." : "";
                break;
            
            default:
                break;
        }

        setErrors(newErrors);
    };

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-300">
                Essa informação será apresentada nas suas futuras candidaturas. Responda com atenção.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-white-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">jobsrocket.com/</span>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="janesmith"
                                autoComplete="username"
                                value={principais.username} 
                                onChange={handleChange}
                                className="block flex-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 bg-stone-800 py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                            
                        </div>
                        {errors.username && (
                            <p className="text-red-500 text-sm">{errors.username}</p>
                        )}
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-white-900">
                        Sobre
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="about"
                            name="sobre"
                            rows={3}
                            value={principais.sobre}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.sobre && (
                            <p className="text-red-500 text-sm">{errors.sobre}</p>
                        )}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">Escreva um pouco sobre você.</p>
                </div>

                <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-White-900">
                        Foto
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                        {principais.photo ? (
                            <img
                                src={defaultPhoto}
                                alt="Foto de perfil"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                        ) : (
                            <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            id="photo"
                            onChange={handlePhotoChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="photo"
                            className="rounded-md bg-stone-800 px-2.5 py-1.5 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-stone-800 hover:bg-gray-500 cursor-pointer"
                        >
                            Mudar
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformacoesPrincipais