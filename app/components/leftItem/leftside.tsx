import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { BellIcon, HomeIcon, MessageSquareIcon, UserIcon } from "lucide-react";


export function Leftside() {
    return (
<Card className="mt-5 ml-3 w-full max-w-md bg-white shadow-md overflow-hidden rounded-xl">
      <div className="relative">
        <img 
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Cover image" 
          className="w-full h-24 object-cover"
        />
        <Avatar className="w-20 h-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white">
          <AvatarImage src="https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Robert Fox" />
          <AvatarFallback>RF</AvatarFallback>
        </Avatar>
      </div>
      <CardContent className="pt-14 pb-6 px-6">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-xl font-semibold">Robert Fox</h2>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>

{/* nav item */}
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <HomeIcon className="w-5 h-5 mr-3" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <UserIcon className="w-5 h-5 mr-3" />
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <MessageSquareIcon className="w-5 h-5 mr-3" />
                Messages
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                <BellIcon className="w-5 h-5 mr-3" />
                Notifications
              </a>
            </li>
          </ul>
        </nav>

        <nav>
            
        </nav>
      </CardContent>
    </Card>

)
}