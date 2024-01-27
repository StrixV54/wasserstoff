export default function LocationPopup({
  topInPx,
  leftInPx,
  imgSrc,
  label,
  value,
  bgColor,
}) {
  return (
    <div
      className="absolute z-[100]"
      style={{
        top: topInPx,
        left: leftInPx,
      }}
    >
      <div className="popup-mark-shadow relative h-[60px] w-[186px] flex rounded-2xl px-[10px] py-[6px] bg-white items-center gap-3">
        <img
          alt="icon"
          className="h-[40px] w-[40px] rounded-xl p-[8px]"
          src={imgSrc}
          style={{
            background: bgColor,
          }}
        />
        <div className="font-poppins font-[300] leading-5">
          {label}
          <br />
          <span className="font-[600] text-xl">{value}</span>
        </div>
        <img
          alt="down-arrow"
          src="downarrow.svg"
          className="w-[25px] h-[18px] absolute bottom-[-15px] left-[46%]"
        />
      </div>
    </div>
  );
}
