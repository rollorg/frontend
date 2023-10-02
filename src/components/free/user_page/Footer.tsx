import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <>
      <footer
        style={{ fontFamily: "Figtree" }}
        className="xl:px-[88px] md:px-[40px] px-[15px] md:text-[#595A5E] text-[#808186] text-[16px] md:text-[18px] md:not-italic font-[400] leading-[140%] tracking-[0.16px] md:tracking-[0.18px] flex justify-center gap-3 h-[80px] pt-[20px]"
      >
        <p>Powered by</p>
        <svg
          width="101"
          height="32"
          viewBox="0 0 101 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5708 24.9606H16.1513L9.9539 13.944C11.0503 13.8054 12.0312 13.4705 12.8968 12.9393C13.7739 12.3966 14.4663 11.6748 14.9741 10.7741C15.4935 9.87338 15.7531 8.82253 15.7531 7.62156C15.7531 6.29356 15.4531 5.1561 14.853 4.20918C14.2528 3.25071 13.4334 2.51742 12.3948 2.00932C11.3676 1.50122 10.2078 1.24716 8.91523 1.24716H0V0H8.91523C10.4271 0 11.8004 0.317565 13.0353 0.952695C14.2701 1.58782 15.2511 2.47701 15.9782 3.62024C16.7052 4.76347 17.0688 6.09725 17.0688 7.62156C17.0688 9.41147 16.5898 10.93 15.632 12.1772C14.6856 13.4243 13.4219 14.2962 11.8408 14.7928L17.5708 24.9606Z"
            fill="#1463F3"
          />
          <path
            d="M31.9184 7.55227C33.5456 7.55227 34.9767 7.95067 36.2115 8.74747C37.4464 9.54427 38.41 10.6124 39.1025 11.952C39.7949 13.28 40.1411 14.7581 40.1411 16.3863C40.1411 18.0146 39.7949 19.4985 39.1025 20.838C38.41 22.1776 37.4464 23.2458 36.2115 24.0426C34.9767 24.8393 33.5456 25.2377 31.9184 25.2377C30.2911 25.2377 28.8543 24.8393 27.6079 24.0426C26.3615 23.2458 25.3863 22.1776 24.6823 20.838C23.9899 19.4985 23.6436 18.0146 23.6436 16.3863H24.9939C24.9939 17.7952 25.2766 19.077 25.8421 20.2318C26.4192 21.3866 27.2213 22.3104 28.2484 23.0032C29.2871 23.6846 30.5104 24.0252 31.9184 24.0252C33.3148 24.0252 34.5266 23.6846 35.5537 23.0032C36.5924 22.3104 37.3887 21.3866 37.9426 20.2318C38.5081 19.077 38.7909 17.7952 38.7909 16.3863C38.7909 14.9891 38.5081 13.713 37.9426 12.5582C37.3887 11.4035 36.5924 10.4854 35.5537 9.80409C34.5266 9.11123 33.3148 8.76479 31.9184 8.76479C31.9068 8.76479 31.901 8.76479 31.901 8.76479V7.55227C31.901 7.55227 31.9068 7.55227 31.9184 7.55227Z"
            fill="#1463F3"
          />
          <path d="M46.1923 0H47.4387V24.9606H46.1923V0Z" fill="#1463F3" />
          <path d="M53.5147 0H54.7611V24.9606H53.5147V0Z" fill="#1463F3" />
          <path
            d="M69.1117 7.55227C70.739 7.55227 72.17 7.95067 73.4049 8.74747C74.6398 9.54427 75.6034 10.6124 76.2959 11.952C76.9883 13.28 77.3345 14.7581 77.3345 16.3863C77.3345 18.0146 76.9883 19.4985 76.2959 20.838C75.6034 22.1776 74.6398 23.2458 73.4049 24.0426C72.17 24.8393 70.739 25.2377 69.1117 25.2377C67.4845 25.2377 66.0477 24.8393 64.8013 24.0426C63.5549 23.2458 62.5797 22.1776 61.8757 20.838C61.1832 19.4985 60.837 18.0146 60.837 16.3863H62.1873C62.1873 17.7952 62.47 19.077 63.0355 20.2318C63.6126 21.3866 64.4146 22.3104 65.4418 23.0032C66.4804 23.6846 67.7038 24.0252 69.1117 24.0252C70.5082 24.0252 71.7199 23.6846 72.7471 23.0032C73.7857 22.3104 74.5821 21.3866 75.136 20.2318C75.7015 19.077 75.9843 17.7952 75.9843 16.3863C75.9843 14.9891 75.7015 13.713 75.136 12.5582C74.5821 11.4035 73.7857 10.4854 72.7471 9.80409C71.7199 9.11123 70.5082 8.76479 69.1117 8.76479C69.1002 8.76479 69.0944 8.76479 69.0944 8.76479V7.55227C69.0944 7.55227 69.1002 7.55227 69.1117 7.55227Z"
            fill="#1463F3"
          />
          <path
            d="M100.056 7.93335C99.4678 7.93335 98.9369 8.03728 98.4637 8.24514C97.9905 8.44145 97.5808 8.68973 97.2346 8.98997C96.8884 9.27867 96.6056 9.56736 96.3864 9.85606C96.7672 10.3295 97.0673 10.8723 97.2866 11.4843C97.5174 12.0963 97.6328 12.7892 97.6328 13.5629C97.6328 14.8678 97.3154 15.9649 96.6807 16.854C96.0575 17.7432 95.2381 18.4188 94.2225 18.8807C93.2069 19.331 92.1394 19.5562 91.0199 19.5562C90.4429 19.5562 89.8716 19.4927 89.3061 19.3657C88.833 19.7814 88.5213 20.1971 88.3713 20.6128C88.2213 21.017 88.1867 21.3404 88.2675 21.5829C88.3598 21.9293 88.6598 22.1776 89.1676 22.3277C89.687 22.4663 90.541 22.5413 91.7297 22.5529C93.2646 22.5644 94.5918 22.7088 95.7112 22.9859C96.8422 23.2515 97.7136 23.6961 98.3252 24.3197C98.9369 24.9317 99.2427 25.7805 99.2427 26.866C99.2427 28.3788 98.5387 29.6259 97.1308 30.6075C95.7228 31.6006 93.6974 32.0625 91.0545 31.9932C88.908 31.8546 87.2172 31.462 85.9824 30.8153C84.7475 30.1802 83.882 29.597 83.3857 29.0658L84.1647 28.1824C84.8572 28.806 85.7631 29.3661 86.8826 29.8626C88.0136 30.3708 89.4042 30.6768 91.0545 30.7807C92.2894 30.85 93.4204 30.7461 94.4475 30.4689C95.4862 30.1918 96.3171 29.7529 96.9403 29.1525C97.5751 28.5635 97.8924 27.836 97.8924 26.9699C97.8924 26.1038 97.6097 25.4456 97.0442 24.9952C96.4787 24.5564 95.7286 24.2562 94.7938 24.0945C93.8705 23.9213 92.8376 23.8231 91.6951 23.8C90.3448 23.7654 89.26 23.6211 88.4406 23.367C87.6212 23.1014 87.1365 22.5875 86.9864 21.8254C86.9172 21.4096 86.9864 20.9477 87.1942 20.4396C87.4019 19.92 87.725 19.4465 88.1636 19.0193C87.4481 18.7421 86.8018 18.3552 86.2247 17.8587C85.6592 17.3621 85.2092 16.7559 84.8745 16.0399C84.5513 15.3124 84.3898 14.4867 84.3898 13.5629C84.3898 13.5629 84.3898 13.5571 84.3898 13.5456H85.74C85.74 13.5571 85.74 13.5629 85.74 13.5629C85.74 14.6484 85.9882 15.5434 86.4844 16.2478C86.9807 16.9406 87.6269 17.4603 88.4233 17.8067C89.2311 18.1416 90.0967 18.3091 91.0199 18.3091C91.9316 18.3091 92.7857 18.1416 93.582 17.8067C94.3898 17.4603 95.0419 16.9406 95.5381 16.2478C96.0344 15.5434 96.2825 14.6484 96.2825 13.5629C96.2825 12.4659 96.0344 11.5651 95.5381 10.8607C95.0419 10.1563 94.3898 9.63665 93.582 9.30176C92.7857 8.95533 91.9316 8.78211 91.0199 8.78211V7.53495C91.8739 7.53495 92.6991 7.66775 93.4954 7.93335C94.2917 8.19895 95.0072 8.5858 95.642 9.0939C96.1844 8.30865 96.8307 7.6793 97.5808 7.20584C98.3425 6.73238 99.1677 6.49565 100.056 6.49565V7.93335Z"
            fill="#1463F3"
          />
        </svg>
      </footer>
    </>
  );
};
