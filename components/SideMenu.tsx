'use client'

import {
    LogOut, CircleDollarSign,
    ArrowLeftRight,
    PackagePlus,
    UserPlus,
    LineChart,
    PackageSearch,
    ShoppingCart,
    Undo2,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActionPages = [
    {
        text: 'Vendas',
        icon: <PackageSearch height={20} width={20} />,
        href: '/sales'
    },
    // {
    //     text: 'Cadastrar Compra',
    //     icon: <ShoppingCart height={20} width={20} />,
    //     href: '/cadastrar_compra'
    // },
    // {
    //     text: 'Registrar Troca',
    //     icon: <ArrowLeftRight height={20} width={20} />,
    //     href: '/registrar_troca'
    // },
    // {
    //     text: 'Registrar Devolução',
    //     icon: <Undo2 height={20} width={20} />,
    //     href: '/registrar_devolucao'
    // },
    {
        text: 'Estoque',
        icon: <PackagePlus height={20} width={20} />,
        href: '/inventory'
    },
    {
        text: 'Clientes',
        icon: <UserPlus height={20} width={20} />,
        href: '/customer'
    },
]

const StatisticPages = [
    {
        text: 'Lucro Mensal',
        icon: <CircleDollarSign height={20} width={20} />,
        href: '/month_profit'
    },
    {
        text: 'Giro de Estoque',
        icon: <LineChart height={20} width={20} />,
        href: '/inventory_turnover'
    },
]

const AccountPages = [
    {
        text: 'Logout',
        icon: <LogOut height={20} width={20} />,
        href: '/login'
    }
]

export function SideMenu() {

    const pathname = usePathname()

    return (
        <aside className='absolute z-20 h-full flex w-16 hover:w-72 transition-all bg-gray-700 border-r border-gray-600 group overflow-hidden'>
            <nav className='grow flex flex-col-reverse lg:flex-col justify-start gap-6 mb-[166px] lg:mb-0 lg:mt-[83px]'>
                <div className='flex flex-col-reverse lg:flex-col'>
                    {
                        ActionPages.map((page, index) =>
                            <Link
                                data-active={pathname === page.href}
                                href={page.href}
                                key={index}
                                className="side_menu_item"
                            >
                                {page.icon}
                                <span className='side_menu_item_text'>{page.text}</span>
                            </Link>
                        )
                    }
                </div>
                <div className='side_menu_divider' />
                <div className='flex flex-col-reverse lg:flex-col'>

                    {
                        StatisticPages.map((page, index) =>
                            <Link
                                data-active={pathname === page.href}
                                href={page.href}
                                key={index}
                                className='side_menu_item'
                            >
                                {page.icon}
                                <span className='side_menu_item_text'>{page.text}</span>
                            </Link>
                        )
                    }

                </div>
                <div className='side_menu_divider' />
                <div className='flex flex-col-reverse lg:flex-col'>
                    {
                        AccountPages.map((page, index) =>
                            <Link
                                data-active={pathname === page.href}
                                href={page.href}
                                key={index}
                                className='side_menu_item'
                            >
                                {page.icon}
                                <span className='side_menu_item_text'>{page.text}</span>
                            </Link>
                        )
                    }
                </div>
            </nav>
        </aside>
    )
}