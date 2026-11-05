"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { FaSave } from "react-icons/fa";
import { IoDocumentTextSharp, IoPersonSharp } from "react-icons/io5";
import {
  MdInsertComment,
  MdNoteAdd,
  MdOutlineAnalytics,
  MdPayment,
  MdReportGmailerrorred,
} from "react-icons/md";

import { PiUsersThreeBold } from "react-icons/pi";
import MenueLink from "./MenueLink";

const ManueDeshboard = ({ user }: any) => {
  const pathName = usePathname();

  switch (user?.role) {
    case "user":
      return (
        <>
          <ul className="menu w-full grow py-6">
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/deshboard"}
                route={" My Profile"}
                icon={<IoPersonSharp />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/my-prompt"}
                route={"My Prompts"}
                icon={<IoDocumentTextSharp />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                data-tip="All"
                href={"/auth/saved-prompt"}
                icon={<FaSave />}
                route={"Saved Prompts"}
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/my-reviews"}
                route={"My Reviews"}
                icon={<MdInsertComment />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                route={"Add Prompt"}
                href={"/auth/add-prompt"}
                data-tip="All"
                icon={<MdNoteAdd />}
              ></MenueLink>
            </li>
          </ul>
        </>
      );

    case "creator":
      return (
        <>
          <ul className="menu w-full grow py-6">
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/deshboard"}
                route={" My Profile"}
                icon={<IoPersonSharp />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/my-prompt"}
                route={"My Prompts"}
                icon={<IoDocumentTextSharp />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                route={"Add Prompt"}
                href={"/auth/add-prompt"}
                data-tip="All"
                icon={<MdNoteAdd />}
              ></MenueLink>
            </li>
          </ul>
        </>
      );

    case "admin":
      return (
        <>
          <ul className="menu w-full grow py-6">
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/deshboard"}
                route={" My Profile"}
                icon={<IoPersonSharp />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/admin-analytic"}
                route={"Admin Analytic"}
                icon={<MdOutlineAnalytics />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                data-tip="All"
                href={"/auth/all-prompt"}
                icon={<FaSave />}
                route={"All Prompts"}
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/all-user"}
                route={"All Users"}
                icon={<PiUsersThreeBold />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                href={"/auth/all-payment"}
                route={"All Payment"}
                icon={<MdPayment />}
                data-tip="All"
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                route={"Add Prompt"}
                href={"/auth/add-prompt"}
                data-tip="All"
                icon={<MdNoteAdd />}
              ></MenueLink>
            </li>
            {/* List item */}
            <li>
              <MenueLink
                route={"Report Prompt"}
                href={"/auth/report-prompt"}
                data-tip="All"
                icon={<MdReportGmailerrorred />}
              ></MenueLink>
            </li>
          </ul>
        </>
      );

    default:
      return <div>Deshboard</div>;
  }
};

export default ManueDeshboard;
