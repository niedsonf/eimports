import { SideMenu } from "@/components/SideMenu";

export default function PainelLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SideMenu />
            <main className="flex w-full">
                <div className="pl-16 flex-1">
                    {children}
                </div>
            </main>
        </>
    )
}