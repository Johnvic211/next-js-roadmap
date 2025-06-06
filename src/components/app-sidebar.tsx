import * as React from "react"
import {
  Frame,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { NavItem} from "@/components/nav-item"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Johnvic Dela Cruz",
    email: "delacruzjohnvic21@gmail.com",
    avatar: ''
  },
  item: [
    {
      name: "Dashboard",
      url: "/next-js-roadmap/dashboard",
      icon: Frame,
    },
  ],
  navMain: [
    {
      title: "Phase 1 Applications",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Todo",
          url: "/next-js-roadmap/phase-1/todo",
        },
        {
          title: "Weather",
          url: "/next-js-roadmap/phase-1/weather",
        },
        {
          title: "Tic Tac Toe",
          url: "/next-js-roadmap/phase-1/tictactoe",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Next.js Roadmap</span>
                  <span className="">Since 2025-04</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavItem items={data.item} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
