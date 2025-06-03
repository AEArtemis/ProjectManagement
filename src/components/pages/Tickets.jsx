import React from 'react'
import { Button } from '../ui/button'

export const Tickets = () => {
  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
        {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Tickets</h1>
        <div className="flex gap-2">
          <Button>Add Ticket</Button>
        </div>
      </div>
    </div>
  )
}
