import { A } from "@solidjs/router";
import { Input } from "~/components/ui/input";
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
} from "~/components/ui/number-field";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Finance Tracking
      </h1>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="text-sky-700 text-xl text-start">Description:</p>
          <Input />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-start text-sky-700 text-xl ">Amount:</p>
          <NumberField class="max-w-4xl" defaultValue={0}>
            <div class="relative">
              <NumberFieldInput />
              <NumberFieldIncrementTrigger />
              <NumberFieldDecrementTrigger />
            </div>
          </NumberField>
        </div>
      </div>
    </main>
  );
}
