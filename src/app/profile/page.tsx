"server only";
export const revalidate = 0;
import React from "react";
import { NextPage } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/core/components/ui/table";
import ProfileDetail from "./_resources/components/ProfileDetail";
import getUserInfo from "@/core/libs/functions/getUserInfo";

const page: NextPage = async () => {
  const userInfo = await getUserInfo();
  const data = userInfo.data;

  return (
    <>
      <div className="relative flex flex-col space-y-4 rounded-md bg-gradient-to-br from-slate-50 to-transparent p-12">
        <ProfileDetail topic="Name">
          <div className="flex gap-2 text-slate-500">
            <p>{data.info.first_name}</p>
            <p>{data.info.last_name}</p>
          </div>
        </ProfileDetail>
        <ProfileDetail topic="Email">
          <p className="text-slate-500">{data.email}</p>
        </ProfileDetail>
        <ProfileDetail topic="Address">
          <Table className="text-base  font-normal text-slate-500">
            <TableBody>
              <TableRow>
                <TableCell className="pl-2">Province</TableCell>
                <TableCell>{data.info.address.province}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-2">District</TableCell>
                <TableCell>{data.info.address.amphur}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-2">Sub District</TableCell>
                <TableCell>{data.info.address.tambon}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-2">Post Number</TableCell>
                <TableCell>{data.info.address.postalcode}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-2">More Detail</TableCell>
                <TableCell className="[text-wrap:balance;]">
                  {data.info.address.more}
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
