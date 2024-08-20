import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Leftside } from "../components/leftside";
import { MainFeed } from "../components/mainfeed";
import { Stories } from "../components/stories";
import { Addpost } from "../components/Addpost";
import { RightSide } from "../components/rightside";

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="hidden xl:block w-[20%]"> <Leftside /> </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div>
          <Stories />
          <Addpost />
          <MainFeed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] ">
        <RightSide />
      </div>
      </div>
  )
}