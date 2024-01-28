import "./earning.css";
import EarningCircleImg from "../../assets/earningcircle.svg";
import DiamondImg from "../../assets/diamond.svg";
import UpArrowImg from "../../assets/uparrow.svg";
import UpArrowGlowImg from "../../assets/uparrowglow.svg";
import PresentationImg from "../../assets/presentation.svg";
import DevelopmentImg from "../../assets/development.svg";
import ResearchImg from "../../assets/research.svg";

export default function Earning() {
  return (
    <div className="flex-1 w-full h-full overflow-x-hidden bg-[#FAFAFA] text-[#383874]">
      <div className="flex flex-row font-poppins">
        {/* Side Stats */}
        <div className="mx-[50px]">
          {/* Design Faster heading */}
          <h4 className="font-[400] text-[34px] leading-10 mt-[31px]">
            Design faster
          </h4>
          {/* Sidebar - Earning Graph Stats */}
          <div className="earning-circle-bg-shadow w-[290px] h-[402px] flex flex-col bg-white rounded-[10px] gap-[30px] mt-[31px] py-[20px] px-[30px] justify-center text-[#383874] items-center">
            <div className="flex flex-col gap-4 items-center">
              <div className="relative h-fit w-fit flex items-center justify-center">
                <img
                  alt="chart"
                  src={EarningCircleImg}
                  className="h-[146px] w-[146px]"
                />
                <img
                  alt="chart"
                  src={DiamondImg}
                  className="absolute h-[26px] w-[26px]"
                />
              </div>
              <div className="font-roboto text-center">
                <div className="text-xl font-[400] leading-8">
                  Total Earning
                </div>
                <h5 className="text-[22px] flex font-[600] leading-9 font-poppins flex-row gap-2 items-center justify-center">
                  $12,875
                  <div className="font-roboto text-[#00B929] text-sm font-[400] flex mt-1">
                    <img alt="chart" src={UpArrowImg} className="w-[14px]" />
                    <span className="mt-[1px]">2%</span>
                  </div>
                </h5>
                <div className="text-xs font-400 opacity-60 leading-4">
                  Compared to $21,504 last year
                </div>
              </div>
            </div>
            <div className="flex gap-[11px] flex-col font-roboto">
              <div className="flex gap-[16px] items-center justify-between w-full">
                <div className="w-[88px] text-sm font-[400]">Presentation</div>
                <div className="w-[40px] text-sm font-[400] opacity-60">
                  862
                </div>
                <img alt="chart" src={PresentationImg} className="w-[68px]" />
              </div>
              <div className="flex gap-[16px] items-center justify-between w-full">
                <div className="w-[88px] text-sm font-[400]">Development</div>
                <div className="w-[40px] text-sm font-[400] opacity-60">
                  753
                </div>
                <img alt="chart" src={DevelopmentImg} className="w-[68px]" />
              </div>
              <div className="flex gap-[16px] items-center justify-between w-full">
                <div className="w-[88px] text-sm font-[400]">Research</div>
                <div className="w-[40px] text-sm font-[400] opacity-60">
                  553
                </div>
                <img alt="chart" src={ResearchImg} className="w-[68px]" />
              </div>
            </div>
          </div>
          {/* Sidebar - Total Earning Number Stats */}
          <div className="purple-box-shadow w-[290px] h-[252px] bg-[#8676FF] mt-[28px] flex flex-col justify-between text-white px-[30px] py-[20px] rounded-[10px]">
            <div className="flex flex-col gap-1">
              <div className="font-[300] font-poppins leading-6">
                Total earning
              </div>
              <h4 className="text-[34px] flex font-[400] leading-9 font-poppins flex-row gap-2 items-center">
                $12,875
                <div className="font-roboto text-[#38F261] text-sm font-[400] flex mt-3">
                  <img alt="chart" src={UpArrowGlowImg} className="w-[14px]" />
                  <span className="mt-[1px]">10%</span>
                </div>
              </h4>
              <div className="text-xs font-400 opacity-60 leading-4">
                Compared to $21,490 last year
              </div>
            </div>
            <hr className="border border-[#6B5ED2]" />
            <div className="flex flex-col gap-1">
              <div className="font-[300] font-poppins leading-6">Sales</div>
              <h4 className="text-[34px] flex font-[400] leading-9 font-poppins flex-row gap-2 items-center">
                $43,123
                <div className="font-roboto text-[#38F261] text-sm font-[400] flex mt-3">
                  <img alt="chart" src={UpArrowGlowImg} className="w-[14px]" />
                  <span className="mt-[1px]">12%</span>
                </div>
              </h4>
              <div className="text-xs font-400 opacity-60 leading-4">
                Compared to $21,490 last year
              </div>
            </div>
          </div>
        </div>
        {/* Bubble Circle Graph Main */}
        <div className="flex-1 relative h-[982px] rounded-s-[73px] bg-[#EEF1FA]">
          <div className="absolute top-[35px] left-[681px] tracking-[5px] leading-4 font-opensans text-[10px] font-[700] text-black uppercase">
            Timeline
          </div>
          <div className="absolute z-10 top-[66px] left-[547px] rounded-2xl bg-white w-fit flex items-center gap-5">
            {["1W", "2M", "3M", "1Y", "ALL"].map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl flex items-center justify-center w-[53px] h-[32px] font-[700] text-[13px] font-mulish ${
                  idx === 2 ? "bg-[#3247E5] text-white" : "bg-white text-black"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="absolute top-[68px] left-[330px] h-[778px] w-[778px] rounded-full border-[20px] border-solid border-white/30 ">
            <div className="relative h-full w-full">
              <div className="absolute top-[45px] left-[45px] h-[648px] w-[648px] rounded-full bg-white circle-white-shadow-648"></div>
              <div className="center-ball-gradient absolute h-[250px] w-[250px] top-[250px] left-[250px] rounded-full text-white flex flex-col items-center justify-center">
                <div className="font-[300] font-poppins">Investments</div>
                <h1 className="font-[600] font-poppins text-xl">$76,644</h1>
                <div className="font-[400] font-roboto text-sm text-[#DDF]">
                  3 month
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex bottom-[51px] left-[379px] gap-[143px] items-center justify-center w-fit">
            <div className="flex flex-col items-center justify-center">
              <div className="font-roboto font-[700] text-[10px] leading-4 tracking-[1.5px] uppercase">
                Trends goods
              </div>
              <div className="font-poppins text-[60px] font-[300] tracking-[-1.5px] leading-[80px]">
                204
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-roboto font-[700] text-[10px] leading-4 tracking-[1.5px] uppercase">
                Shopping views
              </div>
              <div className="font-poppins text-[60px] font-[300] tracking-[-1.5px] leading-[80px]">
                65,540
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-roboto font-[700] text-[10px] leading-4 tracking-[1.5px] uppercase">
                Store Dynamics
              </div>
              <div className="font-poppins text-[60px] font-[300] tracking-[-1.5px] leading-[80px]">
                324
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
