import {
  Activity,
  CreditCard,
  DollarSign,

  Users,
} from "lucide-react"

import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from "react"
import { ActiveAnalytic } from "../logs/components/ActiveAnalytic"
import ServerInformations from "./components/ServerInformations"

export default function DashboardPage() {
  return (
    <React.Fragment>
      <div className="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Hosts
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Redirection Hosts
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>

          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SSL Certificates</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
          </CardContent>
        </Card>
        <Card >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Containers</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              {/* +201 since last hour */}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 mt-4">
        <div
          className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
        >
          <ServerInformations />
        </div>    
        <Card>
          <CardHeader>
            <CardTitle>Server Info</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="rounded-lg">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">Ubuntu 22.04.4 LTS</h2>
                <p>v22.04 (jammy)</p>
              </div>
              <div className="space-y-2">
             
                <div className="flex justify-between">
                  <span>CPU Mhz</span>
                  <span>2199.830</span>
                </div>
                <div className="flex justify-between">
                  <span>Cache Size</span>
                  <span>512 KB</span>
                </div>
                <div className="flex justify-between">
                  <span>Architecture</span>
                  <span>x86_64</span>
                </div>
                <div className="flex justify-between">
                  <span>Model</span>
                  <span>AMD EPYC 7571</span>
                </div>
                <div className="flex justify-between">
                  <span>Core/Thread</span>
                  <span>1/2</span>
                </div>
                <div className="flex justify-between">
                  <span>RAM</span>
                  <span>4 GB</span>
                </div>                         
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  )
}
