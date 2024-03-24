import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { useLocalStorage } from "react-use";
import { toast } from "sonner";

export type ReviewTextSelectorProps = {
  productId: string;
  onInputSend: (input: string) => void;
};

export const ReviewTextSelector = (props: ReviewTextSelectorProps) => {
  return (
    <div className="w-full max-w-lg">
      <InputControl onInputSend={props.onInputSend} />
    </div>
  );
};

const InputControl = ({
  onInputSend,
}: {
  onInputSend: (input: string) => void;
}) => {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <Textarea
        placeholder="Write your review here"
        className="w-full bg-accent/50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="default"
        size="sm"
        onClick={() => {
          onInputSend(input);
        }}
      >
        Submit
      </Button>
    </div>
  );
};