"use client";
import Image from "next/image";
import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { log } from "three/examples/jsm/nodes/Nodes.js";
import { Canvas } from "@react-three/fiber";
import { Fox } from "@/models/Fox";
import Loader from "@/components/Loader";
import useAlert from "@/hooks/useAlert";
import Alert from "@/components/Alert";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type currentAnimationState = string

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsloading] = useState(false);
  const [currentAnimation, setCurrenAnimation] = useState<currentAnimationState>('idle')
  const {alert, showAlert, hideAlert} = useAlert()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleFocus = () => {setCurrenAnimation('walk')};
  const handleBlur = () => {setCurrenAnimation('idle')};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
    setCurrenAnimation('hit')
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",

        {
          from_name: form.name,
          to_name: "Dulmaa",
          from_email: form.email,
          to_email: "duya0723@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then((result) => {
        console.log(result.text);
        setIsloading(false);
        showAlert({ text: "Message sent successfully!", type: "warning" });

        setTimeout(()=> {
            hideAlert()
            setCurrenAnimation('idle')
            setForm({
                name: "",
                email: "",
                message: "",
              })
        }, 3000)
      })
      .catch((error) => {
        setCurrenAnimation('idle')
        console.error(error.text);
        setIsloading(false);
        showAlert({ text: "I didn't receive your message", type: "warning" });
      });
  };

  return (
    <section className="relative flex flex-col lg:flex-row p-10 max-container lg:h-[100vh]">
        {alert.show && <Alert {...alert}/>}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form className="flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">Name </label>{" "}
          <input
            type="text"
            name="name"
            className="input"
            placeholder="John"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-black-500 font-semibold">Email </label>{" "}
          <input
            type="email"
            name="email"
            className="input"
            placeholder="john@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="text-black-500 font-semibold">Your message </label>{" "}
          <textarea
            name="message"
            rows={4}
            className="input"
            placeholder="Let me know"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
      <Canvas
      camera={{position: [0,0,5],
        fov:75,
        near:0.1,
        far:1000
      }}

      >
        <directionalLight intensity={2.5} position={[0,0,1]} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
            <Fox 
            position={[0.5, 0.35, 0]}
            rotation={[12.6, -0.6,0]}
            scale={[0.5,0.5,0.5]}
            currentAnimation={currentAnimation}/>
        </Suspense>

        </Canvas></div>
    </section>
  );
}
