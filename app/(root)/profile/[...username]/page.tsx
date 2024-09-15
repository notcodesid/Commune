import { Leftside } from "@/app/components/leftItem/leftside";
import { MainFeed } from "@/app/components/Feed/mainfeed";
import ProfileHeader from "@/app/components/profiIe/profileHeader";
import { SuggestedFriend } from "@/app/components/rightItem/suggestedFriend";

export default function Profile() {
    return (
        <>
            <div className="flex gap-6">
                <div className="hidden xl:block w-[23%]"  >
                    <Leftside />
                </div>
                <div className="mt-6 w-full xl:w-[70%]" >
                    <ProfileHeader />
                    <MainFeed />
                 
                </div>
            </div>
        </>
    )
}