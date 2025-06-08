import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Eye, DollarSign, LineChart } from "lucide-react"

export const Analytics = () => {
  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Analytics</h1>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+15% since last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,392</div>
            <p className="text-xs text-muted-foreground">+7% this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="w-5 h-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,450</div>
            <p className="text-xs text-muted-foreground">+10.2% over 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder Chart Card */}
      <Card className="mt-6">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <LineChart className="w-4 h-4" />
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
          {/* You can add a chart here later using ApexCharts, Recharts, or ShadCN-friendly wrapper */}
          <p className="text-sm">Not Yet Implemented</p>
        </CardContent>
      </Card>
    </div>
  )
}
