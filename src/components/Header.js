export default function Header() {
  return (
    <header className="bg-white h-[60px] px-[50px] flex items-center justify-between w-full gap-4">
      <div className="flex h-full items-center">
        <img alt="logo" src="logo.svg" />
        <div className="font-archivo text-xl font-[400] uppercase m-2">
          wasserstoff
        </div>
      </div>
      <div className="h-[32px] min-w-[520px] flex rounded-lg bg-[#EEF0FA]  items-center">
        <input
          type="text"
          className="outline-none rounded-md bg-transparent w-full"
        />
        <img alt="search" src="search.svg" className="h-6 w-6 mx-[6px]" />
      </div>
      <div className="flex gap-[84px] h-full">
        <div className="w-[106px] flex text-[#8484A0] font-[300] justify-center items-center ">
          Statistics
        </div>
        <div className="w-[106px] border-0 border-b-[3px] font-[300] border-[#5756B3] flex justify-center items-center">
          Overview
        </div>
        <div className="w-[106px] flex text-[#8484A0] font-[300] justify-center items-center">
          Dashboard
        </div>
        <div className="w-[106px] flex text-[#8484A0] font-[300] justify-center items-center">
          Analytics
        </div>
      </div>
      <div className="flex gap-6">
        <img alt="logo" src="account.svg" />
        <img alt="logo" src="options.svg" />
      </div>
    </header>
  );
}
