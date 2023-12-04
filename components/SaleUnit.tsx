'use client'

import clsx from 'clsx'
import { SalesContext } from '@/contexts/SalesContext'
import { useContextSelector } from 'use-context-selector'
import { Sale } from '@/@types/Sale'

export function SaleUnit({ sale }: { sale: Sale }) {
    const holdSale = useContextSelector(SalesContext, context => context.holdSale)

    return (
        <div className={clsx(
            "flex w-full gap-12 p-4",
            "bg-gray-600 rounded-md",
        )}>
            <div className='flex flex-col gap-6'>
                <div>
                    <h2 className='text-lg text-gray-100'>{sale.client.name}</h2>
                    <span className='text-md text-gray-300'>{sale.date.toLocaleDateString()}</span>
                </div>
                <div>
                    <h3 className='text-md text-gray-300'>Valor Total:</h3>
                    <span className='text-lg text-green-300'>R$ {sale.total}</span>
                </div>
            </div>
            <div className='grow flex flex-col justify-end gap-1'>
                <h3 className='text-md text-gray-300'>Produtos na venda:</h3>
                <ul className='[&>li]:text-sm text-gray-100 [&_span]:text-green-300'>
                    {sale.products.map(product => (
                        <li key={product.id}>
                            <span>{product.quantity}x</span> {product.name}
                        </li>

                    ))}
                </ul>
            </div>
            <div className='flex flex-col justify-between items-end'>
                <div className='flex items-center gap-2'>
                    <span className='status-indicator' />
                    <span className='uppercase text-xs text-green-300'>Pago</span>
                </div>
                <button
                    onClick={() => holdSale(sale)}
                    className='form-submit'>
                    Detalhes
                </button>
            </div>
        </div>
    )
}