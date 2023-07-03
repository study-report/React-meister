import { HamburgerIcon, PlusIcon } from "@/Icon";

export default function Header() {
  return (
    <header className="bg-[#343541] sticky top-0 text-gray-200 border-b border-white/20">
      <div className="flex justify-between pt-1">
        <button className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white">
          <HamburgerIcon className="w-6 h-6 ml-2" />
        </button>
        <div className="text-center flex items-center">제목</div>
        <button className="px-3">
          <PlusIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
