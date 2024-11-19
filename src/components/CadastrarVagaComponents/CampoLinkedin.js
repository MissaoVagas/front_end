import React from "react"

function CampoLinkedin({parametro, valor, funcaoChange, children}) {
    return (
        <div className="sm:col-span-3">
            <label htmlFor="linkedin" className="block text-sm text-white-900 font-medium leading-6">Linkedin</label>

            <div className="flex items-center mt-2">
                <p className="py-2.5 px-3 text-gray-400 bg-stone-800 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">http://www.linkedin.com/in/</p>
                <input
                    type="text"
                    placeholder="meuUser"
                    name={parametro}
                    value={valor}
                    onChange={funcaoChange}
                    className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400  rounded-lg border border-gray-200 bg-stone-800 px-5 py-2.5 text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-40"
                />

            </div>
            {children}
        </div>
    )
}

export default CampoLinkedin