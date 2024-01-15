import { Cookies } from "@/app/common/cookie";

export const init = {
  userInfo: {},
  isLoggedIn: Cookies.hasActiveSession(),
  isShowLoader: false,
};
