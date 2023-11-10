import React from "react";

const ProfileDetail: React.FC<{ children: React.ReactNode; topic: string }> = ({
  children,
  topic
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium text-slate-800">{topic}</h3>
      {children}
    </div>
  );
};

export default ProfileDetail;
