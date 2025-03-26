import React from 'react';
import { Calendar, Home, Inbox, Search, Settings, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from 'next/link';

// Menu items.
const items = [
  { title: "Home", url: "/dashboard", icon: Home },
];

const history=[
  {title:'history',url:'/dashboard/history/1',icon:Calendar},
  {title:'history',url:'/dashboard/history/2',icon:Calendar},
  {title:'history',url:'/history/3',icon:Calendar},
  {title:'history',url:'/history',icon:Calendar},
  {title:'history',url:'/history',icon:Calendar},
  {title:'history',url:'/history',icon:Calendar},
  {title:'history',url:'/history',icon:Calendar},
  {title:'history',url:'/history',icon:Calendar},
  {title:'history',url:'/history',icon:Calendar},
]

const Page = () => {
  return (
    <Sidebar className="w-[20%] bg-black text-white min-h-screen shadow-lg">
      <SidebarContent className="w-full p-4">
        <SidebarGroup className="h-full">
          <SidebarGroupLabel className="text-3xl font-semibold mb-6 text-center text-white">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {items.map((item,index) => (
                <SidebarMenuItem
                  key={item.title}
                  className="p-3 rounded-lg hover:bg-gray-700 transition duration-200"
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-3 text-lg">
                      <item.icon className="w-5 h-5 text-gray-300" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* History Section */}
              <div className="mt-6 mb-4">
                <h3 className="text-gray-400 text-sm mb-2 px-3">History</h3>
                <div className="h-[300px] px-2 rounded-lg overflow-y-auto pr-1 history">
                  {history.map((checkhis, index) => (
                    <SidebarMenuItem
                      key={index}
                      className="p-3 rounded-lg border-2 my-3 border-gray-300 hover:bg-gray-700 transition duration-200"
                    >
                      <SidebarMenuButton asChild>
                        <Link href={checkhis.url} className="flex items-center gap-3 text-lg">
                          <checkhis.icon className="w-5 h-5 text-gray-300" />
                          <span>{checkhis.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>
              </div>
              
              {/* Logout Button */}
              <SidebarMenuItem className="mt-10 p-3 rounded-lg hover:bg-red-600 transition duration-200">
                <SidebarMenuButton asChild>
                  <button className="flex items-center gap-3 text-lg">
                    <LogOut className="w-5 h-5 text-gray-300" />
                    <span>Logout</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default Page;