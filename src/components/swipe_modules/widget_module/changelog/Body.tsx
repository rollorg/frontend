import React, { FC, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import { Delete } from "./Delete";

const ChatBot: FC<{ closeNav: () => void }> = ({ closeNav }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const toggleDelete = () => {
    if (!isDelete) {
      setDelete(true);
    }
  };
  const toggleSucess = () => {
    setSuccess(true);
    window.location.reload();
  };
  const closeChangelogAndNav = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeNav();
    }, 700);
  };
  return (
    <>
      <div
        className={`nav-container ${
          isClosing ? "closing" : ""
        } flex flex-col bg-[#FFF] input lg:w-[650px] xl:w-[735px] ml-[15px] md:ml-[40px] lg:ml-0`}
      >
        <nav
          style={{ fontFamily: "Figtree" }}
          className="lg:h-[184px] h-[185px] bg-[#0D3F9C] px-[16px] lg:px-[24px] flex flex-col gap-[10px] py-[15px]"
        >
          <div className="flex justify-between items-center">
            <p className="text-[#FFF] text-[14.22px] lg:text-[16px] not-italic font-[400] leading-[140%] tracking-[0.142px] lg:tracking-[0.16px]">
              EDIT THIS CHANGELOG
            </p>
            <svg
              onClick={closeChangelogAndNav}
              className="cursor-pointer lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9999 25.4158L13.5076 35.9081C13.3204 36.0953 13.0909 36.1953 12.8191 36.2081C12.5473 36.2209 12.305 36.1209 12.0922 35.9081C11.8794 35.6953 11.7729 35.4594 11.7729 35.2004C11.7729 34.9414 11.8794 34.7055 12.0922 34.4927L22.5845 24.0004L12.0922 13.5081C11.905 13.3209 11.805 13.0914 11.7922 12.8196C11.7794 12.5478 11.8794 12.3055 12.0922 12.0927C12.305 11.8799 12.5409 11.7734 12.7999 11.7734C13.0589 11.7734 13.2948 11.8799 13.5076 12.0927L23.9999 22.585L34.4922 12.0927C34.6794 11.9055 34.9089 11.8055 35.1807 11.7927C35.4525 11.7799 35.6948 11.8799 35.9076 12.0927C36.1204 12.3055 36.2269 12.5414 36.2269 12.8004C36.2269 13.0594 36.1204 13.2953 35.9076 13.5081L25.4153 24.0004L35.9076 34.4927C36.0948 34.6799 36.1948 34.9093 36.2076 35.1811C36.2204 35.4529 36.1204 35.6953 35.9076 35.9081C35.6948 36.1209 35.4589 36.2273 35.1999 36.2273C34.9409 36.2273 34.705 36.1209 34.4922 35.9081L23.9999 25.4158Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-[#fff] text-[20.25px] lg:text-[25.63px] not-italic font-[700] leading-[140%] tracking-[0.203px] lg:tracking-[0.256px]">
            Lorem ipsum dolor sit
          </p>
          <hr />
          <div className="text-[#CCD0D8] text-[14.22px] lg:text-[16px] not-italic font-[400] leading-[normal] tracking-[0.16px] flex gap-[10px] lg:gap-[20px] lg:flex-row flex-col">
            <div className="flex gap-[10px] lg:gap-[20px]">
              <div className="flex justify-between items-center border-[0.5px] border-[#CCD0D8] px-[8px] py-[2px] rounded-[24px]">
                <p>Categories</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 14.379C11.8922 14.379 11.7928 14.3614 11.7018 14.3262C11.6108 14.2909 11.5217 14.2297 11.4345 14.1425L7.04606 9.75404C6.95247 9.66046 6.90247 9.54572 6.89606 9.40982C6.88964 9.27392 6.93964 9.15276 7.04606 9.04634C7.15247 8.93993 7.27042 8.88672 7.3999 8.88672C7.52939 8.88672 7.64734 8.93993 7.75375 9.04634L11.9999 13.2925L16.2461 9.04634C16.3396 8.95276 16.4544 8.90276 16.5903 8.89634C16.7262 8.88993 16.8473 8.93993 16.9538 9.04634C17.0602 9.15276 17.1134 9.27071 17.1134 9.40019C17.1134 9.52968 17.0602 9.64763 16.9538 9.75404L12.5653 14.1425C12.4781 14.2297 12.389 14.2909 12.298 14.3262C12.207 14.3614 12.1076 14.379 11.9999 14.379Z"
                    fill="#CCD0D8"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center border-[0.5px] border-[#CCD0D8] px-[8px] py-[2px] rounded-[24px]">
                <p>Display name, Job title</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9999 14.379C11.8922 14.379 11.7928 14.3614 11.7018 14.3262C11.6108 14.2909 11.5217 14.2297 11.4345 14.1425L7.04606 9.75404C6.95247 9.66046 6.90247 9.54572 6.89606 9.40982C6.88964 9.27392 6.93964 9.15276 7.04606 9.04634C7.15247 8.93993 7.27042 8.88672 7.3999 8.88672C7.52939 8.88672 7.64734 8.93993 7.75375 9.04634L11.9999 13.2925L16.2461 9.04634C16.3396 8.95276 16.4544 8.90276 16.5903 8.89634C16.7262 8.88993 16.8473 8.93993 16.9538 9.04634C17.0602 9.15276 17.1134 9.27071 17.1134 9.40019C17.1134 9.52968 17.0602 9.64763 16.9538 9.75404L12.5653 14.1425C12.4781 14.2297 12.389 14.2909 12.298 14.3262C12.207 14.3614 12.1076 14.379 11.9999 14.379Z"
                    fill="#CCD0D8"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-[5px] items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.61538 21.0003C5.15513 21.0003 4.77083 20.8461 4.4625 20.5378C4.15417 20.2295 4 19.8452 4 19.3849V6.61568C4 6.15543 4.15417 5.77114 4.4625 5.46281C4.77083 5.15447 5.15513 5.00031 5.61538 5.00031H7.3846V3.30801C7.3846 3.15287 7.43557 3.02434 7.5375 2.92241C7.63942 2.82049 7.76794 2.76953 7.92308 2.76953C8.07821 2.76953 8.20673 2.82049 8.30865 2.92241C8.41057 3.02434 8.46152 3.15287 8.46152 3.30801V5.00031H15.6154V3.26953C15.6154 3.12723 15.6631 3.00832 15.7587 2.91281C15.8542 2.81729 15.9731 2.76953 16.1154 2.76953C16.2577 2.76953 16.3766 2.81729 16.4721 2.91281C16.5676 3.00832 16.6154 3.12723 16.6154 3.26953V5.00031H18.3846C18.8449 5.00031 19.2292 5.15447 19.5375 5.46281C19.8458 5.77114 20 6.15543 20 6.61568V19.3849C20 19.8452 19.8458 20.2295 19.5375 20.5378C19.2292 20.8461 18.8449 21.0003 18.3846 21.0003H5.61538ZM5.61538 20.0003H18.3846C18.5385 20.0003 18.6795 19.9362 18.8077 19.808C18.9359 19.6798 19 19.5388 19 19.3849V10.6157H5V19.3849C5 19.5388 5.0641 19.6798 5.1923 19.808C5.32052 19.9362 5.46154 20.0003 5.61538 20.0003ZM5 9.61568H19V6.61568C19 6.46185 18.9359 6.32082 18.8077 6.19261C18.6795 6.06441 18.5385 6.00031 18.3846 6.00031H5.61538C5.46154 6.00031 5.32052 6.06441 5.1923 6.19261C5.0641 6.32082 5 6.46185 5 6.61568V9.61568ZM12 14.1542C11.7936 14.1542 11.6138 14.0775 11.4606 13.9243C11.3074 13.7711 11.2308 13.5913 11.2308 13.3849C11.2308 13.1785 11.3074 12.9987 11.4606 12.8455C11.6138 12.6923 11.7936 12.6157 12 12.6157C12.2064 12.6157 12.3862 12.6923 12.5394 12.8455C12.6926 12.9987 12.7692 13.1785 12.7692 13.3849C12.7692 13.5913 12.6926 13.7711 12.5394 13.9243C12.3862 14.0775 12.2064 14.1542 12 14.1542ZM8 14.1542C7.79358 14.1542 7.61378 14.0775 7.46058 13.9243C7.30738 13.7711 7.23077 13.5913 7.23077 13.3849C7.23077 13.1785 7.30738 12.9987 7.46058 12.8455C7.61378 12.6923 7.79358 12.6157 8 12.6157C8.20642 12.6157 8.38622 12.6923 8.53942 12.8455C8.69263 12.9987 8.76923 13.1785 8.76923 13.3849C8.76923 13.5913 8.69263 13.7711 8.53942 13.9243C8.38622 14.0775 8.20642 14.1542 8 14.1542ZM16 14.1542C15.7936 14.1542 15.6138 14.0775 15.4606 13.9243C15.3074 13.7711 15.2308 13.5913 15.2308 13.3849C15.2308 13.1785 15.3074 12.9987 15.4606 12.8455C15.6138 12.6923 15.7936 12.6157 16 12.6157C16.2064 12.6157 16.3862 12.6923 16.5394 12.8455C16.6926 12.9987 16.7692 13.1785 16.7692 13.3849C16.7692 13.5913 16.6926 13.7711 16.5394 13.9243C16.3862 14.0775 16.2064 14.1542 16 14.1542ZM12 18.0003C11.7936 18.0003 11.6138 17.9237 11.4606 17.7705C11.3074 17.6173 11.2308 17.4375 11.2308 17.2311C11.2308 17.0247 11.3074 16.8449 11.4606 16.6917C11.6138 16.5384 11.7936 16.4618 12 16.4618C12.2064 16.4618 12.3862 16.5384 12.5394 16.6917C12.6926 16.8449 12.7692 17.0247 12.7692 17.2311C12.7692 17.4375 12.6926 17.6173 12.5394 17.7705C12.3862 17.9237 12.2064 18.0003 12 18.0003ZM8 18.0003C7.79358 18.0003 7.61378 17.9237 7.46058 17.7705C7.30738 17.6173 7.23077 17.4375 7.23077 17.2311C7.23077 17.0247 7.30738 16.8449 7.46058 16.6917C7.61378 16.5384 7.79358 16.4618 8 16.4618C8.20642 16.4618 8.38622 16.5384 8.53942 16.6917C8.69263 16.8449 8.76923 17.0247 8.76923 17.2311C8.76923 17.4375 8.69263 17.6173 8.53942 17.7705C8.38622 17.9237 8.20642 18.0003 8 18.0003ZM16 18.0003C15.7936 18.0003 15.6138 17.9237 15.4606 17.7705C15.3074 17.6173 15.2308 17.4375 15.2308 17.2311C15.2308 17.0247 15.3074 16.8449 15.4606 16.6917C15.6138 16.5384 15.7936 16.4618 16 16.4618C16.2064 16.4618 16.3862 16.5384 16.5394 16.6917C16.6926 16.8449 16.7692 17.0247 16.7692 17.2311C16.7692 17.4375 16.6926 17.6173 16.5394 17.7705C16.3862 17.9237 16.2064 18.0003 16 18.0003Z"
                  fill="#CCD0D8"
                />
              </svg>
              <p>Aug 19</p>
            </div>
          </div>
        </nav>

        <div
          style={{ fontFamily: "Fira Code" }}
          className="px-[15px] text-[#1D2023] text-[12px] lg:text-[16px] not-italic font-[400] leading-[140%] py-[20px] xl:py-[40px] lg:py-[30px] flex flex-col gap-[20px] xl:gap-[30px]"
        >
          <p>
            **[This is your first changelog. Below you can edit or make it
            public]**
          </p>
          <div className="flex flex-col xl:gap-[30px] lg:gap-[20px] gap-[20px]">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Volutpat in non est arcu
              arcu nec euismod. Etiam aliquam enim quisque nunc turpis vulputate
              integer malesuada. In vulputate suscipit sed at sed. Aliquam sit
              tempor lectus faucibus lectus enim pellentesque.{" "}
            </p>
            <p>
              Volutpat nunc dolor cursus sed nisl. Euismod massa est scelerisque
              fermentum malesuada bibendum ultrices vulputate tristique.
              Consectetur iaculis donec nunc amet in et blandit sed vestibulum.
              Senectus eget duis euismod neque. Tellus iaculis sit lectus id sed
              suscipit ac viverra.{" "}
            </p>
            <p className="hidden md:block">
              Et velit orci phasellus ac a amet est ut at. Nulla mauris vel
              fusce massa aliquam enim neque. Arcu fames aliquam mattis
              tristique turpis in vel et arcu. Sit condimentum gravida ultrices
              dignissim enim vitae nunc. Sit pellentesque sed nulla vitae eu non
              lorem.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-[10px] lg:gap-[20px] px-[15px] pt-[10px] xl:pt-[16px]">
          <div
            style={{ fontFamily: "Libre Baskerville" }}
            className="flex justify-between"
          >
            <div className="flex lg:gap-[32px] gap-[16px] items-center text-[#595A5E] text-[14px] lg:text-[24px] not-italic font-[700] leading-[110%]">
              <p>H</p>
              <p>B</p>
              <p className="italic">I</p>
              <svg
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.43083 19.9997C4.9866 19.9997 4.6063 19.8415 4.28995 19.5252C3.9736 19.2088 3.81543 18.8286 3.81543 18.3843V5.61507C3.81543 5.17083 3.9736 4.79055 4.28995 4.47422C4.6063 4.15787 4.9866 3.99969 5.43083 3.99969H13.3154C13.4571 3.99969 13.5758 4.04768 13.6717 4.14364C13.7675 4.23959 13.8154 4.3585 13.8154 4.50037C13.8154 4.64222 13.7675 4.7609 13.6717 4.85642C13.5758 4.95193 13.4571 4.99969 13.3154 4.99969H5.43083C5.25135 4.99969 5.10391 5.05738 4.98853 5.17277C4.87313 5.28815 4.81543 5.43558 4.81543 5.61507V18.3843C4.81543 18.5638 4.87313 18.7112 4.98853 18.8266C5.10391 18.942 5.25135 18.9997 5.43083 18.9997H18.2001C18.3795 18.9997 18.527 18.942 18.6424 18.8266C18.7577 18.7112 18.8154 18.5638 18.8154 18.3843V10.4997C18.8154 10.358 18.8634 10.2393 18.9594 10.1434C19.0553 10.0476 19.1743 9.99969 19.3161 9.99969C19.458 9.99969 19.5767 10.0476 19.6722 10.1434C19.7677 10.2393 19.8155 10.358 19.8155 10.4997V18.3843C19.8155 18.8286 19.6573 19.2088 19.3409 19.5252C19.0246 19.8415 18.6443 19.9997 18.2001 19.9997H5.43083ZM17.5847 6.23047H16.0847C15.943 6.23047 15.8243 6.18249 15.7284 6.08652C15.6326 5.99055 15.5847 5.87164 15.5847 5.72979C15.5847 5.58793 15.6326 5.46924 15.7284 5.37374C15.8243 5.27823 15.943 5.23047 16.0847 5.23047H17.5847V3.73047C17.5847 3.5888 17.6327 3.47005 17.7286 3.37422C17.8246 3.27839 17.9435 3.23047 18.0854 3.23047C18.2272 3.23047 18.3459 3.27839 18.4414 3.37422C18.5369 3.47005 18.5847 3.5888 18.5847 3.73047V5.23047H20.0847C20.2263 5.23047 20.3451 5.27845 20.4409 5.37442C20.5368 5.47037 20.5847 5.58928 20.5847 5.73114C20.5847 5.87299 20.5368 5.99168 20.4409 6.08719C20.3451 6.18271 20.2263 6.23047 20.0847 6.23047H18.5847V7.73047C18.5847 7.87214 18.5367 7.99089 18.4407 8.08672C18.3448 8.18255 18.2259 8.23047 18.084 8.23047C17.9421 8.23047 17.8234 8.18255 17.7279 8.08672C17.6324 7.99089 17.5847 7.87214 17.5847 7.73047V6.23047ZM11.027 16.0381L9.60005 14.3131C9.51287 14.2183 9.40839 14.1708 9.2866 14.1708C9.1648 14.1708 9.06031 14.2247 8.97313 14.3324L7.81928 15.8535C7.71158 15.9946 7.69651 16.1375 7.77408 16.2824C7.85165 16.4273 7.968 16.4997 8.12313 16.4997H15.6616C15.8167 16.4997 15.9331 16.4273 16.0106 16.2824C16.0882 16.1375 16.0795 15.9946 15.9847 15.8535L13.9655 13.1401C13.8783 13.0324 13.7706 12.9785 13.6424 12.9785C13.5142 12.9785 13.406 13.034 13.3179 13.145L11.027 16.0381Z"
                  fill="#595A5E"
                />
              </svg>
            </div>
            <div className="flex lg:gap-[32px] gap-[16px] items-center">
              <svg
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.4423 21C4.31452 21 4.20886 20.9583 4.12533 20.875C4.04178 20.7916 4 20.6861 4 20.5586C4 20.4311 4.04178 20.3253 4.12533 20.2414C4.20886 20.1574 4.31452 20.1154 4.4423 20.1154H6.5V18.75H5.4423C5.31452 18.75 5.20886 18.7083 5.12533 18.6249C5.04177 18.5416 5 18.4361 5 18.3086C5 18.1811 5.04177 18.0753 5.12533 17.9914C5.20886 17.9074 5.31452 17.8654 5.4423 17.8654H6.5V16.5H4.4423C4.31452 16.5 4.20886 16.4583 4.12533 16.3749C4.04178 16.2916 4 16.1861 4 16.0586C4 15.9311 4.04178 15.8253 4.12533 15.7414C4.20886 15.6574 4.31452 15.6154 4.4423 15.6154H6.6923C6.88845 15.6154 7.05288 15.6817 7.18558 15.8144C7.31828 15.9471 7.38463 16.1115 7.38463 16.3077V17.6923C7.38463 17.8885 7.31828 18.0529 7.18558 18.1856C7.05288 18.3183 6.88845 18.3846 6.6923 18.3846C6.88845 18.3846 7.05288 18.451 7.18558 18.5837C7.31828 18.7164 7.38463 18.8808 7.38463 19.0769V20.3077C7.38463 20.5038 7.31828 20.6683 7.18558 20.801C7.05288 20.9337 6.88845 21 6.6923 21H4.4423ZM4.61538 14.6923C4.44999 14.6923 4.30608 14.6311 4.18365 14.5087C4.06122 14.3862 4 14.2423 4 14.0769V12.25C4 12.0539 4.06634 11.8894 4.19902 11.7567C4.33172 11.624 4.49615 11.5577 4.6923 11.5577H6.5V10.1923H4.4423C4.31452 10.1923 4.20886 10.1506 4.12533 10.0673C4.04178 9.98387 4 9.87842 4 9.7509C4 9.62338 4.04178 9.51763 4.12533 9.43365C4.20886 9.34968 4.31452 9.3077 4.4423 9.3077H6.6923C6.88845 9.3077 7.05288 9.37404 7.18558 9.50672C7.31828 9.63942 7.38463 9.80385 7.38463 10V11.75C7.38463 11.9461 7.31828 12.1106 7.18558 12.2433C7.05288 12.376 6.88845 12.4423 6.6923 12.4423H4.88462V13.8077H6.9423C7.07008 13.8077 7.17575 13.8494 7.2593 13.9327C7.34285 14.0161 7.38463 14.1216 7.38463 14.2491C7.38463 14.3766 7.34285 14.4824 7.2593 14.5663C7.17575 14.6503 7.07008 14.6923 6.9423 14.6923H4.61538ZM5.9432 8.38463C5.81568 8.38463 5.70993 8.34285 5.62595 8.2593C5.54198 8.17575 5.5 8.07008 5.5 7.9423V3.88463H4.4423C4.31452 3.88463 4.20886 3.84293 4.12533 3.75955C4.04178 3.67617 4 3.57072 4 3.4432C4 3.31568 4.04178 3.20993 4.12533 3.12595C4.20886 3.04198 4.31452 3 4.4423 3H5.78845C5.95383 3 6.09454 3.05801 6.21058 3.17402C6.32661 3.29006 6.38462 3.43077 6.38462 3.59615V7.9423C6.38462 8.07008 6.34293 8.17575 6.25955 8.2593C6.17617 8.34285 6.07072 8.38463 5.9432 8.38463ZM10.1154 18.5C9.97371 18.5 9.85496 18.452 9.75912 18.3561C9.66329 18.2601 9.61538 18.1412 9.61538 17.9993C9.61538 17.8575 9.66329 17.7388 9.75912 17.6433C9.85496 17.5478 9.97371 17.5 10.1154 17.5H19.5C19.6417 17.5 19.7604 17.548 19.8562 17.644C19.9521 17.7399 20 17.8588 20 18.0007C20 18.1425 19.9521 18.2612 19.8562 18.3567C19.7604 18.4522 19.6417 18.5 19.5 18.5H10.1154ZM10.1154 12.5C9.97371 12.5 9.85496 12.452 9.75912 12.3561C9.66329 12.2601 9.61538 12.1412 9.61538 11.9993C9.61538 11.8575 9.66329 11.7388 9.75912 11.6433C9.85496 11.5478 9.97371 11.5 10.1154 11.5H19.5C19.6417 11.5 19.7604 11.548 19.8562 11.644C19.9521 11.7399 20 11.8588 20 12.0007C20 12.1425 19.9521 12.2612 19.8562 12.3567C19.7604 12.4522 19.6417 12.5 19.5 12.5H10.1154ZM10.1154 6.5C9.97371 6.5 9.85496 6.45202 9.75912 6.35605C9.66329 6.2601 9.61538 6.14119 9.61538 5.99933C9.61538 5.85746 9.66329 5.73878 9.75912 5.64328C9.85496 5.54776 9.97371 5.5 10.1154 5.5H19.5C19.6417 5.5 19.7604 5.54798 19.8562 5.64395C19.9521 5.7399 20 5.85881 20 6.00067C20 6.14254 19.9521 6.26122 19.8562 6.35672C19.7604 6.45224 19.6417 6.5 19.5 6.5H10.1154Z"
                  fill="#323336"
                />
              </svg>

              <svg
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1154 18.4998C9.97371 18.4998 9.85496 18.4518 9.75912 18.3558C9.66329 18.2599 9.61538 18.141 9.61538 17.9991C9.61538 17.8572 9.66329 17.7386 9.75912 17.6431C9.85496 17.5475 9.97371 17.4998 10.1154 17.4998H19.5C19.6417 17.4998 19.7604 17.5478 19.8562 17.6437C19.9521 17.7397 20 17.8586 20 18.0005C20 18.1423 19.9521 18.261 19.8562 18.3565C19.7604 18.452 19.6417 18.4998 19.5 18.4998H10.1154ZM10.1154 12.4998C9.97371 12.4998 9.85496 12.4518 9.75912 12.3558C9.66329 12.2599 9.61538 12.141 9.61538 11.9991C9.61538 11.8572 9.66329 11.7386 9.75912 11.6431C9.85496 11.5475 9.97371 11.4998 10.1154 11.4998H19.5C19.6417 11.4998 19.7604 11.5478 19.8562 11.6437C19.9521 11.7397 20 11.8586 20 12.0005C20 12.1423 19.9521 12.261 19.8562 12.3565C19.7604 12.452 19.6417 12.4998 19.5 12.4998H10.1154ZM10.1154 6.49978C9.97371 6.49978 9.85496 6.45179 9.75912 6.35583C9.66329 6.25988 9.61538 6.14097 9.61538 5.9991C9.61538 5.85724 9.66329 5.73855 9.75912 5.64305C9.85496 5.54754 9.97371 5.49978 10.1154 5.49978H19.5C19.6417 5.49978 19.7604 5.54776 19.8562 5.64373C19.9521 5.73968 20 5.85859 20 6.00045C20 6.14232 19.9521 6.261 19.8562 6.3565C19.7604 6.45202 19.6417 6.49978 19.5 6.49978H10.1154ZM5.32692 19.3267C4.96202 19.3267 4.64964 19.1968 4.38978 18.9369C4.12993 18.6771 4 18.3647 4 17.9998C4 17.6349 4.12993 17.3225 4.38978 17.0626C4.64964 16.8028 4.96202 16.6729 5.32692 16.6729C5.69182 16.6729 6.00421 16.8028 6.26408 17.0626C6.52393 17.3225 6.65385 17.6349 6.65385 17.9998C6.65385 18.3647 6.52393 18.6771 6.26408 18.9369C6.00421 19.1968 5.69182 19.3267 5.32692 19.3267ZM5.32692 13.3267C4.96202 13.3267 4.64964 13.1968 4.38978 12.9369C4.12993 12.6771 4 12.3647 4 11.9998C4 11.6349 4.12993 11.3225 4.38978 11.0626C4.64964 10.8028 4.96202 10.6729 5.32692 10.6729C5.69182 10.6729 6.00421 10.8028 6.26408 11.0626C6.52393 11.3225 6.65385 11.6349 6.65385 11.9998C6.65385 12.3647 6.52393 12.6771 6.26408 12.9369C6.00421 13.1968 5.69182 13.3267 5.32692 13.3267ZM5.32692 7.3267C4.96202 7.3267 4.64964 7.19678 4.38978 6.93693C4.12993 6.67706 4 6.36468 4 5.99978C4 5.63488 4.12993 5.32249 4.38978 5.06263C4.64964 4.80278 4.96202 4.67285 5.32692 4.67285C5.69182 4.67285 6.00421 4.80278 6.26408 5.06263C6.52393 5.32249 6.65385 5.63488 6.65385 5.99978C6.65385 6.36468 6.52393 6.67706 6.26408 6.93693C6.00421 7.19678 5.69182 7.3267 5.32692 7.3267Z"
                  fill="#323336"
                />
              </svg>

              <svg
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.07692 16.0767C5.94897 16.0767 4.9875 15.6793 4.1925 14.8845C3.3975 14.0897 3 13.1285 3 12.0009C3 10.8732 3.3975 9.91164 4.1925 9.11613C4.9875 8.32061 5.94897 7.92285 7.07692 7.92285H10.1154C10.257 7.92285 10.3758 7.97084 10.4716 8.0668C10.5675 8.16275 10.6154 8.28166 10.6154 8.42353C10.6154 8.56538 10.5675 8.68406 10.4716 8.77958C10.3758 8.87509 10.257 8.92285 10.1154 8.92285H7.07465C6.23002 8.92285 5.50642 9.22414 4.90385 9.8267C4.30128 10.4293 4 11.1536 4 11.9998C4 12.8459 4.30128 13.5703 4.90385 14.1729C5.50642 14.7754 6.23002 15.0767 7.07465 15.0767H10.1154C10.257 15.0767 10.3758 15.1247 10.4716 15.2207C10.5675 15.3166 10.6154 15.4355 10.6154 15.5774C10.6154 15.7192 10.5675 15.8379 10.4716 15.9334C10.3758 16.0289 10.257 16.0767 10.1154 16.0767H7.07692ZM9 12.4998C8.85833 12.4998 8.73958 12.4518 8.64375 12.3558C8.54792 12.2599 8.5 12.141 8.5 11.9991C8.5 11.8572 8.54792 11.7386 8.64375 11.6431C8.73958 11.5475 8.85833 11.4998 9 11.4998H15C15.1417 11.4998 15.2604 11.5478 15.3562 11.6437C15.4521 11.7397 15.5 11.8586 15.5 12.0005C15.5 12.1423 15.4521 12.261 15.3562 12.3565C15.2604 12.452 15.1417 12.4998 15 12.4998H9ZM13.8846 16.0767C13.743 16.0767 13.6242 16.0287 13.5284 15.9328C13.4325 15.8368 13.3846 15.7179 13.3846 15.576C13.3846 15.4342 13.4325 15.3155 13.5284 15.22C13.6242 15.1245 13.743 15.0767 13.8846 15.0767H16.9253C17.77 15.0767 18.4936 14.7754 19.0962 14.1729C19.6987 13.5703 20 12.8459 20 11.9998C20 11.1536 19.6987 10.4293 19.0962 9.8267C18.4936 9.22414 17.77 8.92285 16.9253 8.92285H13.8846C13.743 8.92285 13.6242 8.87487 13.5284 8.7789C13.4325 8.68295 13.3846 8.56404 13.3846 8.42218C13.3846 8.28031 13.4325 8.16163 13.5284 8.06613C13.6242 7.97061 13.743 7.92285 13.8846 7.92285H16.9231C18.051 7.92285 19.0125 8.32024 19.8075 9.11503C20.6025 9.90983 21 10.8711 21 11.9987C21 13.1263 20.6025 14.0879 19.8075 14.8834C19.0125 15.6789 18.051 16.0767 16.9231 16.0767H13.8846Z"
                  fill="#323336"
                />
              </svg>
            </div>
            <div className="flex lg:gap-[32px] gap-[16px] items-center">
              <svg
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 11.5H18.5V7.5H14.5V11.5ZM5.5 11.5H9.5V7.5H5.5V11.5ZM17.3288 16.5C17.1109 16.5 16.9455 16.4093 16.8327 16.2279C16.7199 16.0465 16.7096 15.859 16.8019 15.6654L18.2308 12.5H14.5C14.232 12.5 13.9984 12.4003 13.799 12.201C13.5997 12.0016 13.5 11.768 13.5 11.5V7.5C13.5 7.23205 13.5997 6.99839 13.799 6.79902C13.9984 6.59967 14.232 6.5 14.5 6.5H18.5C18.768 6.5 19.0016 6.59967 19.201 6.79902C19.4003 6.99839 19.5 7.23205 19.5 7.5V12.1404C19.5 12.2519 19.4875 12.3644 19.4625 12.4779C19.4375 12.5914 19.4026 12.7019 19.3577 12.8096L17.8558 16.1731C17.8032 16.2782 17.7327 16.359 17.6442 16.4154C17.5558 16.4718 17.4507 16.5 17.3288 16.5ZM8.32885 16.5C8.1109 16.5 7.94551 16.4093 7.83268 16.2279C7.71986 16.0465 7.70961 15.859 7.80192 15.6654L9.23075 12.5H5.5C5.23205 12.5 4.99839 12.4003 4.79902 12.201C4.59967 12.0016 4.5 11.768 4.5 11.5V7.5C4.5 7.23205 4.59967 6.99839 4.79902 6.79902C4.99839 6.59967 5.23205 6.5 5.5 6.5H9.5C9.76795 6.5 10.0016 6.59967 10.201 6.79902C10.4003 6.99839 10.5 7.23205 10.5 7.5V12.1404C10.5 12.2519 10.4875 12.3644 10.4625 12.4779C10.4375 12.5914 10.4026 12.7019 10.3577 12.8096L8.85577 16.1731C8.80321 16.2782 8.73269 16.359 8.64423 16.4154C8.55578 16.4718 8.45065 16.5 8.32885 16.5Z"
                  fill="#323336"
                />
              </svg>

              <svg
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.11354 12.0061L8.35391 16.2464C8.4475 16.34 8.4975 16.4548 8.50391 16.5907C8.51033 16.7266 8.46033 16.8477 8.35391 16.9541C8.2475 17.0605 8.12955 17.1138 8.00006 17.1138C7.87058 17.1138 7.75263 17.0605 7.64621 16.9541L3.25776 12.5657C3.17058 12.4785 3.10936 12.3894 3.07409 12.2984C3.03884 12.2073 3.02121 12.108 3.02121 12.0003C3.02121 11.8926 3.03884 11.7932 3.07409 11.7022C3.10936 11.6112 3.17058 11.5221 3.25776 11.4349L6.63274 8.0599L3.09429 4.52143C2.99686 4.42399 2.94493 4.30829 2.93851 4.17433C2.93211 4.04034 2.98404 3.91823 3.09429 3.80798C3.20454 3.69771 3.32345 3.64258 3.45101 3.64258C3.57858 3.64258 3.6975 3.69771 3.80776 3.80798L20.1924 20.1926C20.2898 20.29 20.3417 20.4048 20.3481 20.5368C20.3546 20.6689 20.3026 20.79 20.1924 20.9003C20.0821 21.0105 19.9632 21.0657 19.8356 21.0657C19.7081 21.0657 19.5892 21.0105 19.4789 20.9003L7.34622 8.77335L4.11354 12.0061ZM18.0597 15.2484L17.3462 14.5349L19.8866 11.9945L15.6462 7.75413C15.5526 7.66054 15.5026 7.5458 15.4962 7.4099C15.4898 7.274 15.5398 7.15284 15.6462 7.04643C15.7526 6.94001 15.8706 6.8868 16.0001 6.8868C16.1295 6.8868 16.2475 6.94001 16.3539 7.04643L20.7424 11.4349C20.8295 11.5221 20.8908 11.6112 20.926 11.7022C20.9613 11.7932 20.9789 11.8926 20.9789 12.0003C20.9789 12.108 20.9613 12.2073 20.926 12.2984C20.8908 12.3894 20.8295 12.4785 20.7424 12.5657L18.0597 15.2484Z"
                  fill="#323336"
                />
              </svg>

              <svg
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.11348 12L9.93463 10.1788C10.0321 10.0814 10.084 9.96668 10.0904 9.83463C10.0968 9.70256 10.0449 9.5814 9.93463 9.47115C9.82436 9.3609 9.70544 9.30578 9.57787 9.30578C9.45031 9.30578 9.3314 9.3609 9.22115 9.47115L7.2577 11.4346C7.17052 11.5218 7.10929 11.6109 7.07402 11.7019C7.03877 11.7929 7.02115 11.8923 7.02115 12C7.02115 12.1077 7.03877 12.2071 7.07402 12.2981C7.10929 12.3891 7.17052 12.4782 7.2577 12.5654L9.24038 14.5481C9.33781 14.6455 9.45352 14.6974 9.5875 14.7038C9.72148 14.7103 9.8436 14.6583 9.95385 14.5481C10.0641 14.4378 10.1192 14.3199 10.1192 14.1942C10.1192 14.0686 10.0641 13.9506 9.95385 13.8404L8.11348 12ZM15.8865 12L14.0462 13.8404C13.9487 13.9378 13.8968 14.0526 13.8904 14.1846C13.884 14.3167 13.9359 14.4378 14.0462 14.5481C14.1564 14.6583 14.2753 14.7135 14.4029 14.7135C14.5304 14.7135 14.6494 14.6583 14.7596 14.5481L16.7423 12.5654C16.8295 12.4782 16.8907 12.3891 16.926 12.2981C16.9612 12.2071 16.9789 12.1077 16.9789 12C16.9789 11.8923 16.9612 11.7929 16.926 11.7019C16.8907 11.6109 16.8295 11.5218 16.7423 11.4346L14.7596 9.45193C14.7109 9.40321 14.6561 9.36667 14.5952 9.3423C14.5343 9.31795 14.4734 9.30578 14.4125 9.30578C14.3516 9.30578 14.2875 9.31795 14.2202 9.3423C14.1529 9.36667 14.0949 9.40321 14.0462 9.45193C13.9359 9.56218 13.8808 9.68013 13.8808 9.80578C13.8808 9.93141 13.9359 10.0494 14.0462 10.1596L15.8865 12ZM5.61538 20C5.15513 20 4.77083 19.8458 4.4625 19.5375C4.15417 19.2292 4 18.8449 4 18.3846V5.61537C4 5.15512 4.15417 4.77083 4.4625 4.4625C4.77083 4.15417 5.15513 4 5.61538 4H18.3846C18.8449 4 19.2292 4.15417 19.5375 4.4625C19.8458 4.77083 20 5.15512 20 5.61537V18.3846C20 18.8449 19.8458 19.2292 19.5375 19.5375C19.2292 19.8458 18.8449 20 18.3846 20H5.61538ZM5.61538 19H18.3846C18.5385 19 18.6795 18.9359 18.8077 18.8077C18.9359 18.6795 19 18.5385 19 18.3846V5.61537C19 5.46154 18.9359 5.32052 18.8077 5.1923C18.6795 5.0641 18.5385 5 18.3846 5H5.61538C5.46154 5 5.32052 5.0641 5.1923 5.1923C5.0641 5.32052 5 5.46154 5 5.61537V18.3846C5 18.5385 5.0641 18.6795 5.1923 18.8077C5.32052 18.9359 5.46154 19 5.61538 19Z"
                  fill="#323336"
                />
              </svg>
            </div>
            <div className="flex">
              <svg
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0007 16.5C12.1425 16.5 12.2612 16.4521 12.3567 16.3562C12.4522 16.2604 12.5 16.1417 12.5 16V11.5C12.5 11.3583 12.452 11.2396 12.3561 11.1438C12.2601 11.0479 12.1412 11 11.9993 11C11.8575 11 11.7388 11.0479 11.6433 11.1438C11.5478 11.2396 11.5 11.3583 11.5 11.5V16C11.5 16.1417 11.548 16.2604 11.644 16.3562C11.7399 16.4521 11.8588 16.5 12.0007 16.5ZM12 9.57693C12.1744 9.57693 12.3205 9.51795 12.4385 9.4C12.5564 9.28205 12.6154 9.13589 12.6154 8.96152C12.6154 8.78718 12.5564 8.64102 12.4385 8.52307C12.3205 8.40512 12.1744 8.34615 12 8.34615C11.8256 8.34615 11.6795 8.40512 11.5615 8.52307C11.4436 8.64102 11.3846 8.78718 11.3846 8.96152C11.3846 9.13589 11.4436 9.28205 11.5615 9.4C11.6795 9.51795 11.8256 9.57693 12 9.57693ZM12.0034 21C10.7588 21 9.58872 20.7638 8.4931 20.2915C7.39748 19.8192 6.44444 19.1782 5.63397 18.3685C4.82352 17.5588 4.18192 16.6066 3.70915 15.512C3.23638 14.4174 3 13.2479 3 12.0034C3 10.7588 3.23616 9.58872 3.70848 8.4931C4.18081 7.39748 4.82183 6.44444 5.63153 5.63398C6.44123 4.82353 7.39337 4.18192 8.48795 3.70915C9.58255 3.23638 10.7521 3 11.9966 3C13.2412 3 14.4113 3.23616 15.5069 3.70847C16.6025 4.18081 17.5556 4.82182 18.366 5.63152C19.1765 6.44122 19.8181 7.39337 20.2908 8.48795C20.7636 9.58255 21 10.7521 21 11.9966C21 13.2412 20.7638 14.4113 20.2915 15.5069C19.8192 16.6025 19.1782 17.5556 18.3685 18.366C17.5588 19.1765 16.6066 19.8181 15.512 20.2909C14.4174 20.7636 13.2479 21 12.0034 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                  fill="#1D2023"
                />
              </svg>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-[10px]">
            <p>Published:</p>
            <FormGroup>{<Switch />}</FormGroup>
          </div>
          <div
            style={{ fontFamily: "Figtree" }}
            className="flex items-center justify-between xl:pb-[30px] pb-[15px] lg:pb-[20px]"
          >
            <div className="flex gap-[16px] text-[16px] lg:text-[18px] not-italic font-[500] leading-[100%] tracking-[0.16px] lg:tracking-[0.18px]">
              <button
                onClick={toggleDelete}
                className="flex items-center gap-[5px] lg:gap-[10px] text-[#FC1B13]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.61537 19.9997C7.16794 19.9997 6.78685 19.8424 6.4721 19.5276C6.15737 19.2129 6 18.8318 6 18.3843V5.99972H5.5C5.35768 5.99972 5.23878 5.95196 5.14328 5.85644C5.04776 5.76093 5 5.64202 5 5.49972C5 5.3574 5.04776 5.23849 5.14328 5.14299C5.23878 5.04748 5.35768 4.99972 5.5 4.99972H9C9 4.7933 9.0766 4.61349 9.2298 4.46029C9.38302 4.30708 9.56283 4.23047 9.76923 4.23047H14.2308C14.4372 4.23047 14.617 4.30708 14.7702 4.46029C14.9234 4.61349 15 4.7933 15 4.99972H18.5C18.6423 4.99972 18.7612 5.04748 18.8567 5.14299C18.9522 5.23849 19 5.3574 19 5.49972C19 5.64202 18.9522 5.76093 18.8567 5.85644C18.7612 5.95196 18.6423 5.99972 18.5 5.99972H18V18.3843C18 18.8318 17.8426 19.2129 17.5279 19.5276C17.2132 19.8424 16.8321 19.9997 16.3846 19.9997H7.61537ZM17 5.99972H7V18.3843C7 18.5638 7.05769 18.7113 7.17308 18.8266C7.28846 18.942 7.43589 18.9997 7.61537 18.9997H16.3846C16.5641 18.9997 16.7115 18.942 16.8269 18.8266C16.9423 18.7113 17 18.5638 17 18.3843V5.99972ZM9.80768 16.9997H10.8077V7.99972H9.80768V16.9997ZM13.1923 16.9997H14.1923V7.99972H13.1923V16.9997Z"
                    fill="#FC1B13"
                  />
                </svg>

                <p>Delete</p>
              </button>
              {isDelete && (
                <div className="absolute top-[250px] lg:top-[140px] right-[20px] lg:right-[400px]">
                  <Delete />
                </div>
              )}
              <button
                onClick={closeChangelogAndNav}
                className="flex items-center gap-[5px] lg:gap-[10px] text-[#A7A8AE]"
              >
                <p>Cancel</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 12.7079L6.75404 17.954C6.66046 18.0476 6.54572 18.0976 6.40982 18.104C6.27392 18.1105 6.15276 18.0605 6.04634 17.954C5.93993 17.8476 5.88672 17.7297 5.88672 17.6002C5.88672 17.4707 5.93993 17.3528 6.04634 17.2463L11.2925 12.0002L6.04634 6.75404C5.95276 6.66046 5.90276 6.54572 5.89634 6.40982C5.88993 6.27392 5.93993 6.15276 6.04634 6.04634C6.15276 5.93993 6.27071 5.88672 6.40019 5.88672C6.52968 5.88672 6.64763 5.93993 6.75404 6.04634L12.0002 11.2925L17.2463 6.04634C17.3399 5.95276 17.4547 5.90276 17.5906 5.89634C17.7265 5.88993 17.8476 5.93993 17.954 6.04634C18.0605 6.15276 18.1137 6.27071 18.1137 6.40019C18.1137 6.52968 18.0605 6.64763 17.954 6.75404L12.7079 12.0002L17.954 17.2463C18.0476 17.3399 18.0976 17.4547 18.104 17.5906C18.1105 17.7265 18.0605 17.8476 17.954 17.954C17.8476 18.0605 17.7297 18.1137 17.6002 18.1137C17.4707 18.1137 17.3528 18.0605 17.2463 17.954L12.0002 12.7079Z"
                    fill="#A7A8AE"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-[16px]">
              <div className="lg:flex items-center gap-[10px] hidden">
                <p>Published:</p>
                <FormGroup>{<Switch />}</FormGroup>
              </div>
              <div
                onClick={toggleSucess}
                className="flex justify-center items-center rounded-[4px] bg-[#1463F3] gap-[5px] text-[16px] lg:text-[18px] text-[#fff] not-italic font-[500] leading-[100%] lg:tracking-[0.18px] tracking-[0.16px] py-[8px] px-[16px]"
              >
                <button>Save</button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 12.5H6.5C6.35833 12.5 6.23958 12.452 6.14375 12.3561C6.04792 12.2601 6 12.1412 6 11.9993C6 11.8575 6.04792 11.7388 6.14375 11.6433C6.23958 11.5478 6.35833 11.5 6.5 11.5H11.5V6.5C11.5 6.35833 11.548 6.23958 11.6439 6.14375C11.7399 6.04792 11.8588 6 12.0007 6C12.1425 6 12.2612 6.04792 12.3567 6.14375C12.4522 6.23958 12.5 6.35833 12.5 6.5V11.5H17.5C17.6417 11.5 17.7604 11.548 17.8562 11.6439C17.9521 11.7399 18 11.8588 18 12.0007C18 12.1425 17.9521 12.2612 17.8562 12.3567C17.7604 12.4522 17.6417 12.5 17.5 12.5H12.5V17.5C12.5 17.6417 12.452 17.7604 12.3561 17.8562C12.2601 17.9521 12.1412 18 11.9993 18C11.8575 18 11.7388 17.9521 11.6433 17.8562C11.5478 17.7604 11.5 17.6417 11.5 17.5V12.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              {isSuccess && (
                <div className="absolute right-0 bottom-0 w-[393px] lg:w-[1530px]">
                  <div className="flex justify-center items-center gap-[8px] py-[16px] bg-[#4BB543] relative top-[200px] lg:top-0 text-[#fff] text-[18px] not-italic font-[500] leading-[140%] tracking-[0.18px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M13.2335 21.1748L24.9694 9.43888C25.0993 9.30896 25.2536 9.23973 25.4323 9.23117C25.6109 9.22262 25.7737 9.29185 25.9207 9.43888C26.0677 9.58588 26.1412 9.74442 26.1412 9.91451C26.1412 10.0846 26.0677 10.2431 25.9207 10.3901L13.9874 22.3235C13.772 22.5389 13.5207 22.6466 13.2335 22.6466C12.9464 22.6466 12.6951 22.5389 12.4797 22.3235L7.07971 16.9235C6.94977 16.7936 6.88182 16.6393 6.87584 16.4607C6.86986 16.282 6.94037 16.1192 7.08737 15.9722C7.23439 15.8252 7.39295 15.7517 7.56304 15.7517C7.73313 15.7517 7.89167 15.8252 8.03867 15.9722L13.2335 21.1748Z"
                        fill="white"
                      />
                    </svg>
                    <p>Saved successfully!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
