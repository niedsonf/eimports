import { SideMenu } from "@/components/SideMenu";
import { CategoriesContextProvider } from "@/contexts/CategoriesContext";
import { CustomersContextProvider } from "@/contexts/CustomersContext";
import { SalesContextProvider } from "@/contexts/SalesContext";
import { UserContextProvider } from "@/contexts/UserContext";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
    return (
        <UserContextProvider>
            <CustomersContextProvider>
                <CategoriesContextProvider>
                    <SalesContextProvider>
                        <SideMenu />
                        <main className="flex w-full h-screen max-w-[100dvw] overflow-hidden">
                            <div className="ml-16 grow">
                                {children}
                            </div>
                        </main>
                    </SalesContextProvider>
                </CategoriesContextProvider>
            </CustomersContextProvider>
        </UserContextProvider>
    )
}