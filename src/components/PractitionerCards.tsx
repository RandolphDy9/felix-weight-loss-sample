"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface Practitioner {
  id: number | string
  name: string
  position: string
  gender: string
  photo: string
}

function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsInView(entry.isIntersecting)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      ...options,
    })

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [callback, options])

  return [ref, isInView] as const
}

export default function PractitionerCards({ practitioners }: { practitioners: Practitioner[] }) {
  const [scrollY, setScrollY] = useState(0)
  const [initialScrollY, setInitialScrollY] = useState(0)
  const [ref, isInView] = useInView()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isInView && initialScrollY === 0) {
      setInitialScrollY(scrollY)
    }
  }, [isInView, scrollY, initialScrollY])

  if (!practitioners || !Array.isArray(practitioners) || practitioners.length === 0) {
    return (
      <section className="py-16 px-4">
        <div className="mx-auto text-center">
          <p>No practitioners available</p>
        </div>
      </section>
    )
  }

  const scrollDistance = isInView ? scrollY - initialScrollY : 0
  const firstRowTransform = isInView ? scrollDistance * 0.5 : 0
  const secondRowTransform = isInView ? scrollDistance * 0.3 : 0

  const firstRowPractitioners = practitioners.slice(0, 4)
  const secondRowPractitioners = practitioners.slice(4, 8)

  // Create infinite arrays by duplicating the practitioners
  const createInfiniteArray = (array: Practitioner[], copies: number = 3) => {
    const result = []
    for (let i = 0; i < copies; i++) {
      result.push(...array.map(p => ({ ...p, id: `${p.id}-${i}` })))
    }
    return result
  }

  const infiniteFirstRow = createInfiniteArray(secondRowPractitioners, 5)
  const infiniteSecondRow = createInfiniteArray(firstRowPractitioners, 5)

  return (
    <section ref={ref} className="py-16 px-4 overflow-hidden">
      <div className="mx-auto">
        {/* First Row - Infinite scroll to the left */}
        <div className="relative mb-8">
          <div
            className="flex gap-6 justify-center w-full"
            style={{
              transform: `translateX(-${firstRowTransform}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {infiniteFirstRow.map((practitioner) => (
              <PractitionerCard key={practitioner.id} practitioner={practitioner} />
            ))}
          </div>
        </div>

        {/* Second Row - Infinite scroll to the right */}
        <div className="relative">
          <div
            className="flex gap-6 justify-center w-full"
            style={{
              transform: `translateX(${secondRowTransform}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {infiniteSecondRow.map((practitioner) => (
              <PractitionerCard key={practitioner.id} practitioner={practitioner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PractitionerCard({ practitioner }: { practitioner: Practitioner }) {
  return (
    <Card className="flex-shrink-0 w-80 p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6">
          <Image
            src={practitioner.photo}
            alt={`${practitioner.name} profile`}
            width={100}
            height={100}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <h3 className="text-xl font-semibold text-slate-800">
          {practitioner.name}
        </h3>

        <p className="text-slate-400">
          {practitioner.position}, {practitioner.gender}
        </p>
      </div>
    </Card>
  )
}
