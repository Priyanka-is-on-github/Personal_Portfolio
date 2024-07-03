"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("k=", process.env.NEXT_PUBLIC_PUBLIC_KEY);

  const sendEmail = (params) => {
    const toastId = toast.loading('sending your message, please wait...')
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          params,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success("I have received your message, I will get back to you soon",{
            id: toastId
          })
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("There was an error sending your message, please try again later!",{
            id: toastId
          })
        }
      );
  };

  const onSubmit = (data) => {
    console.log("d=", data);
    const templateParams = {
      to_name: "priyankasingh8885@gmail.com",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
   <Toaster richColors={true}/>
    <motion.form
      variants={container}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <motion.input
        variants={item}
        type="text"
        placeholder="name"
        {...register("name", { required: true })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

      <motion.input
        variants={item}
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

      <motion.textarea
        variants={item}
        placeholder="message"
        {...register("message", { required: true, max: 256, min: 19 })}
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

      <motion.input
        variants={item}
        type="submit"
        value='submit'
        className="py-4 px-10 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
      />
    </motion.form>

    </>
  );
}
