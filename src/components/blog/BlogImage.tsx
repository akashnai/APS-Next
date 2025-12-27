import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt?: string;
  alignment?: "center" | "left" | "right";
  width?: number; // Optional, can default
  height?: number;
}

export function BlogImage({ src, alt, alignment = "center", width, height }: BlogImageProps) {
  // Determine container classes based on alignment
  const containerClasses = {
    center: "flex justify-center my-8",
    left: "float-left mr-8 mb-4",
    right: "float-right ml-8 mb-4",
  };

  return (
    <div className={`w-full ${containerClasses[alignment] || containerClasses.center}`}>
      <div className="relative">
        <Image
          src={src}
          alt={alt || ""}
          width={width || 800} // Default reasonable width
          height={height || 600}
          className="rounded-xl w-auto h-auto max-w-full"
        />
      </div>
    </div>
  );
}
