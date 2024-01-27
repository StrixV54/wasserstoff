import Home from "@/app/page";
import "../sales/sales.css";

export default function Sales() {
  return (
    <>
      <Home />
      <div className="sales-bg-shadow absolute z-[200] top-[184px] left-[442px] h-[530px] w-[1070px] rounded-[20px] px-[30px] py-[20px] gap-[37px] flex flex-col bg-white">
        <div className="flex w-full">
          <div className="font-poppins text-lg font-[600] tracking-[0.1px] flex-1">
            Sales Figures
          </div>
          <ul className="flex">
            <li className="ml-6 w-[116px] gap-1 flex items-center font-[400] leading-6">
              <div className="h-3 w-3 rounded-md bg-[#A46CE9]" /> Sales
            </li>
            <li className="ml-6 w-[116px] gap-1 flex items-center font-[400] leading-6">
              <div className="h-3 w-3 rounded-md bg-[#FAE634]" /> Users
            </li>
            <li className="ml-6 w-[116px] gap-1 flex items-center font-[400] leading-6">
              <div className="h-3 w-3 rounded-md bg-[#FC717D]" /> Product
            </li>
            <li className="ml-6 w-[116px] gap-1 flex items-center font-[400] leading-6">
              <div className="h-3 w-3 rounded-md bg-[#695DFB]" /> Team
            </li>
          </ul>
        </div>
        <div className="relative w-full h-[425px] flex flex-row text-[#383874] justify-between font-poppins">
          <div className="h-full flex text-right flex-col w-fit">
            {["1k", "800", "600", "400", "200", "0"].map((item, idx) => (
              <div
                key={idx}
                className="font-[300] leading-6 tracking-[0.4px] opacity-60 mb-[47px]"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex w-full h-full justify-between">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((item, idx) => (
              <div
                key={idx}
                className="ml-4 gap-3 justify-center flex flex-col items-center"
              >
                <div className="w-[1.2px] h-[385px] bg-[#F1F1F5]"></div>
                <div className="font-[300] leading-6 tracking-[0.4px] opacity-60">
                  {item}
                </div>
              </div>
            ))}
          </div>
          <div className="bubble-purple-44 absolute rounded-full"></div>
          <div className="bubble-purple-16 absolute rounded-full"></div>
          <div className="bubble-yellow-34 absolute rounded-full"></div>
          <div className="bubble-red-146 absolute rounded-full text-lg text-white font-[600]">
            $27632
          </div>
          <div className="bubble-violet-247 absolute rounded-full text-lg text-white font-[600] flex flex-col">
            <span>$27632</span>
            <span className="text-base font-roboto font-[400]">August</span>
          </div>
          <div className="bubble-yellow-94 absolute rounded-full"></div>
          <div className="bubble-purple-25 absolute rounded-full"></div>
          <div className="bubble-violet-25 absolute rounded-full"></div>
          <div className="bubble-purple-16-2 absolute rounded-full"></div>
          <div className="bubble-yellow-129 absolute rounded-full text-lg text-white font-[600]">
            $27632
          </div>
          <div className="bubble-violet-68 absolute rounded-full"></div>
          <div className="bubble-purple-68 absolute rounded-full"></div>
          <div className="bubble-red-77 absolute rounded-full"></div>
          <div className="bubble-purple-16-3 absolute rounded-full"></div>
          <div className="bubble-purple-44-2 absolute rounded-full"></div>
        </div>
      </div>
    </>
  );
}
