'use client'

import { CategoriesList } from "@/components/CategoriesList";
import { NewCategoryForm } from "@/components/Forms/NewCategoryForm";
import { NewProductForm } from "@/components/Forms/NewProductForm";
import { SearchProductForm } from "@/components/Forms/SearchProductForm";
import * as Tabs from "@radix-ui/react-tabs";

export default function RegisterProductPage() {
    return (
        <div className="h-screen overflow-y-auto">
            <section className="flex items-center justify-center bg-gray-700 p-4 border-b border-gray-600">
                <SearchProductForm />
            </section>
            <Tabs.Root defaultValue="register">
                <Tabs.List className="flex items-center justify-center">
                    <Tabs.Trigger
                        className="tabs-trigger"
                        key={"tab-trigger-register"}
                        value="register">
                        <span>Cadastros</span>
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="tabs-trigger"
                        key={"tab-trigger-inventory"}
                        value="inventory">
                        <span>Estoque</span>
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="register">
                    <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-16 p-4 lg:pt-8 ">
                        <div className="lg:w-96 w-full">
                            <NewProductForm />
                        </div>
                        <div className="lg:w-80 w-full">
                            <NewCategoryForm />
                        </div>
                        <div className="lg:w-80 w-full">
                            <CategoriesList />
                        </div>
                    </div>
                </Tabs.Content>
                <Tabs.Content value="inventory">
                    <div className="w-full flex items-start justify-center gap-16 pt-12">
                        <h1>Estoque com produtos e respectivas quantidades</h1>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}