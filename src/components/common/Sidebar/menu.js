import { Home } from "react-feather";
export const menuitems = [
  {
    title: "Dashboard",
    icon: "home",
    type: "link",
    path: "/Dashboard",
    badgeType: "primary",
    active: false
  },
  {
    title: "Detection",
    icon: "address-card",
    type: "link",
    path: "/detection",
    badgeType: "primary",
    active: true,
    modelName: "detection",
    displayModelName: "Detection",
    alwaysShow: false
  },
  {
    title: "Motorbike",
    icon: "ambulance",
    type: "link",
    path: "/motorbike",
    badgeType: "primary",
    active: false,
    modelName: "motorbike",
    displayModelName: "Motorbike",
    alwaysShow: false
  },
  {
    title: "User",
    icon: "address-book",
    type: "link",
    path: "/user",
    badgeType: "primary",
    active: false,
    modelName: "user",
    displayModelName: "User",
    alwaysShow: false
  }
];
