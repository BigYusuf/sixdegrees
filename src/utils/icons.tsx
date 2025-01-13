import * as React from "react";
import { SVGProps } from "react";

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="m16.03 10.53-4.5 4.5a.751.751 0 1 1-1.062-1.062l3.22-3.218H4.5a.75.75 0 1 1 0-1.5h9.188l-3.219-3.22a.751.751 0 1 1 1.063-1.063l4.5 4.5a.75.75 0 0 1-.001 1.064Z"
    />
  </svg>
);
export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.813 10.5a.938.938 0 0 1-.938.938H3.125a.938.938 0 0 1 0-1.876h13.75a.937.937 0 0 1 .938.938ZM3.124 6.437h13.75a.937.937 0 0 0 0-1.875H3.125a.937.937 0 1 0 0 1.875Zm13.75 8.125H3.125a.938.938 0 0 0 0 1.876h13.75a.938.938 0 0 0 0-1.875Z"
    />
  </svg>
);
export const CheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#AC6AFF" rx={12} />
    <path
      fill="#0E0C15"
      fillRule="evenodd"
      d="M17.805 7.53c.26.26.26.682 0 .942l-7.334 7.333a.667.667 0 0 1-.942 0l-3.334-3.333a.667.667 0 0 1 .943-.943L10 14.391l6.862-6.862c.26-.26.682-.26.943 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export const SocialInsta = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  {...props}
>
  <path
    fill="currentColor"
    d="M17 2.25H8A5.256 5.256 0 0 0 2.75 7.5v9A5.256 5.256 0 0 0 8 21.75h9a5.256 5.256 0 0 0 5.25-5.25v-9A5.256 5.256 0 0 0 17 2.25ZM12.5 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm5.625-9a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM15.5 12a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
  />
</svg>
);
export const SocialX = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  {...props}
>
  <path
    fill="currentColor"
    d="M17.141 5h2.454l-5.36 5.93L20.541 19h-4.938l-3.867-4.894L7.311 19H4.856l5.734-6.343L4.541 5h5.062l3.496 4.474L17.141 5Z"
  />
</svg>
);
export const SocialPin = (props: SVGProps<SVGSVGElement>) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.501 4a8 8 0 0 0-3.212 15.327c-.024-.559-.005-1.229.138-1.836.155-.65 1.03-4.36 1.03-4.36s-.255-.511-.255-1.266c0-1.186.687-2.071 1.542-2.071.729 0 1.079.547 1.079 1.201 0 .731-.466 1.826-.705 2.839-.201.849.425 1.541 1.261 1.541 1.517 0 2.538-1.947 2.538-4.253 0-1.753-1.181-3.066-3.329-3.066-2.427 0-3.938 1.81-3.938 3.831 0 .697.204 1.189.527 1.569.147.175.168.246.114.446-.038.147-.126.502-.163.642-.053.203-.217.275-.4.201-1.118-.457-1.638-1.68-1.638-3.057 0-2.272 1.917-4.997 5.717-4.997 3.055 0 5.066 2.21 5.066 4.582 0 3.139-1.746 5.484-4.318 5.484-.864 0-1.676-.468-1.954-.998 0 0-.465 1.844-.563 2.199-.17.616-.502 1.234-.805 1.714A8 8 0 0 0 20.5 11.999 8 8 0 0 0 12.501 4Z"
    />
  </svg>
);
export const SocialLinkedIn = (props: SVGProps<SVGSVGElement>) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.5 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3V7Zm4.85 10.393v-7.224H6.934v7.224H9.35ZM8.142 9.182c.842 0 1.367-.554 1.367-1.248-.016-.709-.525-1.248-1.351-1.248-.827 0-1.367.539-1.367 1.248 0 .694.524 1.248 1.335 1.248h.016Zm4.962 8.211v-4.034c0-.216.016-.431.079-.586.175-.431.573-.878 1.24-.878.875 0 1.225.662 1.225 1.634v3.864h2.416v-4.142c0-2.219-1.192-3.252-2.782-3.252-1.282 0-1.857.7-2.178 1.193v-1.023h-2.417c.032.675.001 7.183 0 7.225l2.417-.001Z"
    />
  </svg>
);
export const SocialYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  {...props}
>
  <path
    fill="currentColor"
    d="M22.468 6.518A2.25 2.25 0 0 0 21.11 4.98c-3.214-1.241-8.329-1.23-8.61-1.23-.281 0-5.396-.011-8.61 1.23a2.25 2.25 0 0 0-1.358 1.537C2.289 7.454 2 9.163 2 12c0 2.837.289 4.547.532 5.483A2.25 2.25 0 0 0 3.89 19.02c3.079 1.188 7.897 1.229 8.548 1.229h.124c.65 0 5.472-.041 8.548-1.23a2.25 2.25 0 0 0 1.358-1.537c.243-.938.532-2.646.532-5.483 0-2.837-.289-4.547-.532-5.482Zm-6.76 5.794-4.5 3a.375.375 0 0 1-.583-.312V9a.376.376 0 0 1 .583-.312l4.5 3a.375.375 0 0 1 0 .624Z"
  />
</svg>
);
