'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import styles from './TableOfContents.module.css'

export function TableOfContents() {
  const [entries, setEntries] = useState<string[]>([])

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3')
    setEntries(Array.from(headings).map(heading => heading.textContent || ''))
  }, [])

  return (
    <>
      <nav className={styles["table-of-contents"]}>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <Link href={`#${entry.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s/g, '-')}`}>
                {entry}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
