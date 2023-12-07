'use client'

import { CategoriesContext } from '@/contexts/CategoriesContext'
import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { useContextSelector } from 'use-context-selector'

export function NewProductForm() {
    const categories = useContextSelector(CategoriesContext, context => context.categories)

    

    return (
        <form
            action=""
            className="form-wrapper"
        >
            <h2 className="form-title">
                Adicionar produto
            </h2>
            <input
                className="form-input"
                placeholder="Nome"
                type="text"
            />
            <input
                className="form-input"
                placeholder="Descrição"
                type="text"
            />
            <Select.Root disabled={categories.length < 1}>
                <Select.Trigger className='form-input relative aria-disabled:cursor-not-allowed' aria-disabled={categories.length < 1}>
                    <Select.Value
                        className='text-gray-300 placeholder:text-gray-500'
                        placeholder={categories.length < 1 ? 'Sem categorias cadastradas' : 'Selecione categoria'}
                    />
                    <Select.Icon className="absolute right-2">
                        <ChevronDown />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Content>
                    <Select.Viewport className='bg-gray-800 p-2 rounded-md border border-gray-600'>
                        <Select.Group>
                            {categories.map((category, i) => {
                                return <Select.Item
                                    className='hover:bg-gray-600 text-gray-300 p-4 rounded cursor-pointer'
                                    key={i}
                                    value={category.description}>
                                    <Select.ItemText>{category.description}</Select.ItemText>
                                </Select.Item>
                            })}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>

            </Select.Root>
            <input
                className="form-input [&::-webkit-outer-spin-button]:hidden [&::-webkit-inner-spin-button]:hidden"
                placeholder="Quantidade"
                type="number"
            />
            <button
                className="form-submit mt-4"
            >Adicionar</button>
        </form>
    )
}