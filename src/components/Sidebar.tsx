import {
  File,
  Folder,
  HelpCircle,
  LayoutDashboard,
  Lightbulb,
  LogOutIcon,
  Settings,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen py-6 px-4 gap-2 bg-slate-950 w-60 border-r border-slate-800 z-40 fixed left-0 top-0 transition-all duration-200 ease-in-out">
        {/* Header */}
        <div className="flex items-center gap-3 px-3 pb-6 mb-2 border-b border-slate-800/50">
          <div
            className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold font-label-caps text-label-caps"
            data-alt="DevTracker Logo"
          >
            DT
          </div>
          <h1 className="text-slate-50 font-black tracking-tight leading-tight">
            DevTracker
          </h1>
        </div>
        {/* Main Navigation */}
        <div className="flex flex-col gap-1 flex-1 mt-4">
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-blue-500 bg-blue-500/10 border-r-2 border-blue-500 font-sans text-sm font-medium transition-colors"
            href="#"
          >
            <LayoutDashboard />
            <span>Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-slate-400 hover:text-slate-200 hover:bg-slate-900 font-sans text-sm font-medium transition-colors"
            href="#"
          >
            <Folder />
            <span>Projects</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-slate-400 hover:text-slate-200 hover:bg-slate-900 font-sans text-sm font-medium transition-colors"
            href="#"
          >
            <File />
            <span>Resume Insights</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-slate-400 hover:text-slate-200 hover:bg-slate-900 font-sans text-sm font-medium transition-colors"
            href="#"
          >
            <Settings />
            <span>Settings</span>
          </a>
        </div>
        {/* Footer Navigation */}
        <div className="flex flex-col gap-1 mt-auto pt-4 border-t border-slate-800/50">
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-slate-400 hover:text-slate-200 hover:bg-slate-900 font-sans text-sm font-medium transition-colors"
            href="#"
          >
            <HelpCircle />
            <span>Support</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-slate-400 hover:text-slate-200 hover:bg-slate-900 font-sans text-sm font-medium transition-colors"
            href="#"
          >
            <LogOutIcon />
            <span>Sign Out</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
