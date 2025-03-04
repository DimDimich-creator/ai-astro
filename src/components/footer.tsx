"use client";
import React from "react";
import { ShimmerDiv } from "./shimmer-div";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer>
      <nav className="z-10 flex fixed bottom-10 items-center justify-center w-full">
        <ShimmerDiv className="shadow-2xl w-full max-w-sm flex gap-4">
          <Button
            className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg z-10"
            aria-label="Prevent"
            variant={"secondary"}
          >
            <ChevronLeft />
          </Button>
          <div>
            <ChevronRight className="text-white" />
          </div>
          <Button
            className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-lg z-10"
            aria-label="Next"
            variant={"secondary"}
          >
            <ChevronRight />
          </Button>
        </ShimmerDiv>
      </nav>
    </footer>
  );
}
