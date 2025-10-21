'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { Bell, BookOpen, Home, Package, ShoppingCart, Users, Settings } from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

const adminNavItems = [
  { href: '/admin', icon: Home, label: 'Dashboard' },
  { href: '/admin/books', icon: Package, label: 'Books' },
  { href: '/admin/categories', icon: ShoppingCart, label: 'Categories' },
  { href: '/admin/users', icon: Users, label: 'Users' },
];

function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const isAdmin = sessionStorage.getItem('isAdminAuthenticated') === 'true';
      if (!isAdmin) {
        router.replace('/admin/login');
      }
    }
  }, [isClient, pathname, router]);

  if (!isClient) {
    return (
       <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
           <Skeleton className="h-10 w-48" />
           <Skeleton className="h-screen w-full" />
        </div>
      </div>
    );
  }
  
    const isAdmin = isClient && sessionStorage.getItem('isAdminAuthenticated') === 'true';

    if (!isAdmin) {
        return null;
    }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="size-6 text-sidebar-primary" />
            <span className="text-lg font-semibold font-headline">Admin Panel</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {adminNavItems.map(item => (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    icon={item.icon}
                    tooltip={item.label}
                  >
                    {item.label}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2">
            <Avatar className="size-8">
                <AvatarImage src="https://picsum.photos/seed/admin/100/100" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="text-sm font-semibold">Admin User</span>
                <span className="text-xs text-muted-foreground">admin@kitaba.com</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center justify-between border-b bg-background px-4 lg:px-6">
            <SidebarTrigger className="md:hidden"/>
            <div className="flex-1 text-right">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>
                 <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </Button>
            </div>
        </header>
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}


export default function AdminLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    return <AdminDashboardLayout>{children}</AdminDashboardLayout>;
}
