import { useEffect, useState } from "react";

const slides = [
  "/images/login1.jpg",
  "/images/login2.png",
  "/images/login3.jpg",
];

const AuthSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const time = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      3000
    );
    return () => clearInterval(time);
  }, []);

  return (
    <div className="hidden md:flex items-center justify-center h-full w-full p-5">
      <div className="h-full w-full rounded-3xl overflow-hidden relative shadow-lg">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-5" />
        <img
          key={index}
          src={slides[index]}
          alt={`slide-${index}`}
          className="w-full h-[calc(100dvh-40px)] transition-opacity duration-700 ease-in-out object-cover object-center"
        />

        <div className="absolute z-10 w-full flex flex-col items-center justify-center left-6 bottom-10 text-white max-w-xl">
          <h3 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">
            Create your Account
          </h3>
          <p className="mt-3 text-base md:text-lg drop-shadow-lg">
            Detect your stage of Diabetic Retinopathy early.
          </p>

          <div className="flex items-center gap-3 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSlideshow;
