'use client'

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Loader2Icon, GitBranch } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button> default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => alert("Button clicked!")}>Click me</Button>
      <Button variant="success">success</Button>
      <Button capitalize={false}>capitalize false</Button>

      <Button variant="secondary" size="icon" className="size-8">
        <ChevronRightIcon />
      </Button>

      <Button variant="outline" size="sm">
        <GitBranch /> New Branch
      </Button>

      <Button size="sm" disabled>
        <Loader2Icon className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}