import { db } from "@/lib/db";

const getUsers = unstable_cache(
  async () => {
    return db.user.findMany();
  },
  ["users"],
  { revalidate: 60 },
);
