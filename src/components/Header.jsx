import LogoImg from "../assets/logo.svg";
import SearchImg from "../assets/search.svg";
import AccountImg from "../assets/account.svg";
import OptionsImg from "../assets/options.svg";

export default function Header() {
  return (
    <header className="bg-white h-[60px] px-[50px] flex items-center justify-between w-full gap-4">
      <div className="flex h-full items-center">
        <img alt="logo" src={LogoImg} />
        <div className="font-archivo text-xl font-[400] uppercase m-2">
          wasserstoff
        </div>
      </div>
      <div className="h-[32px] max-w-[520px] min-w-[200px] flex flex-1 rounded-lg bg-[#EEF0FA]  items-center">
        <input
          type="text"
          className="outline-none rounded-md bg-transparent w-full mx-2"
        />
        <img
          alt="search"
          src={SearchImg}
          className="h-6 w-6 mx-[6px] cursor-pointer"
        />
      </div>
      <div className="flex gap-[84px] h-full">
        <div className="w-[106px] flex text-[#8484A0] font-[300] justify-center items-center cursor-pointer ">
          Statistics
        </div>
        <div className="w-[106px] border-0 border-b-[3px] font-[300] border-[#5756B3] flex justify-center items-center cursor-pointer">
          Overview
        </div>
        <div className="w-[106px] flex text-[#8484A0] font-[300] justify-center items-center cursor-pointer">
          Dashboard
        </div>
        <div className="w-[106px] flex text-[#8484A0] font-[300] justify-center items-center cursor-pointer">
          Analytics
        </div>
      </div>
      <div className="flex gap-6">
        <img alt="logo" src={AccountImg} className="cursor-pointer" />
        <img alt="logo" src={OptionsImg} className="cursor-pointer" />
      </div>
    </header>
  );
}
