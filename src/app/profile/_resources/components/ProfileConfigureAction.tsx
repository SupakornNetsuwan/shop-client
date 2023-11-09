"use client";
import React from "react";
import CustomDialog from "@/core/components/CustomDialog";
import { Button } from "@/core/components/ui/button";
import ProfileFormProvider from "../providers/ProfileFormProvider";
import ProfileForm from "./ProfileForm";
import { Settings } from "lucide-react";

const ProfileConfigureAction = () => {
  return (
    <CustomDialog
      description="Edit your profile configuration"
      title="Configure profile"
      trigger={(open) => (
        <Button
          onClick={open}
          variant="outline"
          size="icon"
          className="text-slate-800"
        >
          <Settings size={24} />
        </Button>
      )}
      body={
        <ProfileFormProvider>
          <ProfileForm />
        </ProfileFormProvider>
      }
    />
  );
};
export default ProfileConfigureAction;
