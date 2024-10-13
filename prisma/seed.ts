import { prisma } from "./prisma-client";

async function up() {
  await prisma.category.createMany({
    data: [
      {
        title: "TV",
        imageUrl: "/seed/TV.svg",
        type: "Products",
      },
      {
        title: "IT",
        imageUrl: "/seed/IT.svg",
        type: "Products",
      },
      {
        title: "Phones",
        imageUrl: "/seed/Phones.svg",
        type: "Products",
      },
      {
        title: "Audio",
        imageUrl: "/seed/Audio.svg",
        type: "Products",
      },
      {
        title: "Appliances",
        imageUrl: "/seed/Household.svg",
        type: "Products",
      },
      {
        title: "Housekeeping",
        imageUrl: "/seed/home-cleaning.svg",
        type: "Products",
      },
      {
        title: "Kitchen",
        imageUrl: "/seed/kitchen.svg",
        type: "Products",
      },
      {
        title: "Beauty & Health",
        imageUrl: "/seed/health.svg",
        type: "Products",
      },
      {
        title: "Entertainment",
        imageUrl: "/seed/Free-time.svg",
        type: "Products",
      },
      {
        title: "Free time",
        imageUrl: "/seed/entertainment.svg",
        type: "Products",
      },
      {
        title: "Hire-Purchase",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M20 3.7002C29 3.7002 36.3 11.0002 36.3 20.0002C36.3 29.0002 29 36.3002 20 36.3002C14.8 36.3002 10.1 33.8002 7.09998 30.0002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M23.2999 12.8004C22.5999 12.6004 21.7999 12.4004 20.9999 12.4004C16.7999 12.4004 13.3999 15.8004 13.3999 20.0004C13.3999 24.2004 16.7999 27.6004 20.9999 27.6004C21.7999 27.6004 22.5999 27.4004 23.2999 27.2004' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M11.7 18.3008H19.9' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M11.7 21.6006H18.4' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M7.29995 33.3L7.19995 30L10.4 30.5' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e",
        type: "Services",
      },
      {
        title: "Techloan",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M6.90003 27.3998C6.90003 27.3998 6.00003 29.3998 5.10003 31.9998C3.20003 37.4998 14.4 41.6998 27.9 33.3998C31.2 31.3998 33.2 28.6998 35.1 26.3998C35.1 26.3998 32.6 22.6998 25.1 30.2998L18 30.5998C17.1 30.5998 16.2 30.3998 15.4 29.9998C14.5 29.4998 13.7 28.6998 13.7 27.3998C19.3 27.3998 20.8 26.3998 20.8 23.2998C12.9 23.2998 8.40003 23.2998 6.90003 27.3998Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M31.1 26.0002C31.1 26.0002 27.2 22.5002 20.2 30.6002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linejoin='round'/%3e %3cpath d='M20 16.5002C24.0869 16.5002 27.4 13.1871 27.4 9.1002C27.4 5.01329 24.0869 1.7002 20 1.7002C15.9131 1.7002 12.6 5.01329 12.6 9.1002C12.6 13.1871 15.9131 16.5002 20 16.5002Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M16.6 9.1998C16.6 9.0998 16.6 8.9998 16.6 8.7998H15.9V7.4998H16.9C17.4 5.9998 18.7 4.7998 21 4.7998C21.5 4.7998 21.9 4.8998 22.3 4.9998L21.8 6.5998C21.6 6.4998 21.2 6.4998 21 6.4998C20 6.4998 19.3 6.8998 18.8 7.5998H21.1L20.9 8.7998H18.4C18.4 8.8998 18.4 9.0998 18.4 9.1998C18.4 9.2998 18.4 9.3998 18.4 9.4998H20.7L20.4 10.7998H18.8C19.4 11.6998 20.5 11.8998 21 11.8998C21.3 11.8998 21.6 11.8998 21.9 11.6998L22.4 13.2998C22 13.3998 21.4 13.4998 21 13.4998C18.8 13.4998 17.4 12.4998 16.8 10.7998H15.9V9.4998H16.6V9.1998Z' fill='%231D428A'/%3e %3c/svg%3e",
        type: "Services",
      },
      {
        title: "Protection",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M2.40002 15.9992C2.40002 13.4992 2.50002 10.7992 2.50002 7.89922C8.30002 6.79922 11.2 7.39922 19.9 1.19922C28.6 7.39922 31.5 6.79922 37.3 7.89922C37.3 20.5992 39.9 28.3992 19.9 38.9992C8.00002 32.6992 4.10002 27.2992 2.90002 21.3992' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M23.2 21.8992H28.9V15.8992H23.2V10.1992H17.2V15.8992H11.5V21.8992H17.2V27.5992H23.2V21.8992Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e",
        type: "Services",
      },
      {
        title: "Trade-in",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9.50002 28.2994C8.70002 27.3994 8.10002 26.2994 7.60002 25.0994L10.2 23.9994L3.00002 20.3994L0.900024 27.9994L3.10002 27.0994C7.10002 36.3994 18 40.6994 27.3 36.6994' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M30.4 11.6993C31.2 12.5993 31.8 13.6993 32.3 14.8993L29.7 15.9993L36.9 19.5993L39 11.9993L36.8 12.8993C32.8 3.59934 21.9 -0.700659 12.6 3.29934' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M26.6 31.0002C26.6 32.2002 25.6 33.3002 24.3 33.3002H15C13.8 33.3002 12.7 32.3002 12.7 31.0002V9.0002C12.7 7.80019 13.7 6.7002 15 6.7002H24.3C25.5 6.7002 26.6 7.7002 26.6 9.0002V31.0002Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round'/%3e %3cpath d='M2.40002 15.1998C3.00002 12.9998 4.00002 10.8998 5.50002 8.89981C6.10002 8.19981 6.70002 7.4998 7.30002 6.7998' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round'/%3e %3cpath d='M37.6001 24.7002C37.0001 26.9002 36 29.0002 34.5 31.0002C34 31.7002 33.4 32.3002 32.8 32.9002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round'/%3e %3cpath d='M19.7 30.3994C20.2522 30.3994 20.7 29.9517 20.7 29.3994C20.7 28.8471 20.2522 28.3994 19.7 28.3994C19.1477 28.3994 18.7 28.8471 18.7 29.3994C18.7 29.9517 19.1477 30.3994 19.7 30.3994Z' fill='%231D428A'/%3e %3c/svg%3e",
        type: "Services",
      },
      {
        title: "Delivery",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M36.4 32.4994H39V24.8994L36.3 20.4994C36.1 20.0994 35.6 19.8994 35.2 19.8994H28.5' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M13.4 32.5H31.8' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M5.09998 26V30.5C5.09998 31.6 5.99998 32.5 7.09998 32.5H8.79998' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M28.3 32.5002C28.3 32.5002 28.3 20.3002 28.3 16.2002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M33.4 25.2998H28.3' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M3.59998 21.0994C3.59998 21.6994 3.99998 22.1994 4.49998 22.3994L13.8 25.8994C14.1 25.9994 14.5 25.9994 14.8 25.8994L24.3 22.3994C24.8 22.1994 25.2 21.6994 25.2 21.0994V10.0994C25.2 9.49941 24.9 8.99941 24.3 8.79941L14.8 5.09941C14.5 4.99941 14.1 4.99941 13.8 5.09941L4.49998 8.89941C3.99998 9.09941 3.59998 9.59941 3.59998 10.1994V21.0994V21.0994Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M3.90002 9.3002L14.4 13.3002L24.8 9.2002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M14.4 25.8998V13.2998' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M9 11.3L19.6 7' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M11.2 35.6994C12.5255 35.6994 13.6 34.6249 13.6 33.2994C13.6 31.9739 12.5255 30.8994 11.2 30.8994C9.87457 30.8994 8.80005 31.9739 8.80005 33.2994C8.80005 34.6249 9.87457 35.6994 11.2 35.6994Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M34.1 35.6994C35.4254 35.6994 36.5 34.6249 36.5 33.2994C36.5 31.9739 35.4254 30.8994 34.1 30.8994C32.7745 30.8994 31.7 31.9739 31.7 33.2994C31.7 34.6249 32.7745 35.6994 34.1 35.6994Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e",
        type: "Services",
      },
      {
        title: "Service",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M27.6001 17.1002L30.7 14.0002C30.7 14.0002 31.9 14.2002 32.5 14.2002C34.9 14.1002 37.0001 12.5002 38.1001 10.4002C38.9001 8.8002 38.9 7.3002 38.5 5.9002C38.4 5.7002 38.2 5.6002 38 5.8002L34.7 9.10019C34.2 9.60019 33.3 9.60019 32.8 9.10019L30.9 7.2002C30.4 6.7002 30.4 5.8002 30.9 5.3002L34.2 2.0002C34.4 1.8002 34.3001 1.6002 34.1001 1.5002C32.9001 1.1002 31.6 1.1002 30.3 1.5002C27.9 2.2002 26.0001 4.4002 25.6001 6.9002C25.5001 7.7002 25.8 9.3002 25.8 9.3002L20.8 14.3002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M17.3 27.5998L14.1999 30.6998C14.1999 30.6998 14.3999 31.8998 14.3999 32.4998C14.2999 34.8998 12.7 36.9998 10.6 38.0998C8.99996 38.8998 7.49996 38.8998 6.09996 38.4998C5.89996 38.3998 5.79995 38.1998 5.99995 37.9998L9.29995 34.6998C9.79995 34.1998 9.79995 33.2998 9.29995 32.7998L7.39995 30.8998C6.89995 30.3998 5.99995 30.3998 5.49995 30.8998L1.99995 34.1998C1.79995 34.3998 1.59995 34.2998 1.49995 34.0998C1.09995 32.8998 1.09995 31.5998 1.49995 30.2998C2.19995 27.8998 4.39995 25.9998 6.89995 25.5998C7.69995 25.4998 9.29995 25.7998 9.29995 25.7998L14.3 20.7998' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M19 16.8002L9.70004 7.5002C9.70004 7.5002 10.1 5.6002 8.80005 4.5002C7.40005 3.4002 4.00005 1.2002 4.00005 1.2002L1.30005 3.9002C1.30005 3.9002 3.50005 7.3002 4.60005 8.7002C5.60005 10.1002 7.60005 9.60019 7.60005 9.60019L18.3 20.3002C18.7 20.7002 19.3001 20.7002 19.6001 20.3002L21.4 18.5002C22.3 17.6002 23.7001 17.6002 24.6001 18.5002L38.3 32.2002C39.1 33.0002 39.1 34.4002 38.3 35.3002L35.4 38.2002C34.6 39.0002 33.2 39.0002 32.3 38.2002L17.8 23.7002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M22.6 22.6006L34.8 34.8006' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e",
        type: "Services",
      },
      {
        title: "Price Guarantee",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M15.3 13.7998C15.3 13.5998 15.3 13.4998 15.3 13.2998H14.2V11.2998H15.6C16.4 8.9998 18.4 7.2998 21.7 7.2998C22.4 7.2998 23 7.3998 23.7 7.5998L22.9 9.89981C22.7 9.79981 22.1 9.6998 21.8 9.6998C20.3 9.6998 19.3 10.2998 18.6 11.2998H22.1L21.7 13.2998H18C18 13.4998 18 13.6998 18 13.8998C18 13.9998 18 14.1998 18 14.2998H21.4L21 16.1998H18.6C19.5 17.4998 21.2 17.7998 21.9 17.7998C22.3 17.7998 22.8 17.6998 23.2 17.5998L24 19.9998C23.4 20.1998 22.6 20.2998 21.9 20.2998C18.6 20.2998 16.5 18.7998 15.7 16.2998H14.3V14.3998H15.3V13.7998Z' fill='%231D428A'/%3e %3cpath d='M23.8 27.2002V29.5002C23.8 29.8002 24.1 30.1002 24.4 30.1002L29 29.7002C29.7 29.6002 30.1 30.5002 29.5 31.0002L20.7 38.1002C20.3 38.4002 19.8 38.4002 19.4 38.1002L10.6 31.0002C9.99996 30.6002 10.4 29.7002 11.1 29.7002L15.7 30.1002C16 30.1002 16.3 29.9002 16.3 29.5002V27.2002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M9.8 19.0002C9 17.4002 8.5 15.6002 8.5 13.7002C8.5 7.3002 13.7 2.2002 20 2.2002C23.2 2.2002 26.1 3.5002 28.1 5.6002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M30.3 8.39941C31.1 9.99941 31.6 11.7994 31.6 13.6994C31.6 20.0994 26.4 25.1994 20.1 25.1994C16.9 25.1994 14 23.8994 12 21.7994' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e",
        type: "Services",
      },
      {
        title: "Gift Card",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M15.3 13.7998C15.3 13.5998 15.3 13.4998 15.3 13.2998H14.2V11.2998H15.6C16.4 8.9998 18.4 7.2998 21.7 7.2998C22.4 7.2998 23 7.3998 23.7 7.5998L22.9 9.89981C22.7 9.79981 22.1 9.6998 21.8 9.6998C20.3 9.6998 19.3 10.2998 18.6 11.2998H22.1L21.7 13.2998H18C18 13.4998 18 13.6998 18 13.8998C18 13.9998 18 14.1998 18 14.2998H21.4L21 16.1998H18.6C19.5 17.4998 21.2 17.7998 21.9 17.7998C22.3 17.7998 22.8 17.6998 23.2 17.5998L24 19.9998C23.4 20.1998 22.6 20.2998 21.9 20.2998C18.6 20.2998 16.5 18.7998 15.7 16.2998H14.3V14.3998H15.3V13.7998Z' fill='%231D428A'/%3e %3cpath d='M23.8 27.2002V29.5002C23.8 29.8002 24.1 30.1002 24.4 30.1002L29 29.7002C29.7 29.6002 30.1 30.5002 29.5 31.0002L20.7 38.1002C20.3 38.4002 19.8 38.4002 19.4 38.1002L10.6 31.0002C9.99996 30.6002 10.4 29.7002 11.1 29.7002L15.7 30.1002C16 30.1002 16.3 29.9002 16.3 29.5002V27.2002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M9.8 19.0002C9 17.4002 8.5 15.6002 8.5 13.7002C8.5 7.3002 13.7 2.2002 20 2.2002C23.2 2.2002 26.1 3.5002 28.1 5.6002' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M30.3 8.39941C31.1 9.99941 31.6 11.7994 31.6 13.6994C31.6 20.0994 26.4 25.1994 20.1 25.1994C16.9 25.1994 14 23.8994 12 21.7994' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e",
        type: "Services",
      },
      {
        title: "Other Services",
        imageUrl:
          "data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.5 8.39981V5.7998C4.5 5.1998 4.9 4.7998 5.5 4.7998H16.8C17.4 4.7998 17.8 5.1998 17.8 5.7998V16.9998C17.8 17.5998 17.4 17.9998 16.8 17.9998H5.5C4.9 17.9998 4.5 17.5998 4.5 16.9998V12.6998' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M32 21.8994H34.6C35.2 21.8994 35.6 22.2994 35.6 22.8994V34.0994C35.6 34.6994 35.2 35.0994 34.6 35.0994H23.3C22.7 35.0994 22.3 34.6994 22.3 34.0994V22.8994C22.3 22.2994 22.7 21.8994 23.3 21.8994H27.6' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M34.6 17.9998H23.3C22.7 17.9998 22.3 17.5998 22.3 16.9998V5.7998C22.3 5.1998 22.7 4.7998 23.3 4.7998H34.5C35.1 4.7998 35.5 5.1998 35.5 5.7998V16.9998C35.6 17.5998 35.1 17.9998 34.6 17.9998Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3cpath d='M16.8 35.0994H5.5C4.9 35.0994 4.5 34.6994 4.5 34.0994V22.8994C4.5 22.2994 4.9 21.8994 5.5 21.8994H16.8C17.4 21.8994 17.8 22.2994 17.8 22.8994V34.0994C17.8 34.6994 17.3 35.0994 16.8 35.0994Z' stroke='%2300178F' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e %3c/svg%3e",
        type: "Services",
      },
    ],
  });
  await prisma.subCategory.createMany({
    data: [
      {
        heading: true,
        title: "TVs",
        categoryId: 1,
      },
      {
        heading: false,
        title: "OLED",
        categoryId: 1,
      },
      {
        heading: false,
        title: "QLED",
        categoryId: 1,
      },
      {
        heading: false,
        title: "LED",
        categoryId: 1,
      },
      {
        heading: false,
        title: '24" to 45"',
        categoryId: 1,
      },
      {
        heading: false,
        title: '46" to 57"',
        categoryId: 1,
      },
      {
        heading: false,
        title: '58" to 68"',
        categoryId: 1,
      },
      {
        heading: false,
        title: 'Over 69"',
        categoryId: 1,
      },
      {
        heading: false,
        title: "Android - Google TV",
        categoryId: 1,
      },
      {
        heading: true,
        title: "TV and home cinema accessories",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Digital tuners",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Media players",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Universal remotes",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Antennas",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Other TV peripherals",
        categoryId: 1,
      },
      {
        heading: true,
        title: "Home cinemas",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Soundbar",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Blu-Ray and DVD players",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Speakers and receivers",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Home cinema projectors",
        categoryId: 1,
      },
      {
        heading: true,
        title: "TV stands and wall mounts",
        categoryId: 1,
      },
      {
        heading: false,
        title: '"For TVs up to 49"',
        categoryId: 1,
      },
      {
        heading: false,
        title: '"For TVs from 50" to 59"',
        categoryId: 1,
      },
      {
        heading: false,
        title: 'For TVs over 60"',
        categoryId: 1,
      },
      {
        heading: true,
        title: "Cables and adapters",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Video cables",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Audio cables",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Adapters",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Extension cords",
        categoryId: 1,
      },
      {
        heading: true,
        title: "Gaming",
        categoryId: 1,
      },
      {
        heading: false,
        title: "PlayStation",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Xbox",
        categoryId: 1,
      },
      {
        heading: false,
        title: "Nintendo Switch",
        categoryId: 1,
      },
    ],
  });
  await prisma.discountImagesForCarousel.createMany({
    data: [
      {
        imageUrl:
          "https://www.euronics.ee/UserFiles/Pictures/9372_EN_EURONICS_Brand_umbrella_YLD_TA_BIG_2560x433px_EE.jpg",
      },
      {
        imageUrl:
          "https://www.euronics.ee/UserFiles/Pictures/9374_EN_EURONICS_Philips_tolmuimeja_9000_TA_BIG_2560x433px_EE.jpg",
      },
      {
        imageUrl:
          "https://www.euronics.ee/UserFiles/Pictures/9381_EN_EURONICS_Xiaomi_14T_NPI_TA_BIG_2560x433px_EE.jpg",
      },
      {
        imageUrl:
          "https://www.euronics.ee/UserFiles/Pictures/9389_EN_EURONICS_SteamOne_aurukeskus_TA_BIG_2560x433px_EE.jpg",
      },
      {
        imageUrl:
          "https://www.euronics.ee/UserFiles/Pictures/9369_EN_EURONICS_AppleWatch10_TA_BIG_2560x433px_EE.jpg",
      },
      {
        imageUrl:
          "https://www.euronics.ee/UserFiles/Pictures/9414_EN_EURONICS_PS5PRO_TA_BIG_2560x433px_EE.jpg",
      },
    ],
  });
  await prisma.news.createMany({
    data: [
      {
        title:
          "Carefully chosen appliances make your kitchen the heart of the home",
        content:
          "The kitchen is a place where tastes and people, fun stories and exciting experiences meet and blend. Well-suited technology plays an important role when designing your dream kitchen.",
        imageUrl:
          "https://www.euronics.ee/UserFiles/News/3207-3192-kook_thumb.jpg",
      },
      {
        title:
          "The TV series based on the much-loved video game The Last of Us premieres on 16 January.",
        content:
          "The first episode of the TV series The Last of Us can be watched on the HBO app in the Telia TV environment.",
        imageUrl:
          "https://www.euronics.ee/UserFiles/News/3476-3450-lastofus_thumb.jpg",
      },
      {
        title: "Top 7 trends from the technology fair CES 2023",
        content:
          "The big technology fair CES 2023 in Las Vegas showed us in many ways the direction in which technical devices will develop this year. We are highlighting seven of the biggest trends among the huge amount of tech news on display at the fair",
        imageUrl:
          "https://www.euronics.ee/UserFiles/News/3479-3449-ces202_thumb.jpg",
      },
    ],
  });
  await prisma.item.create({
    data: {
      title: "Samsung S92D, 65'', 4K UHD, OLED, gray - TV",
      price: 1629,
      imageUrl:
        "https://www.euronics.ee/UserFiles/Products/Images/381753-574738-medium.png",
      screenSize: 65,
      manufacturer: "Samsung",
      energyRating: "F",
      pictureEnhancements: "HDR",
      refreshRate: 144,
      functions: ["Smart TV"],
      description:
        "The Samsung S92D OLED TV offers a top-tier viewing experience, integrating the NQ4 AI Gen2 processor, which supports 4K AI upscaling and OLED technology for deep blacks and vibrant colors. Additionally, it features Samsung's Tizen OS, which expands entertainment options and supports various smart functions. This TV is perfect for watching movies and gaming, thanks to its deep contrast and real-time content optimization.",
      categories: {
        create: [
          {
            subCategory: {
              connect: {
                id: 2,
              },
            },
          },
          {
            subCategory: {
              connect: {
                id: 1,
              },
            },
          },
        ],
      },
    },
  });
  await prisma.item.create({
    data: {
      title: "LG OLED G2, 65'', 4K UHD, OLED, dark gray - TV",
      price: 1399,
      manufacturer: "LG",
      screenSize: 65,
      energyRating: "F",
      pictureEnhancements: "HDR",
      refreshRate: 100,
      imageUrl:
        "https://www.euronics.ee/UserFiles/Products/Images/327435-486371-medium.png",
      description:
        "4K OLED TV G2\n" +
        "\n" +
        "• OLED evo 4K screen technology\n" +
        "• The latest generation α9 Gen5 AI 4K processor\n" +
        "• 100Hz speed and performance\n" +
        "• Dolby Vision and Dolby Atmos\n" +
        "• Gallery design\n" +
        "• Intelligent interface with webOS '22",
      functions: ["Netflix", "Smart TV"],
      categories: {
        create: [
          {
            subCategory: {
              connect: {
                id: 2,
              },
            },
          },
          {
            subCategory: {
              connect: {
                id: 6,
              },
            },
          },
          {
            subCategory: {
              connect: {
                id: 1,
              },
            },
          },
        ],
      },
    },
  });
  await prisma.item.create({
    data: {
      title: "Philips OLED718, 48'', Ultra HD, OLED, feet stand, black - TV",
      price: 969.99,
      manufacturer: "Philips",
      screenSize: 48,
      energyRating: "E",
      refreshRate: 120,
      functions: ["Netflix", "SmartTV", "Apple TV"],
      imageUrl:
        "https://www.euronics.ee/UserFiles/Products/Images/355430-535129-medium.png",
      description:
        "An affordable OLED TV brings you closer to everything you love. You can enjoy lifelike picture quality, experience Dolby Atmos sound, and immerse yourself in the captivating Ambilight halo effect that brings the cinematic experience right into your living room.",
      categories: {
        create: [
          {
            subCategory: {
              connect: {
                id: 2,
              },
            },
          },
          {
            subCategory: {
              connect: {
                id: 1,
              },
            },
          },
        ],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Item" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "SubCategory" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CategoriesOnItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "DiscountImagesForCarousel" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "News" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
