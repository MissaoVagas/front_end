import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

function InformacoesPessoais() {

    const { pessoais, setPessoais, errors, setErrors } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setPessoais((prevPessoais) => ({
            ...prevPessoais,
            [name]: value,
        }));

        validateField(name, value)
    }




    const handleFileChange = (file) => {
        setPessoais((prevState) => ({
            ...prevState,
            curriculo: file, // Armazena o arquivo no campo curriculo
        }));
        console.log('Arquivo enviado:', file);
    };

    // Função para validar campos individualmente
    const validateField = (name, value) => {
        let newErrors = { ...errors };

        switch (name) {
            case "nome":
                newErrors.nome =
                    value.length < 5 ? "O nome deve ter pelo menos 5 caracteres." : "";
                break;
            case "sobrenome":
                newErrors.sobrenome =
                    value.length < 5 ? "O sobrenome deve ter pelo menos 5 caracteres." : "";
                break;
            case "cep":
                newErrors.cep =
                    value.length < 7 ? "O cep deve ter pelo menos 7 caracteres." : "";
                break;
            case "email":
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                newErrors.email = !emailPattern.test(value) ? "E-mail inválido." : "";
                break;
            case "linkedin":
                newErrors.linkedin =
                    value.length < 5 ? "O usuário do LinkedIn deve ter mais de 5 caracteres." : "";
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };


    return (
        <div className="border-b border-gray-400/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white-900">Informações Pessoais</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">Essas informações serão usadas para entrar em contato com você.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white-900">
                        Nome
                    </label>
                    <div className="mt-2">
                        <input
                            id="first-name"
                            name="nome"
                            type="text"
                            autoComplete="given-name"
                            value={pessoais.nome}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.nome && (
                            <p className="text-red-500 text-sm">{errors.nome}</p>
                        )}
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white-900">
                        Sobrenome
                    </label>
                    <div className="mt-2">
                        <input
                            id="last-name"
                            name="sobrenome"
                            type="text"
                            autoComplete="family-name"
                            value={pessoais.sobrenome}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.sobrenome && (
                            <p className="text-red-500 text-sm">{errors.sobrenome}</p>
                        )}
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="birthday" className="block text-sm text-white-900 dark:text-gray-300">Data de Nascimento</label>

                    <input
                        type="date"
                        placeholder="John Doe"
                        name='nascimento'
                        value={pessoais.nascimento}
                        onChange={handleChange}
                        className="block  mt-2 w-full placeholder-gray-400 rounded-lg border border-gray-200 bg-stone-800 py-1.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-indigo-600  " />
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={pessoais.email}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-white-900">
                        País
                    </label>
                    <div className="mt-2">
                        <select
                            id="country"
                            name="pais"
                            autoComplete="country-name"
                            value={pessoais.pais}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option>Brasil</option>
                            <option>Portugal</option>
                            <option>Paraguai</option>
                            <option>Argentina</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white-900">
                        Endereço
                    </label>
                    <div className="mt-2">
                        <input
                            id="street-address"
                            name="endereco"
                            type="text"
                            autoComplete="street-address"
                            value={pessoais.endereco}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-white-900">
                        Cidade
                    </label>
                    <div className="mt-2">
                        <input
                            id="city"
                            name="cidade"
                            type="text"
                            autoComplete="address-level2"
                            value={pessoais.cidade}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-white-900">
                        Estado
                    </label>
                    <div className="mt-2">
                        <input
                            id="region"
                            name="estado"
                            type="text"
                            autoComplete="address-level1"
                            value={pessoais.estado}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-white-900">
                        CEP
                    </label>
                    <div className="mt-2">
                        <input
                            id="postal-code"
                            name="cep"
                            type="text"
                            autoComplete="postal-code"
                            value={pessoais.cep}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-400 bg-stone-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.cep && (
                            <p className="text-red-500 text-sm">{errors.cep}</p>
                        )}
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="linkedin" className="block text-sm text-white-900 font-medium leading-6">Linkedin</label>

                    <div className="flex items-center mt-2">
                        <p className="py-2.5 px-3 text-gray-400 bg-stone-800 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">http://www.linkedin.com/in/</p>
                        <input
                            type="text"
                            placeholder="meuUser"
                            name='linkedin'
                            value={pessoais.linkedin}
                            onChange={handleChange}
                            className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400  rounded-lg border border-gray-200 bg-stone-800 px-5 py-2.5 text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-40"
                        />

                    </div>
                    {errors.linkedin && (
                        <p className="text-red-500 text-sm">{errors.linkedin}</p>
                    )}
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="github" className="block text-sm text-white-900 font-medium leading-6">Github</label>

                    <div className="flex items-center mt-2">
                        <p className="py-2.5 px-3 text-gray-400 bg-stone-800 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">http://www.github.com/</p>
                        <input
                            type="text"
                            placeholder="meuUser"
                            name='github'
                            value={pessoais.github}
                            onChange={handleChange}
                            className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400  rounded-lg border border-gray-200 bg-stone-800 px-5 py-2.5 text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="portifolio" className="block text-sm text-white-900 font-medium leading-6">Portifolio</label>

                    <div className="flex items-center mt-2">
                        <p className="py-2.5 px-3 text-gray-400 bg-stone-800 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">http://</p>
                        <input
                            type="text"
                            placeholder="www.meuportifolio.com"
                            name='portfolio'
                            value={pessoais.portfolio}
                            onChange={handleChange}
                            className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400  rounded-lg border border-gray-200 bg-stone-800 px-5 py-2.5 text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label htmlFor="curriculo" className="block text-sm text-white-900">Currículo</label>

                    <input
                        type="file"
                        name='curriculo'
                        accept=".pdf,.doc,.docx"
                        value={pessoais.curriculo}
                        onFileChange={handleFileChange}
                        className="block w-full px-3 py-2 mt-2 text-sm text-gray-400 bg-stone-800 border border-gray-600 rounded-lg file:text-gray-400 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full file:bg-gray-600  placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-600" />
                </div>
            </div>
        </div>
    )
}

export default InformacoesPessoais