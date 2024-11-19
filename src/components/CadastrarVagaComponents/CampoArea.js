import React from "react"

function CampoArea({label, parametro, valor, funcaoChange, placeholder, children}) {
    return (
        <div className="flex-1">
            <label htmlFor={parametro} className="block text-sm font-medium text-white-900">{label}</label>
            <textarea
                id={parametro}
                value={valor}
                name={parametro}
                onChange={funcaoChange}
                rows="3"
                className="mt-1 block w-full rounded-md bg-stone-800 border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm "
                placeholder={placeholder}
            ></textarea>
            {children}
        </div>
    )
}

export default CampoArea