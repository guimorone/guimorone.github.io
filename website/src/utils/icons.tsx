import type { ForwardRefExoticComponent, PropsWithoutRef, SVGProps, RefAttributes, JSX } from 'react';

export type IconType =
	| ForwardRefExoticComponent<
			PropsWithoutRef<SVGProps<SVGSVGElement>> & {
				title?: string;
				titleId?: string;
			} & RefAttributes<SVGSVGElement>
	  >
	| ((props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element);

export const PDFIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element = props => (
	<svg fill="currentColor" viewBox="0 0 512 512" {...props}>
		<path
			fillRule="evenodd"
			d="M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"
			clipRule="evenodd"
		/>
	</svg>
);

export const InstagramIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element = props => (
	<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
			clipRule="evenodd"
		/>
	</svg>
);

export const GitHubIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element = props => (
	<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
			clipRule="evenodd"
		/>
	</svg>
);

export const LinkedInIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element = props => (
	<svg fill="currentColor" viewBox="0 0 448 512" {...props}>
		<path
			fillRule="evenodd"
			d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
			clipRule="evenodd"
		/>
	</svg>
);

export const TuringLogo: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element = props => (
	<svg fill="currentColor" viewBox="0 0 39 32" {...props}>
		<path
			fillRule="evenodd"
			d="M37.5433 7.73594C36.6493 6.84193 35.1944 6.84193 34.3004 7.73594C34.1777 7.85865 34.0725 7.99888 33.9848 8.13912C33.7044 8.57736 33.2661 8.82277 32.7578 8.82277H32.4598C31.9689 8.82277 31.5307 8.59489 31.2678 8.19171C31.1801 8.03394 31.0574 7.89371 30.9347 7.75347C30.812 7.63076 30.6718 7.50806 30.514 7.42041C30.0933 7.13994 29.8479 6.7017 29.8479 6.21087V5.94793C29.8479 5.43957 30.0933 5.00133 30.5315 4.72086C30.6718 4.63321 30.812 4.52803 30.9347 4.40533C31.8287 3.51132 31.8287 2.05637 30.9347 1.16236C30.0407 0.268355 28.5857 0.268355 27.6917 1.16236C27.569 1.28507 27.4638 1.4253 27.3762 1.56554C27.0957 2.00378 26.6575 2.24919 26.1491 2.24919H25.8511C25.3603 2.24919 24.9396 2.02131 24.6591 1.61813C24.5715 1.46036 24.4488 1.3026 24.3085 1.16236C23.9229 0.776711 23.4145 0.548827 22.9062 0.496239C22.836 0.496239 22.7484 0.478709 22.6783 0.478709C22.0823 0.478709 21.5038 0.706593 21.048 1.14483C20.8903 1.3026 20.75 1.49542 20.6449 1.68825C20.3644 2.03884 19.9787 2.21413 19.523 2.21413H19.225C18.7166 2.21413 18.2784 1.96872 17.9979 1.53048C17.9102 1.39025 17.8051 1.25001 17.6824 1.1273C17.1389 0.636475 16.4553 0.408591 15.8067 0.478709C15.2983 0.531298 14.79 0.741652 14.4043 1.14483C14.2816 1.26754 14.1765 1.40777 14.0888 1.54801C13.8083 1.98625 13.3701 2.23166 12.8617 2.23166H12.5637C12.143 2.23166 11.7749 2.0739 11.512 1.7759C11.4068 1.54801 11.2665 1.33766 11.0737 1.16236C10.618 0.706593 10.0219 0.478709 9.42594 0.496239C8.81241 0.46118 8.21641 0.671534 7.76064 1.1273C7.56781 1.32013 7.42758 1.53048 7.3224 1.74084C7.05946 2.03884 6.69134 2.1966 6.27063 2.1966H5.97262C5.46427 2.1966 5.02603 1.95119 4.74556 1.51295C4.65791 1.37272 4.55273 1.23248 4.43002 1.10977C3.53602 0.233296 2.08106 0.233296 1.16953 1.1273C0.275522 2.02131 0.275522 3.47626 1.16953 4.37027C2.06354 5.26427 3.51849 5.26427 4.41249 4.37027C4.5352 4.24756 4.64038 4.10732 4.72803 3.96709C5.0085 3.52885 5.44674 3.28344 5.95509 3.28344H6.2531C6.67381 3.28344 7.04193 3.4412 7.30487 3.7392C7.41005 3.96709 7.55028 4.17744 7.74311 4.35274C7.9184 4.52803 8.12876 4.6858 8.35664 4.79098C8.6897 5.07145 8.865 5.4571 8.88253 5.89534V6.15828C8.88253 6.66664 8.63712 7.10488 8.19888 7.38535C8.05864 7.473 7.9184 7.57817 7.7957 7.70088C6.90169 8.59489 6.90169 10.0498 7.7957 10.9438C8.6897 11.8379 10.1447 11.8379 11.0387 10.9438C11.1614 10.8211 11.2665 10.6809 11.3542 10.5407C11.6347 10.1024 12.0729 9.85701 12.5813 9.85701H12.8793C13.3 9.85701 13.6681 10.0148 13.931 10.3128C13.9836 10.4004 14.0187 10.4881 14.0713 10.5757C14.1589 10.716 14.2641 10.8387 14.3868 10.9614C14.5095 11.0841 14.6497 11.1893 14.79 11.2769C15.2282 11.5574 15.4736 11.9956 15.4736 12.504V12.802C15.4736 13.3103 15.2282 13.7486 14.79 14.029C14.6497 14.1167 14.5095 14.2219 14.3868 14.3446C13.8784 14.8529 13.6681 15.5366 13.7207 16.2027C13.7733 16.7111 13.9836 17.2194 14.3868 17.6051C14.5095 17.7278 14.6497 17.833 14.79 17.9206C15.2282 18.2011 15.4736 18.6393 15.4736 19.1477V19.4457C15.4736 19.954 15.2282 20.3923 14.79 20.6727C14.6497 20.7604 14.5095 20.8656 14.3868 20.9883C13.8784 21.4966 13.6681 22.1803 13.7207 22.8464C13.7733 23.3548 13.9836 23.8631 14.3868 24.2488C14.5095 24.3715 14.6497 24.4767 14.79 24.5643C15.2282 24.8448 15.4736 25.283 15.4736 25.7914V26.0894C15.4736 26.5977 15.2282 27.036 14.79 27.3164C14.6497 27.4041 14.5095 27.5093 14.3868 27.632C13.4928 28.526 13.4928 29.9809 14.3868 30.8749C15.2808 31.7689 16.7358 31.7689 17.6298 30.8749C18.5238 29.9809 18.5238 28.526 17.6298 27.632C17.5071 27.5093 17.3668 27.4041 17.2266 27.3164C16.7884 27.036 16.5429 26.5977 16.5429 26.0894V25.7914C16.5429 25.283 16.7884 24.8448 17.2266 24.5643C17.3668 24.4767 17.5071 24.3715 17.6298 24.2488C17.7525 24.1261 17.8577 23.9858 17.9453 23.8456C18.2258 23.4074 18.664 23.1619 19.1724 23.1619H19.4353C19.9437 23.1619 20.3819 23.4074 20.6624 23.8456C20.75 23.9858 20.8552 24.1261 20.9779 24.2488C21.8719 25.1428 23.3269 25.1428 24.2209 24.2488C25.1149 23.3548 25.1149 21.8998 24.2209 21.0058C24.0982 20.8831 23.9579 20.7779 23.8177 20.6903C23.3795 20.4098 23.134 19.9716 23.134 19.4632V19.1652C23.134 18.6568 23.3795 18.2186 23.8177 17.9381C23.9579 17.8505 24.0982 17.7453 24.2209 17.6226C24.6766 17.1668 24.887 16.5884 24.887 15.9924C24.887 15.3963 24.6591 14.8179 24.2209 14.3621C24.0982 14.2394 23.9579 14.1342 23.8177 14.0466C23.3795 13.7661 23.134 13.3279 23.134 12.8195V12.5215C23.134 12.0131 23.3795 11.5749 23.8177 11.2944C23.9579 11.2068 24.0982 11.1016 24.2209 10.9789C24.3611 10.8387 24.4663 10.6984 24.5715 10.5407C24.8519 10.12 25.2902 9.87454 25.7985 9.87454H26.0965C26.5874 9.87454 27.0081 10.1024 27.2885 10.5056C27.3762 10.6634 27.4989 10.8211 27.6391 10.9614C28.0949 11.4171 28.6734 11.6275 29.2694 11.6275C29.8654 11.6275 30.4439 11.3996 30.8996 10.9614C31.0399 10.8211 31.145 10.6634 31.2502 10.5056C31.5307 10.1024 31.9514 9.87454 32.4422 9.87454H32.7402C33.2486 9.87454 33.6868 10.12 33.9673 10.5582C34.055 10.6984 34.1601 10.8387 34.2828 10.9614C35.1768 11.8554 36.6318 11.8554 37.5258 10.9614C38.4373 10.0849 38.4373 8.62995 37.5433 7.73594ZM15.4736 6.19334C15.4736 6.7017 15.2282 7.13994 14.79 7.42041C14.6497 7.50806 14.5095 7.61323 14.3868 7.73594C14.2466 7.87618 14.1239 8.03394 14.0187 8.20924C14.0187 8.20924 14.0187 8.22677 14.0012 8.22677C13.9661 8.29689 13.8609 8.45465 13.633 8.59489C13.4227 8.73512 13.1597 8.80524 12.8793 8.80524H12.5813C12.0729 8.80524 11.6347 8.55983 11.3542 8.12159C11.2665 7.98135 11.1614 7.84112 11.0387 7.71841C10.916 7.5957 10.7757 7.49053 10.6355 7.40288C10.1972 7.12241 9.95183 6.68417 9.95183 6.17581V5.91287C9.95183 5.40451 10.1972 4.96627 10.6355 4.6858C10.7757 4.59815 10.916 4.49297 11.0387 4.37027C11.2315 4.17744 11.3717 3.98462 11.4769 3.75673C11.7398 3.45873 12.108 3.30097 12.5287 3.30097H12.8267C13.335 3.30097 13.7733 3.54638 14.0537 3.98462C14.1414 4.12485 14.2466 4.26509 14.3693 4.3878C14.492 4.5105 14.6322 4.61568 14.7725 4.70333C15.2107 4.9838 15.4561 5.42204 15.4561 5.9304L15.4736 6.19334ZM21.4162 20.7253C21.2759 20.813 21.1357 20.9182 21.013 21.0409C20.8903 21.1636 20.7851 21.3038 20.6974 21.444C20.417 21.8823 19.9787 22.1277 19.4704 22.1277H19.2074C18.6991 22.1277 18.2608 21.8823 17.9804 21.4616C17.8927 21.3213 17.7875 21.1811 17.6473 21.0409C17.5246 20.9182 17.3844 20.813 17.2441 20.7253C16.8059 20.4449 16.5605 20.0066 16.5605 19.4983V19.2003C16.5605 18.6919 16.8059 18.2537 17.2441 17.9732C17.3844 17.8855 17.5246 17.7804 17.6473 17.6577C17.77 17.535 17.8752 17.3947 17.9628 17.2545C18.2433 16.8162 18.6815 16.5708 19.1899 16.5708H19.4528C19.9612 16.5708 20.3994 16.8162 20.6799 17.237C20.7676 17.3772 20.8727 17.5174 21.013 17.6401C21.1357 17.7628 21.2759 17.868 21.4162 17.9557C21.8544 18.2361 22.0998 18.6744 22.0998 19.1827V19.4807C22.0823 20.0066 21.8369 20.4449 21.4162 20.7253ZM21.4162 14.0816C21.2759 14.1693 21.1357 14.2745 21.013 14.3972C20.8903 14.5199 20.7851 14.6601 20.6974 14.8003C20.417 15.2386 19.9787 15.484 19.4704 15.484H19.2074C18.6991 15.484 18.2608 15.2386 17.9804 14.8179C17.8927 14.6776 17.7875 14.5374 17.6473 14.3972C17.5246 14.2745 17.3844 14.1693 17.2441 14.0816C16.8059 13.8012 16.5605 13.3629 16.5605 12.8546V12.5566C16.5605 12.0482 16.8059 11.61 17.2441 11.3295C17.3844 11.2418 17.5246 11.1367 17.6473 11.014C17.6999 10.9614 17.7349 10.9088 17.7875 10.8562C17.8752 10.751 17.9628 10.6458 18.0329 10.5231C18.3134 10.1375 18.7166 9.92713 19.2074 9.92713H19.4704C19.9787 9.92713 20.417 10.1725 20.6974 10.5933C20.7851 10.7335 20.8903 10.8737 21.0305 11.014C21.1532 11.1367 21.2934 11.2418 21.4337 11.3295C21.8719 11.61 22.1173 12.0482 22.1173 12.5566V12.8546C22.0823 13.3805 21.8369 13.8187 21.4162 14.0816ZM21.8369 7.03476C21.7317 7.17499 21.5914 7.2977 21.4337 7.40288C21.2934 7.49053 21.1532 7.5957 21.013 7.73594C20.8903 7.85865 20.7851 7.99888 20.6974 8.13912C20.417 8.57736 19.9787 8.82277 19.4704 8.82277H19.1724C18.8218 8.82277 18.5062 8.70007 18.2608 8.50724C18.1732 8.41959 18.0855 8.27936 18.0329 8.20924C18.0329 8.19171 18.0154 8.19171 18.0154 8.17418C18.0154 8.15665 18.0154 8.15665 18.0154 8.15665C17.9278 8.01641 17.8226 7.87618 17.6999 7.75347C17.5246 7.57817 17.3142 7.42041 17.0864 7.31523C16.7533 7.03476 16.5605 6.64911 16.5605 6.19334V5.9304C16.5605 5.42204 16.8059 4.9838 17.2266 4.70333C17.3668 4.61568 17.5071 4.5105 17.6473 4.37027C17.77 4.24756 17.8752 4.10732 17.9628 3.96709C18.2433 3.52885 18.6815 3.28344 19.1899 3.28344H19.4879C19.9437 3.28344 20.3293 3.47626 20.6098 3.80932C20.715 4.00215 20.8552 4.19497 21.013 4.35274C21.1357 4.47544 21.2759 4.58062 21.4162 4.66827C21.8544 4.94874 22.0998 5.38698 22.0998 5.89534V6.19334C22.0823 6.5264 21.9946 6.80687 21.8369 7.03476ZM28.726 6.19334C28.726 6.7017 28.4806 7.13994 28.0423 7.42041C27.9021 7.50806 27.7618 7.61323 27.6391 7.73594C27.4989 7.87618 27.3937 8.01641 27.3061 8.17418C27.0256 8.57736 26.6049 8.80524 26.1141 8.80524H25.8161C25.3077 8.80524 24.8695 8.55983 24.589 8.12159C24.5013 7.98135 24.3962 7.84112 24.2735 7.71841C24.1508 7.5957 24.0105 7.49053 23.8703 7.40288C23.432 7.12241 23.1866 6.68417 23.1866 6.17581V5.91287C23.1866 5.40451 23.432 4.96627 23.8703 4.6858C24.0105 4.59815 24.1508 4.49297 24.2735 4.37027C24.4137 4.23003 24.5189 4.07227 24.6241 3.9145C24.9045 3.51132 25.3252 3.28344 25.8161 3.28344H26.1141C26.6224 3.28344 27.0607 3.52885 27.3411 3.96709C27.4288 4.10732 27.534 4.24756 27.6567 4.37027C27.7794 4.49297 27.9196 4.59815 28.0598 4.6858C28.4981 4.96627 28.7435 5.40451 28.7435 5.91287L28.726 6.19334Z"
			clipRule="evenodd"
		/>
		<path
			fillRule="evenodd"
			d="M2.44892 10.6277C3.16518 10.6277 3.74581 10.0471 3.74581 9.33083C3.74581 8.61458 3.16518 8.03394 2.44892 8.03394C1.73267 8.03394 1.15204 8.61458 1.15204 9.33083C1.15204 10.0471 1.73267 10.6277 2.44892 10.6277Z"
			clipRule="evenodd"
		/>
		<path
			fillRule="evenodd"
			d="M22.4501 30.5939C23.1664 30.5939 23.747 30.0133 23.747 29.297C23.747 28.5808 23.1664 28.0001 22.4501 28.0001C21.7339 28.0001 21.1533 28.5808 21.1533 29.297C21.1533 30.0133 21.7339 30.5939 22.4501 30.5939Z"
			clipRule="evenodd"
		/>
		<path
			fillRule="evenodd"
			d="M35.8076 3.87885C36.5239 3.87885 37.1045 3.29821 37.1045 2.58196C37.1045 1.86571 36.5239 1.28507 35.8076 1.28507C35.0914 1.28507 34.5107 1.86571 34.5107 2.58196C34.5107 3.29821 35.0914 3.87885 35.8076 3.87885Z"
			clipRule="evenodd"
		/>
	</svg>
);

export const PersonDiggingIcon: (
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => JSX.Element = props => (
	<svg fill="currentColor" viewBox="0 0 576 512" {...props}>
		<path
			fillRule="evenodd"
			d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"
			clipRule="evenodd"
		/>
	</svg>
);

export const GraduationCap: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element = props => (
	<svg fill="currentColor" viewBox="0 0 640 512" {...props}>
		<path
			fillRule="evenodd"
			d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
			clipRule="evenodd"
		/>
	</svg>
);

export const ChalkboardUser: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element = props => (
	<svg fill="currentColor" viewBox="0 0 640 512" {...props}>
		<path
			fillRule="evenodd"
			d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"
			clipRule="evenodd"
		/>
	</svg>
);
