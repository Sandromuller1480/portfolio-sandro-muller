type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="champagne-line max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#C6A66B]">{eyebrow}</p> : null}
      <h2 className="font-editorial text-4xl leading-tight text-[#F4F0E8] md:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-lg leading-8 text-[#B9B5AD]">{children}</p> : null}
    </div>
  );
}
