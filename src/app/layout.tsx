import type { Metadata } from 'next'

import '@aws-amplify/ui-react/styles.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'CSS キーフレームアニメーター',
  description: 'CSSのキーフレームアニメーションを作る',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
