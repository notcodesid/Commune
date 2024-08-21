import { FriendRequest } from "./friendRequest";
import { SuggestedFriend } from "./suggestedFriend";

export function RightSide() {
    return (
        <aside className="w-full  p-4 hidden lg:block">
            <div>
        <FriendRequest />
            </div>
            <div className="mt-10">
        <SuggestedFriend />
            </div>
      </aside>
    )
}