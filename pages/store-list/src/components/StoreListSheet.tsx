import { asset } from "../lib/assets";

const img = asset("318c91abd2a2c27de93e84f650c973d3f40b49f1.png");
const imgGroup91 = asset("27c4b381f461d988e00367dd56bb60ef63bc07b5.png");
const imgCombinedShape = asset("e6cea04507ccdc03a53663bf5dfd495f4696c941.svg");

/** 弹层 · 门店列表 (Figma node 7:146) */
export function StoreListSheet() {
  return (
    <div className="relative size-full bg-[#757575]" data-name="弹层">
      <div className="absolute left-0 top-0 h-[3258px] w-[750px]" data-name="页面">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img} />
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 h-[1624px] w-[750px] -translate-x-1/2 bg-[rgba(0,0,0,0.8)]"
        data-name="矩形 3132"
      />
      <div className="absolute left-0 top-[584px] h-[1157px] w-[750px] rounded-[24px] bg-[#f6f7f8]" />
      <div className="absolute left-[16px] top-[695px] h-[929px] w-[718px]" data-name="Group 9 1">
        <img
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          src={imgGroup91}
        />
      </div>
      <div
        className="absolute left-[33px] top-[645px] h-[18px] w-[75px]"
        data-name="矩形 3151"
        style={{
          backgroundImage:
            "linear-gradient(27.2494deg, rgb(116, 250, 22) 0%, rgb(235, 251, 24) 89.083%)",
        }}
      />
      <p className="absolute left-[37px] top-[615px] whitespace-nowrap font-['PingFang_SC',sans-serif] text-[34px] font-black leading-[47.6px] text-black">
        门店
      </p>
      <p className="absolute left-[108px] top-[615px] whitespace-nowrap font-['PingFang_SC',sans-serif] text-[34px] font-black leading-[47.6px] text-[#ff602a]">
        列表
      </p>
      <div className="absolute inset-[32.88%_4.63%_65.56%_92%]" data-name="Combined Shape">
        <img alt="" className="absolute block size-full max-w-none" src={imgCombinedShape} />
      </div>
    </div>
  );
}
