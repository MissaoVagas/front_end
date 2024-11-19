

function CampoOption({label, parametro, valor, funcaoChange, listaOption, children}) {
    return (
        <div className="flex-1">
            <label htmlFor={parametro} className="block text-sm font-medium text-white-900">{label}</label>
            <select
                id={parametro}
                value={valor}
                name={parametro}
                onChange={funcaoChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm "
            >
                {listaOption.map((op, index)=>(
                    <option key={index}>{op}</option>
                ))}
            </select>
            {children}
        </div>
    )
}

export default CampoOption