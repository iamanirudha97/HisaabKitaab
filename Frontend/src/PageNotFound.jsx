import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

const PageNotFound = () => {
  return (
    <Card className="flex flex-row min-h-screen justify-center items-center">
        <CardContent>
            <CardTitle>  Page not Found  </CardTitle>
        </CardContent>
    </Card>
  )
}

export default PageNotFound