import react from "react"

function CampoVaga({children, label, valor, funcaoChange,parametro, placeholder, tipo  }) {
    return (
        <div className="flex-1">
            <label htmlFor={parametro} className="block text-sm font-medium text-white-900">{label}</label>
            <input
                type={tipo}
                id={parametro} 
                name={parametro} 
                value={valor}
                onChange={funcaoChange}
                className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm }"
                placeholder={placeholder}
            />
            {children}
        </div>
    )
}

export default CampoVaga