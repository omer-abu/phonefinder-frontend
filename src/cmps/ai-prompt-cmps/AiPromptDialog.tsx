import { forwardRef, useRef } from "react"
import { askLLM } from "../../services/ask-ai.service"
import { useNavigate } from "react-router-dom"
import type { PhoneFilterType } from "../../types/phone"

type AiPromptDialogProps = {
  toggleDialog: () => void
}

function filtersToUrlParams(filterObj: Partial<PhoneFilterType>) {
  const params = new URLSearchParams()

  Object.entries(filterObj).forEach(([key, value]) => {
    if (value === null || value === undefined) return
    params.set(key, String(value))
  })

  return params.toString()
}

const AiPromptDialog = forwardRef<HTMLDialogElement, AiPromptDialogProps>(
  ({ toggleDialog }, dialogRef) => {
    const promptAreaRef = useRef<HTMLTextAreaElement>(null)

    const navigate = useNavigate()

    async function onSubmit() {
      if (!promptAreaRef.current) return

      const prompt = promptAreaRef.current.value
      const llmFilters = await askLLM(prompt)
      const queryString = filtersToUrlParams(llmFilters)
      console.log(queryString)

      navigate(`/phones?${queryString}`, { replace: true })

      if (dialogRef && typeof dialogRef !== "function") {
        dialogRef.current?.close()
      }
    }

    return (
      <dialog
        ref={dialogRef}
        id="ai-prompt-dialog"
        className="inner-shadow"
        onClick={e => {
          if (e.currentTarget === e.target) toggleDialog()
        }}
      >
        <div className="dialog-content">
          <h1>Describe what kind of phone you're looking for!</h1>
          <textarea
            ref={promptAreaRef}
            rows={7}
            cols={1}
            maxLength={512}
          ></textarea>
          <div className="buttons-contaier">
            <button onClick={onSubmit}>Submit</button>
            <button onClick={() => toggleDialog()}>Close</button>
          </div>
        </div>
      </dialog>
    )
  }
)

export default AiPromptDialog
