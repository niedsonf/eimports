import { CategoriesContext } from "@/contexts/CategoriesContext"
import clsx from "clsx"
import { X } from "lucide-react"
import { useContextSelector } from "use-context-selector"

export function CategoriesList() {
    const categories = useContextSelector(CategoriesContext, context => context.categories)
    const deleteCategory = useContextSelector(CategoriesContext, context => context.deleteCategory)

    return (
        <div className="form-wrapper">
            <h2 className="form-title">
                Categorias
            </h2>
            <ul className="flex flex-col rounded overflow-hidden max-h-[500px] overflow-y-auto">
                {categories.length > 0
                    ? categories.map((category, i) => (
                        <li key={i} className={clsx(
                            "flex p-4 items-center justify-between",
                            "bg-gray-800 hover:bg-gray-900"
                        )}>
                            <span className="text-gray-100">{category.description}</span>
                            <button
                                className="text-gray-100 hover:text-red-300 hover:transition-colors"
                                onClick={() => deleteCategory(category.id)}>
                                <X size={20} />
                            </button>
                        </li>
                    ))
                    : <span>Sem categorias cadastradas</span>}
            </ul>
        </div>
    )
}