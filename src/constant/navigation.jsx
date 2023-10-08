import { lazy } from "react";
// import App from "../App";
import App from "../App";

const Pages = lazy(async () => import("@pages/Pages"));
const Friends = lazy(async () => import("@pages/Friends"));
const Groups = lazy(async () => import("@pages/Groups"));
const Market = lazy(async () => import("@pages/Marketplace"));
const Settings = lazy(async () => import("@pages/Settings"));
const Profile = lazy(async () => import("@pages/Profile"));

const PAGE_HOME_PATH = "/";
const PAGE_FRIENDS_PATH = "/friends";
const PAGE_GROUP_PATH = "/groups";
const PAGE_MARKET_PATH = "/market";
const PAGE_SETTINGS_PATH = "/settings";
const PAGE_PROFILE_PATH = "/profile";
const PAGE_PAGES_PATH = "/pages";

export const PAGE_HOME = {
  label: "homepage",
  path: PAGE_HOME_PATH,
  element: <App />,
};
export const PAGE_PAGES = {
  label: "pages",
  path: PAGE_PAGES_PATH,
  element: <Pages />,
};
export const PAGE_FRIENDS = {
  label: "friends",
  path: PAGE_FRIENDS_PATH,
  element: <Friends />,
};
export const PAGE_GROUP = {
  label: "groups",
  path: PAGE_GROUP_PATH,
  element: <Groups />,
};

export const PAGE_MARKET = {
  label: "market",
  path: PAGE_MARKET_PATH,
  element: <Market />,
};

export const PAGE_SETTINGS = {
  label: "settings",
  path: PAGE_SETTINGS_PATH,
  element: <Settings />,
};
export const PAGE_PROFILE = {
  label: "profile",
  path: PAGE_PROFILE_PATH,
  element: <Profile />,
};
