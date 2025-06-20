import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Mail, Phone } from 'lucide-react'

export const Help = () => {
  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Help & Support</h1>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-left">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="q1">
              <AccordionTrigger>How can I reset my password?</AccordionTrigger>
              <AccordionContent>
                Go to settings, click on "Change Password", and follow the instructions.
              </AccordionContent>
            </AccordionItem>
{/* 
            <AccordionItem value="q2">
              <AccordionTrigger>Where can I view my billing details?</AccordionTrigger>
              <AccordionContent>
                You can find your billing history under the "Billing" tab in your profile menu.
              </AccordionContent>
            </AccordionItem> */}

            <AccordionItem value="q3">
              <AccordionTrigger>How do I contact customer support?</AccordionTrigger>
              <AccordionContent>
                You can contact us via email or number available <a href='#contact-us' className='text-blue-800'> here. </a> 
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How do I invite team members to a project?</AccordionTrigger>
              <AccordionContent>
                Navigate to Team, click the "Add Member" button, and select if new user or existing.
              </AccordionContent>
            </AccordionItem>

            {/* <AccordionItem value="q5">
              <AccordionTrigger>Can I export project data?</AccordionTrigger>
              <AccordionContent>
                Yes. Go to your project settings and select "Export Data" to download tasks, timelines, and attachments in CSV or PDF.
              </AccordionContent>
            </AccordionItem> */}

            <AccordionItem value="q6">
              <AccordionTrigger>How do I enable or disable notifications?</AccordionTrigger>
              <AccordionContent>
                Navigate to Settings, go to Notifications section, and toggle the options for email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>What roles can I assign to team members?</AccordionTrigger>
              <AccordionContent>
                You can assign roles like Team Leader, Member, Support, or Custom. Each role has different permissions for managing and viewing project content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8">
              <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
              <AccordionContent>
                {/* Yes, our mobile app is available on both iOS and Android. Search for "ProjectSync" in the app store to download it. */}
                No, mobile app is not yet implemented.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>How do I archive or delete a project?</AccordionTrigger>
              <AccordionContent>
                From the project settings, click "the 3 dots in the project", then choose either "Archive Project" or "Delete Project". Archived projects can be restored later.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>


      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-left">Contact Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground" id='contact-us'>
            <Mail className="w-4 h-4" />
            <span>support@planora.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>+63 912 3456 789</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
