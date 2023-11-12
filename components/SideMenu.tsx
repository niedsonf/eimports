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

const ActionPages = [
    {
        text: 'Buscar Compra',
        icon: <PackageSearch height={20} width={20} />,
        href: '/sales'
    },
    {
        text: 'Cadastrar Compra',
        icon: <ShoppingCart height={20} width={20} />,
        href: '/cadastrar_compra'
    },
    {
        text: 'Registrar Troca',
        icon: <ArrowLeftRight height={20} width={20} />,
        href: '/registrar_troca'
    },
    {
        text: 'Registrar Devolução',
        icon: <Undo2 height={20} width={20} />,
        href: '/registrar_devolucao'
    },
    {
        text: 'Cadastrar Produto',
        icon: <PackagePlus height={20} width={20} />,
        href: '/cadastrar_produto'
    },
    {
        text: 'Cadastrar Fornecedor',
        icon: <UserPlus height={20} width={20} />,
        href: '/cadastrar_fornecedor'
    },
]

const StatisticPages = [
    {
        text: 'Lucro Mensal',
        icon: <CircleDollarSign height={20} width={20} />,
        href: '/lucro_mensal'
    },
    {
        text: 'Giro de Estoque',
        icon: <LineChart height={20} width={20} />,
        href: '/giro_estoque'
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
    return (
        <aside className='absolute h-full w-16 hover:w-72 transition-all bg-gray-700 border-r border-gray-600 group overflow-hidden'>
            <nav className='flex flex-col gap-8 mt-16'>
                <div>
                    {
                        ActionPages.map((page, index) =>
                            <Link
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
                <div className='flex flex-col gap-4'>
                    <h6 className='side_menu_item_text pl-4 uppercase tracking-wider'>Estatísticas</h6>
                    <div>
                        {
                            StatisticPages.map((page, index) =>
                                <Link
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
                </div>
                <div className='flex flex-col gap-4'>
                    <h6 className='side_menu_item_text pl-4 uppercase tracking-wider'>Conta</h6>
                    <div>
                        {
                            AccountPages.map((page, index) =>
                                <Link
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
                </div>
            </nav>
        </aside>
    )
}