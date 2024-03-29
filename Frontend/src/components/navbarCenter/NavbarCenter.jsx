import * as React from "react"
 
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "../ui/navigation-menu"
import { Check } from "lucide-react"
  

const NavbarCenter = () => {
    const navbarContent = [
        {
            title: "Friends",
            desc: "Track your individual expenses with your friends"
        },
        {
            title: "Groups",
            desc: "Check what your groups are upto!!"
        },
        {
            title: "Activity",
            desc: "Check recent activity within your circle"
        }
    ];
  return (
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Your Profile </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
            <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/profile"
                  >
                    <Icons.logo className="h-6 w-6" /> //add user icon
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Your Profile
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      sagarlm10@gmail.com 
                    </p>
                  </a>
                </NavigationMenuLink>
            </li>

            {navbarContent.map((content, idx) => (
                <li key={idx}>
                <NavigationMenuLink asChild>
                  <a
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">{content.title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {content.desc}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
            
        </ul>  
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

)}

export default NavbarCenter