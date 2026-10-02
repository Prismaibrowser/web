"use client";
import { cn } from "@/lib/utils"

function SpeechBubbleRoot({
  className,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      data-slot="speech-bubble"
      className={cn("mr-12", className)}
      {...props}
    />
  )
}

function SpeechBubbleBody({
  className,
  ...props
}) {
  return (
    <div
      data-slot="speech-bubble-body"
      className={cn(
        "relative flex w-fit items-center rounded-full bg-foreground px-6 py-6 text-background transition-colors lg:px-10 lg:py-5",
        className
      )}
      {...props}
    />
  )
}

function SpeechBubbleTail({
  className,
  ...props
}) {
  return (
    <svg
      data-slot="speech-bubble-tail"
      aria-hidden="true"
      className={cn(
        "absolute right-[16px] bottom-[-7px] h-5 w-7 transition-colors",
        className
      )}
      fill="none"
      focusable="false"
      height="20"
      viewBox="0 0 28 20"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      >
        <path
          className="fill-foreground transition-colors"
          d="M0 0H19C19 7 22 14 28 18C18 18 9 14 4 8C2 5 1 2 0 0Z"
        />
    </svg>
  )
}

function SpeechBubbleText({
  className,
  ...props
}) {
  return (
    <h1
      data-slot="speech-bubble-text"
      className={cn(
        "relative text-balance font-semibold text-background text-base leading-[0.9] tracking-[-0.06em] md:text-2xl lg:text-[2rem]",
        className
      )}
      {...props}
    />
  )
}

function SpeechBubbleCursor({
  className,
  ...props
}) {
  return (
    <div
      data-slot="speech-bubble-cursor"
      className={cn(
        "relative ml-2 hidden h-6 w-4 animate-pulse bg-muted-foreground md:block",
        className
      )}
      {...props}
    />
  )
}

function SpeechBubble({
  children,
  className,
  showCursor = true,
  ...props
}) {
  return (
    <SpeechBubbleRoot className={className} {...props}>
      <SpeechBubbleBody>
        <SpeechBubbleTail />
        <SpeechBubbleText>{children}</SpeechBubbleText>
        {showCursor ? <SpeechBubbleCursor /> : null}
      </SpeechBubbleBody>
    </SpeechBubbleRoot>
  )
}

export {
  SpeechBubble,
  SpeechBubbleRoot,
  SpeechBubbleBody,
  SpeechBubbleTail,
  SpeechBubbleText,
  SpeechBubbleCursor,
}
