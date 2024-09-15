"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "@/components/ui/button"

export function NavAdmin() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/dashboard/db" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants({variant: 'link'})}>
              Database
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/week" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants({variant: 'link'})}>
              Mingguan
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/day" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants({variant: 'link'})}>
              Harian
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/hour" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants({variant: 'link'})}>
              Jam
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/tree" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants({variant: 'link'})}>
              3 Periode
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/nine" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants({variant: 'link'})}>
              9 Periode
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link target="_blank" href="https://skripsi-lake.vercel.app/" legacyBehavior passHref>
            <NavigationMenuLink className={buttonVariants({variant: 'link'})}>
              Peta Klaster
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
