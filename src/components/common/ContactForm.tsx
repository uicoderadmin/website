"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
import { useState } from "react";

const items = [
  {
    id: "webDesign",
    label: "Web Design",
  },
  {
    id: "mobileAppDesign",
    label: "Mobile App Design",
  },
  {
    id: "logoDesign",
    label: "Logo Design",
  },
  {
    id: "others",
    label: "Others",
  },
] as const;

const FormSchema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You have to select at least one item.",
  }),
  budget: z.tuple([z.number(), z.number()]),
  message: z.string().nonempty("Message is required"),
});

export function ContactForm() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      items: [],
      budget: [4500, 5500],
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    const postData = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postData,
    };
    const response = await fetch(endpoint, options);
    setEmailSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lap:w-3/4 p-6 desk:p-20 lap:mx-auto text-absolute-white lap:border-x lap:border-grey-15 gap-7 desk:gap-10 flex flex-col"
    >
      <div className="flex flex-col lap:flex-row justify-between items-center gap-7 desk:gap-10">
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <div className="flex-auto flex flex-col gap-3 border border-grey-15 bg-[rgba(36,36,36,0.5)] w-full px-6 py-4 desk:px-10 desk:py-6 rounded-lg">
              <label
                htmlFor="fullName"
                className="lap:text-lg desk:text-[22px] desk:leading-8"
              >
                Full Name
              </label>
              <Input
                id="fullName"
                placeholder="Type here"
                className="placeholder:text-grey-40 px-0 lap:text-base desk:text-lg desk:leading-7 rounded-none "
                {...field}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div className="flex-auto flex flex-col gap-3 border border-grey-15 bg-[rgba(36,36,36,0.5)] w-full px-6 py-4 desk:px-10 desk:py-6 rounded-lg">
              <label
                htmlFor="email"
                className="lap:text-lg desk:text-[22px] desk:leading-8"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Type here"
                className="placeholder:text-grey-40 px-0 lap:text-base desk:text-lg desk:leading-7 rounded-none "
                {...field}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          )}
        />
      </div>
      <div className="p-7 desk:p-10 rounded-lg bg-[rgba(36,36,36,0.5)] flex flex-col gap-7 desk:gap-10">
        <p className=" lap:text-lg desk:text-[22px] desk:leading-8">
          Why are you contacting us?
        </p>
        <div className="grid grid-cols-1 lap:grid-cols-2 gap-5 lap:gap-6">
          {items.map((item) => (
            <Controller
              key={item.id}
              name="items"
              control={control}
              render={({ field }) => {
                const isChecked = field.value.includes(item.id);
                return (
                  <div className="flex items-center gap-2.5">
                    <Checkbox
                      className="h-7 w-7 text-grey-20 bg-grey-15"
                      checked={isChecked}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, item.id]
                          : field.value.filter((value) => value !== item.id);
                        field.onChange(newValue);
                      }}
                    />
                    <label className="desk:text-lg">{item.label}</label>
                  </div>
                );
              }}
            />
          ))}
          {errors.items && (
            <p className="text-red-500">{errors.items.message}</p>
          )}
        </div>
      </div>
      <div className="p-6 desk:p-10 rounded-lg  bg-[rgba(36,36,36,0.5)] ">
        <Controller
          name="budget"
          control={control}
          render={({ field }) => (
            <>
              <label
                htmlFor="budget"
                className="block lap:text-lg  desk:text-[22px] desk:leading-8 mb-1.5 desk:mb-3"
              >
                Your Budget
              </label>
              <span className="text-sm lap:text-base desk:text-lg font-normal text-grey-90">
                Slide to indicate your budget range
              </span>
              <Slider
                value={field.value}
                onValueChange={field.onChange}
                min={300}
                max={10000}
                step={100}
                className="py-6 desk:py-12 text-sm"
              />
              {errors.budget && (
                <p className="text-red-500">{errors.budget.message}</p>
              )}
            </>
          )}
        />
      </div>
      <div className="p-6 desk:p-10  bg-[rgba(36,36,36,0.5)]  rounded-lg">
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <>
              <label
                htmlFor="message"
                className="block lap:text-lg desk:text-[22px] desk:leading-8"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="Type here"
                className="placeholder:text-grey-40 px-0 lap:text-base desk:text-lg desk:leading-7 rounded-none "
                {...field}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </>
          )}
        />
      </div>
      <div className="flex justify-center">
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-green-50 text-absolute-black desk:text-lg px-11 py-3 lap:py-4 w-full lap:w-fit text-sm rounded-md hover:bg-green-60 focus:outline-none disabled:bg-grey-40 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
      {emailSubmitted && (
        <p className="text-green-50 text-sm mt-2">Email sent Successfully!</p>
      )}
    </form>
  );
}

export default ContactForm;
