import { Leftside } from "../components/leftItem/leftside";
import { MainFeed } from "../components/Feed/mainfeed";
import { Stories } from "../components/Feed/stories";
import { Addpost } from "../components/Feed/Addpost";
import { RightSide } from "../components/rightItem/rightside";

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="hidden xl:block w-[23%]"> <Leftside /> </div>
      <div className="w-full lg:w-[70%] xl:w-[45%]">
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