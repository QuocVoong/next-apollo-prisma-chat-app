import { sign } from "jsonwebtoken";
import { TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "./constants";

export const auth = (user: any) => {
  const token = sign({ id: user.id, email: user.email, username: user.username }, TOKEN_SECRET, { expiresIn: "1h" });
  const refreshToken = sign(
    { userId: user.id, count: user.count },
    REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    refreshToken,
  };
};
