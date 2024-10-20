import React from 'react'

function Notificacoes() {
    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white-900">Notificações</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
                Nós sempre informamos atualizações, mas gostaríamos de saber suas preferências.
            </p>

            <div className="mt-10 space-y-10">
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-white-900">Por Email</legend>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-white-900">
                                    Visualizações
                                </label>
                                <p className="text-gray-400">Seja notificado quando alguém visualizar seu  perfil.</p>
                            </div>
                        </div>
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="candidates" className="font-medium text-white-900">
                                    Candidatos
                                </label>
                                <p className="text-gray-400">Seja notificado quando sua aplicação for visualizada pelo recrutador.</p>
                            </div>
                        </div>
                        <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input
                                    id="offers"
                                    name="offers"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="offers" className="font-medium text-white-900">
                                    Recrutador
                                </label>
                                <p className="text-gray-400">Seja notificado quando um candidato se inscrever em uma vaga cadastrada.</p>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-white-900">Notificações pelo celular</legend>
                    <p className="mt-1 text-sm leading-6 text-gray-400">Notificações entregues via SMS.</p>
                    <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-white-900">
                                Tudo
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-white-900">
                                Mesmo que email
                            </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-white-900">
                                Sem notificações pelo celular
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
        
    )
}

export default Notificacoes