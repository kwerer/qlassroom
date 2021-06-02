import React from "react";
import { Header, Icon, Image, Segment } from "semantic-ui-react";
import logoWhite from "../Images/logoWhite.jpg";
import styles from "./DashboardComponents/styles.module.css";
import SidebarExampleVisible from "./DashboardComponents/SideBar";
import DashboardBanner from "./DashboardComponents/DashboardBanner";

export default function HomeDashboard() {
  return (
    <div style={{ height: "100vh" }}>
      <DashboardBanner />

      <SidebarExampleVisible />
    </div>
  );
}
