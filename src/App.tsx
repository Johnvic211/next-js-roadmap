import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { 
  Routes, 
  Route,
  Navigate
} from "react-router-dom"

import ToDo from "./app/phase_1/todo/ToDo"
import Weather from "./app/phase_1/weather/Weather"
import TicTacToe from "./app/phase_1/tictactoe/TicTacToe"
import Dashboard from "./app/dashboard/page"
import { ThemeProvider } from "./components/theme-provider"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 pt-0 bg-muted/50">
            <Routes>
              <Route path="" element={<Navigate to="/next-js-roadmap/phase-1/todo" replace />} />
              <Route path="/next-js-roadmap/phase-1/todo" element={<ToDo />} />
              <Route path="/next-js-roadmap/phase-1/weather" element={<Weather />} />
              <Route path="/next-js-roadmap/phase-1/tictactoe" element={<TicTacToe />} />
              <Route path="/next-js-roadmap/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
