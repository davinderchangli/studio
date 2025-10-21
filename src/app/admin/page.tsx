import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee, Package, Users, ShoppingCart } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Total Revenue', value: '₹3,84,472.33', icon: IndianRupee, change: '+20.1% from last month' },
    { title: 'Total Books', value: '12', icon: Package, change: '+2 from last month' },
    { title: 'Total Users', value: '2350', icon: Users, change: '+180.1% from last month' },
    { title: 'Total Orders', value: '+12,234', icon: ShoppingCart, change: '+19% from last month' },
  ];

  return (
    <div>
      <h1 className="mb-6 font-headline text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="mt-8">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Activity feed will be shown here.</p>
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
