import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
} from "~/components/ui/number-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function Home() {
  const [value, setValue] = createSignal([]);
  const [expense, setExpense] = createSignal("");

  // function handleSubmit(e: any) {
  //   e.preventDefault();
  //   setExpense("Form has been submitted with with Input: " + value);
  // }
  // function handleChange(e: any) {
  //   setValue(e.target.value);
  //   setExpense("");
  // }

  function handleSubmit() {}

  return (
    <main class="text-center mx-auto text-gray-700 p-4 flex flex-wrap flex-col items-center justify-center">
      <h1 class="text-6xl text-sky-700 font-thin uppercase my-16">
        Finance Tracking
      </h1>
      <form>
        <div class="flex flex-col gap-6 w-full">
          <div class="flex flex-col gap-2">
            <p class="text-sky-700 text-xl text-start">Description:</p>
            <Input value={value()} required />
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
          <div class="flex flex-col gap-2">
            <p class="text-sky-700 text-xl text-start">Categoty:</p>
            <Select
              options={[
                "Housing",
                "Transportation",
                "Groceries",
                "Utilities",
                "Insurance",
                "Healthcare",
                "Student Loans",
                "Personal",
                "Amazon",
              ]}
              placeholder="Select a category..."
              itemComponent={(props) => (
                <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
              )}
            >
              <SelectTrigger aria-label="Finance" class="max-w-4xl">
                <SelectValue<string>>
                  {(state) => state.selectedOption()}
                </SelectValue>
              </SelectTrigger>
              <SelectContent />
            </Select>
          </div>
          <Button variant="outline" class="max-w-xs text-sky-700" type="submit">
            Submit
          </Button>
        </div>
      </form>
      <div>{/* <h4>{value()}</h4> */}</div>
    </main>
  );
}
