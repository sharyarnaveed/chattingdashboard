import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <SidebarProvider>


          <main className="w-full " >{children}</main>

    </SidebarProvider>

  )
}
