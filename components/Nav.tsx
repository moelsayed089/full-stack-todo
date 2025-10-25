import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
const Nav = () => {
  return (
    <nav className="container  mt-5 flex items-center justify-between  px-22">
      <div>
        <ModeToggle />
      </div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Nav;
