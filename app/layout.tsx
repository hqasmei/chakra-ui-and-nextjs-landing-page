"use client"
import { ChakraProvider } from "@chakra-ui/react"

import WithSubnavigation from "@/components/Navbar"
import SmallWithSocial from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ChakraProvider>
          <div>
            <WithSubnavigation />
            {children}
            <SmallWithSocial/>
          </div>
        </ChakraProvider>
      </body>
    </html>
  )
}
