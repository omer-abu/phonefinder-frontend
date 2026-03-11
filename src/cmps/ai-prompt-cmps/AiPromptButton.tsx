import { useRef } from "react"
import { Sparkles } from "lucide-react"
import AiPromptDialog from "./AiPromptDialog"

const AiPromptButton = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  function toggleDialog(): void {
    if (!dialogRef.current) return

    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  return (
    <>
      <button
        className="ai-prompt-btn"
        onClick={() => toggleDialog()}
      >
        Ask me for a recommendation!
        <Sparkles />
      </button>

      <AiPromptDialog
        toggleDialog={toggleDialog}
        ref={dialogRef}
      />
    </>
  )
}

export default AiPromptButton
