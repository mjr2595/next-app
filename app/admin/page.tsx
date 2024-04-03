"use client";

import _ from "lodash";

const AdminHomePage = () => {
  return (
    <>
      <div>Admin HomePage</div>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sortedUsers = _.orderBy(users, ["name"]);
          console.log(sortedUsers);
        }}
      >
        Show
      </button>
    </>
  );
};

export default AdminHomePage;
