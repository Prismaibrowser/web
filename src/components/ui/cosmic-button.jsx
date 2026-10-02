"use client";
import { cn } from "@/lib/utils"

/**
 * An animated button/link with a cosmic gradient border effect.
 * Renders as an anchor by default; use `as="button"` for button behavior.
 */
export function CosmicButton({ as, className, children, ...props }) {
  const Element = as ?? "a"
  const isAnchor = Element === "a"

  const baseClassName = cn(
    "cosmic-button group/cosmic relative inline-flex min-h-11 min-w-11 items-center justify-center gap-3",
    "focus-visible:outline-none",
    className
  )

  const content = (
    <>
      <span className="cosmic-button-border" aria-hidden="true">
        <span className="animate-cosmic-spin cosmic-button-border-beam" />
      </span>
      <span className="cosmic-button-surface">
        <span className="cosmic-button-label">
          {children ?? "Placeholder text"}
        </span>
      </span>
    </>
  )

  if (isAnchor) {
    const { href, rel, target, ...rest } = props
    return (
      <a
        className={baseClassName}
        href={href ?? "https://aisdkagents.com"}
        rel={rel ?? "noopener noreferrer"}
        target={target ?? "_blank"}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return <button className={baseClassName} {...props}>{content}</button>
}
