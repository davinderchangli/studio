import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <h3 className="font-semibold text-foreground">1. Terms</h3>
            <p>By accessing the website at Kitaba Di Dunia, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            
            <h3 className="font-semibold text-foreground">2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Kitaba Di Dunia's website for personal, non-commercial transitory viewing only.</p>
            
            <h3 className="font-semibold text-foreground">3. Disclaimer</h3>
            <p>The materials on Kitaba Di Dunia's website are provided on an 'as is' basis. Kitaba Di Dunia makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h3 className="font-semibold text-foreground">4. Limitations</h3>
            <p>In no event shall Kitaba Di Dunia or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kitaba Di Dunia's website.</p>
            
            <h3 className="font-semibold text-foreground">5. Governing Law</h3>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the land and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
