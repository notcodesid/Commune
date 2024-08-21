import { Leftside } from "@/app/components/leftside";
import { MainFeed } from "@/app/components/mainfeed";
import ProfileHeader from "@/app/components/profileHeader";
import { SuggestedFriend } from "@/app/components/suggestedFriend";

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