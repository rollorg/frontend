import React, { FC, useState } from "react";

export const Delete: FC = () => {
  const [isCancel, setCancel] = useState(false);

  const handleClose = () => {
    setCancel(true);
  };

  const handleDelete = () => {
    window.location.reload();
  };

  if (isCancel) {
    return null;
  }
  return (
    <>
      <div
        style={{ fontFamily: "Figtree" }}
        className="input md:w-[540px] w-[328px] h-[256px] lg:h-[262px] rounded-[8px] bg-[#fff] flex flex-col gap-[30px] py-[24px] px-[16px] lg:px-[40px] text-[16px] lg:text-[18px] not-italic font-[400] leading-[140%] tracking-[0.16px] lg:tracking-[0.18px]"
      >
        <div className="flex justify-end cursor-pointer" onClick={handleClose}>
          <svg className="h-[32px] w-[32px] lg:h-[48px] lg:w-[48px]"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9999 25.4158L13.5076 35.9081C13.3204 36.0953 13.0909 36.1953 12.8191 36.2081C12.5473 36.2209 12.305 36.1209 12.0922 35.9081C11.8794 35.6953 11.7729 35.4594 11.7729 35.2004C11.7729 34.9414 11.8794 34.7055 12.0922 34.4927L22.5845 24.0004L12.0922 13.5081C11.905 13.3209 11.805 13.0914 11.7922 12.8196C11.7794 12.5478 11.8794 12.3055 12.0922 12.0927C12.305 11.8799 12.5409 11.7734 12.7999 11.7734C13.0589 11.7734 13.2948 11.8799 13.5076 12.0927L23.9999 22.585L34.4922 12.0927C34.6794 11.9055 34.9089 11.8055 35.1807 11.7927C35.4525 11.7799 35.6948 11.8799 35.9076 12.0927C36.1204 12.3055 36.2269 12.5414 36.2269 12.8004C36.2269 13.0594 36.1204 13.2953 35.9076 13.5081L25.4153 24.0004L35.9076 34.4927C36.0948 34.6799 36.1948 34.9093 36.2076 35.1811C36.2204 35.4529 36.1204 35.6953 35.9076 35.9081C35.6948 36.1209 35.4589 36.2273 35.1999 36.2273C34.9409 36.2273 34.705 36.1209 34.4922 35.9081L23.9999 25.4158Z"
              fill="#1D2023"
            />
          </svg>
        </div>
        <p className="text-[#323336]">
          Do you want to delete “Company name” account?
        </p>
        <div className="flex gap-[32px] justify-end">
          <div
            className="rounded-[4px] border-[0.5px] border-[#A7A8AE] bg-[#fff] text-[#A7A8AE] px-[16px] py-[8px] lg:w-[152px] h-[56px] flex justify-center gap-[8px] items-center"
            onClick={handleClose}
          >
            <button className="">Cancel</button>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5002 12.7079L7.25404 17.954C7.16046 18.0476 7.04572 18.0976 6.90982 18.104C6.77392 18.1105 6.65276 18.0605 6.54634 17.954C6.43993 17.8476 6.38672 17.7297 6.38672 17.6002C6.38672 17.4707 6.43993 17.3528 6.54634 17.2463L11.7925 12.0002L6.54634 6.75404C6.45276 6.66046 6.40276 6.54572 6.39634 6.40982C6.38993 6.27392 6.43993 6.15276 6.54634 6.04634C6.65276 5.93993 6.77071 5.88672 6.90019 5.88672C7.02968 5.88672 7.14763 5.93993 7.25404 6.04634L12.5002 11.2925L17.7463 6.04634C17.8399 5.95276 17.9547 5.90276 18.0906 5.89634C18.2265 5.88993 18.3476 5.93993 18.454 6.04634C18.5605 6.15276 18.6137 6.27071 18.6137 6.40019C18.6137 6.52968 18.5605 6.64763 18.454 6.75404L13.2079 12.0002L18.454 17.2463C18.5476 17.3399 18.5976 17.4547 18.604 17.5906C18.6105 17.7265 18.5605 17.8476 18.454 17.954C18.3476 18.0605 18.2297 18.1137 18.1002 18.1137C17.9707 18.1137 17.8528 18.0605 17.7463 17.954L12.5002 12.7079Z"
                fill="#A7A8AE"
              />
            </svg>
          </div>
          <div
            className="rounded-[4px] border-[0.5px] border-[#A7A8AE] bg-[#FC1B13] text-[#fff] px-[16px] py-[8px] lg:w-[152px] h-[56px] flex justify-center gap-[8px] items-center"
            onClick={handleDelete}
          >
            <button>Delete</button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.61537 19.9997C7.16794 19.9997 6.78685 19.8424 6.4721 19.5276C6.15737 19.2129 6 18.8318 6 18.3843V5.99972H5.5C5.35768 5.99972 5.23878 5.95196 5.14328 5.85644C5.04776 5.76093 5 5.64202 5 5.49972C5 5.3574 5.04776 5.23849 5.14328 5.14299C5.23878 5.04748 5.35768 4.99972 5.5 4.99972H9C9 4.7933 9.0766 4.61349 9.2298 4.46029C9.38302 4.30708 9.56283 4.23047 9.76923 4.23047H14.2308C14.4372 4.23047 14.617 4.30708 14.7702 4.46029C14.9234 4.61349 15 4.7933 15 4.99972H18.5C18.6423 4.99972 18.7612 5.04748 18.8567 5.14299C18.9522 5.23849 19 5.3574 19 5.49972C19 5.64202 18.9522 5.76093 18.8567 5.85644C18.7612 5.95196 18.6423 5.99972 18.5 5.99972H18V18.3843C18 18.8318 17.8426 19.2129 17.5279 19.5276C17.2132 19.8424 16.8321 19.9997 16.3846 19.9997H7.61537ZM17 5.99972H7V18.3843C7 18.5638 7.05769 18.7113 7.17308 18.8266C7.28846 18.942 7.43589 18.9997 7.61537 18.9997H16.3846C16.5641 18.9997 16.7115 18.942 16.8269 18.8266C16.9423 18.7113 17 18.5638 17 18.3843V5.99972ZM9.80768 16.9997H10.8077V7.99972H9.80768V16.9997ZM13.1923 16.9997H14.1923V7.99972H13.1923V16.9997Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
