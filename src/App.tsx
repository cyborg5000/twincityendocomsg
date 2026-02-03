import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Twin City Endo</h1>
          <p className="text-muted-foreground text-lg">
            React + Vite + TypeScript + shadcn/ui
          </p>
        </div>

        <div className="flex gap-2">
          <Badge variant="default">React 18</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
          <Badge variant="outline">shadcn/ui</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>
              Your new project is ready for development.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Count: {count}
            </p>
            <Button onClick={() => setCount(c => c + 1)}>
              Increment
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Development</CardTitle>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted p-2 rounded block">
                npm run dev
              </code>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Build</CardTitle>
            </CardHeader>
            <CardContent>
              <code className="text-sm bg-muted p-2 rounded block">
                npm run build
              </code>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App