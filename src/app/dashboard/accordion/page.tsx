import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Product Information",
    answer: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability."
  },
  {
    id: "item-2",
    question: "Shipping Details",
    answer: "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days."
  },
  {
    id: "item-3",
    question: "Return Policy",
    answer: "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition."
  }
];

export default function Page() {
  return (
    <div>
      <Accordion
        type="single"
        className="w-full"
      >
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}