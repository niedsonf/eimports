'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const searchSaleFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchSaleFormSchema>


export function SearchSaleForm() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchSaleFormSchema)
    })

    return (
        <div className="flex items-center gap-6">
            <form
                className="flex items-center gap-4"
                action=""
            >
                <input
                    className="form-input"
                    placeholder="Código da Compra"
                    type="text"
                />
                <button
                    disabled={isSubmitting}
                    className="form-submit"
                >Buscar</button>
            </form>
            <button
                disabled={isSubmitting}
                className="form-submit"
            >Nova Compra</button>
        </div>
    )
}