"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

export default function About() {
  const [isInView, setIsInView] = useState(false);

  return (
    <>
      <h1 className="mt-20 text-center text-4xl font-black text-pm_brown">
        About
      </h1>
      <section className="h-[50rem] w-full text-white md:h-[45rem]">
        <div className="flex h-3/4 w-full flex-col gap-2 py-4 font-bold">
          <div className="grid flex-1 border border-pm_blue bg-pm_brown p-2">
            <p className="text-center text-2xl">Founded In:</p>
            <p className="text-xs md:text-base">
              Pamoja Events,headquartered in Nairobi county,is an
              industry-leading company specializing in delivering uparalleled
              event experiences since our establishment in 2019.We offer a
              comprehensive range of services and products tailored for
              entertainment events,including artist management,stage
              setup,audiovisual solutions.event ticketing,and decor.Pamoja
              Events ensures seamless event management from conception to
              execution,guided by our dedicated team of department managers and
              passionate employees.
            </p>
          </div>
          <div className="grid flex-1 border border-pm_brown bg-pm_blue p-2">
            <p className="text-center text-2xl">Mission:</p>
            <p className="text-xs md:text-base">
              At Pamoja Events,our mission is to curate and execute exceptional
              event experiences that resonate with our diverse audience.We
              strive to elevate entertainment events through innovative
              solutions,seamless execution,and unwavering dedication to customer
              satisfaction.
            </p>
          </div>
          <div className="grid flex-1 border border-pm_blue bg-pm_brown p-2">
            <p className="text-center text-2xl">Vision Statement:</p>
            <p className="text-xs md:text-base">
              Our vision at Pamoja Events is to be the premier choice for event
              management services,setting the standard for excellence in the
              industry.We aspire to continually push boundaries,foster
              creativity,and forge meaningful connections that leave a lasting
              impression on both clients and attendees.
            </p>
          </div>
        </div>
        <Waypoint
          onEnter={() => setIsInView(true)}
          onLeave={() => setIsInView(false)}
        />

        <div className="flex h-1/4 w-full items-center justify-center gap-3 md:flex-row md:gap-6">
          <div className="flex h-28 w-28 flex-col items-center justify-center border-2 border-pm_blue p-2 md:h-48 md:w-48">
            <p className="font-serif text-2xl font-black text-pm_blue md:text-5xl">
              +<CountUp end={isInView ? 5000 : 0} duration={2} />
            </p>
            <p className="text-center text-sm font-bold italic text-pm_blue md:text-base">
              events&nbsp;hosted
              <br />
              since 2020
            </p>
          </div>
          <div className="flex h-28 w-28 flex-col items-center justify-center border-2 border-pm_blue p-2 md:h-48 md:w-48">
            <p className="font-serif text-2xl font-black text-pm_blue md:text-5xl">
              +<CountUp end={isInView ? 1000 : 0} duration={2} />
            </p>
            <p className="text-center text-sm  font-bold italic text-pm_blue md:text-base">
              event <br /> organizers
            </p>
          </div>
          <div className="flex h-28 w-28 flex-col items-center justify-center border-2 border-pm_blue p-2 md:h-48 md:w-48">
            <p className="font-serif text-2xl font-black text-pm_blue md:text-5xl">
              +<CountUp end={isInView ? 15000 : 0} duration={2} />
            </p>
            <p className="text-center text-sm  font-bold italic text-pm_blue md:text-base">
              tickets <br /> sold
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
