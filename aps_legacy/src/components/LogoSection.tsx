const logos = [
  { name: "Kobe", width: "w-20" },
  { name: "DK.PEN", width: "w-20" },
  { name: "Hum", width: "w-16" },
  { name: "Oslo", width: "w-20" },
  { name: "Henneky", width: "w-24" },
  { name: "Berlin", width: "w-20" },
  { name: "U-Turn", width: "w-20" },
];

export const LogoSection = () => {
  return (
    <section className=" border-border bg-background py-12 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll w-max">
          {/* Multiple sets for seamless loop on wider screens */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 shrink-0">
              {logos.map((logo) => (
                <div
                  key={`${logo.name}-${i}`}
                  className={`${logo.width} grayscale opacity-50 hover:opacity-75 transition-opacity duration-300 shrink-0`}
                >
                  <div className="flex h-8 items-center justify-center text-lg font-semibold text-foreground whitespace-nowrap">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
