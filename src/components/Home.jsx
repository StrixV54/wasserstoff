import GlobalMap from "./globalmap/GlobalMap";
import GlobalMapShadow from "./globalmap/GlobalMapShadow";
import { Progress } from "antd";
import LineGraph from "./LineGraph";
import LocationPopup from "./LocationPopup";
import SalesImg from "../assets/sales.svg";
import RightArrow from "../assets/rightarrow.svg";
import PurchaseImg from "../assets/purchase.svg";
import ChicagoImg from "../assets/chicago.svg";
import ManausImg from "../assets/manaus.svg";
import BerlinImg from "../assets/berlin.svg";
import GizaImg from "../assets/giza.svg";
import ShanghaiImg from "../assets/shanghai.svg";
import QueenslandImg from "../assets/queenland.svg";

export default function Home() {
  return (
    <div className="flex-1 w-full h-full px-[50px] overflow-x-hidden">
      <div className="flex flex-col text-[#383874] relative">
        {/* Side Stats */}
        <div>
          <div className="mt-[23px] text-[20px] font-[400] font-archivo">
            WSTF FRONT-END HACKATHON
          </div>
          <div className="mt-[56px] grid-cols-2 grid w-fit">
            <div className="flex gap-5">
              <h6 className="font-[600] text-xl leading-[32px]">All Users</h6>
              <div className="flex font-roboto text-[10px] uppercase font-[700] tracking-[1.5px] items-center pt-1">
                Details
                <img alt="right-arrow" src={RightArrow} />
              </div>
            </div>
            <h1 className="col-span-2 font-poppins font-[500] text-[72px] leading-[100px] tracking-[-1.75px]">
              2,431,340
            </h1>
          </div>
          <div className="mt-[95px] flex flex-col gap-7">
            <div className="flex items-center gap-6">
              <img
                alt="icon"
                className="h-[70px] w-[70px] rounded-[20px] bg-[#8676FF] p-[20px]"
                src={SalesImg}
              />
              <div className="font-[400] font-roboto text-xl">
                Total earning <br />
                <span className="font-[600] text-xl font-poppins tracking-[0.15px]">
                  540,549
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img
                alt="icon"
                className="h-[70px] w-[70px] rounded-[20px] bg-[#66C8FF] p-[20px]"
                src={SalesImg}
              />
              <div className="font-[400] font-roboto text-xl">
                Sales <br />
                <span className="font-[600] text-xl font-poppins tracking-[0.15px]">
                  1,205,677
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img
                alt="icon"
                className="h-[70px] w-[70px] rounded-[20px] bg-[#FF9066] p-[20px]"
                src={PurchaseImg}
              />
              <div className="font-[400] font-roboto text-xl">
                Purchase <br />
                <span className="font-[600] text-xl font-poppins tracking-[0.15px]">
                  48,430,039
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[108px] gap-[50px] flex">
            <div className="flex gap-4 items-center w-fit">
              <div className=" text-2xl font-[300] font-poppins tracking-[0.2px]">
                <Progress
                  type="circle"
                  percent={27}
                  size={95}
                  strokeColor={"#023AFF"}
                  strokeWidth={5}
                />
              </div>
              <div className="font-roboto text-xl font-[400] tracking-[0.5px]">
                92,980
                <br />
                <span className="font-poppins font-[300] ">Active users</span>
              </div>
            </div>
            <div className="flex gap-4 items-center w-fit">
              <div className=" text-2xl font-[300] font-poppins tracking-[0.2px]">
                <Progress
                  type="circle"
                  percent={67}
                  size={95}
                  strokeColor={"#00B929"}
                  strokeWidth={5}
                />
              </div>
              <div className="font-roboto text-xl font-[400] tracking-[0.5px]">
                22,652
                <br />
                <span className="font-poppins font-[300] ">New users</span>
              </div>
            </div>
          </div>
        </div>
        {/* Background Map */}
        <div className="absolute left-[405px] top-[49px]">
          <div className="relative h-[750px] w-full">
            <GlobalMap />
            <GlobalMapShadow />
            <LocationPopup
              topInPx={"182px"}
              leftInPx={"143px"}
              imgSrc={ChicagoImg}
              label={"Chicago"}
              value={"98,320,300"}
              bgColor={"#66C8FF"}
            />
            <LocationPopup
              topInPx={"428px"}
              leftInPx={"267px"}
              imgSrc={ManausImg}
              label={"Manaus"}
              value={"12,320,300"}
              bgColor={"#F8A243"}
            />
            <LocationPopup
              topInPx={"99px"}
              leftInPx={"590px"}
              imgSrc={BerlinImg}
              label={"Berlin"}
              value={"76,541,106"}
              bgColor={"#7BDDA2"}
            />
            <LocationPopup
              topInPx={"315px"}
              leftInPx={"683px"}
              imgSrc={GizaImg}
              label={"Giza"}
              value={"10,547,980"}
              bgColor={"#FF7E7E"}
            />
            <LocationPopup
              topInPx={"247px"}
              leftInPx={"1064px"}
              imgSrc={ShanghaiImg}
              label={"Shanghai"}
              value={"12,320,300"}
              bgColor={"#E8A5FF"}
            />
            <LocationPopup
              topInPx={"547px"}
              leftInPx={"1175px"}
              imgSrc={QueenslandImg}
              label={"Queensland"}
              value={"6,097,321"}
              bgColor={"#669AFF"}
            />
          </div>
        </div>
        {/* Bottom Bar Stats */}
        <div className="sales-figure-shadow mt-[56px] mb-[26px] flex h-[86px] gap-[17px] bg-white shadow-md items-center rounded-2xl">
          <div className="px-[32px] text-sm font-[400] leading-6 font-roboto ">
            Sales Figures
            <br />
            <span className="font-poppins text-2xl font-[600]">$10,430</span>
          </div>
          <div className="flex-1 px-[16px] mt-1 overflow-x-hidden">
            <LineGraph />
            <div className="flex h-[6px] mx-[11px] bg-[#8676FF]">
              <div className="bg-[#FFA63F] h-full flex-1 max-w-[250px]"></div>
              <div className="bg-[#FF708B] h-full flex-1 max-w-[470px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
