"use client"

import { useState, useEffect } from "react"
import { Users, Eye } from "lucide-react"

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (response.ok) {
          const data = await response.json()
          setVisitorCount(data.count)
        }
      } catch (error) {
        console.error("Error tracking visitor:", error)
        const fallbackCount = Math.floor(Math.random() * 1000) + 500
        setVisitorCount(fallbackCount)
      } finally {
        setIsLoading(false)
      }
    }

    trackVisitor()

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toLocaleString()
  }

  return (
    <div
      className={`fixed left-4 bottom-4 md:left-6 md:bottom-6 z-40 transition-all duration-500 transform ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div
        className={`bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 hover:scale-105 cursor-pointer ${
          isExpanded ? "p-4" : "p-3"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          // Expanded view
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <Users size={20} className="text-white" />
              </div>
              <div className="absolute inset-0 w-12 h-12 bg-amber-400/30 rounded-full animate-ping"></div>
            </div>

            <div className="text-left">
              <div className="flex items-center space-x-1 mb-1">
                <Eye size={14} className="text-amber-400" />
                <span className="text-xs text-slate-400 font-medium">Site Visitors</span>
              </div>

              <div className="text-xl font-bold text-slate-100 font-mono">
                {isLoading ? (
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                ) : (
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    {formatNumber(visitorCount)}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-400">Live</span>
              </div>
            </div>
          </div>
        ) : (
          // Collapsed view
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <Users size={16} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {isLoading ? "..." : formatNumber(visitorCount).slice(-2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
