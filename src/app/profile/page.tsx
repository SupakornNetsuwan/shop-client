"server only";
import React from "react";
import { NextPage } from "next";
import { UserCircle2 } from "lucide-react";
import { Separator } from "@/core/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/core/components/ui/table";
import ProfileDetail from "./_resources/components/ProfileDetail";
import ProfileConfigureAction from "./_resources/components/ProfileConfigureAction";
import CashConfigureAction from "./_resources/components/CashConfigureAction";

const page: NextPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <UserCircle2
            className="box-content rounded-lg bg-slate-100 p-1"
            size={28}
          />
          <h2 className="text-2xl font-medium text-slate-800">
            Manage Account
          </h2>
        </div>
        <div className="flex gap-2">
          <CashConfigureAction />
          <ProfileConfigureAction />
        </div>
      </div>
      <Separator orientation="horizontal" className="my-6" />
      <div className="flex flex-col space-y-4">
        <ProfileDetail topic="Name">
          <div className="flex gap-2 text-slate-500">
            <p>Supakorn</p>
            <p>Netsuwan</p>
          </div>
        </ProfileDetail>
        <ProfileDetail topic="Email">
          <p className="text-slate-500">64070108@kmitl.ac.th</p>
        </ProfileDetail>
        <ProfileDetail topic="Address">
          <Table className="text-base font-normal text-slate-500">
            <TableBody>
              <TableRow>
                <TableCell className="pl-2">Province</TableCell>
                <TableCell>Bangkok</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-2">District</TableCell>
                <TableCell>Saphan Sung</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-2">Sub District</TableCell>
                <TableCell>Saphan Sung</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-2">Post Number</TableCell>
                <TableCell>10240</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-2">More Detail</TableCell>
                <TableCell className="[text-wrap:balance;]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, excepturi?
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ProfileDetail>
      </div>
    </>
  );
};

export default page;
