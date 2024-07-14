

import { Sidebar } from "flowbite-react";
import { BiHome, BiHomeCircle } from "react-icons/bi";
import { CgTemplate } from "react-icons/cg";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { HiHomeModern } from "react-icons/hi2";
import { TbTemplate, TbTrash } from "react-icons/tb";

export function SidebarComponent() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item> */}
         
          <Sidebar.Item href="#" icon={ HiHome }>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={TbTemplate}>
            Tamplate
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={TbTrash}>
            Trash
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
