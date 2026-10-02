"use client";
import { useEffect, useState, useMemo } from "react"
import { animate, useMotionValue } from "motion/react"
import * as motion from "motion/react-client"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

// Theme-aware color configurations
const themes = {
  dark: {
    bg: "#111113",
    containerBg: "#141416",
    underLayerBg: "#101012",
    borderFrom: "#0a0a0b",
    borderVia: "#1a1a1c",
    borderTo: "#252527",
    wellBg: "#0a0a0b",
    innerRingBg: "#0c0c0d",
    buttonBg: "#111113",
    textActive: "text-[#a1fea0]",
    textInactive: "text-[#a1fea0]/65 hover:text-[#a1fea0]",
    iconColor: "text-[#a1fea0] hover:text-[#a1fea0]",
  },
  light: {
    bg: "#f5f5f7",
    containerBg: "#ffffff",
    underLayerBg: "#e8e8ea",
    borderFrom: "#d0d0d5",
    borderVia: "#e5e5e8",
    borderTo: "#f0f0f2",
    wellBg: "#e0e0e3",
    innerRingBg: "#d8d8db",
    buttonBg: "#f0f0f2",
    textActive: "text-[#a1fea0]",
    textInactive: "text-[#a1fea0]/65 hover:text-[#a1fea0]",
    iconColor: "text-[#a1fea0] hover:text-[#008f56]",
  },
}

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "docs",
    label: "Documentation",
    href: "/docs",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
      </svg>
    ),
  },
  {
    id: "privacy",
    label: "Privacy",
    href: "/privacy",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "contribute",
    label: "Contribute",
    href: "/contribute",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

function InnerButtonOverlay({
  isOverlayActive,
  isDarkMode
}) {
  const overlayProgress = useMotionValue(isOverlayActive ? 1 : 0)

  useEffect(() => {
    const controls = animate(overlayProgress, isOverlayActive ? 1 : 0, {
      delay: isOverlayActive ? 0.02 : 0,
      duration: isOverlayActive ? 0.18 : 0.14,
      ease: "easeOut",
    })

    return () => controls.stop()
  }, [isOverlayActive, overlayProgress])

  return (
    <motion.span
      initial={false}
      className="pointer-events-none absolute inset-0 rounded-[10px]"
      animate={
        isOverlayActive
          ? {
              borderWidth: 1,
              borderColor: isDarkMode
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.08)",
            }
          : {
              borderWidth: 0,
              borderColor: "transparent",
              boxShadow: "none",
            }
      }
      transition={{
        borderColor: {
          duration: 0.16,
          ease: "easeOut",
        },
      }}
      style={{
        borderStyle: "solid",
      }}
    />
  )
}

export function GradientButtonGroup() {
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme !== "light"

  // Determine active ID based on current pathname
  const activeId = useMemo(() => {
    if (pathname === "/") return "home"
    if (pathname?.startsWith("/docs")) return "docs"
    if (pathname?.startsWith("/privacy")) return "privacy"
    if (pathname?.startsWith("/contribute")) return "contribute"
    return "home"
  }, [pathname])
  
  const [overlayReadyId, setOverlayReadyId] = useState(activeId)
  const [isGithubHovered, setIsGithubHovered] = useState(false)
  const [hoveredNavId, setHoveredNavId] = useState(null)

  // Update overlay state when active changes
  useEffect(() => {
    setOverlayReadyId(activeId)
  }, [activeId])

  const theme = isDarkMode ? themes.dark : themes.light

  return (
    <div className="pointer-events-auto flex w-full justify-center py-1">
      <div className="inline-flex min-w-max origin-center scale-[0.62] items-center sm:scale-[0.78] md:scale-[0.92] lg:scale-100">
        <div className="relative inline-flex items-center">
          {/* Background tray layer (recessed) - spans full width including theme toggle */}
          <div
            className="absolute inset-0 z-0 rounded-[24px] border transition-colors duration-300"
            style={{
              background: isDarkMode
                ? "linear-gradient(180deg, #17181b 0%, #0e0f11 100%)"
                : "linear-gradient(180deg, #ffffff 0%, #e9eaed 100%)",
              borderColor: isDarkMode
                ? "rgba(255,255,255,0.12)"
                : "rgba(0,0,0,0.12)",
              boxShadow: isDarkMode
                ? "0 10px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)"
                : "0 8px 20px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          />

          {/* Foreground nav layer (raised) - sits on the left */}
          <div className="relative z-10 flex">
            {/* Outer rim/bezel */}
            <div
              className="absolute -inset-[1px] rounded-[24px] border transition-colors duration-300"
              style={{
                background: isDarkMode ? "#0b0c0e" : "#f5f5f7",
                borderColor: isDarkMode
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)",
              }}
            />

            {/* Inner container */}
            <nav
              aria-label="Primary navigation"
              className="relative inline-flex items-center gap-1 rounded-[20px] p-1.5 transition-colors duration-300"
              style={{
                background: isDarkMode
                  ? "#141519"
                  : "#ffffff",
                border: isDarkMode
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.08)",
                boxShadow: isDarkMode
                  ? "inset 0 1px 0 rgba(255,255,255,0.05)"
                  : "0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1)",
              }}
            >
              {navItems.map((item) => {
                const isActive = activeId === item.id
                const isOverlayActive = isActive && overlayReadyId === item.id

                const wellStyle = isDarkMode
                  ? {
                      background: "#090a0c",
                      boxShadow:
                        "inset 0 2px 6px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.04)",
                    }
                  : {
                      boxShadow:
                        "inset 0 2px 6px rgba(0,0,0,0.12), inset 0 0 4px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.9)",
                    }

                const innerGapStyle = isDarkMode
                  ? {
                      background: "#0a0a0d",
                      boxShadow:
                        "inset 0 1px 3px rgba(0,0,0,0.9), inset 0 0 2px rgba(0,0,0,0.6)",
                    }
                  : {
                      boxShadow:
                        "inset 0 1px 3px rgba(0,0,0,0.18), inset 0 0 2px rgba(0,0,0,0.1)",
                    }

                const isNavHovered = hoveredNavId === item.id

                return (
                  <motion.div
                    key={item.id}
                    className="shrink-0"
                    onHoverStart={() => setHoveredNavId(item.id)}
                    onHoverEnd={() => setHoveredNavId(null)}
                    animate={{ width: isNavHovered ? 148 : 76 }}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 28,
                      mass: 0.7,
                    }}
                  >
                  <Link
                    href={item.href}
                    className={cn(
                      "group/nav relative flex h-[76px] w-full items-center justify-center rounded-[18px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6FF7CC] focus-visible:ring-offset-2",
                      isActive ? theme.textActive : theme.textInactive,
                      isNavHovered && "justify-start px-4"
                    )}
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Layered inset effect for active state - animated with layoutId */}
                    {isActive && (
                      <>
                        {/* Inset well/channel - creates the recessed groove */}
                        <motion.span
                          layoutId="active-well"
                          className="bg-muted pointer-events-none absolute inset-0 rounded-[18px] transition-colors duration-300"
                          style={wellStyle}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />

                        {/* Gold ring container */}
                        <motion.span
                          layoutId="active-gold-ring"
                          className="pointer-events-none absolute inset-[2px] rounded-[15px] border-2 border-[#6FF7CC]"
                          onLayoutAnimationComplete={() =>
                            setOverlayReadyId(item.id)
                          }
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        >
                        </motion.span>

                        {/* Inner gap - thin dark channel between gold and button */}
                        <motion.span
                          layoutId="active-inner-ring"
                          className="pointer-events-none absolute inset-[6px] rounded-[12px] transition-colors duration-300"
                          style={innerGapStyle}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      </>
                    )}

                    {/* Inner button background */}
                    <motion.span
                      initial={false}
                      className={cn(
                        "pointer-events-none relative z-10 flex items-center justify-center gap-2 rounded-[10px]",
                        isActive
                          ? "h-[calc(100%-18px)] w-[calc(100%-18px)]"
                          : "h-full w-full"
                      )}
                      animate={
                        isActive
                          ? {
                              scale: 1,
                              opacity: 1,
                            }
                          : {
                              scale: 0.985,
                              opacity: 0.96,
                            }
                      }
                      whileHover={
                        !isActive
                          ? {
                              scale: 1,
                              opacity: 1,
                            }
                          : {}
                      }
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        delay: isActive ? 0.12 : 0,
                      }}
                    >
                      <InnerButtonOverlay
                        isOverlayActive={isOverlayActive}
                        isDarkMode={isDarkMode}
                      />
                      <span className="pointer-events-none relative z-10 transition-transform duration-200 group-hover/nav:scale-110">
                        {item.icon}
                      </span>
                      {isNavHovered && (
                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 32,
                          }}
                          className="whitespace-nowrap text-[13px] font-semibold tracking-[0.04em]"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </motion.span>
                  </Link>
                  </motion.div>
                )
              })}
            </nav>
            {/* GitHub Star button - sits in the recessed tray on the right */}
            <div className="relative z-[1] flex items-center px-4">
              <motion.a
                href="https://github.com/NobinSijo7T/prismspace-web"
                target="_blank"
                rel="noopener noreferrer"
                onHoverStart={() => setIsGithubHovered(true)}
                onHoverEnd={() => setIsGithubHovered(false)}
                animate={{
                  width: isGithubHovered ? 148 : 68,
                  scale: isGithubHovered ? 1.02 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 28,
                  mass: 0.7,
                }}
                className={cn(
                  "group relative flex h-[56px] shrink-0 items-center justify-center gap-1 overflow-hidden rounded-[14px] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6FF7CC] focus-visible:ring-offset-2",
                  theme.iconColor
                )}
                aria-label="Give us a star on GitHub"
              >
                <span className="flex shrink-0 items-center gap-1">
                {/* GitHub Logo */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                  style={{ color: isDarkMode ? "#a1fea0" : "#a1fea0", fill: "currentColor" }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                
                {isGithubHovered && (
                  <motion.svg
                    initial={{ opacity: 0, scale: 0.7, x: -4 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </motion.svg>
                )}
                </span>
                {isGithubHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 32,
                    }}
                    className="whitespace-nowrap text-[11px] font-semibold tracking-[0.04em]"
                  >
                    Give us a star
                  </motion.span>
                )}
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0 lg:hidden" />
    </div>
  )
}

