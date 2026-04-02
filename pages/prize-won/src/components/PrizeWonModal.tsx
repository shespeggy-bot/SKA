import type { CSSProperties } from "react";
import { asset } from "../lib/assets";

const img = asset("318c91abd2a2c27de93e84f650c973d3f40b49f1.png");
const img5 = asset("3fc4de2a3c40e626110400646014b381aaef2834.png");
const img4 = asset("fda2c034cb113ef89a2cb5735458069f36af84e5.png");
const img1 = asset("a1a00ca7e4aab954425bee486cdc0afc7e8e00ab.png");
const img2 = asset("86da98be8130ff6f5a1153ba046a615d521b6cd2.png");
const img3 = asset("c619052252f66444ea32021c63ff9eaf5cad9c0a.png");
const img6 = asset("bc26fde5cfa50cf1c61d03a1dd04c25f42632624.png");
const img10 = asset("163aa44f1e2b53534e45876764edb96a9c29c40e.png");
const img7 = asset("7afc9eb640bf27e0c5ebdfa06be7491c00cba1d5.svg");
const img8 = asset("c88244b022003a4dfc913114fa47a3fb9d008b39.svg");
const img9 = asset("20c4121af816b02fa46ce026413e95b6d005c3a9.svg");
const img424 = asset("b6b08b9c98a2b7515f3547e961ee44cb4dbc4972.svg");

type PrizeWonModalProps = {
  /** 奖品名称，设计稿占位为 xxxxx */
  prizeName?: string;
};

/** 抽中奖品 (Figma node 0:1128) */
export function PrizeWonModal({ prizeName = "xxxxx" }: PrizeWonModalProps) {
  return (
    <div className="relative size-full bg-[#757575]" data-name="抽中奖品">
      <div className="absolute left-0 top-0 h-[3258px] w-[750px]" data-name="页面">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img} />
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 h-[1624px] w-[750px] -translate-x-1/2 bg-[rgba(0,0,0,0.8)]"
        data-name="矩形 3132"
      />
      <div className="absolute left-[82px] top-[319px] h-[189px] w-[585px] overflow-clip" data-name="文案">
        <div
          className="absolute left-[calc(50%+259.5px)] top-[47px] h-[22px] w-[16px] -translate-x-1/2"
          data-name="彩色立体星星5"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img5} />
          </div>
        </div>
        <div
          className="absolute left-[calc(50%-263.5px)] top-[52px] h-[29px] w-[20px] -translate-x-1/2"
          data-name="4"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img4} />
          </div>
        </div>
        <div
          className="absolute left-[calc(50%+263px)] top-[12px] h-[32px] w-[23px] -translate-x-1/2"
          data-name="6"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img4} />
          </div>
        </div>
        <div className="absolute left-[133px] top-[25px] h-[81px] w-[320px]" data-name="恭喜你抽中 1">
          <img
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
            src={img1}
          />
        </div>
        <p className="absolute left-[calc(50%+1px)] top-[101px] -translate-x-1/2 whitespace-nowrap text-center text-[56.16px] font-semibold leading-[87.184px] text-[#fede9f]">
          {prizeName}
        </p>
      </div>
      <div className="absolute left-1/2 top-[1121px] h-[97px] w-[304px] -translate-x-1/2 overflow-clip" data-name="中间按钮">
        <div className="absolute left-1/2 top-0 h-[97px] w-[304px] -translate-x-1/2" data-name="中间按钮" />
        <div className="absolute left-0 top-0 h-[91px] w-[304px] overflow-clip" data-name="组 101588">
          <div className="absolute left-0 top-0 h-[91px] w-[304px] overflow-clip" data-name="组 9945">
            <div className="absolute inset-[29.87%_1.16%_2.6%_0.78%] rounded-[36.52px] bg-[rgba(182,155,138,0.6)] blur-[8.489px]" data-name="矩形 3" />
            <div
              className="absolute inset-0 rounded-[64px]"
              data-name="矩形 2494"
              style={{
                backgroundImage:
                  "linear-gradient(157.069deg, rgb(255, 174, 219) 8.2259%, rgb(255, 0, 0) 42.023%, rgb(255, 127, 0) 89.377%)",
              }}
            />
          </div>
          <p className="absolute left-[calc(50%-74px)] top-[calc(50%-25.5px)] whitespace-nowrap text-[36px] font-semibold leading-[50.4px] text-white">
            开心收下
          </p>
        </div>
      </div>
      <div className="absolute contents left-[-59px] top-[450px]">
        <div
          className="absolute left-[calc(50%-0.5px)] top-[450px] h-[877px] w-[867px] -translate-x-1/2"
          data-name="背后圈"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img2} />
          </div>
        </div>
        <div className="absolute left-0 top-[509px] h-[762px] w-[658px]" data-name="底光">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img3} />
          </div>
        </div>
        <div className="absolute left-[calc(50%-250px)] top-[650px] flex h-[56px] w-[40px] -translate-x-1/2 items-center justify-center">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative h-[56px] w-[40px]" data-name="5">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img4} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-[calc(50%+227.5px)] top-[647.49px] flex h-[30.288px] w-[33.633px] -translate-x-1/2 items-center justify-center"
          style={
            { "--transform-inner-width": "1200", "--transform-inner-height": "19" } as CSSProperties
          }
        >
          <div className="-scale-y-100 flex-none rotate-[159.26deg]">
            <div className="relative h-[21.911px] w-[27.667px]" data-name="彩带">
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img6} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[calc(50%+249.5px)] top-[1006px] size-[43px] -translate-x-1/2" data-name="星形 4">
          <div className="absolute inset-[-4.65%]">
            <img alt="" className="block size-full max-w-none" src={img7} />
          </div>
        </div>
        <div className="absolute left-[calc(50%+258.5px)] top-[604px] size-[43px] -translate-x-1/2" data-name="星形 5">
          <div className="absolute inset-[-4.65%]">
            <img alt="" className="block size-full max-w-none" src={img7} />
          </div>
        </div>
        <div className="absolute left-[calc(50%-270px)] top-[769px] size-[46px] -translate-x-1/2" data-name="星形 6">
          <div className="absolute inset-[-4.35%]">
            <img alt="" className="block size-full max-w-none" src={img8} />
          </div>
        </div>
        <div className="absolute left-[calc(50%-223px)] top-[619px] size-[28px] -translate-x-1/2" data-name="星形 3">
          <img alt="" className="absolute block size-full max-w-none" src={img9} />
        </div>
      </div>
      <div className="absolute left-[calc(50%+0.5px)] top-[572px] h-[495px] w-[391px] -translate-x-1/2" data-name="礼品">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 top-0 size-full max-w-none" src={img10} />
        </div>
      </div>
      <div className="absolute left-[343px] top-[1271px] size-[63.8px] overflow-clip" data-name="关闭">
        <div className="absolute left-[22px] top-[22px] h-[20.229px] w-[20.223px] overflow-clip" data-name="组 9524">
          <div
            className="absolute left-0 top-0 flex size-[20.223px] items-center justify-center"
            style={
              { "--transform-inner-width": "1200", "--transform-inner-height": "0" } as CSSProperties
            }
          >
            <div className="flex-none rotate-45">
              <div className="h-[2.2px] w-[26.4px] bg-[#d8d8d8]" data-name="矩形 2481" />
            </div>
          </div>
          <div
            className="absolute left-0 top-[0.01px] flex size-[20.223px] items-center justify-center"
            style={
              { "--transform-inner-width": "1200", "--transform-inner-height": "0" } as CSSProperties
            }
          >
            <div className="-rotate-45 -scale-y-100 flex-none">
              <div className="h-[2.2px] w-[26.4px] bg-[#d8d8d8]" data-name="矩形 2482" />
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 size-[63.8px]" data-name="圆形 424">
          <img alt="" className="absolute block size-full max-w-none" src={img424} />
        </div>
      </div>
    </div>
  );
}
