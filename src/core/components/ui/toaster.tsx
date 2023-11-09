"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/core/components/ui/toast"
import { useToast } from "@/core/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast className="p-4" key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle className="text-lg font-medium text-slate-800">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-slate-500">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
