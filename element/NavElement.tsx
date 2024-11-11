import { navlist } from "../data/navlist";
import Link from "next/link";

const NavElement = ({
  navigation,
  setNavigation,
}: {
  navigation: boolean;
  setNavigation: (value: boolean) => void;
}) => {
  return (
    <div>
      <div className="lg:flex justify-end items-center gap-6 hidden">
        <ul className="flex items-center gap-6">
          {navlist.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center gap-2 text-[18px] font-[600] leading-[normal] text-[#211F1E]"
            >
              <Link href={item.path}>
                <span>{item.label}</span>
              </Link>
              <button>{item.icon}</button>
            </li>
          ))}
        </ul>
        <Link href={"/contact-us"}>
          <button className="text-[18px] font-[600] leading-[normal] text-white rounded-[25px] bg-second px-[25px] py-[12px] tracking-[1px]">
            Contact Us
          </button>
        </Link>
      </div>
      {navigation ? (
        <div className="absolute lg:hidden bg-white p-5 md:p-10 top-[50px] md:top-[110px] right-0 z-10 w-full">
          <div className="justify-end items-center gap-6">
            <ul className="block items-center gap-6 mb-4 lg:mb-0">
              {navlist.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center gap-2 text-[18px] md:text-[24px] font-[600] leading-[normal] text-[#211F1E] pb-4 md:pb-6"
                >
                  <Link href={item.path}>
                    <span onClick={() => setNavigation(false)}>
                      {item.label}
                    </span>
                  </Link>
                  <button>{item.icon}</button>
                </li>
              ))}
            </ul>
            <Link href={"/contact-us"} onClick={() => setNavigation(false)}>
              <button className="text-[18px] font-[600] leading-[normal] text-white rounded-[25px] bg-second px-[15px] py-[8px] tracking-[1px]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavElement;
